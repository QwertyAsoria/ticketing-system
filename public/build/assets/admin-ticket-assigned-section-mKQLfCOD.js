import{r as i,u,s as c,j as a}from"./app-DyOrHta8.js";import{u as S,a as j}from"./tickets-thunk-C_jbvjjn.js";import{g as w}from"./it-thunk-6qYrexss.js";import{s as A}from"./index-_RbgiPdK.js";import{B as M}from"./button-Dx9AUZLX.js";import{M as v}from"./index-BWMTPd3r.js";import{S as T}from"./index-DFFi0lrK.js";import{I as y}from"./index-DzqGPWWi.js";import"./ticket-service-D4G1uZ7G.js";import"./index-WytY374n.js";import"./AntdIcon-BxOBQlpw.js";import"./index-B6-bXYqP.js";import"./motion-B3QDYmsw.js";import"./motion-BlmYQP8R.js";import"./PurePanel-D0w0Do8J.js";import"./CheckOutlined-MD40u6pH.js";import"./index-CQr1DRig.js";import"./EyeOutlined-CDoOQ6BM.js";const{TextArea:C}=y;function Q(){var p,m;const[f,n]=i.useState(!1),[l,g]=A.useMessage(),{users:o}=u(t=>t.it),{user:e}=u(t=>t.app),[h,r]=i.useState(!1),[s,d]=i.useState({status:"Assigned",user_id:e==null?void 0:e.id,ticket_id:window.location.pathname.split("/")[3],assigned_to:(p=o[0])==null?void 0:p.id});i.useEffect(()=>{var t;d({...s,user_id:e==null?void 0:e.id,assigned_to:(t=o[0])==null?void 0:t.id})},[s.status]),i.useEffect(()=>{c.dispatch(w(2))},[]);const _=()=>{n(!0)};async function x(t){r(!0),s.notes?(await c.dispatch(S(s)),await c.dispatch(j()),l.success("Updated Success!"),setTimeout(()=>{r(!1),n(!1)},2e3)):(r(!1),l.error("Notes is required!"))}const k=()=>{n(!1)};return a.jsxs("div",{children:[g,a.jsx(M,{size:"large",type:"primary",danger:!0,onClick:_,children:"Assign Ticket"}),a.jsx(v,{title:"Assign Ticket",open:f,onOk:x,okText:"Submit",confirmLoading:h,onCancel:k,children:a.jsxs("div",{className:"flex flex-col gap-4",children:[s.status=="Assigned"&&a.jsx(T,{size:"large",value:s.assigned_to,className:"w-full",onChange:t=>d({...s,assigned_to:t}),options:(m=o==null?void 0:o.data)==null?void 0:m.map(t=>({value:t.id,label:t.name}))}),a.jsx(C,{value:s.notes??"",onChange:t=>d({...s,notes:t.target.value}),placeholder:"Notes",autoSize:{minRows:3,maxRows:5}})]})})]})}export{Q as default};
