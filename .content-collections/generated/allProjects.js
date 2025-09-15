
export default [
  {
    "title": "Duitkas",
    "icon": "/projects/duitkas.png",
    "date": "2025-08-20",
    "summary": "Aplikasi pengelola keuangan.",
    "tech": [
      "React (Vite)",
      "TypeScript",
      "Material UI",
      "React Form"
    ],
    "cover": "/projects/duitkas-showcase.png",
    "featured": true,
    "externalUrl": "https://duitkas-dashboard-one.vercel.app/",
    "content": "![Duitkas showcase](/projects/duitkas-showcase.png \"Duitkas\")\n\n<Title>Konteks💡</Title>\n\nDuitkas adalah aplikasi pengelola keuangan.\nKunci dari pembuatan ini adalah bagaimana saya membuat tampilan yang kompleks dan memperbaiki apakah desain yang dibuat oleh UI/UX cocok untuk pengalaman pengguna atau tidak.\n\n<Title>Arsitektur Singkat 🏗️</Title>\n\n<div className=\"flex flex-col gap-2 p-2\">\n  <List>Atomic Design.</List>\n</div>\n\n<Link href=\"https://duitkas-dashboard-one.vercel.app/\">Lihat Demo</Link>",
    "_meta": {
      "filePath": "duitkas.mdx",
      "fileName": "duitkas.mdx",
      "directory": ".",
      "extension": "mdx",
      "path": "duitkas"
    },
    "mdx": "var Component=(()=>{var m=Object.create;var r=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty;var x=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),b=(n,e)=>{for(var t in e)r(n,t,{get:e[t],enumerable:!0})},c=(n,e,t,o)=>{if(e&&typeof e==\"object\"||typeof e==\"function\")for(let i of k(e))!f.call(n,i)&&i!==t&&r(n,i,{get:()=>e[i],enumerable:!(o=h(e,i))||o.enumerable});return n};var _=(n,e,t)=>(t=n!=null?m(g(n)):{},c(e||!n||!n.__esModule?r(t,\"default\",{value:n,enumerable:!0}):t,n)),j=n=>c(r({},\"__esModule\",{value:!0}),n);var d=x((L,l)=>{l.exports=_jsx_runtime});var D={};b(D,{default:()=>u});var a=_(d());function p(n){let e={img:\"img\",p:\"p\",...n.components},{Link:t,List:o,Title:i}=e;return t||s(\"Link\",!0),o||s(\"List\",!0),i||s(\"Title\",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{src:\"/projects/duitkas-showcase.png\",alt:\"Duitkas showcase\",title:\"Duitkas\"})}),`\n`,(0,a.jsx)(i,{children:\"Konteks\\u{1F4A1}\"}),`\n`,(0,a.jsx)(e.p,{children:`Duitkas adalah aplikasi pengelola keuangan.\nKunci dari pembuatan ini adalah bagaimana saya membuat tampilan yang kompleks dan memperbaiki apakah desain yang dibuat oleh UI/UX cocok untuk pengalaman pengguna atau tidak.`}),`\n`,(0,a.jsx)(i,{children:\"Arsitektur Singkat \\u{1F3D7}\\uFE0F\"}),`\n`,(0,a.jsx)(\"div\",{className:\"flex flex-col gap-2 p-2\",children:(0,a.jsx)(o,{children:\"Atomic Design.\"})}),`\n`,(0,a.jsx)(t,{href:\"https://duitkas-dashboard-one.vercel.app/\",children:\"Lihat Demo\"})]})}function u(n={}){let{wrapper:e}=n.components||{};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}function s(n,e){throw new Error(\"Expected \"+(e?\"component\":\"object\")+\" `\"+n+\"` to be defined: you likely forgot to import, pass, or provide it.\")}return j(D);})();\n;return Component;"
  },
  {
    "title": "VerseYou",
    "icon": "/projects/verseyou.png",
    "date": "2025-08-20",
    "summary": "Social music feed dengan Spotify API, dan OG-image generator.",
    "tech": [
      "Next.js",
      "TypeScript",
      "NextAuth",
      "MongoDB",
      "Spotify API"
    ],
    "cover": "/images/projects/verseyou-cover.png",
    "featured": true,
    "externalUrl": "https://verseyou.example.com",
    "content": "<Title>Konteks💡</Title>\n\nVerseYou adalah eksperimen social music dengan feed real-time dan theming dinamis.\n\n<Title>Arsitektur Singkat 🏗️</Title>\n\n<div className=\"flex flex-col gap-2 p-2\">\n  <List>App Router, RSC, ISR.</List>\n  <List>API Routes untuk integrasi Spotify & NextAuth.</List>\n</div>\n\n<Title>Fitur Utama 🎉</Title>\n\n<div className=\"flex flex-col gap-2 p-2\">\n  <List>Feed real-time.</List>\n  <List>Theming dinamis.</List>\n  <List>Integrasi Spotify.</List>\n  <List>Integrasi NextAuth.</List>\n</div>\n\n<Link href=\"https://verseyou.example.com\">Lihat Demo</Link>",
    "_meta": {
      "filePath": "verseyou.mdx",
      "fileName": "verseyou.mdx",
      "directory": ".",
      "extension": "mdx",
      "path": "verseyou"
    },
    "mdx": "var Component=(()=>{var u=Object.create;var s=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var k=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),_=(e,n)=>{for(var i in n)s(e,i,{get:n[i],enumerable:!0})},a=(e,n,i,r)=>{if(n&&typeof n==\"object\"||typeof n==\"function\")for(let o of f(n))!g.call(e,o)&&o!==i&&s(e,o,{get:()=>n[o],enumerable:!(r=p(n,o))||r.enumerable});return e};var j=(e,n,i)=>(i=e!=null?u(x(e)):{},a(n||!e||!e.__esModule?s(i,\"default\",{value:e,enumerable:!0}):i,e)),y=e=>a(s({},\"__esModule\",{value:!0}),e);var d=k((R,l)=>{l.exports=_jsx_runtime});var L={};_(L,{default:()=>h});var t=j(d());function m(e){let n={p:\"p\",...e.components},{Link:i,List:r,Title:o}=n;return i||c(\"Link\",!0),r||c(\"List\",!0),o||c(\"Title\",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{children:\"Konteks\\u{1F4A1}\"}),`\n`,(0,t.jsx)(n.p,{children:\"VerseYou adalah eksperimen social music dengan feed real-time dan theming dinamis.\"}),`\n`,(0,t.jsx)(o,{children:\"Arsitektur Singkat \\u{1F3D7}\\uFE0F\"}),`\n`,(0,t.jsxs)(\"div\",{className:\"flex flex-col gap-2 p-2\",children:[(0,t.jsx)(r,{children:\"App Router, RSC, ISR.\"}),(0,t.jsx)(r,{children:\"API Routes untuk integrasi Spotify & NextAuth.\"})]}),`\n`,(0,t.jsx)(o,{children:\"Fitur Utama \\u{1F389}\"}),`\n`,(0,t.jsxs)(\"div\",{className:\"flex flex-col gap-2 p-2\",children:[(0,t.jsx)(r,{children:\"Feed real-time.\"}),(0,t.jsx)(r,{children:\"Theming dinamis.\"}),(0,t.jsx)(r,{children:\"Integrasi Spotify.\"}),(0,t.jsx)(r,{children:\"Integrasi NextAuth.\"})]}),`\n`,(0,t.jsx)(i,{href:\"https://verseyou.example.com\",children:\"Lihat Demo\"})]})}function h(e={}){let{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}function c(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}return y(L);})();\n;return Component;"
  }
]