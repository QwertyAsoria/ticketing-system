import{r as g,u as d,b as L,j as a,s as o}from"./app-CstDbsAm.js";import{c as C,g as S}from"./tickets-thunk-CCLYkWWC.js";import{T as w,R as N}from"./textarea-C8KOP9Ar.js";import{S as m,I as f}from"./select-DL3pmj4v.js";import{g as T}from"./it-thunk-C3bCZV12.js";import{s as U}from"./app-thunk-BW8hn8fj.js";import{h as r}from"./moment-C5S46NFB.js";import{s as D}from"./index-BPoYZRuJ.js";import{M as O}from"./index-BIrZKbMM.js";import{U as P}from"./index-B2T2F8ii.js";import{B as A}from"./button-ogBTzPuf.js";import{D as I}from"./index-DVfMr5w-.js";import"./ticket-service-CfNg0hrY.js";import"./AntdIcon-oKzO5NXk.js";import"./index-C9suOPmA.js";import"./index-CXX5a5tm.js";import"./ContextIsolator-WLTAEcsw.js";import"./motion-BIsQHT0U.js";import"./PurePanel-Cqgkkehg.js";import"./useForceUpdate-C9nRqEE6.js";import"./EyeOutlined-paKgU9Tx.js";import"./CheckOutlined-DVWHnF8q.js";import"./roundedArrow-CMqDTsn5.js";import"./index-CgmVUvii.js";function oe({isOpen:h,closeModal:c}){const[x,u]=g.useState(!1),{RangePicker:v}=I,[t,i]=g.useState({status:"Pending"}),{users:l}=d(e=>e.it),{user:p}=d(e=>e.app);L();const[b,j]=D.useMessage(),{allCategories:y}=d(e=>e.category);function _(e){return!(e==null?void 0:e.some(n=>n.status!=="done"))}async function k(e){e.preventDefault(),u(!0);const s=new FormData;if(s.append("assigned_to",t.assigned_to),s.append("category_id",t.category_id),s.append("details",t.details),s.append("station",t.station),s.append("status",t.status),s.append("isUrgent",t.isUrgent),s.append("user_id",p.id),s.append("start",(t==null?void 0:t.start)??r().format("LLLL")),s.append("end",(t==null?void 0:t.end)??r().format("LLLL")),_(t.files)&&t.files)for(let n=0;n<t.files.length;n++)t.files[n].name!=="uploaded"&&t.files[n].status=="done"&&s.append("files[]",t.files[n].originFileObj);await o.dispatch(C(s)),await o.dispatch(T(2)),await o.dispatch(S(p)),await o.dispatch(U(s)),b.success("Created Successfully!"),i({}),c(),u(!1)}return a.jsxs(a.Fragment,{children:[j,a.jsx(O,{title:"Ticket Information",okText:"Submit",onOk:k,confirmLoading:x,open:h,onCancel:c,children:a.jsxs("form",{className:"max-w-full mx-auto mt-4 ",children:[a.jsxs("div",{className:"grid md:gap-6",children:[a.jsx(m,{value:t.category_id,label:"Category",name:"category_id",required:"true",onChange:e=>i({...t,category_id:e.target.value}),options:y.map(e=>({label:e.name,value:e.id}))}),t.category_id=="Others"&&a.jsx(f,{onChange:e=>i({...t,others:e.target.value}),value:t.others??"",required:"true",name:"others",label:"Other Request",type:"text"})]}),a.jsx("div",{className:"grid md:gap-6 mt-4 ",children:a.jsx(v,{onChange:e=>i({...t,start:r(e[0].$d).format("LLLL"),end:r(e[1].$d).format("LLLL")}),showTime:!0})}),a.jsx("div",{className:"grid md:gap-6 mt-4 ",children:a.jsx(w,{onChange:e=>i({...t,details:e.target.value}),value:t.details??"",required:"true",name:"details",label:"Request Details",type:"text"})}),a.jsx("div",{className:"grid md:gap-6 mt-4 mb-7 ",children:a.jsx(f,{onChange:e=>i({...t,station:e.target.value}),value:t.station??"",name:"station",label:"PC/Station No.",type:"text"})}),a.jsx("div",{className:"relative z-0 w-full mb-6 group mt-4 ",children:a.jsx(m,{value:t.assigned_to,label:"Select IT Personnel",name:"assigned_to",onChange:e=>i({...t,assigned_to:e.target.value}),options:l==null?void 0:l.data.map(e=>({label:e.name,value:e.id}))})}),a.jsx("div",{className:"relative z-0 w-full mb-6 group",children:a.jsx(m,{value:t.status,label:"Status",name:"status",onChange:e=>i({...t,status:e.target.value}),options:[{name:"Pending",value:"Pending"},{name:"Assigned",value:"Assigned"},{name:"Ongoing",value:"Ongoing"},{name:"Closed",value:"Closed"}].map(e=>({label:e.name,value:e.id}))})}),a.jsx(P,{onChange:e=>i({...t,files:e.fileList}),multiple:!0,action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",method:"GET",className:"upload-list-inline",children:a.jsx(A,{icon:a.jsx(N,{}),children:"Upload"})}),a.jsxs("div",{class:"flex items-center my-4",children:[a.jsx("input",{id:"default-checkbox",type:"checkbox",checked:t.isUrgent=="true",name:"isUrgent",onChange:e=>i({...t,[e.target.name]:JSON.stringify(e.target.checked)}),class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2 "}),a.jsx("label",{for:"default-checkbox",class:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300",children:"Is Urgent"})]})]})})]})}export{oe as default};
