import{r as m,u as x,j as e}from"./app-mW58wLc5.js";import{R as f}from"./index-DAYABvmz.js";function j({data:t}){const[i,n]=m.useState(null);x(s=>s.admin);const r=new Date().toISOString().split("T")[0],c=t==null?void 0:t.daily.find(s=>s.title===r),a=c?c.count:0,o=(s,l,d)=>{console.log("Clicked segment:",l)};return console.log("datass",t),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-2",children:["Daily Tickets: ",a]}),e.jsxs("div",{className:"flex w-full items-start justify-between",children:[e.jsxs("div",{className:"flex flex-1 flex-col gap-0.5 text-md",children:[e.jsxs("div",{className:"flex items-center text-yellow-400",children:[e.jsx("div",{className:"ml-1",children:"Pending:"}),e.jsx("div",{className:"ml-1 text-md"})]}),e.jsxs("div",{className:"flex text-[#e86100] items-center",children:[e.jsx("div",{className:"ml-1",children:"Urgent:"}),e.jsx("div",{className:"ml-1 text-md"})]}),e.jsxs("div",{className:"flex text-blue-400 items-center",children:[e.jsx("div",{className:"ml-1",children:"Assigned:"}),e.jsx("div",{className:"ml-1 text-md"})]})]}),e.jsxs("div",{className:"flex flex-1 flex-col gap-0.5 text-md",children:[e.jsxs("div",{className:"flex text-green-600 items-center",children:[e.jsx("div",{className:"ml-1",children:"Closed:"}),e.jsx("div",{className:"ml-1 text-md"})]}),e.jsxs("div",{className:"flex text-[#ff0000] items-center",children:[e.jsx("div",{className:"ml-1",children:"Declined:"}),e.jsx("div",{className:"ml-1 text-md"})]})]})]}),e.jsx(f,{style:{height:"300px"},lineWidth:55,animate:!0,animationDuration:1e3,label:({dataEntry:s})=>`${Math.round(s.percentage)}%`,labelStyle:s=>({fill:"black",fontSize:"7px",fontFamily:"sans-serif",transform:s===i?"scale(1.1)":"scale(1)",transition:"transform 0.3s"}),labelPosition:74,paddingAngle:1.8,onMouseOver:(s,l,d)=>{n(l)},onMouseOut:()=>{n(null)},onClick:(s,l,d)=>{o(s,l)},data:[{title:"Urgent",value:a,color:"#e86100"},{title:"Closed",value:a,color:"#009e60"},{title:"Assigned",value:0,color:"#4299E1"},{title:"Pending",value:a,color:"#FFFF00"},{title:"Declined",value:0,color:"#ff0000"}].filter(s=>s.value>0),segmentsStyle:s=>({transition:"transform 0.3s",transform:s===i?"scale(1.1)":"scale(1)"})})]})}export{j as default};
