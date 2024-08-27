import{r as g,u as d,c as k,j as a,s as o}from"./app-DJnPb4GH.js";import{c as L,a as C}from"./tickets-thunk-DP43LohU.js";import"./postcss-CL1AUv1W.js";import{S as c,I as S}from"./select-DO0v1nh1.js";import{T as w,R as T,D as N}from"./textarea-BZy7tpKw.js";import{g as U}from"./it-thunk-CNZzeotb.js";import{s as D}from"./app-thunk-DWvRYN2T.js";import{h as r}from"./moment-C5S46NFB.js";import{s as O}from"./index-CpRRCQH-.js";import{M as A}from"./index-BprmYrK9.js";import{U as I}from"./index-SzV_sjX0.js";import{B as P}from"./button-DDf6Di6x.js";import"./ticket-service-D6lnAQVL.js";import"./index-DclvsuAp.js";import"./index-DDxEUXhX.js";import"./EyeOutlined-BpKmkbpf.js";function Y({isOpen:f,closeModal:m}){const[h,u]=g.useState(!1),{RangePicker:x}=N,[t,i]=g.useState({status:"Pending"}),{users:l}=d(e=>e.it),{user:p}=d(e=>e.app);k();const[v,b]=O.useMessage(),{allCategories:j}=d(e=>e.category);function _(e){return!(e==null?void 0:e.some(n=>n.status!=="done"))}async function y(e){e.preventDefault(),u(!0);const s=new FormData;if(s.append("assigned_to",t.assigned_to),s.append("category_id",t.category_id),s.append("details",t.details),s.append("status",t.status),s.append("isUrgent",t.isUrgent),s.append("user_id",p.id),s.append("start",(t==null?void 0:t.start)??r().format("LLLL")),s.append("end",(t==null?void 0:t.end)??r().format("LLLL")),_(t.files)&&t.files)for(let n=0;n<t.files.length;n++)t.files[n].name!=="uploaded"&&t.files[n].status=="done"&&s.append("files[]",t.files[n].originFileObj);await o.dispatch(L(s)),await o.dispatch(U(2)),await o.dispatch(C(p)),await o.dispatch(D(s)),v.success("Created Successfully!"),i({}),m(),u(!1)}return a.jsxs(a.Fragment,{children:[b,a.jsx(A,{title:"Ticket Information",okText:"Submit",onOk:y,confirmLoading:h,open:f,onCancel:m,children:a.jsxs("form",{className:"max-w-full mx-auto mt-4 ",children:[a.jsxs("div",{className:"grid md:gap-6",children:[a.jsx(c,{value:t.category_id,label:"Category",name:"category_id",onChange:e=>i({...t,category_id:e.target.value}),options:j.map(e=>({label:e.name,value:e.id}))}),t.category_id=="Others"&&a.jsx(S,{onChange:e=>i({...t,others:e.target.value}),value:t.others??"",required:"true",name:"others",label:"Other Request",type:"text"})]}),a.jsx("div",{className:"grid md:gap-6 mt-4 ",children:a.jsx(x,{onChange:e=>i({start:r(e[0].$d).format("LLLL"),end:r(e[1].$d).format("LLLL")}),showTime:!0})}),a.jsx("div",{className:"grid md:gap-6 mt-4 ",children:a.jsx(w,{onChange:e=>i({...t,details:e.target.value}),value:t.details??"",required:"true",name:"details",label:"Request Details",type:"text"})}),a.jsx("div",{className:"relative z-0 w-full mb-6 group mt-4 ",children:a.jsx(c,{value:t.assigned_to,label:"Select IT Personnel",name:"assigned_to",onChange:e=>i({...t,assigned_to:e.target.value}),options:l==null?void 0:l.data.map(e=>({label:e.name,value:e.id}))})}),a.jsx("div",{className:"relative z-0 w-full mb-6 group",children:a.jsx(c,{value:t.status,label:"Status",name:"status",onChange:e=>i({...t,status:e.target.value}),options:[{name:"Pending",value:"Pending"},{name:"Assigned",value:"Assigned"},{name:"Ongoing",value:"Ongoing"},{name:"Closed",value:"Closed"}].map(e=>({label:e.name,value:e.id}))})}),a.jsx(I,{onChange:e=>i({...t,files:e.fileList}),multiple:!0,action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",method:"GET",className:"upload-list-inline",children:a.jsx(P,{icon:a.jsx(T,{}),children:"Upload"})}),a.jsxs("div",{class:"flex items-center my-4",children:[a.jsx("input",{id:"default-checkbox",type:"checkbox",checked:t.isUrgent=="true",name:"isUrgent",onChange:e=>i({...t,[e.target.name]:JSON.stringify(e.target.checked)}),class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2 "}),a.jsx("label",{for:"default-checkbox",class:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Is Urgent"})]})]})})]})}export{Y as default};
