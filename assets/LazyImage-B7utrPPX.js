import{j as e}from"./index-DC79M6wk.js";import{r as t}from"./react-vendor-B8eYC9Le.js";function r({src:r,alt:s,className:A=""}){const[a,o]=t.useState("data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="),[n,i]=t.useState(null),[c,u]=t.useState(!1);return t.useEffect((()=>{let e,t=!1;return n&&a!==r&&(IntersectionObserver?(e=new IntersectionObserver((e=>{e.forEach((e=>{!t&&(e.intersectionRatio>0||e.isIntersecting)&&o(r)}))}),{threshold:.01,rootMargin:"75%"}),e.observe(n)):o(r)),()=>{t=!0,e&&e.unobserve&&n&&e.unobserve(n)}}),[r,a,n]),e.jsx("img",{ref:i,src:a,alt:s,className:`${A} ${c?"opacity-100":"opacity-0"} transition-opacity duration-300`,onLoad:()=>u(!0)})}export{r as L};
