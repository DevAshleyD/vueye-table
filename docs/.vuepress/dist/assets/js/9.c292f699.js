(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{351:function(e,a,t){},391:function(e,a,t){"use strict";var r=t(351);t.n(r).a},419:function(e,a,t){"use strict";t.r(a);var r=t(355),l={name:"HeadCustomRendering",data:function(){return{users:r,columns:[{key:"avatar_url",label:"Avatar",sortable:!0,display:!0},{key:"login",label:"User name",sortable:!0,display:!0},{key:"html_url",label:"Profile",display:!0}]}}},n=(t(391),t(0)),u=Object(n.a)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("VueyeTable",{attrs:{data:e.users,columns:e.columns,title:"Github users"},scopedSlots:e._u([{key:"header.avatar_url",fn:function(a){var r=a.column;return[e._v("\n      "+e._s(r.label)+" "),t("i",[e._v("(The user profile image)")])]}},{key:"header.html_url",fn:function(a){var r=a.column;return[e._v("\n      "+e._s(r.label)+" "),t("i",[e._v("(Link to the user profile)")])]}},{key:"avatar_url",fn:function(e){var a=e.item;return[t("img",{staticClass:"ve-avatar",attrs:{src:a.avatar_url,alt:""}})]}},{key:"html_url",fn:function(a){var r=a.item;return[t("a",{attrs:{target:"_blank",href:r.html_url}},[e._v(e._s(r.html_url))])]}}])})],1)}),[],!1,null,null,null);a.default=u.exports}}]);