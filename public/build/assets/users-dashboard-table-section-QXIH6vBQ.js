import{u as n,r,j as s}from"./app-DWyUH7ES.js";import{T as d}from"./table-zQ4cKhRQ.js";function k(){const{users:t}=n(e=>e.it),[a,o]=r.useState([]),i=[{title:"Name",key:"name"},{title:"Position",key:"position"},{title:"Assigned Tickets",key:"assigned_count"},{title:"Closed Tickets",key:"closed_count"}],c=t.data.map(e=>({...e}));return console.log("users.data",t.data),s.jsx("div",{children:s.jsx(d,{setDataChecked:o,dataChecked:a,columns:i,data:c,isCheckbox:!0})})}export{k as default};