import{u as y,q as k,r as a,j as i,s as _}from"./app-DG0oUn15.js";import{U as S}from"./index-BYUrjIYi.js";import{I as h,R as I}from"./index-ikAyV7rH.js";import"./index-BBp4l9YW.js";import"./index-XLxPQVGP.js";import"./EyeOutlined-CMKklKYH.js";function A(){var m;const{ticket:s}=y(e=>e.tickets),{url:p}=k(),[f,d]=a.useState(!1),[u,c]=a.useState(""),[r,l]=a.useState([]);a.useEffect(()=>{var e;s!=null&&s.files&&l([...r,...(e=s==null?void 0:s.files)==null?void 0:e.map(t=>{var o;return{uid:t==null?void 0:t.id,name:"uploaded",url:t==null?void 0:t.url,status:"done",extension:(o=t==null?void 0:t.url)==null?void 0:o.split("/").pop().split(".").pop()}})])},[(m=s==null?void 0:s.files)==null?void 0:m.length]);const g=async e=>{try{if(e.extension=="pdf")window.open(e.url,"_blank");else if(e.extension=="docx"){const t=encodeURIComponent(e.url);window.open(`https://docs.google.com/gview?url=${t}&embedded=true`,"_blank")}else["mp4","webm","ogg","mov"].includes(e.extension)?window.open(e.url,"_blank"):(!e.url&&!e.preview&&(e.preview=await w(e.originFileObj)),c(e.url||e.preview),d(!0))}catch(t){console.error("Error handling file preview:",t)}},w=e=>new Promise((t,o)=>{const n=new FileReader;n.readAsDataURL(e),n.onload=()=>t(n.result),n.onerror=j=>o(j)});function v(e){return!e.some(o=>o.status!=="done")}async function b({fileList:e}){const t=new FormData,o=p.split("/")[p.split("/").length-2].split("#")[0];if(t.append("ticket_id",o=="tickets"?window.location.pathname.split("/")[3]:o),v(e))for(let n=0;n<e.length;n++)e[n].name!=="uploaded"&&e[n].status=="done"&&(t.append("files[]",e[n].originFileObj),l(e));else l(e);await _.dispatch(upload_ticket_files_thunk(t,o))}const x=i.jsxs("button",{style:{border:0,background:"none"},type:"button",children:[i.jsx(I,{}),i.jsx("div",{style:{marginTop:8},children:"Upload"})]});return i.jsxs("div",{children:[i.jsx(S,{disabled:!0,multiple:!0,method:"GET",action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",fileList:r,onPreview:g,onChange:b,children:r.length>=8?null:x}),u&&i.jsx(h.PreviewGroup,{preview:{visible:f,onVisibleChange:e=>d(e),afterOpenChange:e=>!e&&c("")},children:i.jsx(h,{wrapperStyle:{display:"none"},src:u})})]})}export{A as default};