import{R,r}from"./app-DyOrHta8.js";import{c as j}from"./index-B6-bXYqP.js";import{_ as Fe,o as Ge,C as be,a2 as Ue,a3 as Ee,Z as qe,a8 as Te,g as at,m as ot,$ as je,b as Le,W as He,B as rt,t as Ke}from"./button-Dx9AUZLX.js";import{f as Ve,F as he,c as st,a as ke,C as We,p as lt}from"./motion-B3QDYmsw.js";import{r as Be,n as Ye,o as _e,p as Me,e as it,i as ut,R as ct}from"./index-CQr1DRig.js";import{a as De,e as te,_ as xe,h as J,B as Re,f as se,I as dt}from"./AntdIcon-BxOBQlpw.js";import{R as ft}from"./EyeOutlined-CDoOQ6BM.js";import{a as vt}from"./CheckOutlined-MD40u6pH.js";function mt(e){return!!(e.addonBefore||e.addonAfter)}function gt(e){return!!(e.prefix||e.suffix||e.allowClear)}function Xe(e,o,a){var t=o.cloneNode(!0),n=Object.create(e,{target:{value:t},currentTarget:{value:t}});return t.value=a,typeof o.selectionStart=="number"&&typeof o.selectionEnd=="number"&&(t.selectionStart=o.selectionStart,t.selectionEnd=o.selectionEnd),t.setSelectionRange=function(){o.setSelectionRange.apply(o,arguments)},n}function we(e,o,a,t){if(a){var n=o;if(o.type==="click"){n=Xe(o,e,""),a(n);return}if(e.type!=="file"&&t!==void 0){n=Xe(o,e,t),a(n);return}a(n)}}function pt(e,o){if(e){e.focus(o);var a=o||{},t=a.cursor;if(t){var n=e.value.length;switch(t){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(n,n);break;default:e.setSelectionRange(0,n)}}}}var Ze=R.forwardRef(function(e,o){var a,t,n=e.inputElement,u=e.children,l=e.prefixCls,d=e.prefix,w=e.suffix,h=e.addonBefore,x=e.addonAfter,E=e.className,A=e.style,_=e.disabled,b=e.readOnly,M=e.focused,K=e.triggerFocus,N=e.allowClear,I=e.value,m=e.handleReset,F=e.hidden,C=e.classes,v=e.classNames,O=e.dataAttrs,f=e.styles,i=e.components,V=u??n,k=(i==null?void 0:i.affixWrapper)||"span",y=(i==null?void 0:i.groupWrapper)||"span",H=(i==null?void 0:i.wrapper)||"span",S=(i==null?void 0:i.groupAddon)||"span",D=r.useRef(null),U=function(de){var ge;(ge=D.current)!==null&&ge!==void 0&&ge.contains(de.target)&&(K==null||K())},X=gt(e),L=r.cloneElement(V,{value:I,className:j(V.props.className,!X&&(v==null?void 0:v.variant))||null}),G=r.useRef(null);if(R.useImperativeHandle(o,function(){return{nativeElement:G.current||D.current}}),X){var g,s=null;if(N){var c,p=!_&&!b&&I,P="".concat(l,"-clear-icon"),$=De(N)==="object"&&N!==null&&N!==void 0&&N.clearIcon?N.clearIcon:"✖";s=R.createElement("span",{onClick:m,onMouseDown:function(de){return de.preventDefault()},className:j(P,(c={},te(c,"".concat(P,"-hidden"),!p),te(c,"".concat(P,"-has-suffix"),!!w),c)),role:"button",tabIndex:-1},$)}var z="".concat(l,"-affix-wrapper"),ee=j(z,(g={},te(g,"".concat(l,"-disabled"),_),te(g,"".concat(z,"-disabled"),_),te(g,"".concat(z,"-focused"),M),te(g,"".concat(z,"-readonly"),b),te(g,"".concat(z,"-input-with-clear-btn"),w&&N&&I),g),C==null?void 0:C.affixWrapper,v==null?void 0:v.affixWrapper,v==null?void 0:v.variant),le=(w||N)&&R.createElement("span",{className:j("".concat(l,"-suffix"),v==null?void 0:v.suffix),style:f==null?void 0:f.suffix},s,w);L=R.createElement(k,xe({className:ee,style:f==null?void 0:f.affixWrapper,onClick:U},O==null?void 0:O.affixWrapper,{ref:D}),d&&R.createElement("span",{className:j("".concat(l,"-prefix"),v==null?void 0:v.prefix),style:f==null?void 0:f.prefix},d),L,le)}if(mt(e)){var ie="".concat(l,"-group"),ae="".concat(ie,"-addon"),ue="".concat(ie,"-wrapper"),Z=j("".concat(l,"-wrapper"),ie,C==null?void 0:C.wrapper,v==null?void 0:v.wrapper),Q=j(ue,te({},"".concat(ue,"-disabled"),_),C==null?void 0:C.group,v==null?void 0:v.groupWrapper);L=R.createElement(y,{className:Q,ref:G},R.createElement(H,{className:Z},h&&R.createElement(S,{className:ae},h),L,x&&R.createElement(S,{className:ae},x)))}return R.cloneElement(L,{className:j((a=L.props)===null||a===void 0?void 0:a.className,E)||null,style:J(J({},(t=L.props)===null||t===void 0?void 0:t.style),A),hidden:F})}),ht=["show"];function Qe(e,o){return r.useMemo(function(){var a={};o&&(a.show=De(o)==="object"&&o.formatter?o.formatter:!!o),a=J(J({},a),e);var t=a,n=t.show,u=Re(t,ht);return J(J({},u),{},{show:!!n,showFormatter:typeof n=="function"?n:void 0,strategy:u.strategy||function(l){return l.length}})},[e,o])}var xt=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],bt=r.forwardRef(function(e,o){var a=e.autoComplete,t=e.onChange,n=e.onFocus,u=e.onBlur,l=e.onPressEnter,d=e.onKeyDown,w=e.prefixCls,h=w===void 0?"rc-input":w,x=e.disabled,E=e.htmlSize,A=e.className,_=e.maxLength,b=e.suffix,M=e.showCount,K=e.count,N=e.type,I=N===void 0?"text":N,m=e.classes,F=e.classNames,C=e.styles,v=e.onCompositionStart,O=e.onCompositionEnd,f=Re(e,xt),i=r.useState(!1),V=se(i,2),k=V[0],y=V[1],H=r.useRef(!1),S=r.useRef(null),D=r.useRef(null),U=function(T){S.current&&pt(S.current,T)},X=Ve(e.defaultValue,{value:e.value}),L=se(X,2),G=L[0],g=L[1],s=G==null?"":String(G),c=r.useState(null),p=se(c,2),P=p[0],$=p[1],z=Qe(K,M),ee=z.max||_,le=z.strategy(s),ie=!!ee&&le>ee;r.useImperativeHandle(o,function(){var W;return{focus:U,blur:function(){var q;(q=S.current)===null||q===void 0||q.blur()},setSelectionRange:function(q,pe,ve){var oe;(oe=S.current)===null||oe===void 0||oe.setSelectionRange(q,pe,ve)},select:function(){var q;(q=S.current)===null||q===void 0||q.select()},input:S.current,nativeElement:((W=D.current)===null||W===void 0?void 0:W.nativeElement)||S.current}}),r.useEffect(function(){y(function(W){return W&&x?!1:W})},[x]);var ae=function(T,q,pe){var ve=q;if(!H.current&&z.exceedFormatter&&z.max&&z.strategy(q)>z.max){if(ve=z.exceedFormatter(q,{max:z.max}),q!==ve){var oe,fe;$([((oe=S.current)===null||oe===void 0?void 0:oe.selectionStart)||0,((fe=S.current)===null||fe===void 0?void 0:fe.selectionEnd)||0])}}else if(pe.source==="compositionEnd")return;g(ve),S.current&&we(S.current,T,t,ve)};r.useEffect(function(){if(P){var W;(W=S.current)===null||W===void 0||W.setSelectionRange.apply(W,Fe(P))}},[P]);var ue=function(T){ae(T,T.target.value,{source:"change"})},Z=function(T){H.current=!1,ae(T,T.currentTarget.value,{source:"compositionEnd"}),O==null||O(T)},Q=function(T){l&&T.key==="Enter"&&l(T),d==null||d(T)},ce=function(T){y(!0),n==null||n(T)},de=function(T){y(!1),u==null||u(T)},ge=function(T){g(""),U(),S.current&&we(S.current,T,t)},ye=ie&&"".concat(h,"-out-of-range"),ze=function(){var T=Ge(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames"]);return R.createElement("input",xe({autoComplete:a},T,{onChange:ue,onFocus:ce,onBlur:de,onKeyDown:Q,className:j(h,te({},"".concat(h,"-disabled"),x),F==null?void 0:F.input),style:C==null?void 0:C.input,ref:S,size:E,type:I,onCompositionStart:function(pe){H.current=!0,v==null||v(pe)},onCompositionEnd:Z}))},Ie=function(){var T=Number(ee)>0;if(b||z.show){var q=z.showFormatter?z.showFormatter({value:s,count:le,maxLength:ee}):"".concat(le).concat(T?" / ".concat(ee):"");return R.createElement(R.Fragment,null,z.show&&R.createElement("span",{className:j("".concat(h,"-show-count-suffix"),te({},"".concat(h,"-show-count-has-suffix"),!!b),F==null?void 0:F.count),style:J({},C==null?void 0:C.count)},q),b)}return null};return R.createElement(Ze,xe({},f,{prefixCls:h,className:j(A,ye),handleReset:ge,value:s,focused:k,triggerFocus:U,suffix:Ie(),disabled:x,classes:m,classNames:F,styles:C}),ze())});const Ct=e=>{const{getPrefixCls:o,direction:a}=r.useContext(be),{prefixCls:t,className:n}=e,u=o("input-group",t),l=o("input"),[d,w]=Be(l),h=j(u,{[`${u}-lg`]:e.size==="large",[`${u}-sm`]:e.size==="small",[`${u}-compact`]:e.compact,[`${u}-rtl`]:a==="rtl"},w,n),x=r.useContext(he),E=r.useMemo(()=>Object.assign(Object.assign({},x),{isFormItemInput:!1}),[x]);return d(r.createElement("span",{className:h,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},r.createElement(he.Provider,{value:E},e.children)))},Je=e=>{let o;return typeof e=="object"&&(e!=null&&e.clearIcon)?o=e:e&&(o={clearIcon:R.createElement(st,null)}),o};function et(e,o){const a=r.useRef([]),t=()=>{a.current.push(setTimeout(()=>{var n,u,l,d;!((n=e.current)===null||n===void 0)&&n.input&&((u=e.current)===null||u===void 0?void 0:u.input.getAttribute("type"))==="password"&&(!((l=e.current)===null||l===void 0)&&l.input.hasAttribute("value"))&&((d=e.current)===null||d===void 0||d.input.removeAttribute("value"))}))};return r.useEffect(()=>(o&&t(),()=>a.current.forEach(n=>{n&&clearTimeout(n)})),[]),t}function yt(e){return!!(e.prefix||e.suffix||e.allowClear||e.showCount)}var St=function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};function wt(e,o){if(!e)return;e.focus(o);const{cursor:a}=o||{};if(a){const t=e.value.length;switch(a){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(t,t);break;default:e.setSelectionRange(0,t)}}}const Oe=r.forwardRef((e,o)=>{var a;const{prefixCls:t,bordered:n=!0,status:u,size:l,disabled:d,onBlur:w,onFocus:h,suffix:x,allowClear:E,addonAfter:A,addonBefore:_,className:b,style:M,styles:K,rootClassName:N,onChange:I,classNames:m,variant:F}=e,C=St(e,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","className","style","styles","rootClassName","onChange","classNames","variant"]),{getPrefixCls:v,direction:O,input:f}=R.useContext(be),i=v("input",t),V=r.useRef(null),k=ke(i),[y,H,S]=Be(i,k),{compactSize:D,compactItemClassnames:U}=Ue(i,O),X=Ee(Q=>{var ce;return(ce=l??D)!==null&&ce!==void 0?ce:Q}),L=R.useContext(qe),G=d??L,{status:g,hasFeedback:s,feedbackIcon:c}=r.useContext(he),p=Me(g,u),P=yt(e)||!!s;r.useRef(P);const $=et(V,!0),z=Q=>{$(),w==null||w(Q)},ee=Q=>{$(),h==null||h(Q)},le=Q=>{$(),I==null||I(Q)},ie=(s||x)&&R.createElement(R.Fragment,null,x,s&&c),ae=Je(E??(f==null?void 0:f.allowClear)),[ue,Z]=Ye("input",F,n);return y(R.createElement(bt,Object.assign({ref:Te(o,V),prefixCls:i,autoComplete:f==null?void 0:f.autoComplete},C,{disabled:G,onBlur:z,onFocus:ee,style:Object.assign(Object.assign({},f==null?void 0:f.style),M),styles:Object.assign(Object.assign({},f==null?void 0:f.styles),K),suffix:ie,allowClear:ae,className:j(b,N,S,k,U,f==null?void 0:f.className),onChange:le,addonBefore:_&&R.createElement(We,{form:!0,space:!0},_),addonAfter:A&&R.createElement(We,{form:!0,space:!0},A),classNames:Object.assign(Object.assign(Object.assign({},m),f==null?void 0:f.classNames),{input:j({[`${i}-sm`]:X==="small",[`${i}-lg`]:X==="large",[`${i}-rtl`]:O==="rtl"},m==null?void 0:m.input,(a=f==null?void 0:f.classNames)===null||a===void 0?void 0:a.input,H),variant:j({[`${i}-${ue}`]:Z},_e(i,p)),affixWrapper:j({[`${i}-affix-wrapper-sm`]:X==="small",[`${i}-affix-wrapper-lg`]:X==="large",[`${i}-affix-wrapper-rtl`]:O==="rtl"},H),wrapper:j({[`${i}-group-rtl`]:O==="rtl"},H),groupWrapper:j({[`${i}-group-wrapper-sm`]:X==="small",[`${i}-group-wrapper-lg`]:X==="large",[`${i}-group-wrapper-rtl`]:O==="rtl",[`${i}-group-wrapper-${ue}`]:Z},_e(`${i}-group-wrapper`,p,s),H)})})))}),Et=e=>{const{componentCls:o,paddingXS:a}=e;return{[`${o}`]:{display:"inline-flex",alignItems:"center",flexWrap:"nowrap",columnGap:a,"&-rtl":{direction:"rtl"},[`${o}-input`]:{textAlign:"center",paddingInline:e.paddingXXS},[`&${o}-sm ${o}-input`]:{paddingInline:e.calc(e.paddingXXS).div(2).equal()},[`&${o}-lg ${o}-input`]:{paddingInline:e.paddingXS}}}},Rt=at(["Input","OTP"],e=>{const o=ot(e,it(e));return[Et(o)]},ut);var Ot=function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const zt=r.forwardRef((e,o)=>{const{value:a,onChange:t,onActiveChange:n,index:u,mask:l}=e,d=Ot(e,["value","onChange","onActiveChange","index","mask"]),w=a&&typeof l=="string"?l:a,h=b=>{t(u,b.target.value)},x=r.useRef(null);r.useImperativeHandle(o,()=>x.current);const E=()=>{je(()=>{var b;const M=(b=x.current)===null||b===void 0?void 0:b.input;document.activeElement===M&&M&&M.select()})},A=b=>{let{key:M}=b;M==="ArrowLeft"?n(u-1):M==="ArrowRight"&&n(u+1),E()},_=b=>{b.key==="Backspace"&&!a&&n(u-1),E()};return r.createElement(Oe,Object.assign({},d,{ref:x,value:w,onInput:h,onFocus:E,onKeyDown:A,onKeyUp:_,onMouseDown:E,onMouseUp:E,type:l===!0?"password":"text"}))});var It=function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};function Se(e){return(e||"").split("")}const Nt=r.forwardRef((e,o)=>{const{prefixCls:a,length:t=6,size:n,defaultValue:u,value:l,onChange:d,formatter:w,variant:h,disabled:x,status:E,autoFocus:A,mask:_}=e,b=It(e,["prefixCls","length","size","defaultValue","value","onChange","formatter","variant","disabled","status","autoFocus","mask"]),{getPrefixCls:M,direction:K}=r.useContext(be),N=M("otp",a),I=lt(b,{aria:!0,data:!0,attr:!0}),m=ke(N),[F,C,v]=Rt(N,m),O=Ee(s=>n??s),f=r.useContext(he),i=Me(f.status,E),V=r.useMemo(()=>Object.assign(Object.assign({},f),{status:i,hasFeedback:!1,feedbackIcon:null}),[f,i]),k=r.useRef(null),y=r.useRef({});r.useImperativeHandle(o,()=>({focus:()=>{var s;(s=y.current[0])===null||s===void 0||s.focus()},blur:()=>{var s;for(let c=0;c<t;c+=1)(s=y.current[c])===null||s===void 0||s.blur()},nativeElement:k.current}));const H=s=>w?w(s):s,[S,D]=r.useState(Se(H(u||"")));r.useEffect(()=>{l!==void 0&&D(Se(l))},[l]);const U=Le(s=>{D(s),d&&s.length===t&&s.every(c=>c)&&s.some((c,p)=>S[p]!==c)&&d(s.join(""))}),X=Le((s,c)=>{let p=Fe(S);for(let $=0;$<s;$+=1)p[$]||(p[$]="");c.length<=1?p[s]=c:p=p.slice(0,s).concat(Se(c)),p=p.slice(0,t);for(let $=p.length-1;$>=0&&!p[$];$-=1)p.pop();const P=H(p.map($=>$||" ").join(""));return p=Se(P).map(($,z)=>$===" "&&!p[z]?p[z]:$),p}),L=(s,c)=>{var p;const P=X(s,c),$=Math.min(s+c.length,t-1);$!==s&&((p=y.current[$])===null||p===void 0||p.focus()),U(P)},G=s=>{var c;(c=y.current[s])===null||c===void 0||c.focus()},g={variant:h,disabled:x,status:i,mask:_};return F(r.createElement("div",Object.assign({},I,{ref:k,className:j(N,{[`${N}-sm`]:O==="small",[`${N}-lg`]:O==="large",[`${N}-rtl`]:K==="rtl"},v,C)}),r.createElement(he.Provider,{value:V},Array.from({length:t}).map((s,c)=>{const p=`otp-${c}`,P=S[c]||"";return r.createElement(zt,Object.assign({ref:$=>{y.current[c]=$},key:p,index:c,size:O,htmlSize:1,className:`${N}-input`,onChange:L,value:P,onActiveChange:G,autoFocus:c===0&&A},g))}))))});var $t={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},At=function(o,a){return r.createElement(dt,xe({},o,{ref:a,icon:$t}))},Pt=r.forwardRef(At),jt=function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const _t=e=>e?r.createElement(ft,null):r.createElement(Pt,null),Ft={click:"onClick",hover:"onMouseOver"},Tt=r.forwardRef((e,o)=>{const{disabled:a,action:t="click",visibilityToggle:n=!0,iconRender:u=_t}=e,l=typeof n=="object"&&n.visible!==void 0,[d,w]=r.useState(()=>l?n.visible:!1),h=r.useRef(null);r.useEffect(()=>{l&&w(n.visible)},[l,n]);const x=et(h),E=()=>{a||(d&&x(),w(f=>{var i;const V=!f;return typeof n=="object"&&((i=n.onVisibleChange)===null||i===void 0||i.call(n,V)),V}))},A=f=>{const i=Ft[t]||"",V=u(d),k={[i]:E,className:`${f}-icon`,key:"passwordIcon",onMouseDown:y=>{y.preventDefault()},onMouseUp:y=>{y.preventDefault()}};return r.cloneElement(r.isValidElement(V)?V:r.createElement("span",null,V),k)},{className:_,prefixCls:b,inputPrefixCls:M,size:K}=e,N=jt(e,["className","prefixCls","inputPrefixCls","size"]),{getPrefixCls:I}=r.useContext(be),m=I("input",M),F=I("input-password",b),C=n&&A(F),v=j(F,_,{[`${F}-${K}`]:!!K}),O=Object.assign(Object.assign({},Ge(N,["suffix","iconRender","visibilityToggle"])),{type:d?"text":"password",className:v,prefixCls:m,suffix:C});return K&&(O.size=K),r.createElement(Oe,Object.assign({ref:Te(o,h)},O))});var Vt=function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const kt=r.forwardRef((e,o)=>{const{prefixCls:a,inputPrefixCls:t,className:n,size:u,suffix:l,enterButton:d=!1,addonAfter:w,loading:h,disabled:x,onSearch:E,onChange:A,onCompositionStart:_,onCompositionEnd:b}=e,M=Vt(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),{getPrefixCls:K,direction:N}=r.useContext(be),I=r.useRef(!1),m=K("input-search",a),F=K("input",t),{compactSize:C}=Ue(m,N),v=Ee(g=>{var s;return(s=u??C)!==null&&s!==void 0?s:g}),O=r.useRef(null),f=g=>{g!=null&&g.target&&g.type==="click"&&E&&E(g.target.value,g,{source:"clear"}),A==null||A(g)},i=g=>{var s;document.activeElement===((s=O.current)===null||s===void 0?void 0:s.input)&&g.preventDefault()},V=g=>{var s,c;E&&E((c=(s=O.current)===null||s===void 0?void 0:s.input)===null||c===void 0?void 0:c.value,g,{source:"input"})},k=g=>{I.current||h||V(g)},y=typeof d=="boolean"?r.createElement(ct,null):null,H=`${m}-button`;let S;const D=d||{},U=D.type&&D.type.__ANT_BUTTON===!0;U||D.type==="button"?S=He(D,Object.assign({onMouseDown:i,onClick:g=>{var s,c;(c=(s=D==null?void 0:D.props)===null||s===void 0?void 0:s.onClick)===null||c===void 0||c.call(s,g),V(g)},key:"enterButton"},U?{className:H,size:v}:{})):S=r.createElement(rt,{className:H,type:d?"primary":void 0,size:v,disabled:x,key:"enterButton",onMouseDown:i,onClick:V,loading:h,icon:y},d),w&&(S=[S,He(w,{key:"addonAfter"})]);const X=j(m,{[`${m}-rtl`]:N==="rtl",[`${m}-${v}`]:!!v,[`${m}-with-button`]:!!d},n),L=g=>{I.current=!0,_==null||_(g)},G=g=>{I.current=!1,b==null||b(g)};return r.createElement(Oe,Object.assign({ref:Te(O,o),onPressEnter:k},M,{size:v,onCompositionStart:L,onCompositionEnd:G,prefixCls:F,addonAfter:S,suffix:l,onChange:f,className:X,disabled:x}))});var Bt=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,Mt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],Ne={},ne;function Dt(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(o&&Ne[a])return Ne[a];var t=window.getComputedStyle(e),n=t.getPropertyValue("box-sizing")||t.getPropertyValue("-moz-box-sizing")||t.getPropertyValue("-webkit-box-sizing"),u=parseFloat(t.getPropertyValue("padding-bottom"))+parseFloat(t.getPropertyValue("padding-top")),l=parseFloat(t.getPropertyValue("border-bottom-width"))+parseFloat(t.getPropertyValue("border-top-width")),d=Mt.map(function(h){return"".concat(h,":").concat(t.getPropertyValue(h))}).join(";"),w={sizingStyle:d,paddingSize:u,borderSize:l,boxSizing:n};return o&&a&&(Ne[a]=w),w}function Lt(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;ne||(ne=document.createElement("textarea"),ne.setAttribute("tab-index","-1"),ne.setAttribute("aria-hidden","true"),document.body.appendChild(ne)),e.getAttribute("wrap")?ne.setAttribute("wrap",e.getAttribute("wrap")):ne.removeAttribute("wrap");var n=Dt(e,o),u=n.paddingSize,l=n.borderSize,d=n.boxSizing,w=n.sizingStyle;ne.setAttribute("style","".concat(w,";").concat(Bt)),ne.value=e.value||e.placeholder||"";var h=void 0,x=void 0,E,A=ne.scrollHeight;if(d==="border-box"?A+=l:d==="content-box"&&(A-=u),a!==null||t!==null){ne.value=" ";var _=ne.scrollHeight-u;a!==null&&(h=_*a,d==="border-box"&&(h=h+u+l),A=Math.max(h,A)),t!==null&&(x=_*t,d==="border-box"&&(x=x+u+l),E=A>x?"":"hidden",A=Math.min(x,A))}var b={height:A,overflowY:E,resize:"none"};return h&&(b.minHeight=h),x&&(b.maxHeight=x),b}var Ht=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],$e=0,Ae=1,Pe=2,Kt=r.forwardRef(function(e,o){var a=e,t=a.prefixCls;a.onPressEnter;var n=a.defaultValue,u=a.value,l=a.autoSize,d=a.onResize,w=a.className,h=a.style,x=a.disabled,E=a.onChange;a.onInternalAutoSize;var A=Re(a,Ht),_=Ve(n,{value:u,postState:function(P){return P??""}}),b=se(_,2),M=b[0],K=b[1],N=function(P){K(P.target.value),E==null||E(P)},I=r.useRef();r.useImperativeHandle(o,function(){return{textArea:I.current}});var m=r.useMemo(function(){return l&&De(l)==="object"?[l.minRows,l.maxRows]:[]},[l]),F=se(m,2),C=F[0],v=F[1],O=!!l,f=function(){try{if(document.activeElement===I.current){var P=I.current,$=P.selectionStart,z=P.selectionEnd,ee=P.scrollTop;I.current.setSelectionRange($,z),I.current.scrollTop=ee}}catch{}},i=r.useState(Pe),V=se(i,2),k=V[0],y=V[1],H=r.useState(),S=se(H,2),D=S[0],U=S[1],X=function(){y($e)};Ke(function(){O&&X()},[u,C,v,O]),Ke(function(){if(k===$e)y(Ae);else if(k===Ae){var p=Lt(I.current,!1,C,v);y(Pe),U(p)}else f()},[k]);var L=r.useRef(),G=function(){je.cancel(L.current)},g=function(P){k===Pe&&(d==null||d(P),l&&(G(),L.current=je(function(){X()})))};r.useEffect(function(){return G},[]);var s=O?D:null,c=J(J({},h),s);return(k===$e||k===Ae)&&(c.overflowY="hidden",c.overflowX="hidden"),r.createElement(vt,{onResize:g,disabled:!(l||d)},r.createElement("textarea",xe({},A,{ref:I,style:c,className:j(t,w,te({},"".concat(t,"-disabled"),x)),disabled:x,value:M,onChange:N})))}),Wt=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","showCount","count","className","style","disabled","hidden","classNames","styles","onResize","readOnly"],Xt=R.forwardRef(function(e,o){var a,t=e.defaultValue,n=e.value,u=e.onFocus,l=e.onBlur,d=e.onChange,w=e.allowClear,h=e.maxLength,x=e.onCompositionStart,E=e.onCompositionEnd,A=e.suffix,_=e.prefixCls,b=_===void 0?"rc-textarea":_,M=e.showCount,K=e.count,N=e.className,I=e.style,m=e.disabled,F=e.hidden,C=e.classNames,v=e.styles,O=e.onResize,f=e.readOnly,i=Re(e,Wt),V=Ve(t,{value:n,defaultValue:t}),k=se(V,2),y=k[0],H=k[1],S=y==null?"":String(y),D=R.useState(!1),U=se(D,2),X=U[0],L=U[1],G=R.useRef(!1),g=R.useState(null),s=se(g,2),c=s[0],p=s[1],P=r.useRef(null),$=r.useRef(null),z=function(){var B;return(B=$.current)===null||B===void 0?void 0:B.textArea},ee=function(){z().focus()};r.useImperativeHandle(o,function(){var Y;return{resizableTextArea:$.current,focus:ee,blur:function(){z().blur()},nativeElement:((Y=P.current)===null||Y===void 0?void 0:Y.nativeElement)||z()}}),r.useEffect(function(){L(function(Y){return!m&&Y})},[m]);var le=R.useState(null),ie=se(le,2),ae=ie[0],ue=ie[1];R.useEffect(function(){if(ae){var Y;(Y=z()).setSelectionRange.apply(Y,Fe(ae))}},[ae]);var Z=Qe(K,M),Q=(a=Z.max)!==null&&a!==void 0?a:h,ce=Number(Q)>0,de=Z.strategy(S),ge=!!Q&&de>Q,ye=function(B,re){var me=re;!G.current&&Z.exceedFormatter&&Z.max&&Z.strategy(re)>Z.max&&(me=Z.exceedFormatter(re,{max:Z.max}),re!==me&&ue([z().selectionStart||0,z().selectionEnd||0])),H(me),we(B.currentTarget,B,d,me)},ze=function(B){G.current=!0,x==null||x(B)},Ie=function(B){G.current=!1,ye(B,B.currentTarget.value),E==null||E(B)},W=function(B){ye(B,B.target.value)},T=function(B){var re=i.onPressEnter,me=i.onKeyDown;B.key==="Enter"&&re&&re(B),me==null||me(B)},q=function(B){L(!0),u==null||u(B)},pe=function(B){L(!1),l==null||l(B)},ve=function(B){H(""),ee(),we(z(),B,d)},oe=A,fe;Z.show&&(Z.showFormatter?fe=Z.showFormatter({value:S,count:de,maxLength:Q}):fe="".concat(de).concat(ce?" / ".concat(Q):""),oe=R.createElement(R.Fragment,null,oe,R.createElement("span",{className:j("".concat(b,"-data-count"),C==null?void 0:C.count),style:v==null?void 0:v.count},fe)));var tt=function(B){var re;O==null||O(B),(re=z())!==null&&re!==void 0&&re.style.height&&p(!0)},nt=!i.autoSize&&!M&&!w;return R.createElement(Ze,{ref:P,value:S,allowClear:w,handleReset:ve,suffix:oe,prefixCls:b,classNames:J(J({},C),{},{affixWrapper:j(C==null?void 0:C.affixWrapper,te(te({},"".concat(b,"-show-count"),M),"".concat(b,"-textarea-allow-clear"),w))}),disabled:m,focused:X,className:j(N,ge&&"".concat(b,"-out-of-range")),style:J(J({},I),c&&!nt?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof fe=="string"?fe:void 0}},hidden:F,readOnly:f},R.createElement(Kt,xe({},i,{maxLength:h,onKeyDown:T,onChange:W,onFocus:q,onBlur:pe,onCompositionStart:ze,onCompositionEnd:Ie,className:j(C==null?void 0:C.textarea),style:J(J({},v==null?void 0:v.textarea),{},{resize:I==null?void 0:I.resize}),disabled:m,prefixCls:b,onResize:tt,ref:$,readOnly:f})))}),Gt=function(e,o){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a};const Ut=r.forwardRef((e,o)=>{var a,t;const{prefixCls:n,bordered:u=!0,size:l,disabled:d,status:w,allowClear:h,classNames:x,rootClassName:E,className:A,style:_,styles:b,variant:M}=e,K=Gt(e,["prefixCls","bordered","size","disabled","status","allowClear","classNames","rootClassName","className","style","styles","variant"]),{getPrefixCls:N,direction:I,textArea:m}=r.useContext(be),F=Ee(l),C=r.useContext(qe),v=d??C,{status:O,hasFeedback:f,feedbackIcon:i}=r.useContext(he),V=Me(O,w),k=r.useRef(null);r.useImperativeHandle(o,()=>{var g;return{resizableTextArea:(g=k.current)===null||g===void 0?void 0:g.resizableTextArea,focus:s=>{var c,p;wt((p=(c=k.current)===null||c===void 0?void 0:c.resizableTextArea)===null||p===void 0?void 0:p.textArea,s)},blur:()=>{var s;return(s=k.current)===null||s===void 0?void 0:s.blur()}}});const y=N("input",n),H=ke(y),[S,D,U]=Be(y,H),[X,L]=Ye("textArea",M,u),G=Je(h??(m==null?void 0:m.allowClear));return S(r.createElement(Xt,Object.assign({autoComplete:m==null?void 0:m.autoComplete},K,{style:Object.assign(Object.assign({},m==null?void 0:m.style),_),styles:Object.assign(Object.assign({},m==null?void 0:m.styles),b),disabled:v,allowClear:G,className:j(U,H,A,E,m==null?void 0:m.className),classNames:Object.assign(Object.assign(Object.assign({},x),m==null?void 0:m.classNames),{textarea:j({[`${y}-sm`]:F==="small",[`${y}-lg`]:F==="large"},D,x==null?void 0:x.textarea,(a=m==null?void 0:m.classNames)===null||a===void 0?void 0:a.textarea),variant:j({[`${y}-${X}`]:L},_e(y,V)),affixWrapper:j(`${y}-textarea-affix-wrapper`,{[`${y}-affix-wrapper-rtl`]:I==="rtl",[`${y}-affix-wrapper-sm`]:F==="small",[`${y}-affix-wrapper-lg`]:F==="large",[`${y}-textarea-show-count`]:e.showCount||((t=e.count)===null||t===void 0?void 0:t.show)},D)}),prefixCls:y,suffix:f&&r.createElement("span",{className:`${y}-textarea-suffix`},i),ref:k})))}),Ce=Oe;Ce.Group=Ct;Ce.Search=kt;Ce.TextArea=Ut;Ce.Password=Tt;Ce.OTP=Nt;export{Ce as I};
