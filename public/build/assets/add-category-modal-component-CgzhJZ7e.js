import{r as n,j as e,s as i}from"./app-B0kkCG56.js";import{c as m}from"./category-thunk-nHJA6zri.js";import{M as p}from"./index-ALQPZvwd.js";import"./button-DFk9BAGU.js";import"./index-DOLOvgOo.js";import"./index-BQ8QBrqq.js";function y({isOpen:l,closeModal:a}){const[c,o]=n.useState(!1),[t,s]=n.useState({});async function u(r){r.preventDefault(),o(!0),await i.dispatch(m(t)),s({}),a(),o(!1)}return e.jsx(e.Fragment,{children:e.jsx(p,{title:"Category Information",okText:"Submit",onOk:u,confirmLoading:c,open:l,onCancel:a,children:e.jsx("form",{className:"max-w-full mx-auto mt-6 ",children:e.jsx("div",{className:"grid md:gap-6",children:e.jsxs("div",{className:"relative z-0 w-full mb-6 group",children:[e.jsx("input",{onChange:r=>s({...t,name:r.target.value}),value:(t==null?void 0:t.name)??"",type:"text",className:"block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0}),e.jsx("label",{htmlFor:"floating_Requestor_name",className:"peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Category Name"})]})})})})})}export{y as default};
