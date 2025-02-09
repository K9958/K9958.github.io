(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{8631:(e,t,a)=>{Promise.resolve().then(a.bind(a,1380))},1380:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>E});var i=a(5155),n=a(5683),r=a(6046),o=a(2115),s=a(2698),l=a(3583),c=a.n(l),d=a(5565);let m=e=>{let{title:t,description:a,tech:n,image:r,link:o}=e;return(0,i.jsxs)(s.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},whileHover:{y:-5},transition:{duration:.3},className:"bg-[#252526] rounded-lg overflow-hidden hover:shadow-xl transition-shadow",children:[(0,i.jsx)("div",{className:"relative h-48 w-full",children:(0,i.jsx)(d.default,{src:r,alt:t,fill:!0,className:"object-cover"})}),(0,i.jsxs)("div",{className:"p-6",children:[(0,i.jsx)("h3",{className:"text-xl font-semibold mb-2 ".concat(c().className),children:t}),(0,i.jsx)("p",{className:"text-gray-400 mb-4 text-sm",children:a}),(0,i.jsx)("div",{className:"flex flex-wrap gap-2 mb-4",children:n.map((e,t)=>(0,i.jsx)("span",{className:"text-xs px-2 py-1 bg-[#2d2d2e] rounded-full text-gray-300",children:e},t))}),(0,i.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"text-sm text-blue-400 hover:text-blue-300 transition-colors",children:"View Project →"})]})]})};function p(){return(0,i.jsxs)(s.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"w-full max-w-6xl",children:[(0,i.jsx)("h2",{className:"text-4xl ".concat(c().className," mb-8"),children:"Portfolio"}),(0,i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[{title:"Portfolio Website",description:"Modern portfolio website built with Next.js, featuring responsive design, animations, and dynamic content management. Implements modern web development practices.",tech:["Next.js","JavaScript","TailwindCSS"],image:"/proj_nextjsportfolio.png",link:"https://github.com/K9958/K9958.github.io",website:"https://k9958.github.io/"},{title:"Web Development Course Project",description:"A responsive portfolio website built during my web development studies, featuring modern design principles, animations and interactive elements.",tech:["HTML","CSS","JavaScript"],image:"/proj_webharjoitustyo.png",link:"https://student.labranet.jamk.fi/~K9958/index.html",website:"https://student.labranet.jamk.fi/~K9958/index.html"},{title:"Unity Space Shooter Game",description:"A top-down 2.5D space shooter game developed as a one-week sprint project for JAMK's Basics of Game Programming course. Built as a freemium game demo showcasing core gameplay mechanics and space shooter elements.",tech:["Unity","C#"],image:"/proj_void.png",link:"https://github.com/SG-01-Productions/bgp-sprint-01",website:"https://sg-01-productions.github.io/bgp-sprint-01/"},{title:"E-commerce Platform",description:"A modern e-commerce platform with advanced filtering, search, and payment processing capabilities.",tech:["React","Redux","Node.js","MongoDB"],image:"/project3.jpg",link:"https://github.com/yourusername/project3",website:"https://example-ecommerce.com"},{title:"Weather Dashboard",description:"A weather monitoring dashboard with interactive maps and real-time weather data visualization.",tech:["Vue.js","D3.js","Express","Weather API"],image:"/project4.jpg",link:"https://github.com/yourusername/project4",website:"https://example-weather.com"}].map((e,t)=>(0,i.jsx)(s.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:(0,i.jsx)(m,{...e})},e.title))})]})}var x=a(322),h=a.n(x);function u(){return(0,i.jsx)(s.P.div,{initial:{opacity:1},animate:{opacity:1},exit:{opacity:0,transition:{duration:.5}},children:(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row-reverse gap-6 sm:gap-20 lg:gap-40 items-center justify-center w-full h-full",children:[(0,i.jsx)(s.P.div,{initial:{opacity:0,y:"15%"},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"lg:hidden h-[40vh] flex items-center justify-center",children:(0,i.jsx)(d.default,{src:"/profilephoto.png",alt:"Profile photo",width:500,height:500,className:"h-full w-auto max-h-[600px] object-contain"})}),(0,i.jsx)(s.P.div,{initial:{opacity:0,x:"-15%"},animate:{opacity:1,x:0},transition:{duration:.8,ease:"easeOut"},className:"hidden lg:flex h-auto items-center justify-center",children:(0,i.jsx)(d.default,{src:"/profilephoto.png",alt:"Profile photo",width:500,height:500,className:"h-full w-auto max-h-[600px] object-contain"})}),(0,i.jsxs)(s.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.8},className:"flex flex-col gap-4",children:[(0,i.jsx)(s.P.h1,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:1},className:"text-5xl sm:text-6xl font-bold ".concat(h().className," text-white"),children:"Kristian Kantola"}),(0,i.jsx)(s.P.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:1.3},className:"text-2xl text-gray-300 font-light",children:"Programmer"}),(0,i.jsx)(s.P.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:1.6},className:"text-gray-400 max-w-lg leading-relaxed",children:"Software developer with a strong focus on application development and modern web technologies. I actively follow the latest advancements in tech and strive to stay ahead of the curve. I enjoy tackling challenges, learning new things, and optimizing workflows with CI/CD, automation, and agile methodologies. I enjoy being part of projects where I can apply my technical knowledge while growing as a developer."})]})]})})}var g=a(7313),f=a.n(g);let y=()=>{let[e,t]=(0,o.useState)({name:"",email:"",message:""}),[a,n]=(0,o.useState)(""),r=async a=>{a.preventDefault(),n("sending");try{if((await fetch("https://formspree.io/f/mvgzqlqy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)n("success"),t({name:"",email:"",message:""});else throw Error("Failed to send message")}catch(e){console.error("Error:",e),n("error")}};return(0,i.jsxs)("form",{onSubmit:r,className:"space-y-6",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-300 mb-2",children:"Name"}),(0,i.jsx)("input",{type:"text",id:"name",required:!0,className:"w-full px-4 py-2 bg-[#2d2d2e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-700",value:e.name,onChange:a=>t({...e,name:a.target.value})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300 mb-2",children:"Email"}),(0,i.jsx)("input",{type:"email",id:"email",required:!0,className:"w-full px-4 py-2 bg-[#2d2d2e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-700",value:e.email,onChange:a=>t({...e,email:a.target.value})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-300 mb-2",children:"Message"}),(0,i.jsx)("textarea",{id:"message",required:!0,rows:4,className:"w-full px-4 py-2 bg-[#2d2d2e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-700",value:e.message,onChange:a=>t({...e,message:a.target.value})})]}),(0,i.jsx)("button",{type:"submit",disabled:"sending"===a,className:"w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 border-gray-700",children:"sending"===a?"Sending...":"Send Message"}),"success"===a&&(0,i.jsx)("p",{className:"text-green-500 text-center",children:"Message sent successfully!"}),"error"===a&&(0,i.jsx)("p",{className:"text-red-500 text-center",children:"Failed to send message. Please try again."})]})};function b(){return(0,i.jsxs)(s.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"w-full max-w-xl",children:[(0,i.jsx)("h2",{className:"text-4xl ".concat(f().className," mb-8"),children:"Contact"}),(0,i.jsx)("p",{className:"text-gray-400 mb-8",children:"Got a project or opportunity in mind? I'd love to hear about it and will respond promptly."}),(0,i.jsx)(y,{})]})}var j=a(2784),w=a.n(j);let v=e=>{let{year:t,title:a,company:n,duration:r,description:o,isEducation:l}=e;return(0,i.jsxs)(s.P.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},className:"flex gap-6 relative",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsx)("div",{className:"w-3 h-3 ".concat(l?"bg-purple-400":"bg-blue-400"," rounded-full z-10 \n          ").concat(l?"ring-2 ring-purple-400 ring-opacity-50":"")}),(0,i.jsx)("div",{className:"w-0.5 h-full bg-gray-700 -mt-1.5"})]}),(0,i.jsxs)("div",{className:"flex-1 pb-12",children:[(0,i.jsxs)("div",{className:"flex flex-wrap items-baseline gap-x-3 mb-2",children:[(0,i.jsx)("span",{className:"font-medium ".concat(l?"text-purple-400":"text-blue-400"),children:t}),(0,i.jsx)("h3",{className:"text-xl text-white ".concat(w().className),children:a}),(0,i.jsxs)("span",{className:"text-gray-400",children:["@ ",n]}),l&&(0,i.jsx)("span",{className:"text-xs px-2 py-0.5 rounded-full bg-purple-400 bg-opacity-20 text-purple-300 border border-purple-400 border-opacity-30",children:"Education"})]}),(0,i.jsx)("span",{className:"text-sm text-gray-500 block mb-2",children:r}),(0,i.jsx)("p",{className:"".concat(l?"text-purple-100":"text-gray-300"),children:o})]})]})};function N(){return(0,i.jsxs)(s.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"w-full max-w-3xl",children:[(0,i.jsx)("h2",{className:"text-4xl ".concat(w().className," mb-12"),children:"Timeline"}),(0,i.jsx)("div",{className:"space-y-2",children:[{year:"2024",title:"Software Developer",company:"Project Pocket App",duration:"September 2024 ->",description:"Working as a software developer in a small startup project developing a mobile and web application, while conducting thesis research for the project. Technologies include Kotlin, JavaScript, and Ruby on Rails. Participating in programming, product development and design."},{year:"2020",title:"Bachelor of Engineering, ICT",company:"JAMK University of Applied Sciences",duration:"2020 ->",description:"Information and Communication Technology studies. Aiming to graduate as a Bachelor of Engineering in ICT. Focus on software and web development.",isEducation:!0},{year:"2016",title:"Sales Negotiator",company:"Buusteri Oy",duration:"Summer 2016",description:"Sales negotiation responsibilities"},{year:"2016",title:"Kindergarten Worker",company:"P\xe4iv\xe4koti Lammastarha Oy",duration:"2016",description:"Work trial as a kindergarten worker"},{year:"2014",title:"Element Worker",company:"Lujabetoni Oy Siilinj\xe4rvi",duration:"2014",description:"Internship as a concrete element worker"},{year:"2014",title:"Plastic Worker",company:"Rotomon Oy",duration:"Summer 2014",description:"Plastic manufacturing worker responsibilities"},{year:"2013",title:"High School Diploma",company:"Kangasniemi High School",duration:"2013",description:"Upper secondary education completed with matriculation examination",isEducation:!0}].map((e,t)=>(0,i.jsx)(s.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1*t},children:(0,i.jsx)(v,{...e})},"".concat(e.title,"-").concat(e.year)))})]})}var k=a(8173),P=a.n(k);function S(e){let{isActive:t}=e;return(0,i.jsxs)("footer",{className:"flex gap-4 sm:gap-10 flex-wrap items-center justify-center py-6 bg-gradient-to-b from-transparent to-[#151515]",children:[(0,i.jsx)(P(),{onClick:()=>window.scrollTo(0,0),className:"text-[0.85rem] sm:text-lg font-light tracking-wider transition-all duration-200 border-b-2 \n            ".concat(t("me")?"text-white font-normal border-blue-400":"text-gray-400 hover:text-gray-200 border-transparent"),href:"/",children:"Me"}),(0,i.jsx)(P(),{onClick:()=>window.scrollTo(0,0),className:"text-[0.85rem] sm:text-lg font-light tracking-wider transition-all duration-200 border-b-2 \n            ".concat(t("portfolio")?"text-white font-normal border-blue-400":"text-gray-400 hover:text-gray-200 border-transparent"),href:"/?section=portfolio",children:"Portfolio"}),(0,i.jsx)(P(),{onClick:()=>window.scrollTo(0,0),className:"text-[0.85rem] sm:text-lg font-light tracking-wider transition-all duration-200 border-b-2 \n            ".concat(t("cv")?"text-white font-normal border-blue-400":"text-gray-400 hover:text-gray-200 border-transparent"),href:"/?section=cv",children:"Curriculum"}),(0,i.jsx)(P(),{onClick:()=>window.scrollTo(0,0),className:"text-[0.85rem] sm:text-lg font-light tracking-wider transition-all duration-200 border-b-2 \n            ".concat(t("contact")?"text-white font-normal border-blue-400":"text-gray-400 hover:text-gray-200 border-transparent"),href:"/?section=contact",children:"Contact"})]})}let C=e=>{let{section:t}=e;return t&&"me"!==t?"portfolio"===t?(0,i.jsx)(p,{}):"cv"===t?(0,i.jsx)(N,{}):"contact"===t?(0,i.jsx)(b,{}):void 0:(0,i.jsx)(u,{})};function T(){let e=(0,r.useSearchParams)().get("section");return(0,o.useEffect)(()=>{let e=setTimeout(()=>{let e=document.querySelector("main");e&&(e.scrollTop=0)},500);return()=>clearTimeout(e)},[e]),(0,i.jsxs)("div",{className:"h-screen flex flex-col bg-gradient-to-br from-[#181818] via-[#2a2a2b] to-[#151515] overflow-hidden",children:[(0,i.jsx)("main",{className:"flex-1 overflow-y-auto px-8 pb-10 pt-8 sm:px-20 sm:pt-20",children:(0,i.jsx)("div",{className:"min-h-full flex items-center justify-center",children:(0,i.jsx)(n.N,{mode:"wait",children:(0,i.jsx)(C,{section:e},e||"home")})})}),(0,i.jsx)(S,{isActive:t=>"me"===t&&!e||e===t})]})}function E(){return(0,i.jsx)(o.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:(0,i.jsx)(T,{})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[319,503,441,517,358],()=>t(8631)),_N_E=e.O()}]);