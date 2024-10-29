export const navItems = [
  {name:"Home",link:"/"},
  { name: "About", link: "#about" },
  // { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  {name:"Faq's",link:"#faq"},
  { name: "Contact", link: "#contact" }

  
];

export const gridItems = [
  {
    id: 1,
    title: "Empowering Success Through Transparent Web Development Collaboration with Experienced Freelancing Web Developers",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    // img: "/b1.svg",
    img:"	https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "Connecting Globally for Seamless Web Development.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Elevate Your Brand with Our Web Development Expertise.",
    description: "Lets's",    
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Fueling Innovation Through Our Passion for Full-Stack Development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  // {
  //   id: 5,
  //   title: "Currently building a JS Animation library",
  //   description: "The Inside Scoop",
  //   className: "md:col-span-3 md:row-span-2",
  //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
  //   titleClassName: "justify-center md:justify-start lg:justify-center",
  //   img: "/b5.svg",
  //   spareImg: "/grid.svg",
  // },

  {
    id: 5,
    // title: "Currently building a JS Animation library",
    title: "",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: [],
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to Start a Project Together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Light&hope",
    des: "A healing website built, for client to give visalluy soothing experiance ",
    img: "https://lightandhopewithin.com/_nuxt/green-med.DB3noGOK.jpeg",
    iconLists: ["/Vue.js_Logo_2.svg", "/icon.webp", "/nodejs.svg","/express-js.png","/ts.svg", "/materialui.svg", "/fm.svg"],
    link: "https://lightandhopewithin.com/",
  },
  {
    id: 2,
    title: "QuantSoft",
    des: "A construction consultancy website built for client ,which has professional impact on customers of our clients",
    img: "http://quantsoft.s3-website.eu-north-1.amazonaws.com/_nuxt/consultancy.CpMK9l1X.jpg",
    iconLists: ["/Angular.png","/icon.webp", "/nodejs.svg","/express-js.png","/ts.svg", "/tailwindcss.svg", "/c.svg"],
    link: "http://quantsoft.s3-website.eu-north-1.amazonaws.com/",
  },
  {
    id: 3,
    title: "Renuka Softech ERP Application",
    des: "An ERP application for making client as well as organization transaction smoother and also maintain the data of transactions material warehouse",
    img: "https://www.renukasoftec.com/Home/05be81120471442ea3e982d7e3aedd58.jpg",
    iconLists: ["/re.svg","/next.svg","/redux.png","/Bootstrap_logo.svg","/javascript.svg", "/materialui.svg"],
    link: "https://www.renukasoftec.com/",
  },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  

  {
    quote:"GlobalWebMinds is a trailblazer in website and web application development. Their innovative solutions are truly transformative and consistently exceed my expectations. Working with them on my healing website, Light and Hope, built with Nuxt.js, has been an exceptional experience. The website not only looks stunning but also delivers a smooth, user-friendly interface. The team’s support is outstanding, offering knowledgeable assistance 24/7. I’m thankful for their expertise, which made this journey remarkable!",
    name: "Nastran",
    title: "Founder of light&Hope ,ISRAEL",
  },
  {
    quote:"GlobalWebMinds revolutionized my business with their expertly developed websites and web applications. Their solutions significantly increased output and boosted efficiency, particularly through the full-stack app they built for QuantSoft, our project consultancy company. They effectively addressed our unique challenges and offered tailored solutions that enhanced our performance beyond my expectations. Their expertise and dedication have truly transformed the way we operate!",
    name: "Archita Mittal",
    title: "CEO of Quantsoft,Pune",
  },
  {
    quote:"GlobalWebMinds delivered a cost-effective solution tailored to my needs. The customized ERP web app they built for RenukaSoft has made a tangible difference, significantly improving outcomes for my business. Their attention to detail and commitment to excellence not only saved me money but also provided real value for my investment. Working with them has been a transformative experience!",
    name: "Manish kothalkar",
    title: "Managing partner at Renukasoftec,Indore",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Innovative Web Development Solutions",
    desc: "We develop tailored web solutions designed to achieve measurable results, helping your business excel in today’s competitive digital landscape.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Collaborative Web Development Excellence",
    desc: "Our collaborative web development process aligns with your vision, fostering innovation and ensuring we achieve shared goals together.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Future-Ready Web Development",
    desc: "We utilize the latest technologies and best practices in web development to deliver scalable, secure, and adaptable solutions that evolve with your business needs.",
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: " Unlock Your Business Potential",
    desc: ` Ignite your growth! Partner with us on a transformative web experience 👇click to elevate your brand's future.`,
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  }
  
];

export const socialMedia = [
  // {
  //   id: 1,
  //   img: "/git.svg",
  // },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
