import{r as i,u,j as a,s as h}from"./app-BHD8ReDI.js";import{u as x}from"./tickets-thunk-3JgiZ3A3.js";import{s as g}from"./index-Iw6C1AAY.js";import{B as S}from"./button-B9bhptDA.js";import{M as T}from"./index-BAyVL5NA.js";import{S as C,I as _}from"./index-BWFjUY4d.js";import"./ticket-service-DXNIPEv6.js";import"./AntdIcon-DMIJ_wQg.js";import"./index-D5GYr07V.js";import"./index-CU2vMnlY.js";import"./EyeOutlined-BWiE4XDh.js";const{TextArea:w}=_;function I(){var r;const[d,n]=i.useState(!1),[c,p]=g.useMessage(),{users:l}=u(e=>e.it),{user:s}=u(e=>e.app);console.log("useruser",s);const[t,o]=i.useState({status:"Close ticket",user_id:s==null?void 0:s.id,ticket_id:window.location.pathname.split("/")[4],assigned_to:(r=l[0])==null?void 0:r.id});i.useEffect(()=>{var e;o({...t,user_id:s==null?void 0:s.id,assigned_to:(e=l[0])==null?void 0:e.id})},[t.status]),i.useEffect(()=>{},[]);const m=()=>{n(!0)};async function f(e){t.notes?(await h.dispatch(x(t)),o({status:"Close ticket",ticket_id:window.location.pathname.split("/")[3],assigned_to:l[0]}),c.success("Updated Success!"),n(!1)):c.error("Notes is required!")}const k=()=>{n(!1)};return a.jsxs("div",{children:[p,a.jsx(S,{size:"large",type:"primary",onClick:m,children:"Update Ticket Status"}),a.jsx(T,{title:"Update Ticket Status",open:d,onOk:f,okText:"Submit",onCancel:k,children:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(C,{size:"large",value:t.status,className:"w-full",onChange:e=>o({...t,status:e}),options:[{value:"Close ticket",label:"Close Ticket"},{value:"Transfer Ticket",label:"Transfer Ticket"},{value:"Declined Ticket",label:"Declined Ticket"}]}),a.jsx(w,{value:t.notes??"",onChange:e=>o({...t,notes:e.target.value}),placeholder:"Notes",autoSize:{minRows:3,maxRows:5}})]})})]})}export{I as default};
