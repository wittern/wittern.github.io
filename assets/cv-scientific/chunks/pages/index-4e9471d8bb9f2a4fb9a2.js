_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/EDR":function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("23aj")}])},"23aj":function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return d}));var n=s("nKUr"),r=s("MX0m"),a=s.n(r),c=s("g4pe"),o=s.n(c),l=s("YFqc"),i=s.n(l);function f(){return Object(n.jsxs)("header",{className:"py-12 flex",children:[Object(n.jsx)("div",{className:"flex-1 flex-grow",children:Object(n.jsx)(i.a,{href:"/",children:Object(n.jsx)("span",{className:"text-blue-300 font-mono cursor-pointer hover:text-blue-400",children:"Erik Wittern"})})}),Object(n.jsx)("div",{className:"w-32",children:Object(n.jsx)("a",{href:"https://twitter.com/erikwittern",className:"text-blue-300 font-mono",target:"_blank",children:"@erikwittern"})})]})}function u(e){var t=e.children,s=e.pageTitle,r=e.description;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(o.a,{children:[Object(n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:"jsx-2783327272"}),Object(n.jsx)("meta",{charSet:"utf-8",className:"jsx-2783327272"}),Object(n.jsx)("meta",{name:"Description",content:r,className:"jsx-2783327272"}),Object(n.jsx)("title",{className:"jsx-2783327272",children:s}),Object(n.jsx)("link",{rel:"icon",href:"/imgs/favicon.ico",className:"jsx-2783327272"}),Object(n.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true",className:"jsx-2783327272"}),Object(n.jsx)("link",{rel:"preload",as:"style",href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",className:"jsx-2783327272"}),Object(n.jsx)("link",{rel:"preload",as:"style",href:"https://fonts.googleapis.com/css2?family=Cousine&display=swap",className:"jsx-2783327272"}),Object(n.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",media:"print",className:"jsx-2783327272"}),Object(n.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Cousine&display=swap",media:"print",className:"jsx-2783327272"}),Object(n.jsxs)("noscript",{className:"jsx-2783327272",children:[Object(n.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",className:"jsx-2783327272"}),Object(n.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Cousine&display=swap",className:"jsx-2783327272"})]})]}),Object(n.jsx)(a.a,{id:"2783327272",children:["html,body,#__next{height:100%;}"]}),Object(n.jsxs)("main",{className:"jsx-2783327272 m-auto max-w-3xl",children:[Object(n.jsx)(f,{}),Object(n.jsx)("div",{className:"jsx-2783327272 content",children:t}),Object(n.jsx)("footer",{className:"jsx-2783327272"})]})]})}function p(e){var t=e.href,s=e.label,r=e.className,a=void 0===r?"":r,c=e.external,o="text-blue-300 hover:text-blue-400 hover:underline inline-block cursor-pointer "+a;return void 0!==c&&c?Object(n.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:o,children:s}):Object(n.jsx)(i.a,{href:t,children:Object(n.jsx)("span",{className:o,children:s})})}function d(){return Object(n.jsxs)(u,{pageTitle:"Wittern.net",description:"The personal website of Erik Wittern",children:[Object(n.jsx)("h1",{className:"text-6xl font-bold",children:"Projects"}),Object(n.jsx)("p",{className:"font-sans",children:"test"}),Object(n.jsx)(p,{href:"/cv-scientific",label:"CV Scientific"})]})}},YFqc:function(e,t,s){e.exports=s("cTJO")},cTJO:function(e,t,s){"use strict";var n=s("J4zp"),r=s("284h");t.__esModule=!0,t.default=void 0;var a=r(s("q1tI")),c=s("elyg"),o=s("nOHt"),l=s("vNVm"),i={};function f(e,t,s,n){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,s,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+s+(r?"%"+r:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,s=(0,o.useRouter)(),r=s&&s.pathname||"/",u=a.default.useMemo((function(){var t=(0,c.resolveHref)(r,e.href,!0),s=n(t,2),a=s[0],o=s[1];return{href:a,as:e.as?(0,c.resolveHref)(r,e.as):o||a}}),[r,e.href,e.as]),p=u.href,d=u.as,j=e.children,h=e.replace,m=e.shallow,x=e.scroll,b=e.locale;"string"===typeof j&&(j=a.default.createElement("a",null,j));var v=a.Children.only(j),g=v&&"object"===typeof v&&v.ref,O=(0,l.useIntersection)({rootMargin:"200px"}),y=n(O,2),w=y[0],N=y[1],k=a.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,a.useEffect)((function(){var e=N&&t&&(0,c.isLocalURL)(p),n="undefined"!==typeof b?b:s&&s.locale,r=i[p+"%"+d+(n?"%"+n:"")];e&&!r&&f(s,p,d,{locale:n})}),[d,p,N,b,t,s]);var _={ref:k,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,s,n,r,a,o,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(s))&&(e.preventDefault(),null==o&&(o=n.indexOf("#")<0),t[r?"replace":"push"](s,n,{shallow:a,locale:l,scroll:o}))}(e,s,p,d,h,m,x,b)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),f(s,p,d,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var E="undefined"!==typeof b?b:s&&s.locale,L=s&&s.isLocaleDomain&&(0,c.getDomainLocale)(d,E,s&&s.locales,s&&s.domainLocales);_.href=L||(0,c.addBasePath)((0,c.addLocale)(d,E,s&&s.defaultLocale))}return a.default.cloneElement(v,_)};t.default=u},vNVm:function(e,t,s){"use strict";var n=s("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,s=e.disabled||!c,l=(0,r.useRef)(),i=(0,r.useState)(!1),f=n(i,2),u=f[0],p=f[1],d=(0,r.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),s||u||e&&e.tagName&&(l.current=function(e,t,s){var n=function(e){var t=e.rootMargin||"",s=o.get(t);if(s)return s;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),s=e.isIntersecting||e.intersectionRatio>0;t&&s&&t(s)}))}),e);return o.set(t,s={id:t,observer:r,elements:n}),s}(s),r=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),o.delete(r))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[s,t,u]);return(0,r.useEffect)((function(){if(!c&&!u){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[u]),[d,u]};var r=s("q1tI"),a=s("0G5g"),c="undefined"!==typeof IntersectionObserver;var o=new Map}},[["/EDR",0,1,2,3]]]);