(function(t){function e(e){for(var n,o,i=e[0],l=e[1],c=e[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},r=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"695263f9"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.e=function(t){var e=[],s=a[t];if(0!==s)if(s)e.push(s[2]);else{var n=new Promise((function(e,n){s=a[t]=[e,n]}));e.push(s[2]=n);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(u);var s=a[t];if(0!==s){if(s){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",c.name="ChunkLoadError",c.type=n,c.request=r,s[1](c)}a[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="vue-ui/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},2595:function(t,e,s){"use strict";var n=s("eb9d"),a=s.n(n);a.a},5387:function(t,e,s){},"55c8":function(t,e,s){t.exports=s.p+"img/post-6.c6f3fdef.jpg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),s("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),s("router-link",{attrs:{to:"/news"}},[t._v("News")]),t._v(" | "),s("router-link",{attrs:{to:"/services"}},[t._v("Services")]),t._v(" | "),s("router-link",{attrs:{to:"/contact"}},[t._v("Contact Us")])],1),s("router-view")],1)},r=[],o=(s("5c0b"),s("2877")),i={},l=Object(o["a"])(i,a,r,!1,null,null,null),c=l.exports,u=(s("d3b7"),s("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:s("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._m(0),s("h3",[t._v("Installed CLI Plugins")]),t._m(1),s("h3",[t._v("Essential Links")]),t._m(2),s("h3",[t._v("Ecosystem")]),t._m(3)])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),s("br"),t._v(" check out the "),s("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),s("li",[s("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),s("li",[s("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),s("li",[s("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],h={name:"HelloWorld",props:{msg:String}},g=h,d=(s("b92e"),Object(o["a"])(g,v,f,!1,null,"566e8d16",null)),_=d.exports,b={name:"Home",components:{HelloWorld:_}},w=b,C=Object(o["a"])(w,p,m,!1,null,null,null),k=C.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news"},[t._m(0),n("div",{staticClass:"grid-container"},[n("div",{staticClass:"news-item"},[n("img",{staticClass:"img-mask",attrs:{src:s("6b6f"),alt:"news-img"}}),n("div",{staticClass:"news-content"},[n("h4",[t._v("Is Apple a Design Company?")]),n("p",[t._v("Apple is more than a tech company; it became a culture unto itself, a passion ...")]),n("router-link",{staticClass:"btn-news",attrs:{to:"home"}},[t._v("Read more")])],1)]),n("div",{staticClass:"news-item"},[n("img",{staticClass:"img-mask",attrs:{src:s("df62"),alt:"news-img"}}),n("div",{staticClass:"news-content"},[n("h4",[t._v("Is Apple a Design Company?")]),n("p",[t._v("Apple is more than a tech company; it became a culture unto itself, a passion ...")]),n("router-link",{staticClass:"btn-news",attrs:{to:"home"}},[t._v("Read more")])],1)]),n("div",{staticClass:"news-item"},[n("img",{staticClass:"img-mask",attrs:{src:s("b857"),alt:"news-img"}}),n("div",{staticClass:"news-content"},[n("h4",[t._v("Is Apple a Design Company?")]),n("p",[t._v("Apple is more than a tech company; it became a culture unto itself, a passion ...")]),n("router-link",{staticClass:"btn-news",attrs:{to:"home"}},[t._v("Read more")])],1)]),n("div",{staticClass:"news-item"},[n("img",{staticClass:"img-mask",attrs:{src:s("ef52"),alt:"news-img"}}),n("div",{staticClass:"news-content"},[n("h4",[t._v("Is Apple a Design Company?")]),n("p",[t._v("Apple is more than a tech company; it became a culture unto itself, a passion ...")]),n("router-link",{staticClass:"btn-news",attrs:{to:"home"}},[t._v("Read more")])],1)]),n("div",{staticClass:"news-item"},[n("img",{staticClass:"img-mask",attrs:{src:s("6485"),alt:"news-img"}}),n("div",{staticClass:"news-content"},[n("h4",[t._v("Is Apple a Design Company?")]),n("p",[t._v("Apple is more than a tech company; it became a culture unto itself, a passion ...")]),n("router-link",{staticClass:"btn-news",attrs:{to:"home"}},[t._v("Read more")])],1)]),n("div",{staticClass:"news-item"},[n("img",{staticClass:"img-mask",attrs:{src:s("55c8"),alt:"news-img"}}),n("div",{staticClass:"news-content"},[n("h4",[t._v("Is Apple a Design Company?")]),n("p",[t._v("Apple is more than a tech company; it became a culture unto itself, a passion ...")]),n("router-link",{staticClass:"btn-news",attrs:{to:"home"}},[t._v("Read more")])],1)]),n("div",{staticClass:"news-item"},[n("img",{staticClass:"img-mask",attrs:{src:s("8d76"),alt:"news-img"}}),n("div",{staticClass:"news-content"},[n("h4",[t._v("Is Apple a Design Company?")]),n("p",[t._v("Apple is more than a tech company; it became a culture unto itself, a passion ...")]),n("router-link",{staticClass:"btn-news",attrs:{to:"home"}},[t._v("Read more")])],1)]),n("div",{staticClass:"news-item"},[n("img",{staticClass:"img-mask",attrs:{src:s("9297"),alt:"news-img"}}),n("div",{staticClass:"news-content"},[n("h4",[t._v("Is Apple a Design Company?")]),n("p",[t._v("Apple is more than a tech company; it became a culture unto itself, a passion ...")]),n("router-link",{staticClass:"btn-news",attrs:{to:"home"}},[t._v("Read more")])],1)])])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news-heading"},[s("h2",{staticClass:"heading-title"},[t._v("Our News and Blogs")]),s("p",{staticClass:"heading-text"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.")])])}],x=(s("2595"),{}),A=Object(o["a"])(x,j,y,!1,null,"2df0d482",null),E=A.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"services"},[s("h1",[t._v("This is an services pages")])])}],I={},P=Object(o["a"])(I,O,$,!1,null,null,null),D=P.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact"},[s("h1",[t._v("This is an contact us pages")])])}],T={},H=Object(o["a"])(T,R,S,!1,null,null,null),L=H.exports;n["a"].use(u["a"]);var M=new u["a"]({routes:[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return s.e("chunk-2d22d746").then(s.bind(null,"f820"))}},{path:"/services",name:"Services",component:D},{path:"/news",name:"News",component:E},{path:"/contact",name:"Contact",component:L}]}),N=M;n["a"].config.productionTip=!1,new n["a"]({router:N,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var n=s("5387"),a=s.n(n);a.a},6485:function(t,e,s){t.exports=s.p+"img/post-5.22db4694.jpg"},"6b6f":function(t,e,s){t.exports=s.p+"img/post-1.9e53b8c0.jpg"},"8d76":function(t,e,s){t.exports=s.p+"img/post-7.4e734077.jpg"},9297:function(t,e,s){t.exports=s.p+"img/post-9.9cec1f78.jpg"},b7d9:function(t,e,s){},b857:function(t,e,s){t.exports=s.p+"img/post-8.1bad0932.jpg"},b92e:function(t,e,s){"use strict";var n=s("b7d9"),a=s.n(n);a.a},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},df62:function(t,e,s){t.exports=s.p+"img/post-2.c6ae8af9.jpg"},eb9d:function(t,e,s){},ef52:function(t,e,s){t.exports=s.p+"img/post-10.f5c86ff2.jpg"}});
//# sourceMappingURL=app.3bf40726.js.map