import{r as i,u as m,s as c,j as a}from"./app-BHD8ReDI.js";import{u as S,b as j}from"./tickets-thunk-3JgiZ3A3.js";import{g as w}from"./it-thunk-DuHkSsQi.js";import{s as A}from"./index-Iw6C1AAY.js";import{B as M}from"./button-B9bhptDA.js";import{M as v}from"./index-BAyVL5NA.js";import{S as T,I as b}from"./index-BWFjUY4d.js";import"./ticket-service-DXNIPEv6.js";import"./AntdIcon-DMIJ_wQg.js";import"./index-D5GYr07V.js";import"./index-CU2vMnlY.js";import"./EyeOutlined-BWiE4XDh.js";const{TextArea:y}=b;function U(){var p,u;const[f,n]=i.useState(!1),[l,g]=A.useMessage(),{users:o}=m(s=>s.it),{user:e}=m(s=>s.app),[h,r]=i.useState(!1),[t,d]=i.useState({status:"Assigned",user_id:e==null?void 0:e.id,ticket_id:window.location.pathname.split("/")[3],assigned_to:(p=o[0])==null?void 0:p.id});i.useEffect(()=>{var s;d({...t,user_id:e==null?void 0:e.id,assigned_to:(s=o[0])==null?void 0:s.id})},[t.status]),i.useEffect(()=>{c.dispatch(w(2))},[]);const _=()=>{n(!0)};async function x(s){r(!0),t.notes?(await c.dispatch(S(t)),await c.dispatch(j()),l.success("Updated Success!"),setTimeout(()=>{r(!1),n(!1)},2e3)):(r(!1),l.error("Notes is required!"))}const k=()=>{n(!1)};return a.jsxs("div",{children:[g,a.jsx(M,{size:"large",type:"primary",danger:!0,onClick:_,children:"Assign Ticket"}),a.jsx(v,{title:"Assign Ticket",open:f,onOk:x,okText:"Submit",confirmLoading:h,onCancel:k,children:a.jsxs("div",{className:"flex flex-col gap-4",children:[t.status=="Assigned"&&a.jsx(T,{size:"large",value:t.assigned_to,className:"w-full",onChange:s=>d({...t,assigned_to:s}),options:(u=o==null?void 0:o.data)==null?void 0:u.map(s=>({value:s.id,label:s.name}))}),a.jsx(y,{value:t.notes??"",onChange:s=>d({...t,notes:s.target.value}),placeholder:"Notes",autoSize:{minRows:3,maxRows:5}})]})})]})}export{U as default};