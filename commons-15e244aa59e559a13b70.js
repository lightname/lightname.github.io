(self.webpackChunkThe_Dev_Note=self.webpackChunkThe_Dev_Note||[]).push([[351],{2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var u,c,s,l;if(Array.isArray(t)){if((u=t.length)!=a.length)return!1;for(c=u;0!=c--;)if(!i(t[c],a[c]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((u=t.length)!=a.length)return!1;for(c=u;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((u=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(e&&t instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!i(t[s[c]],a[s[c]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=t(s.map((function(t){return t.props}))),f.canUseDOM?e(c):n&&(c=n(c))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",u),f}}},5337:function(t,e,n){"use strict";n.d(e,{A:function(){return Et}});var r,o,i,a,u=n(7294),c=n(3431),s=n(6084),l=n(5078),f=n(977),p=n(7825),d=n(744),h=n(5697),m=n.n(h),y=n(4839),g=n.n(y),b=n(2993),v=n.n(b),T=n(6494),w=n.n(T),x="bodyAttributes",C="htmlAttributes",S="titleAttributes",A={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(A).map((function(t){return A[t]})),"charset"),E="cssText",k="href",j="http-equiv",P="innerHTML",Z="itemprop",L="name",I="property",M="rel",N="src",R="target",z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",H="defer",B="encodeSpecialCharacters",D="onChangeClientState",U="titleTemplate",Y=Object.keys(z).reduce((function(t,e){return t[z[e]]=e,t}),{}),q=[A.NOSCRIPT,A.SCRIPT,A.STYLE],F="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},X=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},G=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},Q=function(t){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(t){var e=ot(t,A.TITLE),n=ot(t,U);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=ot(t,_);return e||r||void 0},tt=function(t){return ot(t,D)||function(){}},et=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return V({},t,e)}),{})},nt=function(t,e){return e.filter((function(t){return void 0!==t[A.BASE]})).map((function(t){return t[A.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},rt=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&st("Helmet: "+t+' should be of type "Array". Instead found type "'+W(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===e.indexOf(c)||n===M&&"canonical"===t[n].toLowerCase()||c===M&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(u)||u!==P&&u!==E&&u!==Z||(n=u)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=w()({},r[u],o[u]);r[u]=c}return t}),[]).reverse()},ot=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},it=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){it(t)}),0)}),at=function(t){return clearTimeout(t)},ut="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||it:n.g.requestAnimationFrame||it,ct="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||at:n.g.cancelAnimationFrame||at,st=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},lt=null,ft=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ht(A.BODY,r),ht(A.HTML,o),dt(f,p);var d={baseTag:mt(A.BASE,n),linkTags:mt(A.LINK,i),metaTags:mt(A.META,a),noscriptTags:mt(A.NOSCRIPT,u),scriptTags:mt(A.SCRIPT,s),styleTags:mt(A.STYLE,l)},h={},m={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(m[t]=d[t].oldTags)})),e&&e(),c(t,h,m)},pt=function(t){return Array.isArray(t)?t.join(""):t},dt=function(t,e){void 0!==t&&document.title!==t&&(document.title=pt(t)),ht(A.TITLE,e)},ht=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(F),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],s=e[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(F):n.getAttribute(F)!==a.join(",")&&n.setAttribute(F,a.join(","))}},mt=function(t,e){var n=document.head||document.querySelector(A.HEAD),r=n.querySelectorAll(t+"["+F+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===P)n.innerHTML=e.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u=void 0===e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(F,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},yt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},gt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[z[n]||n]=t[n],e}),e)},bt=function(t,e,n){switch(t){case A.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[F]=!0,o=gt(n,r),[u.createElement(A.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=yt(n),i=pt(e);return o?"<"+t+" "+F+'="true" '+o+">"+Q(i,r)+"</"+t+">":"<"+t+" "+F+'="true">'+Q(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case x:case C:return{toComponent:function(){return gt(e)},toString:function(){return yt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[F]=!0,r);return Object.keys(e).forEach((function(t){var n=z[t]||t;if(n===P||n===E){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),u.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===P||t===E)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+Q(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===q.indexOf(t);return e+"<"+t+" "+F+'="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},vt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:bt(A.BASE,e,r),bodyAttributes:bt(x,n,r),htmlAttributes:bt(C,o,r),link:bt(A.LINK,i,r),meta:bt(A.META,a,r),noscript:bt(A.NOSCRIPT,u,r),script:bt(A.SCRIPT,c,r),style:bt(A.STYLE,s,r),title:bt(A.TITLE,{title:f,titleAttributes:p},r)}},Tt=g()((function(t){return{baseTag:nt([k,R],t),bodyAttributes:et(x,t),defer:ot(t,H),encode:ot(t,B),htmlAttributes:et(C,t),linkTags:rt(A.LINK,[M,k],t),metaTags:rt(A.META,[L,O,j,I,Z],t),noscriptTags:rt(A.NOSCRIPT,[P],t),onChangeClientState:tt(t),scriptTags:rt(A.SCRIPT,[N,P],t),styleTags:rt(A.STYLE,[E],t),title:J(t),titleAttributes:et(S,t)}}),(function(t){lt&&ct(lt),t.defer?lt=ut((function(){ft(t,(function(){lt=null}))})):(ft(t),lt=null)}),vt)((function(){return null})),wt=(o=Tt,a=i=function(t){function e(){return K(this,e),G(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!v()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case A.SCRIPT:case A.NOSCRIPT:return{innerHTML:e};case A.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return V({},r,((e={})[n.type]=[].concat(r[n.type]||[],[V({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case A.TITLE:return V({},o,((e={})[r.type]=a,e.titleAttributes=V({},i),e));case A.BODY:return V({},o,{bodyAttributes:V({},i)});case A.HTML:return V({},o,{htmlAttributes:V({},i)})}return V({},o,((n={})[r.type]=V({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=V({},e);return Object.keys(t).forEach((function(e){var r;n=V({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return u.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[Y[n]||n]=t[n],e}),e)}($(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case A.LINK:case A.META:case A.NOSCRIPT:case A.SCRIPT:case A.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=$(t,["children"]),r=V({},n);return e&&(r=this.mapChildrenToProps(e,r)),u.createElement(o,r)},X(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(u.Component),i.propTypes={base:m().object,bodyAttributes:m().object,children:m().oneOfType([m().arrayOf(m().node),m().node]),defaultTitle:m().string,defer:m().bool,encodeSpecialCharacters:m().bool,htmlAttributes:m().object,link:m().arrayOf(m().object),meta:m().arrayOf(m().object),noscript:m().arrayOf(m().object),onChangeClientState:m().func,script:m().arrayOf(m().object),style:m().arrayOf(m().object),title:m().string,titleAttributes:m().object,titleTemplate:m().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=vt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);wt.renderStatic=wt.rewind;var xt=n(5444),Ct=n(4206),St=n(4364),At=function(t){var e=t.tags,n=t.activeTag,r=t.rootPath,o=t.basePath,i=t.hasUntagged,a=(0,u.useContext)(Ct.ci).setQuery;return(0,f.tZ)(d.xu,{as:"nav",sx:{mb:9}},(0,f.tZ)(d.OL,{sx:{fontWeight:"medium",bg:r?"navHover":void 0,textTransform:"uppercase",color:"textStrong"},to:o,as:xt.Link,onClick:function(){return a("")}},"All Notes"),e.length>0&&(0,f.tZ)(u.Fragment,null,(0,f.tZ)(d.xu,{sx:{px:3,pt:2,pb:1,textTransform:"uppercase",fontSize:"14px",color:"textStrong",fontWeight:"medium"}},"Tags"),e.sort((function(t,e){return t.tag.localeCompare(e.tag)})).map((function(t,e){return(0,f.tZ)(d.OL,{sx:{bg:n===t.tag?"navHover":void 0},to:t.path,as:xt.Link,key:e,onClick:function(){return a("")}},(0,f.tZ)(St.Y,{tag:t.tag}),t.tag)}))),i&&(0,f.tZ)(d.OL,{sx:{fontWeight:"untagged"===n?"bold":void 0,bg:"untagged"===n?"navHover":void 0},to:"/tag/untagged",as:xt.Link,onClick:function(){return a("")}},(0,f.tZ)(St.Y,null),"Untagged Notes"))},Ot=n(1421),Et=function(t){var e=t.activeTag,n=t.path,r=t.basePath,o=t.hasUntagged,i=t.title,a=t.tags,h=t.children,m=(0,s.B7)().theme,y=(0,Ot.$)(),g=y.showThemeInfo,b=y.showDescriptionInSidebar,v=y.description,T=y.logo,w=y.openSearch,x=(0,u.useState)(!1),C=x[0],S=x[1],A=(0,l.If)(),O=A[0],E=A[1],k=(0,u.useContext)(Ct.ci).query;return(0,f.tZ)(u.Fragment,null,(0,f.tZ)(wt,{key:"app-metadata",titleTemplate:"%s · "+v,defaultTitle:v},(0,f.tZ)("html",{lang:"en"}),(0,f.tZ)("meta",{charSet:"utf-8"}),(0,f.tZ)("title",null,i),(0,f.tZ)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),w&&w.siteUrl&&(0,f.tZ)("link",{rel:"search",type:"application/opensearchdescription+xml",href:"/opensearch.xml",title:w.siteShortName})),(0,f.tZ)(c.xB,{key:"global-styles",styles:(0,p.iv)({"*":{boxSizing:"border-box"},body:{margin:0},":root":{fontSize:"16px"},"@media (min-width: 480px)":{":root":{fontSize:"calc(1rem + ((1vw - 4.8px) * 0.2778))"}},"@media (min-width: 1920px)":{":root":{fontSize:"20px"}}})}),(0,f.tZ)(d.xu,{as:"main",sx:{position:["relative","fixed"],top:[0,3],right:[0,3],bottom:[0,3],left:[0,m.sizes.sidebar],overflowX:"hidden",overflowY:"auto",zIndex:"low",p:[3,6],bg:"contentBg",transform:[C&&"translateX("+m.sizes.sidebar+")","translateX(0)"],transition:"all 200ms ease-in-out ",boxShadow:"md",borderRadius:[0,"default"],minHeight:["100vh","unset"]}},(0,f.tZ)(d.W2,{sx:{display:"flex",flexDirection:"column",minHeight:"100%"}},(0,f.tZ)(d.kC,{sx:{alignItems:"center",mb:5}},(0,f.tZ)(d.j2,{"aria-label":"Toggle Menu",onClick:function(){return S(!C)},sx:{display:["block","none"],mr:3}}),(0,f.tZ)(d.xu,{sx:{flexGrow:1}},(0,f.tZ)(Ct.Mj,null))),k?(0,f.tZ)(Ct.sZ,null):h,g&&(0,f.tZ)(d.xu,{sx:{mt:4,fontSize:0}},"Want to make your own site like this?",(0,f.tZ)("br",null),"Try"," ",(0,f.tZ)(d.rU,{href:"https://github.com/mrmartineau/gatsby-theme-code-notes"},"gatsby-theme-code-notes")," ","by ",(0,f.tZ)(d.rU,{href:"https://zander.wtf"},"Zander Martineau"),"."))),(0,f.tZ)(d.xu,{as:"header",sx:{width:"sidebar",position:"fixed",top:0,right:[0,"auto"],left:0,bottom:0,overflowX:"hidden",overflowY:"auto",pt:4}},(0,f.tZ)(d.xu,{sx:{mb:3,px:3}},!!T&&(0,f.tZ)(d.xu,{sx:{mb:3}},(0,f.tZ)(d.Ee,{src:T,variant:"logo",alt:"logo"})),b&&v&&(0,f.tZ)(d.xu,{sx:{mb:3}},(0,f.tZ)(d.xv,{sx:{color:"textStrong",lineHeight:"snug",fontWeight:"extrabold"}},v))),(0,f.tZ)(At,{tags:a,activeTag:e,rootPath:n===r,basePath:r,hasUntagged:o}),(0,f.tZ)(d.xu,{sx:{position:"fixed",left:0,width:"sidebar",bottom:0,bg:"backgroundTransparent",py:3}},(0,f.tZ)(d.hU,{onClick:function(t){E("light"===O?"dark":"light")},"aria-label":"Toggle dark mode",sx:{color:"text",zIndex:11,p:0,display:"block",mx:"auto",transition:"all 200ms ease-in-out ",cursor:"pointer","&:hover":{color:"primary"}}},(0,f.tZ)("svg",{width:"1.5rem",height:"1.5rem",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",fill:"currentColor"},(0,f.tZ)("path",{d:"M912.1 512c0 20-1.4 39.9-4 59.7.5-3.5 1-7.1 1.4-10.6-5.2 38.4-15.5 75.9-30.5 111.6 1.3-3.2 2.7-6.4 4-9.6-14.8 34.8-34 67.6-57.1 97.6l6.3-8.1c-23 29.7-49.8 56.4-79.5 79.5l8.1-6.3c-30 23.1-62.8 42.3-97.6 57.1 3.2-1.3 6.4-2.7 9.6-4-35.7 15-73.2 25.3-111.6 30.6 3.5-.5 7.1-1 10.6-1.4a450.3 450.3 0 0 1-119.4 0c3.5.5 7.1 1 10.6 1.4-38.5-5.2-76-15.5-111.7-30.5 3.2 1.3 6.4 2.7 9.6 4-34.8-14.8-67.6-34-97.6-57.1l8.1 6.3c-29.7-23-56.4-49.8-79.5-79.5l6.3 8.1c-23.1-30-42.3-62.8-57.1-97.6 1.3 3.2 2.7 6.4 4 9.6-15-35.7-25.3-73.2-30.6-111.6.5 3.5 1 7.1 1.4 10.6a450.3 450.3 0 0 1 0-119.4c-.5 3.5-1 7.1-1.4 10.6 5.3-38.4 15.5-75.9 30.6-111.6-1.3 3.2-2.7 6.4-4 9.6 14.8-34.8 34-67.6 57.1-97.6l-6.3 8.1c23-29.7 49.8-56.4 79.5-79.5l-8.1 6.3c30-23.1 62.8-42.3 97.6-57.1-3.2 1.3-6.4 2.7-9.6 4 35.7-15 73.2-25.3 111.6-30.6-3.5.5-7.1 1-10.6 1.4 39.6-5.3 79.8-5.3 119.4 0-3.5-.5-7.1-1-10.6-1.4 38.4 5.3 75.9 15.5 111.6 30.6-3.2-1.3-6.4-2.7-9.6-4 34.8 14.8 67.6 34 97.6 57.1l-8.1-6.3c29.7 23 56.4 49.8 79.5 79.5l-6.3-8.1c23.1 30 42.3 62.8 57.1 97.6-1.3-3.2-2.7-6.4-4-9.6 15 35.7 25.3 73.2 30.6 111.6-.5-3.5-1-7.1-1.4-10.6 2.7 19.7 4 39.6 4 59.6 0 20.9 18.4 41 40 40s40-17.6 40-40c-.1-49.6-7.6-99.8-22.9-146.9-14.8-45.6-36.2-89.4-64-128.5-14.6-20.5-30.6-40.3-48.1-58.5-17.6-18.2-36.8-34.5-56.9-49.9-38-29.1-80.5-51.4-125.3-67.9-46.3-17.1-95.9-26.1-145.2-28.1-49.8-2-100.5 4.1-148.5 17.7-46.1 13.1-90.9 33.3-131 59.7-39.7 26.1-76 57.8-106.2 94.4-16.1 19.5-31.1 40-44.1 61.7-13.2 21.9-24 45-33.7 68.6-18.8 45.7-29.2 94.3-33 143.4-3.8 49.7.7 100.4 12.5 148.9C57 673.3 75.9 718.9 100.8 760c24.6 40.5 55.3 78 90.8 109.5 35.7 31.7 75.7 58.7 119.2 78.4 23.5 10.6 47.5 19.9 72.3 26.8 25.4 7.1 51.3 11.5 77.4 14.5 50 5.8 100.9 2.8 150.2-7.3 47.3-9.6 93.5-27.2 135.6-50.7 41.2-23 79.4-52.6 112.1-86.7 32.8-34.3 61.2-73.7 82.3-116.3 21.7-43.6 37.5-90.2 44.9-138.4 4-25.8 6.5-51.7 6.5-77.8 0-20.9-18.4-41-40-40-21.7 1-39.9 17.6-40 40z"}),(0,f.tZ)("path",{d:"M512 187.7v648.6c-179.1 0-324-145.2-324-324.3s144.9-324.3 324-324.3z"}),(0,f.tZ)("path",{d:"M482 187.7v569c0 26.2-.6 52.4 0 78.6v1.1l30-30c-14.4 0-28.8-1-43.1-2.8 2.7.4 5.3.7 8 1.1-28.6-3.9-56.5-11.5-83.1-22.6l7.2 3c-15-6.4-29.5-13.9-43.4-22.4-6.7-4.1-13.3-8.5-19.7-13.1-1.6-1.2-3.2-2.3-4.8-3.5-.8-.6-2.1-1.2-2.6-2-.1-.1 6.4 5.1 3 2.3-3.2-2.6-6.5-5.2-9.6-7.9-12.1-10.3-23.5-21.5-34.1-33.5-2.6-3-5.1-6-7.6-9-1.1-1.4-2.2-2.7-3.3-4.1-.5-.7-1.1-1.4-1.6-2.1 6.1 7.7 2.9 3.7 1.5 1.9-4.9-6.5-9.5-13.1-13.8-20-9.9-15.4-18.4-31.7-25.5-48.5l3 7.2c-11.2-26.6-18.8-54.5-22.6-83.1.4 2.7.7 5.3 1.1 8-3.7-28.6-3.7-57.6 0-86.2-.4 2.7-.7 5.3-1.1 8 3.9-28.6 11.4-56.5 22.6-83.1l-3 7.2c6.4-15 13.8-29.6 22.4-43.5 4.1-6.7 8.5-13.3 13.1-19.7 1.1-1.6 2.3-3.2 3.5-4.8.5-.7 1.2-2.2 2-2.6.1-.1-5 6.4-2.3 3 2.6-3.3 5.2-6.5 7.9-9.7 10.3-12.2 21.5-23.6 33.4-34.1 3-2.6 5.9-5.1 9-7.6 1.4-1.1 2.7-2.2 4.1-3.3.7-.5 1.4-1.1 2.1-1.6-7.6 6.1-3.7 2.9-1.9 1.5 6.5-4.9 13.1-9.5 19.9-13.9 15.4-9.9 31.6-18.4 48.4-25.6l-7.2 3c26.6-11.2 54.5-18.8 83.1-22.6-2.7.4-5.3.7-8 1.1 14.3-1.9 28.7-2.8 43.1-2.8 15.7 0 30.7-13.8 30-30-.7-16.2-13.2-30-30-30-72.2.2-144.6 22.3-203.4 64.4-59.5 42.6-104.5 101.2-129.7 170-25.2 68.6-27.5 146.1-7.6 216.3C190.5 676.5 230.6 739.1 285 784c57.5 47.4 126.9 75.7 201.2 81.6 8.6.7 17.3 1 25.9 1 16.2 0 30-13.8 30-30v-64.5-155-187.5-162c0-26.2.5-52.4 0-78.6v-1.1c0-15.7-13.8-30.7-30-30-16.4.5-30.1 13-30.1 29.8z"}))))))}},4364:function(t,e,n){"use strict";n.d(e,{Y:function(){return c}});var r=n(7294),o=n(744),i=n(5040),a=n.n(i),u=n(1190),c=function(t){var e,n=t.tag,i=t.size,c=void 0===i?"10px":i;if(n){var s=a()(n);e=(0,u.M)(s)}else e="#aaa";return r.createElement(o.xu,{sx:{bg:e,width:c,height:c,borderRadius:"50%",mr:"0.5em"}})}}}]);
//# sourceMappingURL=commons-15e244aa59e559a13b70.js.map