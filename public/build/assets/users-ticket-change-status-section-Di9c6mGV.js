import{r as i,u as p,j as a,s as h}from"./app-B6Ttdtr0.js";import{u as x}from"./tickets-thunk-D9vHGgUs.js";import{s as g}from"./index-BUIQLY2G.js";import{B as S}from"./button-CSFOOuKo.js";import{M as T}from"./index-CwX0-Uwl.js";import{S as C}from"./index-zBndjqtU.js";import{I as _}from"./index-zd_-ZTB3.js";import"./ticket-service-DJcxKhLj.js";import"./index-BYr2ISfK.js";import"./AntdIcon-eRVxngrf.js";import"./index-B55d8Cfg.js";import"./ContextIsolator-BFihYbHP.js";import"./motion-Bxwb7-zQ.js";import"./PurePanel-_9pE5wN3.js";import"./CheckOutlined-DM6qyx1h.js";import"./index-Dy80wF40.js";import"./EyeOutlined-DTmCvcWI.js";const{TextArea:w}=_;function F(){var c;const[u,r]=i.useState(!1),[l,d]=g.useMessage(),{users:n}=p(t=>t.it),{user:s}=p(t=>t.app);console.log("useruser",s);const[e,o]=i.useState({status:"Close ticket",user_id:s==null?void 0:s.id,ticket_id:window.location.pathname.split("/")[4],assigned_to:(c=n[0])==null?void 0:c.id});i.useEffect(()=>{var t;o({...e,user_id:s==null?void 0:s.id,assigned_to:(t=n[0])==null?void 0:t.id})},[e.status]),i.useEffect(()=>{},[]);const m=()=>{r(!0)};async function f(t){e.notes?(await h.dispatch(x(e)),o({status:"Close ticket",ticket_id:window.location.pathname.split("/")[3],assigned_to:n[0]}),l.success("Updated Success!"),r(!1)):l.error("Notes is required!")}const k=()=>{r(!1)};return a.jsxs("div",{children:[d,a.jsx(S,{size:"large",type:"primary",onClick:m,children:"Update Ticket Status"}),a.jsx(T,{title:"Update Ticket Status",open:u,onOk:f,okText:"Submit",onCancel:k,children:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(C,{size:"large",value:e.status,className:"w-full",onChange:t=>o({...e,status:t}),options:[{value:"Close ticket",label:"Close Ticket"},{value:"Transfer Ticket",label:"Transfer Ticket"},{value:"Declined Ticket",label:"Declined Ticket"}]}),a.jsx(w,{value:e.notes??"",onChange:t=>o({...e,notes:t.target.value}),placeholder:"Notes",autoSize:{minRows:3,maxRows:5}})]})})]})}export{F as default};
