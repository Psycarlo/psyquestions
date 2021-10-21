var q=Object.defineProperty;var g=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var y=(o,t,s)=>t in o?q(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s,w=(o,t)=>{for(var s in t||(t={}))B.call(t,s)&&y(o,s,t[s]);if(g)for(var s of g(t))R.call(t,s)&&y(o,s,t[s]);return o};import{f as z,u as V,e as l,A as f,g as A,o as D,a as L,h as M,i as b,B as Q,b as e,C as a,D as k,d as C}from"./vendor.edfc0b5e.js";import{_ as N,a as S}from"./index.0f4ab213.js";const T={class:"min-h-screen flex flex-col bg-dark text-light justify-between overflow-x-hidden"},$={class:"flex flex-col justify-center items-center space-y-28"},E={class:"text-light font-bold text-3xl"},G=C(" Question "),H={class:"text-primary"},P=C(" of "),F={class:"text-primary"},J={class:"flex flex-col items-center space-y-6 text-6xl font-bold max-w-6xl px-12 text-center"},K={class:"max-w-4xl leading-relaxed"},O={class:"text-primary has-tooltip"},U={class:"tooltip bg-dark-input rounded-lg px-5 py-3 text-base text-light"},W=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 mb-3",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"})],-1),X={class:"flex space-x-12"},Y={class:"flex flex-col justify-center items-center"},Z=e("svg",{class:"animate-spin -ml-1 mr-3 h-12 w-12 text-primary",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),tt=[Z],et=e("div",{class:"flex justify-center"},[e("img",{src:S,alt:"Logo",class:"w-48"})],-1),at={setup(o){const t=z(),s=V(),r=l(!0),d=f(()=>t.getters.maxQuestionsCount),c=f(()=>t.state.questions),i=f(()=>t.state.currentQuestionId),x=l(""),p=l(""),m=l(""),v=l("");function I(){t.commit("setCurrentQuestionId",1),_()}function h(n){t.commit("setResult",{id:i.value,choice:n}),t.commit("setCurrentQuestionId",i.value+1),i.value>d.value?(t.dispatch("postResults",w({},t.state.results)),s.push({name:"Results"})):_()}function _(){const n=i.value-1;x.value=c.value[n].questionInfo.text,p.value=c.value[n].questionInfo.green,m.value=c.value[n].questionInfo.red,v.value=c.value[n].questionInfo.tooltip}return A(async()=>{r.value=!0,await t.dispatch("fetchQuestions"),t.commit("setResultsPosted",!1),r.value=!1,d.value>0?I():s.push({name:"Landing"})}),(n,u)=>(D(),L("div",T,[M(N),b(e("div",$,[e("p",E,[G,e("span",H,a(k(i)),1),P,e("span",F,a(k(d)),1)]),e("h1",J,[e("span",K,a(x.value),1),e("div",O,[e("span",U,a(v.value),1),W])]),e("div",X,[e("button",{class:"font-bold text-xl flex justify-center py-3 px-16 rounded-md bg-gradient-to-l from-primary-dark to-primary-light transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105",onClick:u[0]||(u[0]=j=>h("green"))},a(p.value),1),e("button",{class:"font-bold text-xl flex justify-center py-3 px-16 rounded-md bg-gradient-to-l from-warning-dark to-warning-light transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105",onClick:u[1]||(u[1]=j=>h("red"))},a(m.value),1)])],512),[[Q,!r.value]]),b(e("div",Y,tt,512),[[Q,r.value]]),et]))}};export{at as default};