"use client";

import { useEffect, useRef } from "react";

const VERTEX = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;

// Slow domain-warped noise: a field of ultramarine silk, darkest where the nav sits.
const FRAGMENT = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 r;uniform float t;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float b(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p=p*2.03+vec2(11.,7.);a*=.5;}return v;}
void main(){
  vec2 uv=gl_FragCoord.xy/r;
  vec2 p=uv*vec2(r.x/r.y,1.);
  vec2 q=vec2(b(p*1.05+vec2(t*.035,0.)),b(p*1.05+vec2(4.,-t*.028)));
  float f=b(p*1.2+q*2.1);
  vec3 deep=vec3(.006,.05,.42),base=vec3(.016,.176,.82),lift=vec3(.12,.31,1.);
  vec3 c=mix(deep,base,smoothstep(.22,.56,f));
  c=mix(c,lift,smoothstep(.56,.86,f)*.75);
  c*=mix(1.06,.8,smoothstep(.1,1.,uv.y));
  c+=(h(gl_FragCoord.xy+fract(t))-.5)*.016;
  gl_FragColor=vec4(c,1.);
}`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
}

/** Decorative WebGL backdrop. The parent's solid brand colour is the no-WebGL fallback. */
export function HeroField({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas?.getContext("webgl", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!canvas || !gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    const program = gl.createProgram();
    if (!vs || !fs || !program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.bindAttribLocation(program, 0, "p");
    gl.vertexAttribPointer(gl.getAttribLocation(program, "p"), 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "r");
    const uTime = gl.getUniformLocation(program, "t");

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = true;
    const started = performance.now();

    const draw = (now: number) => {
      gl.uniform1f(uTime, still ? 12 : 12 + (now - started) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const loop = (now: number) => {
      draw(now);
      if (visible && !still) raf = requestAnimationFrame(loop);
    };
    const resize = () => {
      // The field is soft, so a reduced buffer is invisible and keeps the GPU cool.
      const scale = Math.min(window.devicePixelRatio, 1.5) * 0.6;
      canvas.width = Math.round(canvas.clientWidth * scale);
      canvas.height = Math.round(canvas.clientHeight * scale);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      draw(performance.now());
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const viewObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !still) raf = requestAnimationFrame(loop);
    });
    viewObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      viewObserver.disconnect();
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
