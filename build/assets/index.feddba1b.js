var re=Object.defineProperty,oe=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var R=(t,a,n)=>a in t?re(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,d=(t,a)=>{for(var n in a||(a={}))j.call(a,n)&&R(t,n,a[n]);if(A)for(var n of A(a))K.call(a,n)&&R(t,n,a[n]);return t},h=(t,a)=>oe(t,se(a));var y=(t,a)=>{var n={};for(var l in t)j.call(t,l)&&a.indexOf(l)<0&&(n[l]=t[l]);if(t!=null&&A)for(var l of A(t))a.indexOf(l)<0&&K.call(t,l)&&(n[l]=t[l]);return n};import{a as le,u as X,b as ie,j as e,c as r,i as ce,W as _,r as c,d as O,e as q,L as W,l as z,M as de,T as he,C as ue,P as pe,f as me,G as b,Q as ge,g as ve,B as fe,R as ye,h as N,F as we,A as Ce,k as be}from"./vendor.19bd0329.js";const xe=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};xe();const k=le.create({baseURL:"http://localhost:8080",timeout:6e5,headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"*","Access-Control-Allow-Origin":"*"}});k.interceptors.request.use(t=>{const a=x.get("token");return t.headers.Authorization=`Bearer ${a}`,t});const F={get:t=>k.get(t).then(a=>a.data),post:(t,a={})=>k.post(t,a).then(n=>n.data),put:(t,a={})=>k.put(t,a).then(n=>n.data),delete:t=>k.delete(t).then(a=>a.data)},x={get:t=>localStorage.getItem(t),set:(t,a)=>localStorage.setItem(t,a),remove:t=>localStorage.removeItem(t),clear:()=>localStorage.clear()},T={get:()=>F.get("/user"),all:()=>F.get("/user/all"),update:t=>F.post("/user/update",t)},J={suspense:!0},B=()=>X(["user/get"],T.get,h(d({},J),{onError:_e})),Me=()=>X(["user/all"],T.all,J),Z=()=>ie(["user/update"],T.update),Ne=(t,a)=>{x.set("token",t),x.set("sub",a.sub)},ke=()=>{x.remove("token"),x.remove("sub")},E=()=>!!localStorage.getItem("token"),_e=()=>{window.location.reload(!1),x.clear()},Se=t=>e("svg",h(d({width:12,height:8,viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{children:e("path",{d:"M1.77 1.757L6 6l4.23-4.243",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round"})})),Le=a=>{var t=y(a,[]);return e("svg",h(d({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{children:e("path",{d:"M7.577 15.934a1.484 1.484 0 002.848 0M9 2.6V1M9 2.6a5.333 5.333 0 015.333 5.333c0 5.01 1.067 5.867 1.067 5.867H2.6s1.066-1.363 1.066-5.867A5.333 5.333 0 019 2.6v0z",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}))},Ae=a=>{var t=y(a,[]);return r("svg",h(d({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{children:[r("g",{clipPath:"url(#clip0_341_4060)",strokeWidth:2.01085,strokeMiterlimit:10,children:[e("path",{d:"M5.89 1.006H2.203c-.66 0-1.196.535-1.196 1.195v3.701c0 .66.536 1.195 1.196 1.195H5.89c.661 0 1.197-.535 1.197-1.195V2.201c0-.66-.536-1.195-1.197-1.195z",stroke:"url(#paint0_linear_341_4060)"}),e("path",{d:"M15.8 1.006h-3.688c-.66 0-1.196.535-1.196 1.195v3.701c0 .66.536 1.195 1.197 1.195H15.8c.66 0 1.196-.535 1.196-1.195V2.201c0-.66-.536-1.195-1.196-1.195z",stroke:"url(#paint1_linear_341_4060)"}),e("path",{d:"M7.087 10.903h-6.08v6.091h6.08v-6.09z",stroke:"currentColor"}),e("path",{d:"M15.8 10.903h-3.688c-.66 0-1.196.535-1.196 1.195V15.8c0 .66.536 1.195 1.197 1.195H15.8c.66 0 1.196-.535 1.196-1.194v-3.702c0-.66-.536-1.195-1.196-1.195z",stroke:"url(#paint2_linear_341_4060)"})]}),r("defs",{children:[r("linearGradient",{id:"paint0_linear_341_4060",x1:1855e-8,y1:4.04996,x2:8.09081,y2:4.04996,gradientUnits:"userSpaceOnUse",children:[e("stop",{stopColor:"currentColor"}),e("stop",{offset:1,stopColor:"currentColor"})]}),r("linearGradient",{id:"paint1_linear_341_4060",x1:9.9092,y1:4.04996,x2:18,y2:4.04996,gradientUnits:"userSpaceOnUse",children:[e("stop",{stopColor:"currentColor"}),e("stop",{offset:1,stopColor:"currentColor"})]}),r("linearGradient",{id:"paint2_linear_341_4060",x1:9.9092,y1:13.9474,x2:18,y2:13.9474,gradientUnits:"userSpaceOnUse",children:[e("stop",{stopColor:"currentColor"}),e("stop",{offset:1,stopColor:"currentColor"})]}),e("clipPath",{id:"clip0_341_4060",children:e("path",{fill:"#fff",d:"M0 0H18V18H0z"})})]})]}))},ze=a=>{var t=y(a,[]);return e("svg",h(d({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{children:e("path",{d:"M17.603 0C21.684 0 23.988 2.315 18 6.396v11.208C18 21.684 21.684 18 17.603 18H6.396C2.315 18 0 21.684 0 17.604V6.396C0 2.315 2.315 0 6.396 0h11.207zM12.6 4.956a1.008 1.008 0 00-1.537.948v12.228c.061.516.492.9.996.9a.992.992 0 00.996-.9V5.904a.979.979 0 00-.455-.948zM6.996 8.892a.988.988 0 00-1.056 0 1.009 1.009 0 00-.468.948v8.292a.99.99 0 00.995.9.992.992 0 00.996-.9V9.84a1.01 1.01 0 00-.467-.948zm11.11 4.356a1.006 1.006 0 00-1.066 0 .967.967 0 00-.456.948v3.936c.048.516.479.9.996.9.504 0 .935-.384.996-.9v-3.936a1.001 1.001 0 00-.47-.948z",fill:"currentColor"})}))},De=a=>{var t=y(a,[]);return r("svg",h(d({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{children:[r("g",{clipPath:"url(#clip0_341_4123)",strokeWidth:2.00463,strokeLinejoin:"round",children:[e("path",{d:"M3.9 6.665c1.593 0 2.884-1.271 2.884-2.84 0-1.567-1.29-2.839-2.883-2.839s-2.883 1.272-2.883 2.84c0 1.568 1.29 2.84 2.883 2.84z",stroke:"url(#paint0_linear_341_4123)",strokeLinecap:"round"}),e("path",{d:"M.74 10.922c1.72-1.848 3.636-2.357 5.463-1.52",stroke:"currentColor"}),e("path",{d:"M14.08 6.665c1.592 0 2.883-1.271 2.883-2.84 0-1.567-1.291-2.839-2.884-2.839-1.592 0-2.883 1.272-2.883 2.84 0 1.568 1.291 2.84 2.883 2.84z",stroke:"url(#paint1_linear_341_4123)",strokeLinecap:"round"}),e("path",{d:"M11.594 9.488c1.888-.959 3.893-.469 5.664 1.459M5.213 17.037l.022-.025c2.38-2.557 5.13-2.546 7.507.025",stroke:"currentColor"}),e("path",{d:"M8.978 12.97c1.592 0 2.883-1.272 2.883-2.84 0-1.568-1.29-2.839-2.883-2.839-1.592 0-2.883 1.271-2.883 2.84 0 1.567 1.29 2.839 2.883 2.839z",stroke:"url(#paint2_linear_341_4123)",strokeLinecap:"round"})]}),r("defs",{children:[r("linearGradient",{id:"paint0_linear_341_4123",x1:.0166514,y1:3.8257,x2:7.78496,y2:3.8257,gradientUnits:"userSpaceOnUse",children:[e("stop",{stopColor:"currentColor"}),e("stop",{offset:1,stopColor:"currentColor"})]}),r("linearGradient",{id:"paint1_linear_341_4123",x1:10.1954,y1:3.8257,x2:17.9664,y2:3.8257,gradientUnits:"userSpaceOnUse",children:[e("stop",{stopColor:"currentColor"}),e("stop",{offset:1,stopColor:"currentColor"})]}),r("linearGradient",{id:"paint2_linear_341_4123",x1:5.0938,y1:10.1304,x2:12.8621,y2:10.1304,gradientUnits:"userSpaceOnUse",children:[e("stop",{stopColor:"currentColor"}),e("stop",{offset:1,stopColor:"currentColor"})]}),e("clipPath",{id:"clip0_341_4123",children:e("path",{fill:"#fff",d:"M0 0H18V18H0z"})})]})]}))},Ee=a=>{var t=y(a,[]);return e("svg",h(d({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{children:e("path",{d:"M9.68 0c.716 0 1.365.378 1.723.936.174.27.29.603.261.954-.02.27.068.54.223.792.494.765 1.588 1.053 2.44.621.958-.522 2.168-.207 2.72.684l.649 1.062c.561.891.252 2.034-.716 2.547-.823.459-1.114 1.476-.62 2.25.155.243.329.45.6.576.339.171.6.441.784.711.359.558.33 1.242-.019 1.845l-.678 1.08a2.04 2.04 0 01-1.713.936c-.34 0-.717-.09-1.027-.27-.251-.153-.542-.207-.852-.207-.958 0-1.762.747-1.79 1.638 0 1.035-.891 1.845-2.005 1.845H8.343c-1.123 0-2.013-.81-2.013-1.845-.02-.891-.823-1.638-1.782-1.638-.32 0-.61.054-.852.207-.31.18-.697.27-1.026.27-.697 0-1.365-.36-1.723-.936l-.668-1.08c-.359-.585-.378-1.287-.02-1.845.155-.27.446-.54.775-.711.27-.126.445-.333.61-.576.484-.774.193-1.791-.63-2.25C.056 7.083-.254 5.94.298 5.049l.649-1.062c.561-.891 1.762-1.206 2.73-.684.842.432 1.936.144 2.43-.621.155-.252.242-.522.223-.792-.02-.351.087-.684.27-.954C6.96.378 7.609.018 8.315 0H9.68zM9.01 6.462c-1.52 0-2.75 1.134-2.75 2.547 0 1.413 1.23 2.538 2.75 2.538s2.721-1.125 2.721-2.538c0-1.413-1.2-2.547-2.72-2.547z",fill:"currentColor"})}))},Pe=a=>{var t=y(a,[]);return r("svg",h(d({width:"100px",height:"100px",viewBox:"0 0 100 100","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"},t),{children:[e("path",{fill:"#000",d:"M27.24 56.73a3 3 0 00-2 3.67c.18.59.38 1.18.6 1.76a3 3 0 002.76 1.91 3 3 0 002.82-3.71l3-1a17.65 17.65 0 006 7.53l-.91 1.56-.79 1.25a2.87 2.87 0 00-1.54-.1 2.91 2.91 0 00-1.87 1.27 2.88 2.88 0 00-.43 2.21A2.93 2.93 0 0036.1 75c.52.34 1 .67 1.59 1a2.93 2.93 0 001.45.38A2.95 2.95 0 0040.9 71l.9-1.53.73-1.16a17.43 17.43 0 008.08 2c.44 0 .88 0 1.32-.06l.51 3.28a2.95 2.95 0 001 5.73 1.35 1.35 0 00.34 0q.91-.1 1.83-.27A3 3 0 0058 75.48a3 3 0 00-3-2.41l-.51-3.24a17.42 17.42 0 008.45-4.58l2.48 2.23a3 3 0 00.49 3.69 2.94 2.94 0 002 .81 3 3 0 002.09-.92c.43-.45.84-.92 1.23-1.39A3 3 0 0067 65.59l-2.47-2.22a17.53 17.53 0 003.55-8.83h1.52l1.81.13a3 3 0 002.74 2.48h.21a3 3 0 002.91-2.77v-1.95a3 3 0 00-.89-2.08 3 3 0 00-4.17 0 2.89 2.89 0 00-.8 1.56h-3.24a17.55 17.55 0 00-3-9.08l2.51-2a3 3 0 002 .75 2.95 2.95 0 002.89-2.54 2.93 2.93 0 00-.57-2.17c-.37-.49-.76-1-1.16-1.45a3 3 0 00-4.75 3.47l-2.5 2a17.53 17.53 0 00-8-5.06l.26-1.69.33-1.45a2.95 2.95 0 00.64-5.82c-.6-.14-1.21-.26-1.82-.36a2.95 2.95 0 00-1.42 5.7l-.25 1.57-.33 1.46v.08a18.18 18.18 0 00-2.35-.17 17.45 17.45 0 00-7 1.46l-.89-1.39-.68-1.36a2.95 2.95 0 00-1-5 2.89 2.89 0 00-2.25.17c-.55.27-1.09.57-1.63.89a3 3 0 00-1.35 1.81 2.91 2.91 0 00.28 2.27 2.91 2.91 0 003.63 1.23l.88 1.4.59 1.18.06.1A17.57 17.57 0 0034.9 45l-1.84-.7-1.06-.48a3 3 0 00-5.64-1.57c-.24.57-.47 1.15-.67 1.73a3 3 0 002.79 3.93 3 3 0 002.64-1.69l2.75 1.1h.09a17.57 17.57 0 00-.84 5.35 17.25 17.25 0 00.52 4.33l-3.07 1a3 3 0 00-3.33-1.27zm23.41-19.08A15.06 15.06 0 1135.59 52.7a15.07 15.07 0 0115.06-15.05z"}),e("path",{fill:"#D32D41",d:"M54.68 45.18a1.51 1.51 0 00.11.22 1.46 1.46 0 00.16.19 1.25 1.25 0 00.88.36 1.06 1.06 0 00.25 0l.23-.07a.94.94 0 00.22-.12 1.25 1.25 0 00.19-.15 1.29 1.29 0 00.36-.89 1.27 1.27 0 00-.36-.88 1.25 1.25 0 00-.19-.15.94.94 0 00-.22-.12l-.23-.07a1.25 1.25 0 00-1.5 1.22 1 1 0 000 .25.88.88 0 00.1.21zM54.68 50.73a1.51 1.51 0 00.11.22 1.46 1.46 0 00.16.19 1.25 1.25 0 00.88.36 1.06 1.06 0 00.25 0l.23-.07a.94.94 0 00.22-.12 1.25 1.25 0 00.19-.15 1.39 1.39 0 00.15-.19 1.21 1.21 0 00.19-.45 2.11 2.11 0 000-.25 1.27 1.27 0 00-.36-.88l-.19-.16-.22-.11a1 1 0 00-.23-.07 1.27 1.27 0 00-1.13.34 1.46 1.46 0 00-.16.19 1.51 1.51 0 00-.11.22.88.88 0 00-.07.23 1 1 0 000 .24 1.07 1.07 0 000 .25.88.88 0 00.09.21zM57.45 48a.88.88 0 00.12.21 1 1 0 00.15.19l.19.16.22.11a.9.9 0 00.23.08h.49a1.13 1.13 0 00.24-.08l.21-.11.19-.16a1 1 0 00.16-.19 1.39 1.39 0 00.11-.21 1.09 1.09 0 00.07-.24 1 1 0 000-.48 1.09 1.09 0 00-.07-.24 1.39 1.39 0 00-.11-.21 1 1 0 00-.16-.19l-.19-.16-.21-.11a1.13 1.13 0 00-.24-.08 1.35 1.35 0 00-.49 0 .9.9 0 00-.23.08l-.22.11-.19.16a1 1 0 00-.15.19.88.88 0 00-.12.21 2.17 2.17 0 00-.07.24 1.45 1.45 0 000 .48 2.17 2.17 0 00.07.24zM53.06 48.73a1.22 1.22 0 00.88-.37 1.23 1.23 0 000-1.76 1.29 1.29 0 00-1.77 0 1.25 1.25 0 00.89 2.13zM59.6 23.79a1.09 1.09 0 00.43.08 1.25 1.25 0 00.43-2.42 1.25 1.25 0 00-.86 2.34zM61 20a1.23 1.23 0 00.42.07A1.24 1.24 0 1061 20zM66.63 25a1.2 1.2 0 00.65-.19A1.25 1.25 0 1066 22.69a1.25 1.25 0 00.63 2.31zM70 22.9a1.28 1.28 0 00.65-.18 1.26 1.26 0 10-.65.18zM62.16 26.52a1.26 1.26 0 001.06.59 1.28 1.28 0 00.66-.18 1.25 1.25 0 10-1.72-.41zM65.57 31.09h.08a1.21 1.21 0 10-.08 0zM69.57 31.35h.08a1.22 1.22 0 10-.08 0zM32.23 85.1a1.25 1.25 0 00.43.07 1.25 1.25 0 00.43-2.42 1.25 1.25 0 00-1.61.74 1.27 1.27 0 00.75 1.61zM35.21 80.59a1.25 1.25 0 10-1.61.75 1.29 1.29 0 00.43.07 1.26 1.26 0 001.18-.82zM26.78 78a1.25 1.25 0 00-.41 1.72 1.27 1.27 0 001.07.6 1.25 1.25 0 10-.66-2.32zM30.84 78.17a1.23 1.23 0 00.66-.17 1.25 1.25 0 10-.66.19zM24 82.38a1.2 1.2 0 00.65-.19 1.25 1.25 0 10-1.72-.4 1.26 1.26 0 001.07.59zM29.66 73a1.25 1.25 0 10-1.33 1.16h.08A1.25 1.25 0 0029.66 73zM24.33 73.93h.08a1.37 1.37 0 10-.08 0z"})]}))},Fe=n=>{var l=n,{light:t=!1}=l,a=y(l,["light"]);return t?e("svg",h(d({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),{children:e("path",{d:"M.896 13.06a.73.73 0 00.32.18.702.702 0 00.672-.18l5-5 5 5a.702.702 0 00.672.18.6.6 0 00.32-.18.621.621 0 00.172-.313.702.702 0 000-.36.621.621 0 00-.172-.312l-5-5.008 5-5a.702.702 0 000-.984.64.64 0 00-.32-.18.7.7 0 00-.36 0 .597.597 0 00-.312.18l-5 5-5-5a.6.6 0 00-.32-.18.7.7 0 00-.36 0 .597.597 0 00-.312.18.676.676 0 00-.18.312.836.836 0 000 .36c.031.12.091.224.18.312l5 5-5 5.008a.676.676 0 00-.18.313.763.763 0 00-.008.359c.031.12.094.224.188.312z",fill:"currentColor"})})):e("svg",h(d({width:28,height:28,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),{children:e("path",{d:"M18.308 8L14 12.308 9.692 8 8 9.692 12.308 14 8 18.308 9.692 20 14 15.692 18.308 20 20 18.308 15.692 14 20 9.692 18.308 8z",fill:"currentColor"})}))},Y=t=>e("svg",h(d({xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 264.018 264.018",xmlSpace:"preserve",fill:"#D32D41"},t),{children:e("path",{d:"M132.009 0c-42.66 0-77.366 34.706-77.366 77.366 0 11.634 2.52 22.815 7.488 33.24.1.223.205.442.317.661l58.454 113.179a12.502 12.502 0 0022.212 0l58.438-113.148c.101-.195.195-.392.285-.591 5.001-10.455 7.536-21.67 7.536-33.341C209.375 34.706 174.669 0 132.009 0zm0 117.861c-22.329 0-40.495-18.166-40.495-40.495 0-22.328 18.166-40.494 40.495-40.494s40.495 18.166 40.495 40.494c0 22.329-18.166 40.495-40.495 40.495zM161.81 249.018h-59.602a7.499 7.499 0 00-7.5 7.5c0 4.143 3.357 7.5 7.5 7.5h59.602c4.143 0 7.5-3.357 7.5-7.5a7.5 7.5 0 00-7.5-7.5z"})})),Ie="dev-9r9paw-9.us.auth0.com",ee="WX140B6rAlMOi3N5r8IkKoqh7Wq6ZkvK",Ue="https://task-server.com",Oe="openid profile email read:current_user update:current_user_metadata",te="Username-Password-Authentication",Te="http://localhost:3000/authenticate",Be="http://localhost:3000/login",Ge="token",S=new ce.WebAuth({domain:Ie,clientID:ee,audience:Ue,scope:Oe}),He=(t,a)=>{S.signup({email:t,password:a,connection:te},function(n,l){if(n)return _.error("Incorrect email or password!")})},Re=(t,a)=>{S.login({username:t,password:a,realm:te,redirectUri:Te,responseType:Ge},function(n,l){if(n)return _.error("Incorrect email or password!")})},je=()=>{S.logout({returnTo:Be,clientID:ee},function(t,a){if(t)return _.error("Sorry, an error occurred")})};c.exports.createContext({user:{token:""},set:({token:t})=>null,clear:()=>null});const Ke=()=>{var m,f;const[t,a]=c.exports.useState(!1),{data:n}=B(),l=O(),o=()=>{l("/profile"),a(!1)},i=()=>{je(),ke(),a(!1)},u=s=>{c.exports.useEffect(()=>{const g=C=>{s.current&&!s.current.contains(C.target)&&a(!1)};return document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}},[s,t])},p=c.exports.useRef(null);return u(p),r("header",{children:[e("p",{children:`Hello, ${(f=((m=n==null?void 0:n.user_metadata)==null?void 0:m.name)||(n==null?void 0:n.name))==null?void 0:f.split(" ")[0]}! \u{1F44B}`}),r("div",{className:"utilityContainer",children:[e("div",{children:e(Le,{})}),e("div",{onClick:()=>a(!t),children:e(Se,{})}),t?r("ul",{className:"dropdownItems",ref:p,children:[e("li",{onClick:o,children:"Profile"}),e("li",{onClick:i,children:"Log out"})]}):null]})]})},We=()=>r("header",{className:"headerLoading",children:[e("div",{className:"nameLoading"}),r("div",{className:"utilityContainer",children:[e("div",{}),e("div",{})]})]}),Ve=[{name:"Dashboard",path:"/",icon:Ae},{name:"Statistics",path:"/statistics",icon:ze},{name:"Measures",path:"/measures",icon:De},{name:"Settings",path:"/settings",icon:Ee}],$e=()=>{const t=q();return r("aside",{children:[e("div",{className:"logo",children:r(W,{to:"/",children:[e(Pe,{className:"m-auto mt-9"}),e("span",{children:"Covid!"})]})}),e("div",{className:"links",children:Ve.map(a=>r(W,{to:a.path,className:t.pathname===a.path?"activeLink":"",children:[e(a.icon,{}),e("span",{children:a.name})]},a.path))})]})},Qe=()=>{const t=c.exports.useRef();return c.exports.useEffect(()=>{t.current=!0},[]),t.current},P=({status:t,message:a})=>{const n=Qe();return c.exports.useEffect(()=>{n&&(t==="success"?_.success(`${a} successfully!`):t==="error"&&_.error(a||"Sorry, an error occurred!"))},[t]),e("div",{})},V=["#D32D41","#43a445","#7E909A"],Xe=(t,a)=>t==null?void 0:t.map((n,l)=>{var o,i;return e(ue,{center:[n.lat,n.lng],pathOptions:{color:V[a],fillColor:V[a]},fillOpacity:.5,radius:((o=n==null?void 0:n.records)==null?void 0:o.length)*5e3,children:e(pe,{children:r("div",{className:"popup",children:[e("p",{className:"popupTitle",children:n.country}),r("p",{className:"popupCases",children:[" ",(i=n==null?void 0:n.records)==null?void 0:i.length," ",n==null?void 0:n.records[0].type]})]})})},l)});function qe({center:t,zoom:a}){return me().setView(t,a),null}const Je=z.withScriptjs(z.withGoogleMap(t=>e(z.GoogleMap,{defaultZoom:18,defaultCenter:t.location,center:{lat:t.location.lat,lng:t.location.lng},children:t.isMarkerShown&&e(z.Marker,{position:{lat:t.location.lat,lng:t.location.lng}})}))),Ze=({location:t,filteredData:a,diagnosisType:n})=>r(de,{center:[t.lat,t.lng],zoom:4,scrollWheelZoom:!1,className:"dashboardMap",children:[e(qe,{center:[t.lat,t.lng],zoom:4}),e(he,{attribution:'\xA9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Xe(a[n],n)]}),G=(t,a)=>(b.setApiKey("AIzaSyA1mcwJXjBvdjna2XGINJo5KEQ3K4_BAjk"),b.setLanguage("en"),b.fromLatLng(t,a).then(n=>n.results[0].formatted_address,n=>{console.error(n)})),Ye=t=>(b.setApiKey("AIzaSyA1mcwJXjBvdjna2XGINJo5KEQ3K4_BAjk"),b.setLanguage("en"),b.fromAddress(t).then(a=>a.results[0].geometry.location,a=>{console.error(a)})),et=(t,a)=>{switch(a.type){case"headache":return h(d({},t),{headache:!t.headache});case"cough":return h(d({},t),{cough:!t.cough});case"soreThroat":return h(d({},t),{soreThroat:!t.soreThroat});case"chestPain":return h(d({},t),{chestPain:!t.chestPain});case"fever":return h(d({},t),{fever:!t.fever});case"feverDegree":return h(d({},t),{feverDegree:a.data});case"type":return h(d({},t),{type:a.data});default:return t}},tt=t=>{let a=t.split(",");return a[a.length-1].trim()},at=({handleClose:t,updateUser:a})=>{const[n,l]=c.exports.useReducer(et,{headache:!1,cough:!1,soreThroat:!1,chestPain:!1,fever:!1,feverDegree:36,type:"case"}),[o,i]=c.exports.useState({address:"",latitude:"",longitude:""}),{data:u}=B(),p=s=>l({type:s.name,data:s.value}),m=()=>{var g;let s=((g=u==null?void 0:u.user_metadata)==null?void 0:g.diagnosis)||[];s.push(h(d({},n),{location:tt(o.address),timeStamp:new Date})),a({id:u.user_id,data:{user_metadata:{diagnosis:s}}}),t()},f=async()=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition(async function(s){let g=await G(s.coords.latitude,s.coords.longitude);i({address:g,lat:parseFloat(s.coords.latitude),lng:parseFloat(s.coords.longitude)})}):console.log("Not Available")};return c.exports.useEffect(()=>{var s;i((s=u==null?void 0:u.user_metadata)==null?void 0:s.location)},[u]),c.exports.useEffect(()=>{n.fever||l({type:"feverDegree",data:36})},[n.fever]),r("div",{className:"modalContainer addDiagnosisModal",children:[r("div",{className:"modalHeader",children:[e("h3",{children:"Add diagnosis"}),e("div",{onClick:t,children:e(Fe,{})})]}),r("div",{className:"modalDetails",children:[e("p",{children:"We are sorry to hear that you have been diagnosed with covid-19. We hope you get well soon!"}),e("h4",{children:"What is your case?"}),r("div",{children:[e("input",{type:"radio",id:"case",name:"type",value:"case",onClick:s=>p(s.target)}),e("label",{htmlFor:"case",children:"Case"})]}),r("div",{children:[e("input",{type:"radio",id:"recovered",name:"type",value:"recovered",onClick:s=>p(s.target)}),e("label",{htmlFor:"recovered",children:"Recovered"}),e("div",{}),e("input",{type:"radio",id:"death",name:"type",value:"death",onClick:s=>p(s.target)}),e("label",{htmlFor:"death",children:"Death"})]}),e("h4",{children:"What symptoms did you experience?"}),r("div",{children:[e("label",{htmlFor:"headache",children:"Headache"}),e("input",{type:"checkbox",name:"headache",value:n.headache,onClick:s=>p(s.target)})]}),r("div",{children:[e("label",{htmlFor:"cough",children:"Cough"}),e("input",{type:"checkbox",name:"cough",value:n.cough,onClick:s=>p(s.target)})]}),r("div",{children:[e("label",{htmlFor:"soreThroat",children:"Sore Throat"}),e("input",{type:"checkbox",name:"soreThroat",value:n.soreThroat,onClick:s=>p(s.target)})]}),r("div",{children:[e("label",{htmlFor:"chestPain",children:"Chest Pain"}),e("input",{type:"checkbox",name:"chestPain",value:n.chestPain,onClick:s=>p(s.target)})]}),r("div",{children:[e("label",{htmlFor:"fever",children:"Fever"}),e("input",{type:"checkbox",name:"fever",value:n.fever,onClick:s=>p(s.target)})]}),n.fever?r("div",{children:[e("label",{htmlFor:"feverDegree",children:"Temperature"}),e("input",{type:"number",name:"feverDegree",value:n.feverDegree,onChange:s=>p(s.target)})]}):null,e("h4",{children:"Find your location"}),r("div",{children:[e("input",{type:"text",id:"location",name:"location",value:o.address,disabled:!0}),e(Y,{onClick:f})]})]}),e("div",{className:"modalFooter",children:e("button",{className:"btn",onClick:m,children:"Submit!"})})]})},nt=({children:t})=>{const[a,n]=c.exports.useState(E()),l=O();return c.exports.useEffect(()=>{n(E())},[t]),c.exports.useEffect(()=>{a||l("../login",{replace:!0})},[a]),r("div",{className:"mainLayoutContainer",children:[e($e,{}),r("section",{children:[e(c.exports.Suspense,{fallback:e(We,{}),children:e(Ke,{})}),e("main",{children:t})]})]})},D=()=>r("div",{className:"loading",children:[e("div",{className:"dot"}),e("div",{className:"dot"}),e("div",{className:"dot"}),e("div",{className:"dot"}),e("div",{className:"dot"})]}),rt=()=>{const t=q(),a=O();return c.exports.useEffect(()=>{S.parseHash({hash:t.hash},function(n,l){if(n){n.error_description;return}S.client.userInfo(l==null?void 0:l.accessToken,function(o,i){if(o){n.error_description;return}Ne(l.accessToken,i),setTimeout(()=>{a("/",{replace:!0}),window.location.reload(!1)},2500)})})},[]),e(D,{})};var ot="/assets/progress1.ca3fb5f2.png";const H=()=>e("div",{className:"comingSoon",children:e("img",{src:ot,alt:""})}),I=()=>{const[t,a]=c.exports.useState({email:"",password:""}),[n,l]=c.exports.useState(!0),o=u=>a(h(d({},t),{[u.name]:u.value})),i=()=>l(!n);return e("div",{className:"loginContainer",children:r("div",{children:[e("h2",{children:n?"Log In":"Sign Up"}),e("label",{htmlFor:"email",children:"Email"}),e("input",{type:"email",id:"email",name:"email",placeholder:"Email",onChange:u=>{o(u.target)}}),e("br",{}),e("label",{htmlFor:"password",children:"Password"}),e("input",{type:"password",id:"password",name:"password",placeholder:"Password",onChange:u=>{o(u.target)}}),e("br",{}),n?e("button",{onClick:()=>{Re(t.email,t.password)},children:"LOG IN!"}):e("button",{onClick:()=>{He(t.email,t.password)},children:"SIGN UP!"}),n?r("span",{children:["Don't have an account? ",e("u",{onClick:i,children:"Sign up"})]}):r("span",{children:["Already have an account? ",e("u",{onClick:i,children:"Login"})]})]})})},st=t=>t==null?void 0:t.map(a=>{var n;return(n=a.user_metadata)==null?void 0:n.diagnosis}),lt=t=>Object.values(t).reduce((a,n)=>a.concat(n,t[n])),it=t=>{let a=[];return new Set(t.map(l=>l==null?void 0:l.location).filter(l=>l!==void 0)).forEach(l=>{const o=t.filter(i=>(i==null?void 0:i.location)===l);a.push({country:l,records:o})}),a},ct=async t=>{for(let a=0;a<t.length;a++){let n=await Ye(t[a].country);t[a]=h(d({},t[a]),{lat:n.lat,lng:n.lng})}return t};function U(t,a){return t.records.length<a.records.length?1:t.records.length>a.records.length?-1:0}const dt=(t,a)=>{var l,o;let n=[];for(let i=0;i<t.length;i++){let u=(o=(l=t[i])==null?void 0:l.records)==null?void 0:o.filter(m=>m.type===a),p=h(d({},t[i]),{records:u});n.push(p)}return n},ht=t=>{let a=["case","recovered","death"],n=[];for(let l of a){let o=dt(t,l);n.push(o)}return n},$=()=>{const[t,a]=c.exports.useState(!1),[n,l]=c.exports.useState({lat:29.9841575,lng:31.4401621}),[o,i]=c.exports.useState([]),[u,p]=c.exports.useState(0),{data:m}=Me(),{mutate:f,status:s}=Z(),g=()=>a(!0),C=()=>a(!1);let M=c.exports.useMemo(()=>it(lt(st(m))),[m]),L=c.exports.useMemo(()=>ht(o),[o]);c.exports.useEffect(()=>{ne()},[]),c.exports.useEffect(()=>{ae()},[M]);const ae=async()=>{let v=await ct(M);i(v)},ne=()=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition(async function(v){let w=await G(v.coords.latitude,v.coords.longitude);l({address:w,lat:parseFloat(v.coords.latitude),lng:parseFloat(v.coords.longitude)})}):console.log("Not Available")};return r("div",{className:"container",children:[r("div",{className:"header",children:[e("h2",{children:"Dashboard"}),e("button",{className:"btn primaryBtn",onClick:g,children:"Add diagnosis"})]}),r("div",{className:"details dashboardDetails",children:[r("div",{className:"showBtns",children:[e("button",{onClick:()=>p(0),children:"Show cases"}),e("button",{onClick:()=>p(1),children:"Show recovered"}),e("button",{onClick:()=>p(2),children:"Show death"})]}),e(Ze,{location:n,filteredData:L||o,diagnosisType:u}),r("div",{className:"statistics",children:[r("div",{className:"type",children:[r("ul",{children:["  ",e("h3",{children:"Total cases"}),"  "]}),L[0].sort(U).map((v,w)=>r("p",{children:[e("span",{children:v.country})," ",e("span",{children:v.records.length})]},w))]}),r("div",{className:"type",children:[r("ul",{children:[" ",e("h3",{children:"Total recovered"}),"  "]}),L[1].sort(U).map((v,w)=>r("p",{children:[e("span",{children:v.country})," ",e("span",{children:v.records.length})]},w))]}),r("div",{className:"type",children:[r("ul",{children:["  ",e("h3",{children:"Total deaths"}),"  "]}),L[2].sort(U).map((v,w)=>r("p",{children:[e("span",{children:v.country})," ",e("span",{children:v.records.length})]},w))]})]})]}),t?e("div",{className:"modal",children:e(at,{handleClose:C,updateUser:f})}):null,e(P,{status:s,message:"Recorded diagnoses"})]})},Q=()=>r("div",{className:"container shimmerContainer",children:[r("div",{className:"header headerShimmer",children:[e("h2",{}),e("button",{className:"btn primaryBtn"})]}),r("div",{className:"details dashboardShimmer",children:[e("div",{className:"map"}),r("div",{className:"statistics",children:[r("div",{className:"type",children:[e("ul",{}),r("p",{children:[e("span",{})," ",e("span",{})]}),r("p",{children:[e("span",{})," ",e("span",{})]}),r("p",{children:[e("span",{})," ",e("span",{})]})]}),r("div",{className:"type",children:[e("ul",{}),r("p",{children:[e("span",{})," ",e("span",{})]}),r("p",{children:[e("span",{})," ",e("span",{})]}),r("p",{children:[e("span",{})," ",e("span",{})]})]}),r("div",{className:"type",children:[e("ul",{}),r("p",{children:[e("span",{})," ",e("span",{})]}),r("p",{children:[e("span",{})," ",e("span",{})]}),r("p",{children:[e("span",{})," ",e("span",{})]})]})]})]})]}),ut=()=>e("div",{children:e(H,{})}),pt=()=>e("div",{children:e(H,{})}),mt=(t,a)=>{switch(a.type){case"name":return h(d({},t),{name:a.data});case"email":return h(d({},t),{email:a.data});case"phone":return h(d({},t),{phone:a.data});case"age":return h(d({},t),{age:a.data});case"location":return h(d({},t),{location:a.data});default:return t}},gt=()=>{const[t,a]=c.exports.useReducer(mt,{name:"",email:"",phone:"",age:"",location:""}),[n,l]=c.exports.useState(!1),{data:o}=B(),{mutate:i,status:u}=Z();c.exports.useEffect(()=>{var s,g,C,M;m("name",((s=o==null?void 0:o.user_metadata)==null?void 0:s.name)||(o==null?void 0:o.name)),m("email",o==null?void 0:o.email),m("phone",(g=o==null?void 0:o.user_metadata)==null?void 0:g.phone),m("age",(C=o==null?void 0:o.user_metadata)==null?void 0:C.age),m("location",((M=o==null?void 0:o.user_metadata)==null?void 0:M.location)||{lat:29.9841575,lng:31.4401621})},[o]);const p=()=>i({id:o.user_id,data:{user_metadata:t}}),m=(s,g)=>a({type:s,data:g}),f=()=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition(async function(s){let g=await G(s.coords.latitude,s.coords.longitude);m("location",{address:g,lat:parseFloat(s.coords.latitude),lng:parseFloat(s.coords.longitude)}),l(!0)}):console.log("Not Available")};return r("div",{className:"container",children:[r("div",{className:"header",children:[e("h2",{children:"Profile"}),e("button",{className:"btn",onClick:p,children:"Update"})]}),r("div",{className:"details profileDetails",children:[r("div",{children:[e("label",{htmlFor:"name",children:"Full name"}),e("input",{type:"text",id:"name",name:"fname",value:t.name,onChange:s=>{m("name",s.target.value)}})]}),r("div",{children:[e("label",{htmlFor:"email",children:"Email"}),e("input",{type:"email",id:"email",name:"email",value:t.email,disabled:!0}),e("span",{children:o.email_verified?"":"Not verified"})]}),r("div",{children:[e("label",{htmlFor:"tel",children:"Phone number"}),e("input",{type:"tel",id:"tel",name:"tel",value:t.phone,onChange:s=>{m("phone",s.target.value)}})]}),r("div",{children:[e("label",{htmlFor:"age",children:"Age"}),e("input",{type:"number",id:"age",name:"age",min:"0",value:t.age,onChange:s=>{m("age",s.target.value)}})]}),r("div",{children:[e("label",{htmlFor:"location",children:"Location"}),e("input",{type:"text",id:"location",name:"location",value:t.location.address,disabled:!0,onChange:s=>{m("location",s.target.value)}}),e(Y,{onClick:f})]}),n?e("div",{className:"google-map",children:e(Je,{isMarkerShown:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA1mcwJXjBvdjna2XGINJo5KEQ3K4_BAjk&v=3.exp&libraries=geometry,drawing,places",loadingElement:e("div",{style:{height:"100%"}}),containerElement:e("div",{style:{height:"400px"}}),mapElement:e("div",{style:{height:"100%"}}),location:t.location})}):null]}),e(P,{status:u,message:"Profile updated"})]})},vt=()=>r("div",{className:"container shimmerContainer",children:[r("div",{className:"header headerShimmer",children:[e("h2",{}),e("button",{})]}),r("div",{className:"details profileShimmer",children:[r("div",{children:[e("label",{}),e("input",{disabled:!0})]}),r("div",{children:[e("label",{}),e("input",{disabled:!0})]}),r("div",{children:[e("label",{}),e("input",{disabled:!0})]}),r("div",{children:[e("label",{}),e("input",{disabled:!0})]}),r("div",{children:[e("label",{}),e("input",{disabled:!0})]})]})]}),ft=()=>e("div",{children:e(H,{})}),yt=[{path:"/",name:"/",element:$,shimmer:Q},{path:"dashboard",name:"dashboard",element:$,shimmer:Q},{path:"statistics",name:"statistics",element:ut,shimmer:D},{path:"measures",name:"measures",element:pt,shimmer:D},{path:"settings",name:"settings",element:ft,shimmer:D},{path:"/profile",name:"/profile",element:gt,shimmer:vt}];const wt=new ge;function Ct(){const[t,a]=c.exports.useState(E());return c.exports.useEffect(()=>{a(E())},[]),r(ve,{client:wt,children:[e("div",{className:"App",children:e(fe,{children:r(ye,{children:[e(N,{path:"/login",element:e(I,{})}),e(N,{path:"/authenticate/*",element:e(rt,{})}),t?e(we,{children:yt.map((n,l)=>e(N,{path:n.path,name:n.name,element:e(nt,{children:e(c.exports.Suspense,{fallback:e(n.shimmer,{}),children:e(n.element,{})})})},l))}):e(N,{path:"/",element:e(I,{})}),e(N,{path:"/",element:e(I,{})})]})})}),e(Ce,{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}const bt=document.getElementById("root");be.createRoot(bt).render(e(Ct,{}));
