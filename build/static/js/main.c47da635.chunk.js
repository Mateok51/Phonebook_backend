(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t(1),c=t(15),r=t.n(c),a=t(3),s=function(e){var n=e.filterName,t=e.setFilterName;return Object(o.jsxs)("div",{children:["filter shown with"," ",Object(o.jsx)("input",{value:n,onChange:function(e){t(e.target.value)}})]})},u=t(6),f=t(4),h=t.n(f),l="api/persons",b=function(){return h.a.get(l).then((function(e){return e.data}))},j=function(e){return h.a.post(l,e).then((function(e){return e.data}))},d=function(e){return h.a.delete("".concat(l,"/").concat(e))},m=function(e,n){return h.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},O=function(e){var n=e.persons,t=e.setPersons,i=e.newName,c=e.setNewName,r=e.newNumber,a=e.setNewNumber,s=e.setNotification;return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();for(var o={name:i,date:(new Date).toISOString(),number:r,id:n.length+1},c=0;c<n.length;c++)if(n[c].name===o.name){if(window.confirm("This contact is already added in the phonebook. Do you want to change the number of the contact?")){var a=n.find((function(e){return e.name===o.name})),f=Object(u.a)(Object(u.a)({},a),{},{number:o.number});m(f.id,f).then((function(e){s("The number of ".concat(o.name," is changed to ").concat(o.number)),setInterval((function(){s(null)}),5e3),t(n.map((function(n){return n.name!==o.name?n:e})))})).catch((function(e){s("There has been a change in the list. List is refreshed"),setInterval((function(){s(null)}),5e3),b().then((function(e){t(e)}))}))}}else c===n.length-1&&n[c].name!==o.name&&j(o).then((function(e){return s("Person with the name of ".concat(o.name," is added to the phonebook")),setInterval((function(){s(null)}),5e3),t(n.concat(e))})).catch((function(e){s(e.response.data),setInterval((function(){s(null)}),5e3),b().then((function(e){t(e)}))}))},children:[Object(o.jsxs)("div",{children:["name: ",Object(o.jsx)("input",{value:i,onChange:function(e){c(e.target.value)}})]}),Object(o.jsxs)("div",{children:["number : ",Object(o.jsx)("input",{value:r,onChange:function(e){a(e.target.value)}})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e){var n=e.person,t=e.persons,i=e.setPersons,c=e.setNotification;return Object(o.jsxs)("li",{children:[n.name," ",n.number,Object(o.jsx)("button",{onClick:function(){return e=n.id,void(window.confirm("Do you really want to delete this person from the phonebook?")&&d(e).then((function(){i(t.filter((function(n){return n.id!==e}))),c("The person was deleted from the phonebook"),setInterval((function(){c(null)}),5e3)})).catch((function(e){c("There has been a change in the list. List is refreshed"),setInterval((function(){c(null)}),5e3),b().then((function(e){i(e)}))})));var e},children:"delete"})]})},v=function(e){var n=e.persons,t=e.filterName,i=e.setPersons,c=e.setNotification,r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(o.jsx)("ul",{children:r.map((function(e){return Object(o.jsx)(p,{person:e,persons:n,setPersons:i,filteredList:r,setNotification:c},e.id)}))})},N=function(e){var n=e.notification;return null===n?null:Object(o.jsx)("div",{className:"notification",children:n})},w=function(){var e=Object(i.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],r=Object(i.useState)("Person name"),u=Object(a.a)(r,2),f=u[0],h=u[1],l=Object(i.useState)("Number"),j=Object(a.a)(l,2),d=j[0],m=j[1],p=Object(i.useState)("name"),w=Object(a.a)(p,2),x=w[0],g=w[1],k=Object(i.useState)(null),P=Object(a.a)(k,2),I=P[0],S=P[1];return Object(i.useEffect)((function(){b().then((function(e){c(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Phonebook"}),Object(o.jsx)(N,{notification:I}),Object(o.jsx)(s,{filterName:x,setFilterName:g}),Object(o.jsx)("h3",{children:"Add a new person to the phonebook"}),Object(o.jsx)(O,{persons:t,setPersons:c,newName:f,setNewName:h,newNumber:d,setNewNumber:m,setNotification:S}),Object(o.jsx)("h3",{children:"Numbers"}),Object(o.jsx)(v,{persons:t,filterName:x,setPersons:c,setNotification:S})]})};t(38);r.a.render(Object(o.jsx)(w,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c47da635.chunk.js.map