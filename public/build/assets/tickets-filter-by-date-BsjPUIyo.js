import{r as t,j as e}from"./app-Crw4bLok.js";import{D as m}from"./index-COvEeTEl.js";import{I as g,_ as v}from"./AntdIcon-DMyt6xI9.js";import"./PurePanel-Bj63WWFE.js";import"./motion-Cfygqazw.js";import"./button-Dbuzzx13.js";import"./index-BpqW2_SN.js";import"./CheckOutlined-NYdPttu4.js";import"./index-DlWvhqu0.js";import"./roundedArrow-BY0ESw1X.js";function D({title:a,titleId:r,...s},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},s),a?t.createElement("title",{id:r},a):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"}))}const h=t.forwardRef(D);var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},j=function(r,s){return t.createElement(g,v({},r,{ref:s,icon:b}))},w=t.forwardRef(j);function F(){const[a,r]=t.useState(null),[s,o]=t.useState(null),[c,l]=t.useState(!1),[d,i]=t.useState(!1),p=n=>{r(n),l(!1)},x=n=>{o(n),i(!1)},u=()=>{l(!0),i(!1)},f=()=>{i(!0),l(!1)};return e.jsxs("div",{className:"flex flex-1 justify-end gap-2",children:[e.jsxs("div",{className:"relative flex items-center",children:[e.jsx("input",{id:"start-date",type:"text",placeholder:"Start Date",value:a?a.format("YYYY-MM-DD"):"",onChange:n=>r(n.target.value),onFocus:u,className:"h-12 w-full pl-10 pr-10 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx(h,{className:"absolute h-6 left-3 top-7 text-gray-400 cursor-pointer",onClick:u}),c&&e.jsx("div",{className:"absolute top-12 left-0 z-10",children:e.jsx(m,{open:c,onChange:p,value:a,onClickOutside:()=>l(!1)})})]}),e.jsx("div",{className:"mt-7",children:e.jsx(w,{})}),e.jsxs("div",{className:"relative flex items-center",children:[e.jsx("input",{id:"end-date",type:"text",placeholder:"End Date",value:s?s.format("YYYY-MM-DD"):"",onChange:n=>o(n.target.value),onFocus:f,className:"h-12 w-full pl-10 pr-10 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"}),e.jsx(h,{className:"absolute h-6 left-3 top-7 text-gray-400 cursor-pointer",onClick:f}),d&&e.jsx("div",{className:"absolute top-12 left-0 z-10",children:e.jsx(m,{open:d,onChange:x,value:s,onClickOutside:()=>i(!1)})})]})]})}export{F as default};
