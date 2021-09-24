exports.id = 402;
exports.ids = [402];
exports.modules = {

/***/ 6803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9691);
/* harmony import */ var _ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const ArticleList = ({
  items
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
    className: (_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_1___default()["article-list"]),
    children: items.map((item, id) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: (_ArticleList_module_scss__WEBPACK_IMPORTED_MODULE_1___default()["article-list__item"]),
        children: item
      }, id);
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleList);

/***/ }),

/***/ 5290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArticleSingleListItem_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2798);
/* harmony import */ var _ArticleSingleListItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ArticleSingleListItem_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);




const ArticleListItem = ({
  strongText,
  text
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
      className: (_ArticleSingleListItem_module_scss__WEBPACK_IMPORTED_MODULE_1___default()["article-list-item"]),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
        children: strongText
      }), " ", text]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleListItem);

/***/ }),

/***/ 9691:
/***/ ((module) => {

// Exports
module.exports = {
	"article-list": "ArticleList_article-list__1RHSK",
	"article-list__item": "ArticleList_article-list__item__9v4eD"
};


/***/ }),

/***/ 2798:
/***/ ((module) => {

// Exports
module.exports = {
	"article-list-item": "ArticleSingleListItem_article-list-item__MnDpL"
};


/***/ })

};
;