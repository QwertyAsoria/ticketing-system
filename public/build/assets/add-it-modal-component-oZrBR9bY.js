import{r as u,j as e,s as c}from"./app-DG0oUn15.js";import{c as d,g as m}from"./it-thunk-KOAZMJYD.js";import{M as f}from"./index-DIXiB-td.js";import"./ticket-service-BUXOqfJK.js";import"./index-BBp4l9YW.js";import"./index-XLxPQVGP.js";function v({isOpen:p,closeModal:s}){const[i,o]=u.useState(!1),[r,l]=u.useState({});async function n(a){a.preventDefault(),o(!0);try{await c.dispatch(d({...r,account_type:2})),await c.dispatch(m(2)),l({}),s(),o(!1)}catch{alert("error"),o(!1)}}function t(a){l({...r,[a.target.name]:a.target.value})}return e.jsx(e.Fragment,{children:e.jsx(f,{title:" IT Personnel Information",okText:"Submit",onOk:n,confirmLoading:i,open:p,onCancel:s,children:e.jsx("div",{className:"text-center md:mt-0 md:text-left w-full",children:e.jsxs("form",{onSubmit:n,className:"max-w-full mx-auto mt-4 ",children:[e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{onChange:t,type:"text",value:(r==null?void 0:r.name)??"",name:"name",id:"name",className:"block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0}),e.jsx("label",{htmlFor:"name",className:"z-30 peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Fullname"})]}),e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{onChange:t,type:"email",name:"email",value:(r==null?void 0:r.email)??"",id:"email",className:"block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0}),e.jsx("label",{htmlFor:"email",className:"peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-30 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Email address"})]}),e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{onChange:t,type:"text",name:"position",id:"position",value:(r==null?void 0:r.position)??"",className:"block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0}),e.jsx("label",{htmlFor:"position",className:"peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-30 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Position"})]}),e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{onChange:t,type:"text",name:"password",id:"password",value:(r==null?void 0:r.password)??"",className:"block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",required:!0}),e.jsx("label",{htmlFor:"password",className:"peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 z-30 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Password"})]})]})})})})}export{v as default};