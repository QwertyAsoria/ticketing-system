import{r as o,u,s as c,j as a}from"./app-B0kkCG56.js";import{u as x,b as k}from"./tickets-thunk-CGOC1U9r.js";import{g as S}from"./it-thunk-efZpRgyV.js";import{s as j}from"./index-CcU1vmGy.js";import{B as w}from"./button-DFk9BAGU.js";import{M as A}from"./index-ALQPZvwd.js";import{S as M,I as v}from"./index-B-jTVRil.js";import"./ticket-service-BgD-0lp4.js";import"./index-BQ8QBrqq.js";import"./index-DOLOvgOo.js";import"./EyeOutlined-CeDcQM57.js";const{TextArea:T}=v;function D(){var l,p;const[m,n]=o.useState(!1),[d,f]=j.useMessage(),{users:i}=u(s=>s.it),{user:e}=u(s=>s.app),[t,r]=o.useState({status:"Assigned",user_id:e==null?void 0:e.id,ticket_id:window.location.pathname.split("/")[3],assigned_to:(l=i[0])==null?void 0:l.id});o.useEffect(()=>{var s;r({...t,user_id:e==null?void 0:e.id,assigned_to:(s=i[0])==null?void 0:s.id})},[t.status]),o.useEffect(()=>{c.dispatch(S(2))},[]);const g=()=>{n(!0)};async function h(s){t.notes?(await c.dispatch(x(t)),await c.dispatch(k()),d.success("Updated Success!"),setTimeout(()=>{n(!1)},2e3)):d.error("Notes is required!")}const _=()=>{n(!1)};return a.jsxs("div",{children:[f,a.jsx(w,{size:"large",type:"primary",danger:!0,onClick:g,children:"Assign Ticket"}),a.jsx(A,{title:"Assign Ticket",open:m,onOk:h,okText:"Submit",onCancel:_,children:a.jsxs("div",{className:"flex flex-col gap-4",children:[t.status=="Assigned"&&a.jsx(M,{size:"large",value:t.assigned_to,className:"w-full",onChange:s=>r({...t,assigned_to:s}),options:(p=i==null?void 0:i.data)==null?void 0:p.map(s=>({value:s.id,label:s.name}))}),a.jsx(T,{value:t.notes??"",onChange:s=>r({...t,notes:s.target.value}),placeholder:"Notes",autoSize:{minRows:3,maxRows:5}})]})})]})}export{D as default};
