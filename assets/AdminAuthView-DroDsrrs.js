import{r as d,c as m,a as o,w as r,v as u,P as c,u as b,o as w}from"./index-C4dBammT.js";const f={class:"min-h-screen flex items-center justify-center bg-gray-100"},g={class:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md"},x={class:"mb-4"},v={class:"mb-6"},y={class:"mb-6"},_={__name:"AdminAuthView",setup(h){const i=b(),t=d(""),l=d(""),n=d(""),p=()=>{c("admin/login",{username:t.value,password:l.value,pincode:n.value}).then(a=>{a.ok&&(localStorage.setItem("api_token",a.api_token),localStorage.setItem("username",t.value),localStorage.setItem("admin_id",a.admin_id),localStorage.setItem("login",!0),i.replace({name:"admin_dashboard"}))})};return(a,e)=>(w(),m("div",f,[o("div",g,[e[6]||(e[6]=o("h2",{class:"text-2xl font-bold mb-6 text-center"},"Admin Login",-1)),o("div",null,[o("div",x,[e[3]||(e[3]=o("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"username"},"username",-1)),r(o("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"username",placeholder:"username"},null,512),[[u,t.value]])]),o("div",v,[e[4]||(e[4]=o("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"password"},"Password",-1)),r(o("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>l.value=s),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"Password"},null,512),[[u,l.value]])]),o("div",y,[e[5]||(e[5]=o("label",{class:"block text-gray-700 text-sm font-bold mb-2",for:"password"},"Pin Code",-1)),r(o("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>n.value=s),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"Password"},null,512),[[u,n.value]])]),o("div",{class:"flex items-center justify-between"},[o("button",{onClick:p,class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit"},"Login")])])])]))}};export{_ as default};
