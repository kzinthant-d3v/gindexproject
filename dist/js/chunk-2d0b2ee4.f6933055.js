(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ee4"],{"25e0":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"table is-hoverable"},[e("thead",[e("tr",t._l(t.columns,(function(a,n){return e("th",{key:n,class:a.class,style:a.style},[t._v(" "+t._s(a.name)+" "),t._m(0,!0)])})),0)]),e("tbody",t._l(t.data,(function(a,n){return e("tr",{key:n},[e("td",{attrs:{title:a.name},on:{click:function(e){return e.target!==e.currentTarget?null:t.action(a,"application/vnd.google-apps.folder"!==a.mimeType?"view":"")}}},[e("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":t.icons(a.mimeType)}})]),t._v(" "+t._s(a.name)+" ")]),e("td",[t._v(t._s(a.size))]),e("td",[e("span",{staticClass:"icon",on:{click:function(e){return e.stopPropagation(),t.action(a,"copy")}}},[e("i",{staticClass:"fa fa-copy faa-shake animated-hover",attrs:{title:t.$t("list.opt.copy"),"aria-hidden":"true"}})]),e("span",{staticClass:"icon",on:{click:function(e){return e.stopPropagation(),t.action(a,"_blank")}}},[e("i",{staticClass:"fa fa-external-link faa-shake animated-hover",attrs:{title:t.$t("list.opt.newTab"),"aria-hidden":"true"}})]),"application/vnd.google-apps.folder"!==a.mimeType?e("span",{staticClass:"icon",on:{click:function(e){return e.stopPropagation(),t.action(a,"down")}}},[e("i",{staticClass:"fa fa-download faa-shake animated-hover",attrs:{"aria-hidden":"true",title:t.$t("list.opt.download")}})]):t._e()])])})),0)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"caret-wrapper"},[e("i",{staticClass:"sort-caret ascending"}),e("i",{staticClass:"sort-caret descending"})])}],s={props:{data:{type:Array,default:function(){return[]}},icons:{type:Function},action:{type:Function}},computed:{columns:function(){return[{name:this.$t("list.title.file"),style:"width:50%"},{name:this.$t("list.title.size"),style:"width:25%"},{name:this.$t("list.title.operation"),style:"width:25%"}]},isShowDesc:function(){return window.themeOptions.render.desc||!1}}},o=s,r=e("2877"),c=Object(r["a"])(o,n,i,!1,null,null,null);a["default"]=c.exports}}]);