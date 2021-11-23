/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("const createWindow = () => {\n  let windowDiv = document.createElement(\"div\");\n  windowDiv.className = \"window\";\n\n  let windowTop = document.createElement(\"div\");\n  windowTop.className = \"window-top\";\n\n  let windowTitle = document.createElement(\"div\");\n  windowTitle.className = \"window-title\";\n\n  let windowButton = document.createElement(\"div\");\n  windowButton.className = \"window-button\";\n\n  windowTop.appendChild(windowTitle);\n  windowTop.appendChild(windowButton);\n  windowDiv.appendChild(windowTop);\n\n  windowDiv.style.width = Math.random() * 500;\n  windowDiv.style.height = Math.random() * 500;\n\n  windowDiv.style.top =\n    Math.floor(Math.random() * window.innerHeight - windowDiv.style.height) +\n    \"px\";\n  windowDiv.style.left =\n    Math.floor(Math.random() * window.innerWidth - windowDiv.style.width) +\n    \"px\";\n\n    return windowDiv;\n};\n\nlet arr = []\n\nfor (let i = 0; i < 10; i++ ){\n   \ndocument.body.appendChild(createWindow());\n}\n\n\n//# sourceURL=webpack://thesis/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;