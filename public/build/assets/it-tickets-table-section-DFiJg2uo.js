import{u as m,r as c,j as t,y as d}from"./app-B0kkCG56.js";import{h as x}from"./moment-C5S46NFB.js";import{T as u}from"./table-dzDBuzN7.js";import{P as f}from"./pagination-CT3vp-Fk.js";import{F as p}from"./UserIcon-BVcUFtbD.js";import{F as g}from"./ExclamationTriangleIcon-aAdkmNsG.js";import{F as h}from"./TicketIcon-CUDmP_nH.js";function v(){const{tickets:a}=m(e=>e.it),[n,o]=c.useState([]),r=[{title:"Name of Requestor",key:"name"},{title:"Ticket No.",key:"ticket_id"},{title:"Assigned I.T Personnel",key:"assigned_to"},{title:"Status",key:"status"},{title:"Date Filed",key:"created_at"},{title:"Action",key:"action"}],l=a==null?void 0:a.data.map(e=>{var s,i;return{...e,name:((s=e==null?void 0:e.user)==null?void 0:s.name)??"",assigned_to:((i=e==null?void 0:e.assigned_to)==null?void 0:i.name)??"",created_at:x(e.created_at).format("LLL"),status:t.jsxs(t.Fragment,{children:[e.isUrgent&&t.jsxs("div",{class:"bg-yellow-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500",children:[t.jsx(p,{className:"w-4 h-4 mr-1"}),e.status]}),e.isUrgent=="true"&&t.jsxs("div",{className:"bg-red-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border border-transparent animate-border-glow",children:[t.jsx(g,{className:"w-4 h-4 mr-1"}),"Urgent"]})]}),action:t.jsx("div",{className:"flex gap-4",children:t.jsxs("button",{onClick:()=>d.visit("/employee/it/tickets/"+e.id+"/details"),type:"button",class:"text-white bg-[#2557D6] gap-2 hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center",children:[t.jsx(h,{className:"size-5 "}),"View Ticket"]})})}});return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex flex-col items-center justify-between h-[85vh] w-full",children:[t.jsx(u,{setDataChecked:o,dataChecked:n,columns:r,data:l,isCheckbox:!0}),t.jsx(f,{data:a})]})})}export{v as default};
