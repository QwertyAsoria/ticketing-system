import{u as m,r as C,j as t,y as d}from"./app-CXcktFyz.js";import{h as F}from"./moment-C5S46NFB.js";import{T as R}from"./table-CY18W5WY.js";import{P as _}from"./pagination-D8Qjwg9P.js";import{S as f}from"./index-lYktPUCu.js";import{F as D,R as L,a as T}from"./FieldTimeOutlined-bgRqR7uW.js";import{F as U}from"./XMarkIcon-Ydqm7Abi.js";import{F as $}from"./ExclamationTriangleIcon-BNTfy4Ol.js";import{F as I}from"./TicketIcon-B3euxDtm.js";import"./index-BVQOK3vj.js";import"./AntdIcon-G1-A63m7.js";import"./compact-item-DlIdH17i.js";import"./motion-DZL4ZZkZ.js";import"./CheckOutlined-BrWinpls.js";import"./useIcons-DY7QPZUe.js";import"./PurePanel-DKnmUo7d.js";function ee(){var x;const{tickets:n}=m(e=>e.tickets),{categories:i}=m(e=>e.category),{users:o}=m(e=>e.it),[w,y]=C.useState([]),j=window.location.pathname+window.location.search;console.log("categoriescategories",i);const b=new URL(window.location.href),u=new URLSearchParams(b.search);u.get("page");const v=u.get("category_id")||null;function N(e){const a=new URLSearchParams(window.location.search);a.set("category_id",e||"null"),d.visit(window.location.pathname+"?"+a.toString())}const P=Object.values(i.data).map(e=>({label:e.name,value:e.id})),r=Object.values(i.data).find(e=>e.id==v),S=[{title:"Name of Requestor",key:"name"},{title:"Ticket No.",key:"ticket_id"},{title:t.jsx("div",{className:"flex gap-3 items-center justify-center",children:t.jsx(f,{allowClear:!0,className:"w-40 mr-4",showSearch:!0,placeholder:"I.T Personnel",optionFilterProp:"label",defaultValue:(o==null?void 0:o.name)??null,onChange:e=>setData({...g,assigned_to:e}),options:[{value:"",label:"SCIT Department"},...(x=o==null?void 0:o.data)==null?void 0:x.map(e=>({value:e==null?void 0:e.id,label:e==null?void 0:e.name}))]})}),key:"assigned_to"},{title:"Status",key:"status"},{title:"Date Filed",key:"created_at"},{title:t.jsx("div",{className:"flex gap-3 items-center justify-center",children:t.jsx(f,{allowClear:!0,className:"w-36 mr-4",showSearch:!0,placeholder:"Category",optionFilterProp:"label",defaultValue:(r==null?void 0:r.name)??null,onChange:N,options:P})}),key:"category_id"},{title:"Action",key:"action"}],g=n==null?void 0:n.data.map(e=>{var a,s,p;return{...e,name:((a=e==null?void 0:e.user)==null?void 0:a.name)??"",assigned_to:((s=e==null?void 0:e.assigned_to)==null?void 0:s.name)??"",category_id:((p=e==null?void 0:e.category)==null?void 0:p.name)??"",created_at:F(e.created_at).format("LLL"),status:t.jsxs(t.Fragment,{children:[e.status==="Assigned"&&t.jsxs("div",{className:"bg-blue-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500",children:[t.jsx(D,{className:"w-4 h-4"})," Assigned"]}),e.status==="Pending"&&t.jsxs("div",{className:"bg-yellow-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500",children:[t.jsx(L,{})," Pending"]}),e.status==="Closed"&&t.jsxs("div",{className:"bg-green-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500",children:[t.jsx(T,{className:"w-4 h-4"})," Closed"]}),e.status==="Declined"&&t.jsxs("div",{className:"bg-red-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border-gray-500",children:[t.jsx(U,{className:"w-4 h-4"})," Declined"]}),e.isUrgent==="true"&&t.jsxs("div",{className:"bg-red-600 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border border-transparent animate-border-glow",children:[t.jsx($,{className:"w-4 h-4 mr-1"}),"Urgent"]})]}),action:t.jsx("div",{className:"flex gap-4",children:t.jsxs("button",{onClick:()=>d.visit("/admin/tickets/"+e.id+"/details"),type:"button",class:"text-white bg-[#2557D6] gap-2 hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center",children:[t.jsx(I,{className:"size-5 "}),"View Ticket"]})})}}),h=((e,a)=>new URLSearchParams(e.split("?")[1]).get(a))(j,"page"),l=h?parseInt(h,10):1,k=e=>{const a=new URLSearchParams(window.location.search);a.set("page",e);const s=window.location.pathname+"?"+a.toString();d.visit(s)},c=10;return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex flex-col items-center justify-between h-[85vh] w-full",children:[t.jsx(R,{pagination:!1,setDataChecked:y,dataChecked:w,columns:S,data:g,isCheckbox:!0,dataSource:n.data}),t.jsx("div",{className:"w-full mt-3.5",children:n.total>0?`Showing ${(l-1)*c+1} to ${Math.min(l*c,n.total)} of ${n.total} entries`:"No entries available"}),t.jsx(_,{onChange:k,defaultCurrent:l,total:n.total,pageSize:c,showSizeChanger:!1,data:n})]})})}export{ee as default};
