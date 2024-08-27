import{r as p,u as d,j as s,s as o}from"./app-DJnPb4GH.js";import"./postcss-CL1AUv1W.js";import{c as j}from"./tickets-thunk-DP43LohU.js";import{S as L,I as b}from"./select-DO0v1nh1.js";import{a as v}from"./it-thunk-CNZzeotb.js";import{a as C}from"./category-thunk-g6Qu1uGg.js";import{T as S,R as U,D as T}from"./textarea-BZy7tpKw.js";import{s as w}from"./app-thunk-DWvRYN2T.js";import{h as n}from"./moment-C5S46NFB.js";import{s as D}from"./index-CpRRCQH-.js";import{M as N}from"./index-BprmYrK9.js";import{U as O}from"./index-SzV_sjX0.js";import{B as R}from"./button-DDf6Di6x.js";import"./ticket-service-D6lnAQVL.js";import"./index-DclvsuAp.js";import"./index-DDxEUXhX.js";import"./EyeOutlined-BpKmkbpf.js";function X({isOpen:u,closeModal:l}){const[g,c]=p.useState(!1),[e,i]=p.useState({status:"Pending"});d(t=>t.it);const{user:m}=d(t=>t.app),[f,h]=D.useMessage(),{RangePicker:x}=T,{allCategories:y}=d(t=>t.category);function _(t){return!(t==null?void 0:t.some(r=>r.status!=="done"))}async function k(t){t.preventDefault(),c(!0);const a=new FormData;if(a.append("assigned_to",e.assigned_to),a.append("category_id",e.category_id),a.append("details",e.details),a.append("status",e.status),a.append("isUrgent",e.isUrgent),a.append("user_id",m.id),a.append("others",e.others),a.append("start",(e==null?void 0:e.start)??n().format("LLLL")),a.append("end",(e==null?void 0:e.end)??n().format("LLLL")),_(e.files)&&e.files)for(let r=0;r<e.files.length;r++)e.files[r].name!=="uploaded"&&e.files[r].status=="done"&&a.append("files[]",e.files[r].originFileObj);await o.dispatch(j(a)),await o.dispatch(v(m.id)),await o.dispatch(w(a)),e.category_id=="Others"&&o.dispatch(C()),f.success("Created Successfully!"),i({status:"Pending"}),l(),c(!1)}return s.jsxs(s.Fragment,{children:[h,s.jsx(N,{title:"Ticket Information",okText:"Submit",onOk:k,confirmLoading:g,open:u,onCancel:l,children:s.jsxs("form",{className:"max-w-full mx-auto mt-4 ",children:[s.jsxs("div",{className:"grid md:gap-6",children:[s.jsx(L,{value:e.category_id,label:"Category",name:"category_id",onChange:t=>i({...e,category_id:t.target.value}),options:y.map(t=>({label:t.name,value:t.id}))}),e.category_id=="Others"&&s.jsx(b,{onChange:t=>i({...e,others:t.target.value}),value:e.others??"",required:"true",name:"others",label:"Other Request",type:"text"})]}),s.jsx("div",{className:"grid md:gap-6 mt-4 ",children:s.jsx(x,{onChange:t=>i({start:n(t[0].$d).format("LLLL"),end:n(t[1].$d).format("LLLL")}),showTime:!0})}),s.jsx("div",{className:"grid md:gap-6 mt-4 ",children:s.jsx(S,{onChange:t=>i({...e,details:t.target.value}),value:e.details??"",required:"true",name:"details",label:"Request Details",type:"text"})}),s.jsx(O,{onChange:t=>i({...e,files:t.fileList}),multiple:!0,action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",method:"GET",className:"upload-list-inline",children:s.jsx(R,{icon:s.jsx(U,{}),children:"Upload"})}),s.jsxs("div",{class:"flex items-center my-4",children:[s.jsx("input",{id:"default-checkbox",type:"checkbox",value:"",name:"isUrgent",checked:e.isUrgent=="true",onChange:t=>i({...e,[t.target.name]:JSON.stringify(t.target.checked)}),class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2 "}),s.jsx("label",{for:"default-checkbox",class:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Is Urgent"})]})]})})]})}export{X as default};
