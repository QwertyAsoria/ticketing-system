import{a0 as eo,_ as V,g as Me,m as ie,X as he,C as $e,R as oo,a1 as to,a as R,y as ro,e as no,i as We,f as ao}from"./compact-item-ngQTwuTc.js";import{r as a,R as H,f as io}from"./app-B9SUbSwL.js";import{f as L,a as Ae,_ as ae,e as be,B as Fe,h as k}from"./AntdIcon-DxF_eBZZ.js";import{r as so}from"./button-Da9L2JOs.js";import{R as lo}from"./index-m7lnpTcW.js";import{p as co,e as uo,K as Ee,C as go,a as ze,c as fo,R as po}from"./motion-BhzBhWIN.js";import{R as mo,a as vo}from"./index-DycaQySp.js";import{c as G}from"./index-Ce3OgiKg.js";var Le=a.forwardRef(function(e,o){var t=e.prefixCls,r=e.style,n=e.className,i=e.duration,s=i===void 0?4.5:i,g=e.showProgress,c=e.pauseOnHover,l=c===void 0?!0:c,h=e.eventKey,v=e.content,f=e.closable,p=e.closeIcon,$=p===void 0?"x":p,u=e.props,b=e.onClick,j=e.onNoticeClose,B=e.times,E=e.hovering,O=a.useState(!1),w=L(O,2),C=w[0],N=w[1],m=a.useState(0),d=L(m,2),x=d[0],y=d[1],M=a.useState(0),A=L(M,2),T=A[0],Q=A[1],I=E||C,F=s>0&&g,D=function(){j(h)},Y=function(S){(S.key==="Enter"||S.code==="Enter"||S.keyCode===uo.ENTER)&&D()};a.useEffect(function(){if(!I&&s>0){var z=Date.now()-T,S=setTimeout(function(){D()},s*1e3-T);return function(){l&&clearTimeout(S),Q(Date.now()-z)}}},[s,I,B]),a.useEffect(function(){if(!I&&F&&(l||T===0)){var z=performance.now(),S,P=function ce(){cancelAnimationFrame(S),S=requestAnimationFrame(function(de){var U=de+T-z,X=Math.min(U/(s*1e3),1);y(X*100),X<1&&ce()})};return P(),function(){l&&cancelAnimationFrame(S)}}},[s,T,I,F,B]);var te=a.useMemo(function(){return Ae(f)==="object"&&f!==null?f:f?{closeIcon:$}:{}},[f,$]),le=co(te,!0),J=100-(!x||x<0?0:x>100?100:x),_="".concat(t,"-notice");return a.createElement("div",ae({},u,{ref:o,className:G(_,n,be({},"".concat(_,"-closable"),f)),style:r,onMouseEnter:function(S){var P;N(!0),u==null||(P=u.onMouseEnter)===null||P===void 0||P.call(u,S)},onMouseLeave:function(S){var P;N(!1),u==null||(P=u.onMouseLeave)===null||P===void 0||P.call(u,S)},onClick:b}),a.createElement("div",{className:"".concat(_,"-content")},v),f&&a.createElement("a",ae({tabIndex:0,className:"".concat(_,"-close"),onKeyDown:Y,"aria-label":"Close"},le,{onClick:function(S){S.preventDefault(),S.stopPropagation(),D()}}),te.closeIcon),F&&a.createElement("progress",{className:"".concat(_,"-progress"),max:"100",value:J},J+"%"))}),_e=H.createContext({}),bo=function(o){var t=o.children,r=o.classNames;return H.createElement(_e.Provider,{value:{classNames:r}},t)},we=8,Re=3,Oe=16,ho=function(o){var t={offset:we,threshold:Re,gap:Oe};if(o&&Ae(o)==="object"){var r,n,i;t.offset=(r=o.offset)!==null&&r!==void 0?r:we,t.threshold=(n=o.threshold)!==null&&n!==void 0?n:Re,t.gap=(i=o.gap)!==null&&i!==void 0?i:Oe}return[!!o,t]},$o=["className","style","classNames","styles"],Co=function(o){var t=o.configList,r=o.placement,n=o.prefixCls,i=o.className,s=o.style,g=o.motion,c=o.onAllNoticeRemoved,l=o.onNoticeClose,h=o.stack,v=a.useContext(_e),f=v.classNames,p=a.useRef({}),$=a.useState(null),u=L($,2),b=u[0],j=u[1],B=a.useState([]),E=L(B,2),O=E[0],w=E[1],C=t.map(function(I){return{config:I,key:String(I.key)}}),N=ho(h),m=L(N,2),d=m[0],x=m[1],y=x.offset,M=x.threshold,A=x.gap,T=d&&(O.length>0||C.length<=M),Q=typeof g=="function"?g(r):g;return a.useEffect(function(){d&&O.length>1&&w(function(I){return I.filter(function(F){return C.some(function(D){var Y=D.key;return F===Y})})})},[O,C,d]),a.useEffect(function(){var I;if(d&&p.current[(I=C[C.length-1])===null||I===void 0?void 0:I.key]){var F;j(p.current[(F=C[C.length-1])===null||F===void 0?void 0:F.key])}},[C,d]),H.createElement(eo,ae({key:r,className:G(n,"".concat(n,"-").concat(r),f==null?void 0:f.list,i,be(be({},"".concat(n,"-stack"),!!d),"".concat(n,"-stack-expanded"),T)),style:s,keys:C,motionAppear:!0},Q,{onAllRemoved:function(){c(r)}}),function(I,F){var D=I.config,Y=I.className,te=I.style,le=I.index,J=D,_=J.key,z=J.times,S=String(_),P=D,ce=P.className,de=P.style,U=P.classNames,X=P.styles,Ye=Fe(P,$o),ue=C.findIndex(function(ne){return ne.key===S}),re={};if(d){var Z=C.length-1-(ue>-1?ue:le-1),Se=r==="top"||r==="bottom"?"-50%":"0";if(Z>0){var ge,fe,pe;re.height=T?(ge=p.current[S])===null||ge===void 0?void 0:ge.offsetHeight:b==null?void 0:b.offsetHeight;for(var xe=0,me=0;me<Z;me++){var ve;xe+=((ve=p.current[C[C.length-1-me].key])===null||ve===void 0?void 0:ve.offsetHeight)+A}var Je=(T?xe:Z*y)*(r.startsWith("top")?1:-1),Ze=!T&&b!==null&&b!==void 0&&b.offsetWidth&&(fe=p.current[S])!==null&&fe!==void 0&&fe.offsetWidth?((b==null?void 0:b.offsetWidth)-y*2*(Z<3?Z:3))/((pe=p.current[S])===null||pe===void 0?void 0:pe.offsetWidth):1;re.transform="translate3d(".concat(Se,", ").concat(Je,"px, 0) scaleX(").concat(Ze,")")}else re.transform="translate3d(".concat(Se,", 0, 0)")}return H.createElement("div",{ref:F,className:G("".concat(n,"-notice-wrapper"),Y,U==null?void 0:U.wrapper),style:k(k(k({},te),re),X==null?void 0:X.wrapper),onMouseEnter:function(){return w(function(q){return q.includes(S)?q:[].concat(V(q),[S])})},onMouseLeave:function(){return w(function(q){return q.filter(function(ke){return ke!==S})})}},H.createElement(Le,ae({},Ye,{ref:function(q){ue>-1?p.current[S]=q:delete p.current[S]},prefixCls:n,classNames:U,styles:X,className:G(ce,f==null?void 0:f.notice),style:de,times:z,key:_,eventKey:_,onNoticeClose:l,hovering:d&&O.length>0})))})},yo=a.forwardRef(function(e,o){var t=e.prefixCls,r=t===void 0?"rc-notification":t,n=e.container,i=e.motion,s=e.maxCount,g=e.className,c=e.style,l=e.onAllRemoved,h=e.stack,v=e.renderNotifications,f=a.useState([]),p=L(f,2),$=p[0],u=p[1],b=function(d){var x,y=$.find(function(M){return M.key===d});y==null||(x=y.onClose)===null||x===void 0||x.call(y),u(function(M){return M.filter(function(A){return A.key!==d})})};a.useImperativeHandle(o,function(){return{open:function(d){u(function(x){var y=V(x),M=y.findIndex(function(Q){return Q.key===d.key}),A=k({},d);if(M>=0){var T;A.times=(((T=x[M])===null||T===void 0?void 0:T.times)||0)+1,y[M]=A}else A.times=0,y.push(A);return s>0&&y.length>s&&(y=y.slice(-s)),y})},close:function(d){b(d)},destroy:function(){u([])}}});var j=a.useState({}),B=L(j,2),E=B[0],O=B[1];a.useEffect(function(){var m={};$.forEach(function(d){var x=d.placement,y=x===void 0?"topRight":x;y&&(m[y]=m[y]||[],m[y].push(d))}),Object.keys(E).forEach(function(d){m[d]=m[d]||[]}),O(m)},[$]);var w=function(d){O(function(x){var y=k({},x),M=y[d]||[];return M.length||delete y[d],y})},C=a.useRef(!1);if(a.useEffect(function(){Object.keys(E).length>0?C.current=!0:C.current&&(l==null||l(),C.current=!1)},[E]),!n)return null;var N=Object.keys(E);return io.createPortal(a.createElement(a.Fragment,null,N.map(function(m){var d=E[m],x=a.createElement(Co,{key:m,configList:d,placement:m,prefixCls:r,className:g==null?void 0:g(m),style:c==null?void 0:c(m),motion:i,onNoticeClose:b,onAllNoticeRemoved:w,stack:h});return v?v(x,{prefixCls:r,key:m}):x})),n)}),So=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],xo=function(){return document.body},Ie=0;function Eo(){for(var e={},o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];return t.forEach(function(n){n&&Object.keys(n).forEach(function(i){var s=n[i];s!==void 0&&(e[i]=s)})}),e}function wo(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=e.getContainer,t=o===void 0?xo:o,r=e.motion,n=e.prefixCls,i=e.maxCount,s=e.className,g=e.style,c=e.onAllRemoved,l=e.stack,h=e.renderNotifications,v=Fe(e,So),f=a.useState(),p=L(f,2),$=p[0],u=p[1],b=a.useRef(),j=a.createElement(yo,{container:$,ref:b,prefixCls:n,motion:r,maxCount:i,className:s,style:g,onAllRemoved:c,stack:l,renderNotifications:h}),B=a.useState([]),E=L(B,2),O=E[0],w=E[1],C=a.useMemo(function(){return{open:function(m){var d=Eo(v,m);(d.key===null||d.key===void 0)&&(d.key="rc-notification-".concat(Ie),Ie+=1),w(function(x){return[].concat(V(x),[{type:"open",config:d}])})},close:function(m){w(function(d){return[].concat(V(d),[{type:"close",key:m}])})},destroy:function(){w(function(m){return[].concat(V(m),[{type:"destroy"}])})}}},[]);return a.useEffect(function(){u(t())}),a.useEffect(function(){b.current&&O.length&&(O.forEach(function(N){switch(N.type){case"open":b.current.open(N.config);break;case"close":b.current.close(N.key);break;case"destroy":b.current.destroy();break}}),w(function(N){return N.filter(function(m){return!O.includes(m)})}))},[O]),[C,j]}const Ro=e=>{const{componentCls:o,iconCls:t,boxShadow:r,colorText:n,colorSuccess:i,colorError:s,colorWarning:g,colorInfo:c,fontSizeLG:l,motionEaseInOutCirc:h,motionDurationSlow:v,marginXS:f,paddingXS:p,borderRadiusLG:$,zIndexPopup:u,contentPadding:b,contentBg:j}=e,B=`${o}-notice`,E=new Ee("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:p,transform:"translateY(0)",opacity:1}}),O=new Ee("MessageMoveOut",{"0%":{maxHeight:e.height,padding:p,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),w={padding:p,textAlign:"center",[`${o}-custom-content`]:{display:"flex",alignItems:"center"},[`${o}-custom-content > ${t}`]:{marginInlineEnd:f,fontSize:l},[`${B}-content`]:{display:"inline-block",padding:b,background:j,borderRadius:$,boxShadow:r,pointerEvents:"all"},[`${o}-success > ${t}`]:{color:i},[`${o}-error > ${t}`]:{color:s},[`${o}-warning > ${t}`]:{color:g},[`${o}-info > ${t},
      ${o}-loading > ${t}`]:{color:c}};return[{[o]:Object.assign(Object.assign({},he(e)),{color:n,position:"fixed",top:f,width:"100%",pointerEvents:"none",zIndex:u,[`${o}-move-up`]:{animationFillMode:"forwards"},[`
        ${o}-move-up-appear,
        ${o}-move-up-enter
      `]:{animationName:E,animationDuration:v,animationPlayState:"paused",animationTimingFunction:h},[`
        ${o}-move-up-appear${o}-move-up-appear-active,
        ${o}-move-up-enter${o}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${o}-move-up-leave`]:{animationName:O,animationDuration:v,animationPlayState:"paused",animationTimingFunction:h},[`${o}-move-up-leave${o}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[o]:{[`${B}-wrapper`]:Object.assign({},w)}},{[`${o}-notice-pure-panel`]:Object.assign(Object.assign({},w),{padding:0,textAlign:"start"})}]},Oo=e=>({zIndexPopup:e.zIndexPopupBase+go+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}),Ge=Me("Message",e=>{const o=ie(e,{height:150});return[Ro(o)]},Oo);var Io=function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t};const Bo={info:a.createElement(mo,null),success:a.createElement(lo,null),error:a.createElement(fo,null),warning:a.createElement(vo,null),loading:a.createElement(oo,null)},De=e=>{let{prefixCls:o,type:t,icon:r,children:n}=e;return a.createElement("div",{className:G(`${o}-custom-content`,`${o}-${t}`)},r||Bo[t],a.createElement("span",null,n))},jo=e=>{const{prefixCls:o,className:t,type:r,icon:n,content:i}=e,s=Io(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:g}=a.useContext($e),c=o||g("message"),l=ze(c),[h,v,f]=Ge(c,l);return h(a.createElement(Le,Object.assign({},s,{prefixCls:c,className:G(t,v,`${c}-notice-pure-panel`,f,l),eventKey:"pure",duration:null,content:a.createElement(De,{prefixCls:c,type:r,icon:n},i)})))};function No(e,o){return{motionName:o??`${e}-move-up`}}function Ce(e){let o;const t=new Promise(n=>{o=e(()=>{n(!0)})}),r=()=>{o==null||o()};return r.then=(n,i)=>t.then(n,i),r.promise=t,r}var Po=function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t};const To=8,Ho=3,Mo=e=>{let{children:o,prefixCls:t}=e;const r=ze(t),[n,i,s]=Ge(t,r);return n(a.createElement(bo,{classNames:{list:G(i,s,r)}},o))},Wo=(e,o)=>{let{prefixCls:t,key:r}=o;return a.createElement(Mo,{prefixCls:t,key:r},e)},Ao=a.forwardRef((e,o)=>{const{top:t,prefixCls:r,getContainer:n,maxCount:i,duration:s=Ho,rtl:g,transitionName:c,onAllRemoved:l}=e,{getPrefixCls:h,getPopupContainer:v,message:f,direction:p}=a.useContext($e),$=r||h("message"),u=()=>({left:"50%",transform:"translateX(-50%)",top:t??To}),b=()=>G({[`${$}-rtl`]:g??p==="rtl"}),j=()=>No($,c),B=a.createElement("span",{className:`${$}-close-x`},a.createElement(po,{className:`${$}-close-icon`})),[E,O]=wo({prefixCls:$,style:u,className:b,motion:j,closable:!1,closeIcon:B,duration:s,getContainer:()=>(n==null?void 0:n())||(v==null?void 0:v())||document.body,maxCount:i,onAllRemoved:l,renderNotifications:Wo});return a.useImperativeHandle(o,()=>Object.assign(Object.assign({},E),{prefixCls:$,message:f})),O});let Be=0;function Xe(e){const o=a.useRef(null);return to(),[a.useMemo(()=>{const r=c=>{var l;(l=o.current)===null||l===void 0||l.close(c)},n=c=>{if(!o.current){const C=()=>{};return C.then=()=>{},C}const{open:l,prefixCls:h,message:v}=o.current,f=`${h}-notice`,{content:p,icon:$,type:u,key:b,className:j,style:B,onClose:E}=c,O=Po(c,["content","icon","type","key","className","style","onClose"]);let w=b;return w==null&&(Be+=1,w=`antd-message-${Be}`),Ce(C=>(l(Object.assign(Object.assign({},O),{key:w,content:a.createElement(De,{prefixCls:h,type:u,icon:$},p),placement:"top",className:G(u&&`${f}-${u}`,j,v==null?void 0:v.className),style:Object.assign(Object.assign({},v==null?void 0:v.style),B),onClose:()=>{E==null||E(),C()}})),()=>{r(w)}))},s={open:n,destroy:c=>{var l;c!==void 0?r(c):(l=o.current)===null||l===void 0||l.destroy()}};return["info","success","warning","error","loading"].forEach(c=>{const l=(h,v,f)=>{let p;h&&typeof h=="object"&&"content"in h?p=h:p={content:h};let $,u;typeof v=="function"?u=v:($=v,u=f);const b=Object.assign(Object.assign({onClose:u,duration:$},p),{type:c});return n(b)};s[c]=l}),s},[]),a.createElement(Ao,Object.assign({key:"message-holder"},e,{ref:o}))]}function Fo(e){return Xe(e)}const zo=H.createContext({});function Lo(e){return ie(e,{inputAffixPadding:e.paddingXXS})}const _o=e=>{const{controlHeight:o,fontSize:t,lineHeight:r,lineWidth:n,controlHeightSM:i,controlHeightLG:s,fontSizeLG:g,lineHeightLG:c,paddingSM:l,controlPaddingHorizontalSM:h,controlPaddingHorizontal:v,colorFillAlter:f,colorPrimaryHover:p,colorPrimary:$,controlOutlineWidth:u,controlOutline:b,colorErrorOutline:j,colorWarningOutline:B,colorBgContainer:E}=e;return{paddingBlock:Math.max(Math.round((o-t*r)/2*10)/10-n,0),paddingBlockSM:Math.max(Math.round((i-t*r)/2*10)/10-n,0),paddingBlockLG:Math.ceil((s-g*c)/2*10)/10-n,paddingInline:l-n,paddingInlineSM:h-n,paddingInlineLG:v-n,addonBg:f,activeBorderColor:$,hoverBorderColor:p,activeShadow:`0 0 0 ${u}px ${b}`,errorActiveShadow:`0 0 0 ${u}px ${j}`,warningActiveShadow:`0 0 0 ${u}px ${B}`,hoverBg:E,activeBg:E,inputFontSize:t,inputFontSizeLG:g,inputFontSizeSM:t}},Go=e=>({borderColor:e.hoverBorderColor,backgroundColor:e.hoverBg}),ye=e=>({color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,boxShadow:"none",cursor:"not-allowed",opacity:1,"input[disabled], textarea[disabled]":{cursor:"not-allowed"},"&:hover:not([disabled])":Object.assign({},Go(ie(e,{hoverBorderColor:e.colorBorder,hoverBg:e.colorBgContainerDisabled})))}),qe=(e,o)=>({background:e.colorBgContainer,borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:o.borderColor,"&:hover":{borderColor:o.hoverBorderColor,backgroundColor:e.hoverBg},"&:focus, &:focus-within":{borderColor:o.activeBorderColor,boxShadow:o.activeShadow,outline:0,backgroundColor:e.activeBg}}),je=(e,o)=>({[`&${e.componentCls}-status-${o.status}:not(${e.componentCls}-disabled)`]:Object.assign(Object.assign({},qe(e,o)),{[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:o.affixColor}}),[`&${e.componentCls}-status-${o.status}${e.componentCls}-disabled`]:{borderColor:o.borderColor}}),Do=(e,o)=>({"&-outlined":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},qe(e,{borderColor:e.colorBorder,hoverBorderColor:e.hoverBorderColor,activeBorderColor:e.activeBorderColor,activeShadow:e.activeShadow})),{[`&${e.componentCls}-disabled, &[disabled]`]:Object.assign({},ye(e))}),je(e,{status:"error",borderColor:e.colorError,hoverBorderColor:e.colorErrorBorderHover,activeBorderColor:e.colorError,activeShadow:e.errorActiveShadow,affixColor:e.colorError})),je(e,{status:"warning",borderColor:e.colorWarning,hoverBorderColor:e.colorWarningBorderHover,activeBorderColor:e.colorWarning,activeShadow:e.warningActiveShadow,affixColor:e.colorWarning})),o)}),Ne=(e,o)=>({[`&${e.componentCls}-group-wrapper-status-${o.status}`]:{[`${e.componentCls}-group-addon`]:{borderColor:o.addonBorderColor,color:o.addonColor}}}),Xo=e=>({"&-outlined":Object.assign(Object.assign(Object.assign({[`${e.componentCls}-group`]:{"&-addon":{background:e.addonBg,border:`${R(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},"&-addon:first-child":{borderInlineEnd:0},"&-addon:last-child":{borderInlineStart:0}}},Ne(e,{status:"error",addonBorderColor:e.colorError,addonColor:e.colorErrorText})),Ne(e,{status:"warning",addonBorderColor:e.colorWarning,addonColor:e.colorWarningText})),{[`&${e.componentCls}-group-wrapper-disabled`]:{[`${e.componentCls}-group-addon`]:Object.assign({},ye(e))}})}),qo=(e,o)=>{const{componentCls:t}=e;return{"&-borderless":Object.assign({background:"transparent",border:"none","&:focus, &:focus-within":{outline:"none"},[`&${t}-disabled, &[disabled]`]:{color:e.colorTextDisabled},[`&${t}-status-error`]:{"&, & input, & textarea":{color:e.colorError}},[`&${t}-status-warning`]:{"&, & input, & textarea":{color:e.colorWarning}}},o)}},Ke=(e,o)=>({background:o.bg,borderWidth:e.lineWidth,borderStyle:e.lineType,borderColor:"transparent","input&, & input, textarea&, & textarea":{color:o==null?void 0:o.inputColor},"&:hover":{background:o.hoverBg},"&:focus, &:focus-within":{outline:0,borderColor:o.activeBorderColor,backgroundColor:e.activeBg}}),Pe=(e,o)=>({[`&${e.componentCls}-status-${o.status}:not(${e.componentCls}-disabled)`]:Object.assign(Object.assign({},Ke(e,o)),{[`${e.componentCls}-prefix, ${e.componentCls}-suffix`]:{color:o.affixColor}})}),Ko=(e,o)=>({"&-filled":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Ke(e,{bg:e.colorFillTertiary,hoverBg:e.colorFillSecondary,activeBorderColor:e.activeBorderColor})),{[`&${e.componentCls}-disabled, &[disabled]`]:Object.assign({},ye(e))}),Pe(e,{status:"error",bg:e.colorErrorBg,hoverBg:e.colorErrorBgHover,activeBorderColor:e.colorError,inputColor:e.colorErrorText,affixColor:e.colorError})),Pe(e,{status:"warning",bg:e.colorWarningBg,hoverBg:e.colorWarningBgHover,activeBorderColor:e.colorWarning,inputColor:e.colorWarningText,affixColor:e.colorWarning})),o)}),Te=(e,o)=>({[`&${e.componentCls}-group-wrapper-status-${o.status}`]:{[`${e.componentCls}-group-addon`]:{background:o.addonBg,color:o.addonColor}}}),Uo=e=>({"&-filled":Object.assign(Object.assign(Object.assign({[`${e.componentCls}-group`]:{"&-addon":{background:e.colorFillTertiary},[`${e.componentCls}-filled:not(:focus):not(:focus-within)`]:{"&:not(:first-child)":{borderInlineStart:`${R(e.lineWidth)} ${e.lineType} ${e.colorSplit}`},"&:not(:last-child)":{borderInlineEnd:`${R(e.lineWidth)} ${e.lineType} ${e.colorSplit}`}}}},Te(e,{status:"error",addonBg:e.colorErrorBg,addonColor:e.colorErrorText})),Te(e,{status:"warning",addonBg:e.colorWarningBg,addonColor:e.colorWarningText})),{[`&${e.componentCls}-group-wrapper-disabled`]:{[`${e.componentCls}-group`]:{"&-addon":{background:e.colorFillTertiary,color:e.colorTextDisabled},"&-addon:first-child":{borderInlineStart:`${R(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderTop:`${R(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderBottom:`${R(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},"&-addon:last-child":{borderInlineEnd:`${R(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderTop:`${R(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderBottom:`${R(e.lineWidth)} ${e.lineType} ${e.colorBorder}`}}}})}),Vo=e=>({"&::-moz-placeholder":{opacity:1},"&::placeholder":{color:e,userSelect:"none"},"&:placeholder-shown":{textOverflow:"ellipsis"}}),Ue=e=>{const{paddingBlockLG:o,lineHeightLG:t,borderRadiusLG:r,paddingInlineLG:n}=e;return{padding:`${R(o)} ${R(n)}`,fontSize:e.inputFontSizeLG,lineHeight:t,borderRadius:r}},Ve=e=>({padding:`${R(e.paddingBlockSM)} ${R(e.paddingInlineSM)}`,fontSize:e.inputFontSizeSM,borderRadius:e.borderRadiusSM}),Qe=e=>Object.assign(Object.assign({position:"relative",display:"inline-block",width:"100%",minWidth:0,padding:`${R(e.paddingBlock)} ${R(e.paddingInline)}`,color:e.colorText,fontSize:e.inputFontSize,lineHeight:e.lineHeight,borderRadius:e.borderRadius,transition:`all ${e.motionDurationMid}`},Vo(e.colorTextPlaceholder)),{"textarea&":{maxWidth:"100%",height:"auto",minHeight:e.controlHeight,lineHeight:e.lineHeight,verticalAlign:"bottom",transition:`all ${e.motionDurationSlow}, height 0s`,resize:"vertical"},"&-lg":Object.assign({},Ue(e)),"&-sm":Object.assign({},Ve(e)),"&-rtl, &-textarea-rtl":{direction:"rtl"}}),Qo=e=>{const{componentCls:o,antCls:t}=e;return{position:"relative",display:"table",width:"100%",borderCollapse:"separate",borderSpacing:0,"&[class*='col-']":{paddingInlineEnd:e.paddingXS,"&:last-child":{paddingInlineEnd:0}},[`&-lg ${o}, &-lg > ${o}-group-addon`]:Object.assign({},Ue(e)),[`&-sm ${o}, &-sm > ${o}-group-addon`]:Object.assign({},Ve(e)),[`&-lg ${t}-select-single ${t}-select-selector`]:{height:e.controlHeightLG},[`&-sm ${t}-select-single ${t}-select-selector`]:{height:e.controlHeightSM},[`> ${o}`]:{display:"table-cell","&:not(:first-child):not(:last-child)":{borderRadius:0}},[`${o}-group`]:{"&-addon, &-wrap":{display:"table-cell",width:1,whiteSpace:"nowrap",verticalAlign:"middle","&:not(:first-child):not(:last-child)":{borderRadius:0}},"&-wrap > *":{display:"block !important"},"&-addon":{position:"relative",padding:`0 ${R(e.paddingInline)}`,color:e.colorText,fontWeight:"normal",fontSize:e.inputFontSize,textAlign:"center",borderRadius:e.borderRadius,transition:`all ${e.motionDurationSlow}`,lineHeight:1,[`${t}-select`]:{margin:`${R(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${R(e.calc(e.paddingInline).mul(-1).equal())}`,[`&${t}-select-single:not(${t}-select-customize-input):not(${t}-pagination-size-changer)`]:{[`${t}-select-selector`]:{backgroundColor:"inherit",border:`${R(e.lineWidth)} ${e.lineType} transparent`,boxShadow:"none"}},"&-open, &-focused":{[`${t}-select-selector`]:{color:e.colorPrimary}}},[`${t}-cascader-picker`]:{margin:`-9px ${R(e.calc(e.paddingInline).mul(-1).equal())}`,backgroundColor:"transparent",[`${t}-cascader-input`]:{textAlign:"start",border:0,boxShadow:"none"}}}},[`${o}`]:{width:"100%",marginBottom:0,textAlign:"inherit","&:focus":{zIndex:1,borderInlineEndWidth:1},"&:hover":{zIndex:1,borderInlineEndWidth:1,[`${o}-search-with-button &`]:{zIndex:0}}},[`> ${o}:first-child, ${o}-group-addon:first-child`]:{borderStartEndRadius:0,borderEndEndRadius:0,[`${t}-select ${t}-select-selector`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${o}-affix-wrapper`]:{[`&:not(:first-child) ${o}`]:{borderStartStartRadius:0,borderEndStartRadius:0},[`&:not(:last-child) ${o}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${o}:last-child, ${o}-group-addon:last-child`]:{borderStartStartRadius:0,borderEndStartRadius:0,[`${t}-select ${t}-select-selector`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`${o}-affix-wrapper`]:{"&:not(:last-child)":{borderStartEndRadius:0,borderEndEndRadius:0,[`${o}-search &`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius}},[`&:not(:first-child), ${o}-search &:not(:first-child)`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&${o}-group-compact`]:Object.assign(Object.assign({display:"block"},no()),{[`${o}-group-addon, ${o}-group-wrap, > ${o}`]:{"&:not(:first-child):not(:last-child)":{borderInlineEndWidth:e.lineWidth,"&:hover, &:focus":{zIndex:1}}},"& > *":{display:"inline-flex",float:"none",verticalAlign:"top",borderRadius:0},[`
        & > ${o}-affix-wrapper,
        & > ${o}-number-affix-wrapper,
        & > ${t}-picker-range
      `]:{display:"inline-flex"},"& > *:not(:last-child)":{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal(),borderInlineEndWidth:e.lineWidth},[`${o}`]:{float:"none"},[`& > ${t}-select > ${t}-select-selector,
      & > ${t}-select-auto-complete ${o},
      & > ${t}-cascader-picker ${o},
      & > ${o}-group-wrapper ${o}`]:{borderInlineEndWidth:e.lineWidth,borderRadius:0,"&:hover, &:focus":{zIndex:1}},[`& > ${t}-select-focused`]:{zIndex:1},[`& > ${t}-select > ${t}-select-arrow`]:{zIndex:1},[`& > *:first-child,
      & > ${t}-select:first-child > ${t}-select-selector,
      & > ${t}-select-auto-complete:first-child ${o},
      & > ${t}-cascader-picker:first-child ${o}`]:{borderStartStartRadius:e.borderRadius,borderEndStartRadius:e.borderRadius},[`& > *:last-child,
      & > ${t}-select:last-child > ${t}-select-selector,
      & > ${t}-cascader-picker:last-child ${o},
      & > ${t}-cascader-picker-focused:last-child ${o}`]:{borderInlineEndWidth:e.lineWidth,borderStartEndRadius:e.borderRadius,borderEndEndRadius:e.borderRadius},[`& > ${t}-select-auto-complete ${o}`]:{verticalAlign:"top"},[`${o}-group-wrapper + ${o}-group-wrapper`]:{marginInlineStart:e.calc(e.lineWidth).mul(-1).equal(),[`${o}-affix-wrapper`]:{borderRadius:0}},[`${o}-group-wrapper:not(:last-child)`]:{[`&${o}-search > ${o}-group`]:{[`& > ${o}-group-addon > ${o}-search-button`]:{borderRadius:0},[`& > ${o}`]:{borderStartStartRadius:e.borderRadius,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:e.borderRadius}}}})}},Yo=e=>{const{componentCls:o,controlHeightSM:t,lineWidth:r,calc:n}=e,s=n(t).sub(n(r).mul(2)).sub(16).div(2).equal();return{[o]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},he(e)),Qe(e)),Do(e)),Ko(e)),qo(e)),{'&[type="color"]':{height:e.controlHeight,[`&${o}-lg`]:{height:e.controlHeightLG},[`&${o}-sm`]:{height:t,paddingTop:s,paddingBottom:s}},'&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':{"-webkit-appearance":"none"}})}},Jo=e=>{const{componentCls:o}=e;return{[`${o}-clear-icon`]:{margin:0,color:e.colorTextQuaternary,fontSize:e.fontSizeIcon,verticalAlign:-1,cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"&:hover":{color:e.colorTextTertiary},"&:active":{color:e.colorText},"&-hidden":{visibility:"hidden"},"&-has-suffix":{margin:`0 ${R(e.inputAffixPadding)}`}}}},Zo=e=>{const{componentCls:o,inputAffixPadding:t,colorTextDescription:r,motionDurationSlow:n,colorIcon:i,colorIconHover:s,iconCls:g}=e;return{[`${o}-affix-wrapper`]:Object.assign(Object.assign(Object.assign(Object.assign({},Qe(e)),{display:"inline-flex",[`&:not(${o}-disabled):hover`]:{zIndex:1,[`${o}-search-with-button &`]:{zIndex:0}},"&-focused, &:focus":{zIndex:1},[`> input${o}`]:{padding:0},[`> input${o}, > textarea${o}`]:{fontSize:"inherit",border:"none",borderRadius:0,outline:"none",background:"transparent",color:"inherit","&::-ms-reveal":{display:"none"},"&:focus":{boxShadow:"none !important"}},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[`${o}`]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center","> *:not(:last-child)":{marginInlineEnd:e.paddingXS}},"&-show-count-suffix":{color:r},"&-show-count-has-suffix":{marginInlineEnd:e.paddingXXS},"&-prefix":{marginInlineEnd:t},"&-suffix":{marginInlineStart:t}}}),Jo(e)),{[`${g}${o}-password-icon`]:{color:i,cursor:"pointer",transition:`all ${n}`,"&:hover":{color:s}}})}},ko=e=>{const{componentCls:o,borderRadiusLG:t,borderRadiusSM:r}=e;return{[`${o}-group`]:Object.assign(Object.assign(Object.assign({},he(e)),Qo(e)),{"&-rtl":{direction:"rtl"},"&-wrapper":Object.assign(Object.assign(Object.assign({display:"inline-block",width:"100%",textAlign:"start",verticalAlign:"top","&-rtl":{direction:"rtl"},"&-lg":{[`${o}-group-addon`]:{borderRadius:t,fontSize:e.inputFontSizeLG}},"&-sm":{[`${o}-group-addon`]:{borderRadius:r}}},Xo(e)),Uo(e)),{[`&:not(${o}-compact-first-item):not(${o}-compact-last-item)${o}-compact-item`]:{[`${o}, ${o}-group-addon`]:{borderRadius:0}},[`&:not(${o}-compact-last-item)${o}-compact-first-item`]:{[`${o}, ${o}-group-addon`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${o}-compact-first-item)${o}-compact-last-item`]:{[`${o}, ${o}-group-addon`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&:not(${o}-compact-last-item)${o}-compact-item`]:{[`${o}-affix-wrapper`]:{borderStartEndRadius:0,borderEndEndRadius:0}}})})}},et=e=>{const{componentCls:o,antCls:t}=e,r=`${o}-search`;return{[r]:{[`${o}`]:{"&:hover, &:focus":{borderColor:e.colorPrimaryHover,[`+ ${o}-group-addon ${r}-button:not(${t}-btn-primary)`]:{borderInlineStartColor:e.colorPrimaryHover}}},[`${o}-affix-wrapper`]:{borderRadius:0},[`${o}-lg`]:{lineHeight:e.calc(e.lineHeightLG).sub(2e-4).equal()},[`> ${o}-group`]:{[`> ${o}-group-addon:last-child`]:{insetInlineStart:-1,padding:0,border:0,[`${r}-button`]:{marginInlineEnd:-1,paddingTop:0,paddingBottom:0,borderStartStartRadius:0,borderStartEndRadius:e.borderRadius,borderEndEndRadius:e.borderRadius,borderEndStartRadius:0,boxShadow:"none"},[`${r}-button:not(${t}-btn-primary)`]:{color:e.colorTextDescription,"&:hover":{color:e.colorPrimaryHover},"&:active":{color:e.colorPrimaryActive},[`&${t}-btn-loading::before`]:{insetInlineStart:0,insetInlineEnd:0,insetBlockStart:0,insetBlockEnd:0}}}},[`${r}-button`]:{height:e.controlHeight,"&:hover, &:focus":{zIndex:1}},[`&-large ${r}-button`]:{height:e.controlHeightLG},[`&-small ${r}-button`]:{height:e.controlHeightSM},"&-rtl":{direction:"rtl"},[`&${o}-compact-item`]:{[`&:not(${o}-compact-last-item)`]:{[`${o}-group-addon`]:{[`${o}-search-button`]:{marginInlineEnd:e.calc(e.lineWidth).mul(-1).equal(),borderRadius:0}}},[`&:not(${o}-compact-first-item)`]:{[`${o},${o}-affix-wrapper`]:{borderRadius:0}},[`> ${o}-group-addon ${o}-search-button,
        > ${o},
        ${o}-affix-wrapper`]:{"&:hover, &:focus, &:active":{zIndex:2}},[`> ${o}-affix-wrapper-focused`]:{zIndex:2}}}}},ot=e=>{const{componentCls:o,paddingLG:t}=e,r=`${o}-textarea`;return{[r]:{position:"relative","&-show-count":{[`> ${o}`]:{height:"100%"},[`${o}-data-count`]:{position:"absolute",bottom:e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),insetInlineEnd:0,color:e.colorTextDescription,whiteSpace:"nowrap",pointerEvents:"none"}},[`
        &-allow-clear > ${o},
        &-affix-wrapper${r}-has-feedback ${o}
      `]:{paddingInlineEnd:t},[`&-affix-wrapper${o}-affix-wrapper`]:{padding:0,[`> textarea${o}`]:{fontSize:"inherit",border:"none",outline:"none",background:"transparent","&:focus":{boxShadow:"none !important"}},[`${o}-suffix`]:{margin:0,"> *:not(:last-child)":{marginInline:0},[`${o}-clear-icon`]:{position:"absolute",insetInlineEnd:e.paddingInline,insetBlockStart:e.paddingXS},[`${r}-suffix`]:{position:"absolute",top:0,insetInlineEnd:e.paddingInline,bottom:0,zIndex:1,display:"inline-flex",alignItems:"center",margin:"auto",pointerEvents:"none"}}},[`&-affix-wrapper${o}-affix-wrapper-sm`]:{[`${o}-suffix`]:{[`${o}-clear-icon`]:{insetInlineEnd:e.paddingInlineSM}}}}}},tt=e=>{const{componentCls:o}=e;return{[`${o}-out-of-range`]:{[`&, & input, & textarea, ${o}-show-count-suffix, ${o}-data-count`]:{color:e.colorError}}}},Ct=Me("Input",e=>{const o=ie(e,Lo(e));return[Yo(o),ot(o),Zo(o),ko(o),et(o),tt(o),ro(o)]},_o,{resetFont:!1});let W=null,K=e=>e(),ee=[],oe={};function He(){const{getContainer:e,duration:o,rtl:t,maxCount:r,top:n}=oe,i=(e==null?void 0:e())||document.body;return{getContainer:()=>i,duration:o,rtl:t,maxCount:r,top:n}}const rt=H.forwardRef((e,o)=>{const{messageConfig:t,sync:r}=e,{getPrefixCls:n}=a.useContext($e),i=oe.prefixCls||n("message"),s=a.useContext(zo),[g,c]=Xe(Object.assign(Object.assign(Object.assign({},t),{prefixCls:i}),s.message));return H.useImperativeHandle(o,()=>{const l=Object.assign({},g);return Object.keys(l).forEach(h=>{l[h]=function(){return r(),g[h].apply(g,arguments)}}),{instance:l,sync:r}}),c}),nt=H.forwardRef((e,o)=>{const[t,r]=H.useState(He),n=()=>{r(He)};H.useEffect(n,[]);const i=We(),s=i.getRootPrefixCls(),g=i.getIconPrefixCls(),c=i.getTheme(),l=H.createElement(rt,{ref:o,sync:n,messageConfig:t});return H.createElement(ao,{prefixCls:s,iconPrefixCls:g,theme:c},i.holderRender?i.holderRender(l):l)});function se(){if(!W){const e=document.createDocumentFragment(),o={fragment:e};W=o,K(()=>{so(H.createElement(nt,{ref:t=>{const{instance:r,sync:n}=t||{};Promise.resolve().then(()=>{!o.instance&&r&&(o.instance=r,o.sync=n,se())})}}),e)});return}W.instance&&(ee.forEach(e=>{const{type:o,skipped:t}=e;if(!t)switch(o){case"open":{K(()=>{const r=W.instance.open(Object.assign(Object.assign({},oe),e.config));r==null||r.then(e.resolve),e.setCloseFn(r)});break}case"destroy":K(()=>{W==null||W.instance.destroy(e.key)});break;default:K(()=>{var r;const n=(r=W.instance)[o].apply(r,V(e.args));n==null||n.then(e.resolve),e.setCloseFn(n)})}}),ee=[])}function at(e){oe=Object.assign(Object.assign({},oe),e),K(()=>{var o;(o=W==null?void 0:W.sync)===null||o===void 0||o.call(W)})}function it(e){const o=Ce(t=>{let r;const n={type:"open",config:e,resolve:t,setCloseFn:i=>{r=i}};return ee.push(n),()=>{r?K(()=>{r()}):n.skipped=!0}});return se(),o}function st(e,o){We();const t=Ce(r=>{let n;const i={type:e,args:o,resolve:r,setCloseFn:s=>{n=s}};return ee.push(i),()=>{n?K(()=>{n()}):i.skipped=!0}});return se(),t}const lt=e=>{ee.push({type:"destroy",key:e}),se()},ct=["success","info","warning","error","loading"],dt={open:it,destroy:lt,config:at,useMessage:Fo,_InternalPanelDoNotUseOrYouWillBeFired:jo},ut=dt;ct.forEach(e=>{ut[e]=function(){for(var o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];return st(e,t)}});export{Ko as a,qo as b,Lo as c,Vo as d,Do as g,_o as i,ut as s,Ct as u};
