(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[649],{3798:function(e,t,a){"use strict";var r=a(7809),i=a.n(r),n=a(5893);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:i()["article-container"],children:t})}},8728:function(e,t,a){"use strict";var r=a(6816),i=a.n(r),n=a(5893);t.Z=function(e){var t=e.text;return(0,n.jsx)("h1",{className:i()["article-heading"],children:t})}},4748:function(e,t,a){"use strict";var r=a(1786),i=a.n(r),n=a(5893);t.Z=function(e){var t=e.text;return(0,n.jsx)("p",{className:i()["article-introduction"],children:t})}},210:function(e,t,a){"use strict";var r=a(365),i=a.n(r),n=a(5893);t.Z=function(e){var t=e.text;return(0,n.jsx)("p",{className:i()["article-subtitle"],children:t})}},3426:function(e,t,a){"use strict";var r=a(1011),i=a.n(r),n=a(5893);t.Z=function(e){var t=e.text;return(0,n.jsx)("h1",{className:i()["article-title"],children:t})}},2634:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var r=a(9008),i=a(1664),n=a(6469),o=a.n(n),s=a(5893),c=function(e){var t=e.activeLink;function a(e,t){return e===t?o()["nav__link--active"]:o().nav__link}return(0,s.jsx)("header",{className:o().header,children:(0,s.jsx)("nav",{className:o().nav,children:(0,s.jsxs)("div",{className:o().nav__list,children:[(0,s.jsx)(i.default,{href:"/",children:(0,s.jsx)("a",{className:a(t,"Home"),children:"Home"})}),(0,s.jsx)(i.default,{href:"/works",children:(0,s.jsx)("a",{className:a(t,"Works"),children:"Works"})}),(0,s.jsx)(i.default,{href:"/blog",children:(0,s.jsx)("a",{className:a(t,"Blog"),children:"Blog"})})]})})})},l=a(9784),d=a.n(l),u=function(){return(0,s.jsxs)("footer",{className:d().footer,children:[(0,s.jsx)("a",{className:d().footer__icon,href:"https://www.facebook.com/profile.php?id=100071916172494",target:"_blank",children:(0,s.jsx)("img",{src:"/img/fb.svg",alt:"Facebook"})}),(0,s.jsx)("a",{className:d().footer__icon,href:"https://www.facebook.com/profile.php?id=100071916172494",target:"_blank",children:(0,s.jsx)("img",{src:"/img/insta.svg",alt:"Instagramm"})}),(0,s.jsx)("a",{className:d().footer__icon,href:"https://www.facebook.com/profile.php?id=100071916172494",target:"_blank",children:(0,s.jsx)("img",{src:"/img/twitter.svg",alt:"Twitter"})}),(0,s.jsx)("a",{className:d().footer__icon,href:"https://www.facebook.com/profile.php?id=100071916172494",target:"_blank",children:(0,s.jsx)("img",{src:"/img/linkedin.svg",alt:"LinkedIn"})}),(0,s.jsx)("a",{className:d().footer__author,href:"https://dribbble.com/tinjo",target:"_blank",children:"Original design by Tinjo Thomas"})]})},h=function(e){var t=e.title,a=e.activeLink,i=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("meta",{charSet:"UTF-8"}),(0,s.jsx)("title",{children:t}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,s.jsx)(c,{activeLink:a}),(0,s.jsx)("div",{children:i}),(0,s.jsx)(u,{})]})}},2167:function(e,t,a){"use strict";var r=a(3038);t.default=void 0;var i,n=(i=a(7294))&&i.__esModule?i:{default:i},o=a(1063),s=a(4651),c=a(7426);var l={};function d(e,t,a,r){if(e&&o.isLocalURL(t)){e.prefetch(t,a,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+a+(i?"%"+i:"")]=!0}}var u=function(e){var t,a=!1!==e.prefetch,i=s.useRouter(),u=n.default.useMemo((function(){var t=o.resolveHref(i,e.href,!0),a=r(t,2),n=a[0],s=a[1];return{href:n,as:e.as?o.resolveHref(i,e.as):s||n}}),[i,e.href,e.as]),h=u.href,f=u.as,_=e.children,g=e.replace,m=e.shallow,p=e.scroll,x=e.locale;"string"===typeof _&&(_=n.default.createElement("a",null,_));var v=(t=n.default.Children.only(_))&&"object"===typeof t&&t.ref,j=c.useIntersection({rootMargin:"200px"}),b=r(j,2),k=b[0],w=b[1],y=n.default.useCallback((function(e){k(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,k]);n.default.useEffect((function(){var e=w&&a&&o.isLocalURL(h),t="undefined"!==typeof x?x:i&&i.locale,r=l[h+"%"+f+(t?"%"+t:"")];e&&!r&&d(i,h,f,{locale:t})}),[f,h,w,x,a,i]);var N={ref:y,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,a,r,i,n,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(a))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[i?"replace":"push"](a,r,{shallow:n,locale:c,scroll:s}))}(e,i,h,f,g,m,p,x)},onMouseEnter:function(e){o.isLocalURL(h)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(i,h,f,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var F="undefined"!==typeof x?x:i&&i.locale,S=i&&i.isLocaleDomain&&o.getDomainLocale(f,F,i&&i.locales,i&&i.domainLocales);N.href=S||o.addBasePath(o.addLocale(f,F,i&&i.defaultLocale))}return n.default.cloneElement(t,N)};t.default=u},7426:function(e,t,a){"use strict";var r=a(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,a=e.disabled||!o,c=i.useRef(),l=i.useState(!1),d=r(l,2),u=d[0],h=d[1],f=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),a||u||e&&e.tagName&&(c.current=function(e,t,a){var r=function(e){var t=e.rootMargin||"",a=s.get(t);if(a)return a;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)}))}),e);return s.set(t,a={id:t,observer:i,elements:r}),a}(a),i=r.id,n=r.observer,o=r.elements;return o.set(e,t),n.observe(e),function(){o.delete(e),n.unobserve(e),0===o.size&&(n.disconnect(),s.delete(i))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[a,t,u]);return i.useEffect((function(){if(!o&&!u){var e=n.requestIdleCallback((function(){return h(!0)}));return function(){return n.cancelIdleCallback(e)}}}),[u]),[f,u]};var i=a(7294),n=a(3447),o="undefined"!==typeof IntersectionObserver;var s=new Map},2318:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var r=a(2634),i=a(3426),n=a(210),o=a(3798),s=a(4748),c=a(8728),l=a(8092),d=a.n(l),u=a(5893),h=function(e){var t=e.articleId,a=e.items;return(0,u.jsx)("ol",{className:d().list,children:a.map((function(e,a){return(0,u.jsxs)("li",{className:d().list__item,children:[e.text,(0,u.jsx)("img",{className:d().list__image,src:"/img/article-".concat(t,"-img/").concat(e.imageSrc)})]},a)}))})},f=a(1853),_=a.n(f),g=a(3492),m=a.n(g),p=function(){return(0,u.jsxs)("div",{className:_().article,children:[(0,u.jsx)("div",{className:m()["article-2-header"],children:(0,u.jsxs)("div",{className:m()["article-2-header__text-wrapper"],children:[(0,u.jsx)(i.Z,{text:"Dark Mode with Selection Colors"}),(0,u.jsx)(n.Z,{text:"Learn to design and adapt for designs for Dark Mode with Selection Colors"})]})}),(0,u.jsxs)(o.Z,{children:[(0,u.jsx)(s.Z,{text:"Dark Mode nowadays is widely used by many as it decreases power consumption, makes it easier for people to read in low light and it reduces eye strain. Many also prefer dark mode to light mode as an aesthetic choice. However, adapting your designs for Dark Mode is more than inverting the shades."}),(0,u.jsx)(c.Z,{text:"Dark Mode Colors"}),(0,u.jsx)("p",{className:_().article__paragraph,children:"When choosing dark mode colors, use dark shades for distant elements, and light shades for closer elements as distant elements receive less light compared to the elements that appear nearer. The further the object, the darker it appears and settles more into the background."}),(0,u.jsx)("img",{className:_().article__image,src:"/img/article-2-img/1.jpg"}),(0,u.jsx)(c.Z,{text:"Keeping accessibility in mind"}),(0,u.jsx)("p",{className:_().article__paragraph,children:"It is also important to revisit our accents as sometimes they might not be accessible. Using the same colors as in light mode may result in some parts of your app appearing too bright. This doesn't mean you have to change all the colors but adjust the HSB values for the best accessibility."}),(0,u.jsx)("img",{className:_().article__image,src:"/img/article-2-img/2.jpg"}),(0,u.jsx)(c.Z,{text:"Interface"}),(0,u.jsx)("p",{className:_().article__paragraph,children:"Avoid using true blacks as these restrict some ways of creating a balanced interface. For example, using shadows to create depth might not be an option anymore. You can have a tinting effect to blend the UI with the surroundings to create a harmonious interface."}),(0,u.jsx)("p",{className:_()["article__paragraph--italic"],children:"Many enjoy using true blacks and it's mobile friendly too."}),(0,u.jsx)("img",{className:_().article__image,src:"/img/article-2-img/3.jpg"}),(0,u.jsx)(c.Z,{text:"Contrast"}),(0,u.jsx)("p",{className:_().article__paragraph,children:"It's essential that you must not give up accessibility while adapting/designing for dark mode, so always ensure a proper contrast ratio between your text and background to maintain the readability on darker backgrounds and in low light conditions."}),(0,u.jsx)("img",{className:_().article__image,src:"/img/article-2-img/4.png"}),(0,u.jsx)(c.Z,{text:"Small Details"}),(0,u.jsx)("p",{className:_().article__paragraph,children:"Details look and feel differently in light and dark mode. For example, an element using an inner shadow must use inner glow to preserve their appearance in dark mode. Design assets separately for light and dark mode when necessary."}),(0,u.jsx)(c.Z,{text:"Selection Colors"}),(0,u.jsx)("p",{className:_().article__paragraph,children:"Selection Colors allow you to change the look of your design without going through the trouble of selecting each layer individually and then applying the colors to the selected layer. This is very useful when you want to design multiple theme variations of your design."}),(0,u.jsx)("img",{className:_().article__image,src:"/img/article-2-img/5.jpg"}),(0,u.jsx)(c.Z,{text:"Changing Colors"}),(0,u.jsx)("p",{className:_().article__paragraph,children:"As mentioned above, Selection Colors give the user the ability to change or adjust the color of elements. This can be done in two ways:"}),(0,u.jsx)(h,{articleId:"2",items:[{text:"Select an element and view or adjust individual colors in the selection",imageSrc:"6.jpg"},{text:"Navigate to the Selection Colors in the Properties panel, where you can find all the colors being used in the selected element or object.",imageSrc:"7.jpg"},{text:"Now let's change the base color #FFFFFF to #373775 to adpat to dark mode.",imageSrc:"8.jpg"},{text:"Awesome! Now, let's change all the layers using #000000 to #FFFFFF using the same Selection Colors properties",imageSrc:"9.jpg"},{text:"Change the Section titles which are using #4442B2 to #FFFFFF",imageSrc:"10.jpg"},{text:"Great, now let's change the opacity of the #000000 layers from 10% to 20% for better contrast and also set the background color to #1F1F47 from #F2F6FF",imageSrc:"11.jpg"},{text:"Finally, let's set the dropshadow to #0F141E from #224FA9. This brings depth to the element!",imageSrc:"12.jpg"}]}),(0,u.jsx)(c.Z,{text:"Conclusion"}),(0,u.jsx)("p",{className:_().article__paragraph,children:"Dark mode brings in lots of advantages and is now widely adopted by many users. So, it's essential to ensure that your app works well under dark mode. An important thing is to make sure that the chosen colors don't negatively affect accessibility and readability."}),(0,u.jsx)("a",{className:_()["article__link-to-original"],href:"https://designcode.io/figma-handbook-dark-mode",target:"_blank",children:"Original article: https://designcode.io/figma-handbook-dark-mode"})]})]})},x=function(){return(0,u.jsx)(r.Z,{title:"Dark Mode with Selection Colors",children:(0,u.jsx)(p,{})})}},2312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/article-2",function(){return a(2318)}])},1853:function(e){e.exports={article:"Article_article__1Fmdq",article__paragraph:"Article_article__paragraph__1Bxc2","article__paragraph--italic":"Article_article__paragraph--italic__2wN7v",article__image:"Article_article__image__2JljR","article__link-to-original":"Article_article__link-to-original__2UAiM"}},7809:function(e){e.exports={"article-container":"ArticleContainer_article-container__3G3kg"}},3492:function(e){e.exports={"article-2-header":"Article-2-header_article-2-header__CAnQD","article-2-header__text-wrapper":"Article-2-header_article-2-header__text-wrapper__1PS67"}},6816:function(e){e.exports={"article-heading":"ArticleHeading_article-heading__29FHy"}},1786:function(e){e.exports={"article-introduction":"ArticleIntroduction_article-introduction__dVZ-G"}},365:function(e){e.exports={"article-subtitle":"ArticleSubtitle_article-subtitle__1pr7t"}},1011:function(e){e.exports={"article-title":"ArticleTitle_article-title__O0HMS"}},8092:function(e){e.exports={list__item:"NumberedListWithImages_list__item__x2Nxo",list__image:"NumberedListWithImages_list__image__3r9c3"}},9784:function(e){e.exports={footer:"Footer_footer__3f33N",footer__icon:"Footer_footer__icon__9IJci",footer__author:"Footer_footer__author__3oouj"}},6469:function(e){e.exports={header:"Header_header__OkoDL",nav:"Header_nav__2SG38",nav__link:"Header_nav__link__1xMOn","nav__link--active":"Header_nav__link--active__3_b2w"}},9008:function(e,t,a){e.exports=a(639)},1664:function(e,t,a){e.exports=a(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=2312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);