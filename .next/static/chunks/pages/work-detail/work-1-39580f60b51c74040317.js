(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{3798:function(e,t,n){"use strict";var r=n(7809),a=n.n(r),o=n(5893);t.Z=function(e){var t=e.children;return(0,o.jsx)("div",{className:a()["article-container"],children:t})}},2634:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(9008),a=n(1664),o=n(6469),i=n.n(o),s=n(5893),c=function(e){var t=e.activeLink;function n(e,t){return e===t?i()["nav__link--active"]:i().nav__link}return(0,s.jsx)("header",{className:i().header,children:(0,s.jsx)("nav",{className:i().nav,children:(0,s.jsxs)("div",{className:i().nav__list,children:[(0,s.jsx)(a.default,{href:"/",children:(0,s.jsx)("a",{className:n(t,"Home"),children:"Home"})}),(0,s.jsx)(a.default,{href:"/works",children:(0,s.jsx)("a",{className:n(t,"Works"),children:"Works"})}),(0,s.jsx)(a.default,{href:"/blog",children:(0,s.jsx)("a",{className:n(t,"Blog"),children:"Blog"})})]})})})},l=n(9784),d=n.n(l),u=function(){return(0,s.jsxs)("footer",{className:d().footer,children:[(0,s.jsx)("a",{className:d().footer__icon,href:"https://www.facebook.com/profile.php?id=100071916172494",target:"_blank",children:(0,s.jsx)("img",{src:"/img/fb.svg",alt:"Facebook"})}),(0,s.jsx)("a",{className:d().footer__icon,href:"https://www.facebook.com/profile.php?id=100071916172494",target:"_blank",children:(0,s.jsx)("img",{src:"/img/insta.svg",alt:"Instagramm"})}),(0,s.jsx)("a",{className:d().footer__icon,href:"https://www.facebook.com/profile.php?id=100071916172494",target:"_blank",children:(0,s.jsx)("img",{src:"/img/twitter.svg",alt:"Twitter"})}),(0,s.jsx)("a",{className:d().footer__icon,href:"https://www.facebook.com/profile.php?id=100071916172494",target:"_blank",children:(0,s.jsx)("img",{src:"/img/linkedin.svg",alt:"LinkedIn"})}),(0,s.jsx)("a",{className:d().footer__author,href:"https://dribbble.com/tinjo",target:"_blank",children:"Original design by Tinjo Thomas"})]})},f=function(e){var t=e.title,n=e.activeLink,a=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("meta",{charSet:"UTF-8"}),(0,s.jsx)("title",{children:t}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,s.jsx)(c,{activeLink:n}),(0,s.jsx)("div",{children:a}),(0,s.jsx)(u,{})]})}},2015:function(e,t,n){"use strict";var r=n(9928),a=n.n(r),o=n(5893);t.Z=function(e){var t=e.text;return(0,o.jsx)("p",{className:a().paragraph,children:t})}},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},i=n(1063),s=n(4651),c=n(7426);var l={};function d(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,a=s.useRouter(),u=o.default.useMemo((function(){var t=i.resolveHref(a,e.href,!0),n=r(t,2),o=n[0],s=n[1];return{href:o,as:e.as?i.resolveHref(a,e.as):s||o}}),[a,e.href,e.as]),f=u.href,_=u.as,h=e.children,m=e.replace,p=e.shallow,v=e.scroll,k=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var x=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,g=c.useIntersection({rootMargin:"200px"}),w=r(g,2),j=w[0],b=w[1],y=o.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);o.default.useEffect((function(){var e=b&&n&&i.isLocalURL(f),t="undefined"!==typeof k?k:a&&a.locale,r=l[f+"%"+_+(t?"%"+t:"")];e&&!r&&d(a,f,_,{locale:t})}),[_,f,b,k,n,a]);var N={ref:y,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:s}))}(e,a,f,_,m,p,v,k)},onMouseEnter:function(e){i.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(a,f,_,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof k?k:a&&a.locale,L=a&&a.isLocaleDomain&&i.getDomainLocale(_,E,a&&a.locales,a&&a.domainLocales);N.href=L||i.addBasePath(i.addLocale(_,E,a&&a.defaultLocale))}return o.default.cloneElement(t,N)};t.default=u},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=a.useRef(),l=a.useState(!1),d=r(l,2),u=d[0],f=d[1],_=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return a.useEffect((function(){if(!i&&!u){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),[_,u]};var a=n(7294),o=n(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},1981:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(2634),a=n(3798),o=n(7769),i=n.n(o),s=n(5893),c=function(e){var t=e.text;return(0,s.jsx)("h1",{className:i()["work-title"],children:t})},l=n(9033),d=n.n(l),u=function(e){var t=e.date,n=e.keywords;return(0,s.jsxs)("div",{className:d()["date-and-keywords"],children:[(0,s.jsx)("span",{className:d()["date-and-keywords__date"],children:t}),(0,s.jsx)("span",{className:d()["date-and-keywords__keywords"],children:n})]})},f=n(2015),_=n(9084),h=n.n(_),m=function(e){var t=e.text;return(0,s.jsx)("h2",{className:h()["work-heading1"],children:t})},p=n(9146),v=n.n(p),k=function(e){var t=e.text;return(0,s.jsx)("h3",{className:v()["work-heading2"],children:t})},x=n(9252),g=n.n(x),w=function(){return(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(c,{text:"Designing Dashboards with usability in mind"}),(0,s.jsx)(u,{date:"2020",keywords:"Dashboard, User Experience Design"}),(0,s.jsx)(f.Z,{text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}),(0,s.jsx)("img",{className:g()["work-image"],src:"/img/work-detail/work1.png"}),(0,s.jsx)(m,{text:"Heading1"}),(0,s.jsx)(k,{text:"Heading2"}),(0,s.jsx)(f.Z,{text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}),(0,s.jsx)("img",{className:g()["work-image"],src:"/img/work-detail/work2.png"}),(0,s.jsx)("img",{className:g()["work-image"],src:"/img/work-detail/work3.png"})]})},j=function(){return(0,s.jsx)(r.Z,{title:"Designing Dashboards with usability in mind",children:(0,s.jsx)(w,{})})}},5307:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work-detail/work-1",function(){return n(1981)}])},7809:function(e){e.exports={"article-container":"ArticleContainer_article-container__3G3kg"}},9784:function(e){e.exports={footer:"Footer_footer__3f33N",footer__icon:"Footer_footer__icon__9IJci",footer__author:"Footer_footer__author__3oouj"}},6469:function(e){e.exports={header:"Header_header__OkoDL",nav:"Header_nav__2SG38",nav__link:"Header_nav__link__1xMOn","nav__link--active":"Header_nav__link--active__3_b2w"}},9928:function(e){e.exports={paragraph:"Paragraph_paragraph__vVCqp"}},9252:function(e){e.exports={"work-image":"Work_work-image__34PjX"}},9033:function(e){e.exports={"date-and-keywords":"WorkDateAndKeywords_date-and-keywords__3F1Hq","date-and-keywords__date":"WorkDateAndKeywords_date-and-keywords__date__11BbG","date-and-keywords__keywords":"WorkDateAndKeywords_date-and-keywords__keywords__EUT8D"}},9084:function(e){e.exports={"work-heading1":"WorkHeading1_work-heading1__1Wbth"}},9146:function(e){e.exports={"work-heading2":"WorkHeading2_work-heading2__3QRRH"}},7769:function(e){e.exports={"work-title":"WorkTitle_work-title__16jy3"}},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=5307,e(e.s=t);var t}));var t=e.O();_N_E=t}]);