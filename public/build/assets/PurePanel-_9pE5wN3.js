import{r as e}from"./app-B6Ttdtr0.js";import{f as j}from"./ContextIsolator-BFihYbHP.js";import{h as y,C as E}from"./button-CSFOOuKo.js";function z(n){return r=>e.createElement(y,{theme:{token:{motion:!1,zIndexPopupBase:0}}},e.createElement(n,Object.assign({},r)))}const H=(n,r,a,R)=>z(o=>{const{prefixCls:d,style:g}=o,i=e.useRef(null),[m,v]=e.useState(0),[P,h]=e.useState(0),[c,b]=j(!1,{value:o.open}),{getPrefixCls:C}=e.useContext(E),l=C(r||"select",d);e.useEffect(()=>{if(b(!0),typeof ResizeObserver<"u"){const u=new ResizeObserver(t=>{const s=t[0].target;v(s.offsetHeight+8),h(s.offsetWidth)}),p=setInterval(()=>{var t;const s=a?`.${a(l)}`:`.${l}-dropdown`,f=(t=i.current)===null||t===void 0?void 0:t.querySelector(s);f&&(clearInterval(p),u.observe(f))},10);return()=>{clearInterval(p),u.disconnect()}}},[]);let O=Object.assign(Object.assign({},o),{style:Object.assign(Object.assign({},g),{margin:0}),open:c,visible:c,getPopupContainer:()=>i.current});const x={paddingBottom:m,position:"relative",minWidth:P};return e.createElement("div",{ref:i,style:x},e.createElement(n,Object.assign({},O)))});export{H as g,z as w};
