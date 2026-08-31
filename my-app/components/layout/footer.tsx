export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end z-10 relative">
        <div className="mb-12 md:mb-0">
          <h2 className="text-sm font-semibold tracking-widest uppercase mb-4 opacity-80">
            Think Beyond.
          </h2>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none mb-8">
            Thank You.
          </h1>
          <div className="flex flex-col space-y-2 text-sm md:text-base font-medium opacity-90">
            <p>+91 72081 98797</p>
            <p>www.thinkuntapd.com</p>
            <p>mahek@thinkuntapd.com</p>
          </div>
        </div>
        
        <div className="text-sm opacity-60 font-medium">
          © {new Date().getFullYear()} Untapd. All rights reserved.
        </div>
      </div>
      
      {/* Abstract decorative shape for that premium feel */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
    </footer>
  );
}
