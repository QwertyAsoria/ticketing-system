import{r as i,u,j as a,s as h}from"./app-BTuROzd9.js";import{u as x}from"./tickets-thunk-DhEQvO2C.js";import{s as g}from"./index-CDkIByKi.js";import{B as S}from"./button-C3is_vqe.js";import{M as T}from"./index-BA6weFo9.js";import{S as C,I as _}from"./index-_IyuWF-T.js";import"./ticket-service-29oCKFKf.js";import"./index-B7EHoDRv.js";import"./index-CGQKi3fr.js";import"./EyeOutlined-C-fkHqF9.js";const{TextArea:w}=_;function D(){var r;const[d,n]=i.useState(!1),[c,p]=g.useMessage(),{users:l}=u(e=>e.it),{user:s}=u(e=>e.app);console.log("useruser",s);const[t,o]=i.useState({status:"Close ticket",user_id:s==null?void 0:s.id,ticket_id:window.location.pathname.split("/")[4],assigned_to:(r=l[0])==null?void 0:r.id});i.useEffect(()=>{var e;o({...t,user_id:s==null?void 0:s.id,assigned_to:(e=l[0])==null?void 0:e.id})},[t.status]),i.useEffect(()=>{},[]);const m=()=>{n(!0)};async function f(e){t.notes?(await h.dispatch(x(t)),o({status:"Close ticket",ticket_id:window.location.pathname.split("/")[3],assigned_to:l[0]}),c.success("Updated Success!"),n(!1)):c.error("Notes is required!")}const k=()=>{n(!1)};return a.jsxs("div",{children:[p,a.jsx(S,{size:"large",type:"primary",onClick:m,children:"Update Ticket Status"}),a.jsx(T,{title:"Update Ticket Status",open:d,onOk:f,okText:"Submit",onCancel:k,children:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(C,{size:"large",value:t.status,className:"w-full",onChange:e=>o({...t,status:e}),options:[{value:"Close ticket",label:"Close Ticket"},{value:"Transfer Ticket",label:"Transfer Ticket"},{value:"Declined Ticket",label:"Declined Ticket"}]}),a.jsx(w,{value:t.notes??"",onChange:e=>o({...t,notes:e.target.value}),placeholder:"Notes",autoSize:{minRows:3,maxRows:5}})]})})]})}export{D as default};