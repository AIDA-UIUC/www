(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";n("pIFo"),e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"8oxB":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,u=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&h())}function h(){if(!l){var e=s(p);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||l||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9rSQ":function(e,t,n){"use strict";n("8+KV");var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},AphP:function(e,t,n){"use strict";var r=n("XKFU"),o=n("S/j/"),a=n("apmT");r(r.P+r.F*n("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=o(this),n=a(t);return"number"!=typeof n||isFinite(n)?t.toISOString():null}})},CgaS:function(e,t,n){"use strict";n("pIFo"),n("8+KV"),n("VRzm"),n("Btvt");var r=n("xTJ+"),o=n("MLWZ"),a=n("9rSQ"),i=n("UnBK"),s=n("SntB");function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},GoFl:function(e,t,n){e.exports=n.p+"static/software-engineer-ba5cedc06aa033ac916be2c1f1a85832.jpg"},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},It3M:function(e,t,n){e.exports=n.p+"static/adsa-logo-notext-9b02fdddd07f33d7ef3b4cd6a2e52ddb.png"},JEQr:function(e,t,n){"use strict";(function(t){n("8+KV"),n("a1Th"),n("h7Nl"),n("Btvt");var r=n("xTJ+"),o=n("yK9s"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:("undefined"!=typeof XMLHttpRequest?s=n("tQ2B"):void 0!==t&&"[object process]"===Object.prototype.toString.call(t)&&(s=n("tQ2B")),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(a)})),e.exports=c}).call(this,n("8oxB"))},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";n("V+eJ"),n("jqX0"),n("8+KV"),n("a1Th"),n("h7Nl"),n("Btvt"),n("pIFo");var r=n("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},MPaq:function(e,t,n){e.exports=n.p+"static/neural_network-263e80b123fd73d8598ae01262273b12.jpeg"},OGtf:function(e,t,n){var r=n("XKFU"),o=n("eeVq"),a=n("vhPU"),i=/"/g,s=function(e,t,n,r){var o=String(a(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),s+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},OH9c:function(e,t,n){"use strict";n("f3/d"),n("AphP"),e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";n("OG14"),n("pIFo");var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("7oih"),i=n("obyI"),s=n.n(i),c=n("It3M"),u=n.n(c);function l(){return o.a.createElement("div",{id:"header",style:{textAlign:"center"}},o.a.createElement("img",{src:u.a,alt:"Siebel Center"}),o.a.createElement("h1",{style:{paddingLeft:"15%",paddingRight:"15%"}},s.a.heading),o.a.createElement("p",null,s.a.subHeading),o.a.createElement("h4",{style:{color:"orange"}},"First info session this Sunday 01/26 from 1-2pm in Siebel 1105"))}n("f3/d"),n("VRzm"),n("rGqo"),n("yt8O"),n("Btvt"),n("91GP");var f=n("o0o1"),p=n.n(f);n("ls82");function h(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,o)}var d=function(){var e=Object(r.useState)({}),t=e[0],o=e[1];return{handleChange:function(e){e.persist(),o((function(t){var n;return Object.assign({},t,((n={})[e.target.name]=e.target.value,n))}))},handleSubmit:function(){var e,r=(e=p.a.mark((function e(r){var a,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n("vDqi"),e.prev=1,e.next=4,a.post("https://al210gps9i.execute-api.us-east-1.amazonaws.com/dev/message",JSON.stringify(t));case 4:return i=e.sent,console.log(i),e.next=8,alert("Message sent! We'll be in touch shortly.");case 8:e.next=15;break;case 10:return e.prev=10,e.t0=e.catch(1),console.log(e.t0),e.next=15,alert("Internal server error. Could not send your message. Please message us on Facebook at facebook.com/datauiuc.");case 15:o({});case 16:case"end":return e.stop()}}),e,null,[[1,10]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){h(a,r,o,i,s,"next",e)}function s(e){h(a,r,o,i,s,"throw",e)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}(),values:t}};function m(){var e=d(),t=e.handleChange,n=e.handleSubmit,r=e.values;return o.a.createElement("form",{method:"post",onSubmit:function(){return!1}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6 col-12-mobilep"},o.a.createElement("input",{type:"text",name:"name",placeholder:"Name",onChange:t,value:r.name||""})),o.a.createElement("div",{className:"col-6 col-12-mobilep"},o.a.createElement("input",{type:"email",name:"email",placeholder:"Email",onChange:t,value:r.email||""})),o.a.createElement("div",{className:"col-12"},o.a.createElement("textarea",{name:"message",placeholder:"Message",rows:"6",onChange:t,value:r.message||""})),o.a.createElement("div",{className:"col-12"},o.a.createElement("ul",{className:"actions special"},o.a.createElement("li",null,o.a.createElement("input",{type:"button",value:"Send message",onClick:n}))))))}function g(){return o.a.createElement("div",{id:"footer"},o.a.createElement("div",{className:"container medium"},o.a.createElement("header",{className:"major last"},o.a.createElement("h2",null,"Questions or comments?")),o.a.createElement("p",null,"Life will feel it is always a great time to chat"),o.a.createElement(m,null),o.a.createElement("ul",{className:"icons"},s.a.socialLinks.map((function(e){var t=e.icon,n=e.name,r=e.url;return o.a.createElement("li",{key:r},o.a.createElement("a",{href:r,className:"icon "+t,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:"label"},n)))})))))}var v=n("c+IJ"),y=n.n(v),w=n("MPaq"),x=n.n(w),b=n("GoFl"),E=n.n(b),S=n("gr+D"),T=n.n(S);n("tUrg");var N=function(e){return o.a.createElement("section",{className:"feature "+e.side},o.a.createElement("a",{href:e.link,className:"image icon "+e.icon,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:e.image,className:"image fit",alt:""})),o.a.createElement("div",{className:"content",style:{marginTop:"-45px"}},o.a.createElement("h3",null,e.title),o.a.createElement("h4",{style:{color:"orange"}},e.meetingTime),o.a.createElement("p",null,e.body)))};t.default=function(){return o.a.createElement(a.a,null,o.a.createElement(l,null),o.a.createElement("div",{id:"main"},o.a.createElement("header",{className:"major container medium"},o.a.createElement("h2",null,"Inspiring students from any background to reshape their perspective with data-driven decision making.")),o.a.createElement("div",{className:"box alt container"},o.a.createElement(N,{side:"left",link:"https://github.com/AIDA-UIUC/datascience-workshops",icon:"fa-signal",image:y.a,title:"Data Analytics Workshops",meetingTime:"2-3pm Sundays in Siebel 1105",body:"Teaching foundational data science topics and Python tools in individualized sessions. These sessions are designed to be accessible to students from any background, hands-on, and independent from each other."}),o.a.createElement(N,{side:"right",link:"https://www.github.com/aida-uiuc",icon:"fa-code",image:E.a,title:"Supported Team Projects",meetingTime:"3-4pm Sundays in Siebel 1105",body:"Open-ended, real-world experience for students interested in data science. Past projects have included mental health sentiment analysis, meme and tweet generators, and much more. Check them out on our GitHub!"}),o.a.createElement(N,{side:"left",link:"",icon:"fa-cogs",image:x.a,title:"Artificial Intelligence Workshops",meetingTime:"5-7pm Wednesdays in Siebel 1105",body:"Targeted towards experienced programmers and those seeking to gain insight into the algorithms behind AI/ML. These sessions are designed to challenge you on both the theory and implementation."}),o.a.createElement(N,{side:"right",link:"",icon:"fa-book",image:T.a,title:"AI Research Discussion Group",meetingTime:"5-7pm Thurdays in Siebel 1105",body:"Come together to discuss the latest papers and developments in data science."}))),o.a.createElement(g,null))}},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},SntB:function(e,t,n){"use strict";n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("8+KV");var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],a=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(a,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])})),r.forEach(i,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}));var s=o.concat(a).concat(i),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return r.forEach(c,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},UnBK:function(e,t,n){"use strict";n("VRzm"),n("Btvt"),n("8+KV");var r=n("xTJ+"),o=n("xAGQ"),a=n("Lmem"),i=n("JEQr");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"c+IJ":function(e,t,n){e.exports=n.p+"static/practical-team-0b18f36afade77f13c9c81216ef5f323.jpg"},endd:function(e,t,n){"use strict";function r(e){this.message=e}n("a1Th"),n("h7Nl"),n("Btvt"),r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";n("eM6i"),n("Oyvg"),n("SRfc");var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(e,t,n){"use strict";var r=n("2SVd"),o=n("5oMp");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},"gr+D":function(e,t,n){e.exports=n.p+"static/operations-research-fe098e363d3cfd9d1aac7dde0e5cc7f7.jpg"},"jfS+":function(e,t,n){"use strict";n("VRzm"),n("Btvt");var r=n("endd");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},jqX0:function(e,t,n){var r=n("XKFU"),o=n("jtBr");r(r.P+r.F*(Date.prototype.toISOString!==o),"Date",{toISOString:o})},jtBr:function(e,t,n){"use strict";var r=n("eeVq"),o=Date.prototype.getTime,a=Date.prototype.toISOString,i=function(e){return e>9?e:"0"+e};e.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=a.call(new Date(-5e13-1))}))||!r((function(){a.call(new Date(NaN))}))?function(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),n=e.getUTCMilliseconds(),r=t<0?"-":t>9999?"+":"";return r+("00000"+Math.abs(t)).slice(r?-6:-4)+"-"+i(e.getUTCMonth()+1)+"-"+i(e.getUTCDate())+"T"+i(e.getUTCHours())+":"+i(e.getUTCMinutes())+":"+i(e.getUTCSeconds())+"."+(n>99?n:"0"+i(n))+"Z"}:a},ls82:function(e,t,n){n("rGqo"),n("yt8O"),n("a1Th"),n("h7Nl"),n("VRzm"),n("Btvt"),n("/SS/"),n("f3/d"),n("8+KV"),n("hHhE"),n("rE2o"),n("ioFf");var r=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(e,t,n,r){var o=t&&t.prototype instanceof l?t:l,a=Object.create(o.prototype),i=new E(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return T()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var s=w(i,n);if(s){if(s===u)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=c(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}e.wrap=s;var u={};function l(){}function f(){}function p(){}var h={};h[o]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(S([])));m&&m!==t&&n.call(m,o)&&(h=m);var g=p.prototype=l.prototype=Object.create(h);function v(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e){var t;this._invoke=function(r,o){function a(){return new Promise((function(t,a){!function t(r,o,a,i){var s=c(e[r],e,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(e){t("next",e,a,i)}),(function(e){t("throw",e,a,i)})):Promise.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return t("throw",e,a,i)}))}i(s.arg)}(r,o,t,a)}))}return t=t?t.then(a,a):a()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=c(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function b(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return f.prototype=g.constructor=p,p.constructor=f,p[i]=f.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(y.prototype),y.prototype[a]=function(){return this},e.AsyncIterator=y,e.async=function(t,n,r,o){var a=new y(s(t,n,r,o));return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},v(g),g[i]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),b(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;b(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},o0o1:function(e,t,n){e.exports=n("ls82")},obyI:function(e,t){e.exports={siteTitle:"Data Science @ Illinois",manifestName:"aida",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"./src/assets/images/adsa-logo-notext.png",heading:"UIUC ACM Special Interest Group for Artificial Intelligence and Data Analytics",subHeading:"We are the premier data science student organization at the University of Illinois",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/aida-uiuc"},{icon:"fa-facebook",name:"Facebook",url:"https://facebook.com/datauiuc"},{icon:"fa-envelope-o",name:"Email",url:"mailto:sig-aida-request@lists.illinois.edu"}]}},tQ2B:function(e,t,n){"use strict";n("8+KV"),n("V+eJ"),n("VRzm"),n("Btvt");var r=n("xTJ+"),o=n("Rn+g"),a=n("MLWZ"),i=n("g7np"),s=n("w0Vi"),c=n("OTTw"),u=n("LYNF");e.exports=function(e){return new Promise((function(t,l){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+btoa(d+":"+m)}var g=i(e.baseURL,e.url);if(h.open(e.method.toUpperCase(),a(g,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?s(h.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:n,config:e,request:h};o(t,l,r),h=null}},h.onabort=function(){h&&(l(u("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){l(u("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var v=n("eqyj"),y=(e.withCredentials||c(g))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in h&&r.forEach(p,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:h.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),e.responseType)try{h.responseType=e.responseType}catch(w){if("json"!==e.responseType)throw w}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),l(e),h=null)})),void 0===f&&(f=null),h.send(f)}))}},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";n("Tze0"),n("V+eJ"),n("KKXr"),n("8+KV");var r=n("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},xAGQ:function(e,t,n){"use strict";n("8+KV");var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},"xTJ+":function(e,t,n){"use strict";n("pIFo"),n("a1Th"),n("h7Nl"),n("Btvt");var r=n("HSsa"),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},yK9s:function(e,t,n){"use strict";n("8+KV");var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},zuR4:function(e,t,n){"use strict";n("VRzm"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3");var r=n("xTJ+"),o=n("HSsa"),a=n("CgaS"),i=n("SntB");function s(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var c=s(n("JEQr"));c.Axios=a,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=n("endd"),c.CancelToken=n("jfS+"),c.isCancel=n("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=n("DfZB"),e.exports=c,e.exports.default=c}}]);
//# sourceMappingURL=component---src-pages-index-js-f7469f27f846c61cea7d.js.map