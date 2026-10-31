// All home page copy lives here. Everything is taken from the Untapd company profile
// (pdf_text.txt) or the existing site, so claims stay consistent with the deck.

export const heroCopy =
  "Strategic marketing leadership that builds predictable growth systems — not short-term wins. We partner with ambitious founders to scale revenue and build category-defining brands.";

export const manifesto =
  "We partner with ambitious brands to solve complex challenges, uncover new opportunities and build strategies that drive measurable results.";

export const stats = [
  { value: 40, suffix: "+", label: "Brands partnered" },
  { value: 8, suffix: "+", label: "Industries served" },
  { value: 100, suffix: "%", label: "Outcome-obsessed" },
];

export const shift = [
  { from: "Campaign-led thinking", to: "Outcome-led strategy" },
  { from: "Siloed deliverables", to: "Integrated ecosystem" },
  { from: "Activity reporting", to: "Revenue accountability" },
  { from: "Vendor relationships", to: "Leadership partnership" },
  { from: "One-off wins", to: "Repeatable growth engines" },
];

export const vcmoScope = [
  {
    title: "Strategy",
    items: ["Brand Positioning", "Market Research", "Competitive Analysis", "GTM Strategy", "Roadmap Planning"],
  },
  {
    title: "Execution",
    items: ["Campaign Management", "Content Direction", "Performance Marketing", "Agency Coordination", "Creative QA"],
  },
  {
    title: "Growth",
    items: ["Funnel Optimization", "Retention Systems", "Channel Expansion", "ROI Tracking", "Quarterly Planning"],
  },
];

export const brandCapabilities = [
  { title: "Brand Identity", desc: "Positioning, messaging, architecture, visual systems." },
  { title: "Campaigns", desc: "Concept → creative → distribution, end to end." },
  { title: "Digital Presence", desc: "Website, social, content, community." },
  { title: "Growth Marketing", desc: "SEO, performance, lifecycle, CRO." },
];

export const filmOpportunities = [
  "Film Integrations",
  "OTT Integrations",
  "Celebrity Collaborations",
  "Sports Partnerships",
  "IPL Associations",
];

export const filmPosters = [
  { src: "/images/in-film/opp_1.png", alt: "Dhamaal 4 film poster", caption: "Dhamaal 4", width: 480, height: 600 },
  { src: "/images/in-film/opp_2.png", alt: "Salman Khan SVC63 film poster", caption: "Salman Khan — SVC63", width: 479, height: 559 },
];

export const filmWork = [
  { src: "/images/extracted/page_29_img_3.png", alt: "ONLY campaign featuring Ananya Panday", caption: "ONLY" },
  { src: "/images/extracted/page_29_img_2.png", alt: "KFC campaign partnership", caption: "KFC" },
  { src: "/images/extracted/page_29_img_1.jpeg", alt: "Hardik's Favourite noodles and pasta", caption: "Hardik’s Favourite" },
];

