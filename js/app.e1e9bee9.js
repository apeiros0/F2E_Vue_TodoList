(function(t){function e(e){for(var a,n,r=e[0],i=e[1],d=e[2],p=0,u=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(u.length)u.shift()();return c.push.apply(c,d||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],a=!0,r=1;r<o.length;r++){var i=o[r];0!==s[i]&&(a=!1)}a&&(c.splice(e--,1),t=n(n.s=o[0]))}return t}var a={},s={app:0},c=[];function n(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=a,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/F2E_Vue_TodoList/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=i;c.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var a=o("2b0e"),s=o("bc3a"),c=o.n(s),n=o("a7fe"),r=o.n(n),i=(o("4989"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("nav",{staticClass:"nav-todo bg-primary mb-3"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-4"},[o("div",{staticClass:"nav-todo-item text-center",class:{active:"all"===t.completed}},[o("a",{staticClass:"nav-todo-item-link py-4",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.completed="all"}}},[t._v("My Tasks")])])]),o("div",{staticClass:"col-md-4"},[o("div",{staticClass:"nav-todo-item text-center",class:{active:"progress"===t.completed}},[o("a",{staticClass:"nav-todo-item-link py-4",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.completed="progress"}}},[t._v("In Progress")])])]),o("div",{staticClass:"col-md-4"},[o("div",{staticClass:"nav-todo-item text-center",class:{active:"completed"===t.completed}},[o("a",{staticClass:"nav-todo-item-link py-4",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.completed="completed"}}},[t._v("Completed")])])])])])]),o("div",{staticClass:"container"},[t.isNewTodo?t._e():o("div",{staticClass:"input-todo-group mb-3",on:{click:function(e){t.isNewTodo=!0}}},[t._m(0),o("input",{staticClass:"input-todo pl-6",attrs:{type:"text",placeholder:"Add Task"}})]),t.isNewTodo?o("EditTodo",{on:{closeEditTodo:t.closeEditTodo,getTodos:t.getTodos}}):t._e(),o("draggable",{attrs:{handle:".icon-draggable"},on:{end:t.dragItem},model:{value:t.todos,callback:function(e){t.todos=e},expression:"todos"}},[t._l(t.todos,(function(e){return[e.id!==t.cacheTodo.id?o("TodoItem",{key:e.id,attrs:{todo:e,completed:t.completed},on:{getTodos:t.getTodos,updateTodo:t.updateTodo}}):o("EditTodo",{key:e.timeStamp,attrs:{todo:t.cacheTodo},on:{closeEditTodo:t.closeEditTodo,getTodos:t.getTodos}})]}))],2),"progress"===t.completed||"all"===t.completed?o("i",{staticClass:"processing-tasks d-block pl-4"},[t._v(t._s(t.getStatusNum)+" tasks left")]):o("i",{staticClass:"processing-tasks d-block pl-4"},[t._v(t._s(t.todos.length-t.getStatusNum)+" tasks completed")])],1)])}),d=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"input-prepend d-flex align-items-center justify-content-center"},[o("i",{staticClass:"fas fa-plus-circle"})])}],l=(o("8e6e"),o("456d"),o("bd86")),p=(o("1c4c"),o("7514"),o("ac6a"),o("5df3"),o("4f7f"),o("55dd"),o("75fc")),u=o("310e"),m=o.n(u),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"edit-todo-card mb-4"},[o("div",{staticClass:"card-header bg-secondary px-4 py-3",class:{"bg-warning":t.cacheTodo.stared}},[o("div",{staticClass:"d-flex align-items-center"},[t._m(0),o("div",{staticClass:"mb-0 w-100"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.cacheTodo.message,expression:"cacheTodo.message"}],staticClass:"form-control form-control-lg input-todo",attrs:{type:"text",placeholder:"Add Task"},domProps:{value:t.cacheTodo.message},on:{input:function(e){e.target.composing||t.$set(t.cacheTodo,"message",e.target.value)}}})])])]),o("div",{staticClass:"card-body bg-secondary pt-4 pb-0"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-10"},[o("form",{staticClass:"mb-4"},[o("div",{staticClass:"form-row mb-4"},[o("i",{staticClass:"far fa-calendar-alt pt-1"}),o("div",{staticClass:"col"},[o("label",{staticClass:"font-weight-bold h-0",attrs:{for:"inputDate"}},[t._v("\n                Deadline\n              ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.cacheTodo.startDate,expression:"cacheTodo.startDate"}],staticClass:"form-control",attrs:{type:"date",placeholder:"yyyy/mm/dd",id:"inputDate"},domProps:{value:t.cacheTodo.startDate},on:{input:function(e){e.target.composing||t.$set(t.cacheTodo,"startDate",e.target.value)}}})]),o("div",{staticClass:"col"},[o("label",{staticClass:"text-hidden",attrs:{for:"inputTime"}},[t._v("Deadline")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.cacheTodo.endDate,expression:"cacheTodo.endDate"}],staticClass:"form-control",attrs:{type:"date",placeholder:"hh:mm",id:"inputTime"},domProps:{value:t.cacheTodo.endDate},on:{input:function(e){e.target.composing||t.$set(t.cacheTodo,"endDate",e.target.value)}}})])]),o("div",{staticClass:"form-row"},[o("i",{staticClass:"far fa-comment-dots pt-1"}),o("div",{staticClass:"col"},[o("label",{staticClass:"font-weight-bold",attrs:{for:"inputComment"}},[t._v("Comment")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.cacheTodo.comments,expression:"cacheTodo.comments"}],staticClass:"form-control textarea textarea-style",attrs:{id:"inputComment",rows:"4",placeholder:"Type your memo here…"},domProps:{value:t.cacheTodo.comments},on:{input:function(e){e.target.composing||t.$set(t.cacheTodo,"comments",e.target.value)}}})])])])])])]),o("div",{staticClass:"card-btn row no-gutters"},[o("div",{staticClass:"col-6 d-flex align-items-center"},[o("button",{staticClass:"btn btn-light btn-block btn-lg btn-unstyle text-danger",attrs:{type:"button"},on:{click:t.closeEditTodo}},[o("span",{staticClass:"btn-icon mr-2"},[t._v("×")]),o("span",[t._v("Cancel")])])]),o("div",{staticClass:"col-6"},[o("button",{staticClass:"btn btn-primary btn-block btn-lg btn-unstyle",attrs:{type:"button"},on:{click:t.updateTodo}},[o("span",{staticClass:"btn-icon mr-2"},[t._v("+")]),t.isOld?o("span",[t._v("Update Task")]):o("span",[t._v("Add Task")])])])])])},h=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex"},[o("i",{staticClass:"fas fa-edit icon-size text-primary mr-3"})])}];function v(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function b(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?v(o,!0).forEach((function(e){Object(l["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):v(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var g={props:["todo"],data:function(){return{cacheTodo:{},isOld:!1}},created:function(){this.todo?(this.isOld=!0,this.cacheTodo=this.todo):this.cacheTodo={}},methods:{updateTodo:function(){var t=this,e="https://intense-citadel-09458.herokuapp.com/todos",o="post",a=Math.floor(Date.now()/1e3),s=b({},t.cacheTodo,{timeStamp:a,stared:!1,completed:"progress"});t.isOld&&(e="https://intense-citadel-09458.herokuapp.com/todos/".concat(t.cacheTodo.id),o="put",s=b({},t.cacheTodo)),t.$http[o](e,s).then((function(e){201===e.status&&(t.cacheTodo={},t.closeEditTodo()),200===e.status&&t.closeEditTodo()}))},closeEditTodo:function(){this.$emit("closeEditTodo"),this.$emit("getTodos")}}},y=g,C=o("2877"),T=Object(C["a"])(y,f,h,!1,null,null,null),O=T.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.completed===t.completedStatus||"all"===t.completed?o("div",{staticClass:"nav-item bg-secondary"},[t._m(0),o("div",{staticClass:"mb-2 px-4 py-3",class:{"bg-warning":t.todo.stared}},[o("div",{staticClass:"d-flex align-items-end"},[o("label",{staticClass:"todo-checkbox-group mr-3"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.isChecked,expression:"isChecked"}],staticClass:"todo-checkbox",attrs:{type:"checkbox",id:t.todo.timeStamp},domProps:{checked:Array.isArray(t.isChecked)?t._i(t.isChecked,null)>-1:t.isChecked},on:{change:[function(e){var o=t.isChecked,a=e.target,s=!!a.checked;if(Array.isArray(o)){var c=null,n=t._i(o,c);a.checked?n<0&&(t.isChecked=o.concat([c])):n>-1&&(t.isChecked=o.slice(0,n).concat(o.slice(n+1)))}else t.isChecked=s},t.updateTaskStatus]}}),o("span",{staticClass:"todo-checkbox-mark"})]),o("label",{staticClass:"todo-title mb-0",class:{active:t.isChecked},attrs:{for:t.todo.timeStamp}},[t._v("\n        "+t._s(t.todo.message)+"\n      ")]),o("div",{staticClass:"ml-auto"},[o("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updateStar(e)}}},[t.todo.stared?o("i",{staticClass:"fas fa-star text-info icon-size"}):o("i",{staticClass:"far fa-star icon-size text-dark"})]),o("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.updateTodo(e)}}},[o("i",{staticClass:"far fa-edit icon-size text-dark ml-4"})])])]),o("p",{staticClass:"icon-info mt-3 mb-0"},[o("span",{staticClass:"mr-3"},[o("i",{staticClass:"far fa-calendar-alt pt-1"}),t.todo.startDate?o("span",{staticClass:"ml-2"},[t._v(t._s(t.todo.startDate)+" - "+t._s(t.todo.endDate))]):t._e()]),t.todo.comments?o("i",{staticClass:"far fa-comment-dots pt-1"}):t._e()])])]):t._e()},w=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"icon-draggable ml-1 d-flex align-items-center"},[o("i",{staticClass:"fas fa-ellipsis-v"})])}];function _(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function j(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?_(o,!0).forEach((function(e){Object(l["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):_(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var x={props:["todo","completed"],data:function(){return{isChecked:"completed"===this.todo.completed,completedStatus:this.todo.completed}},methods:{updateStar:function(){var t=this,e="https://intense-citadel-09458.herokuapp.com/todos/".concat(t.todo.id),o=j({},t.todo);o.stared=!o.stared,t.$http.put(e,o).then((function(){t.$emit("getTodos")}))},updateTodo:function(){this.$emit("updateTodo",this.todo)},updateTaskStatus:function(){var t=this,e="https://intense-citadel-09458.herokuapp.com/todos/".concat(t.todo.id),o=j({},t.todo);this.isChecked?t.completedStatus="completed":t.completedStatus="progress",o.completed=t.completedStatus,t.$http.put(e,o).then((function(){t.$emit("getTodos")}))}}},P=x,D=Object(C["a"])(P,k,w,!1,null,null,null),S=D.exports;function E(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function $(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?E(o,!0).forEach((function(e){Object(l["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):E(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var N={name:"app",data:function(){return{todos:[],isNewTodo:!1,sort:[],cacheTodo:{},completed:"all"}},created:function(){this.getTodos()},methods:{closeEditTodo:function(){this.isNewTodo=!1,this.cacheTodo={}},getTodos:function(){var t=this,e="https://intense-citadel-09458.herokuapp.com/todos",o=[],a=[];t.$http.get(e).then((function(e){return o=Object(p["a"])(e.data),t.$http.get("https://intense-citadel-09458.herokuapp.com/sort")})).then((function(e){if(a=Object(p["a"])(e.data.sort),0!==a.length){var s=new Set,c=new Set;a.forEach((function(e){var a=o.find((function(t){return e===t.id}));a.stared?c.add(a):s.add(a),t.todos=Object(p["a"])(Array.from(c).concat(Array.from(s)))})),o.forEach((function(e){var o=a.some((function(t){return t===e.id}));o||t.todos.push(e)}))}else t.todos=Object(p["a"])(o)}))},dragItem:function(){var t=this,e="https://intense-citadel-09458.herokuapp.com/sort",o=t.todos.map((function(t){return t.id}));t.$http.post(e,{sort:o}).then((function(){}))},updateTodo:function(t){this.cacheTodo=$({},t)}},computed:{getStatusNum:function(){return this.todos.filter((function(t){return"progress"===t.completed})).length}},components:{EditTodo:O,TodoItem:S,draggable:m.a}},A=N,M=(o("5c0b"),Object(C["a"])(A,i,d,!1,null,null,null)),I=M.exports;a["a"].config.productionTip=!1,a["a"].use(r.a,c.a),new a["a"]({render:function(t){return t(I)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var a=o("e332"),s=o.n(a);s.a},e332:function(t,e,o){}});
//# sourceMappingURL=app.e1e9bee9.js.map