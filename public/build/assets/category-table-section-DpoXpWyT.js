import{u as r,r as l,j as e,y as m}from"./app-DWyUH7ES.js";import"./ToggleSwitch-DTdiwpci.js";import"./moment-C5S46NFB.js";import{T as d}from"./table-zQ4cKhRQ.js";import{P as g}from"./pagination-GJcZ9vTb.js";import{F as p}from"./TicketIcon-CODt-vw7.js";import"./index-DoeBmNjZ.js";import"./floating-ui.react-dom-ci-hPrC6.js";function b(){const{categories:s}=r(t=>t.category),[o,a]=l.useState([]),n=[{title:"Name of Category",key:"name"},{title:"Pending Tickets",key:"pending"},{title:"Assigned Tickets",key:"assigned"},{title:"Ongoing Tickets",key:"ongoing"},{title:"Closed Tickets",key:"closed"},{title:"Total Tickets",key:"total"},{title:"Action",key:"action"}],i=Object.entries(s.data).map(t=>({...t[1]})),c=i==null?void 0:i.map(t=>({...t,action:e.jsx("div",{className:"flex gap-4",children:e.jsxs("button",{onClick:()=>m.visit("/admin/category/"+t.id+"?page=1"),type:"button",class:"text-white bg-[#2557D6] gap-2 hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center",children:[e.jsx(p,{className:"size-5 "}),"View Ticket"]})})}));return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col items-center justify-between h-[85vh] w-full",children:[e.jsx(d,{setDataChecked:a,dataChecked:o,columns:n,data:c,isCheckbox:!0}),e.jsx(g,{data:s})]})})}export{b as default};