export const cases = [
  {
    brand: "Grubwala",
    tag: "D2C · Food",
    line: "Your everyday food partner — a D2C launch in hyper-competitive Mumbai.",
    hero: "₹2L → ₹8L",
    heroLabel: "MRR scaled",
    metrics: [
      { value: "5×", label: "Growth in daily orders" },
      { value: "5,200+", label: "Downloads in 45 days" },
      { value: "₹0.17", label: "CPL, at its lowest" },
    ],
    image: "/images/extracted/page_16_img_2.png",
    imageAlt: "The n8n workflow behind Grubwala's WhatsApp and email onboarding",
  },
  {
    brand: "Tripy",
    tag: "Travel · Community",
    line: "Carving a niche in a saturated travel category, repositioned around group travel.",
    hero: "10K+",
    heroLabel: "App downloads at launch",
    metrics: [
      { value: "19", label: "Influencers onboarded" },
      { value: "Zero", label: "Paid ads" },
    ],
    image: "/images/extracted/page_17_img_1.png",
    imageAlt: "The Tripy app shown on two phones",
  },
  {
    brand: "Mantraa",
    tag: "Finance · SEO",
    line: "Rebuilt the organic engine from the ground up, turning a stagnant site into a growth channel.",
    hero: "10×",
    heroLabel: "Growth in organic traffic",
    metrics: [
      { value: "104", label: "New keywords ranked" },
      { value: "100+", label: "Quality backlinks" },
      { value: "10.3%", label: "Average CTR" },
    ],
    image: "/images/extracted/page_22_img_2.png",
    imageAlt: "Search Console chart showing Mantraa's organic growth",
  },
  {
    brand: "Yalla Haji",
    tag: "Travel · Organic",
    line: "A category-defining content engine for Hajj & Umrah audiences, without traditional paid push.",
    hero: "4M+",
    heroLabel: "Users reached organically",
    metrics: [
      { value: "26.7K", label: "Followers in 6 months" },
      { value: "10K+", label: "Pre-launch audience" },
    ],
    image: "/images/extracted/page_23_img_1.png",
    imageAlt: "The Yalla Haji Instagram profile",
  },
  {
    brand: "Goready",
    tag: "Beauty · SEO",
    line: "SEO and website revamp for your neighbourhood beauty parlour.",
    hero: "20%",
    heroLabel: "Estimated increase in sales",
    metrics: [
      { value: "SEO", label: "Technical issues resolved" },
      { value: "Links", label: "High-quality backlinks built" },
    ],
    image: "/images/extracted/page_24_img_1.png",
    imageAlt: "Organic traffic growth for Goready",
  },
];

export const outcomes = [
  "Scale revenue",
  "Improve customer acquisition",
  "Build stronger brand recall",
  "Create long-term enterprise value",
  "Unlock strategic partnerships",
  "Optimize marketing budgets",
];

// [file id, width, height] of each mask in /images/brands/mono
export const brandLogos: [number, number, number][][] = [
  [[1, 258, 160], [3, 393, 160], [21, 689, 160], [27, 917, 160], [28, 323, 79], [7, 481, 160], [14, 161, 160], [10, 779, 160]],
  [[22, 605, 160], [11, 150, 53], [15, 697, 160], [18, 473, 160], [24, 627, 122], [30, 518, 160], [25, 272, 116], [6, 444, 154]],
];

export const team = [
  { name: "Mahek Solanki", role: "Founder & CEO", img: "/images/team/team_2.jpeg", position: "29% 50%", zoom: 2.1, origin: "50% 62%" },
  { name: "Hrithish Raj", role: "Business Development", img: "/images/team/team_4.jpeg", position: "50% 20%", zoom: 1.5, origin: "50% 12%" },
  { name: "Bhavya Sharma", role: "Graphic Designer & Editor", img: "/images/team/team_6.png", position: "50% 20%", zoom: 1, origin: "50% 50%" },
  { name: "Bhavya Agarwal", role: "Brand Strategist", img: "/images/team/team_1.jpeg", position: "50% 30%", zoom: 1, origin: "50% 50%" },
  { name: "Abbas Bharmal", role: "Digital Marketing Executive", img: "/images/team/team_3.jpeg", position: "50% 40%", zoom: 1.35, origin: "50% 50%" },
  { name: "Tanya Dhamija", role: "Social Media Strategist", img: "/images/team/team_5.jpeg", position: "50% 25%", zoom: 1.5, origin: "40% 15%" },
];

export const ecosystem = [
  "Strategic Advisor Sessions",
  "Strategic Partnerships",
  "Founder Meetups",
  "Investor Access",
  "Incubation Network Access",
  "First Access to In-Film Opportunities",
];

export const advisors = [
  { name: "Nilesh Gupta", role: "Former CMO, Pidilite", focus: "Consumer Marketing Leader · Brand Scale Specialist" },
  { name: "Siddharth Parnerker", role: "Ex. Vodafone", focus: "Brand Strategy · Growth Advisory" },
  { name: "Mariam", role: "Former CMO, House of Biryani", focus: "Consumer Growth · Food & Hospitality Specialist" },
];
