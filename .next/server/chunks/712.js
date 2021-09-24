exports.id = 712;
exports.ids = [712];
exports.modules = {

/***/ 2634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainContainer_MainContainer)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__(1258);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Header/Header.js





const Header = ({
  activeLink
}) => {
  function addAClassName(activeLink, link) {
    return activeLink === link ? (Header_module_default())["nav__link--active"] : (Header_module_default()).nav__link;
  }

  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: (Header_module_default()).header,
    children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: (Header_module_default()).nav,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Header_module_default()).nav__list,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: addAClassName(activeLink, 'Home'),
            children: "Home"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/works",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: addAClassName(activeLink, 'Works'),
            children: "Works"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/blog",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: addAClassName(activeLink, 'Blog'),
            children: "Blog"
          })
        })]
      })
    })
  });
};

/* harmony default export */ const Header_Header = (Header);
// EXTERNAL MODULE: ./components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(905);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./components/Footer/Footer.js




const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: (Footer_module_default()).footer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
      className: (Footer_module_default()).footer__icon,
      href: "https://www.facebook.com/profile.php?id=100071916172494",
      target: "_blank",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/img/fb.svg",
        alt: "Facebook"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: (Footer_module_default()).footer__icon,
      href: "https://www.facebook.com/profile.php?id=100071916172494",
      target: "_blank",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/img/insta.svg",
        alt: "Instagramm"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: (Footer_module_default()).footer__icon,
      href: "https://www.facebook.com/profile.php?id=100071916172494",
      target: "_blank",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/img/twitter.svg",
        alt: "Twitter"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: (Footer_module_default()).footer__icon,
      href: "https://www.facebook.com/profile.php?id=100071916172494",
      target: "_blank",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/img/linkedin.svg",
        alt: "LinkedIn"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: (Footer_module_default()).footer__author,
      href: "https://dribbble.com/tinjo",
      target: "_blank",
      children: "Original design by Tinjo Thomas"
    })]
  });
};

/* harmony default export */ const Footer_Footer = (Footer);
;// CONCATENATED MODULE: ./components/MainContainer/MainContainer.js







const MainContainer = ({
  title,
  activeLink,
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "UTF-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Header_Header, {
      activeLink: activeLink
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {})]
  });
};

/* harmony default export */ const MainContainer_MainContainer = (MainContainer);

/***/ }),

/***/ 905:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__3f33N",
	"footer__icon": "Footer_footer__icon__9IJci",
	"footer__author": "Footer_footer__author__3oouj"
};


/***/ }),

/***/ 1258:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__OkoDL",
	"nav": "Header_nav__2SG38",
	"nav__link": "Header_nav__link__1xMOn",
	"nav__link--active": "Header_nav__link--active__3_b2w"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;