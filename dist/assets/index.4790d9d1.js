var E=Object.defineProperty;var h=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var p=(t,e,s)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,_=(t,e)=>{for(var s in e||(e={}))$.call(e,s)&&p(t,s,e[s]);if(h)for(var s of h(e))j.call(e,s)&&p(t,s,e[s]);return t};import{r as I,o as u,c as S,u as b,a as d,b as a,d as g,e as k,f as q,g as T,h as y,w as D,i as O,v as Q,j as C,k as V,O as N,M as U,l as B,m as M,S as z,n as K,P as v,s as W,p as F,q as G,t as H,x as J}from"./vendor.fd155f07.js";const Z=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};Z();var x=(t,e)=>{for(const[s,n]of e)t[s]=n;return t};const X={};function Y(t,e){const s=I("router-view");return u(),S(s)}var ee=x(X,[["render",Y]]);const te="modulepreload",A={},se="",c=function(e,s){return!s||s.length===0?e():Promise.all(s.map(n=>{if(n=`${se}${n}`,n in A)return;A[n]=!0;const o=n.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":te,o||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),o)return new Promise((l,P)=>{i.addEventListener("load",l),i.addEventListener("error",P)})})).then(()=>e())};var oe="assets/memoji-hun.edbe3726.png";const ne={class:"mx-24 pt-12"},re=a("img",{src:oe,alt:"Logo",class:"w-16"},null,-1),ae=a("div",{class:"flex items-center pl-3"},[a("p",{class:"text-2xl font-bold"},[g(" Psy"),a("span",{class:"text-primary"},"Questions")])],-1),ie=[re,ae],ce=a("div",{class:"flex justify-center items-center font-bold invisible sm:visible"},[a("p",null,"Season 1")],-1),ue={setup(t){const e=b();function s(){e.push({name:"Landing"})}return(n,o)=>(u(),d("header",ne,[a("nav",{class:"flex flex-row justify-center sm:justify-between"},[a("a",{class:"flex cursor-pointer",onClick:s},ie),ce])]))}},le={},de={class:"flex space-x-2 hover:text-primary",href:"https://github.com/Psycarlo",target:"_blank"},me=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"white",class:"fill-current"},[a("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})],-1),fe=a("p",{class:"font-bold"},"Psycarlo",-1),he=[me,fe];function pe(t,e){return u(),d("a",de,he)}var _e=x(le,[["render",pe]]);const be={class:"min-h-screen flex flex-col bg-dark text-light justify-between"},ge={class:"flex flex-col space-y-8 justify-center items-center"},ye=a("h1",{class:"text-6xl font-bold text-center pb-12"},[g(" Enter your "),a("span",{class:"text-primary"},"username")],-1),ve=a("p",{class:"text-light font-bold"},"The username is optional",-1),xe=["onSubmit"],Ae={class:"flex items-center justify-center"},we=a("div",{class:"mt-14 mb-6 flex justify-center items-center"},[a("button",{class:"w-2/5 font-bold text-xl flex justify-center py-3 px-2 rounded-md bg-gradient-to-l from-primary-dark to-primary-light transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105"}," START ")],-1),Re={class:"flex items-center justify-center pb-12"},Le={setup(t){const e=k(""),s=q(),n=b();async function o(){e.value||(e.value="Anonymous"),s.commit("setUsername",e.value),n.push({name:"Questions"})}return T(()=>{s.commit("setUsername",null),s.commit("setQuestions",[]),s.commit("setCurrentQuestionId",0),s.commit("setResults",[])}),(r,i)=>(u(),d("div",be,[y(ue),a("section",ge,[ye,ve,a("form",{class:"w-3/4 max-w-md",onSubmit:D(o,["prevent"])},[a("div",Ae,[O(a("input",{id:"username","onUpdate:modelValue":i[0]||(i[0]=l=>e.value=l),name:"username",type:"text",placeholder:"Username (Optional)",class:"w-full px-3 py-3 rounded-md bg-dark-input focus:bg-transparent focus:border focus:outline-none focus:border-primary focus:ring focus:ring-primary"},null,512),[[Q,e.value]])]),we],40,xe)]),a("div",Re,[y(_e)])]))}},Pe={apiKey:"AIzaSyCCJAsURS-KxLl96locP-Zf7mvkfy1-So0",authDomain:"psyquestions-c6148.firebaseapp.com",projectId:"psyquestions-c6148",storageBucket:"psyquestions-c6148.appspot.com",messagingSenderId:"598700232388",appId:"1:598700232388:web:301a3de9f9c1d3c7b44391"},w="v1",R=C(Pe),m=V(R),f=N(R),Ee=async()=>{const t=U(B(f,`questions-${w}`)),e=await M(t),s=[];return e.forEach(n=>{s.push({id:n.id,questionInfo:_({},n.data())})}),s},$e=async(t,e)=>{const s=z(f);for(const[n,o]of Object.entries(t)){const r=K(f,`results-${w}`,`${parseInt(n)+1}`);o.choice==="green"?s.update(r,{"green-votes":v(e)}):s.update(r,{"red-votes":v(e)})}return await s.commit(),!0},je=async(t,e)=>(W(m,t,e).then(s=>s.user).catch(()=>null),null),Ie=[{path:"/",name:"Landing",component:Le,meta:{authRedirectToDashboard:!0}},{path:"/questions",name:"Questions",component:()=>c(()=>import("./Questions.266ff017.js"),["assets/Questions.266ff017.js","assets/vendor.fd155f07.js"]),meta:{authRedirectToDashboard:!0}},{path:"/results",name:"Results",component:()=>c(()=>import("./Results.1d0ee0cd.js"),["assets/Results.1d0ee0cd.js","assets/vendor.fd155f07.js"]),meta:{authRedirectToDashboard:!0}},{path:"/login",name:"Login",component:()=>c(()=>import("./Login.eed3bfbe.js"),["assets/Login.eed3bfbe.js","assets/vendor.fd155f07.js"]),meta:{authRedirectToDashboard:!0}},{path:"/dashboard",name:"Dashboard",component:()=>c(()=>import("./Dashboard.7399a2cc.js"),["assets/Dashboard.7399a2cc.js","assets/vendor.fd155f07.js"]),meta:{requiresAuth:!0}},{path:"/:catchAll(.*)",component:()=>c(()=>import("./NotFound.e5b0bbbc.js"),["assets/NotFound.e5b0bbbc.js","assets/vendor.fd155f07.js"])}],L=F({history:G(),routes:Ie});L.beforeEach((t,e,s)=>{const n=t.matched.some(r=>r.meta.requiresAuth),o=t.matched.some(r=>r.meta.authRedirectToDashboard);m.currentUser&&o&&s("/dashboard"),n&&!m.currentUser&&s("/login"),s()});const Se=()=>({username:null,questions:[],currentQuestionId:0,results:[],resultsPosted:!1,isAdminLoggedIn:!1}),ke={setUsername(t,e){t.username=e},setQuestions(t,e){t.questions=e},setCurrentQuestionId(t,e){t.currentQuestionId=e},setResults(t,e){t.results=e},setResult(t,e){t.results.push(e)},setResultsPosted(t,e){t.resultsPosted=e},setAdminLogged(t,e){t.isAdminLoggedIn=e}},qe={fetchQuestions({commit:t}){return Ee().then(e=>t("setQuestions",e))},postResults({commit:t,state:e},s){return $e(s,e.username).then(()=>t("setResultsPosted",!0))},loginAdmin({commit:t},{email:e,password:s}){return je(e,s).then(()=>t("setAdminLogged",!0))}},Te={maxQuestionsCount(t){return t.questions.length}},De=H({state:Se,getters:Te,actions:qe,mutations:ke});J(ee).use(L).use(De).mount("#app");export{_e as G,ue as _,oe as a};