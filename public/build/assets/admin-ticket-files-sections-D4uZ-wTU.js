import{u as y,q as k,r as s,j as r,s as _}from"./app-Crw4bLok.js";import{U as S}from"./index-Bp-hmwEo.js";import{I as h,R as I}from"./index-ZSWOlpj7.js";import"./button-Dbuzzx13.js";import"./index-BpqW2_SN.js";import"./AntdIcon-DMyt6xI9.js";import"./motion-Cfygqazw.js";import"./index-BbMfMCdT.js";import"./motion-BnfDo2wx.js";import"./EyeOutlined-IxTRvlyh.js";import"./CheckOutlined-NYdPttu4.js";import"./roundedArrow-BY0ESw1X.js";function V(){var m;const{ticket:i}=y(e=>e.tickets),{url:l}=k(),[f,d]=s.useState(!1),[u,c]=s.useState(""),[a,p]=s.useState([]);s.useEffect(()=>{var e;i!=null&&i.files&&p([...a,...(e=i==null?void 0:i.files)==null?void 0:e.map(t=>{var o;return{uid:t==null?void 0:t.id,name:"uploaded",url:t==null?void 0:t.url,status:"done",extension:(o=t==null?void 0:t.url)==null?void 0:o.split("/").pop().split(".").pop()}})])},[(m=i==null?void 0:i.files)==null?void 0:m.length]);const g=async e=>{try{if(e.extension=="pdf")window.open(e.url,"_blank");else if(e.extension=="docx"){const t=encodeURIComponent(e.url);window.open(`https://docs.google.com/gview?url=${t}&embedded=true`,"_blank")}else["mp4","webm","ogg","mov"].includes(e.extension)?window.open(e.url,"_blank"):(!e.url&&!e.preview&&(e.preview=await w(e.originFileObj)),c(e.url||e.preview),d(!0))}catch(t){console.error("Error handling file preview:",t)}},w=e=>new Promise((t,o)=>{const n=new FileReader;n.readAsDataURL(e),n.onload=()=>t(n.result),n.onerror=j=>o(j)});function v(e){return!e.some(o=>o.status!=="done")}async function b({fileList:e}){const t=new FormData,o=l.split("/")[l.split("/").length-2].split("#")[0];if(t.append("ticket_id",o=="tickets"?window.location.pathname.split("/")[3]:o),v(e))for(let n=0;n<e.length;n++)e[n].name!=="uploaded"&&e[n].status=="done"&&(t.append("files[]",e[n].originFileObj),p(e));else p(e);await _.dispatch(upload_ticket_files_thunk(t,o))}const x=r.jsxs("button",{style:{border:0,background:"none"},type:"button",children:[r.jsx(I,{}),r.jsx("div",{style:{marginTop:8},children:"Upload"})]});return r.jsxs("div",{children:[r.jsx(S,{disabled:!0,multiple:!0,method:"GET",action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",fileList:a,onPreview:g,onChange:b,children:a.length>=8?null:x}),u&&r.jsx(h.PreviewGroup,{preview:{visible:f,onVisibleChange:e=>d(e),afterOpenChange:e=>!e&&c("")},children:r.jsx(h,{wrapperStyle:{display:"none"},src:u})})]})}export{V as default};