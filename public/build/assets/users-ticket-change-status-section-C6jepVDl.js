import{r as i,u as p,j as a,s as h}from"./app-B9SUbSwL.js";import{u as x}from"./tickets-thunk-BgSP79-P.js";import{s as g}from"./index-CIm4nDY_.js";import{B as S}from"./button-Da9L2JOs.js";import{M as T}from"./index-DycaQySp.js";import{S as C}from"./index-V0xvCl_G.js";import{I as _}from"./index-cb7AnLkJ.js";import"./ticket-service-CfiMaVB9.js";import"./compact-item-ngQTwuTc.js";import"./AntdIcon-DxF_eBZZ.js";import"./index-Ce3OgiKg.js";import"./index-m7lnpTcW.js";import"./motion-BhzBhWIN.js";import"./PurePanel-DH0804kL.js";import"./CheckOutlined-DBPTmsPs.js";import"./useIcons-Dr7fIjf4.js";import"./EyeOutlined-CeZBeH9A.js";const{TextArea:w}=_;function F(){var c;const[u,r]=i.useState(!1),[l,d]=g.useMessage(),{users:n}=p(t=>t.it),{user:s}=p(t=>t.app);console.log("useruser",s);const[e,o]=i.useState({status:"Close ticket",user_id:s==null?void 0:s.id,ticket_id:window.location.pathname.split("/")[4],assigned_to:(c=n[0])==null?void 0:c.id});i.useEffect(()=>{var t;o({...e,user_id:s==null?void 0:s.id,assigned_to:(t=n[0])==null?void 0:t.id})},[e.status]),i.useEffect(()=>{},[]);const m=()=>{r(!0)};async function f(t){e.notes?(await h.dispatch(x(e)),o({status:"Close ticket",ticket_id:window.location.pathname.split("/")[3],assigned_to:n[0]}),l.success("Updated Success!"),r(!1)):l.error("Notes is required!")}const k=()=>{r(!1)};return a.jsxs("div",{children:[d,a.jsx(S,{size:"large",type:"primary",onClick:m,children:"Update Ticket Status"}),a.jsx(T,{title:"Update Ticket Status",open:u,onOk:f,okText:"Submit",onCancel:k,children:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(C,{size:"large",value:e.status,className:"w-full",onChange:t=>o({...e,status:t}),options:[{value:"Close ticket",label:"Close Ticket"},{value:"Transfer Ticket",label:"Transfer Ticket"},{value:"Declined Ticket",label:"Declined Ticket"}]}),a.jsx(w,{value:e.notes??"",onChange:t=>o({...e,notes:t.target.value}),placeholder:"Notes",autoSize:{minRows:3,maxRows:5}})]})})]})}export{F as default};
