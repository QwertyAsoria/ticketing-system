import{u as l,j as s}from"./app-CqMvFS7D.js";import n from"./admin-ticket-change-status-section-dNf9JS1E.js";import a from"./admin-ticket-assigned-section-C-_DCaph.js";import"./tickets-thunk-CwWAF6vb.js";import"./ticket-service-DVkjCvMP.js";import"./it-thunk-Oti-dcDC.js";import"./index-BeQaqcMb.js";import"./button-CW8sq5hJ.js";import"./index-CKSvBG2M.js";import"./AntdIcon-D0grFVBS.js";import"./index-BRbXvh3g.js";import"./EyeOutlined-D_zv0qhd.js";import"./index-C-lb71dd.js";import"./index-DNoUjbZ6.js";function b(){var m,i,e;const{ticket:d}=l(t=>t.tickets);return console.log("ticket",d),s.jsxs("div",{children:[s.jsxs("div",{class:"px-4 sm:px-0",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsx("h3",{class:"text-base font-semibold leading-7 text-gray-900",children:"Project Information"}),s.jsxs("div",{className:"flex gap-3",children:[d.status=="Pending"&&s.jsx(a,{}),s.jsx(n,{})]})]}),s.jsxs("p",{class:"mt-1 max-w-2xl text-sm leading-6 text-gray-800",children:["Start At: ",d.start]}),s.jsxs("p",{class:"mt-1 max-w-2xl text-sm leading-6 text-gray-800",children:["End At: ",d.end]})]}),s.jsx("div",{class:"mt-6 border-t border-gray-100",children:s.jsxs("dl",{class:"divide-y divide-gray-100",children:[s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"Ticket ID:"}),s.jsxs("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:["#",d.ticket_id]})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"Filed by:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:(m=d.user)==null?void 0:m.name})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"Assigned To:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:(i=d==null?void 0:d.assigned_to)==null?void 0:i.name})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"Category:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:(e=d==null?void 0:d.category)==null?void 0:e.name})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"Status:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:d==null?void 0:d.status})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"Urgent?:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:(d==null?void 0:d.isUrgent)===null||(d==null?void 0:d.isUrgent)==="undefined"?"No":"Yes"})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"Details:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:d==null?void 0:d.details})]}),s.jsxs("div",{class:"px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0",children:[s.jsx("dt",{class:"text-sm font-medium leading-6",children:"PC/Station No.:"}),s.jsx("dd",{class:"mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0",children:(d==null?void 0:d.station)??"N/A"})]})]})})]})}export{b as default};