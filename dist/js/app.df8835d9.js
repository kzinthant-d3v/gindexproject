(function(e){function t(t){for(var a,o,c=t[0],s=t[1],u=t[2],d=0,l=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-02979915":"4e5ed3b6","chunk-2d225416":"bc1e2c5a","chunk-1f1f60af":"5b15b33f","chunk-2d0af48a":"822ff31e","chunk-5d16e092":"97d73239","chunk-072ae9f4":"52d0b788","chunk-075e2f32":"7364cc4c","chunk-2d0b2ee4":"6f55f380","chunk-2d0f0fbe":"9834fe39","chunk-4b66a741":"72732698","chunk-74a0e63a":"04745920","chunk-bfd1bba6":"ca245707","chunk-c35be52e":"bc215dde","chunk-2d1e3ca3":"5678841d","chunk-40ad1794":"0d3b507f"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-02979915":1,"chunk-1f1f60af":1,"chunk-5d16e092":1,"chunk-075e2f32":1,"chunk-4b66a741":1,"chunk-74a0e63a":1,"chunk-bfd1bba6":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-02979915":"7494f567","chunk-2d225416":"31d6cfe0","chunk-1f1f60af":"18f65544","chunk-2d0af48a":"31d6cfe0","chunk-5d16e092":"3db21603","chunk-072ae9f4":"31d6cfe0","chunk-075e2f32":"63d5b552","chunk-2d0b2ee4":"31d6cfe0","chunk-2d0f0fbe":"31d6cfe0","chunk-4b66a741":"9b848216","chunk-74a0e63a":"63fc079f","chunk-bfd1bba6":"30be7901","chunk-c35be52e":"31d6cfe0","chunk-2d1e3ca3":"31d6cfe0","chunk-40ad1794":"31d6cfe0"}[e]+".css",r=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===r))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===a||d===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="https://cdn.jsdelivr.net/gh/kzinthant-d3v/gindexproject@main/dist/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"065c":function(e,t,n){"use strict";var a=n("9e9c"),o=n.n(a);o.a},"0853":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{id:"aplayer"}})},o=[],r=(n("d3b7"),n("3ca3"),n("ddb0"),n("5530")),i=n("5880"),c={data:function(){return{}},mounted:function(){var e=this;this.load(),Promise.all([n.e("chunk-74a0e63a").then(n.t.bind(null,"764d",7)),n.e("chunk-2d0f0fbe").then(n.t.bind(null,"9f61",7))]).then((function(t){var n=t[1].default;e.set(new n(e.options))}))},computed:Object(r["a"])(Object(r["a"])({},Object(i["mapState"])("acrou/aplayer",["player","audios","openedAudios"])),{},{container:function(){return document.getElementById("aplayer")},options:function(){var e=window.themeOptions.audio;return Object(r["a"])(Object(r["a"])({autoplay:!1,loop:"all",order:"list",preload:"auto"},e),{},{container:this.container,fixed:!0,audio:this.audios||[]})},show:function(){return this.audios&&this.audios.length>0||this.openedAudios&&this.openedAudios.length>0}}),methods:Object(r["a"])({},Object(i["mapActions"])("acrou/aplayer",["load","set"]))},s=c,u=n("2877"),d=Object(u["a"])(s,a,o,!1,null,null,null);t["default"]=d.exports},"2e32":function(e){e.exports=JSON.parse('{"_name":"简体中文","languages":"选择语言","index":"首页","folder":"文件夹","notify":{"title":"提示"},"copy":{"text":"复制","success":"复制成功","error":"复制失败"},"list":{"view":{"gridMode":"网格视图","listMode":"列表视图"},"auth":"目录加密，请输入密码","title":{"file":"文件","moditime":"修改时间","size":"大小","operation":"操作"},"loading":"加载中...","opt":{"copy":"复制链接","newTab":"打开新的标签页","download":"下载"},"total":"共","item":"项"},"search":{"placeholder":"搜索..."},"page":{"video":{"play":"播放","download":"下载","link":"下载地址"},"text":{"loading":"加载中..."}},"setting":{"clear":{"text":"清理缓存","success":"缓存清理成功"}},"checkVersion":{"tips":"检测到有新版本，<a href=\'${url}\'>前往GitHub</a>"},"error":{"401":"未授权，请登录","shortcut_not_down":"快捷方式无法打开/下载"}}')},"3c26":function(e,t,n){"use strict";n.r(t);n("4160"),n("d3b7"),n("159b");t["default"]={namespaced:!0,state:{cancelToken:[]},actions:{push:function(e,t){var n=e.commit;return new Promise((function(e){n("push",t),e()}))},cancel:function(e){var t=e.commit;return new Promise((function(e){t("clear"),e()}))}},mutations:{push:function(e,t){e.cancelToken.push(t)},clear:function(e){e.cancelToken.forEach((function(e){e()})),e.cancelToken=[]}}}},4360:function(e,t,n){"use strict";var a=n("8bbf"),o=n.n(a),r=n("5880"),i=n.n(r),c=(n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0"),n("a363")),s={};c.keys().forEach((function(e){s[e.replace(/(\.\/|\.js)/g,"")]=c(e).default}));var u={namespaced:!0,modules:s};o.a.use(i.a);t["a"]=new i.a.Store({modules:{acrou:u}})},"49f8":function(e,t,n){var a={"./en.json":"edd4","./zh-chs.json":"2e32","./zh-cht.json":"e862"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="49f8"},"56d7":function(e,t,n){"use strict";n.r(t);n("be4f"),n("450d");var a=n("896a"),o=n.n(a),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("8bbf")),i=n.n(r),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Layout",{ref:"layout"})],1)},s=[],u=n("c276"),d=n("88e9"),l={name:"App",components:{Layout:d["default"]},data:function(){return{github:"https://github.com/kzinthant-d3v/gindexproject"}},watch:{"$i18n.locale":"i18nHandle"},created:function(){this.i18nHandle(this.$i18n.locale)},mounted:function(){this.checkVersion()},methods:{i18nHandle:function(e){u["a"].cookies.set("lang",e),document.querySelector("html").setAttribute("lang",e)},checkVersion:function(){}}},f=l,p=(n("034f"),n("2877")),h=Object(p["a"])(f,c,s,!1,null,null,null),v=h.exports,m=(n("aaa5"),n("46a1"),n("9bd2")),b=n("a7fe"),g=n.n(b),w=n("a18c"),y=n("9225"),k=n("4360"),_=(n("d3b7"),n("53ca")),O=n("b311"),j=n.n(O),C=n("d40e"),x={autoSetContainer:!1,appendToBody:!0},E=function(e,t){return new Promise((function(n,a){var o=document.createElement("button"),r=new j.a(o,{text:function(){return e},action:function(){return"copy"},container:"object"===Object(_["a"])(t)?t:document.body});r.on("success",(function(e){r.destroy(),n(e)})),r.on("error",(function(e){r.destroy(),a(e)})),x.appendToBody&&document.body.appendChild(o),o.click(),x.appendToBody&&document.body.removeChild(o)}))},P={copy:E,copyText:function(e,t){return E(e,t).then((function(){Object(C["a"])({title:"notify.title",message:"copy.success",type:"success"})})).catch((function(){Object(C["a"])({title:"notify.title",message:"copy.error",type:"error"})}))},install:function(e){e.prototype.$clipboardConfig=x,e.prototype.$copy=E,e.prototype.$copyText=this.copyText,e.directive("clipboard",{bind:function(e,t,n){if("success"===t.arg)e._vClipboard_success=t.value;else if("error"===t.arg)e._vClipboard_error=t.value;else{var a=new j.a(e,{text:function(){return t.value},action:function(){return"cut"===t.arg?"cut":"copy"},container:x.autoSetContainer?e:void 0});a.on("success",(function(t){var n=e._vClipboard_success;n&&n(t)})),a.on("error",(function(t){var n=e._vClipboard_error;n&&n(t)})),e._vClipboard=a}},update:function(e,t){"success"===t.arg?e._vClipboard_success=t.value:"error"===t.arg?e._vClipboard_error=t.value:(e._vClipboard.text=function(){return t.value},e._vClipboard.action=function(){return"cut"===t.arg?"cut":"copy"})},unbind:function(e,t){"success"===t.arg?delete e._vClipboard_success:"error"===t.arg?delete e._vClipboard_error:(e._vClipboard.destroy(),delete e._vClipboard)}})},config:x},A=P,N=n("caf9"),V=n("6944"),L=n.n(V),$=n("cbd9"),T=n("8cf7"),S=n.n(T);i.a.prototype.$notify=C["a"],i.a.component("markdown",(function(){return Promise.all([n.e("chunk-2d0af48a"),n.e("chunk-075e2f32")]).then(n.bind(null,"b6ba"))}));n("0808"),n("e558");document.write('<script>var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?6be1011f95a1bfcdb2179fe2ae6e58fe";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();<\/script>'),i.a.config.productionTip=!1,i.a.prototype.$cdnpath=$["a"],i.a.use(o.a),i.a.use(g.a,m["a"]),i.a.use(A),i.a.use(N["a"],{loading:Object($["a"])("images/airplane.gif")}),i.a.use(L.a),i.a.use(S.a),new i.a({router:w["a"],store:k["a"],i18n:y["a"],render:function(e){return e(v)},mounted:function(){this.$store.dispatch("acrou/view/load")}}).$mount("#app")},5726:function(e,t){e.exports=low},5880:function(e,t){e.exports=Vuex},"5c1a":function(e,t,n){"use strict";n.r(t);var a=n("a18c"),o=n("60bb"),r=n("95a2");t["default"]={namespaced:!0,actions:{set:function(e,t){var n=t.dbName,a=void 0===n?"database":n,o=t.path,i=void 0===o?"":o,c=t.value,s=void 0===c?"":c,u=t.user,d=void 0!==u&&u;Object(r["c"])({dbName:a,path:i,value:s,user:d})},get:function(e,t){var n=t.dbName,a=void 0===n?"database":n,o=t.path,i=void 0===o?"":o,c=t.defaultValue,s=void 0===c?"":c,u=t.user,d=void 0!==u&&u;return Object(r["b"])({dbName:a,path:i,defaultValue:s,user:d})},database:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.user,a=void 0!==n&&n;return Object(r["a"])({user:a,defaultValue:{}})},databaseClear:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.user,a=void 0!==n&&n;return Object(r["a"])({user:a,validator:function(){return!1},defaultValue:{}})},databasePage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.basis,o=void 0===n?"fullPath":n,i=t.user,c=void 0!==i&&i;return Object(r["a"])({path:"$page.".concat(a["a"].app.$route[o]),user:c,defaultValue:{}})},databasePageClear:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.basis,o=void 0===n?"fullPath":n,i=t.user,c=void 0!==i&&i;return Object(r["a"])({path:"$page.".concat(a["a"].app.$route[o]),user:c,validator:function(){return!1},defaultValue:{}})},pageSet:function(e,t){var n=t.instance,i=t.basis,c=void 0===i?"fullPath":i,s=t.user,u=void 0!==s&&s;return Object(r["a"])({path:"$page.".concat(a["a"].app.$route[c],".$data"),user:u,validator:function(){return!1},defaultValue:Object(o["cloneDeep"])(n.$data)})},pageGet:function(e,t){var n=t.instance,i=t.basis,c=void 0===i?"fullPath":i,s=t.user,u=void 0!==s&&s;return Object(r["b"])({path:"$page.".concat(a["a"].app.$route[c],".$data"),user:u,defaultValue:Object(o["cloneDeep"])(n.$data)})},pageClear:function(e,t){var n=t.basis,o=void 0===n?"fullPath":n,i=t.user,c=void 0!==i&&i;return Object(r["a"])({path:"$page.".concat(a["a"].app.$route[o],".$data"),user:c,validator:function(){return!1},defaultValue:{}})}}}},"60bb":function(e,t){e.exports=_},6389:function(e,t){e.exports=VueRouter},"6c69":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"mynavbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"mycontainer"},[n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:e.currgd.id}},[n("h3",{staticClass:"title is-3 has-text-white"},[e._v("PreciousThings")])])]),n("div",{class:"navbar-menu is-active"},[n("div",{staticClass:"navbar-start"},[e.gds.length>0&&e.getCurrGD.length>0?n("div",{staticClass:"navbar-item has-dropdown is-hoverable"}):e._e()]),n("vue-fab",{attrs:{mainBtnColor:"#322250",icon:"reorder",scrollAutoHide:"false"}},e._l(e.getCurrGD,(function(t,a){return n("fab-item",{key:a,attrs:{title:t.name,idx:a,icon:"dns",size:"small"},on:{click:function(n){return e.changeItem(t)}}})})),1),n("div",{staticClass:"navbar-end"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],staticClass:"navbar-item"},[n("div",{staticClass:"field is-grouped"},[n("p",{staticClass:"control has-icons-left",staticStyle:{width:"100%"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.param,expression:"param"}],staticClass:"input search-input",attrs:{type:"search",placeholder:"Search Precious Things"},domProps:{value:e.param},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.query(t)},input:function(t){t.target.composing||(e.param=t.target.value)}}}),e._m(0)])])]),n("div",{attrs:{id:"settings"}},[n("header-setting")],1)])],1)])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon is-small is-left",staticStyle:{padding:"0 5px"}},[n("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])}],r=(n("4de4"),n("d81d"),n("b0c0"),n("ac1f"),n("466d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[e._m(0),n("div",{staticClass:"navbar-dropdown is-left"},e._l(e.$languages,(function(t){return n("a",{key:t.value,class:"navbar-item"+(e.currLanguage===t.value?" is-active":""),on:{click:function(n){return e.onChangeLocale(t.value)}}},[e._v(e._s(t.label))])})),0)])}),i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"navbar-link is-arrowless"},[n("i",{staticClass:"fa fa-language"})])}],c={data:function(){return{currLanguage:""}},methods:{onChangeLocale:function(e){this.currLanguage=e,this.$i18n.locale=e}},created:function(){this.currLanguage=this.$i18n.locale}},s=c,u=n("2877"),d=Object(u["a"])(s,r,i,!1,null,null,null),l=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"navbar-item",attrs:{id:"clearcache"},on:{click:e.cleanCache}},[e._m(0),n("span",{attrs:{id:"text"}},[e._v(" "+e._s(e.$t("setting.clear.text"))+" ")])])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-trash",attrs:{"aria-hidden":"true"}})])}],h=(n("4160"),n("c975"),n("b64b"),n("d3b7"),n("159b"),n("5530")),v=n("5880"),m=n("c276"),b={data:function(){return{}},methods:Object(h["a"])(Object(h["a"])({},Object(v["mapActions"])("acrou/db",["databaseClear"])),{},{cleanCache:function(){var e=this;new Promise((function(t){Object.keys(localStorage).forEach((function(e){-1!==e.indexOf("file_path_")&&localStorage.removeItem(e)})),m["a"].cookies.remove("lang"),e.databaseClear(),t()})).then((function(){e.$notify({title:e.$t("notify.title"),message:e.$t("setting.clear.success"),type:"success"})}))}})},g=b,w=(n("8ad1"),Object(u["a"])(g,f,p,!1,null,"554cc22a",null)),y=w.exports,k=n("f3f7"),_={components:{headerLocales:l,headerSetting:y,ViewMode:k["a"]},created:function(){this.siteName=document.getElementsByTagName("title")[0].innerText,window.gds&&window.gds.length>0&&(this.gds=window.gds.map((function(e,t){return{name:e,id:"/"+t+":/"}})),this.chooseGD()),window.MODEL&&(this.param=window.MODEL.q?window.MODEL.q:"")},data:function(){return{siteName:"Precious Things",param:"",currgd:{},gds:[],isActive:!1}},methods:{chooseGD:function(){var e=this.$route.params.id;this.gds&&this.gds.length>=e&&(this.currgd=this.gds[e])},changeItem:function(e){this.currgd=e,this.$router.push({path:e.id})},query:function(){this.param&&this.$router.push({path:this.currgd.id.match("/[0-9]+:")+"search?q="+this.param})},burgerClick:function(){this.isActive=!this.isActive}},computed:{getCurrGD:function(){var e=this;return this.gds.filter((function(t){return t.name!==e.currgd.name}))},showSearch:function(){return!window.MODEL||window.MODEL.root_type<2}},watch:{"$route.params.id":"chooseGD"}},O=_,j=(n("065c"),Object(u["a"])(O,a,o,!1,null,"0dde8976",null));t["default"]=j.exports},"85b3":function(e,t){e.exports=VueI18n},"85ec":function(e,t,n){},"88e9":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Head"),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("feb-alive",[n("router-view")],1),n("Footer")],1)]),n("APlayer")],1)},o=[],r=n("e0a1"),i=(n("a1c2"),n("0853")),c={data:function(){return{}},components:{Head:r["default"],APlayer:i["default"]},methods:{}},s=c,u=n("2877"),d=Object(u["a"])(s,a,o,!1,null,null,null);t["default"]=d.exports},"8ad1":function(e,t,n){"use strict";var a=n("f390"),o=n.n(a);o.a},"8bbf":function(e,t){e.exports=Vue},9225:function(e,t,n){"use strict";n("4160"),n("d81d"),n("b64b"),n("d3b7"),n("ac1f"),n("466d"),n("159b"),n("ddb0");var a=n("8bbf"),o=n.n(a),r=n("85b3"),i=n.n(r),c=n("c276");function s(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var o=a[1];t[o]=e(n)}})),t}o.a.use(i.a);var u=s();o.a.prototype.$languages=Object.keys(u).map((function(e){return{label:u[e]._name,value:e}})),t["a"]=new i.a({locale:c["a"].cookies.get("lang")||window.gdconfig.themeOptions.languages||"zh-chs",fallbackLocale:"en",messages:u})},"95a2":function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return h}));n("99af"),n("d3b7");var a=n("5726"),o=n.n(a),r=n("c758"),i=n.n(r),c=n("c276"),s=n("60bb"),u=new i.a("go2index-".concat("1.0.0")),d=o()(u);function l(e){var t=e.dbName,n=void 0===t?"database":t,a=e.path,o=void 0===a?"":a,r=e.user,i=void 0===r||r,s=e.validator,u=void 0===s?function(){return!0}:s,l=e.defaultValue,f=void 0===l?"":l,p=c["a"].cookies.get("uuid")||"ghost-uuid",h="".concat(n,".").concat(i?"user.".concat(p):"public").concat(o?".".concat(o):""),v=d.get(h).value();return void 0!==v&&u(v)||d.set(h,f).write(),h}function f(e){var t=e.dbName,n=void 0===t?"database":t,a=e.path,o=void 0===a?"":a,r=e.value,i=void 0===r?"":r,c=e.user,s=void 0!==c&&c;d.set(l({dbName:n,path:o,user:s}),i).write()}function p(e){var t=e.dbName,n=void 0===t?"database":t,a=e.path,o=void 0===a?"":a,r=e.defaultValue,i=void 0===r?"":r,c=e.user,u=void 0!==c&&c;return new Promise((function(e){e(Object(s["cloneDeep"])(d.get(l({dbName:n,path:o,user:u,defaultValue:i})).value()))}))}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dbName,n=void 0===t?"database":t,a=e.path,o=void 0===a?"":a,r=e.user,i=void 0!==r&&r,c=e.validator,s=void 0===c?function(){return!0}:c,u=e.defaultValue,f=void 0===u?"":u;return new Promise((function(e){e(d.get(l({dbName:n,path:o,user:i,validator:s,defaultValue:f})))}))}d.defaults({sys:{},database:{}}).write(),t["d"]=d},"9bd2":function(e,t,n){"use strict";n("d3b7");var a=n("cebe"),o=n.n(a),r=n("4360"),i=n("d40e"),c=o.a.create({baseURL:Object({NODE_ENV:"production",VUE_APP_I18N_LOCALE:"zh-chs",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_CDN_PATH:"https://cdn.jsdelivr.net/gh/kzinthant-d3v/gindexproject@main/dist/",VUE_APP_VERSION:"1.0.0",VUE_APP_G2INDEX_VERSION:"1.0.0",BASE_URL:"https://cdn.jsdelivr.net/gh/kzinthant-d3v/gindexproject@main/dist/"}).VUE_APP_API?Object({NODE_ENV:"production",VUE_APP_I18N_LOCALE:"zh-chs",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_CDN_PATH:"https://cdn.jsdelivr.net/gh/kzinthant-d3v/gindexproject@main/dist/",VUE_APP_VERSION:"1.0.0",VUE_APP_G2INDEX_VERSION:"1.0.0",BASE_URL:"https://cdn.jsdelivr.net/gh/kzinthant-d3v/gindexproject@main/dist/"}).VUE_APP_API:""});c.interceptors.request.use((function(e){return e.cancelToken=new o.a.CancelToken((function(e){r["a"].dispatch("acrou/cancelToken/push",e)})),e}),(function(e){return console.log(e),Promise.reject(e)})),c.interceptors.response.use((function(e){return e}),(function(e){if(e&&e.response)switch(e.response.status){case 401:e.message="error.401",Object(i["a"])({title:"notify.title",message:e.message,type:"error",duration:5e3});break;default:console.log(e);break}return Promise.reject(e)})),t["a"]=c},"9dac":function(e,t,n){var a={"./Layout":["88e9"],"./Layout.vue":["88e9"],"./common/APlayer":["0853"],"./common/APlayer.vue":["0853"],"./common/BreadCrumb":["2db9","chunk-02979915"],"./common/BreadCrumb.vue":["2db9","chunk-02979915"],"./common/Footer":["a1c2"],"./common/Footer.vue":["a1c2"],"./common/Head":["e0a1"],"./common/Head.vue":["e0a1"],"./common/Markdown":["3bcf","chunk-2d0af48a","chunk-072ae9f4"],"./common/Markdown.vue":["3bcf","chunk-2d0af48a","chunk-072ae9f4"],"./common/Navbar":["6c69"],"./common/Navbar.vue":["6c69"],"./page/GoList":["e65d","chunk-2d0af48a","chunk-02979915","chunk-5d16e092"],"./page/GoList.vue":["e65d","chunk-2d0af48a","chunk-02979915","chunk-5d16e092"],"./page/GoPdf":["fe7f","chunk-bfd1bba6"],"./page/GoPdf.vue":["fe7f","chunk-bfd1bba6"],"./page/GoText":["c556","chunk-1f1f60af"],"./page/GoText.vue":["c556","chunk-1f1f60af"],"./page/GoVideo":["0262","chunk-c35be52e"],"./page/GoVideo.vue":["0262","chunk-c35be52e"],"./page/GoView":["e42c","chunk-02979915","chunk-2d225416"],"./page/GoView.vue":["e42c","chunk-02979915","chunk-2d225416"],"./page/components/grid":["2a7a","chunk-4b66a741"],"./page/components/grid/":["2a7a","chunk-4b66a741"],"./page/components/grid/index":["2a7a","chunk-4b66a741"],"./page/components/grid/index.vue":["2a7a","chunk-4b66a741"],"./page/components/list":["25e0","chunk-2d0b2ee4"],"./page/components/list/":["25e0","chunk-2d0b2ee4"],"./page/components/list/index":["25e0","chunk-2d0b2ee4"],"./page/components/list/index.vue":["25e0","chunk-2d0b2ee4"]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(a)},o.id="9dac",e.exports=o},"9e9c":function(e,t,n){},a18c:function(e,t,n){"use strict";n("ac1f"),n("5319"),n("96cf");var a=n("1da1"),o=n("8bbf"),r=n.n(o),i=n("0499"),c=n("6389"),s=n.n(c),u=n("323e"),d=n.n(u),l=(n("a5d8"),n("5530")),f=n("e36f"),p={disableCache:!1},h=[{path:"/:id(\\d+)::cmd(text)/:path",component:f("page/GoView"),meta:Object(l["a"])(Object(l["a"])({},p),{},{view:"text"}),children:[{path:"",component:f("page/GoText")}]},{path:"/:id(\\d+)::cmd(pdf)/:path",component:f("page/GoView"),meta:Object(l["a"])(Object(l["a"])({},p),{},{view:"pdf"}),children:[{path:"",component:f("page/GoPdf")}]},{path:"/:id(\\d+)::cmd(video)/:path",component:f("page/GoView"),meta:Object(l["a"])(Object(l["a"])({},p),{},{view:"video"}),children:[{path:"",component:f("page/GoVideo")}]},{path:"/testing3",component:f("page/GoList"),meta:Object(l["a"])(Object(l["a"])({},p),{},{view:"list"})},{path:"/:id(\\d+):/:path*",component:f("page/GoList"),meta:Object(l["a"])(Object(l["a"])({},p),{},{view:"list"})}],v=h,m=n("4360");i["a"].resetHistory();var b=s.a.prototype.push;s.a.prototype.push=function(e){return b.call(this,e).catch((function(e){return e}))};var g=s.a.prototype.replace;s.a.prototype.replace=function(e){return g.call(this,e).catch((function(e){return e}))},r.a.use(s.a);var w=new s.a({mode:"history",scrollBehavior:function(e,t,n){return n||{x:0,y:0}},routes:v});r.a.use(i["a"],{router:w}),w.beforeEach(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:d.a.start(),m["a"].dispatch("acrou/cancelToken/cancel"),a();case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()),w.afterEach((function(e){d.a.done()}));t["a"]=w},a1c2:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"columns is-mobile is-centered"},[n("div",{staticClass:"field is-grouped is-grouped-multiline"},[n("div",{staticClass:"control"},[n("div",{staticClass:"tags has-addons"},[n("a",{staticClass:"tag is-dark",attrs:{href:"https://github.com/Aicirou/goindex-theme-acrou"}},[e._v("goindex-theme-acrou")]),n("span",{staticClass:"tag is-light"},[e._v(" MIT "),n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-github"})])])])])])])])}],r={props:{},watch:{},data:function(){return{content:""}},components:{},methods:{}},i=r,c=n("2877"),s=Object(c["a"])(i,a,o,!1,null,null,null);t["default"]=s.exports},a363:function(e,t,n){var a={"./aplayer.js":"c6a0","./cancelToken.js":"3c26","./db.js":"5c1a","./view.js":"d6c0"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="a363"},be65:function(e,t){e.exports=Cookies},c276:function(e,t,n){"use strict";n("99af");var a=n("be65"),o=n.n(a),r={set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a={expires:1};Object.assign(a,n),o.a.set("go2index-".concat("1.0.0","-").concat(e),t,a)},get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return o.a.get("go2index-".concat("1.0.0","-").concat(e))},getAll:function(){return o.a.get()},remove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return o.a.remove("go2index-".concat("1.0.0","-").concat(e))}},i=r,c=n("95a2"),s={cookies:i,db:c["d"],title:function(e){var t=Object({NODE_ENV:"production",VUE_APP_I18N_LOCALE:"zh-chs",VUE_APP_I18N_FALLBACK_LOCALE:"en",VUE_APP_CDN_PATH:"https://cdn.jsdelivr.net/gh/kzinthant-d3v/gindexproject@main/dist/",VUE_APP_VERSION:"1.0.0",VUE_APP_G2INDEX_VERSION:"1.0.0",BASE_URL:"https://cdn.jsdelivr.net/gh/kzinthant-d3v/gindexproject@main/dist/"}).VUE_APP_TITLE||"GoIndex";window.document.title="".concat(t).concat(e?" | ".concat(e):"")},open:function(e){var t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("target","_blank"),t.setAttribute("id","d2admin-link-temp"),document.body.appendChild(t),t.click(),document.body.removeChild(document.getElementById("d2admin-link-temp"))}};t["a"]=s},c6a0:function(e,t,n){"use strict";n.r(t);n("99af"),n("c740"),n("a434"),n("d3b7"),n("96cf");var a=n("1da1");t["default"]={namespaced:!0,state:{player:null,audios:[],openedAudios:[],customAudios:window.themeOptions.audio.audios||[]},actions:{set:function(e,t){var n=e.state;n.player=t},add:function(e,t){var n=e.state,a=e.dispatch,o=t.audio,r=t.play;return new Promise((function(e){var t=n.openedAudios.findIndex((function(e){return e.id===o.id}));if(t>=0&&(n.openedAudios.splice(t,1),n.player.list.remove(t+n.customAudios.length||0)),n.player.list.add(o),n.openedAudios.push(o),r){var i=n.player.list.audios.length||1;n.player.list.switch(i-1),n.player.play()}a("acrou/db/set",{path:"audio.list",value:n.openedAudios},{root:!0}),e()}))},load:function(e){var t=e.state,n=e.dispatch;return new Promise(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(a){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n("acrou/db/get",{path:"audio.list",defaultValue:[]},{root:!0});case 2:o=e.sent,t.openedAudios=o,t.audios=t.customAudios.concat(o),a();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}},c758:function(e,t){e.exports=LocalStorage},cbd9:function(e,t,n){"use strict";function a(e){var t="https://cdn.jsdelivr.net/gh/kzinthant-d3v/gindexproject@main/dist/";return t+e}n.d(t,"a",(function(){return a}))},cebe:function(e,t){e.exports=axios},d40e:function(e,t,n){"use strict";n("46a1"),n("450d");var a=n("e5f2"),o=n.n(a),r=n("9225"),i=function(e){var t=e.title,n=e.message,a=e.type,i=e.duration;o()({title:r["a"].t(t),message:r["a"].t(n),type:a,duration:i})};t["a"]=i},d6c0:function(e,t,n){"use strict";n.r(t);n("d3b7"),n("96cf");var a=n("1da1");t["default"]={namespaced:!0,state:{mode:"list"},actions:{load:function(e){var t=e.state,n=e.dispatch,o=e.commit;return new Promise(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n("acrou/db/get",{dbName:"sys",path:"view.mode.value",defaultValue:"list",user:!0},{root:!0});case 2:t.mode=e.sent,o("set",t.mode),a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},toggle:function(e,t){var n=e.state,o=e.dispatch,r=e.commit;return new Promise(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.mode=t||"list",e.next=3,o("acrou/db/set",{dbName:"sys",path:"view.mode.value",value:n.mode,user:!0},{root:!0});case 3:r("set",n.mode),a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},mutations:{set:function(e,t){e.mode=t}}}},e0a1:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Navbar",{ref:"navbar"})],1)},o=[],r=n("6c69"),i={data:function(){return{}},methods:{},components:{Navbar:r["default"]}},c=i,s=n("2877"),u=Object(s["a"])(c,a,o,!1,null,null,null);t["default"]=u.exports},e36f:function(e,t,n){n("d3b7"),e.exports=function(e){return function(){return n("9dac")("./"+e)}}},e558:function(e,t,n){},e862:function(e){e.exports=JSON.parse('{"_name":"繁体中文","languages":"選擇語言","index":"首頁","folder":"文件夾","notify":{"title":"提示"},"copy":{"text":"復制","success":"復制成功","error":"復制失敗"},"list":{"view":{"gridMode":"網格視圖","listMode":"列表視圖"},"auth":"目錄加密，請輸入密碼","title":{"file":"文件","moditime":"修改時間","size":"大小","operation":"操作"},"loading":"加載中...","opt":{"copy":"復制鏈接","newTab":"打開新的標簽頁","download":"下載"},"total":"共","item":"項"},"search":{"placeholder":"搜索..."},"page":{"video":{"play":"播放","download":"下載","link":"下載地址"},"text":{"loading":"加載中..."}},"setting":{"clear":{"text":"清理緩存","success":"緩存清理成功"}},"checkVersion":{"tips":"檢測到有新版本，<a href=\'${url}\'>前往GitHub</a>"},"error":{"401":"未授權，請登錄","shortcut_not_down":"快捷方式無法打開/下載"}}')},edd4:function(e){e.exports=JSON.parse('{"_name":"English","languages":"Languages","index":"Home","folder":"Folder","notify":{"title":"Notify"},"copy":{"text":"Copy","success":"Copy successful","error":"Copy failed"},"list":{"view":{"gridMode":"Grid view","listMode":"List view"},"auth":"Directory encryption, please enter password","title":{"file":"File","moditime":"Modified Time","size":"Size","operation":"Actions"},"loading":"Loading...","opt":{"copy":"Copy link","newTab":"Open a new tab","download":"Download"},"total":"Total","item":"item"},"search":{"placeholder":"Search resources..."},"page":{"video":{"play":"Play","download":"Download","link":"Download link"},"text":{"loading":"Loading..."}},"setting":{"clear":{"text":"Clean cache","success":"Cache cleanup successful"}},"checkVersion":{"tips":"New version detected, <a href=\'${url}\'>Go to GitHub</a>"},"error":{"401":"Unauthorized, please login","shortcut_not_down":"Shortcut can\'t open/download"}}')},f390:function(e,t,n){},f3f7:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{directives:[{name:"show",rawName:"v-show",value:"list"===e.$route.meta.view,expression:"$route.meta.view === 'list'"}],staticClass:"icon",attrs:{title:"list"===e.mode?e.$t("list.view.gridMode"):e.$t("list.view.listMode")},on:{click:e.toggleMode}},[n("i",{class:"fa"+("list"===e.mode?" fa-th":" fa-th-list"),attrs:{"aria-hidden":"true"}})])},o=[],r=n("5530"),i=n("5880"),c={data:function(){return{}},computed:Object(r["a"])({},Object(i["mapState"])("acrou/view",["mode"])),methods:Object(r["a"])(Object(r["a"])({},Object(i["mapActions"])("acrou/view",["toggle"])),{},{toggleMode:function(){this.toggle("list"===this.mode?"grid":"list")}})},s=c,u=n("2877"),d=Object(u["a"])(s,a,o,!1,null,null,null);t["a"]=d.exports}});