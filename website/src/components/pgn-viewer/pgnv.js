(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PGNV"] = factory();
	else
		root["PGNV"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib/";
/******/ 	// WebpackRequireFrom
/******/ 	Object.defineProperty(__webpack_require__, "p", {
/******/ 	  get: function () {
/******/ 	try {
/******/ 	  if (typeof __globalCustomDomain !== "string") {
/******/ 	    throw new Error("WebpackRequireFrom: '__globalCustomDomain' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");
/******/ 	  }
/******/ 	  return __globalCustomDomain;
/******/ 	} catch (e) {
/******/ 	  if (!true) {
/******/ 	    console.error(e);
/******/ 	  }
/******/ 	  return "/lib/";
/******/ 	}
/******/ 	 }
/******/ 	});
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!./src/css/chessground.css":
/*!*************************************************************************************************************************************************************!*\
  !*** /Users/lte/work/PgnViewerJS/node_modules/css-loader/dist/cjs.js!/Users/lte/work/PgnViewerJS/node_modules/postcss-loader/src!./src/css/chessground.css ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*\n * Chessground base css properties.\n *\n * You need to include the css files in themes folder in order to have the\n * board and pieces displayed!\n */\n\n.cg-wrap {\n    width: 320px;\n    height: 320px;\n    position: relative;\n    display: block;\n}\n\ncg-helper {\n    position: absolute;\n    width: 12.5%;\n    padding-bottom: 12.5%;\n    display: table; /* hack: round to full pixel size in chrome */\n    bottom: 0;\n}\n\ncg-container {\n    position: absolute;\n    width: 800%;\n    height: 800%;\n    display: block;\n    bottom: 0;\n}\n\ncg-board {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    line-height: 0;\n    background-size: cover;\n    cursor: pointer;\n}\ncg-board square {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 12.5%;\n    height: 12.5%;\n    pointer-events: none;\n}\ncg-board square.move-dest {\n    background: radial-gradient(rgba(20, 85, 30, 0.5) 22%, #208530 0, rgba(0, 0, 0, 0.3) 0, rgba(0, 0, 0, 0) 0);\n    pointer-events: auto;\n}\ncg-board square.premove-dest {\n    background: radial-gradient(rgba(20, 30, 85, 0.5) 22%, #203085 0, rgba(0, 0, 0, 0.3) 0, rgba(0, 0, 0, 0) 0);\n}\ncg-board square.oc.move-dest {\n    background: radial-gradient(transparent 0%, transparent 80%, rgba(20, 85, 0, 0.3) 80%);\n}\ncg-board square.oc.premove-dest {\n    background: radial-gradient(transparent 0%, transparent 80%, rgba(20, 30, 85, 0.2) 80%);\n}\ncg-board square.move-dest:hover {\n    background: rgba(20, 85, 30, 0.3);\n}\ncg-board square.premove-dest:hover {\n    background: rgba(20, 30, 85, 0.2);\n}\ncg-board square.last-move {\n    will-change: transform;\n    background-color: rgba(155, 199, 0, 0.41);\n}\ncg-board square.selected {\n    background-color: rgba(20, 85, 30, 0.5);\n}\ncg-board square.check {\n    background: radial-gradient(ellipse at center, rgba(255, 0, 0, 1) 0%, rgba(231, 0, 0, 1) 25%, rgba(169, 0, 0, 0) 89%, rgba(158, 0, 0, 0) 100%);\n}\ncg-board square.current-premove {\n    background-color: rgba(20, 30, 85, 0.5);\n}\n.cg-wrap piece {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 12.5%;\n    height: 12.5%;\n    background-size: cover;\n    z-index: 2;\n    will-change: transform;\n    pointer-events: none;\n}\ncg-board piece.dragging {\n    cursor: move;\n    z-index: 9;\n}\ncg-board piece.anim {\n    z-index: 8;\n}\ncg-board piece.fading {\n    z-index: 1;\n    opacity: 0.5;\n}\n.cg-wrap square.move-dest:hover {\n    background-color: rgba(20, 85, 30, 0.3);\n}\n.cg-wrap piece.ghost {\n    opacity: 0.3;\n}\n.cg-wrap svg {\n    overflow: hidden;\n    position: relative;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    z-index: 2;\n    opacity: 0.6;\n}\n.cg-wrap svg image {\n    opacity: 0.5;\n}\n.cg-wrap coords {\n    position: absolute;\n    display: flex;\n    pointer-events: none;\n    opacity: 0.8;\n/*    font-size: 9px; Hide from CSS, so it is set by the PgnViewerJS */\n}\n.cg-wrap coords.ranks {\n    right: -15px;\n    top: 0;\n    flex-flow: column-reverse;\n    height: 100%;\n    width: 12px;\n}\n.cg-wrap coords.ranks.black {\n    flex-flow: column;\n}\n.cg-wrap coords.files {\n    bottom: -16px;\n    left: 0;\n    flex-flow: row;\n    width: 100%;\n    height: 16px;\n    text-transform: uppercase;\n    text-align: center;\n}\n.cg-wrap coords.files.black {\n    flex-flow: row-reverse;\n}\n.cg-wrap coords coord {\n    flex: 1 1 auto;\n}\n.cg-wrap coords.ranks coord {\n    transform: translateY(39%);\n}\n\n@media (min-width: 800px){\n    cg-resize{\n        display:block;\n        position:absolute;\n        right:-9px;\n        bottom:-9px;\n        width:22px;\n        height:22px;\n        cursor:nwse-resize}\n    cg-resize::before,cg-resize::after{\n        background:#000;\n        content:'';\n        position:absolute;\n        width:12px;\n        height:1px}\n    cg-resize::before{\n        width:5px;\n        transform:translate(7px, 8px) rotate(-45deg)}\n    cg-resize::after{\n        transform:translate(1px, 6px) rotate(-45deg)}\n    cg-resize:hover{\n        border-radius:50%;\n        background:rgba(214,79,0,0.5)}\n    .resizing cg-resize{\n        border-radius:50%;\n        background:rgba(98,153,36,0.5)}\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!./src/css/pgnvjs.css":
/*!********************************************************************************************************************************************************!*\
  !*** /Users/lte/work/PgnViewerJS/node_modules/css-loader/dist/cjs.js!/Users/lte/work/PgnViewerJS/node_modules/postcss-loader/src!./src/css/pgnvjs.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../node_modules/css-loader/dist/cjs.js!../fontawesome/css/all.css */ "../../node_modules/css-loader/dist/cjs.js!./src/fontawesome/css/all.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ":root {\n    --space-xss: 0.25rem;\n    --space-xs: 0.5rem;\n    --space-sm: 0.75rem;\n    --space-md: 1.25rem;\n    --space-lg: 2rem;\n    --space-xl: 3.25rem;\n    --space-xxl: 5.25rem;\n}\n\n:root {\n    --gray-100: #F7FAFC;\n    --gray-200: #EDF2F7;\n    --gray-300: #E2E8F0;\n    --gray-400: #CBD5E0;\n    --gray-500: #A0AEC0;\n    --gray-600: #718096;\n    --gray-700: #4A5568;\n    --gray-800: #2D3748;\n    --gray-900: #1A202C;\n    --box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n    --highlight: rgba(255, 255, 153, 1.0);\n}\n\n/** Reset / Set defaults */\n.whole {\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Ubuntu, \"Helvetica Neue\", Oxygen, Cantarell, sans-serif;\n    margin: 0;\n}\n.whole ul, .whole ol {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n/*.whole > * {*/\n/*    padding: var(--space-xs);*/\n/*}*/\n.whole:focus {\n    /* The following suppresses the outline of the element that has the focus. Only when\n       that focus is set, the keyboard mappings work. You may of course enable the outline\n       for debugging purposes. */\n    outline: 0;\n}\n/*.whole {*/\n/*    margin: var(--space-xs);*/\n/*}*/\n\n.whole .moves {\n    overflow: auto;\n}\n\n.whole .buttons {\n    display: flex;\n}\n\n/** Layout styles: View */\n.whole.layout-left .games, .whole.layout-right .games {\n    grid-column: 1 / 3;\n}\n\n.whole.layout-left, .whole.layout-right {\n    display: grid;\n    gap: 0.5em;\n    grid-template-columns: auto auto;\n    grid-template-rows: 40px auto minmax(auto,1fr) 50px;\n}\n\n.whole.layout-left .error, .whole.layout-right .error {\n    grid-column: 1 / 3;\n    grid-row: 2 / 3;\n}\n\n.whole.layout-left .outerBoard, .whole.layout-left .outerBoard {\n    grid-row: 3 / 4;\n}\n\n.whole.layout-left .outerBoard {\n    grid-column: 1 / 2;\n}\n\n.whole.layout-right .outerBoard {\n    grid-column: 2 / 3;\n}\n\n.whole.layout-left .buttons, .whole.layout-right .buttons {\n    place-self: center;\n    grid-row: 4 / 5;\n}\n\n.whole.viewMode.layout-left .buttons, .whole.editMode.layout-right .buttons {\n    grid-column: 1 / 2;\n}\n\n.whole.viewMode.layout-right .buttons, .whole.editMode.layout-left .buttons {\n    grid-column: 2 / 3;\n}\n\n.whole.viewMode.layout-left .moves, .whole.viewMode.layout-right .moves {\n    grid-row: 3 / 5;\n    overflow: auto;\n}\n\n.whole.editMode.layout-left .moves, .whole.editMode.layout-right .moves {\n    grid-row: 3/4;\n    overflow: auto;\n}\n\n.whole.editMode.layout-left .edit {\n    grid-column: 1 / 2;\n    grid-row: 4 / 5;\n}\n\n.whole.editMode.layout-top .edit {\n    grid-column: 1 / 2;\n    grid-row: 6 / 7;\n}\n\n.whole.layout-left .moves {\n    grid-column: 2 / 3;\n}\n\n.whole.layout-right .moves {\n    grid-column: 1 / 2;\n}\n\n/* layout top / bottom */\n.whole.layout-top {\n    display: grid;\n    gap: 0.5em;\n    grid-template-columns: auto;\n    grid-template-rows: auto minmax(auto,1fr) 50px auto;\n}\n\n.whole.layout-bottom {\n    display: grid;\n    gap: 0.5em;\n    grid-template-columns: auto;\n    grid-template-rows: auto auto minmax(auto,400px) 50px;\n}\n\n.whole.layout-top .error, .whole.layout-bottom .error {\n    grid-row: 2/3;\n}\n\n.whole.layout-top .outerBoard {\n    grid-row: 3/4;\n}\n\n.whole.layout-bottom .outerBoard {\n    grid-row: 4/5;\n}\n\n.whole.layout-top .buttons {\n    place-self: center;\n    grid-row: 4/5;\n}\n\n.whole.layout-bottom .buttons {\n    place-self: center;\n    grid-row: 5/6;\n}\n\n.whole.layout-top .moves, .whole.layout-bottom .moves {\n    overflow: auto;\n}\n\n.whole.layout-top .moves {\n    grid-row: 5/6;\n}\n\n.whole.layout-bottom .moves {\n    grid-row: 3/4;\n}\n\n/** Print mode */\n.whole.layout-top.printMode {\n    gap: 0;\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n}\n\n.whole.layout-top.printMode .moves {\n    width: 110%;\n}\n\n/** Board mode */\n.whole.layout-top.boardMode {\n    gap: 0;\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n}\n\n/** Other styling ... */\n\n.fen {\n    width: calc(100% - 8px);\n    height: 35px;\n    margin: 0;\n    padding: var(--space-xss);\n    font-family: monospace;\n}\n\ndiv.error {\n    color: red;\n}\n\ndiv.buttons > i.button, div.edit > i.button {\n    color: var(--gray-600);\n    background-color: var(--gray-100);\n    margin: 0.24rem;\n    padding: 4px;\n    border: solid var(--gray-300) 1px;\n    border-radius: 4px;\n}\n\ndiv.buttons > i.button.selected, div.edit > i.button.selected, .nagMenu.selected {\n    color: var(--gray-100);\n    background-color: var(--gray-700);\n}\n\ndiv.buttons > i.button:hover,div.edit > i.button:hover  {\n    cursor: pointer;\n    border: solid dimgrey 1px;\n}\n\ndiv.nagMenu {\n    border: 1px grey dotted;\n    display: none;\n    width: 500px;\n}\n\ndiv.nagMenu a {\n    text-decoration: none;\n    /*text-align: center;*/\n}\n\ndiv.nagMove, div.nagObservation, div.nagPosition {\n    display: flex;\n    flex-direction: column;\n    flex-basis: 33.3%;\n    /*text-align: left;*/\n    flex-wrap: wrap;\n}\n.nagMove i, .nagPosition i, .nagObservation i {\n    display: flex;\n    cursor: pointer;\n    align-items: center;\n    justify-content: left;\n    margin: var(--space-xss);\n}\n\n.nagMove i::before, .nagPosition i::before, .nagObservation i::before {\n    content: attr(data-symbol);\n    font-style: normal;\n    width: var(--space-md);\n    justify-content: center;\n    align-items: center;\n    /*width: 30px;*/\n}\n\n\na.active i::before {\n    background: var(--gray-700) !important;\n    color: var(--gray-100)!important;\n}\n\na.active i::before i:hover {\n    background: var(--gray-100) !important;\n    color: var(--gray-700)!important;\n}\n\n.nagMove i:hover, .nagPosition i:hover, .nagObservation i:hover {\n    background: var(--gray-700);\n    color: var(--gray-100);\n}\n\n/*Necessary fixes for examples*/\nbutton.ui-multiselect {\n    background-image: none;\n    background-color: white;\n}\n\nul.ui-multiselect-checkboxes > li {\n    margin-bottom: 0;\n}\n\nselect.nag {\n    width: 40px;\n}\n\ntextarea.pgn {\n    padding: 2px;\n    border: 1px solid grey;\n    width: 96%;\n    height: 100px;\n    font-family: monospace;\n}\n\n/* Green buttons. */\n/*div.buttons.green > .button, div.edit.green > .button {*/\n/*    color: green;*/\n/*    border: solid lightgrey 1px;*/\n/*    border-radius: 4px;*/\n/*}*/\n/* Blue buttons. */\n/*div.buttons.blue > .button, div.edit.blue > .button {*/\n/*    color: blue;*/\n/*    border: solid lightgrey 1px;*/\n/*    border-radius: 4px;*/\n/*}*/\n\n.ui-widget {\n    font-size: 1em;\n}\n\ndiv.commentRadio label {\n    display: inline;\n}\ndiv.comment > textarea.comment {\n    font-family: monospace;\n    width: 96%;\n    height: 50px;\n    padding: 2px;\n}\n\n.moves a {\n    text-decoration: underline;\n}\n\n.moves .move a.yellow {\n    /*background-color: rgba(255, 255, 153, 1.0);*/\n    color: var(--gray-800);\n    background-color: var(--highlight);\n}\n\n.moves .move a {\n    text-decoration: none;\n    border: 1px solid transparent;\n}\n\n.moves .move a:hover {\n    border: 1px yellow dotted;\n    background-color: var(--highlight);\n    cursor: crosshair;\n}\n\n.moves, select.games {\n    font-size: 16px;\n    /*font-family: Georgia, \"Bitstream Charter\", serif;;*/\n    color: black;\n    font-weight: 700;\n    line-height: 24px;\n}\n\n.moves .variation .move.var {\n    font-size: 97%;\n    font-weight: 500;\n}\n\n.moves .variation .variation .move.var {\n    font-size: 95%;\n    font-weight: 300;\n}\n\n.moves .variation {\n    display: block;\n    padding: 5px;\n}\n.moves .variation:before {\n    content: ' ( ';\n}\n\n.moves .variation .variation:before {\n    content: ' ( ';\n}\n\n.moves .variation .variation {\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.moves .variation .variation:after {\n    content: ' ) ';\n}\n\n.moves .variation:after {\n    content: ' ) ';\n}\n\n.moves > .varblock .white:before {\n    display: inline;\n}\n\n.moves .move .comment {\n    color: var(--gray-800);\n    font-weight: 500;\n}\n\n/*.moves .move .comment.timeTiny {*/\n/*    font-weight: 300;*/\n/*    font-size: 60%;*/\n/*}*/\n\n/*.moves .move .comment.timeLarge {*/\n/*}*/\n\n/*.moves .move .timeNormal {*/\n/*    font-weight: 400;*/\n/*    font-size: 80%;*/\n/*}*/\n\n/* Pattern of the Chess.com similar */\n/* board */\n/*.chesscom.whole {*/\n/*    !*    border: 2px solid #404040; *!*/\n/*    border: 2px gray solid;*/\n/*    display: flex;*/\n/*    flex-flow: row wrap;*/\n/*}*/\n\n/*.chesscom .headers {*/\n/*    font-family: \"Lucida Grande\", Verdana, Arial, \"Bitstream Vera Sans\", sans-serif;*/\n/*    font-size: 18px;*/\n/*!*    padding: 15px;*!*/\n/*    background-color: #f3f3f3;*/\n/*    font-weight: bold;*/\n/*    flex: 1 100%;*/\n/*}*/\n\n/*.chesscom .headers > .whiteHeader:before {*/\n/*    content: \"\";*/\n/*}*/\n\n/*.chesscom .headers > .whiteHeader {*/\n/*    display: inline-block;*/\n/*    padding-top: 10px;*/\n/*    padding-left: 10px;*/\n/*}*/\n\n/*.chesscom .headers > .blackHeader:before {*/\n/*    content: \"  vs. \";*/\n/*}*/\n\n/*.chesscom .headers > .blackHeader {*/\n/*    display: inline-block;*/\n/*    padding-top: 10px;*/\n/*    padding-left: 10px;*/\n/*}*/\n/*.chesscom .headers > .restHeader {*/\n/*    display: block;*/\n/*    padding-left: 10px;*/\n/*    padding-bottom: 10px;*/\n/*    font-weight: 500;*/\n/*    font-size: 80%;*/\n/*}*/\n\n/*.chesscom .players {*/\n/*    font-weight: 900;*/\n/*}*/\n\n/*.chesscom .outerBoard {*/\n/*    !* float: left; *!*/\n/*    width: 388px;*/\n/*}*/\n\n/*.chesscom .endBoard {*/\n/*    clear: both;*/\n/*}*/\n/*.chesscom .moves a {*/\n/*    text-decoration: none;*/\n/*}*/\n\n/**\n  CHESSGROUND changes.\n  */\n \n.cg-wrap.coords-inner {\n    margin-bottom: 0;\n    margin-right: 0;\n}\n.cg-wrap {\n    margin-bottom: 15px;\n    margin-right: 15px;\n}\n.cg-wrap.coords-inner coords.ranks {\n    right: -2px;\n}\n.cg-wrap.coords-inner coords.files {\n    bottom: 2px;\n    left: 2px;\n    text-align: left;\n}\n.cg-wrap coords.files {\n    text-transform: none;\n}\n\n/* board and colorMarker */\n\n.colorMarker {\n    width: 20px; height: 20px;\n    border-color: black;\n    border-width: 2px;\n    border-style: double;\n    margin-left: 50px;\n    align-self: center;\n}\n\n.colorMarker.circle {\n    border-radius: 10px;\n}\n\n.colorMarker.circle-big {\n    border-radius: 20px;\n    width: 40px; height: 40px;\n}\n\n.colorMarker.circle-small {\n    border-radius: 5px;\n    width: 10px; height: 10px;\n}\n\n.cm-black {\n    background-color: black;\n}\n\n.cm-white {\n    background-color: white;\n}\n\n.cm-big {\n    width: 40px; height: 40px;   \n}\n\n.cm-small {\n    width: 10px; height: 10px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!./src/css/theme.css":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/lte/work/PgnViewerJS/node_modules/css-loader/dist/cjs.js!/Users/lte/work/PgnViewerJS/node_modules/postcss-loader/src!./src/css/theme.css ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/board/blue.svg */ "./src/img/board/blue.svg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../img/board/brown.svg */ "./src/img/board/brown.svg");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../img/board/zeit.svg */ "./src/img/board/zeit.svg");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../img/board/chesscom.svg */ "./src/img/board/chesscom.svg");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../img/board/informator.svg */ "./src/img/board/informator.svg");
var ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../img/board/sportverlag.svg */ "./src/img/board/sportverlag.svg");
var ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../img/board/beyer.svg */ "./src/img/board/beyer.svg");
var ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../img/board/falken.svg */ "./src/img/board/falken.svg");
var ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../img/board/green.svg */ "./src/img/board/green.svg");
var ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../img/chesspieces/merida-svg/wP.svg */ "./src/img/chesspieces/merida-svg/wP.svg");
var ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../img/chesspieces/merida-svg/wB.svg */ "./src/img/chesspieces/merida-svg/wB.svg");
var ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ../img/chesspieces/merida-svg/wN.svg */ "./src/img/chesspieces/merida-svg/wN.svg");
var ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ../img/chesspieces/merida-svg/wR.svg */ "./src/img/chesspieces/merida-svg/wR.svg");
var ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(/*! ../img/chesspieces/merida-svg/wQ.svg */ "./src/img/chesspieces/merida-svg/wQ.svg");
var ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(/*! ../img/chesspieces/merida-svg/wK.svg */ "./src/img/chesspieces/merida-svg/wK.svg");
var ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(/*! ../img/chesspieces/merida-svg/bP.svg */ "./src/img/chesspieces/merida-svg/bP.svg");
var ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(/*! ../img/chesspieces/merida-svg/bB.svg */ "./src/img/chesspieces/merida-svg/bB.svg");
var ___CSS_LOADER_URL_IMPORT_17___ = __webpack_require__(/*! ../img/chesspieces/merida-svg/bN.svg */ "./src/img/chesspieces/merida-svg/bN.svg");
var ___CSS_LOADER_URL_IMPORT_18___ = __webpack_require__(/*! ../img/chesspieces/merida-svg/bR.svg */ "./src/img/chesspieces/merida-svg/bR.svg");
var ___CSS_LOADER_URL_IMPORT_19___ = __webpack_require__(/*! ../img/chesspieces/merida-svg/bQ.svg */ "./src/img/chesspieces/merida-svg/bQ.svg");
var ___CSS_LOADER_URL_IMPORT_20___ = __webpack_require__(/*! ../img/chesspieces/merida-svg/bK.svg */ "./src/img/chesspieces/merida-svg/bK.svg");
var ___CSS_LOADER_URL_IMPORT_21___ = __webpack_require__(/*! ../img/chesspieces/wikipedia/wP.png */ "./src/img/chesspieces/wikipedia/wP.png");
var ___CSS_LOADER_URL_IMPORT_22___ = __webpack_require__(/*! ../img/chesspieces/wikipedia/wB.png */ "./src/img/chesspieces/wikipedia/wB.png");
var ___CSS_LOADER_URL_IMPORT_23___ = __webpack_require__(/*! ../img/chesspieces/wikipedia/wN.png */ "./src/img/chesspieces/wikipedia/wN.png");
var ___CSS_LOADER_URL_IMPORT_24___ = __webpack_require__(/*! ../img/chesspieces/wikipedia/wR.png */ "./src/img/chesspieces/wikipedia/wR.png");
var ___CSS_LOADER_URL_IMPORT_25___ = __webpack_require__(/*! ../img/chesspieces/wikipedia/wQ.png */ "./src/img/chesspieces/wikipedia/wQ.png");
var ___CSS_LOADER_URL_IMPORT_26___ = __webpack_require__(/*! ../img/chesspieces/wikipedia/wK.png */ "./src/img/chesspieces/wikipedia/wK.png");
var ___CSS_LOADER_URL_IMPORT_27___ = __webpack_require__(/*! ../img/chesspieces/wikipedia/bP.png */ "./src/img/chesspieces/wikipedia/bP.png");
var ___CSS_LOADER_URL_IMPORT_28___ = __webpack_require__(/*! ../img/chesspieces/wikipedia/bB.png */ "./src/img/chesspieces/wikipedia/bB.png");
var ___CSS_LOADER_URL_IMPORT_29___ = __webpack_require__(/*! ../img/chesspieces/wikipedia/bN.png */ "./src/img/chesspieces/wikipedia/bN.png");
var ___CSS_LOADER_URL_IMPORT_30___ = __webpack_require__(/*! ../img/chesspieces/wikipedia/bR.png */ "./src/img/chesspieces/wikipedia/bR.png");
var ___CSS_LOADER_URL_IMPORT_31___ = __webpack_require__(/*! ../img/chesspieces/wikipedia/bQ.png */ "./src/img/chesspieces/wikipedia/bQ.png");
var ___CSS_LOADER_URL_IMPORT_32___ = __webpack_require__(/*! ../img/chesspieces/wikipedia/bK.png */ "./src/img/chesspieces/wikipedia/bK.png");
var ___CSS_LOADER_URL_IMPORT_33___ = __webpack_require__(/*! ../img/chesspieces/alpha/wP.png */ "./src/img/chesspieces/alpha/wP.png");
var ___CSS_LOADER_URL_IMPORT_34___ = __webpack_require__(/*! ../img/chesspieces/alpha/wB.png */ "./src/img/chesspieces/alpha/wB.png");
var ___CSS_LOADER_URL_IMPORT_35___ = __webpack_require__(/*! ../img/chesspieces/alpha/wN.png */ "./src/img/chesspieces/alpha/wN.png");
var ___CSS_LOADER_URL_IMPORT_36___ = __webpack_require__(/*! ../img/chesspieces/alpha/wR.png */ "./src/img/chesspieces/alpha/wR.png");
var ___CSS_LOADER_URL_IMPORT_37___ = __webpack_require__(/*! ../img/chesspieces/alpha/wQ.png */ "./src/img/chesspieces/alpha/wQ.png");
var ___CSS_LOADER_URL_IMPORT_38___ = __webpack_require__(/*! ../img/chesspieces/alpha/wK.png */ "./src/img/chesspieces/alpha/wK.png");
var ___CSS_LOADER_URL_IMPORT_39___ = __webpack_require__(/*! ../img/chesspieces/alpha/bP.png */ "./src/img/chesspieces/alpha/bP.png");
var ___CSS_LOADER_URL_IMPORT_40___ = __webpack_require__(/*! ../img/chesspieces/alpha/bB.png */ "./src/img/chesspieces/alpha/bB.png");
var ___CSS_LOADER_URL_IMPORT_41___ = __webpack_require__(/*! ../img/chesspieces/alpha/bN.png */ "./src/img/chesspieces/alpha/bN.png");
var ___CSS_LOADER_URL_IMPORT_42___ = __webpack_require__(/*! ../img/chesspieces/alpha/bR.png */ "./src/img/chesspieces/alpha/bR.png");
var ___CSS_LOADER_URL_IMPORT_43___ = __webpack_require__(/*! ../img/chesspieces/alpha/bQ.png */ "./src/img/chesspieces/alpha/bQ.png");
var ___CSS_LOADER_URL_IMPORT_44___ = __webpack_require__(/*! ../img/chesspieces/alpha/bK.png */ "./src/img/chesspieces/alpha/bK.png");
var ___CSS_LOADER_URL_IMPORT_45___ = __webpack_require__(/*! ../img/chesspieces/beyer/wP.png */ "./src/img/chesspieces/beyer/wP.png");
var ___CSS_LOADER_URL_IMPORT_46___ = __webpack_require__(/*! ../img/chesspieces/beyer/wB.png */ "./src/img/chesspieces/beyer/wB.png");
var ___CSS_LOADER_URL_IMPORT_47___ = __webpack_require__(/*! ../img/chesspieces/beyer/wN.png */ "./src/img/chesspieces/beyer/wN.png");
var ___CSS_LOADER_URL_IMPORT_48___ = __webpack_require__(/*! ../img/chesspieces/beyer/wR.png */ "./src/img/chesspieces/beyer/wR.png");
var ___CSS_LOADER_URL_IMPORT_49___ = __webpack_require__(/*! ../img/chesspieces/beyer/wQ.png */ "./src/img/chesspieces/beyer/wQ.png");
var ___CSS_LOADER_URL_IMPORT_50___ = __webpack_require__(/*! ../img/chesspieces/beyer/wK.png */ "./src/img/chesspieces/beyer/wK.png");
var ___CSS_LOADER_URL_IMPORT_51___ = __webpack_require__(/*! ../img/chesspieces/beyer/bP.png */ "./src/img/chesspieces/beyer/bP.png");
var ___CSS_LOADER_URL_IMPORT_52___ = __webpack_require__(/*! ../img/chesspieces/beyer/bB.png */ "./src/img/chesspieces/beyer/bB.png");
var ___CSS_LOADER_URL_IMPORT_53___ = __webpack_require__(/*! ../img/chesspieces/beyer/bN.png */ "./src/img/chesspieces/beyer/bN.png");
var ___CSS_LOADER_URL_IMPORT_54___ = __webpack_require__(/*! ../img/chesspieces/beyer/bR.png */ "./src/img/chesspieces/beyer/bR.png");
var ___CSS_LOADER_URL_IMPORT_55___ = __webpack_require__(/*! ../img/chesspieces/beyer/bQ.png */ "./src/img/chesspieces/beyer/bQ.png");
var ___CSS_LOADER_URL_IMPORT_56___ = __webpack_require__(/*! ../img/chesspieces/beyer/bK.png */ "./src/img/chesspieces/beyer/bK.png");
var ___CSS_LOADER_URL_IMPORT_57___ = __webpack_require__(/*! ../img/chesspieces/case/wP.png */ "./src/img/chesspieces/case/wP.png");
var ___CSS_LOADER_URL_IMPORT_58___ = __webpack_require__(/*! ../img/chesspieces/case/wB.png */ "./src/img/chesspieces/case/wB.png");
var ___CSS_LOADER_URL_IMPORT_59___ = __webpack_require__(/*! ../img/chesspieces/case/wN.png */ "./src/img/chesspieces/case/wN.png");
var ___CSS_LOADER_URL_IMPORT_60___ = __webpack_require__(/*! ../img/chesspieces/case/wR.png */ "./src/img/chesspieces/case/wR.png");
var ___CSS_LOADER_URL_IMPORT_61___ = __webpack_require__(/*! ../img/chesspieces/case/wQ.png */ "./src/img/chesspieces/case/wQ.png");
var ___CSS_LOADER_URL_IMPORT_62___ = __webpack_require__(/*! ../img/chesspieces/case/wK.png */ "./src/img/chesspieces/case/wK.png");
var ___CSS_LOADER_URL_IMPORT_63___ = __webpack_require__(/*! ../img/chesspieces/case/bP.png */ "./src/img/chesspieces/case/bP.png");
var ___CSS_LOADER_URL_IMPORT_64___ = __webpack_require__(/*! ../img/chesspieces/case/bB.png */ "./src/img/chesspieces/case/bB.png");
var ___CSS_LOADER_URL_IMPORT_65___ = __webpack_require__(/*! ../img/chesspieces/case/bN.png */ "./src/img/chesspieces/case/bN.png");
var ___CSS_LOADER_URL_IMPORT_66___ = __webpack_require__(/*! ../img/chesspieces/case/bR.png */ "./src/img/chesspieces/case/bR.png");
var ___CSS_LOADER_URL_IMPORT_67___ = __webpack_require__(/*! ../img/chesspieces/case/bQ.png */ "./src/img/chesspieces/case/bQ.png");
var ___CSS_LOADER_URL_IMPORT_68___ = __webpack_require__(/*! ../img/chesspieces/case/bK.png */ "./src/img/chesspieces/case/bK.png");
var ___CSS_LOADER_URL_IMPORT_69___ = __webpack_require__(/*! ../img/chesspieces/chesscom/wp.png */ "./src/img/chesspieces/chesscom/wp.png");
var ___CSS_LOADER_URL_IMPORT_70___ = __webpack_require__(/*! ../img/chesspieces/chesscom/wb.png */ "./src/img/chesspieces/chesscom/wb.png");
var ___CSS_LOADER_URL_IMPORT_71___ = __webpack_require__(/*! ../img/chesspieces/chesscom/wn.png */ "./src/img/chesspieces/chesscom/wn.png");
var ___CSS_LOADER_URL_IMPORT_72___ = __webpack_require__(/*! ../img/chesspieces/chesscom/wr.png */ "./src/img/chesspieces/chesscom/wr.png");
var ___CSS_LOADER_URL_IMPORT_73___ = __webpack_require__(/*! ../img/chesspieces/chesscom/wq.png */ "./src/img/chesspieces/chesscom/wq.png");
var ___CSS_LOADER_URL_IMPORT_74___ = __webpack_require__(/*! ../img/chesspieces/chesscom/wk.png */ "./src/img/chesspieces/chesscom/wk.png");
var ___CSS_LOADER_URL_IMPORT_75___ = __webpack_require__(/*! ../img/chesspieces/chesscom/bp.png */ "./src/img/chesspieces/chesscom/bp.png");
var ___CSS_LOADER_URL_IMPORT_76___ = __webpack_require__(/*! ../img/chesspieces/chesscom/bb.png */ "./src/img/chesspieces/chesscom/bb.png");
var ___CSS_LOADER_URL_IMPORT_77___ = __webpack_require__(/*! ../img/chesspieces/chesscom/bn.png */ "./src/img/chesspieces/chesscom/bn.png");
var ___CSS_LOADER_URL_IMPORT_78___ = __webpack_require__(/*! ../img/chesspieces/chesscom/br.png */ "./src/img/chesspieces/chesscom/br.png");
var ___CSS_LOADER_URL_IMPORT_79___ = __webpack_require__(/*! ../img/chesspieces/chesscom/bq.png */ "./src/img/chesspieces/chesscom/bq.png");
var ___CSS_LOADER_URL_IMPORT_80___ = __webpack_require__(/*! ../img/chesspieces/chesscom/bk.png */ "./src/img/chesspieces/chesscom/bk.png");
var ___CSS_LOADER_URL_IMPORT_81___ = __webpack_require__(/*! ../img/chesspieces/condal/wP.png */ "./src/img/chesspieces/condal/wP.png");
var ___CSS_LOADER_URL_IMPORT_82___ = __webpack_require__(/*! ../img/chesspieces/condal/wB.png */ "./src/img/chesspieces/condal/wB.png");
var ___CSS_LOADER_URL_IMPORT_83___ = __webpack_require__(/*! ../img/chesspieces/condal/wN.png */ "./src/img/chesspieces/condal/wN.png");
var ___CSS_LOADER_URL_IMPORT_84___ = __webpack_require__(/*! ../img/chesspieces/condal/wR.png */ "./src/img/chesspieces/condal/wR.png");
var ___CSS_LOADER_URL_IMPORT_85___ = __webpack_require__(/*! ../img/chesspieces/condal/wQ.png */ "./src/img/chesspieces/condal/wQ.png");
var ___CSS_LOADER_URL_IMPORT_86___ = __webpack_require__(/*! ../img/chesspieces/condal/wK.png */ "./src/img/chesspieces/condal/wK.png");
var ___CSS_LOADER_URL_IMPORT_87___ = __webpack_require__(/*! ../img/chesspieces/condal/bP.png */ "./src/img/chesspieces/condal/bP.png");
var ___CSS_LOADER_URL_IMPORT_88___ = __webpack_require__(/*! ../img/chesspieces/condal/bB.png */ "./src/img/chesspieces/condal/bB.png");
var ___CSS_LOADER_URL_IMPORT_89___ = __webpack_require__(/*! ../img/chesspieces/condal/bN.png */ "./src/img/chesspieces/condal/bN.png");
var ___CSS_LOADER_URL_IMPORT_90___ = __webpack_require__(/*! ../img/chesspieces/condal/bR.png */ "./src/img/chesspieces/condal/bR.png");
var ___CSS_LOADER_URL_IMPORT_91___ = __webpack_require__(/*! ../img/chesspieces/condal/bQ.png */ "./src/img/chesspieces/condal/bQ.png");
var ___CSS_LOADER_URL_IMPORT_92___ = __webpack_require__(/*! ../img/chesspieces/condal/bK.png */ "./src/img/chesspieces/condal/bK.png");
var ___CSS_LOADER_URL_IMPORT_93___ = __webpack_require__(/*! ../img/chesspieces/leipzig/wP.png */ "./src/img/chesspieces/leipzig/wP.png");
var ___CSS_LOADER_URL_IMPORT_94___ = __webpack_require__(/*! ../img/chesspieces/leipzig/wB.png */ "./src/img/chesspieces/leipzig/wB.png");
var ___CSS_LOADER_URL_IMPORT_95___ = __webpack_require__(/*! ../img/chesspieces/leipzig/wN.png */ "./src/img/chesspieces/leipzig/wN.png");
var ___CSS_LOADER_URL_IMPORT_96___ = __webpack_require__(/*! ../img/chesspieces/leipzig/wR.png */ "./src/img/chesspieces/leipzig/wR.png");
var ___CSS_LOADER_URL_IMPORT_97___ = __webpack_require__(/*! ../img/chesspieces/leipzig/wQ.png */ "./src/img/chesspieces/leipzig/wQ.png");
var ___CSS_LOADER_URL_IMPORT_98___ = __webpack_require__(/*! ../img/chesspieces/leipzig/wK.png */ "./src/img/chesspieces/leipzig/wK.png");
var ___CSS_LOADER_URL_IMPORT_99___ = __webpack_require__(/*! ../img/chesspieces/leipzig/bP.png */ "./src/img/chesspieces/leipzig/bP.png");
var ___CSS_LOADER_URL_IMPORT_100___ = __webpack_require__(/*! ../img/chesspieces/leipzig/bB.png */ "./src/img/chesspieces/leipzig/bB.png");
var ___CSS_LOADER_URL_IMPORT_101___ = __webpack_require__(/*! ../img/chesspieces/leipzig/bN.png */ "./src/img/chesspieces/leipzig/bN.png");
var ___CSS_LOADER_URL_IMPORT_102___ = __webpack_require__(/*! ../img/chesspieces/leipzig/bR.png */ "./src/img/chesspieces/leipzig/bR.png");
var ___CSS_LOADER_URL_IMPORT_103___ = __webpack_require__(/*! ../img/chesspieces/leipzig/bQ.png */ "./src/img/chesspieces/leipzig/bQ.png");
var ___CSS_LOADER_URL_IMPORT_104___ = __webpack_require__(/*! ../img/chesspieces/leipzig/bK.png */ "./src/img/chesspieces/leipzig/bK.png");
var ___CSS_LOADER_URL_IMPORT_105___ = __webpack_require__(/*! ../img/chesspieces/maya/wP.png */ "./src/img/chesspieces/maya/wP.png");
var ___CSS_LOADER_URL_IMPORT_106___ = __webpack_require__(/*! ../img/chesspieces/maya/wB.png */ "./src/img/chesspieces/maya/wB.png");
var ___CSS_LOADER_URL_IMPORT_107___ = __webpack_require__(/*! ../img/chesspieces/maya/wN.png */ "./src/img/chesspieces/maya/wN.png");
var ___CSS_LOADER_URL_IMPORT_108___ = __webpack_require__(/*! ../img/chesspieces/maya/wR.png */ "./src/img/chesspieces/maya/wR.png");
var ___CSS_LOADER_URL_IMPORT_109___ = __webpack_require__(/*! ../img/chesspieces/maya/wQ.png */ "./src/img/chesspieces/maya/wQ.png");
var ___CSS_LOADER_URL_IMPORT_110___ = __webpack_require__(/*! ../img/chesspieces/maya/wK.png */ "./src/img/chesspieces/maya/wK.png");
var ___CSS_LOADER_URL_IMPORT_111___ = __webpack_require__(/*! ../img/chesspieces/maya/bP.png */ "./src/img/chesspieces/maya/bP.png");
var ___CSS_LOADER_URL_IMPORT_112___ = __webpack_require__(/*! ../img/chesspieces/maya/bB.png */ "./src/img/chesspieces/maya/bB.png");
var ___CSS_LOADER_URL_IMPORT_113___ = __webpack_require__(/*! ../img/chesspieces/maya/bN.png */ "./src/img/chesspieces/maya/bN.png");
var ___CSS_LOADER_URL_IMPORT_114___ = __webpack_require__(/*! ../img/chesspieces/maya/bR.png */ "./src/img/chesspieces/maya/bR.png");
var ___CSS_LOADER_URL_IMPORT_115___ = __webpack_require__(/*! ../img/chesspieces/maya/bQ.png */ "./src/img/chesspieces/maya/bQ.png");
var ___CSS_LOADER_URL_IMPORT_116___ = __webpack_require__(/*! ../img/chesspieces/maya/bK.png */ "./src/img/chesspieces/maya/bK.png");
var ___CSS_LOADER_URL_IMPORT_117___ = __webpack_require__(/*! ../img/chesspieces/uscf/wP.png */ "./src/img/chesspieces/uscf/wP.png");
var ___CSS_LOADER_URL_IMPORT_118___ = __webpack_require__(/*! ../img/chesspieces/uscf/wB.png */ "./src/img/chesspieces/uscf/wB.png");
var ___CSS_LOADER_URL_IMPORT_119___ = __webpack_require__(/*! ../img/chesspieces/uscf/wN.png */ "./src/img/chesspieces/uscf/wN.png");
var ___CSS_LOADER_URL_IMPORT_120___ = __webpack_require__(/*! ../img/chesspieces/uscf/wR.png */ "./src/img/chesspieces/uscf/wR.png");
var ___CSS_LOADER_URL_IMPORT_121___ = __webpack_require__(/*! ../img/chesspieces/uscf/wQ.png */ "./src/img/chesspieces/uscf/wQ.png");
var ___CSS_LOADER_URL_IMPORT_122___ = __webpack_require__(/*! ../img/chesspieces/uscf/wK.png */ "./src/img/chesspieces/uscf/wK.png");
var ___CSS_LOADER_URL_IMPORT_123___ = __webpack_require__(/*! ../img/chesspieces/uscf/bP.png */ "./src/img/chesspieces/uscf/bP.png");
var ___CSS_LOADER_URL_IMPORT_124___ = __webpack_require__(/*! ../img/chesspieces/uscf/bB.png */ "./src/img/chesspieces/uscf/bB.png");
var ___CSS_LOADER_URL_IMPORT_125___ = __webpack_require__(/*! ../img/chesspieces/uscf/bN.png */ "./src/img/chesspieces/uscf/bN.png");
var ___CSS_LOADER_URL_IMPORT_126___ = __webpack_require__(/*! ../img/chesspieces/uscf/bR.png */ "./src/img/chesspieces/uscf/bR.png");
var ___CSS_LOADER_URL_IMPORT_127___ = __webpack_require__(/*! ../img/chesspieces/uscf/bQ.png */ "./src/img/chesspieces/uscf/bQ.png");
var ___CSS_LOADER_URL_IMPORT_128___ = __webpack_require__(/*! ../img/chesspieces/uscf/bK.png */ "./src/img/chesspieces/uscf/bK.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_20___);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_21___);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_22___);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_23___);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_24___);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_25___);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_26___);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_27___);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_28___);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_29___);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_30___);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_31___);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_32___);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_33___);
var ___CSS_LOADER_URL_REPLACEMENT_34___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_34___);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_35___);
var ___CSS_LOADER_URL_REPLACEMENT_36___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_36___);
var ___CSS_LOADER_URL_REPLACEMENT_37___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_37___);
var ___CSS_LOADER_URL_REPLACEMENT_38___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_38___);
var ___CSS_LOADER_URL_REPLACEMENT_39___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_39___);
var ___CSS_LOADER_URL_REPLACEMENT_40___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_40___);
var ___CSS_LOADER_URL_REPLACEMENT_41___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_41___);
var ___CSS_LOADER_URL_REPLACEMENT_42___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_42___);
var ___CSS_LOADER_URL_REPLACEMENT_43___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_43___);
var ___CSS_LOADER_URL_REPLACEMENT_44___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_44___);
var ___CSS_LOADER_URL_REPLACEMENT_45___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_45___);
var ___CSS_LOADER_URL_REPLACEMENT_46___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_46___);
var ___CSS_LOADER_URL_REPLACEMENT_47___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_47___);
var ___CSS_LOADER_URL_REPLACEMENT_48___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_48___);
var ___CSS_LOADER_URL_REPLACEMENT_49___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_49___);
var ___CSS_LOADER_URL_REPLACEMENT_50___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_50___);
var ___CSS_LOADER_URL_REPLACEMENT_51___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_51___);
var ___CSS_LOADER_URL_REPLACEMENT_52___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_52___);
var ___CSS_LOADER_URL_REPLACEMENT_53___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_53___);
var ___CSS_LOADER_URL_REPLACEMENT_54___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_54___);
var ___CSS_LOADER_URL_REPLACEMENT_55___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_55___);
var ___CSS_LOADER_URL_REPLACEMENT_56___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_56___);
var ___CSS_LOADER_URL_REPLACEMENT_57___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_57___);
var ___CSS_LOADER_URL_REPLACEMENT_58___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_58___);
var ___CSS_LOADER_URL_REPLACEMENT_59___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_59___);
var ___CSS_LOADER_URL_REPLACEMENT_60___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_60___);
var ___CSS_LOADER_URL_REPLACEMENT_61___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_61___);
var ___CSS_LOADER_URL_REPLACEMENT_62___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_62___);
var ___CSS_LOADER_URL_REPLACEMENT_63___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_63___);
var ___CSS_LOADER_URL_REPLACEMENT_64___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_64___);
var ___CSS_LOADER_URL_REPLACEMENT_65___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_65___);
var ___CSS_LOADER_URL_REPLACEMENT_66___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_66___);
var ___CSS_LOADER_URL_REPLACEMENT_67___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_67___);
var ___CSS_LOADER_URL_REPLACEMENT_68___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_68___);
var ___CSS_LOADER_URL_REPLACEMENT_69___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_69___);
var ___CSS_LOADER_URL_REPLACEMENT_70___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_70___);
var ___CSS_LOADER_URL_REPLACEMENT_71___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_71___);
var ___CSS_LOADER_URL_REPLACEMENT_72___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_72___);
var ___CSS_LOADER_URL_REPLACEMENT_73___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_73___);
var ___CSS_LOADER_URL_REPLACEMENT_74___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_74___);
var ___CSS_LOADER_URL_REPLACEMENT_75___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_75___);
var ___CSS_LOADER_URL_REPLACEMENT_76___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_76___);
var ___CSS_LOADER_URL_REPLACEMENT_77___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_77___);
var ___CSS_LOADER_URL_REPLACEMENT_78___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_78___);
var ___CSS_LOADER_URL_REPLACEMENT_79___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_79___);
var ___CSS_LOADER_URL_REPLACEMENT_80___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_80___);
var ___CSS_LOADER_URL_REPLACEMENT_81___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_81___);
var ___CSS_LOADER_URL_REPLACEMENT_82___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_82___);
var ___CSS_LOADER_URL_REPLACEMENT_83___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_83___);
var ___CSS_LOADER_URL_REPLACEMENT_84___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_84___);
var ___CSS_LOADER_URL_REPLACEMENT_85___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_85___);
var ___CSS_LOADER_URL_REPLACEMENT_86___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_86___);
var ___CSS_LOADER_URL_REPLACEMENT_87___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_87___);
var ___CSS_LOADER_URL_REPLACEMENT_88___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_88___);
var ___CSS_LOADER_URL_REPLACEMENT_89___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_89___);
var ___CSS_LOADER_URL_REPLACEMENT_90___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_90___);
var ___CSS_LOADER_URL_REPLACEMENT_91___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_91___);
var ___CSS_LOADER_URL_REPLACEMENT_92___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_92___);
var ___CSS_LOADER_URL_REPLACEMENT_93___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_93___);
var ___CSS_LOADER_URL_REPLACEMENT_94___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_94___);
var ___CSS_LOADER_URL_REPLACEMENT_95___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_95___);
var ___CSS_LOADER_URL_REPLACEMENT_96___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_96___);
var ___CSS_LOADER_URL_REPLACEMENT_97___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_97___);
var ___CSS_LOADER_URL_REPLACEMENT_98___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_98___);
var ___CSS_LOADER_URL_REPLACEMENT_99___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_99___);
var ___CSS_LOADER_URL_REPLACEMENT_100___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_100___);
var ___CSS_LOADER_URL_REPLACEMENT_101___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_101___);
var ___CSS_LOADER_URL_REPLACEMENT_102___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_102___);
var ___CSS_LOADER_URL_REPLACEMENT_103___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_103___);
var ___CSS_LOADER_URL_REPLACEMENT_104___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_104___);
var ___CSS_LOADER_URL_REPLACEMENT_105___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_105___);
var ___CSS_LOADER_URL_REPLACEMENT_106___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_106___);
var ___CSS_LOADER_URL_REPLACEMENT_107___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_107___);
var ___CSS_LOADER_URL_REPLACEMENT_108___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_108___);
var ___CSS_LOADER_URL_REPLACEMENT_109___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_109___);
var ___CSS_LOADER_URL_REPLACEMENT_110___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_110___);
var ___CSS_LOADER_URL_REPLACEMENT_111___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_111___);
var ___CSS_LOADER_URL_REPLACEMENT_112___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_112___);
var ___CSS_LOADER_URL_REPLACEMENT_113___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_113___);
var ___CSS_LOADER_URL_REPLACEMENT_114___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_114___);
var ___CSS_LOADER_URL_REPLACEMENT_115___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_115___);
var ___CSS_LOADER_URL_REPLACEMENT_116___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_116___);
var ___CSS_LOADER_URL_REPLACEMENT_117___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_117___);
var ___CSS_LOADER_URL_REPLACEMENT_118___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_118___);
var ___CSS_LOADER_URL_REPLACEMENT_119___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_119___);
var ___CSS_LOADER_URL_REPLACEMENT_120___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_120___);
var ___CSS_LOADER_URL_REPLACEMENT_121___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_121___);
var ___CSS_LOADER_URL_REPLACEMENT_122___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_122___);
var ___CSS_LOADER_URL_REPLACEMENT_123___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_123___);
var ___CSS_LOADER_URL_REPLACEMENT_124___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_124___);
var ___CSS_LOADER_URL_REPLACEMENT_125___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_125___);
var ___CSS_LOADER_URL_REPLACEMENT_126___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_126___);
var ___CSS_LOADER_URL_REPLACEMENT_127___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_127___);
var ___CSS_LOADER_URL_REPLACEMENT_128___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_128___);
// Module
exports.push([module.i, "/*\n * Board\n */\n.blue .cg-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.brown .cg-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n.zeit .cg-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n.chesscom .cg-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n.informator .cg-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n.sportverlag .cg-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n}\n.beyer .cg-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.falken .cg-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n}\n.green .cg-wrap {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n}\n\n/*\n * Board\n */\n.merida  cg-board piece.pawn.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n}\n.merida  cg-board piece.bishop.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n}\n.merida  cg-board piece.knight.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n}\n.merida  cg-board piece.rook.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n}\n.merida  cg-board piece.queen.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n}\n.merida  cg-board piece.king.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n}\n.merida  cg-board piece.pawn.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\n}\n.merida  cg-board piece.bishop.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\n}\n.merida  cg-board piece.knight.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ");\n}\n.merida  cg-board piece.rook.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ");\n}\n.merida  cg-board piece.queen.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ");\n}\n.merida  cg-board piece.king.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ");\n}\n\n/* Wikipedia */\n.wikipedia  cg-board piece.pawn.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ");\n}\n.wikipedia  cg-board piece.bishop.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ");\n}\n.wikipedia  cg-board piece.knight.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ");\n}\n.wikipedia  cg-board piece.rook.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ");\n}\n.wikipedia  cg-board piece.queen.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ");\n}\n.wikipedia cg-board piece.king.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ");\n}\n.wikipedia cg-board piece.pawn.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ");\n}\n.wikipedia cg-board piece.bishop.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ");\n}\n.wikipedia cg-board piece.knight.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ");\n}\n.wikipedia cg-board piece.rook.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ");\n}\n.wikipedia cg-board piece.queen.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + ");\n}\n.wikipedia cg-board piece.king.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + ");\n}\n/* Alpha */\n.alpha cg-board piece.pawn.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_33___ + ");\n}\n.alpha cg-board piece.bishop.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_34___ + ");\n}\n.alpha cg-board piece.knight.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_35___ + ");\n}\n.alpha cg-board piece.rook.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_36___ + ");\n}\n.alpha cg-board piece.queen.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_37___ + ");\n}\n.alpha cg-board piece.king.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_38___ + ");\n}\n.alpha cg-board piece.pawn.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_39___ + ");\n}\n.alpha cg-board piece.bishop.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_40___ + ");\n}\n.alpha  cg-board piece.knight.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_41___ + ");\n}\n.alpha  cg-board piece.rook.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_42___ + ");\n}\n.alpha  cg-board piece.queen.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_43___ + ");\n}\n.alpha  cg-board piece.king.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_44___ + ");\n}\n/* Beyer */\n.beyer  cg-board piece.pawn.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_45___ + ");\n}\n.beyer  cg-board piece.bishop.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_46___ + ");\n}\n.beyer  cg-board piece.knight.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_47___ + ");\n}\n.beyer  cg-board piece.rook.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_48___ + ");\n}\n.beyer  cg-board piece.queen.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_49___ + ");\n}\n.beyer  cg-board piece.king.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_50___ + ");\n}\n.beyer  cg-board piece.pawn.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_51___ + ");\n}\n.beyer  cg-board piece.bishop.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_52___ + ");\n}\n.beyer  cg-board piece.knight.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_53___ + ");\n}\n.beyer  cg-board piece.rook.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_54___ + ");\n}\n.beyer  cg-board piece.queen.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_55___ + ");\n}\n.beyer  cg-board piece.king.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_56___ + ");\n}\n/* Case */\n.case  cg-board piece.pawn.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_57___ + ");\n}\n.case  cg-board piece.bishop.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_58___ + ");\n}\n.case  cg-board piece.knight.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_59___ + ");\n}\n.case  cg-board piece.rook.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_60___ + ");\n}\n.case  cg-board piece.queen.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_61___ + ");\n}\n.case  cg-board piece.king.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_62___ + ");\n}\n.case  cg-board piece.pawn.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_63___ + ");\n}\n.case  cg-board piece.bishop.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_64___ + ");\n}\n.case  cg-board piece.knight.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_65___ + ");\n}\n.case  cg-board piece.rook.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_66___ + ");\n}\n.case  cg-board piece.queen.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_67___ + ");\n}\n.case  cg-board piece.king.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_68___ + ");\n}\n/* Chesscom */\n.chesscom  cg-board piece.pawn.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_69___ + ");\n}\n.chesscom  cg-board piece.bishop.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_70___ + ");\n}\n.chesscom  cg-board piece.knight.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_71___ + ");\n}\n.chesscom  cg-board piece.rook.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_72___ + ");\n}\n.chesscom  cg-board piece.queen.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_73___ + ");\n}\n.chesscom  cg-board piece.king.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_74___ + ");\n}\n.chesscom  cg-board piece.pawn.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_75___ + ");\n}\n.chesscom  cg-board piece.bishop.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_76___ + ");\n}\n.chesscom  cg-board piece.knight.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_77___ + ");\n}\n.chesscom  cg-board piece.rook.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_78___ + ");\n}\n.chesscom  cg-board piece.queen.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_79___ + ");\n}\n.chesscom  cg-board piece.king.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_80___ + ");\n}\n/* Condal */\n.condal  cg-board piece.pawn.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_81___ + ");\n}\n.condal  cg-board piece.bishop.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_82___ + ");\n}\n.condal  cg-board piece.knight.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_83___ + ");\n}\n.condal  cg-board piece.rook.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_84___ + ");\n}\n.condal  cg-board piece.queen.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_85___ + ");\n}\n.condal  cg-board piece.king.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_86___ + ");\n}\n.condal  cg-board piece.pawn.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_87___ + ");\n}\n.condal  cg-board piece.bishop.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_88___ + ");\n}\n.condal  cg-board piece.knight.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_89___ + ");\n}\n.condal  cg-board piece.rook.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_90___ + ");\n}\n.condal  cg-board piece.queen.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_91___ + ");\n}\n.condal  cg-board piece.king.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_92___ + ");\n}\n/* Leipzig */\n.leipzig  cg-board piece.pawn.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_93___ + ");\n}\n.leipzig  cg-board piece.bishop.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_94___ + ");\n}\n.leipzig  cg-board piece.knight.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_95___ + ");\n}\n.leipzig  cg-board piece.rook.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_96___ + ");\n}\n.leipzig  cg-board piece.queen.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_97___ + ");\n}\n.leipzig  cg-board piece.king.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_98___ + ");\n}\n.leipzig  cg-board piece.pawn.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_99___ + ");\n}\n.leipzig  cg-board piece.bishop.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_100___ + ");\n}\n.leipzig  cg-board piece.knight.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_101___ + ");\n}\n.leipzig  cg-board piece.rook.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_102___ + ");\n}\n.leipzig  cg-board piece.queen.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_103___ + ");\n}\n.leipzig  cg-board piece.king.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_104___ + ");\n}\n/* Maya */\n.maya  cg-board piece.pawn.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_105___ + ");\n}\n.maya  cg-board piece.bishop.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_106___ + ");\n}\n.maya  cg-board piece.knight.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_107___ + ");\n}\n.maya  cg-board piece.rook.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_108___ + ");\n}\n.maya  cg-board piece.queen.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_109___ + ");\n}\n.maya  cg-board piece.king.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_110___ + ");\n}\n.maya  cg-board piece.pawn.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_111___ + ");\n}\n.maya  cg-board piece.bishop.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_112___ + ");\n}\n.maya  cg-board piece.knight.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_113___ + ");\n}\n.maya  cg-board piece.rook.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_114___ + ");\n}\n.maya  cg-board piece.queen.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_115___ + ");\n}\n.maya  cg-board piece.king.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_116___ + ");\n}\n/* USCF */\n.uscf  cg-board piece.pawn.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_117___ + ");\n}\n.uscf  cg-board piece.bishop.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_118___ + ");\n}\n.uscf  cg-board piece.knight.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_119___ + ");\n}\n.uscf  cg-board piece.rook.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_120___ + ");\n}\n.uscf  cg-board piece.queen.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_121___ + ");\n}\n.uscf  cg-board piece.king.white {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_122___ + ");\n}\n.uscf  cg-board piece.pawn.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_123___ + ");\n}\n.uscf  cg-board piece.bishop.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_124___ + ");\n}\n.uscf  cg-board piece.knight.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_125___ + ");\n}\n.uscf  cg-board piece.rook.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_126___ + ");\n}\n.uscf  cg-board piece.queen.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_127___ + ");\n}\n.uscf  cg-board piece.king.black {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_128___ + ");\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/fontawesome/css/all.css":
/*!*****************************************************************************************************!*\
  !*** /Users/lte/work/PgnViewerJS/node_modules/css-loader/dist/cjs.js!./src/fontawesome/css/all.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../webfonts/fa-solid-900.eot */ "./src/fontawesome/webfonts/fa-solid-900.eot");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../webfonts/fa-solid-900.woff2 */ "./src/fontawesome/webfonts/fa-solid-900.woff2");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../webfonts/fa-solid-900.woff */ "./src/fontawesome/webfonts/fa-solid-900.woff");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../webfonts/fa-solid-900.ttf */ "./src/fontawesome/webfonts/fa-solid-900.ttf");
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../webfonts/fa-solid-900.svg */ "./src/fontawesome/webfonts/fa-solid-900.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "?#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___, { hash: "#fontawesome" });
// Module
exports.push([module.i, "/*!\n * Font Awesome Pro 5.13.1 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license (Commercial License)\n */\n.fa,\n.fas,\n.far,\n.fal,\n.fad,\n.fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1; }\n\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -.0667em; }\n\n.fa-xs {\n  font-size: .75em; }\n\n.fa-sm {\n  font-size: .875em; }\n\n.fa-1x {\n  font-size: 1em; }\n\n.fa-2x {\n  font-size: 2em; }\n\n.fa-3x {\n  font-size: 3em; }\n\n.fa-4x {\n  font-size: 4em; }\n\n.fa-5x {\n  font-size: 5em; }\n\n.fa-6x {\n  font-size: 6em; }\n\n.fa-7x {\n  font-size: 7em; }\n\n.fa-8x {\n  font-size: 8em; }\n\n.fa-9x {\n  font-size: 9em; }\n\n.fa-10x {\n  font-size: 10em; }\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em; }\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0; }\n  .fa-ul > li {\n    position: relative; }\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit; }\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: .1em;\n  padding: .2em .25em .15em; }\n\n.fa-pull-left {\n  float: left; }\n\n.fa-pull-right {\n  float: right; }\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: .3em; }\n\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: .3em; }\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear; }\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8); }\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg); }\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1); }\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1); }\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1); }\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none; }\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em; }\n\n.fa-stack-1x,\n.fa-stack-2x {\n  left: 0;\n  position: absolute;\n  text-align: center;\n  width: 100%; }\n\n.fa-stack-1x {\n  line-height: inherit; }\n\n.fa-stack-2x {\n  font-size: 2em; }\n\n.fa-inverse {\n  color: #fff; }\n\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\nreaders do not read off random characters that represent icons */\n.fa-adjust:before {\n  content: \"\\f042\"; }\n\n.fa-cog:before {\n  content: \"\\f013\"; }\n\n.fa-cut:before {\n  content: \"\\f0c4\"; }\n\n.fa-fast-backward:before {\n  content: \"\\f049\"; }\n\n.fa-fast-forward:before {\n  content: \"\\f050\"; }\n\n.fa-hand-point-up:before {\n  content: \"\\f0a6\"; }\n\n.fa-pause-circle:before {\n  content: \"\\f28b\"; }\n\n.fa-play-circle:before {\n  content: \"\\f144\"; }\n\n.fa-print:before {\n  content: \"\\f02f\"; }\n\n.fa-step-backward:before {\n  content: \"\\f048\"; }\n\n.fa-step-forward:before {\n  content: \"\\f051\"; }\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto; }\n@font-face {\n  font-family: 'Font Awesome 5 Pro';\n  font-style: normal;\n  font-weight: 900;\n  font-display: block;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"svg\"); }\n\n.fa,\n.fas {\n  font-family: 'Font Awesome 5 Pro';\n  font-weight: 900; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*******************************************************************************!*\
  !*** /Users/lte/work/PgnViewerJS/node_modules/css-loader/dist/runtime/api.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/getUrl.js":
/*!**********************************************************************************!*\
  !*** /Users/lte/work/PgnViewerJS/node_modules/css-loader/dist/runtime/getUrl.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!*******************************************************************!*\
  !*** /Users/lte/work/PgnViewerJS/node_modules/process/browser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/setimmediate/setImmediate.js":
/*!*****************************************************************************!*\
  !*** /Users/lte/work/PgnViewerJS/node_modules/setimmediate/setImmediate.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!******************************************************************************************************!*\
  !*** /Users/lte/work/PgnViewerJS/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../node_modules/timers-browserify/main.js":
/*!**************************************************************************!*\
  !*** /Users/lte/work/PgnViewerJS/node_modules/timers-browserify/main.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "../../node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/@mliebelt/pgn-reader/lib/pgn.js":
/*!******************************************************!*\
  !*** ./node_modules/@mliebelt/pgn-reader/lib/pgn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(t,n){ true?module.exports=n():undefined}(global,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/lib/",e(e.s=2)}([function(t,n,e){const r=e(3);t.exports={SyntaxError:r.SyntaxError,parse:function(t,n){if(!n||"pgn"===n.startRule)return r.parse(t.trim());let e=r.parse(t,n);if(n&&"games"===n.startRule){if(!Array.isArray(e))return e;if(0===e.length)return e;let t=e.pop();return(Object.keys(t.tags).length>0||t.moves.length>0)&&e.push(t),e}return e}}},function(t,n,e){var r,o=function(t){var n="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",e=["1-0","0-1","1/2-1/2","*"],r={b:[16,32,17,15],w:[-16,-32,-17,-15]},o={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},i=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],u=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],a={p:0,n:1,b:2,r:3,q:4,k:5},s={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"},c={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},l={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},f={w:[{square:l.a1,flag:c.QSIDE_CASTLE},{square:l.h1,flag:c.KSIDE_CASTLE}],b:[{square:l.a8,flag:c.QSIDE_CASTLE},{square:l.h8,flag:c.KSIDE_CASTLE}]},v=new Array(128),p={w:-1,b:-1},h="w",g={w:0,b:0},m=-1,d=0,b=1,A=[],y={};function E(t){void 0===t&&(t=!1),v=new Array(128),p={w:-1,b:-1},h="w",g={w:0,b:0},m=-1,d=0,b=1,A=[],t||(y={}),w(k())}function C(){S(n)}function S(t,n){void 0===n&&(n=!1);var e=t.split(/\s+/),r=e[0],o=0;if(!N(t).valid)return!1;E(n);for(var i=0;i<r.length;i++){var u=r.charAt(i);if("/"===u)o+=8;else if(-1!=="0123456789".indexOf(u))o+=parseInt(u,10);else{var a=u<"a"?"w":"b";x({type:u.toLowerCase(),color:a},K(o)),o++}}return h=e[1],e[2].indexOf("K")>-1&&(g.w|=c.KSIDE_CASTLE),e[2].indexOf("Q")>-1&&(g.w|=c.QSIDE_CASTLE),e[2].indexOf("k")>-1&&(g.b|=c.KSIDE_CASTLE),e[2].indexOf("q")>-1&&(g.b|=c.QSIDE_CASTLE),m="-"===e[3]?-1:l[e[3]],d=parseInt(e[4],10),b=parseInt(e[5],10),w(k()),!0}function N(t){var n="No errors.",e="FEN string must contain six space-delimited fields.",r="6th field (move number) must be a positive integer.",o="5th field (half move counter) must be a non-negative integer.",i="4th field (en-passant square) is invalid.",u="3rd field (castling availability) is invalid.",a="2nd field (side to move) is invalid.",s="1st field (piece positions) does not contain 8 '/'-delimited rows.",c="1st field (piece positions) is invalid [consecutive numbers].",l="1st field (piece positions) is invalid [invalid piece].",f="1st field (piece positions) is invalid [row too large].",v="Illegal en-passant square",p=t.split(/\s+/);if(6!==p.length)return{valid:!1,error_number:1,error:e};if(isNaN(p[5])||parseInt(p[5],10)<=0)return{valid:!1,error_number:2,error:r};if(isNaN(p[4])||parseInt(p[4],10)<0)return{valid:!1,error_number:3,error:o};if(!/^(-|[abcdefgh][36])$/.test(p[3]))return{valid:!1,error_number:4,error:i};if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(p[2]))return{valid:!1,error_number:5,error:u};if(!/^(w|b)$/.test(p[1]))return{valid:!1,error_number:6,error:a};var h=p[0].split("/");if(8!==h.length)return{valid:!1,error_number:7,error:s};for(var g=0;g<h.length;g++){for(var m=0,d=!1,b=0;b<h[g].length;b++)if(isNaN(h[g][b])){if(!/^[prnbqkPRNBQK]$/.test(h[g][b]))return{valid:!1,error_number:9,error:l};m+=1,d=!1}else{if(d)return{valid:!1,error_number:8,error:c};m+=parseInt(h[g][b],10),d=!0}if(8!==m)return{valid:!1,error_number:10,error:f}}return"3"==p[3][1]&&"w"==p[1]||"6"==p[3][1]&&"b"==p[1]?{valid:!1,error_number:11,error:v}:{valid:!0,error_number:0,error:n}}function k(){for(var t=0,n="",e=l.a8;e<=l.h1;e++){if(null==v[e])t++;else{t>0&&(n+=t,t=0);var r=v[e].color,o=v[e].type;n+="w"===r?o.toUpperCase():o.toLowerCase()}e+1&136&&(t>0&&(n+=t),e!==l.h1&&(n+="/"),t=0,e+=8)}var i="";g.w&c.KSIDE_CASTLE&&(i+="K"),g.w&c.QSIDE_CASTLE&&(i+="Q"),g.b&c.KSIDE_CASTLE&&(i+="k"),g.b&c.QSIDE_CASTLE&&(i+="q"),i=i||"-";var u=-1===m?"-":K(m);return[n,h,i,u,d,b].join(" ")}function T(t){for(var n=0;n<t.length;n+=2)"string"==typeof t[n]&&"string"==typeof t[n+1]&&(y[t[n]]=t[n+1]);return y}function w(t){A.length>0||(t!==n?(y.SetUp="1",y.FEN=t):(delete y.SetUp,delete y.FEN))}function _(t){var n=v[l[t]];return n?{type:n.type,color:n.color}:null}function x(t,n){if(!("type"in t)||!("color"in t))return!1;if(-1==="pnbrqkPNBRQK".indexOf(t.type.toLowerCase()))return!1;if(!(n in l))return!1;var e=l[n];return("k"!=t.type||-1==p[t.color]||p[t.color]==e)&&(v[e]={type:t.type,color:t.color},"k"===t.type&&(p[t.color]=e),w(k()),!0)}function O(t,n,e,r,o){var i={color:h,from:n,to:e,flags:r,piece:t[n].type};return o&&(i.flags|=c.PROMOTION,i.promotion=o),t[e]?i.captured=t[e].type:r&c.EP_CAPTURE&&(i.captured="p"),i}function P(t){function n(t,n,e,r,o){if("p"!==t[e].type||0!==q(r)&&7!==q(r))n.push(O(t,e,r,o));else for(var i=["q","r","b","n"],u=0,a=i.length;u<a;u++)n.push(O(t,e,r,o,i[u]))}var e=[],i=h,u=V(i),a={b:1,w:6},s=l.a8,f=l.h1,d=!1,b=void 0===t||!("legal"in t)||t.legal;if(void 0!==t&&"square"in t){if(!(t.square in l))return[];s=f=l[t.square],d=!0}for(var A=s;A<=f;A++)if(136&A)A+=7;else{var y=v[A];if(null!=y&&y.color===i)if("p"===y.type){var E=A+r[i][0];if(null==v[E]){n(v,e,A,E,c.NORMAL);E=A+r[i][1];a[i]===q(A)&&null==v[E]&&n(v,e,A,E,c.BIG_PAWN)}for(C=2;C<4;C++){136&(E=A+r[i][C])||(null!=v[E]&&v[E].color===u?n(v,e,A,E,c.CAPTURE):E===m&&n(v,e,A,m,c.EP_CAPTURE))}}else for(var C=0,S=o[y.type].length;C<S;C++){var N=o[y.type][C];for(E=A;!(136&(E+=N));){if(null!=v[E]){if(v[E].color===i)break;n(v,e,A,E,c.CAPTURE);break}if(n(v,e,A,E,c.NORMAL),"n"===y.type||"k"===y.type)break}}}if(!d||f===p[i]){if(g[i]&c.KSIDE_CASTLE){var k=(T=p[i])+2;null!=v[T+1]||null!=v[k]||B(u,p[i])||B(u,T+1)||B(u,k)||n(v,e,p[i],k,c.KSIDE_CASTLE)}if(g[i]&c.QSIDE_CASTLE){var T;k=(T=p[i])-2;null!=v[T-1]||null!=v[T-2]||null!=v[T-3]||B(u,p[i])||B(u,T-1)||B(u,k)||n(v,e,p[i],k,c.QSIDE_CASTLE)}}if(!b)return e;var w=[];for(A=0,S=e.length;A<S;A++)M(e[A]),R(i)||w.push(e[A]),F();return w}function U(t,n){var e="";if(t.flags&c.KSIDE_CASTLE)e="O-O";else if(t.flags&c.QSIDE_CASTLE)e="O-O-O";else{var r=function(t,n){for(var e=P({legal:!n}),r=t.from,o=t.to,i=t.piece,u=0,a=0,s=0,c=0,l=e.length;c<l;c++){var f=e[c].from,v=e[c].to,p=e[c].piece;i===p&&r!==f&&o===v&&(u++,q(r)===q(f)&&a++,Q(r)===Q(f)&&s++)}if(u>0)return a>0&&s>0?K(r):s>0?K(r).charAt(1):K(r).charAt(0);return""}(t,n);"p"!==t.piece&&(e+=t.piece.toUpperCase()+r),t.flags&(c.CAPTURE|c.EP_CAPTURE)&&("p"===t.piece&&(e+=K(t.from)[0]),e+="x"),e+=K(t.to),t.flags&c.PROMOTION&&(e+="="+t.promotion.toUpperCase())}return M(t),L()&&(D()?e+="#":e+="+"),F(),e}function G(t){return t.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}function B(t,n){for(var e=l.a8;e<=l.h1;e++)if(136&e)e+=7;else if(null!=v[e]&&v[e].color===t){var r=v[e],o=e-n,s=o+119;if(i[s]&1<<a[r.type]){if("p"===r.type){if(o>0){if("w"===r.color)return!0}else if("b"===r.color)return!0;continue}if("n"===r.type||"k"===r.type)return!0;for(var c=u[s],f=e+c,p=!1;f!==n;){if(null!=v[f]){p=!0;break}f+=c}if(!p)return!0}}return!1}function R(t){return B(V(t),p[t])}function L(){return R(h)}function D(){return L()&&0===P().length}function I(){return!L()&&0===P().length}function W(){for(var t={},n=[],e=0,r=0,o=l.a8;o<=l.h1;o++)if(r=(r+1)%2,136&o)o+=7;else{var i=v[o];i&&(t[i.type]=i.type in t?t[i.type]+1:1,"b"===i.type&&n.push(r),e++)}if(2===e)return!0;if(3===e&&(1===t.b||1===t.n))return!0;if(e===t.b+2){var u=0,a=n.length;for(o=0;o<a;o++)u+=n[o];if(0===u||u===a)return!0}return!1}function $(){for(var t=[],n={},e=!1;;){var r=F();if(!r)break;t.push(r)}for(;;){var o=k().split(" ").slice(0,4).join(" ");if(n[o]=o in n?n[o]+1:1,n[o]>=3&&(e=!0),!t.length)break;M(t.pop())}return e}function M(t){var n=h,e=V(n);if(function(t){A.push({move:t,kings:{b:p.b,w:p.w},turn:h,castling:{b:g.b,w:g.w},ep_square:m,half_moves:d,move_number:b})}(t),v[t.to]=v[t.from],v[t.from]=null,t.flags&c.EP_CAPTURE&&("b"===h?v[t.to-16]=null:v[t.to+16]=null),t.flags&c.PROMOTION&&(v[t.to]={type:t.promotion,color:n}),"k"===v[t.to].type){if(p[v[t.to].color]=t.to,t.flags&c.KSIDE_CASTLE){var r=t.to-1,o=t.to+1;v[r]=v[o],v[o]=null}else if(t.flags&c.QSIDE_CASTLE){r=t.to+1,o=t.to-2;v[r]=v[o],v[o]=null}g[n]=""}if(g[n])for(var i=0,u=f[n].length;i<u;i++)if(t.from===f[n][i].square&&g[n]&f[n][i].flag){g[n]^=f[n][i].flag;break}if(g[e])for(i=0,u=f[e].length;i<u;i++)if(t.to===f[e][i].square&&g[e]&f[e][i].flag){g[e]^=f[e][i].flag;break}m=t.flags&c.BIG_PAWN?"b"===h?t.to-16:t.to+16:-1,"p"===t.piece||t.flags&(c.CAPTURE|c.EP_CAPTURE)?d=0:d++,"b"===h&&b++,h=V(h)}function F(){var t=A.pop();if(null==t)return null;var n=t.move;p=t.kings,h=t.turn,g=t.castling,m=t.ep_square,d=t.half_moves,b=t.move_number;var e,r,o=h,i=V(h);if(v[n.from]=v[n.to],v[n.from].type=n.piece,v[n.to]=null,n.flags&c.CAPTURE)v[n.to]={type:n.captured,color:i};else if(n.flags&c.EP_CAPTURE){var u;u="b"===o?n.to-16:n.to+16,v[u]={type:"p",color:i}}n.flags&(c.KSIDE_CASTLE|c.QSIDE_CASTLE)&&(n.flags&c.KSIDE_CASTLE?(e=n.to+1,r=n.to-1):n.flags&c.QSIDE_CASTLE&&(e=n.to-2,r=n.to+1),v[e]=v[r],v[r]=null);return n}function j(t,n){var e=G(t);if(n){var r=e.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);if(r)var o=r[1],i=r[2],u=r[3],a=r[4]}for(var s=P(),c=0,f=s.length;c<f;c++){if(e===G(U(s[c]))||n&&e===G(U(s[c],!0)))return s[c];if(r&&(!o||o.toLowerCase()==s[c].piece)&&l[i]==s[c].from&&l[u]==s[c].to&&(!a||a.toLowerCase()==s[c].promotion))return s[c]}return null}function q(t){return t>>4}function Q(t){return 15&t}function K(t){var n=Q(t),e=q(t);return"abcdefgh".substring(n,n+1)+"87654321".substring(e,e+1)}function V(t){return"w"===t?"b":"w"}function Y(t){var n=function t(n){var e=n instanceof Array?[]:{};for(var r in n)e[r]="object"==typeof r?t(n[r]):n[r];return e}(t);n.san=U(n,!1),n.to=K(n.to),n.from=K(n.from);var e="";for(var r in c)c[r]&n.flags&&(e+=s[r]);return n.flags=e,n}function H(t){return t.replace(/^\s+|\s+$/g,"")}return S(void 0===t?n:t),{WHITE:"w",BLACK:"b",PAWN:"p",KNIGHT:"n",BISHOP:"b",ROOK:"r",QUEEN:"q",KING:"k",SQUARES:function(){for(var t=[],n=l.a8;n<=l.h1;n++)136&n?n+=7:t.push(K(n));return t}(),FLAGS:s,load:function(t){return S(t)},reset:function(){return C()},moves:function(t){for(var n=P(t),e=[],r=0,o=n.length;r<o;r++)void 0!==t&&"verbose"in t&&t.verbose?e.push(Y(n[r])):e.push(U(n[r],!1));return e},in_check:function(){return L()},in_checkmate:function(){return D()},in_stalemate:function(){return I()},in_draw:function(){return d>=100||I()||W()||$()},insufficient_material:function(){return W()},in_threefold_repetition:function(){return $()},game_over:function(){return d>=100||D()||I()||W()||$()},validate_fen:function(t){return N(t)},fen:function(){return k()},board:function(){for(var t=[],n=[],e=l.a8;e<=l.h1;e++)null==v[e]?n.push(null):n.push({type:v[e].type,color:v[e].color}),e+1&136&&(t.push(n),n=[],e+=8);return t},pgn:function(t){var n="object"==typeof t&&"string"==typeof t.newline_char?t.newline_char:"\n",e="object"==typeof t&&"number"==typeof t.max_width?t.max_width:0,r=[],o=!1;for(var i in y)r.push("["+i+' "'+y[i]+'"]'+n),o=!0;o&&A.length&&r.push(n);for(var u=[];A.length>0;)u.push(F());for(var a=[],s="";u.length>0;){var c=u.pop();A.length||"b"!==c.color?"w"===c.color&&(s.length&&a.push(s),s=b+"."):s=b+". ...",s=s+" "+U(c,!1),M(c)}if(s.length&&a.push(s),void 0!==y.Result&&a.push(y.Result),0===e)return r.join("")+a.join(" ");var l=0;for(i=0;i<a.length;i++)l+a[i].length>e&&0!==i?(" "===r[r.length-1]&&r.pop(),r.push(n),l=0):0!==i&&(r.push(" "),l++),r.push(a[i]),l+=a[i].length;return r.join("")},load_pgn:function(t,n){var r=void 0!==n&&"sloppy"in n&&n.sloppy;function o(t){return t.replace(/\\/g,"\\")}var i="object"==typeof n&&"string"==typeof n.newline_char?n.newline_char:"\r?\n",u=new RegExp("^(\\[((?:"+o(i)+")|.)*\\])(?:"+o(i)+"){2}"),a=u.test(t)?u.exec(t)[1]:"";C();var s=function(t,n){for(var e="object"==typeof n&&"string"==typeof n.newline_char?n.newline_char:"\r?\n",r={},i=t.split(new RegExp(o(e))),u="",a="",s=0;s<i.length;s++)u=i[s].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/,"$1"),a=i[s].replace(/^\[[A-Za-z]+\s"(.*)"\]$/,"$1"),H(u).length>0&&(r[u]=a);return r}(a,n);for(var c in s)T([c,s[c]]);if(!("1"!==s.SetUp||"FEN"in s&&S(s.FEN,!0)))return!1;var l=t.replace(a,"").replace(new RegExp(o(i),"g")," ");l=l.replace(/(\{[^}]+\})+?/g,"");for(var f=/(\([^\(\)]+\))+?/g;f.test(l);)l=l.replace(f,"");var v=H(l=(l=(l=l.replace(/\d+\.(\.\.)?/g,"")).replace(/\.\.\./g,"")).replace(/\$\d+/g,"")).split(new RegExp(/\s+/));v=v.join(",").replace(/,,+/g,",").split(",");for(var p="",h=0;h<v.length-1;h++){if(null==(p=j(v[h],r)))return!1;M(p)}if(p=v[v.length-1],e.indexOf(p)>-1)(function(t){for(var n in t)return!0;return!1})(y)&&void 0===y.Result&&T(["Result",p]);else{if(null==(p=j(p,r)))return!1;M(p)}return!0},header:function(){return T(arguments)},ascii:function(){return function(){for(var t="   +------------------------+\n",n=l.a8;n<=l.h1;n++){if(0===Q(n)&&(t+=" "+"87654321"[q(n)]+" |"),null==v[n])t+=" . ";else{var e=v[n].type;t+=" "+("w"===v[n].color?e.toUpperCase():e.toLowerCase())+" "}n+1&136&&(t+="|\n",n+=8)}return t+="   +------------------------+\n",t+="     a  b  c  d  e  f  g  h\n"}()},turn:function(){return h},move:function(t,n){var e=void 0!==n&&"sloppy"in n&&n.sloppy,r=null;if("string"==typeof t)r=j(t,e);else if("object"==typeof t)for(var o=P(),i=0,u=o.length;i<u;i++)if(t.from===K(o[i].from)&&t.to===K(o[i].to)&&(!("promotion"in o[i])||t.promotion===o[i].promotion)){r=o[i];break}if(!r)return null;var a=Y(r);return M(r),a},undo:function(){var t=F();return t?Y(t):null},clear:function(){return E()},put:function(t,n){return x(t,n)},get:function(t){return _(t)},remove:function(t){return function(t){var n=_(t);return v[l[t]]=null,n&&"k"===n.type&&(p[n.color]=-1),w(k()),n}(t)},perft:function(t){return function t(n){for(var e=P({legal:!1}),r=0,o=h,i=0,u=e.length;i<u;i++){if(M(e[i]),!R(o))if(n-1>0)r+=t(n-1);else r++;F()}return r}(t)},square_color:function(t){if(t in l){var n=l[t];return(q(n)+Q(n))%2==0?"light":"dark"}return null},history:function(t){for(var n=[],e=[],r=(void 0!==t&&"verbose"in t&&t.verbose);A.length>0;)n.push(F());for(;n.length>0;){var o=n.pop();r?e.push(Y(o)):e.push(U(o)),M(o)}return e}}};
/* @license
 * Copyright (c) 2018, Jeff Hlywa (jhlywa@gmail.com)
 * Released under the BSD license
 * https://github.com/jhlywa/chess.js/blob/master/LICENSE
 */n.Chess=o,void 0===(r=function(){return o}.call(n,e,n,t))||(t.exports=r)},function(t,n,e){"use strict";e.r(n),e.d(n,"StringBuilder",(function(){return a})),e.d(n,"Utils",(function(){return s})),e.d(n,"pgnReader",(function(){return c}));var r=e(0),o=e.n(r),i=e(1),u=e.n(i);function a(t){let n={};n.strings=new Array("");let e=function(t){t&&n.strings.push(t)};return e(t),{append:e,toString:function(){return n.strings.join("")},isEmpty:function(){for(let t=0;t<n.strings.length;t++)if(n.strings[t].length>0)return!1;return!0},lastChar:function(){return 0===n.strings.length?null:n.strings[n.strings.length-1].slice(-1)}}}function s(){let t=Array.isArray,n=Math.pow(2,53)-1,e=function(t){const e=o(t);return"number"==typeof e&&e>=0&&e<=n},r=t||function(t){return Array.isArray(t)},o=(i="length",function(t){return null==t?void 0:t[i]});var i;return{pvEach:function(t,n,r){let o,i;if(n=function(t,n,e){if(void 0===n)return t;switch(null==e?3:e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)};case 4:return function(e,r,o,i){return t.call(n,e,r,o,i)}}return function(){return t.apply(n,arguments)}}(n,r),e(t))for(o=0,i=t.length;o<i;o++)n(t[o],o,t);else{let e=Object.keys(t);for(o=0,i=e.length;o<i;o++)n(t[e[o]],e[o],t)}return t},pvIsElement:function(t){return!(!t||1!==t.nodeType)},pvIsEmpty:function(t){return null==t||(e(t)&&(r(t)||function(t){return"[object String]"===toString.call(t)}(t)||function(t){return"[object Arguments]"===toString.call(t)}(t))?0===t.length:0===Object.keys(t).length)}}}const c=function(t){const n={};let e=new s;n.configuration=function(t){return void 0===t.pgn&&(void 0===t.pgnFile?t.pgn="":t.pgn=function(t){const n=new XMLHttpRequest;if(n.open("GET",t,!1),n.send(),200===n.status)return n.responseText}(t.pgnFile)),Object.assign({notation:"short",position:"start",locale:"en"},t)}(t);const r=new u.a,i=function(){"start"===n.configuration.position?r.reset():r.load(n.configuration.position)};n.PGN_TAGS={event:"the name of the tournament or match event",site:"the location of the event",date:"the starting date of the game (format: YYYY.MM.TT)",round:"the playing round ordinal of the game",white:"the player of the white pieces (last name, pre name)",black:"the player of the black pieces (last name, pre name)",result:"the result of the game (1 - 0, 1/2 - 1/2, 0 - 1)",board:"the board number in a team event",eco:"ECO-Opening-Key (ECO = 'Encyclopaedia of Chess Openings')",whitemyelo:"myELO-score white (at the beginning of the game)",blackmyelo:"myELO-score black (at the beginning of the game)",whitedays:"rate in days for white",blackdays:"rate in days for black",mychessno:"identification-no. of the game on the myChess.de - server",annotator:"The person providing notes to the game.",plycount:"String value denoting total number of half-moves played.",timecontrol:"40/7200:3600 (moves per seconds: sudden death seconds)",time:'Time the game started, in "HH:MM:SS" format, in local clock time.',termination:'Gives more details about the termination of the game. It may be "abandoned", "adjudication" (result determined by third-party adjudication), "death", "emergency", "normal", "rules infraction", "time forfeit", or "unterminated".',mode:'"OTB" (over-the-board) "ICS" (Internet Chess Server)',setup:'"0": position is start position, "1": tag FEN defines the position',fen:'Alternative start position, tag SetUp has to be set to "1"'},n.PROMOTIONS={q:"queen",r:"rook",b:"bishop",n:"knight"},n.NAGs=new Array(220),n.NAGs[1]="!",n.NAGs[2]="?",n.NAGs[3]="‼",n.NAGs[4]="⁇",n.NAGs[5]="⁉",n.NAGs[6]="⁈",n.NAGs[7]="□",n.NAGs[10]="=",n.NAGs[13]="∞",n.NAGs[14]="⩲",n.NAGs[15]="⩱",n.NAGs[16]="±",n.NAGs[17]="∓",n.NAGs[18]="+−",n.NAGs[19]="-+",n.NAGs[22]="⨀",n.NAGs[23]="⨀",n.NAGs[32]="⟳",n.NAGs[33]="⟳",n.NAGs[36]="→",n.NAGs[37]="→",n.NAGs[40]="↑",n.NAGs[41]="↑",n.NAGs[44]="=∞",n.NAGs[132]="⇆",n.NAGs[133]="⇆",n.NAGs[136]="⊕",n.NAGs[140]="∆",n.NAGs[146]="N",n.NAGs[220]="D",n.NAGs[221]="D",n.PGN_NAGS={};for(let t=0;t<n.NAGs.length;t++)n.PGN_NAGS[n.NAGs[t]]=t;n.PGN_NAGS["!!"]=3,n.PGN_NAGS["??"]=4,n.PGN_NAGS["!?"]=5,n.PGN_NAGS["?!"]=6;const c=function(t){let e="";if(null==t)return e;for(let r=0;r<t.length;r++){const o=parseInt(t[r].substring(1));if(220!==o){const t=n.NAGs[o];e+=void 0!==t?t:"$"+o}}return e},l=function(t){return"P"===t?"":t},f=function(t){let e=t.notation;if(void 0===e.row)return e.notation;const r=e.fig?l(e.fig):"",o=e.disc?e.disc:"",i=e.strike?e.strike:"",u=e.check?e.check:"",a=e.mate?e.mate:"",s=e.promotion?"="+l(e.promotion.substring(1,2)):"";return"short"===n.configuration.notation?r+o+i+e.col+e.row+s+u+a:"long"===n.configuration.notation?r+t.from+(e.strike?i:"-")+t.to+s+u+a:void 0};let v=function(){if(n.configuration.manyGames)return p(),h(n.games[0]),n;let t=o.a.parse(n.configuration.pgn,{startRule:"game"});return n.games=[t],h(t),n},p=function(){n.games=n.games=o.a.parse(n.configuration.pgn,{startRule:"games"})},h=function(t){let e="number"==typeof t?n.games[t]:t;if(n.tags=e.tags,n.moves=e.moves,function(){if(n.tags.SetUp){const t=n.tags.SetUp;n.configuration.position="0"===t?"start":n.tags.FEN}n.tags.Result&&(n.endGame=n.tags.Result)}(),g(e.moves),n.configuration.startPlay&&n.configuration.hideMovesBefore){let t=E(n.configuration.startPlay),e=S();n.configuration.startPlay=null,n.configuration.hideMovesBefore=!1,n.configuration.pgn=e,n.configuration.position=t,v()}};const g=function(t){const r=t;!function(t){"string"==typeof t[t.length-1]&&(n.endGame=t.pop())}(r),N(r),"b"===n.configuration.position.split(/\s+/)[1]&&m(0)&&"w"===n.moves[0].turn&&e.pvEach(T(),(function(t){t.turn="w"===t.turn?"b":"w"})),e.pvEach(T(),(function(t){for(let n=0;n<t.variations.length;n++)t.variations[n]=t.variations[n][0]}))},m=function(t){return T().length>t},d=function(t){if(!m(t))return!0;const n=T()[t];return null===n||(0!==t||!n)&&void 0},b=function(t){return T()[t]},A=function(t,n){if(0===arguments.length){const t=b(0);A(t,0)}else if(t.variationLevel=n,void 0!==t.next&&A(b(t.next),n),t.variations)for(let e=0;e<t.variations.length;e++)A(t.variations[e],n+1)};let y=function(t){const e=function(t,n){const e=t[n];return t.splice(n,1),e};if(d(t))return;if(0===t)return void(n.moves=[]);let r=b(t);if(C(r)){const t=b(b(r.prev).next).variations;for(let n=0;t.length;n++)if(t[n]===r)return e(t,n),void 0!==r.next&&y(r.next),void(T()[r.index]=null)}if(0===r.variations.length)return void 0!==r.next&&null!==r.next&&y(r.next),n.moves[r.prev].next=null,void(n.moves[t]=null);if(r.variations.length>0){void 0!==r.next&&y(r.next);let o=e(r.variations,0),i=o.variationLevel;n.moves[r.prev].next=o.index,n.moves[t]=null,A(o,i-1)}};let E=function(t){let e=function(t){let r=n.moves[t].fen;return n.moves[t]=null,t<=0||e(t-1),r};if(void 0===t)return;if(null===t)return;if(t<=0)return;let r=e(t-1);return b(t).prev=null,r};const C=function(t){return t.variationLevel>0&&("number"!=typeof t.prev||T()[t.prev].next!==t.index)},S=function(){function t(t){t.isEmpty()||" "===t.lastChar()||t.append(" ")}const e=function(n,e){null!=n&&(t(e),e.append("{"),e.append(n),e.append("}"))},r=function(n,e){t(e),e.append("("),o(n,e),t(e),e.append(")")},o=function(n,i){if(null==n)return;!function(t,n){e(t.commentMove,n)}(n,i),function(n,e){t(e),"w"===n.turn?(e.append(""+n.moveNumber),e.append(".")):C(n)&&(e.append(""+n.moveNumber),e.append("..."))}(n,i),function(t,n){e(t.commentBefore,n)}(n,i),function(n,e){t(e),e.append(n.notation.notation)}(n,i),function(t,n){t.nag&&t.nag.forEach((function(t){n.append(t)}))}(n,i),function(t,n){e(t.commentAfter,n)}(n,i),function(t,n){if((t=>t.commentDiag&&(t.commentDiag.colorArrows&&t.commentDiag.colorArrows.length>0||t.commentDiag.colorFields&&t.commentDiag.colorFields.length>0))(t)){let r=a(""),o=!0;r.append("[%csl "),(t=>t.commentDiag.colorFields||[])(t).forEach(t=>{o?r.append(""):r.append(","),o=!1,r.append(t)}),r.append("]"),o=!0,r.append("[%cal "),(t=>t.commentDiag.colorArrows||[])(t).forEach(t=>{o?r.append(""):r.append(","),o=!1,r.append(t)}),r.append("]"),e(r.toString(),n)}}(n,i),function(t,n){for(let e=0;e<t.variations.length;e++)r(t.variations[e],n)}(n,i);const u=function(t){return t.next?b(t.next):null}(n);o(u,i)},i=a("");let u=0;for(;null===b(u);)u+=1;return s=b(u),o(s,c=i),function(t){n.endGame&&(t.append(" "),t.append(n.endGame))}(c),c.toString();var s,c},N=function(t){n.moves=[];let o=-1;const u=function(t,a,s){let c=null!=s?n.moves[s]:null;e.pvEach(t,(function(t,l){o++,t.variationLevel=a,n.moves.push(t),l>0&&(n.moves[o-1].variationLevel>a?(c=function(t,e){for(;e>=0;){if(n.moves[e].variationLevel===t)return n.moves[e];e--}return null}(a,o-1),s=c.index):(s=o-1,c=n.moves[s])),function(t,n,e,r){null!=r&&(e.prev=n,r.next||(r.next=t)),e.index=t}(o,s,t,c),"number"==typeof t.prev?r.load(b(t.prev).fen):i();let f=r.move(t.notation.notation,{sloppy:!0});if(null===f)throw"No legal move: "+t.notation.notation;let v=r.fen();t.fen=v,t.from=f.from,t.to=f.to,t.notation.notation=f.san,"c"===f.flags&&(t.notation.strike="x"),r.in_checkmate()?t.notation.check="#":r.in_check()&&(t.notation.check="+"),t.moveNumber=function(t){const n=t.split(/\s+/),e=parseInt(n[5],10);return"b"===n[1]?e:e-1}(v),e.pvEach(t.variations,(function(t){u(t,a+1,s)}))}))};u(t,0,null)};const k=function(t,n){if(n.push(t),t.variations)for(let e=0;e<t.variations.length;e++)k(t.variations[e],n);return t.next?k(b(t.next),n):n};function T(){if(void 0!==n.moves)return n.moves;try{v()}catch(t){return[]}return n.moves}return{configuration:n.configuration,deleteMove:y,deleteMovesBefore:E,isDeleted:d,promoteMove:function(t){const n=function(t){return C(t)?t:n(b(t.prev))},e=b(t);if(void 0===e.variationLevel||0===e.variationLevel)return;const r=n(e),o=b(b(r.prev).next);let i;for(let t=0;t<o.variations.length;t++)o.variations[t]===r&&(i=t);if(i>0){let t=o.variations[i-1];o.variations[i-1]=o.variations[i],o.variations[i]=t}else{let t=o;const n=o.variations;b(o.prev).next=r.index,t.variations=r.variations,r.variations=n,r.variations[0]=t}A()},readMoves:g,findMove:function(t){if(!isNaN(t)){t-=1;let n=b(0);for(;t>0;)t-=1,n=b(n.next);return n}let n=T();for(let e of n){if(e.fen.startsWith(t))return e;if(e.notation.notation===t)return e}},getMoves:T,getOrderedMoves:k,getMove:b,getEndGame:function(){return n.endGame},getTags:function(){if(void 0!==n.tags)return n.tags;try{v()}catch(t){return[]}return n.tags},getGames:function(){if(void 0!==n.games)return n.games;try{v()}catch(t){return[]}return n.games},load_one:h,getParser:()=>o.a,write_pgn:S,nag_to_symbol:c,startVariation:C,startMainLine:function(t){return 0===t.variationLevel&&"number"!=typeof t.prev},endVariation:function(t){return t.variationLevel>0&&!t.next},afterMoveWithVariation:function(t){return T()[t.prev]&&T()[t.prev].variations.length>0},changeNag:function(t,e,r){let o=b(e);null==o.nag&&(o.nag=[]);let i="$"===t[0]?t:function(t){const e=n.PGN_NAGS[t];return"undefined"===e?null:"$"+e}(t);if(r)-1===o.nag.indexOf(i)&&o.nag.push(i);else{let t=o.nag.indexOf(i);t>-1&&o.nag.splice(t,1)}},clearNags:function(t){b(t).nag=[]},addMove:function(t,n){function e(t){i();let n=r.move(t);return n?(void 0===b(0)?null:b(0).notation.notation)===n.san?0:function(t){if(void 0===b(0))return null;let n,e=b(0).variations;for(n in e)if(e[n].notation.notation===t.san)return e[n].moveNumber;return null}(n):null}let o=function(t,n){if(null==n)return e(t);let o=b(n);if(void 0===o)return null;r.load(o.fen);let i=r.move(t),u=b(o.next);if(void 0===u)return null;if(u.notation.notation===i.san)return o.next;{let t=b(o.next);for(let n=0;n<t.variations.length;n++){let e=t.variations[n];if(e.notation.notation===i.san)return e.index}}return null}(t,n);if("number"==typeof o)return o;let u={};u.from=t.from,u.to=t.to,u.notation={},u.variations=[],null==n?(i(),u.turn=r.turn(),u.moveNumber=1):(r.load(b(n).fen),u.turn=function(t){return"w"===b(t).turn?"b":"w"}(n),"w"===u.turn?u.moveNumber=b(n).moveNumber+1:u.moveNumber=b(n).moveNumber);let a=r.move(t);u.fen=r.fen(),"O"!==a.san.substring(0,1)?(u.notation.notation=a.san,u.notation.col=a.to.substring(0,1),u.notation.row=a.to.substring(1,2),"p"!==a.piece&&(u.notation.fig=a.piece.charAt(0).toUpperCase()),a.promotion&&(u.notation.promotion="="+a.promotion.toUpperCase()),(a.flags.includes(r.FLAGS.CAPTURE)||a.flags.includes(r.FLAGS.EP_CAPTURE))&&(u.notation.strike="x"),u.notation.ep=a.flags.includes(r.FLAGS.EP_CAPTURE),r.in_check()&&(r.in_checkmate()?u.notation.mate="#":u.notation.check="+")):u.notation.notation=a.san,T().push(u),u.prev=n;let s=T().length-1;return u.index=s,function(t,n,e){let r=b(n);if(void 0===r){if(0===e)return;return b(0).variations.push(t),void(t.variationLevel=1)}r.next?(b(r.next).variations.push(t),t.variationLevel=(r.variationLevel?r.variationLevel:0)+1,"b"===t.turn&&(t.moveNumber=r.moveNumber)):(r.next=e,t.variationLevel=r.variationLevel)}(u,n,s),s},has_diagram_nag:function(t){return void 0!==t.nag&&(null!=t.nag&&t.nag.indexOf("$220")>-1)},PGN_NAGS:n.PGN_NAGS,PROMOTIONS:n.PROMOTIONS,NAGS:n.NAGs,san:f,sanWithNags:function(t){let n=f(t);return t.nag&&(n+=c(t.nag)),n},game:r,load_pgn:v,possibleMoves:function(t){const n={};return t.SQUARES.forEach(e=>{const r=t.moves({square:e,verbose:!0});r.length&&(n[e]=r.map(t=>t.to))}),n},setShapes:function(t,n){t.commentDiag||(t.commentDiag={}),t.commentDiag.colorArrows=[],t.commentDiag.colorFields=[],n.forEach(n=>{if(n.dest){let e=n.brush.slice(0,1).toUpperCase(),r=n.orig+n.dest;t.commentDiag.colorArrows.push(e+r)}else{let e=n.brush.slice(0,1).toUpperCase(),r=n.orig;t.commentDiag.colorFields.push(e+r)}})}}}},function(t,n,e){"use strict";function r(t,n,e,o){this.message=t,this.expected=n,this.found=e,this.location=o,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,r)}!function(t,n){function e(){this.constructor=t}e.prototype=n.prototype,t.prototype=new e}(r,Error),r.buildMessage=function(t,n){var e={literal:function(t){return'"'+o(t.text)+'"'},class:function(t){var n,e="";for(n=0;n<t.parts.length;n++)e+=t.parts[n]instanceof Array?i(t.parts[n][0])+"-"+i(t.parts[n][1]):i(t.parts[n]);return"["+(t.inverted?"^":"")+e+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function r(t){return t.charCodeAt(0).toString(16).toUpperCase()}function o(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+r(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+r(t)}))}function i(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+r(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+r(t)}))}return"Expected "+function(t){var n,r,o,i=new Array(t.length);for(n=0;n<t.length;n++)i[n]=(o=t[n],e[o.type](o));if(i.sort(),i.length>0){for(n=1,r=1;n<i.length;n++)i[n-1]!==i[n]&&(i[r]=i[n],r++);i.length=r}switch(i.length){case 1:return i[0];case 2:return i[0]+" or "+i[1];default:return i.slice(0,-1).join(", ")+", or "+i[i.length-1]}}(t)+" but "+function(t){return t?'"'+o(t)+'"':"end of input"}(n)+" found."},t.exports={SyntaxError:r,parse:function(t,n){n=void 0!==n?n:{};var e,o={},i={pgn:sr,tags:Xe,game:ze,games:function(){var t,n,e,r,i,u,s;if(t=We,tr()!==o){if(n=We,(e=ze())!==o){for(r=[],i=We,(u=nr())!==o&&(s=ze())!==o?(i,u=a(e,s),i=u):(We=i,i=o);i!==o;)r.push(i),i=We,(u=nr())!==o&&(s=ze())!==o?(i,u=a(e,s),i=u):(We=i,i=o);r!==o?(n,e=[e].concat(r),n=e):(We=n,n=o)}else We=n,n=o;n===o&&(n=null),n!==o?(t,t=n):(We=t,t=o)}else We=t,t=o;return t}},u=sr,a=function(t,n){return n},s=qe("Event",!1),c=qe("event",!1),l=qe("Site",!1),f=qe("site",!1),v=qe("Date",!1),p=qe("date",!1),h=qe("Round",!1),g=qe("round",!1),m=qe("White",!1),d=qe("Black",!1),b=qe("black",!1),A=qe("Result",!1),y=qe("result",!1),E=qe("WhiteTitle",!1),C=qe("Whitetitle",!1),S=qe("whitetitle",!1),N=qe("BlackTitle",!1),k=qe("Blacktitle",!1),T=qe("blacktitle",!1),w=qe("WhiteELO",!1),_=qe("WhiteElo",!1),x=qe("Whiteelo",!1),O=qe("whiteelo",!1),P=qe("BlackELO",!1),U=qe("BlackElo",!1),G=qe("Blackelo",!1),B=qe("blackelo",!1),R=qe("WhiteUSCF",!1),L=qe("WhiteUscf",!1),D=qe("Whiteuscf",!1),I=qe("whiteuscf",!1),W=qe("BlackUSCF",!1),$=qe("BlackUscf",!1),M=qe("Blackuscf",!1),F=qe("blackuscf",!1),j=qe("WhiteNA",!1),q=qe("WhiteNa",!1),Q=qe("Whitena",!1),K=qe("whitena",!1),V=qe("BlackNA",!1),Y=qe("BlackNa",!1),H=qe("Blackna",!1),Z=qe("blackna",!1),z=qe("WhiteType",!1),X=qe("Whitetype",!1),J=qe("whitetype",!1),tt=qe("BlackType",!1),nt=qe("Blacktype",!1),et=qe("blacktype",!1),rt=qe("EventDate",!1),ot=qe("Eventdate",!1),it=qe("eventdate",!1),ut=qe("EventSponsor",!1),at=qe("Eventsponsor",!1),st=qe("eventsponsor",!1),ct=qe("Section",!1),lt=qe("section",!1),ft=qe("Stage",!1),vt=qe("stage",!1),pt=qe("Board",!1),ht=qe("board",!1),gt=qe("Opening",!1),mt=qe("opening",!1),dt=qe("Variation",!1),bt=qe("variation",!1),At=qe("SubVariation",!1),yt=qe("Subvariation",!1),Et=qe("subvariation",!1),Ct=qe("ECO",!1),St=qe("Eco",!1),Nt=qe("eco",!1),kt=qe("NIC",!1),Tt=qe("Nic",!1),wt=qe("nic",!1),_t=qe("Time",!1),xt=qe("time",!1),Ot=qe("UTCTime",!1),Pt=qe("UTCtime",!1),Ut=qe("UtcTime",!1),Gt=qe("Utctime",!1),Bt=qe("utctime",!1),Rt=qe("UTCDate",!1),Lt=qe("UTCdate",!1),Dt=qe("UtcDate",!1),It=qe("Utcdate",!1),Wt=qe("utcdate",!1),$t=qe("TimeControl",!1),Mt=qe("Timecontrol",!1),Ft=qe("timecontrol",!1),jt=qe("SetUp",!1),qt=qe("Setup",!1),Qt=qe("setup",!1),Kt=qe("FEN",!1),Vt=qe("Fen",!1),Yt=qe("fen",!1),Ht=qe("Termination",!1),Zt=qe("termination",!1),zt=qe("Annotator",!1),Xt=qe("annotator",!1),Jt=qe("Mode",!1),tn=qe("mode",!1),nn=qe("PlyCount",!1),en=qe("Plycount",!1),rn=qe("plycount",!1),on=Ke("whitespace"),un=/^[ \t\n\r]/,an=Qe([" ","\t","\n","\r"],!1,!1),sn=Ke("string"),cn=function(t){return t.join("")},ln=/^[a-zA-Z0-9]/,fn=Qe([["a","z"],["A","Z"],["0","9"]],!1,!1),vn=qe('"',!1),pn=/^[^\0-\x1F"\\]/,hn=Qe([["\0",""],'"',"\\"],!0,!1),gn=/^[0-9?]/,mn=Qe([["0","9"],"?"],!1,!1),dn=qe(".",!1),bn=qe("1-0",!1),An=qe("1:0",!1),yn=qe("0-1",!1),En=qe("0:1",!1),Cn=qe("1/2-1/2",!1),Sn=qe("*",!1),Nn=qe("-",!1),kn=/^[0-9]/,Tn=Qe([["0","9"]],!1,!1),wn=function(t){return parseInt(t.join(""),10)},_n=/^[^}]/,xn=Qe(["}"],!0,!1),On=qe("%csl",!1),Pn=qe("%cal",!1),Un=qe(",",!1),Gn=function(t,n){var e=[];e.push(t);for(var r=0;r<n.length;r++)e.push(n[r][2]);return e},Bn=qe("Y",!1),Rn=qe("G",!1),Ln=qe("R",!1),Dn=qe("B",!1),In=qe("{",!1),Wn=qe("}",!1),$n=qe("[",!1),Mn=qe("]",!1),Fn=qe("%",!1),jn=qe("clk",!1),qn=qe("egt",!1),Qn=qe("emt",!1),Kn=qe("mct",!1),Vn=qe(":",!1),Yn=qe("(",!1),Hn=qe(")",!1),Zn=Ke("integer"),zn=qe(" ",!1),Xn=qe("O-O-O",!1),Jn=qe("O-O",!1),te=qe("+-",!1),ne=qe("+",!1),ee=function(t){return t[1]},re=qe("$$$",!1),oe=qe("#",!1),ie=qe("=",!1),ue=qe("$",!1),ae=qe("!!",!1),se=qe("??",!1),ce=qe("!?",!1),le=qe("?!",!1),fe=qe("!",!1),ve=qe("?",!1),pe=qe("‼",!1),he=qe("⁇",!1),ge=qe("⁉",!1),me=qe("⁈",!1),de=qe("□",!1),be=qe("∞",!1),Ae=qe("⩲",!1),ye=qe("⩱",!1),Ee=qe("±",!1),Ce=qe("∓",!1),Se=qe("-+",!1),Ne=qe("⨀",!1),ke=qe("⟳",!1),Te=qe("→",!1),we=qe("↑",!1),_e=qe("⇆",!1),xe=qe("D",!1),Oe=/^[RNBQKP]/,Pe=Qe(["R","N","B","Q","K","P"],!1,!1),Ue=/^[RNBQ]/,Ge=Qe(["R","N","B","Q"],!1,!1),Be=/^[a-h]/,Re=Qe([["a","h"]],!1,!1),Le=/^[1-8]/,De=Qe([["1","8"]],!1,!1),Ie=qe("x",!1),We=0,$e=[{line:1,column:1}],Me=0,Fe=[],je=0;if("startRule"in n){if(!(n.startRule in i))throw new Error("Can't start parsing from rule \""+n.startRule+'".');u=i[n.startRule]}function qe(t,n){return{type:"literal",text:t,ignoreCase:n}}function Qe(t,n,e){return{type:"class",parts:t,inverted:n,ignoreCase:e}}function Ke(t){return{type:"other",description:t}}function Ve(n){var e,r=$e[n];if(r)return r;for(e=n-1;!$e[e];)e--;for(r={line:(r=$e[e]).line,column:r.column};e<n;)10===t.charCodeAt(e)?(r.line++,r.column=1):r.column++,e++;return $e[n]=r,r}function Ye(t,n){var e=Ve(t),r=Ve(n);return{start:{offset:t,line:e.line,column:e.column},end:{offset:n,line:r.line,column:r.column}}}function He(t){We<Me||(We>Me&&(Me=We,Fe=[]),Fe.push(t))}function Ze(t,n,e){return new r(r.buildMessage(t,n),t,n,e)}function ze(){var t,n,e;return t=We,(n=Xe())===o&&(n=null),n!==o&&(e=sr())!==o?(t,t=n={tags:n,moves:e[0]}):(We=t,t=o),t}function Xe(){var t,n,e,r,i,u,s,c;if(t=We,tr()!==o){if(n=We,(e=Je())!==o){for(r=[],i=We,tr()!==o&&(u=Je())!==o?(i,i=a(0,u)):(We=i,i=o);i!==o;)r.push(i),i=We,tr()!==o&&(u=Je())!==o?(i,i=a(0,u)):(We=i,i=o);r!==o?(n,c={},[e].concat(r).forEach((function(t){c[t.name]=t.value})),n=e=c):(We=n,n=o)}else We=n,n=o;n===o&&(n=null),n!==o&&(e=tr())!==o?(t,t=null!==(s=n)?s:{}):(We=t,t=o)}else We=t,t=o;return t}function Je(){var n,e;return n=We,Sr()!==o&&(e=function(){var n,e,r;n=We,(e=function(){var n;"Event"===t.substr(We,5)?(n="Event",We+=5):(n=o,0===je&&He(s));n===o&&("event"===t.substr(We,5)?(n="event",We+=5):(n=o,0===je&&He(c)));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,n=e={name:"Event",value:r}):(We=n,n=o);n===o&&(n=We,(e=function(){var n;"Site"===t.substr(We,4)?(n="Site",We+=4):(n=o,0===je&&He(l));n===o&&("site"===t.substr(We,4)?(n="site",We+=4):(n=o,0===je&&He(f)));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"Site",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"Date"===t.substr(We,4)?(n="Date",We+=4):(n=o,0===je&&He(v));n===o&&("date"===t.substr(We,4)?(n="date",We+=4):(n=o,0===je&&He(p)));return n}())!==o&&tr()!==o&&(r=ir())!==o?(n,e=function(t){return{name:"Date",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"Round"===t.substr(We,5)?(n="Round",We+=5):(n=o,0===je&&He(h));n===o&&("round"===t.substr(We,5)?(n="round",We+=5):(n=o,0===je&&He(g)));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"Round",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"WhiteTitle"===t.substr(We,10)?(n="WhiteTitle",We+=10):(n=o,0===je&&He(E));n===o&&("Whitetitle"===t.substr(We,10)?(n="Whitetitle",We+=10):(n=o,0===je&&He(C)),n===o&&("whitetitle"===t.substr(We,10)?(n="whitetitle",We+=10):(n=o,0===je&&He(S))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"WhiteTitle",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"BlackTitle"===t.substr(We,10)?(n="BlackTitle",We+=10):(n=o,0===je&&He(N));n===o&&("Blacktitle"===t.substr(We,10)?(n="Blacktitle",We+=10):(n=o,0===je&&He(k)),n===o&&("blacktitle"===t.substr(We,10)?(n="blacktitle",We+=10):(n=o,0===je&&He(T))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"BlackTitle",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"WhiteELO"===t.substr(We,8)?(n="WhiteELO",We+=8):(n=o,0===je&&He(w));n===o&&("WhiteElo"===t.substr(We,8)?(n="WhiteElo",We+=8):(n=o,0===je&&He(_)),n===o&&("Whiteelo"===t.substr(We,8)?(n="Whiteelo",We+=8):(n=o,0===je&&He(x)),n===o&&("whiteelo"===t.substr(We,8)?(n="whiteelo",We+=8):(n=o,0===je&&He(O)))));return n}())!==o&&tr()!==o&&(r=ur())!==o?(n,e=function(t){return{name:"WhiteELO",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"BlackELO"===t.substr(We,8)?(n="BlackELO",We+=8):(n=o,0===je&&He(P));n===o&&("BlackElo"===t.substr(We,8)?(n="BlackElo",We+=8):(n=o,0===je&&He(U)),n===o&&("Blackelo"===t.substr(We,8)?(n="Blackelo",We+=8):(n=o,0===je&&He(G)),n===o&&("blackelo"===t.substr(We,8)?(n="blackelo",We+=8):(n=o,0===je&&He(B)))));return n}())!==o&&tr()!==o&&(r=ur())!==o?(n,e=function(t){return{name:"BlackELO",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"WhiteUSCF"===t.substr(We,9)?(n="WhiteUSCF",We+=9):(n=o,0===je&&He(R));n===o&&("WhiteUscf"===t.substr(We,9)?(n="WhiteUscf",We+=9):(n=o,0===je&&He(L)),n===o&&("Whiteuscf"===t.substr(We,9)?(n="Whiteuscf",We+=9):(n=o,0===je&&He(D)),n===o&&("whiteuscf"===t.substr(We,9)?(n="whiteuscf",We+=9):(n=o,0===je&&He(I)))));return n}())!==o&&tr()!==o&&(r=ar())!==o?(n,e=function(t){return{name:"WhiteUSCF",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"BlackUSCF"===t.substr(We,9)?(n="BlackUSCF",We+=9):(n=o,0===je&&He(W));n===o&&("BlackUscf"===t.substr(We,9)?(n="BlackUscf",We+=9):(n=o,0===je&&He($)),n===o&&("Blackuscf"===t.substr(We,9)?(n="Blackuscf",We+=9):(n=o,0===je&&He(M)),n===o&&("blackuscf"===t.substr(We,9)?(n="blackuscf",We+=9):(n=o,0===je&&He(F)))));return n}())!==o&&tr()!==o&&(r=ar())!==o?(n,e=function(t){return{name:"BlackUSCF",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"WhiteNA"===t.substr(We,7)?(n="WhiteNA",We+=7):(n=o,0===je&&He(j));n===o&&("WhiteNa"===t.substr(We,7)?(n="WhiteNa",We+=7):(n=o,0===je&&He(q)),n===o&&("Whitena"===t.substr(We,7)?(n="Whitena",We+=7):(n=o,0===je&&He(Q)),n===o&&("whitena"===t.substr(We,7)?(n="whitena",We+=7):(n=o,0===je&&He(K)))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"WhiteNA",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"BlackNA"===t.substr(We,7)?(n="BlackNA",We+=7):(n=o,0===je&&He(V));n===o&&("BlackNa"===t.substr(We,7)?(n="BlackNa",We+=7):(n=o,0===je&&He(Y)),n===o&&("Blackna"===t.substr(We,7)?(n="Blackna",We+=7):(n=o,0===je&&He(H)),n===o&&("blackna"===t.substr(We,7)?(n="blackna",We+=7):(n=o,0===je&&He(Z)))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"BlackNA",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"WhiteType"===t.substr(We,9)?(n="WhiteType",We+=9):(n=o,0===je&&He(z));n===o&&("Whitetype"===t.substr(We,9)?(n="Whitetype",We+=9):(n=o,0===je&&He(X)),n===o&&("whitetype"===t.substr(We,9)?(n="whitetype",We+=9):(n=o,0===je&&He(J))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"WhiteType",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"BlackType"===t.substr(We,9)?(n="BlackType",We+=9):(n=o,0===je&&He(tt));n===o&&("Blacktype"===t.substr(We,9)?(n="Blacktype",We+=9):(n=o,0===je&&He(nt)),n===o&&("blacktype"===t.substr(We,9)?(n="blacktype",We+=9):(n=o,0===je&&He(et))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"BlackType",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"White"===t.substr(We,5)?(n="White",We+=5):(n=o,0===je&&He(m));n===o&&("White"===t.substr(We,5)?(n="White",We+=5):(n=o,0===je&&He(m)));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"White",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"Black"===t.substr(We,5)?(n="Black",We+=5):(n=o,0===je&&He(d));n===o&&("black"===t.substr(We,5)?(n="black",We+=5):(n=o,0===je&&He(b)));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"Black",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"Result"===t.substr(We,6)?(n="Result",We+=6):(n=o,0===je&&He(A));n===o&&("result"===t.substr(We,6)?(n="result",We+=6):(n=o,0===je&&He(y)));return n}())!==o&&tr()!==o&&(r=function(){var n,e;n=We,rr()!==o&&(e=function(){var n,e;n=We,"1-0"===t.substr(We,3)?(e="1-0",We+=3):(e=o,0===je&&He(bn));e!==o&&(n,e=e);(n=e)===o&&(n=We,"1:0"===t.substr(We,3)?(e="1:0",We+=3):(e=o,0===je&&He(An)),e!==o&&(n,e=e),(n=e)===o&&(n=We,"0-1"===t.substr(We,3)?(e="0-1",We+=3):(e=o,0===je&&He(yn)),e!==o&&(n,e=e),(n=e)===o&&(n=We,"0:1"===t.substr(We,3)?(e="0:1",We+=3):(e=o,0===je&&He(En)),e!==o&&(n,e=e),(n=e)===o&&(n=We,"1/2-1/2"===t.substr(We,7)?(e="1/2-1/2",We+=7):(e=o,0===je&&He(Cn)),e!==o&&(n,e=e),(n=e)===o&&(n=We,42===t.charCodeAt(We)?(e="*",We++):(e=o,0===je&&He(Sn)),e!==o&&(n,e=e),n=e)))));return n}())!==o&&rr()!==o?(n,n=e):(We=n,n=o);return n}())!==o?(n,e=function(t){return{name:"Result",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"EventDate"===t.substr(We,9)?(n="EventDate",We+=9):(n=o,0===je&&He(rt));n===o&&("Eventdate"===t.substr(We,9)?(n="Eventdate",We+=9):(n=o,0===je&&He(ot)),n===o&&("eventdate"===t.substr(We,9)?(n="eventdate",We+=9):(n=o,0===je&&He(it))));return n}())!==o&&tr()!==o&&(r=ir())!==o?(n,e=function(t){return{name:"EventDate",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"EventSponsor"===t.substr(We,12)?(n="EventSponsor",We+=12):(n=o,0===je&&He(ut));n===o&&("Eventsponsor"===t.substr(We,12)?(n="Eventsponsor",We+=12):(n=o,0===je&&He(at)),n===o&&("eventsponsor"===t.substr(We,12)?(n="eventsponsor",We+=12):(n=o,0===je&&He(st))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"EventSponsor",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"Section"===t.substr(We,7)?(n="Section",We+=7):(n=o,0===je&&He(ct));n===o&&("section"===t.substr(We,7)?(n="section",We+=7):(n=o,0===je&&He(lt)));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"Section",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"Stage"===t.substr(We,5)?(n="Stage",We+=5):(n=o,0===je&&He(ft));n===o&&("stage"===t.substr(We,5)?(n="stage",We+=5):(n=o,0===je&&He(vt)));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"Stage",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"Board"===t.substr(We,5)?(n="Board",We+=5):(n=o,0===je&&He(pt));n===o&&("board"===t.substr(We,5)?(n="board",We+=5):(n=o,0===je&&He(ht)));return n}())!==o&&tr()!==o&&(r=ar())!==o?(n,e=function(t){return{name:"Board",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"Opening"===t.substr(We,7)?(n="Opening",We+=7):(n=o,0===je&&He(gt));n===o&&("opening"===t.substr(We,7)?(n="opening",We+=7):(n=o,0===je&&He(mt)));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"Opening",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"Variation"===t.substr(We,9)?(n="Variation",We+=9):(n=o,0===je&&He(dt));n===o&&("variation"===t.substr(We,9)?(n="variation",We+=9):(n=o,0===je&&He(bt)));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"Variation",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"SubVariation"===t.substr(We,12)?(n="SubVariation",We+=12):(n=o,0===je&&He(At));n===o&&("Subvariation"===t.substr(We,12)?(n="Subvariation",We+=12):(n=o,0===je&&He(yt)),n===o&&("subvariation"===t.substr(We,12)?(n="subvariation",We+=12):(n=o,0===je&&He(Et))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"SubVariation",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"ECO"===t.substr(We,3)?(n="ECO",We+=3):(n=o,0===je&&He(Ct));n===o&&("Eco"===t.substr(We,3)?(n="Eco",We+=3):(n=o,0===je&&He(St)),n===o&&("eco"===t.substr(We,3)?(n="eco",We+=3):(n=o,0===je&&He(Nt))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"ECO",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"NIC"===t.substr(We,3)?(n="NIC",We+=3):(n=o,0===je&&He(kt));n===o&&("Nic"===t.substr(We,3)?(n="Nic",We+=3):(n=o,0===je&&He(Tt)),n===o&&("nic"===t.substr(We,3)?(n="nic",We+=3):(n=o,0===je&&He(wt))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"NIC",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"Time"===t.substr(We,4)?(n="Time",We+=4):(n=o,0===je&&He(_t));n===o&&("time"===t.substr(We,4)?(n="time",We+=4):(n=o,0===je&&He(xt)));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"Time",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"UTCTime"===t.substr(We,7)?(n="UTCTime",We+=7):(n=o,0===je&&He(Ot));n===o&&("UTCtime"===t.substr(We,7)?(n="UTCtime",We+=7):(n=o,0===je&&He(Pt)),n===o&&("UtcTime"===t.substr(We,7)?(n="UtcTime",We+=7):(n=o,0===je&&He(Ut)),n===o&&("Utctime"===t.substr(We,7)?(n="Utctime",We+=7):(n=o,0===je&&He(Gt)),n===o&&("utctime"===t.substr(We,7)?(n="utctime",We+=7):(n=o,0===je&&He(Bt))))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"UTCTime",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"UTCDate"===t.substr(We,7)?(n="UTCDate",We+=7):(n=o,0===je&&He(Rt));n===o&&("UTCdate"===t.substr(We,7)?(n="UTCdate",We+=7):(n=o,0===je&&He(Lt)),n===o&&("UtcDate"===t.substr(We,7)?(n="UtcDate",We+=7):(n=o,0===je&&He(Dt)),n===o&&("Utcdate"===t.substr(We,7)?(n="Utcdate",We+=7):(n=o,0===je&&He(It)),n===o&&("utcdate"===t.substr(We,7)?(n="utcdate",We+=7):(n=o,0===je&&He(Wt))))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"UTCDate",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"TimeControl"===t.substr(We,11)?(n="TimeControl",We+=11):(n=o,0===je&&He($t));n===o&&("Timecontrol"===t.substr(We,11)?(n="Timecontrol",We+=11):(n=o,0===je&&He(Mt)),n===o&&("timecontrol"===t.substr(We,11)?(n="timecontrol",We+=11):(n=o,0===je&&He(Ft))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"TimeControl",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"SetUp"===t.substr(We,5)?(n="SetUp",We+=5):(n=o,0===je&&He(jt));n===o&&("Setup"===t.substr(We,5)?(n="Setup",We+=5):(n=o,0===je&&He(qt)),n===o&&("setup"===t.substr(We,5)?(n="setup",We+=5):(n=o,0===je&&He(Qt))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"SetUp",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"FEN"===t.substr(We,3)?(n="FEN",We+=3):(n=o,0===je&&He(Kt));n===o&&("Fen"===t.substr(We,3)?(n="Fen",We+=3):(n=o,0===je&&He(Vt)),n===o&&("fen"===t.substr(We,3)?(n="fen",We+=3):(n=o,0===je&&He(Yt))));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"FEN",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"Termination"===t.substr(We,11)?(n="Termination",We+=11):(n=o,0===je&&He(Ht));n===o&&("termination"===t.substr(We,11)?(n="termination",We+=11):(n=o,0===je&&He(Zt)));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"Termination",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"Annotator"===t.substr(We,9)?(n="Annotator",We+=9):(n=o,0===je&&He(zt));n===o&&("annotator"===t.substr(We,9)?(n="annotator",We+=9):(n=o,0===je&&He(Xt)));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"Annotator",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"Mode"===t.substr(We,4)?(n="Mode",We+=4):(n=o,0===je&&He(Jt));n===o&&("mode"===t.substr(We,4)?(n="mode",We+=4):(n=o,0===je&&He(tn)));return n}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t){return{name:"Mode",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n;"PlyCount"===t.substr(We,8)?(n="PlyCount",We+=8):(n=o,0===je&&He(nn));n===o&&("Plycount"===t.substr(We,8)?(n="Plycount",We+=8):(n=o,0===je&&He(en)),n===o&&("plycount"===t.substr(We,8)?(n="plycount",We+=8):(n=o,0===je&&He(rn))));return n}())!==o&&tr()!==o&&(r=ar())!==o?(n,e=function(t){return{name:"PlyCount",value:t}}(r),n=e):(We=n,n=o),n===o&&(n=We,(e=function(){var n,e,r;n=We,e=[],ln.test(t.charAt(We))?(r=t.charAt(We),We++):(r=o,0===je&&He(fn));for(;r!==o;)e.push(r),ln.test(t.charAt(We))?(r=t.charAt(We),We++):(r=o,0===je&&He(fn));e!==o&&(n,e=cn(e));return n=e}())!==o&&tr()!==o&&(r=er())!==o?(n,e=function(t,n){return{name:t,value:n}}(e,r),n=e):(We=n,n=o))))))))))))))))))))))))))))))))))))));return n}())!==o&&Nr()!==o?(n,n=e):(We=n,n=o),n}function tr(){var n,e;for(je++,n=[],un.test(t.charAt(We))?(e=t.charAt(We),We++):(e=o,0===je&&He(an));e!==o;)n.push(e),un.test(t.charAt(We))?(e=t.charAt(We),We++):(e=o,0===je&&He(an));return je--,n===o&&(e=o,0===je&&He(on)),n}function nr(){var n,e;if(n=[],un.test(t.charAt(We))?(e=t.charAt(We),We++):(e=o,0===je&&He(an)),e!==o)for(;e!==o;)n.push(e),un.test(t.charAt(We))?(e=t.charAt(We),We++):(e=o,0===je&&He(an));else n=o;return n}function er(){var t,n,e;if(je++,t=We,rr()!==o){for(n=[],e=or();e!==o;)n.push(e),e=or();n!==o&&(e=rr())!==o?(t,t=cn(n)):(We=t,t=o)}else We=t,t=o;return je--,t===o&&(o,0===je&&He(sn)),t}function rr(){var n;return 34===t.charCodeAt(We)?(n='"',We++):(n=o,0===je&&He(vn)),n}function or(){var n;return pn.test(t.charAt(We))?(n=t.charAt(We),We++):(n=o,0===je&&He(hn)),n}function ir(){var n,e,r,i,u,a,s,c,l,f;return n=We,rr()!==o?(e=We,gn.test(t.charAt(We))?(r=t.charAt(We),We++):(r=o,0===je&&He(mn)),r!==o?(gn.test(t.charAt(We))?(i=t.charAt(We),We++):(i=o,0===je&&He(mn)),i!==o?(gn.test(t.charAt(We))?(u=t.charAt(We),We++):(u=o,0===je&&He(mn)),u!==o?(gn.test(t.charAt(We))?(a=t.charAt(We),We++):(a=o,0===je&&He(mn)),a!==o?e=r=[r,i,u,a]:(We=e,e=o)):(We=e,e=o)):(We=e,e=o)):(We=e,e=o),e!==o?(46===t.charCodeAt(We)?(r=".",We++):(r=o,0===je&&He(dn)),r!==o?(i=We,gn.test(t.charAt(We))?(u=t.charAt(We),We++):(u=o,0===je&&He(mn)),u!==o?(gn.test(t.charAt(We))?(a=t.charAt(We),We++):(a=o,0===je&&He(mn)),a!==o?i=u=[u,a]:(We=i,i=o)):(We=i,i=o),i!==o?(46===t.charCodeAt(We)?(u=".",We++):(u=o,0===je&&He(dn)),u!==o?(a=We,gn.test(t.charAt(We))?(s=t.charAt(We),We++):(s=o,0===je&&He(mn)),s!==o?(gn.test(t.charAt(We))?(c=t.charAt(We),We++):(c=o,0===je&&He(mn)),c!==o?a=s=[s,c]:(We=a,a=o)):(We=a,a=o),a!==o&&(s=rr())!==o?(n,l=i,f=a,n=e.join("")+"."+l.join("")+"."+f.join("")):(We=n,n=o)):(We=n,n=o)):(We=n,n=o)):(We=n,n=o)):(We=n,n=o)):(We=n,n=o),n}function ur(){var n,e,r,i;return(n=ar())===o&&(n=We,(e=rr())!==o?(45===t.charCodeAt(We)?(r="-",We++):(r=o,0===je&&He(Nn)),r!==o&&(i=rr())!==o?n=e=[e,r,i]:(We=n,n=o)):(We=n,n=o)),n}function ar(){var n,e,r;if(n=We,rr()!==o){if(e=[],kn.test(t.charAt(We))?(r=t.charAt(We),We++):(r=o,0===je&&He(Tn)),r!==o)for(;r!==o;)e.push(r),kn.test(t.charAt(We))?(r=t.charAt(We),We++):(r=o,0===je&&He(Tn));else e=o;e!==o&&(r=rr())!==o?(n,n=wn(e)):(We=n,n=o)}else We=n,n=o;return n}function sr(){var t,n,e,r,i;return t=We,(n=function(){var t,n;t=We,(n=lr())!==o&&(t,n=n);return t=n}())!==o?((e=fr())===o&&(e=null),e!==o?(t,r=n,(i=e||[]).unshift(r),t=n=i):(We=t,t=o)):(We=t,t=o),t===o&&(t=We,(n=cr())!==o?((e=lr())===o&&(e=null),e!==o?(t,t=n=function(t,n){var e=n||[];return e.unshift(t),e}(n,e)):(We=t,t=o)):(We=t,t=o),t===o&&(t=We,(n=tr())!==o&&(t,n=[[]]),t=n)),t}function cr(){var t,n;return t=We,(n=fr())!==o&&(t,n=n),t=n}function lr(){var t,n,e,r,i,u,a,s,c,l,f,v,p,h,g,m,d,b,A;return t=We,tr()!==o?((n=pr())===o&&(n=null),n!==o&&tr()!==o?((e=_r())===o&&(e=null),e!==o&&tr()!==o?((r=pr())===o&&(r=null),r!==o&&tr()!==o&&(i=Ur())!==o&&tr()!==o?((u=Rr())===o&&(u=null),u!==o&&tr()!==o?((a=pr())===o&&(a=null),a!==o&&tr()!==o?((s=gr())===o&&(s=null),s!==o&&tr()!==o?((c=function t(){var n,e,r,i;n=We,Tr()!==o&&(e=lr())!==o&&wr()!==o&&tr()!==o?((r=t())===o&&(r=null),r!==o&&tr()!==o?((i=_r())===o&&(i=null),i!==o?(n,u=e,(a=r||[]).unshift(u),n=a):(We=n,n=o)):(We=n,n=o)):(We=n,n=o);var u,a;return n}())===o&&(c=null),c!==o?((l=fr())===o&&(l=null),l!==o?(t,f=n,v=r,p=i,h=u,g=a,m=s,d=c,b=l||[],(A={turn:"w"}).moveNumber=e,A.notation=p,A.commentBefore=v,A.commentAfter=g,A.commentMove=f,A.variations=d||[],A.nag=h||null,b.unshift(A),A.commentDiag=m,t=b):(We=t,t=o)):(We=t,t=o)):(We=t,t=o)):(We=t,t=o)):(We=t,t=o)):(We=t,t=o)):(We=t,t=o)):(We=t,t=o)):(We=t,t=o),t===o&&(t=vr()),t}function fr(){var t,n,e,r,i,u,a,s,c,l,f,v,p,h,g,m,d,b,A;return t=We,tr()!==o?((n=pr())===o&&(n=null),n!==o&&tr()!==o?((e=_r())===o&&(e=null),e!==o&&tr()!==o?((r=pr())===o&&(r=null),r!==o&&tr()!==o&&(i=Ur())!==o&&tr()!==o?((u=Rr())===o&&(u=null),u!==o&&tr()!==o?((a=pr())===o&&(a=null),a!==o&&tr()!==o?((s=gr())===o&&(s=null),s!==o&&tr()!==o?((c=function t(){var n,e,r;n=We,Tr()!==o&&(e=cr())!==o&&wr()!==o&&tr()!==o?((r=t())===o&&(r=null),r!==o?(n,i=e,(u=r||[]).unshift(i),n=u):(We=n,n=o)):(We=n,n=o);var i,u;return n}())===o&&(c=null),c!==o?((l=lr())===o&&(l=null),l!==o?(t,f=n,v=r,p=i,h=u,g=a,m=s,d=c,b=l||[],(A={turn:"b"}).moveNumber=e,A.notation=p,A.commentBefore=v,A.commentAfter=g,A.commentMove=f,A.variations=d||[],b.unshift(A),A.nag=h||null,A.commentDiag=m,t=b):(We=t,t=o)):(We=t,t=o)):(We=t,t=o)):(We=t,t=o)):(We=t,t=o)):(We=t,t=o)):(We=t,t=o)):(We=t,t=o)):(We=t,t=o),t===o&&(t=vr()),t}function vr(){var n,e;return n=We,"1:0"===t.substr(We,3)?(e="1:0",We+=3):(e=o,0===je&&He(An)),e!==o&&(n,e=["1:0"]),(n=e)===o&&(n=We,"0:1"===t.substr(We,3)?(e="0:1",We+=3):(e=o,0===je&&He(En)),e!==o&&(n,e=["0:1"]),(n=e)===o&&(n=We,"1-0"===t.substr(We,3)?(e="1-0",We+=3):(e=o,0===je&&He(bn)),e!==o&&(n,e=["1-0"]),(n=e)===o&&(n=We,"0-1"===t.substr(We,3)?(e="0-1",We+=3):(e=o,0===je&&He(yn)),e!==o&&(n,e=["0-1"]),(n=e)===o&&(n=We,"1/2-1/2"===t.substr(We,7)?(e="1/2-1/2",We+=7):(e=o,0===je&&He(Cn)),e!==o&&(n,e=["1/2-1/2"]),(n=e)===o&&(n=We,42===t.charCodeAt(We)?(e="*",We++):(e=o,0===je&&He(Sn)),e!==o&&(n,e=["*"]),n=e))))),n}function pr(){var t,n,e,r,i,u;if(t=We,(n=hr())!==o){for(e=[],r=We,(i=tr())!==o&&(u=hr())!==o?r=i=[i,u]:(We=r,r=o);r!==o;)e.push(r),r=We,(i=tr())!==o&&(u=hr())!==o?r=i=[i,u]:(We=r,r=o);e!==o?(t,t=n=function(t,n){for(var e=t,r=0;r<n.length;r++)e+=" "+n[r][1];return e}(n,e)):(We=t,t=o)}else We=t,t=o;return t}function hr(){var n,e,r,i,u;if(n=We,e=We,je++,r=gr(),je--,r===o?e=void 0:(We=e,e=o),e!==o)if((r=Er())!==o){if(i=[],_n.test(t.charAt(We))?(u=t.charAt(We),We++):(u=o,0===je&&He(xn)),u!==o)for(;u!==o;)i.push(u),_n.test(t.charAt(We))?(u=t.charAt(We),We++):(u=o,0===je&&He(xn));else i=o;i!==o&&(u=Cr())!==o?(n,n=e=i.join("").trim()):(We=n,n=o)}else We=n,n=o;else We=n,n=o;return n}function gr(){var t,n;return t=We,Er()!==o&&tr()!==o&&(n=function(){var t,n,e,r;if(t=We,(n=mr())!==o)if(tr()!==o){for(e=[],r=mr();r!==o;)e.push(r),r=mr();e!==o?(t,n=function(t,n){if(n){var e=n[0];return{...t,...e}}return t}(n,e),t=n):(We=t,t=o)}else We=t,t=o;else We=t,t=o;return t}())!==o&&tr()!==o&&Cr()!==o?(t,t=n):(We=t,t=o),t}function mr(){var n,e,r;return n=We,(e=function(){var n,e,r;n=We,Sr()!==o&&tr()!==o?("%csl"===t.substr(We,4)?(e="%csl",We+=4):(e=o,0===je&&He(On)),e!==o&&Or()!==o&&(r=function(){var n,e,r,i,u,a,s;if(n=We,(e=dr())!==o)if(tr()!==o){for(r=[],i=We,44===t.charCodeAt(We)?(u=",",We++):(u=o,0===je&&He(Un)),u!==o&&(a=tr())!==o&&(s=dr())!==o?i=u=[u,a,s]:(We=i,i=o);i!==o;)r.push(i),i=We,44===t.charCodeAt(We)?(u=",",We++):(u=o,0===je&&He(Un)),u!==o&&(a=tr())!==o&&(s=dr())!==o?i=u=[u,a,s]:(We=i,i=o);r!==o?(n,e=Gn(e,r),n=e):(We=n,n=o)}else We=n,n=o;else We=n,n=o;return n}())!==o&&tr()!==o&&Nr()!==o?(n,n=r):(We=n,n=o)):(We=n,n=o);return n}())!==o&&(n,(r={}).colorFields=e,e=r),(n=e)===o&&(n=We,(e=function(){var n,e,r;n=We,Sr()!==o&&tr()!==o?("%cal"===t.substr(We,4)?(e="%cal",We+=4):(e=o,0===je&&He(Pn)),e!==o&&Or()!==o&&(r=function(){var n,e,r,i,u,a,s;if(n=We,(e=br())!==o)if(tr()!==o){for(r=[],i=We,44===t.charCodeAt(We)?(u=",",We++):(u=o,0===je&&He(Un)),u!==o&&(a=tr())!==o&&(s=br())!==o?i=u=[u,a,s]:(We=i,i=o);i!==o;)r.push(i),i=We,44===t.charCodeAt(We)?(u=",",We++):(u=o,0===je&&He(Un)),u!==o&&(a=tr())!==o&&(s=br())!==o?i=u=[u,a,s]:(We=i,i=o);r!==o?(n,e=Gn(e,r),n=e):(We=n,n=o)}else We=n,n=o;else We=n,n=o;return n}())!==o&&tr()!==o&&Nr()!==o?(n,n=r):(We=n,n=o)):(We=n,n=o);return n}())!==o&&(n,e=function(t){var n={};return n.colorArrows=t,n}(e)),(n=e)===o&&(n=We,(e=function(){var n,e,r,i,u;n=We,(e=Sr())!==o&&tr()!==o?(37===t.charCodeAt(We)?(r="%",We++):(r=o,0===je&&He(Fn)),r!==o&&(i=function(){var n,e;n=We,"clk"===t.substr(We,3)?(e="clk",We+=3):(e=o,0===je&&He(jn));e!==o&&(n,e="clk");(n=e)===o&&(n=We,"egt"===t.substr(We,3)?(e="egt",We+=3):(e=o,0===je&&He(qn)),e!==o&&(n,e="egt"),(n=e)===o&&(n=We,"emt"===t.substr(We,3)?(e="emt",We+=3):(e=o,0===je&&He(Qn)),e!==o&&(n,e="emt"),(n=e)===o&&(n=We,"mct"===t.substr(We,3)?(e="mct",We+=3):(e=o,0===je&&He(Kn)),e!==o&&(n,e="mct"),n=e)));return n}())!==o&&Or()!==o&&(u=function(){var n,e,r,i,u,a,s,c,l;n=We,(e=kr())!==o?((r=kr())===o&&(r=null),r!==o?(58===t.charCodeAt(We)?(i=":",We++):(i=o,0===je&&He(Vn)),i!==o&&(u=kr())!==o&&(a=kr())!==o?(58===t.charCodeAt(We)?(s=":",We++):(s=o,0===je&&He(Vn)),s!==o&&(c=kr())!==o&&(l=kr())!==o?(n,e=function(t,n,e,r,o,i){var u=t;return n&&(u+=n),u+=":"+e+r+":"+o+i}(e,r,u,a,c,l),n=e):(We=n,n=o)):(We=n,n=o)):(We=n,n=o)):(We=n,n=o);return n}())!==o&&tr()!==o&&Nr()!==o?(n,e=function(t,n){var e={};return e.type=t,e.value=n,e}(i,u),n=e):(We=n,n=o)):(We=n,n=o);return n}())!==o&&(n,e=function(t){var n={};return n.clock=t,n}(e)),n=e)),n}function dr(){var t,n,e;return t=We,(n=Ar())!==o&&(e=yr())!==o?(t,t=n=n+e):(We=t,t=o),t}function br(){var t,n,e,r;return t=We,(n=Ar())!==o&&(e=yr())!==o&&(r=yr())!==o?(t,t=n=n+e+r):(We=t,t=o),t}function Ar(){var n,e;return n=We,89===t.charCodeAt(We)?(e="Y",We++):(e=o,0===je&&He(Bn)),e!==o&&(n,e="Y"),(n=e)===o&&(n=We,71===t.charCodeAt(We)?(e="G",We++):(e=o,0===je&&He(Rn)),e!==o&&(n,e="G"),(n=e)===o&&(n=We,82===t.charCodeAt(We)?(e="R",We++):(e=o,0===je&&He(Ln)),e!==o&&(n,e="R"),(n=e)===o&&(n=We,66===t.charCodeAt(We)?(e="B",We++):(e=o,0===je&&He(Dn)),e!==o&&(n,e="B"),n=e))),n}function yr(){var t,n,e;return t=We,(n=Ir())!==o&&(e=Wr())!==o?(t,t=n=n+e):(We=t,t=o),t}function Er(){var n;return 123===t.charCodeAt(We)?(n="{",We++):(n=o,0===je&&He(In)),n}function Cr(){var n;return 125===t.charCodeAt(We)?(n="}",We++):(n=o,0===je&&He(Wn)),n}function Sr(){var n;return 91===t.charCodeAt(We)?(n="[",We++):(n=o,0===je&&He($n)),n}function Nr(){var n;return 93===t.charCodeAt(We)?(n="]",We++):(n=o,0===je&&He(Mn)),n}function kr(){var n,e;return n=We,kn.test(t.charAt(We))?(e=t.charAt(We),We++):(e=o,0===je&&He(Tn)),e!==o&&(n,e=e),n=e}function Tr(){var n;return 40===t.charCodeAt(We)?(n="(",We++):(n=o,0===je&&He(Yn)),n}function wr(){var n;return 41===t.charCodeAt(We)?(n=")",We++):(n=o,0===je&&He(Hn)),n}function _r(){var t,n,e,r;if(t=We,(n=xr())!==o){for(e=[],r=Pr();r!==o;)e.push(r),r=Pr();e!==o?(t,t=n=n):(We=t,t=o)}else We=t,t=o;return t}function xr(){var n,e,r;if(je++,n=We,e=[],kn.test(t.charAt(We))?(r=t.charAt(We),We++):(r=o,0===je&&He(Tn)),r!==o)for(;r!==o;)e.push(r),kn.test(t.charAt(We))?(r=t.charAt(We),We++):(r=o,0===je&&He(Tn));else e=o;return e!==o&&(n,e=wn(e)),je--,(n=e)===o&&(e=o,0===je&&He(Zn)),n}function Or(){var n,e,r;if(n=We,e=[],32===t.charCodeAt(We)?(r=" ",We++):(r=o,0===je&&He(zn)),r!==o)for(;r!==o;)e.push(r),32===t.charCodeAt(We)?(r=" ",We++):(r=o,0===je&&He(zn));else e=o;return e!==o&&(n,e=""),n=e}function Pr(){var n;return(n=function(){var n;return 46===t.charCodeAt(We)?(n=".",We++):(n=o,0===je&&He(dn)),n}())===o&&(n=Or()),n}function Ur(){var n,e,r,i,u,a,s,c,l,f,v,p,h,g,m,d,b;return n=We,(e=Dr())===o&&(e=null),e!==o?(r=We,je++,i=function(){var t,n,e,r,i;t=We,(n=Lr())!==o?((e=$r())===o&&(e=null),e!==o&&(r=Ir())!==o&&(i=Wr())!==o?t=n=[n,e,r,i]:(We=t,t=o)):(We=t,t=o);return t}(),je--,i!==o?(We=r,r=void 0):r=o,r!==o&&(i=Lr())!==o?((u=$r())===o&&(u=null),u!==o&&(a=Ir())!==o&&(s=Wr())!==o?((c=Br())===o&&(c=null),c!==o?((l=Gr())===o&&(l=null),l!==o?(n,v=i,p=u,h=a,g=s,m=c,d=l,(b={}).fig=(f=e)||null,b.disc=v||null,b.strike=p||null,b.col=h,b.row=g,b.check=d||null,b.promotion=m,b.notation=(f||"")+(v||"")+(p||"")+h+g+(m||"")+(d||""),n=e=b):(We=n,n=o)):(We=n,n=o)):(We=n,n=o)):(We=n,n=o)):(We=n,n=o),n===o&&(n=We,(e=Dr())===o&&(e=null),e!==o&&(r=Ir())!==o&&(i=Wr())!==o?((u=function(){var n;120===t.charCodeAt(We)?(n="x",We++):(n=o,0===je&&He(Ie));n===o&&(45===t.charCodeAt(We)?(n="-",We++):(n=o,0===je&&He(Nn)));return n}())===o&&(u=null),u!==o&&(a=Ir())!==o&&(s=Wr())!==o?((c=Br())===o&&(c=null),c!==o?((l=Gr())===o&&(l=null),l!==o?(n,n=e=function(t,n,e,r,o,i,u,a){var s={};return s.fig=t||null,s.strike="x"==r?r:null,s.col=o,s.row=i,s.check=a||null,s.notation=(t&&"P"!==t?t:"")+n+e+("x"==r?r:"-")+o+i+(u||"")+(a||""),s.promotion=u,s}(e,r,i,u,a,s,c,l)):(We=n,n=o)):(We=n,n=o)):(We=n,n=o)):(We=n,n=o),n===o&&(n=We,(e=Dr())===o&&(e=null),e!==o?((r=$r())===o&&(r=null),r!==o&&(i=Ir())!==o&&(u=Wr())!==o?((a=Br())===o&&(a=null),a!==o?((s=Gr())===o&&(s=null),s!==o?(n,n=e=function(t,n,e,r,o,i){var u={};return u.fig=t||null,u.strike=n||null,u.col=e,u.row=r,u.check=i||null,u.notation=(t||"")+(n||"")+e+r+(o||"")+(i||""),u.promotion=o,u}(e,r,i,u,a,s)):(We=n,n=o)):(We=n,n=o)):(We=n,n=o)):(We=n,n=o),n===o&&(n=We,"O-O-O"===t.substr(We,5)?(e="O-O-O",We+=5):(e=o,0===je&&He(Xn)),e!==o?((r=Gr())===o&&(r=null),r!==o?(n,n=e=function(t){var n={};return n.notation="O-O-O"+(t||""),n.check=t||null,n}(r)):(We=n,n=o)):(We=n,n=o),n===o&&(n=We,"O-O"===t.substr(We,3)?(e="O-O",We+=3):(e=o,0===je&&He(Jn)),e!==o?((r=Gr())===o&&(r=null),r!==o?(n,n=e=function(t){var n={};return n.notation="O-O"+(t||""),n.check=t||null,n}(r)):(We=n,n=o)):(We=n,n=o))))),n}function Gr(){var n,e,r,i;return n=We,e=We,r=We,je++,"+-"===t.substr(We,2)?(i="+-",We+=2):(i=o,0===je&&He(te)),je--,i===o?r=void 0:(We=r,r=o),r!==o?(43===t.charCodeAt(We)?(i="+",We++):(i=o,0===je&&He(ne)),i!==o?e=r=[r,i]:(We=e,e=o)):(We=e,e=o),e!==o&&(n,e=ee(e)),(n=e)===o&&(n=We,e=We,r=We,je++,"$$$"===t.substr(We,3)?(i="$$$",We+=3):(i=o,0===je&&He(re)),je--,i===o?r=void 0:(We=r,r=o),r!==o?(35===t.charCodeAt(We)?(i="#",We++):(i=o,0===je&&He(oe)),i!==o?e=r=[r,i]:(We=e,e=o)):(We=e,e=o),e!==o&&(n,e=ee(e)),n=e),n}function Br(){var n,e,r;return n=We,61===t.charCodeAt(We)?(e="=",We++):(e=o,0===je&&He(ie)),e!==o&&(r=function(){var n;Ue.test(t.charAt(We))?(n=t.charAt(We),We++):(n=o,0===je&&He(Ge));return n}())!==o?(n,n=e="="+r):(We=n,n=o),n}function Rr(){var n,e,r,i,u;return n=We,(e=function(){var n,e,r;n=We,36===t.charCodeAt(We)?(e="$",We++):(e=o,0===je&&He(ue));e!==o&&(r=xr())!==o?(n,n=e="$"+r):(We=n,n=o);n===o&&(n=We,"!!"===t.substr(We,2)?(e="!!",We+=2):(e=o,0===je&&He(ae)),e!==o&&(n,e="$3"),(n=e)===o&&(n=We,"??"===t.substr(We,2)?(e="??",We+=2):(e=o,0===je&&He(se)),e!==o&&(n,e="$4"),(n=e)===o&&(n=We,"!?"===t.substr(We,2)?(e="!?",We+=2):(e=o,0===je&&He(ce)),e!==o&&(n,e="$5"),(n=e)===o&&(n=We,"?!"===t.substr(We,2)?(e="?!",We+=2):(e=o,0===je&&He(le)),e!==o&&(n,e="$6"),(n=e)===o&&(n=We,33===t.charCodeAt(We)?(e="!",We++):(e=o,0===je&&He(fe)),e!==o&&(n,e="$1"),(n=e)===o&&(n=We,63===t.charCodeAt(We)?(e="?",We++):(e=o,0===je&&He(ve)),e!==o&&(n,e="$2"),(n=e)===o&&(n=We,8252===t.charCodeAt(We)?(e="‼",We++):(e=o,0===je&&He(pe)),e!==o&&(n,e="$3"),(n=e)===o&&(n=We,8263===t.charCodeAt(We)?(e="⁇",We++):(e=o,0===je&&He(he)),e!==o&&(n,e="$4"),(n=e)===o&&(n=We,8265===t.charCodeAt(We)?(e="⁉",We++):(e=o,0===je&&He(ge)),e!==o&&(n,e="$5"),(n=e)===o&&(n=We,8264===t.charCodeAt(We)?(e="⁈",We++):(e=o,0===je&&He(me)),e!==o&&(n,e="$6"),(n=e)===o&&(n=We,9633===t.charCodeAt(We)?(e="□",We++):(e=o,0===je&&He(de)),e!==o&&(n,e="$7"),(n=e)===o&&(n=We,61===t.charCodeAt(We)?(e="=",We++):(e=o,0===je&&He(ie)),e!==o&&(n,e="$10"),(n=e)===o&&(n=We,8734===t.charCodeAt(We)?(e="∞",We++):(e=o,0===je&&He(be)),e!==o&&(n,e="$13"),(n=e)===o&&(n=We,10866===t.charCodeAt(We)?(e="⩲",We++):(e=o,0===je&&He(Ae)),e!==o&&(n,e="$14"),(n=e)===o&&(n=We,10865===t.charCodeAt(We)?(e="⩱",We++):(e=o,0===je&&He(ye)),e!==o&&(n,e="$15"),(n=e)===o&&(n=We,177===t.charCodeAt(We)?(e="±",We++):(e=o,0===je&&He(Ee)),e!==o&&(n,e="$16"),(n=e)===o&&(n=We,8723===t.charCodeAt(We)?(e="∓",We++):(e=o,0===je&&He(Ce)),e!==o&&(n,e="$17"),(n=e)===o&&(n=We,"+-"===t.substr(We,2)?(e="+-",We+=2):(e=o,0===je&&He(te)),e!==o&&(n,e="$18"),(n=e)===o&&(n=We,"-+"===t.substr(We,2)?(e="-+",We+=2):(e=o,0===je&&He(Se)),e!==o&&(n,e="$19"),(n=e)===o&&(n=We,10752===t.charCodeAt(We)?(e="⨀",We++):(e=o,0===je&&He(Ne)),e!==o&&(n,e="$22"),(n=e)===o&&(n=We,10227===t.charCodeAt(We)?(e="⟳",We++):(e=o,0===je&&He(ke)),e!==o&&(n,e="$32"),(n=e)===o&&(n=We,8594===t.charCodeAt(We)?(e="→",We++):(e=o,0===je&&He(Te)),e!==o&&(n,e="$36"),(n=e)===o&&(n=We,8593===t.charCodeAt(We)?(e="↑",We++):(e=o,0===je&&He(we)),e!==o&&(n,e="$40"),(n=e)===o&&(n=We,8646===t.charCodeAt(We)?(e="⇆",We++):(e=o,0===je&&He(_e)),e!==o&&(n,e="$132"),(n=e)===o&&(n=We,68===t.charCodeAt(We)?(e="D",We++):(e=o,0===je&&He(xe)),e!==o&&(n,e="$220"),n=e)))))))))))))))))))))))));return n}())!==o&&tr()!==o?((r=Rr())===o&&(r=null),r!==o?(n,i=e,(u=r||[]).unshift(i),n=e=u):(We=n,n=o)):(We=n,n=o),n}function Lr(){var t;return(t=Ir())===o&&(t=Wr()),t}function Dr(){var n;return Oe.test(t.charAt(We))?(n=t.charAt(We),We++):(n=o,0===je&&He(Pe)),n}function Ir(){var n;return Be.test(t.charAt(We))?(n=t.charAt(We),We++):(n=o,0===je&&He(Re)),n}function Wr(){var n;return Le.test(t.charAt(We))?(n=t.charAt(We),We++):(n=o,0===je&&He(De)),n}function $r(){var n;return 120===t.charCodeAt(We)?(n="x",We++):(n=o,0===je&&He(Ie)),n}if((e=u())!==o&&We===t.length)return e;throw e!==o&&We<t.length&&He({type:"end"}),Ze(Fe,Me<t.length?t.charAt(Me):null,Me<t.length?Ye(Me,Me+1):Ye(Me,Me))}}}])}));
//# sourceMappingURL=pgn.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/chessground/anim.js":
/*!******************************************!*\
  !*** ./node_modules/chessground/anim.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.anim = void 0;
const util = __webpack_require__(/*! ./util */ "./node_modules/chessground/util.js");
function anim(mutation, state) {
    return state.animation.enabled ? animate(mutation, state) : render(mutation, state);
}
exports.anim = anim;
function render(mutation, state) {
    const result = mutation(state);
    state.dom.redraw();
    return result;
}
exports.render = render;
function makePiece(key, piece) {
    return {
        key: key,
        pos: util.key2pos(key),
        piece: piece
    };
}
function closer(piece, pieces) {
    return pieces.sort((p1, p2) => {
        return util.distanceSq(piece.pos, p1.pos) - util.distanceSq(piece.pos, p2.pos);
    })[0];
}
function computePlan(prevPieces, current) {
    const anims = new Map(), animedOrigs = [], fadings = new Map(), missings = [], news = [], prePieces = new Map();
    let curP, preP, vector;
    for (const [k, p] of prevPieces) {
        prePieces.set(k, makePiece(k, p));
    }
    for (const key of util.allKeys) {
        curP = current.pieces.get(key);
        preP = prePieces.get(key);
        if (curP) {
            if (preP) {
                if (!util.samePiece(curP, preP.piece)) {
                    missings.push(preP);
                    news.push(makePiece(key, curP));
                }
            }
            else
                news.push(makePiece(key, curP));
        }
        else if (preP)
            missings.push(preP);
    }
    for (const newP of news) {
        preP = closer(newP, missings.filter(p => util.samePiece(newP.piece, p.piece)));
        if (preP) {
            vector = [preP.pos[0] - newP.pos[0], preP.pos[1] - newP.pos[1]];
            anims.set(newP.key, vector.concat(vector));
            animedOrigs.push(preP.key);
        }
    }
    for (const p of missings) {
        if (!animedOrigs.includes(p.key))
            fadings.set(p.key, p.piece);
    }
    return {
        anims: anims,
        fadings: fadings
    };
}
function step(state, now) {
    const cur = state.animation.current;
    if (cur === undefined) {
        if (!state.dom.destroyed)
            state.dom.redrawNow();
        return;
    }
    const rest = 1 - (now - cur.start) * cur.frequency;
    if (rest <= 0) {
        state.animation.current = undefined;
        state.dom.redrawNow();
    }
    else {
        const ease = easing(rest);
        for (const cfg of cur.plan.anims.values()) {
            cfg[2] = cfg[0] * ease;
            cfg[3] = cfg[1] * ease;
        }
        state.dom.redrawNow(true);
        requestAnimationFrame((now = performance.now()) => step(state, now));
    }
}
function animate(mutation, state) {
    const prevPieces = new Map(state.pieces);
    const result = mutation(state);
    const plan = computePlan(prevPieces, state);
    if (plan.anims.size || plan.fadings.size) {
        const alreadyRunning = state.animation.current && state.animation.current.start;
        state.animation.current = {
            start: performance.now(),
            frequency: 1 / state.animation.duration,
            plan: plan
        };
        if (!alreadyRunning)
            step(state, performance.now());
    }
    else {
        state.dom.redraw();
    }
    return result;
}
function easing(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}
//# sourceMappingURL=anim.js.map

/***/ }),

/***/ "./node_modules/chessground/api.js":
/*!*****************************************!*\
  !*** ./node_modules/chessground/api.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const board = __webpack_require__(/*! ./board */ "./node_modules/chessground/board.js");
const fen_1 = __webpack_require__(/*! ./fen */ "./node_modules/chessground/fen.js");
const config_1 = __webpack_require__(/*! ./config */ "./node_modules/chessground/config.js");
const anim_1 = __webpack_require__(/*! ./anim */ "./node_modules/chessground/anim.js");
const drag_1 = __webpack_require__(/*! ./drag */ "./node_modules/chessground/drag.js");
const explosion_1 = __webpack_require__(/*! ./explosion */ "./node_modules/chessground/explosion.js");
function start(state, redrawAll) {
    function toggleOrientation() {
        board.toggleOrientation(state);
        redrawAll();
    }
    return {
        set(config) {
            if (config.orientation && config.orientation !== state.orientation)
                toggleOrientation();
            (config.fen ? anim_1.anim : anim_1.render)(state => config_1.configure(state, config), state);
        },
        state,
        getFen: () => fen_1.write(state.pieces),
        toggleOrientation,
        setPieces(pieces) {
            anim_1.anim(state => board.setPieces(state, pieces), state);
        },
        selectSquare(key, force) {
            if (key)
                anim_1.anim(state => board.selectSquare(state, key, force), state);
            else if (state.selected) {
                board.unselect(state);
                state.dom.redraw();
            }
        },
        move(orig, dest) {
            anim_1.anim(state => board.baseMove(state, orig, dest), state);
        },
        newPiece(piece, key) {
            anim_1.anim(state => board.baseNewPiece(state, piece, key), state);
        },
        playPremove() {
            if (state.premovable.current) {
                if (anim_1.anim(board.playPremove, state))
                    return true;
                state.dom.redraw();
            }
            return false;
        },
        playPredrop(validate) {
            if (state.predroppable.current) {
                const result = board.playPredrop(state, validate);
                state.dom.redraw();
                return result;
            }
            return false;
        },
        cancelPremove() {
            anim_1.render(board.unsetPremove, state);
        },
        cancelPredrop() {
            anim_1.render(board.unsetPredrop, state);
        },
        cancelMove() {
            anim_1.render(state => { board.cancelMove(state); drag_1.cancel(state); }, state);
        },
        stop() {
            anim_1.render(state => { board.stop(state); drag_1.cancel(state); }, state);
        },
        explode(keys) {
            explosion_1.explosion(state, keys);
        },
        setAutoShapes(shapes) {
            anim_1.render(state => state.drawable.autoShapes = shapes, state);
        },
        setShapes(shapes) {
            anim_1.render(state => state.drawable.shapes = shapes, state);
        },
        getKeyAtDomPos(pos) {
            return board.getKeyAtDomPos(pos, board.whitePov(state), state.dom.bounds());
        },
        redrawAll,
        dragNewPiece(piece, event, force) {
            drag_1.dragNewPiece(state, piece, event, force);
        },
        destroy() {
            board.stop(state);
            state.dom.unbind && state.dom.unbind();
            state.dom.destroyed = true;
        }
    };
}
exports.start = start;
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/chessground/board.js":
/*!*******************************************!*\
  !*** ./node_modules/chessground/board.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.whitePov = exports.getSnappedKeyAtDomPos = exports.getKeyAtDomPos = exports.stop = exports.cancelMove = exports.playPredrop = exports.playPremove = exports.isDraggable = exports.canMove = exports.unselect = exports.setSelected = exports.selectSquare = exports.dropNewPiece = exports.userMove = exports.baseNewPiece = exports.baseMove = exports.unsetPredrop = exports.unsetPremove = exports.setCheck = exports.setPieces = exports.reset = exports.toggleOrientation = exports.callUserFunction = void 0;
const util_1 = __webpack_require__(/*! ./util */ "./node_modules/chessground/util.js");
const premove_1 = __webpack_require__(/*! ./premove */ "./node_modules/chessground/premove.js");
function callUserFunction(f, ...args) {
    if (f)
        setTimeout(() => f(...args), 1);
}
exports.callUserFunction = callUserFunction;
function toggleOrientation(state) {
    state.orientation = util_1.opposite(state.orientation);
    state.animation.current =
        state.draggable.current =
            state.selected = undefined;
}
exports.toggleOrientation = toggleOrientation;
function reset(state) {
    state.lastMove = undefined;
    unselect(state);
    unsetPremove(state);
    unsetPredrop(state);
}
exports.reset = reset;
function setPieces(state, pieces) {
    for (const [key, piece] of pieces) {
        if (piece)
            state.pieces.set(key, piece);
        else
            state.pieces.delete(key);
    }
}
exports.setPieces = setPieces;
function setCheck(state, color) {
    state.check = undefined;
    if (color === true)
        color = state.turnColor;
    if (color)
        for (const [k, p] of state.pieces) {
            if (p.role === 'king' && p.color === color) {
                state.check = k;
            }
        }
}
exports.setCheck = setCheck;
function setPremove(state, orig, dest, meta) {
    unsetPredrop(state);
    state.premovable.current = [orig, dest];
    callUserFunction(state.premovable.events.set, orig, dest, meta);
}
function unsetPremove(state) {
    if (state.premovable.current) {
        state.premovable.current = undefined;
        callUserFunction(state.premovable.events.unset);
    }
}
exports.unsetPremove = unsetPremove;
function setPredrop(state, role, key) {
    unsetPremove(state);
    state.predroppable.current = { role, key };
    callUserFunction(state.predroppable.events.set, role, key);
}
function unsetPredrop(state) {
    const pd = state.predroppable;
    if (pd.current) {
        pd.current = undefined;
        callUserFunction(pd.events.unset);
    }
}
exports.unsetPredrop = unsetPredrop;
function tryAutoCastle(state, orig, dest) {
    if (!state.autoCastle)
        return false;
    const king = state.pieces.get(orig);
    if (!king || king.role !== 'king')
        return false;
    const origPos = util_1.key2pos(orig);
    const destPos = util_1.key2pos(dest);
    if ((origPos[1] !== 0 && origPos[1] !== 7) || origPos[1] !== destPos[1])
        return false;
    if (origPos[0] === 4 && !state.pieces.has(dest)) {
        if (destPos[0] === 6)
            dest = util_1.pos2key([7, destPos[1]]);
        else if (destPos[0] === 2)
            dest = util_1.pos2key([0, destPos[1]]);
    }
    const rook = state.pieces.get(dest);
    if (!rook || rook.color !== king.color || rook.role !== 'rook')
        return false;
    state.pieces.delete(orig);
    state.pieces.delete(dest);
    if (origPos[0] < destPos[0]) {
        state.pieces.set(util_1.pos2key([6, destPos[1]]), king);
        state.pieces.set(util_1.pos2key([5, destPos[1]]), rook);
    }
    else {
        state.pieces.set(util_1.pos2key([2, destPos[1]]), king);
        state.pieces.set(util_1.pos2key([3, destPos[1]]), rook);
    }
    return true;
}
function baseMove(state, orig, dest) {
    const origPiece = state.pieces.get(orig), destPiece = state.pieces.get(dest);
    if (orig === dest || !origPiece)
        return false;
    const captured = (destPiece && destPiece.color !== origPiece.color) ? destPiece : undefined;
    if (dest === state.selected)
        unselect(state);
    callUserFunction(state.events.move, orig, dest, captured);
    if (!tryAutoCastle(state, orig, dest)) {
        state.pieces.set(dest, origPiece);
        state.pieces.delete(orig);
    }
    state.lastMove = [orig, dest];
    state.check = undefined;
    callUserFunction(state.events.change);
    return captured || true;
}
exports.baseMove = baseMove;
function baseNewPiece(state, piece, key, force) {
    if (state.pieces.has(key)) {
        if (force)
            state.pieces.delete(key);
        else
            return false;
    }
    callUserFunction(state.events.dropNewPiece, piece, key);
    state.pieces.set(key, piece);
    state.lastMove = [key];
    state.check = undefined;
    callUserFunction(state.events.change);
    state.movable.dests = undefined;
    state.turnColor = util_1.opposite(state.turnColor);
    return true;
}
exports.baseNewPiece = baseNewPiece;
function baseUserMove(state, orig, dest) {
    const result = baseMove(state, orig, dest);
    if (result) {
        state.movable.dests = undefined;
        state.turnColor = util_1.opposite(state.turnColor);
        state.animation.current = undefined;
    }
    return result;
}
function userMove(state, orig, dest) {
    if (canMove(state, orig, dest)) {
        const result = baseUserMove(state, orig, dest);
        if (result) {
            const holdTime = state.hold.stop();
            unselect(state);
            const metadata = {
                premove: false,
                ctrlKey: state.stats.ctrlKey,
                holdTime
            };
            if (result !== true)
                metadata.captured = result;
            callUserFunction(state.movable.events.after, orig, dest, metadata);
            return true;
        }
    }
    else if (canPremove(state, orig, dest)) {
        setPremove(state, orig, dest, {
            ctrlKey: state.stats.ctrlKey
        });
        unselect(state);
        return true;
    }
    unselect(state);
    return false;
}
exports.userMove = userMove;
function dropNewPiece(state, orig, dest, force) {
    const piece = state.pieces.get(orig);
    if (piece && (canDrop(state, orig, dest) || force)) {
        state.pieces.delete(orig);
        baseNewPiece(state, piece, dest, force);
        callUserFunction(state.movable.events.afterNewPiece, piece.role, dest, {
            predrop: false
        });
    }
    else if (piece && canPredrop(state, orig, dest)) {
        setPredrop(state, piece.role, dest);
    }
    else {
        unsetPremove(state);
        unsetPredrop(state);
    }
    state.pieces.delete(orig);
    unselect(state);
}
exports.dropNewPiece = dropNewPiece;
function selectSquare(state, key, force) {
    callUserFunction(state.events.select, key);
    if (state.selected) {
        if (state.selected === key && !state.draggable.enabled) {
            unselect(state);
            state.hold.cancel();
            return;
        }
        else if ((state.selectable.enabled || force) && state.selected !== key) {
            if (userMove(state, state.selected, key)) {
                state.stats.dragged = false;
                return;
            }
        }
    }
    if (isMovable(state, key) || isPremovable(state, key)) {
        setSelected(state, key);
        state.hold.start();
    }
}
exports.selectSquare = selectSquare;
function setSelected(state, key) {
    state.selected = key;
    if (isPremovable(state, key)) {
        state.premovable.dests = premove_1.premove(state.pieces, key, state.premovable.castle);
    }
    else
        state.premovable.dests = undefined;
}
exports.setSelected = setSelected;
function unselect(state) {
    state.selected = undefined;
    state.premovable.dests = undefined;
    state.hold.cancel();
}
exports.unselect = unselect;
function isMovable(state, orig) {
    const piece = state.pieces.get(orig);
    return !!piece && (state.movable.color === 'both' || (state.movable.color === piece.color &&
        state.turnColor === piece.color));
}
function canMove(state, orig, dest) {
    var _a, _b;
    return orig !== dest && isMovable(state, orig) && (state.movable.free || !!((_b = (_a = state.movable.dests) === null || _a === void 0 ? void 0 : _a.get(orig)) === null || _b === void 0 ? void 0 : _b.includes(dest)));
}
exports.canMove = canMove;
function canDrop(state, orig, dest) {
    const piece = state.pieces.get(orig);
    return !!piece && (orig === dest || !state.pieces.has(dest)) && (state.movable.color === 'both' || (state.movable.color === piece.color &&
        state.turnColor === piece.color));
}
function isPremovable(state, orig) {
    const piece = state.pieces.get(orig);
    return !!piece && state.premovable.enabled &&
        state.movable.color === piece.color &&
        state.turnColor !== piece.color;
}
function canPremove(state, orig, dest) {
    return orig !== dest &&
        isPremovable(state, orig) &&
        premove_1.premove(state.pieces, orig, state.premovable.castle).includes(dest);
}
function canPredrop(state, orig, dest) {
    const piece = state.pieces.get(orig);
    const destPiece = state.pieces.get(dest);
    return !!piece &&
        (!destPiece || destPiece.color !== state.movable.color) &&
        state.predroppable.enabled &&
        (piece.role !== 'pawn' || (dest[1] !== '1' && dest[1] !== '8')) &&
        state.movable.color === piece.color &&
        state.turnColor !== piece.color;
}
function isDraggable(state, orig) {
    const piece = state.pieces.get(orig);
    return !!piece && state.draggable.enabled && (state.movable.color === 'both' || (state.movable.color === piece.color && (state.turnColor === piece.color || state.premovable.enabled)));
}
exports.isDraggable = isDraggable;
function playPremove(state) {
    const move = state.premovable.current;
    if (!move)
        return false;
    const orig = move[0], dest = move[1];
    let success = false;
    if (canMove(state, orig, dest)) {
        const result = baseUserMove(state, orig, dest);
        if (result) {
            const metadata = { premove: true };
            if (result !== true)
                metadata.captured = result;
            callUserFunction(state.movable.events.after, orig, dest, metadata);
            success = true;
        }
    }
    unsetPremove(state);
    return success;
}
exports.playPremove = playPremove;
function playPredrop(state, validate) {
    const drop = state.predroppable.current;
    let success = false;
    if (!drop)
        return false;
    if (validate(drop)) {
        const piece = {
            role: drop.role,
            color: state.movable.color
        };
        if (baseNewPiece(state, piece, drop.key)) {
            callUserFunction(state.movable.events.afterNewPiece, drop.role, drop.key, {
                predrop: true
            });
            success = true;
        }
    }
    unsetPredrop(state);
    return success;
}
exports.playPredrop = playPredrop;
function cancelMove(state) {
    unsetPremove(state);
    unsetPredrop(state);
    unselect(state);
}
exports.cancelMove = cancelMove;
function stop(state) {
    state.movable.color =
        state.movable.dests =
            state.animation.current = undefined;
    cancelMove(state);
}
exports.stop = stop;
function getKeyAtDomPos(pos, asWhite, bounds) {
    let file = Math.floor(8 * (pos[0] - bounds.left) / bounds.width);
    if (!asWhite)
        file = 7 - file;
    let rank = 7 - Math.floor(8 * (pos[1] - bounds.top) / bounds.height);
    if (!asWhite)
        rank = 7 - rank;
    return (file >= 0 && file < 8 && rank >= 0 && rank < 8) ? util_1.pos2key([file, rank]) : undefined;
}
exports.getKeyAtDomPos = getKeyAtDomPos;
function getSnappedKeyAtDomPos(orig, pos, asWhite, bounds) {
    const origPos = util_1.key2pos(orig);
    const validSnapPos = util_1.allPos.filter(pos2 => {
        return premove_1.queen(origPos[0], origPos[1], pos2[0], pos2[1]) || premove_1.knight(origPos[0], origPos[1], pos2[0], pos2[1]);
    });
    const validSnapCenters = validSnapPos.map(pos2 => util_1.computeSquareCenter(util_1.pos2key(pos2), asWhite, bounds));
    const validSnapDistances = validSnapCenters.map(pos2 => util_1.distanceSq(pos, pos2));
    const [, closestSnapIndex] = validSnapDistances.reduce((a, b, index) => a[0] < b ? a : [b, index], [validSnapDistances[0], 0]);
    return util_1.pos2key(validSnapPos[closestSnapIndex]);
}
exports.getSnappedKeyAtDomPos = getSnappedKeyAtDomPos;
function whitePov(s) {
    return s.orientation === 'white';
}
exports.whitePov = whitePov;
//# sourceMappingURL=board.js.map

/***/ }),

/***/ "./node_modules/chessground/chessground.js":
/*!*************************************************!*\
  !*** ./node_modules/chessground/chessground.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Chessground = void 0;
const api_1 = __webpack_require__(/*! ./api */ "./node_modules/chessground/api.js");
const config_1 = __webpack_require__(/*! ./config */ "./node_modules/chessground/config.js");
const state_1 = __webpack_require__(/*! ./state */ "./node_modules/chessground/state.js");
const wrap_1 = __webpack_require__(/*! ./wrap */ "./node_modules/chessground/wrap.js");
const events = __webpack_require__(/*! ./events */ "./node_modules/chessground/events.js");
const render_1 = __webpack_require__(/*! ./render */ "./node_modules/chessground/render.js");
const svg = __webpack_require__(/*! ./svg */ "./node_modules/chessground/svg.js");
const util = __webpack_require__(/*! ./util */ "./node_modules/chessground/util.js");
function Chessground(element, config) {
    const maybeState = state_1.defaults();
    config_1.configure(maybeState, config || {});
    function redrawAll() {
        const prevUnbind = 'dom' in maybeState ? maybeState.dom.unbind : undefined;
        const relative = maybeState.viewOnly && !maybeState.drawable.visible, elements = wrap_1.renderWrap(element, maybeState, relative), bounds = util.memo(() => elements.board.getBoundingClientRect()), redrawNow = (skipSvg) => {
            render_1.render(state);
            if (!skipSvg && elements.svg)
                svg.renderSvg(state, elements.svg);
        }, boundsUpdated = () => {
            bounds.clear();
            render_1.updateBounds(state);
            if (elements.svg)
                svg.renderSvg(state, elements.svg);
        };
        const state = maybeState;
        state.dom = {
            elements,
            bounds,
            redraw: debounceRedraw(redrawNow),
            redrawNow,
            unbind: prevUnbind,
            relative
        };
        state.drawable.prevSvgHash = '';
        redrawNow(false);
        events.bindBoard(state, boundsUpdated);
        if (!prevUnbind)
            state.dom.unbind = events.bindDocument(state, boundsUpdated);
        state.events.insert && state.events.insert(elements);
        return state;
    }
    return api_1.start(redrawAll(), redrawAll);
}
exports.Chessground = Chessground;
function debounceRedraw(redrawNow) {
    let redrawing = false;
    return () => {
        if (redrawing)
            return;
        redrawing = true;
        requestAnimationFrame(() => {
            redrawNow();
            redrawing = false;
        });
    };
}
//# sourceMappingURL=chessground.js.map

/***/ }),

/***/ "./node_modules/chessground/config.js":
/*!********************************************!*\
  !*** ./node_modules/chessground/config.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = void 0;
const board_1 = __webpack_require__(/*! ./board */ "./node_modules/chessground/board.js");
const fen_1 = __webpack_require__(/*! ./fen */ "./node_modules/chessground/fen.js");
function configure(state, config) {
    var _a;
    if ((_a = config.movable) === null || _a === void 0 ? void 0 : _a.dests)
        state.movable.dests = undefined;
    merge(state, config);
    if (config.fen) {
        state.pieces = fen_1.read(config.fen);
        state.drawable.shapes = [];
    }
    if (config.hasOwnProperty('check'))
        board_1.setCheck(state, config.check || false);
    if (config.hasOwnProperty('lastMove') && !config.lastMove)
        state.lastMove = undefined;
    else if (config.lastMove)
        state.lastMove = config.lastMove;
    if (state.selected)
        board_1.setSelected(state, state.selected);
    if (!state.animation.duration || state.animation.duration < 100)
        state.animation.enabled = false;
    if (!state.movable.rookCastle && state.movable.dests) {
        const rank = state.movable.color === 'white' ? '1' : '8', kingStartPos = 'e' + rank, dests = state.movable.dests.get(kingStartPos), king = state.pieces.get(kingStartPos);
        if (!dests || !king || king.role !== 'king')
            return;
        state.movable.dests.set(kingStartPos, dests.filter(d => !((d === 'a' + rank) && dests.includes('c' + rank)) &&
            !((d === 'h' + rank) && dests.includes('g' + rank))));
    }
}
exports.configure = configure;
function merge(base, extend) {
    for (const key in extend) {
        if (isObject(base[key]) && isObject(extend[key]))
            merge(base[key], extend[key]);
        else
            base[key] = extend[key];
    }
}
function isObject(o) {
    return typeof o === 'object';
}
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/chessground/drag.js":
/*!******************************************!*\
  !*** ./node_modules/chessground/drag.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cancel = exports.end = exports.move = exports.dragNewPiece = exports.start = void 0;
const board = __webpack_require__(/*! ./board */ "./node_modules/chessground/board.js");
const util = __webpack_require__(/*! ./util */ "./node_modules/chessground/util.js");
const draw_1 = __webpack_require__(/*! ./draw */ "./node_modules/chessground/draw.js");
const anim_1 = __webpack_require__(/*! ./anim */ "./node_modules/chessground/anim.js");
function start(s, e) {
    if (!e.isTrusted || e.button !== undefined && e.button !== 0)
        return;
    if (e.touches && e.touches.length > 1)
        return;
    const bounds = s.dom.bounds(), position = util.eventPosition(e), orig = board.getKeyAtDomPos(position, board.whitePov(s), bounds);
    if (!orig)
        return;
    const piece = s.pieces.get(orig);
    const previouslySelected = s.selected;
    if (!previouslySelected && s.drawable.enabled && (s.drawable.eraseOnClick || (!piece || piece.color !== s.turnColor)))
        draw_1.clear(s);
    if (e.cancelable !== false &&
        (!e.touches || !s.movable.color || piece || previouslySelected || pieceCloseTo(s, position)))
        e.preventDefault();
    const hadPremove = !!s.premovable.current;
    const hadPredrop = !!s.predroppable.current;
    s.stats.ctrlKey = e.ctrlKey;
    if (s.selected && board.canMove(s, s.selected, orig)) {
        anim_1.anim(state => board.selectSquare(state, orig), s);
    }
    else {
        board.selectSquare(s, orig);
    }
    const stillSelected = s.selected === orig;
    const element = pieceElementByKey(s, orig);
    if (piece && element && stillSelected && board.isDraggable(s, orig)) {
        s.draggable.current = {
            orig,
            piece,
            origPos: position,
            pos: position,
            started: s.draggable.autoDistance && s.stats.dragged,
            element,
            previouslySelected,
            originTarget: e.target
        };
        element.cgDragging = true;
        element.classList.add('dragging');
        const ghost = s.dom.elements.ghost;
        if (ghost) {
            ghost.className = `ghost ${piece.color} ${piece.role}`;
            util.translateAbs(ghost, util.posToTranslateAbs(bounds)(util.key2pos(orig), board.whitePov(s)));
            util.setVisible(ghost, true);
        }
        processDrag(s);
    }
    else {
        if (hadPremove)
            board.unsetPremove(s);
        if (hadPredrop)
            board.unsetPredrop(s);
    }
    s.dom.redraw();
}
exports.start = start;
function pieceCloseTo(s, pos) {
    const asWhite = board.whitePov(s), bounds = s.dom.bounds(), radiusSq = Math.pow(bounds.width / 8, 2);
    for (const key in s.pieces) {
        const center = util.computeSquareCenter(key, asWhite, bounds);
        if (util.distanceSq(center, pos) <= radiusSq)
            return true;
    }
    return false;
}
function dragNewPiece(s, piece, e, force) {
    const key = 'a0';
    s.pieces.set(key, piece);
    s.dom.redraw();
    const position = util.eventPosition(e);
    s.draggable.current = {
        orig: key,
        piece,
        origPos: position,
        pos: position,
        started: true,
        element: () => pieceElementByKey(s, key),
        originTarget: e.target,
        newPiece: true,
        force: !!force
    };
    processDrag(s);
}
exports.dragNewPiece = dragNewPiece;
function processDrag(s) {
    requestAnimationFrame(() => {
        var _a;
        const cur = s.draggable.current;
        if (!cur)
            return;
        if ((_a = s.animation.current) === null || _a === void 0 ? void 0 : _a.plan.anims.has(cur.orig))
            s.animation.current = undefined;
        const origPiece = s.pieces.get(cur.orig);
        if (!origPiece || !util.samePiece(origPiece, cur.piece))
            cancel(s);
        else {
            if (!cur.started && util.distanceSq(cur.pos, cur.origPos) >= Math.pow(s.draggable.distance, 2))
                cur.started = true;
            if (cur.started) {
                if (typeof cur.element === 'function') {
                    const found = cur.element();
                    if (!found)
                        return;
                    found.cgDragging = true;
                    found.classList.add('dragging');
                    cur.element = found;
                }
                const bounds = s.dom.bounds();
                util.translateAbs(cur.element, [
                    cur.pos[0] - bounds.left - bounds.width / 16,
                    cur.pos[1] - bounds.top - bounds.height / 16
                ]);
            }
        }
        processDrag(s);
    });
}
function move(s, e) {
    if (s.draggable.current && (!e.touches || e.touches.length < 2)) {
        s.draggable.current.pos = util.eventPosition(e);
    }
}
exports.move = move;
function end(s, e) {
    const cur = s.draggable.current;
    if (!cur)
        return;
    if (e.type === 'touchend' && e.cancelable !== false)
        e.preventDefault();
    if (e.type === 'touchend' && cur.originTarget !== e.target && !cur.newPiece) {
        s.draggable.current = undefined;
        return;
    }
    board.unsetPremove(s);
    board.unsetPredrop(s);
    const eventPos = util.eventPosition(e) || cur.pos;
    const dest = board.getKeyAtDomPos(eventPos, board.whitePov(s), s.dom.bounds());
    if (dest && cur.started && cur.orig !== dest) {
        if (cur.newPiece)
            board.dropNewPiece(s, cur.orig, dest, cur.force);
        else {
            s.stats.ctrlKey = e.ctrlKey;
            if (board.userMove(s, cur.orig, dest))
                s.stats.dragged = true;
        }
    }
    else if (cur.newPiece) {
        s.pieces.delete(cur.orig);
    }
    else if (s.draggable.deleteOnDropOff && !dest) {
        s.pieces.delete(cur.orig);
        board.callUserFunction(s.events.change);
    }
    if (cur.orig === cur.previouslySelected && (cur.orig === dest || !dest))
        board.unselect(s);
    else if (!s.selectable.enabled)
        board.unselect(s);
    removeDragElements(s);
    s.draggable.current = undefined;
    s.dom.redraw();
}
exports.end = end;
function cancel(s) {
    const cur = s.draggable.current;
    if (cur) {
        if (cur.newPiece)
            s.pieces.delete(cur.orig);
        s.draggable.current = undefined;
        board.unselect(s);
        removeDragElements(s);
        s.dom.redraw();
    }
}
exports.cancel = cancel;
function removeDragElements(s) {
    const e = s.dom.elements;
    if (e.ghost)
        util.setVisible(e.ghost, false);
}
function pieceElementByKey(s, key) {
    let el = s.dom.elements.board.firstChild;
    while (el) {
        if (el.cgKey === key && el.tagName === 'PIECE')
            return el;
        el = el.nextSibling;
    }
    return;
}
//# sourceMappingURL=drag.js.map

/***/ }),

/***/ "./node_modules/chessground/draw.js":
/*!******************************************!*\
  !*** ./node_modules/chessground/draw.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = exports.cancel = exports.end = exports.move = exports.processDraw = exports.start = void 0;
const board_1 = __webpack_require__(/*! ./board */ "./node_modules/chessground/board.js");
const util_1 = __webpack_require__(/*! ./util */ "./node_modules/chessground/util.js");
const brushes = ['green', 'red', 'blue', 'yellow'];
function start(state, e) {
    if (e.touches && e.touches.length > 1)
        return;
    e.stopPropagation();
    e.preventDefault();
    e.ctrlKey ? board_1.unselect(state) : board_1.cancelMove(state);
    const pos = util_1.eventPosition(e), orig = board_1.getKeyAtDomPos(pos, board_1.whitePov(state), state.dom.bounds());
    if (!orig)
        return;
    state.drawable.current = {
        orig,
        pos,
        brush: eventBrush(e),
        snapToValidMove: state.drawable.defaultSnapToValidMove,
    };
    processDraw(state);
}
exports.start = start;
function processDraw(state) {
    requestAnimationFrame(() => {
        const cur = state.drawable.current;
        if (cur) {
            const keyAtDomPos = board_1.getKeyAtDomPos(cur.pos, board_1.whitePov(state), state.dom.bounds());
            if (!keyAtDomPos) {
                cur.snapToValidMove = false;
            }
            const mouseSq = cur.snapToValidMove ?
                board_1.getSnappedKeyAtDomPos(cur.orig, cur.pos, board_1.whitePov(state), state.dom.bounds()) :
                keyAtDomPos;
            if (mouseSq !== cur.mouseSq) {
                cur.mouseSq = mouseSq;
                cur.dest = mouseSq !== cur.orig ? mouseSq : undefined;
                state.dom.redrawNow();
            }
            processDraw(state);
        }
    });
}
exports.processDraw = processDraw;
function move(state, e) {
    if (state.drawable.current)
        state.drawable.current.pos = util_1.eventPosition(e);
}
exports.move = move;
function end(state) {
    const cur = state.drawable.current;
    if (cur) {
        if (cur.mouseSq)
            addShape(state.drawable, cur);
        cancel(state);
    }
}
exports.end = end;
function cancel(state) {
    if (state.drawable.current) {
        state.drawable.current = undefined;
        state.dom.redraw();
    }
}
exports.cancel = cancel;
function clear(state) {
    if (state.drawable.shapes.length) {
        state.drawable.shapes = [];
        state.dom.redraw();
        onChange(state.drawable);
    }
}
exports.clear = clear;
function eventBrush(e) {
    var _a;
    const modA = (e.shiftKey || e.ctrlKey) && util_1.isRightButton(e);
    const modB = e.altKey || e.metaKey || ((_a = e.getModifierState) === null || _a === void 0 ? void 0 : _a.call(e, 'AltGraph'));
    return brushes[(modA ? 1 : 0) + (modB ? 2 : 0)];
}
function addShape(drawable, cur) {
    const sameShape = (s) => s.orig === cur.orig && s.dest === cur.dest;
    const similar = drawable.shapes.find(sameShape);
    if (similar)
        drawable.shapes = drawable.shapes.filter(s => !sameShape(s));
    if (!similar || similar.brush !== cur.brush)
        drawable.shapes.push(cur);
    onChange(drawable);
}
function onChange(drawable) {
    if (drawable.onChange)
        drawable.onChange(drawable.shapes);
}
//# sourceMappingURL=draw.js.map

/***/ }),

/***/ "./node_modules/chessground/drop.js":
/*!******************************************!*\
  !*** ./node_modules/chessground/drop.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.drop = exports.cancelDropMode = exports.setDropMode = void 0;
const board = __webpack_require__(/*! ./board */ "./node_modules/chessground/board.js");
const util = __webpack_require__(/*! ./util */ "./node_modules/chessground/util.js");
const drag_1 = __webpack_require__(/*! ./drag */ "./node_modules/chessground/drag.js");
function setDropMode(s, piece) {
    s.dropmode = {
        active: true,
        piece
    };
    drag_1.cancel(s);
}
exports.setDropMode = setDropMode;
function cancelDropMode(s) {
    s.dropmode = {
        active: false
    };
}
exports.cancelDropMode = cancelDropMode;
function drop(s, e) {
    if (!s.dropmode.active)
        return;
    board.unsetPremove(s);
    board.unsetPredrop(s);
    const piece = s.dropmode.piece;
    if (piece) {
        s.pieces.set('a0', piece);
        const position = util.eventPosition(e);
        const dest = position && board.getKeyAtDomPos(position, board.whitePov(s), s.dom.bounds());
        if (dest)
            board.dropNewPiece(s, 'a0', dest);
    }
    s.dom.redraw();
}
exports.drop = drop;
//# sourceMappingURL=drop.js.map

/***/ }),

/***/ "./node_modules/chessground/events.js":
/*!********************************************!*\
  !*** ./node_modules/chessground/events.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bindDocument = exports.bindBoard = void 0;
const drag = __webpack_require__(/*! ./drag */ "./node_modules/chessground/drag.js");
const draw = __webpack_require__(/*! ./draw */ "./node_modules/chessground/draw.js");
const drop_1 = __webpack_require__(/*! ./drop */ "./node_modules/chessground/drop.js");
const util_1 = __webpack_require__(/*! ./util */ "./node_modules/chessground/util.js");
function bindBoard(s, boundsUpdated) {
    const boardEl = s.dom.elements.board;
    if (!s.dom.relative && s.resizable && 'ResizeObserver' in window) {
        const observer = new window['ResizeObserver'](boundsUpdated);
        observer.observe(boardEl);
    }
    if (s.viewOnly)
        return;
    const onStart = startDragOrDraw(s);
    boardEl.addEventListener('touchstart', onStart, { passive: false });
    boardEl.addEventListener('mousedown', onStart, { passive: false });
    if (s.disableContextMenu || s.drawable.enabled) {
        boardEl.addEventListener('contextmenu', e => e.preventDefault());
    }
}
exports.bindBoard = bindBoard;
function bindDocument(s, boundsUpdated) {
    const unbinds = [];
    if (!s.dom.relative && s.resizable && !('ResizeObserver' in window)) {
        unbinds.push(unbindable(document.body, 'chessground.resize', boundsUpdated));
    }
    if (!s.viewOnly) {
        const onmove = dragOrDraw(s, drag.move, draw.move);
        const onend = dragOrDraw(s, drag.end, draw.end);
        for (const ev of ['touchmove', 'mousemove'])
            unbinds.push(unbindable(document, ev, onmove));
        for (const ev of ['touchend', 'mouseup'])
            unbinds.push(unbindable(document, ev, onend));
        const onScroll = () => s.dom.bounds.clear();
        unbinds.push(unbindable(document, 'scroll', onScroll, { capture: true, passive: true }));
        unbinds.push(unbindable(window, 'resize', onScroll, { passive: true }));
    }
    return () => unbinds.forEach(f => f());
}
exports.bindDocument = bindDocument;
function unbindable(el, eventName, callback, options) {
    el.addEventListener(eventName, callback, options);
    return () => el.removeEventListener(eventName, callback, options);
}
function startDragOrDraw(s) {
    return e => {
        if (s.draggable.current)
            drag.cancel(s);
        else if (s.drawable.current)
            draw.cancel(s);
        else if (e.shiftKey || util_1.isRightButton(e)) {
            if (s.drawable.enabled)
                draw.start(s, e);
        }
        else if (!s.viewOnly) {
            if (s.dropmode.active)
                drop_1.drop(s, e);
            else
                drag.start(s, e);
        }
    };
}
function dragOrDraw(s, withDrag, withDraw) {
    return e => {
        if (s.drawable.current) {
            if (s.drawable.enabled)
                withDraw(s, e);
        }
        else if (!s.viewOnly)
            withDrag(s, e);
    };
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/chessground/explosion.js":
/*!***********************************************!*\
  !*** ./node_modules/chessground/explosion.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.explosion = void 0;
function explosion(state, keys) {
    state.exploding = { stage: 1, keys };
    state.dom.redraw();
    setTimeout(() => {
        setStage(state, 2);
        setTimeout(() => setStage(state, undefined), 120);
    }, 120);
}
exports.explosion = explosion;
function setStage(state, stage) {
    if (state.exploding) {
        if (stage)
            state.exploding.stage = stage;
        else
            state.exploding = undefined;
        state.dom.redraw();
    }
}
//# sourceMappingURL=explosion.js.map

/***/ }),

/***/ "./node_modules/chessground/fen.js":
/*!*****************************************!*\
  !*** ./node_modules/chessground/fen.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.write = exports.read = exports.initial = void 0;
const util_1 = __webpack_require__(/*! ./util */ "./node_modules/chessground/util.js");
const cg = __webpack_require__(/*! ./types */ "./node_modules/chessground/types.js");
exports.initial = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
const roles = { p: 'pawn', r: 'rook', n: 'knight', b: 'bishop', q: 'queen', k: 'king' };
const letters = { pawn: 'p', rook: 'r', knight: 'n', bishop: 'b', queen: 'q', king: 'k' };
function read(fen) {
    if (fen === 'start')
        fen = exports.initial;
    const pieces = new Map();
    let row = 7, col = 0;
    for (const c of fen) {
        switch (c) {
            case ' ': return pieces;
            case '/':
                --row;
                if (row < 0)
                    return pieces;
                col = 0;
                break;
            case '~':
                const piece = pieces.get(util_1.pos2key([col, row]));
                if (piece)
                    piece.promoted = true;
                break;
            default:
                const nb = c.charCodeAt(0);
                if (nb < 57)
                    col += nb - 48;
                else {
                    const role = c.toLowerCase();
                    pieces.set(util_1.pos2key([col, row]), {
                        role: roles[role],
                        color: c === role ? 'black' : 'white',
                    });
                    ++col;
                }
        }
    }
    return pieces;
}
exports.read = read;
function write(pieces) {
    return util_1.invRanks.map(y => cg.files.map(x => {
        const piece = pieces.get(x + y);
        if (piece) {
            const letter = letters[piece.role];
            return piece.color === 'white' ? letter.toUpperCase() : letter;
        }
        else
            return '1';
    }).join('')).join('/').replace(/1{2,}/g, s => s.length.toString());
}
exports.write = write;
//# sourceMappingURL=fen.js.map

/***/ }),

/***/ "./node_modules/chessground/premove.js":
/*!*********************************************!*\
  !*** ./node_modules/chessground/premove.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.premove = exports.queen = exports.knight = void 0;
const util = __webpack_require__(/*! ./util */ "./node_modules/chessground/util.js");
function diff(a, b) {
    return Math.abs(a - b);
}
function pawn(color) {
    return (x1, y1, x2, y2) => diff(x1, x2) < 2 && (color === 'white' ? (y2 === y1 + 1 || (y1 <= 1 && y2 === (y1 + 2) && x1 === x2)) : (y2 === y1 - 1 || (y1 >= 6 && y2 === (y1 - 2) && x1 === x2)));
}
exports.knight = (x1, y1, x2, y2) => {
    const xd = diff(x1, x2);
    const yd = diff(y1, y2);
    return (xd === 1 && yd === 2) || (xd === 2 && yd === 1);
};
const bishop = (x1, y1, x2, y2) => {
    return diff(x1, x2) === diff(y1, y2);
};
const rook = (x1, y1, x2, y2) => {
    return x1 === x2 || y1 === y2;
};
exports.queen = (x1, y1, x2, y2) => {
    return bishop(x1, y1, x2, y2) || rook(x1, y1, x2, y2);
};
function king(color, rookFiles, canCastle) {
    return (x1, y1, x2, y2) => (diff(x1, x2) < 2 && diff(y1, y2) < 2) || (canCastle && y1 === y2 && y1 === (color === 'white' ? 0 : 7) && ((x1 === 4 && ((x2 === 2 && rookFiles.includes(0)) || (x2 === 6 && rookFiles.includes(7)))) ||
        rookFiles.includes(x2)));
}
function rookFilesOf(pieces, color) {
    const backrank = color === 'white' ? '1' : '8';
    const files = [];
    for (const [key, piece] of pieces) {
        if (key[1] === backrank && piece.color === color && piece.role === 'rook') {
            files.push(util.key2pos(key)[0]);
        }
    }
    return files;
}
function premove(pieces, key, canCastle) {
    const piece = pieces.get(key);
    if (!piece)
        return [];
    const pos = util.key2pos(key), r = piece.role, mobility = r === 'pawn' ? pawn(piece.color) : (r === 'knight' ? exports.knight : (r === 'bishop' ? bishop : (r === 'rook' ? rook : (r === 'queen' ? exports.queen : king(piece.color, rookFilesOf(pieces, piece.color), canCastle)))));
    return util.allPos.filter(pos2 => (pos[0] !== pos2[0] || pos[1] !== pos2[1]) && mobility(pos[0], pos[1], pos2[0], pos2[1])).map(util.pos2key);
}
exports.premove = premove;
//# sourceMappingURL=premove.js.map

/***/ }),

/***/ "./node_modules/chessground/render.js":
/*!********************************************!*\
  !*** ./node_modules/chessground/render.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBounds = exports.render = void 0;
const util_1 = __webpack_require__(/*! ./util */ "./node_modules/chessground/util.js");
const board_1 = __webpack_require__(/*! ./board */ "./node_modules/chessground/board.js");
const util = __webpack_require__(/*! ./util */ "./node_modules/chessground/util.js");
function render(s) {
    const asWhite = board_1.whitePov(s), posToTranslate = s.dom.relative ? util.posToTranslateRel : util.posToTranslateAbs(s.dom.bounds()), translate = s.dom.relative ? util.translateRel : util.translateAbs, boardEl = s.dom.elements.board, pieces = s.pieces, curAnim = s.animation.current, anims = curAnim ? curAnim.plan.anims : new Map(), fadings = curAnim ? curAnim.plan.fadings : new Map(), curDrag = s.draggable.current, squares = computeSquareClasses(s), samePieces = new Set(), sameSquares = new Set(), movedPieces = new Map(), movedSquares = new Map();
    let k, el, pieceAtKey, elPieceName, anim, fading, pMvdset, pMvd, sMvdset, sMvd;
    el = boardEl.firstChild;
    while (el) {
        k = el.cgKey;
        if (isPieceNode(el)) {
            pieceAtKey = pieces.get(k);
            anim = anims.get(k);
            fading = fadings.get(k);
            elPieceName = el.cgPiece;
            if (el.cgDragging && (!curDrag || curDrag.orig !== k)) {
                el.classList.remove('dragging');
                translate(el, posToTranslate(util_1.key2pos(k), asWhite));
                el.cgDragging = false;
            }
            if (!fading && el.cgFading) {
                el.cgFading = false;
                el.classList.remove('fading');
            }
            if (pieceAtKey) {
                if (anim && el.cgAnimating && elPieceName === pieceNameOf(pieceAtKey)) {
                    const pos = util_1.key2pos(k);
                    pos[0] += anim[2];
                    pos[1] += anim[3];
                    el.classList.add('anim');
                    translate(el, posToTranslate(pos, asWhite));
                }
                else if (el.cgAnimating) {
                    el.cgAnimating = false;
                    el.classList.remove('anim');
                    translate(el, posToTranslate(util_1.key2pos(k), asWhite));
                    if (s.addPieceZIndex)
                        el.style.zIndex = posZIndex(util_1.key2pos(k), asWhite);
                }
                if (elPieceName === pieceNameOf(pieceAtKey) && (!fading || !el.cgFading)) {
                    samePieces.add(k);
                }
                else {
                    if (fading && elPieceName === pieceNameOf(fading)) {
                        el.classList.add('fading');
                        el.cgFading = true;
                    }
                    else {
                        appendValue(movedPieces, elPieceName, el);
                    }
                }
            }
            else {
                appendValue(movedPieces, elPieceName, el);
            }
        }
        else if (isSquareNode(el)) {
            const cn = el.className;
            if (squares.get(k) === cn)
                sameSquares.add(k);
            else
                appendValue(movedSquares, cn, el);
        }
        el = el.nextSibling;
    }
    for (const [sk, className] of squares) {
        if (!sameSquares.has(sk)) {
            sMvdset = movedSquares.get(className);
            sMvd = sMvdset && sMvdset.pop();
            const translation = posToTranslate(util_1.key2pos(sk), asWhite);
            if (sMvd) {
                sMvd.cgKey = sk;
                translate(sMvd, translation);
            }
            else {
                const squareNode = util_1.createEl('square', className);
                squareNode.cgKey = sk;
                translate(squareNode, translation);
                boardEl.insertBefore(squareNode, boardEl.firstChild);
            }
        }
    }
    for (const [k, p] of pieces) {
        anim = anims.get(k);
        if (!samePieces.has(k)) {
            pMvdset = movedPieces.get(pieceNameOf(p));
            pMvd = pMvdset && pMvdset.pop();
            if (pMvd) {
                pMvd.cgKey = k;
                if (pMvd.cgFading) {
                    pMvd.classList.remove('fading');
                    pMvd.cgFading = false;
                }
                const pos = util_1.key2pos(k);
                if (s.addPieceZIndex)
                    pMvd.style.zIndex = posZIndex(pos, asWhite);
                if (anim) {
                    pMvd.cgAnimating = true;
                    pMvd.classList.add('anim');
                    pos[0] += anim[2];
                    pos[1] += anim[3];
                }
                translate(pMvd, posToTranslate(pos, asWhite));
            }
            else {
                const pieceName = pieceNameOf(p), pieceNode = util_1.createEl('piece', pieceName), pos = util_1.key2pos(k);
                pieceNode.cgPiece = pieceName;
                pieceNode.cgKey = k;
                if (anim) {
                    pieceNode.cgAnimating = true;
                    pos[0] += anim[2];
                    pos[1] += anim[3];
                }
                translate(pieceNode, posToTranslate(pos, asWhite));
                if (s.addPieceZIndex)
                    pieceNode.style.zIndex = posZIndex(pos, asWhite);
                boardEl.appendChild(pieceNode);
            }
        }
    }
    for (const nodes of movedPieces.values())
        removeNodes(s, nodes);
    for (const nodes of movedSquares.values())
        removeNodes(s, nodes);
}
exports.render = render;
function updateBounds(s) {
    if (s.dom.relative)
        return;
    const asWhite = board_1.whitePov(s), posToTranslate = util.posToTranslateAbs(s.dom.bounds());
    let el = s.dom.elements.board.firstChild;
    while (el) {
        if ((isPieceNode(el) && !el.cgAnimating) || isSquareNode(el)) {
            util.translateAbs(el, posToTranslate(util_1.key2pos(el.cgKey), asWhite));
        }
        el = el.nextSibling;
    }
}
exports.updateBounds = updateBounds;
function isPieceNode(el) {
    return el.tagName === 'PIECE';
}
function isSquareNode(el) {
    return el.tagName === 'SQUARE';
}
function removeNodes(s, nodes) {
    for (const node of nodes)
        s.dom.elements.board.removeChild(node);
}
function posZIndex(pos, asWhite) {
    let z = 2 + pos[1] * 8 + (7 - pos[0]);
    if (asWhite)
        z = 67 - z;
    return z + '';
}
function pieceNameOf(piece) {
    return `${piece.color} ${piece.role}`;
}
function computeSquareClasses(s) {
    var _a;
    const squares = new Map();
    if (s.lastMove && s.highlight.lastMove)
        for (const k of s.lastMove) {
            addSquare(squares, k, 'last-move');
        }
    if (s.check && s.highlight.check)
        addSquare(squares, s.check, 'check');
    if (s.selected) {
        addSquare(squares, s.selected, 'selected');
        if (s.movable.showDests) {
            const dests = (_a = s.movable.dests) === null || _a === void 0 ? void 0 : _a.get(s.selected);
            if (dests)
                for (const k of dests) {
                    addSquare(squares, k, 'move-dest' + (s.pieces.has(k) ? ' oc' : ''));
                }
            const pDests = s.premovable.dests;
            if (pDests)
                for (const k of pDests) {
                    addSquare(squares, k, 'premove-dest' + (s.pieces.has(k) ? ' oc' : ''));
                }
        }
    }
    const premove = s.premovable.current;
    if (premove)
        for (const k of premove)
            addSquare(squares, k, 'current-premove');
    else if (s.predroppable.current)
        addSquare(squares, s.predroppable.current.key, 'current-premove');
    const o = s.exploding;
    if (o)
        for (const k of o.keys)
            addSquare(squares, k, 'exploding' + o.stage);
    return squares;
}
function addSquare(squares, key, klass) {
    const classes = squares.get(key);
    if (classes)
        squares.set(key, `${classes} ${klass}`);
    else
        squares.set(key, klass);
}
function appendValue(map, key, value) {
    const arr = map.get(key);
    if (arr)
        arr.push(value);
    else
        map.set(key, [value]);
}
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "./node_modules/chessground/state.js":
/*!*******************************************!*\
  !*** ./node_modules/chessground/state.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaults = void 0;
const fen = __webpack_require__(/*! ./fen */ "./node_modules/chessground/fen.js");
const util_1 = __webpack_require__(/*! ./util */ "./node_modules/chessground/util.js");
function defaults() {
    return {
        pieces: fen.read(fen.initial),
        orientation: 'white',
        turnColor: 'white',
        coordinates: true,
        autoCastle: true,
        viewOnly: false,
        disableContextMenu: false,
        resizable: true,
        addPieceZIndex: false,
        pieceKey: false,
        highlight: {
            lastMove: true,
            check: true
        },
        animation: {
            enabled: true,
            duration: 200
        },
        movable: {
            free: true,
            color: 'both',
            showDests: true,
            events: {},
            rookCastle: true
        },
        premovable: {
            enabled: true,
            showDests: true,
            castle: true,
            events: {}
        },
        predroppable: {
            enabled: false,
            events: {}
        },
        draggable: {
            enabled: true,
            distance: 3,
            autoDistance: true,
            showGhost: true,
            deleteOnDropOff: false
        },
        dropmode: {
            active: false
        },
        selectable: {
            enabled: true
        },
        stats: {
            dragged: !('ontouchstart' in window)
        },
        events: {},
        drawable: {
            enabled: true,
            visible: true,
            defaultSnapToValidMove: true,
            eraseOnClick: true,
            shapes: [],
            autoShapes: [],
            brushes: {
                green: { key: 'g', color: '#15781B', opacity: 1, lineWidth: 10 },
                red: { key: 'r', color: '#882020', opacity: 1, lineWidth: 10 },
                blue: { key: 'b', color: '#003088', opacity: 1, lineWidth: 10 },
                yellow: { key: 'y', color: '#e68f00', opacity: 1, lineWidth: 10 },
                paleBlue: { key: 'pb', color: '#003088', opacity: 0.4, lineWidth: 15 },
                paleGreen: { key: 'pg', color: '#15781B', opacity: 0.4, lineWidth: 15 },
                paleRed: { key: 'pr', color: '#882020', opacity: 0.4, lineWidth: 15 },
                paleGrey: { key: 'pgr', color: '#4a4a4a', opacity: 0.35, lineWidth: 15 }
            },
            pieces: {
                baseUrl: 'https://lichess1.org/assets/piece/cburnett/'
            },
            prevSvgHash: ''
        },
        hold: util_1.timer()
    };
}
exports.defaults = defaults;
//# sourceMappingURL=state.js.map

/***/ }),

/***/ "./node_modules/chessground/svg.js":
/*!*****************************************!*\
  !*** ./node_modules/chessground/svg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.renderSvg = exports.createElement = void 0;
const util_1 = __webpack_require__(/*! ./util */ "./node_modules/chessground/util.js");
function createElement(tagName) {
    return document.createElementNS('http://www.w3.org/2000/svg', tagName);
}
exports.createElement = createElement;
function renderSvg(state, root) {
    const d = state.drawable, curD = d.current, cur = curD && curD.mouseSq ? curD : undefined, arrowDests = new Map(), bounds = state.dom.bounds();
    for (const s of d.shapes.concat(d.autoShapes).concat(cur ? [cur] : [])) {
        if (s.dest)
            arrowDests.set(s.dest, (arrowDests.get(s.dest) || 0) + 1);
    }
    const shapes = d.shapes.concat(d.autoShapes).map((s) => {
        return {
            shape: s,
            current: false,
            hash: shapeHash(s, arrowDests, false, bounds)
        };
    });
    if (cur)
        shapes.push({
            shape: cur,
            current: true,
            hash: shapeHash(cur, arrowDests, true, bounds)
        });
    const fullHash = shapes.map(sc => sc.hash).join(';');
    if (fullHash === state.drawable.prevSvgHash)
        return;
    state.drawable.prevSvgHash = fullHash;
    const defsEl = root.firstChild;
    syncDefs(d, shapes, defsEl);
    syncShapes(state, shapes, d.brushes, arrowDests, root, defsEl);
}
exports.renderSvg = renderSvg;
function syncDefs(d, shapes, defsEl) {
    const brushes = new Map();
    let brush;
    for (const s of shapes) {
        if (s.shape.dest) {
            brush = d.brushes[s.shape.brush];
            if (s.shape.modifiers)
                brush = makeCustomBrush(brush, s.shape.modifiers);
            brushes.set(brush.key, brush);
        }
    }
    const keysInDom = new Set();
    let el = defsEl.firstChild;
    while (el) {
        keysInDom.add(el.getAttribute('cgKey'));
        el = el.nextSibling;
    }
    for (const [key, brush] of brushes.entries()) {
        if (!keysInDom.has(key))
            defsEl.appendChild(renderMarker(brush));
    }
}
function syncShapes(state, shapes, brushes, arrowDests, root, defsEl) {
    const bounds = state.dom.bounds(), hashesInDom = new Map(), toRemove = [];
    for (const sc of shapes)
        hashesInDom.set(sc.hash, false);
    let el = defsEl.nextSibling, elHash;
    while (el) {
        elHash = el.getAttribute('cgHash');
        if (hashesInDom.has(elHash))
            hashesInDom.set(elHash, true);
        else
            toRemove.push(el);
        el = el.nextSibling;
    }
    for (const el of toRemove)
        root.removeChild(el);
    for (const sc of shapes) {
        if (!hashesInDom.get(sc.hash))
            root.appendChild(renderShape(state, sc, brushes, arrowDests, bounds));
    }
}
function shapeHash({ orig, dest, brush, piece, modifiers }, arrowDests, current, bounds) {
    return [bounds.width, bounds.height, current, orig, dest, brush, dest && (arrowDests.get(dest) || 0) > 1,
        piece && pieceHash(piece),
        modifiers && modifiersHash(modifiers)
    ].filter(x => x).join(',');
}
function pieceHash(piece) {
    return [piece.color, piece.role, piece.scale].filter(x => x).join(',');
}
function modifiersHash(m) {
    return '' + (m.lineWidth || '');
}
function renderShape(state, { shape, current, hash }, brushes, arrowDests, bounds) {
    let el;
    if (shape.piece)
        el = renderPiece(state.drawable.pieces.baseUrl, orient(util_1.key2pos(shape.orig), state.orientation), shape.piece, bounds);
    else {
        const orig = orient(util_1.key2pos(shape.orig), state.orientation);
        if (shape.dest) {
            let brush = brushes[shape.brush];
            if (shape.modifiers)
                brush = makeCustomBrush(brush, shape.modifiers);
            el = renderArrow(brush, orig, orient(util_1.key2pos(shape.dest), state.orientation), current, (arrowDests.get(shape.dest) || 0) > 1, bounds);
        }
        else
            el = renderCircle(brushes[shape.brush], orig, current, bounds);
    }
    el.setAttribute('cgHash', hash);
    return el;
}
function renderCircle(brush, pos, current, bounds) {
    const o = pos2px(pos, bounds), widths = circleWidth(bounds), radius = (bounds.width + bounds.height) / 32;
    return setAttributes(createElement('circle'), {
        stroke: brush.color,
        'stroke-width': widths[current ? 0 : 1],
        fill: 'none',
        opacity: opacity(brush, current),
        cx: o[0],
        cy: o[1],
        r: radius - widths[1] / 2
    });
}
function renderArrow(brush, orig, dest, current, shorten, bounds) {
    const m = arrowMargin(bounds, shorten && !current), a = pos2px(orig, bounds), b = pos2px(dest, bounds), dx = b[0] - a[0], dy = b[1] - a[1], angle = Math.atan2(dy, dx), xo = Math.cos(angle) * m, yo = Math.sin(angle) * m;
    return setAttributes(createElement('line'), {
        stroke: brush.color,
        'stroke-width': lineWidth(brush, current, bounds),
        'stroke-linecap': 'round',
        'marker-end': 'url(#arrowhead-' + brush.key + ')',
        opacity: opacity(brush, current),
        x1: a[0],
        y1: a[1],
        x2: b[0] - xo,
        y2: b[1] - yo
    });
}
function renderPiece(baseUrl, pos, piece, bounds) {
    const o = pos2px(pos, bounds), size = bounds.width / 8 * (piece.scale || 1), name = piece.color[0] + (piece.role === 'knight' ? 'n' : piece.role[0]).toUpperCase();
    return setAttributes(createElement('image'), {
        className: `${piece.role} ${piece.color}`,
        x: o[0] - size / 2,
        y: o[1] - size / 2,
        width: size,
        height: size,
        href: baseUrl + name + '.svg'
    });
}
function renderMarker(brush) {
    const marker = setAttributes(createElement('marker'), {
        id: 'arrowhead-' + brush.key,
        orient: 'auto',
        markerWidth: 4,
        markerHeight: 8,
        refX: 2.05,
        refY: 2.01
    });
    marker.appendChild(setAttributes(createElement('path'), {
        d: 'M0,0 V4 L3,2 Z',
        fill: brush.color
    }));
    marker.setAttribute('cgKey', brush.key);
    return marker;
}
function setAttributes(el, attrs) {
    for (const key in attrs)
        el.setAttribute(key, attrs[key]);
    return el;
}
function orient(pos, color) {
    return color === 'white' ? pos : [7 - pos[0], 7 - pos[1]];
}
function makeCustomBrush(base, modifiers) {
    return {
        color: base.color,
        opacity: Math.round(base.opacity * 10) / 10,
        lineWidth: Math.round(modifiers.lineWidth || base.lineWidth),
        key: [base.key, modifiers.lineWidth].filter(x => x).join(''),
    };
}
function circleWidth(bounds) {
    const base = bounds.width / 512;
    return [3 * base, 4 * base];
}
function lineWidth(brush, current, bounds) {
    return (brush.lineWidth || 10) * (current ? 0.85 : 1) / 512 * bounds.width;
}
function opacity(brush, current) {
    return (brush.opacity || 1) * (current ? 0.9 : 1);
}
function arrowMargin(bounds, shorten) {
    return (shorten ? 20 : 10) / 512 * bounds.width;
}
function pos2px(pos, bounds) {
    return [(pos[0] + 0.5) * bounds.width / 8, (7.5 - pos[1]) * bounds.height / 8];
}
//# sourceMappingURL=svg.js.map

/***/ }),

/***/ "./node_modules/chessground/types.js":
/*!*******************************************!*\
  !*** ./node_modules/chessground/types.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ranks = exports.files = exports.colors = void 0;
exports.colors = ['white', 'black'];
exports.files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
exports.ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/chessground/util.js":
/*!******************************************!*\
  !*** ./node_modules/chessground/util.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSquareCenter = exports.createEl = exports.isRightButton = exports.eventPosition = exports.setVisible = exports.translateRel = exports.translateAbs = exports.posToTranslateRel = exports.posToTranslateAbs = exports.samePiece = exports.distanceSq = exports.opposite = exports.timer = exports.memo = exports.allPos = exports.key2pos = exports.pos2key = exports.allKeys = exports.invRanks = void 0;
const cg = __webpack_require__(/*! ./types */ "./node_modules/chessground/types.js");
exports.invRanks = [...cg.ranks].reverse();
exports.allKeys = Array.prototype.concat(...cg.files.map(c => cg.ranks.map(r => c + r)));
exports.pos2key = (pos) => exports.allKeys[8 * pos[0] + pos[1]];
exports.key2pos = (k) => [k.charCodeAt(0) - 97, k.charCodeAt(1) - 49];
exports.allPos = exports.allKeys.map(exports.key2pos);
function memo(f) {
    let v;
    const ret = () => {
        if (v === undefined)
            v = f();
        return v;
    };
    ret.clear = () => { v = undefined; };
    return ret;
}
exports.memo = memo;
exports.timer = () => {
    let startAt;
    return {
        start() { startAt = performance.now(); },
        cancel() { startAt = undefined; },
        stop() {
            if (!startAt)
                return 0;
            const time = performance.now() - startAt;
            startAt = undefined;
            return time;
        }
    };
};
exports.opposite = (c) => c === 'white' ? 'black' : 'white';
exports.distanceSq = (pos1, pos2) => {
    const dx = pos1[0] - pos2[0], dy = pos1[1] - pos2[1];
    return dx * dx + dy * dy;
};
exports.samePiece = (p1, p2) => p1.role === p2.role && p1.color === p2.color;
const posToTranslateBase = (pos, asWhite, xFactor, yFactor) => [
    (asWhite ? pos[0] : 7 - pos[0]) * xFactor,
    (asWhite ? 7 - pos[1] : pos[1]) * yFactor
];
exports.posToTranslateAbs = (bounds) => {
    const xFactor = bounds.width / 8, yFactor = bounds.height / 8;
    return (pos, asWhite) => posToTranslateBase(pos, asWhite, xFactor, yFactor);
};
exports.posToTranslateRel = (pos, asWhite) => posToTranslateBase(pos, asWhite, 100, 100);
exports.translateAbs = (el, pos) => {
    el.style.transform = `translate(${pos[0]}px,${pos[1]}px)`;
};
exports.translateRel = (el, percents) => {
    el.style.transform = `translate(${percents[0]}%,${percents[1]}%)`;
};
exports.setVisible = (el, v) => {
    el.style.visibility = v ? 'visible' : 'hidden';
};
exports.eventPosition = (e) => {
    var _a;
    if (e.clientX || e.clientX === 0)
        return [e.clientX, e.clientY];
    if ((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a[0])
        return [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
    return;
};
exports.isRightButton = (e) => e.buttons === 2 || e.button === 2;
exports.createEl = (tagName, className) => {
    const el = document.createElement(tagName);
    if (className)
        el.className = className;
    return el;
};
function computeSquareCenter(key, asWhite, bounds) {
    const pos = exports.key2pos(key);
    if (!asWhite) {
        pos[0] = 7 - pos[0];
        pos[1] = 7 - pos[1];
    }
    return [
        bounds.left + bounds.width * pos[0] / 8 + bounds.width / 16,
        bounds.top + bounds.height * (7 - pos[1]) / 8 + bounds.height / 16
    ];
}
exports.computeSquareCenter = computeSquareCenter;
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/chessground/wrap.js":
/*!******************************************!*\
  !*** ./node_modules/chessground/wrap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.renderWrap = void 0;
const util_1 = __webpack_require__(/*! ./util */ "./node_modules/chessground/util.js");
const types_1 = __webpack_require__(/*! ./types */ "./node_modules/chessground/types.js");
const svg_1 = __webpack_require__(/*! ./svg */ "./node_modules/chessground/svg.js");
function renderWrap(element, s, relative) {
    element.innerHTML = '';
    element.classList.add('cg-wrap');
    for (const c of types_1.colors)
        element.classList.toggle('orientation-' + c, s.orientation === c);
    element.classList.toggle('manipulable', !s.viewOnly);
    const helper = util_1.createEl('cg-helper');
    element.appendChild(helper);
    const container = util_1.createEl('cg-container');
    helper.appendChild(container);
    const board = util_1.createEl('cg-board');
    container.appendChild(board);
    let svg;
    if (s.drawable.visible && !relative) {
        svg = svg_1.createElement('svg');
        svg.appendChild(svg_1.createElement('defs'));
        container.appendChild(svg);
    }
    if (s.coordinates) {
        const orientClass = s.orientation === 'black' ? ' black' : '';
        container.appendChild(renderCoords(types_1.ranks, 'ranks' + orientClass));
        container.appendChild(renderCoords(types_1.files, 'files' + orientClass));
    }
    let ghost;
    if (s.draggable.showGhost && !relative) {
        ghost = util_1.createEl('piece', 'ghost');
        util_1.setVisible(ghost, false);
        container.appendChild(ghost);
    }
    return {
        board,
        container,
        ghost,
        svg
    };
}
exports.renderWrap = renderWrap;
function renderCoords(elems, className) {
    const el = util_1.createEl('coords', className);
    let f;
    for (const elem of elems) {
        f = util_1.createEl('coord');
        f.textContent = elem;
        el.appendChild(f);
    }
    return el;
}
//# sourceMappingURL=wrap.js.map

/***/ }),

/***/ "./node_modules/mousetrap/mousetrap.js":
/*!*********************************************!*\
  !*** ./node_modules/mousetrap/mousetrap.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.5
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
        // not the initial event target in the shadow tree. Note that not all events cross the
        // shadow boundary.
        // For shadow trees with `mode: 'open'`, the initial event target is the first element in
        // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
        // target cannot be obtained.
        if ('composedPath' in e && typeof e.composedPath === 'function') {
            // For open shadow trees, update `element` so that the following check works.
            var initialEventTarget = e.composedPath()[0];
            if (initialEventTarget !== e.target) {
                element = initialEventTarget;
            }
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if ( true && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return Mousetrap;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),

/***/ "./node_modules/roddeh-i18n/dist/i18n.js":
/*!***********************************************!*\
  !*** ./node_modules/roddeh-i18n/dist/i18n.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Generated by CoffeeScript 1.6.2
(function() {
  'use strict';
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  (function(root, factory) {
    if (true) {
      return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return root.i18n = factory();
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  })((typeof self !== "undefined" && self !== null ? self : this), function() {
    var Translator, i18n, translator;

    Translator = (function() {
      function Translator() {
        this.translate = __bind(this.translate, this);        this.data = {
          values: {},
          contexts: []
        };
        this.globalContext = {};
      }

      Translator.prototype.translate = function(text, defaultNumOrFormatting, numOrFormattingOrContext, formattingOrContext, context) {
        var defaultText, formatting, isObject, num;

        if (context == null) {
          context = this.globalContext;
        }
        isObject = function(obj) {
          var type;

          type = typeof obj;
          return type === "function" || type === "object" && !!obj;
        };
        if (isObject(defaultNumOrFormatting)) {
          defaultText = null;
          num = null;
          formatting = defaultNumOrFormatting;
          context = numOrFormattingOrContext || this.globalContext;
        } else {
          if (typeof defaultNumOrFormatting === "number") {
            defaultText = null;
            num = defaultNumOrFormatting;
            formatting = numOrFormattingOrContext;
            context = formattingOrContext || this.globalContext;
          } else {
            defaultText = defaultNumOrFormatting;
            if (typeof numOrFormattingOrContext === "number") {
              num = numOrFormattingOrContext;
              formatting = formattingOrContext;
              context = context;
            } else {
              num = null;
              formatting = numOrFormattingOrContext;
              context = formattingOrContext || this.globalContext;
            }
          }
        }
        if (isObject(text)) {
          if (isObject(text['i18n'])) {
            text = text['i18n'];
          }
          return this.translateHash(text, context);
        } else {
          return this.translateText(text, num, formatting, context, defaultText);
        }
      };

      Translator.prototype.add = function(d) {
        var c, k, v, _i, _len, _ref, _ref1, _results;

        if ((d.values != null)) {
          _ref = d.values;
          for (k in _ref) {
            v = _ref[k];
            this.data.values[k] = v;
          }
        }
        if ((d.contexts != null)) {
          _ref1 = d.contexts;
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            c = _ref1[_i];
            _results.push(this.data.contexts.push(c));
          }
          return _results;
        }
      };

      Translator.prototype.setContext = function(key, value) {
        return this.globalContext[key] = value;
      };

      Translator.prototype.extend = function(ext) {
        return this.extension = ext;
      };

      Translator.prototype.clearContext = function(key) {
        return this.globalContext[key] = null;
      };

      Translator.prototype.reset = function() {
        this.resetData();
        return this.resetContext();
      };

      Translator.prototype.resetData = function() {
        return this.data = {
          values: {},
          contexts: []
        };
      };

      Translator.prototype.resetContext = function() {
        return this.globalContext = {};
      };

      Translator.prototype.translateHash = function(hash, context) {
        var k, v;

        for (k in hash) {
          v = hash[k];
          if (typeof v === "string") {
            hash[k] = this.translateText(v, null, null, context);
          }
        }
        return hash;
      };

      Translator.prototype.translateText = function(text, num, formatting, context, defaultText) {
        var contextData, result;

        if (context == null) {
          context = this.globalContext;
        }
        if (this.data == null) {
          return this.useOriginalText(defaultText || text, num, formatting);
        }
        contextData = this.getContextData(this.data, context);
        if (contextData != null) {
          result = this.findTranslation(text, num, formatting, contextData.values, defaultText);
        }
        if (result == null) {
          result = this.findTranslation(text, num, formatting, this.data.values, defaultText);
        }
        if (result == null) {
          return this.useOriginalText(defaultText || text, num, formatting);
        }
        return result;
      };

      Translator.prototype.findTranslation = function(text, num, formatting, data, defaultText) {
        var a, b, c, d, e, result, triple, value, _i, _len;

        value = data[text];
        if (value == null) {
          return null;
        }
        if (typeof value === "object" && !Array.isArray(value)) {
          if (this.extension && typeof this.extension === "function") {
            value = this.extension(text, num, formatting, value);
            value = this.applyNumbers(value, num);
            return this.applyFormatting(value, num, formatting);
          } else {
            return this.useOriginalText(defaultText || text, num, formatting);
          }
        }
        if ((num == null) && !Array.isArray(value)) {
          if (typeof value === "string") {
            return this.applyFormatting(value, num, formatting);
          }
        } else {
          if (value instanceof Array || value.length) {
            a = num === null;
            for (_i = 0, _len = value.length; _i < _len; _i++) {
              triple = value[_i];
              b = triple[0] === null;
              c = triple[1] === null;
              d = num >= triple[0];
              e = num <= triple[1];
              if (a && b && c || !a && (!b && d && (c || e) || b && !c && e)) {
                result = this.applyFormatting(triple[2].replace("-%n", String(-num)), num, formatting);
                return this.applyFormatting(result.replace("%n", String(num)), num, formatting);
              }
            }
          }
        }
        return null;
      };

      Translator.prototype.applyNumbers = function(str, num) {
        str = str.replace("-%n", String(-num));
        str = str.replace("%n", String(num));
        return str;
      };

      Translator.prototype.getContextData = function(data, context) {
        var c, equal, key, value, _i, _len, _ref, _ref1;

        if (data.contexts == null) {
          return null;
        }
        _ref = data.contexts;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          c = _ref[_i];
          equal = true;
          _ref1 = c.matches;
          for (key in _ref1) {
            value = _ref1[key];
            equal = equal && value === context[key];
          }
          if (equal) {
            return c;
          }
        }
        return null;
      };

      Translator.prototype.useOriginalText = function(text, num, formatting) {
        if (num == null) {
          return this.applyFormatting(text, num, formatting);
        }
        return this.applyFormatting(text.replace("%n", String(num)), num, formatting);
      };

      Translator.prototype.applyFormatting = function(text, num, formatting) {
        var ind, regex;

        for (ind in formatting) {
          regex = new RegExp("%{" + ind + "}", "g");
          text = text.replace(regex, formatting[ind]);
        }
        return text;
      };

      return Translator;

    })();
    translator = new Translator();
    i18n = translator.translate;
    i18n.translator = translator;
    i18n.create = function(data) {
      var trans;

      trans = new Translator();
      if (data != null) {
        trans.add(data);
      }
      trans.translate.create = i18n.create;
      trans.translate.translator = trans;
      return trans.translate;
    };
    return i18n;
  });

}).call(this);


/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ }),

/***/ "./node_modules/sweetalert/dist/sweetalert.min.js":
/*!********************************************************!*\
  !*** ./node_modules/sweetalert/dist/sweetalert.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {!function(t,e){ true?module.exports=e():undefined}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../../../../node_modules/timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").clearImmediate))

/***/ }),

/***/ "./src/Timer.js":
/*!**********************!*\
  !*** ./src/Timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Timer.src: A periodic timer for Node.src and the browser.
 *
 * Copyright (c) 2012 Arthur Klepchukov, Jarvis Badgley, Florian Schäfer
 * Licensed under the BSD license (BSD_LICENSE.txt)
 *
 * Version: 0.0.1
 *
 */

let timeStringToMilliseconds = function(timeString) {
    if (typeof timeString === 'string') {

        if (isNaN(parseInt(timeString, 10))) {
            timeString = '1' + timeString;
        }

        var match = timeString
            .replace(/[^a-z0-9\.]/g, '')
            .match(/(?:(\d+(?:\.\d+)?)(?:days?|d))?(?:(\d+(?:\.\d+)?)(?:hours?|hrs?|h))?(?:(\d+(?:\.\d+)?)(?:minutes?|mins?|m\b))?(?:(\d+(?:\.\d+)?)(?:seconds?|secs?|s))?(?:(\d+(?:\.\d+)?)(?:milliseconds?|ms))?/);

        if (match[0]) {
            return parseFloat(match[1] || 0) * 86400000 +  // days
                parseFloat(match[2] || 0) * 3600000 +   // hours
                parseFloat(match[3] || 0) * 60000 +     // minutes
                parseFloat(match[4] || 0) * 1000 +      // seconds
                parseInt(match[5] || 0, 10);            // milliseconds
        }

        if (!isNaN(parseInt(timeString, 10))) {
            return parseInt(timeString, 10);
        }
    }

    if (typeof timeString === 'number') {
        return timeString;
    }

    return 0;
};

let  millisecondsToTicks = function(milliseconds, resolution) {
    return parseInt(milliseconds / resolution, 10) || 1;
};


function Timer(resolution) {

    if (this instanceof Timer === false) {
        return new Timer(resolution);
    }

    this._notifications = [];
    this._resolution = timeStringToMilliseconds(resolution) || 1000;
    this._running = false;
    this._ticks = 0;
    this._timer = null;
    this._drift = 0;
}

Timer.prototype = {
    start: function () {
        var self = this;
        if (!this._running) {
            this._running = !this._running;
            setTimeout(function loopsyloop() {
                self._ticks++;
                for (var i = 0, l = self._notifications.length; i < l; i++) {
                    if (self._notifications[i] && self._ticks % self._notifications[i].ticks === 0) {
                        self._notifications[i].callback.call(self._notifications[i], { ticks: self._ticks, resolution: self._resolution });
                    }
                }
                if (self._running) {
                    self._timer = setTimeout(loopsyloop, self._resolution + self._drift);
                    self._drift = 0;
                }
            }, this._resolution + this._drift);
            this._drift = 0;
        }
        return this;
    },
    stop: function () {
        if (this._running) {
            this._running = !this._running;
            clearTimeout(this._timer);
        }
        return this;
    },
    reset: function () {
        this.stop();
        this._ticks = 0;
        return this;
    },
    clear: function () {
        this.reset();
        this._notifications = [];
        return this;
    },
    ticks: function () {
        return this._ticks;
    },
    resolution: function () {
        return this._resolution;
    },
    running: function () {
        return this._running;
    },
    bind: function (when, callback) {
        if (when && callback) {
            var ticks = millisecondsToTicks(timeStringToMilliseconds(when), this._resolution);
            this._notifications.push({
                ticks: ticks,
                callback: callback
            });
        }
        return this;
    },
    unbind: function (callback) {
        if (!callback) {
            this._notifications = [];
        } else {
            for (var i = 0, l = this._notifications.length; i < l; i++) {
                if (this._notifications[i] && this._notifications[i].callback === callback) {
                    this._notifications.splice(i, 1);
                }
            }
        }
        return this;
    },
    drift: function (timeDrift) {
        this._drift = timeDrift;
        return this;
    }
};

Timer.prototype.every = Timer.prototype.bind;
Timer.prototype.after = function (when, callback) {
    var self = this;
    Timer.prototype.bind.call(self, when, function fn () {
        Timer.prototype.unbind.call(self, fn);
        callback.apply(this, arguments);
    });
    return this;
};

/* harmony default export */ __webpack_exports__["default"] = (Timer);


/***/ }),

/***/ "./src/css/chessground.css":
/*!*********************************!*\
  !*** ./src/css/chessground.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./chessground.css */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!./src/css/chessground.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/css/pgnvjs.css":
/*!****************************!*\
  !*** ./src/css/pgnvjs.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./pgnvjs.css */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!./src/css/pgnvjs.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/css/theme.css":
/*!***************************!*\
  !*** ./src/css/theme.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./theme.css */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/index.js!./src/css/theme.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/fontawesome/webfonts/fa-solid-900.eot":
/*!***************************************************!*\
  !*** ./src/fontawesome/webfonts/fa-solid-900.eot ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:application/vnd.ms-fontobject;base64,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");

/***/ }),

/***/ "./src/fontawesome/webfonts/fa-solid-900.svg":
/*!***************************************************!*\
  !*** ./src/fontawesome/webfonts/fa-solid-900.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IS0tCkZvbnQgQXdlc29tZSBQcm8gNS4xMy4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tCkxpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpCi0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgRm9udEZvcmdlIDIwMTkwODAxIGF0IFN1biBKdW4gMjggMDk6MjQ6NTQgMjAyMAogQnkgcm9vdApDb3B5cmlnaHQgKGMpIEZvbnQgQXdlc29tZQo8L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9IkZvbnRBd2Vzb21lNVByby1Tb2xpZCIgaG9yaXotYWR2LXg9IjUxMiIgPgogIDxmb250LWZhY2UgCiAgICBmb250LWZhbWlseT0iRm9udCBBd2Vzb21lIDUgUHJvIFNvbGlkIgogICAgZm9udC13ZWlnaHQ9IjkwMCIKICAgIGZvbnQtc3RyZXRjaD0ibm9ybWFsIgogICAgdW5pdHMtcGVyLWVtPSI1MTIiCiAgICBwYW5vc2UtMT0iMiAwIDUgMyAwIDAgMCAwIDAgMCIKICAgIGFzY2VudD0iNDQ4IgogICAgZGVzY2VudD0iLTY0IgogICAgYmJveD0iLTMuOTkxNDZlLTA2IC02NCA1MTIgNDQ4IgogICAgdW5kZXJsaW5lLXRoaWNrbmVzcz0iMjUiCiAgICB1bmRlcmxpbmUtcG9zaXRpb249Ii01MCIKICAgIHVuaWNvZGUtcmFuZ2U9IlUrMDAyMC1GMjhCIgogIC8+CiAgICA8bWlzc2luZy1nbHlwaCAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImNvZyIgdW5pY29kZT0iJiN4ZjAxMzsiIApkPSJNNDg3LjQgMTMyLjNjNC44OTk0MSAtMi43OTk4IDcuMDk5NjEgLTguNTk5NjEgNS41OTk2MSAtMTQuMDk5NmMtMTEuMDk5NiAtMzUuNzAwMiAtMzAgLTY3LjkwMDQgLTU0LjcwMDIgLTk0LjYwMDZjLTMuNzk5OCAtNC4xOTkyMiAtOS44OTk0MSAtNS4wOTk2MSAtMTQuNzk5OCAtMi4yOTk4bC00Mi41OTk2IDI0LjYwMDZjLTE4IC0xNS4zMDA4IC0zOC42MDA2IC0yNy4yMDAyIC02MC44MDA4IC0zNS4xMDA2di00OS4yMDAyCmMwIC01LjU5OTYxIC0zLjg5OTQxIC0xMC41IC05LjM5OTQxIC0xMS42OTkyYy0zNC45MDA0IC03LjgwMDc4IC03Mi41IC04LjIwMDIgLTEwOS4yIDBjLTUuNSAxLjE5OTIyIC05LjQwMDM5IDYuMDk5NjEgLTkuNDAwMzkgMTEuNjk5MnY0OS4yMDAyYy0yMi4yOTk4IDcuNzk5OCAtNDIuODk5NCAxOS43MDAyIC02MC43OTk4IDM1LjEwMDZsLTQyLjU5OTYgLTI0LjYwMDZjLTQuNzk5OCAtMi43OTk4IC0xMSAtMS43OTk4IC0xNC43OTk4IDIuMjk5OApjLTI0LjcwMDIgMjYuODAwOCAtNDMuNjAwNiA1OSAtNTQuNzAwMiA5NC42MDA2Yy0xLjYwMDU5IDUuMzk5NDEgMC41OTk2MDkgMTEuMjAwMiA1LjUgMTRsNDIuNTk5NiAyNC41OTk2Yy00LjI5OTggMjMuMjAwMiAtNC4yOTk4IDQ3IDAgNzAuMjAwMmwtNDIuNTk5NiAyNC41OTk2Yy00LjkwMDM5IDIuODAwNzggLTcuMjAwMiA4LjYwMDU5IC01LjUgMTRjMTEuMDk5NiAzNS43MDAyIDMwIDY3LjkwMDQgNTQuNzAwMiA5NC42MDA2CmMzLjc5OTggNC4yMDAyIDkuODk5NDEgNS4wOTk2MSAxNC43OTk4IDIuMjk5OGw0Mi41IC0yNC41OTk2YzE4IDE1LjI5OTggMzguNTk5NiAyNy4xOTkyIDYwLjc5OTggMzUuMDk5NnY0OS4yMDAyYzAgNS41OTk2MSAzLjkwMDM5IDEwLjUgOS40MDAzOSAxMS43MDAyYzM0Ljg5OTQgNy43OTk4IDcyLjUgOC4xOTkyMiAxMDkuMTk5IDBjNS41IC0xLjIwMDIgOS40MDAzOSAtNi4xMDA1OSA5LjQwMDM5IC0xMS43MDAydi00OS4xMDA2CmMyMi4yOTk4IC03Ljc5OTggNDIuOTAwNCAtMTkuNjk5MiA2MC43OTk4IC0zNS4wOTk2bDQyLjYwMDYgMjQuNTk5NmM0Ljc5OTggMi44MDA3OCAxMSAxLjgwMDc4IDE0Ljc5OTggLTIuMjk5OGMyNC43MDAyIC0yNi43OTk4IDQzLjU5OTYgLTU5IDU0LjcwMDIgLTk0LjU5OTZjMS41OTk2MSAtNS40MDAzOSAtMC42MDA1ODYgLTExLjIwMDIgLTUuNSAtMTRsLTQyLjYwMDYgLTI0LjYwMDYKYzQuMjk5OCAtMjMuMTk5MiA0LjI5OTggLTQ3IDAgLTcwLjE5OTJ6TTI1NiAxMTJjNDQuMDk5NiAwIDgwIDM1LjkwMDQgODAgODBzLTM1LjkwMDQgODAgLTgwIDgwcy04MCAtMzUuOTAwNCAtODAgLTgwczM1LjkwMDQgLTgwIDgwIC04MHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icHJpbnQiIHVuaWNvZGU9IiYjeGYwMmY7IiAKZD0iTTQ0OCAyNTZjMzUuMzQ5NiAwIDY0IC0yOC42NTA0IDY0IC02NHYtMTEyYzAgLTguODM5ODQgLTcuMTYwMTYgLTE2IC0xNiAtMTZoLTQ4di05NmMwIC0xNy42Njk5IC0xNC4zMzAxIC0zMiAtMzIgLTMyaC0zMjBjLTE3LjY2OTkgMCAtMzIgMTQuMzMwMSAtMzIgMzJ2OTZoLTQ4Yy04LjgzOTg0IDAgLTE2IDcuMTYwMTYgLTE2IDE2djExMmMwIDM1LjM0OTYgMjguNjUwNCA2NCA2NCA2NHYxNjBjMCAxNy42Njk5IDE0LjMzMDEgMzIgMzIgMzIKaDI3NC43NGM4LjQ5MDIzIDAgMTYuNjI5OSAtMy4zNzAxMiAyMi42Mjk5IC05LjM3MDEybDQ1LjI1OTggLTQ1LjI1YzYgLTYuMDA5NzcgOS4zNzAxMiAtMTQuMTM5NiA5LjM3MDEyIC0yMi42Mjk5di0xMTQuNzV6TTM4NCAwdjk2aC0yNTZ2LTk2aDI1NnpNMzg0IDIyNHY5NmgtNDhjLTguODM5ODQgMCAtMTYgNy4xNjAxNiAtMTYgMTZ2NDhoLTE5MnYtMTYwaDI1NnpNNDMyIDE1MmMxMy4yNSAwIDI0IDEwLjc1IDI0IDI0CmMwIDEzLjI1OTggLTEwLjc1IDI0IC0yNCAyNHMtMjQgLTEwLjc0MDIgLTI0IC0yNGMwIC0xMy4yNSAxMC43NSAtMjQgMjQgLTI0eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJhZGp1c3QiIHVuaWNvZGU9IiYjeGYwNDI7IiAKZD0iTTggMTkyYzAgMTM2Ljk2NyAxMTEuMDM0IDI0OCAyNDggMjQ4czI0OCAtMTExLjAzNCAyNDggLTI0OHMtMTExLjAzMyAtMjQ4IC0yNDggLTI0OHMtMjQ4IDExMS4wMzQgLTI0OCAyNDh6TTI1NiA4YzEwMS42ODkgMCAxODQgODIuMjk0OSAxODQgMTg0YzAgMTAxLjY4OSAtODIuMjk0OSAxODQgLTE4NCAxODR2LTM2OHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ic3RlcC1iYWNrd2FyZCIgdW5pY29kZT0iJiN4ZjA0ODsiIGhvcml6LWFkdi14PSI0NDgiIApkPSJNNjQgLTIwdjQyNGMwIDYuNTk5NjEgNS40MDAzOSAxMiAxMiAxMmg0OGM2LjU5OTYxIDAgMTIgLTUuNDAwMzkgMTIgLTEydi0xNzYuNGwxOTUuNSAxODFjMjAuNTk5NiAxNy4xMDA2IDUyLjUgMi44MDA3OCA1Mi41IC0yNC41OTk2di0zODRjMCAtMjcuNDAwNCAtMzEuOTAwNCAtNDEuNzAwMiAtNTIuNSAtMjQuNTk5NmwtMTk1LjUgMTc5Ljg5OXYtMTc1LjNjMCAtNi41OTk2MSAtNS40MDAzOSAtMTIgLTEyIC0xMmgtNDgKYy02LjU5OTYxIDAgLTEyIDUuNDAwMzkgLTEyIDEyeiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJmYXN0LWJhY2t3YXJkIiB1bmljb2RlPSImI3hmMDQ5OyIgCmQ9Ik0wIDEydjM2MGMwIDYuNTk5NjEgNS40MDAzOSAxMiAxMiAxMmg0MGM2LjU5OTYxIDAgMTIgLTUuNDAwMzkgMTIgLTEydi0xNTEuOWwxNzEuNSAxNTYuNWMyMC41OTk2IDE3LjEwMDYgNTIuNSAyLjgwMDc4IDUyLjUgLTI0LjU5OTZ2LTEzMS45bDE3MS41IDE1Ni41YzIwLjU5OTYgMTcuMTAwNiA1Mi41IDIuODAwNzggNTIuNSAtMjQuNTk5NnYtMzIwYzAgLTI3LjQwMDQgLTMxLjkwMDQgLTQxLjcwMDIgLTUyLjUgLTI0LjU5OTYKbC0xNzEuNSAxNTUuM3YtMTMwLjdjMCAtMjcuNDAwNCAtMzEuOTAwNCAtNDEuNzAwMiAtNTIuNSAtMjQuNTk5NmwtMTcxLjUgMTU1LjN2LTE1MC43YzAgLTYuNTk5NjEgLTUuNDAwMzkgLTEyIC0xMiAtMTJoLTQwYy02LjU5OTYxIDAgLTEyIDUuNDAwMzkgLTEyIDEyeiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJmYXN0LWZvcndhcmQiIHVuaWNvZGU9IiYjeGYwNTA7IiAKZD0iTTUxMiAzNzJ2LTM2MGMwIC02LjU5OTYxIC01LjQwMDM5IC0xMiAtMTIgLTEyaC00MGMtNi41OTk2MSAwIC0xMiA1LjQwMDM5IC0xMiAxMnYxNTEuOWwtMTcxLjUgLTE1Ni41Yy0yMC41OTk2IC0xNy4yMDAyIC01Mi41IC0yLjgwMDc4IC01Mi41IDI0LjU5OTZ2MTMxLjlsLTE3MS41IC0xNTYuNWMtMjAuNTk5NiAtMTcuMjAwMiAtNTIuNSAtMi44MDA3OCAtNTIuNSAyNC41OTk2djMyMApjMCAyNy40MDA0IDMxLjkwMDQgNDEuNzAwMiA1Mi41IDI0LjU5OTZsMTcxLjUgLTE1NS4zOTl2MTMwLjhjMCAyNy40MDA0IDMxLjkwMDQgNDEuNzAwMiA1Mi41IDI0LjU5OTZsMTcxLjUgLTE1NS4zOTl2MTUwLjhjMCA2LjU5OTYxIDUuNDAwMzkgMTIgMTIgMTJoNDBjNi41OTk2MSAwIDEyIC01LjQwMDM5IDEyIC0xMnoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ic3RlcC1mb3J3YXJkIiB1bmljb2RlPSImI3hmMDUxOyIgaG9yaXotYWR2LXg9IjQ0OCIgCmQ9Ik0zODQgNDA0di00MjRjMCAtNi41OTk2MSAtNS40MDAzOSAtMTIgLTEyIC0xMmgtNDhjLTYuNTk5NjEgMCAtMTIgNS40MDAzOSAtMTIgMTJ2MTc2LjRsLTE5NS41IC0xODFjLTIwLjU5OTYgLTE3LjEwMDYgLTUyLjUgLTIuODAwNzggLTUyLjUgMjQuNTk5NnYzODRjMCAyNy40MDA0IDMxLjkwMDQgNDEuNzAwMiA1Mi41IDI0LjU5OTZsMTk1LjUgLTE3OS44OTl2MTc1LjNjMCA2LjU5OTYxIDUuNDAwMzkgMTIgMTIgMTJoNDgKYzYuNTk5NjEgMCAxMiAtNS40MDAzOSAxMiAtMTJ6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9ImhhbmQtcG9pbnQtdXAiIHVuaWNvZGU9IiYjeGYwYTY7IiBob3Jpei1hZHYteD0iMzg0IiAKZD0iTTEzNS42NTIgNDQ4YzIzLjYyNSAwIDQzLjgyNTIgLTIwLjY1MDQgNDMuODI1MiAtNDQuNzk5OHYtOTkuODUxNmMxNy4wNDg4IDE2LjM0MDggNDkuNzY2NiAxOC4zNDY3IDcwLjk0NDMgLTYuMjk4ODNjMjIuODI5MSAxNC4yODgxIDUzLjAxNzYgMi4xNDc0NiA2Mi4zMTU0IC0xNi40NTAyYzQ5LjE0MDYgOC45NzQ2MSA3MS4yNjI3IC0yMS45NDUzIDcxLjI2MjcgLTcyLjU5OTYKYzAgLTIuNzQ2MDkgLTAuMjAzMTI1IC0xMy4yNzY0IC0wLjE5NTMxMiAtMTZjMC4xNjc5NjkgLTYxLjk3MDcgLTMxLjA2NDUgLTc2Ljg5MzYgLTM4LjMxNDUgLTEyMy43MzFjLTEuODA3NjIgLTExLjY3MjkgLTExLjg5MTYgLTIwLjI2ODYgLTIzLjcwNDEgLTIwLjI2ODZoLTE3MS41MjVsLTAuMDAwOTc2NTYyIDAuMDAxOTUzMTJjLTE4LjM2NjIgMC4wMTA3NDIyIC0zNS44ODg3IDEwLjYwNzQgLTQzLjg0NDcgMjguNDYzOQpjLTEyLjk5NDEgMjguODg1NyAtNDkuMDM4MSA5NS40MTIxIC03Ny4zMjMyIDEwNy41MzRjLTE4LjE5NDMgNy43OTY4OCAtMjkuMDg0IDIxLjM4MzggLTI5LjA5MTggNDBjLTAuMDEzNjcxOSAzNC4yMjE3IDM1LjA5NzcgNTcuNzUyIDY2LjkwODIgNDQuMTE5MWM4LjM1ODQgLTMuNTgzMDEgMTYuNjY5OSAtOC4zMTI1IDI0LjkxOCAtMTQuMTUzM3YxNDkuMjM0YzAgMjMuNDUwMiAyMC41NDMgNDQuNzk5OCA0My44MjYyIDQ0Ljc5OTh6TTEzNiAzMgpoMTkyYzEzLjI1NDkgMCAyNCAtMTAuNzQ1MSAyNCAtMjR2LTQ4YzAgLTEzLjI1NDkgLTEwLjc0NTEgLTI0IC0yNCAtMjRoLTE5MmMtMTMuMjU0OSAwIC0yNCAxMC43NDUxIC0yNCAyNHY0OGMwIDEzLjI1NDkgMTAuNzQ1MSAyNCAyNCAyNHpNMzA0IDRjLTExLjA0NTkgMCAtMjAgLTguOTU0MSAtMjAgLTIwczguOTU0MSAtMjAgMjAgLTIwczIwIDguOTU0MSAyMCAyMHMtOC45NTQxIDIwIC0yMCAyMHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iY3V0IiB1bmljb2RlPSImI3hmMGM0OyIgaG9yaXotYWR2LXg9IjQ0OCIgCmQ9Ik0yNzguMDYgMTkybDE2Ni40MjEgLTE2Ni40M2M0LjY4OTQ1IC00LjY5MDQzIDQuNjg5NDUgLTEyLjI5IDAgLTE2Ljk3MDdjLTMyLjgwMDggLTMyLjc5OTggLTg1Ljk5MDIgLTMyLjc5OTggLTExOC43OSAwbC0xMTUuNTExIDExNS41MjFsLTI0Ljg1OTQgLTI0Ljg2MDRjNC4zMDk1NyAtMTAuOTE5OSA2LjY3OTY5IC0yMi44MDk2IDYuNjc5NjkgLTM1LjI1OThjMCAtNTMuMDE5NSAtNDIuOTgwNSAtOTYgLTk2IC05NgpzLTk2IDQyLjk4MDUgLTk2IDk2czQyLjk4MDUgOTYgOTYgOTZjNC41MzAyNyAwIDguOTkwMjMgLTAuMzIwMzEyIDEzLjM2MDQgLTAuOTI5Njg4bDMyLjkyOTcgMzIuOTI5N2wtMzIuOTI5NyAzMi45Mjk3Yy00LjM3MDEyIC0wLjYwOTM3NSAtOC44MjAzMSAtMC45Mjk2ODggLTEzLjM2MDQgLTAuOTI5Njg4Yy01My4wMTk1IDAgLTk2IDQyLjk4MDUgLTk2IDk2czQyLjk4MDUgOTYgOTYgOTZzOTYgLTQyLjk4MDUgOTYgLTk2CmMwIC0xMi40NTAyIC0yLjM3MDEyIC0yNC4zMzk4IC02LjY3OTY5IC0zNS4yNTk4bDI0Ljg1OTQgLTI0Ljg2MDRsMTE1LjUxMSAxMTUuNTIxYzMyLjc5OTggMzIuNzk5OCA4NS45ODkzIDMyLjc5OTggMTE4Ljc5IDBjNC42ODk0NSAtNC42ODA2NiA0LjY4OTQ1IC0xMi4yODAzIDAgLTE2Ljk3MDd6TTk2IDI4OGMxNy42Mzk2IDAgMzIgMTQuMzYwNCAzMiAzMnMtMTQuMzYwNCAzMiAtMzIgMzJzLTMyIC0xNC4zNjA0IC0zMiAtMzIKczE0LjM2MDQgLTMyIDMyIC0zMnpNOTYgMzJjMTcuNjM5NiAwIDMyIDE0LjM2MDQgMzIgMzJzLTE0LjM2MDQgMzIgLTMyIDMycy0zMiAtMTQuMzYwNCAtMzIgLTMyczE0LjM2MDQgLTMyIDMyIC0zMnoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icGxheS1jaXJjbGUiIHVuaWNvZGU9IiYjeGYxNDQ7IiAKZD0iTTI1NiA0NDBjMTM3IDAgMjQ4IC0xMTEgMjQ4IC0yNDhzLTExMSAtMjQ4IC0yNDggLTI0OHMtMjQ4IDExMSAtMjQ4IDI0OHMxMTEgMjQ4IDI0OCAyNDh6TTM3MS43IDE2OGMxNi4zOTk0IDkuMDk5NjEgMTYuMzk5NCAzMi43OTk4IDAgNDJsLTE3NiAxMDdjLTE1LjkwMDQgOC43OTk4IC0zNS43MDAyIC0yLjU5OTYxIC0zNS43MDAyIC0yMXYtMjA4YzAgLTE4LjUgMTkuOTAwNCAtMjkuNzk5OCAzNS43MDAyIC0yMXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0icGF1c2UtY2lyY2xlIiB1bmljb2RlPSImI3hmMjhiOyIgCmQ9Ik0yNTYgNDQwYzEzNyAwIDI0OCAtMTExIDI0OCAtMjQ4cy0xMTEgLTI0OCAtMjQ4IC0yNDhzLTI0OCAxMTEgLTI0OCAyNDhzMTExIDI0OCAyNDggMjQ4ek0yNDAgMTEydjE2MGMwIDguNzk5OCAtNy4yMDAyIDE2IC0xNiAxNmgtNDhjLTguNzk5OCAwIC0xNiAtNy4yMDAyIC0xNiAtMTZ2LTE2MGMwIC04Ljc5OTggNy4yMDAyIC0xNiAxNiAtMTZoNDhjOC43OTk4IDAgMTYgNy4yMDAyIDE2IDE2ek0zNTIgMTEydjE2MApjMCA4Ljc5OTggLTcuMjAwMiAxNiAtMTYgMTZoLTQ4Yy04Ljc5OTggMCAtMTYgLTcuMjAwMiAtMTYgLTE2di0xNjBjMCAtOC43OTk4IDcuMjAwMiAtMTYgMTYgLTE2aDQ4YzguNzk5OCAwIDE2IDcuMjAwMiAxNiAxNnoiIC8+CiAgPC9mb250Pgo8L2RlZnM+PC9zdmc+Cg==");

/***/ }),

/***/ "./src/fontawesome/webfonts/fa-solid-900.ttf":
/*!***************************************************!*\
  !*** ./src/fontawesome/webfonts/fa-solid-900.ttf ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:font/ttf;base64,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ARIKDA4GJygBDgEjRxIFCgUcH0UIDBwaHAoFCZUSG/5gDgowCg4OCjAKDhwMEAwMEAAAAAADAAD/4AHFAaAAJwAvADcAACUXFgcGIi8BBxYVFAYiJjQ2MzIXNycGIyImNDYyFhUUBxc3NjIXFgcEMjY0JiIGFBIyNjQmIgYUARamCQkYRhh0GQc4UDg4KAcGISEGByg4OFA4Bxl0GEYYCQn+lxoTExoTExoTExoTwKYJCBkZcxkREig4OFA4ASEhAThQODgoEhEZcxkZCAlGExoTExr+7RMaExMaAAACAAj/yAH4AbgABwAVAAASMhYUBiImNAU+ATQmLwEmBh0BFBY3mc6Rkc6RAWwGBgYGsAwYGAwBuJHOkZHOfwMMDAwDawcODtAODgcAAwAI/8gB+AG4AAcAFwAnAAASMhYUBiImNBc1NCYrASIGHQEUFjsBMjY3NTQmKwEiBh0BFBY7ATI2mc6Rkc6R6AkHMAcJCQcwBwlwCQcwBwkJBzAHCQG4kc6Rkc63oAcJCQegBwkJB6AHCQkHoAcJCQAAAAAAABwBVgABAAAAAAAAABoANgABAAAAAAABABgAgwABAAAAAAACAAUAqAABAAAAAAADAB8A7gABAAAAAAAEABgBQAABAAAAAAAFACYBpwABAAAAAAAGABUB+gABAAAAAAAKACwCagABAAAAAAALABcCxwABAAAAAAAQABIDBQABAAAAAAARAAUDJAABAAAAAAASABgDXAABAAAAAAAVABIDmwABAAAAAAAWAAUDugADAAEECQAAADQAAAADAAEECQABADAAUQADAAEECQACAAoAnAADAAEECQADAD4ArgADAAEECQAEADABDgADAAEECQAFAEwBWQADAAEECQAGACoBzgADAAEECQAKAFgCEAADAAEECQALAC4ClwADAAEECQAQACQC3wADAAEECQARAAoDGAADAAEECQASADADKgADAAEECQAVACQDdQADAAEECQAWAAoDrgBDAG8AcAB5AHIAaQBnAGgAdAAgACgAYwApACAARgBvAG4AdAAgAEEAdwBlAHMAbwBtAGUAAENvcHlyaWdodCAoYykgRm9udCBBd2Vzb21lAABGAG8AbgB0ACAAQQB3AGUAcwBvAG0AZQAgADUAIABQAHIAbwAgAFMAbwBsAGkAZAAARm9udCBBd2Vzb21lIDUgUHJvIFNvbGlkAABTAG8AbABpAGQAAFNvbGlkAABGAG8AbgB0ACAAQQB3AGUAcwBvAG0AZQAgADUAIABQAHIAbwAgAFMAbwBsAGkAZAAtADUALgAxADMALgAxAABGb250IEF3ZXNvbWUgNSBQcm8gU29saWQtNS4xMy4xAABGAG8AbgB0ACAAQQB3AGUAcwBvAG0AZQAgADUAIABQAHIAbwAgAFMAbwBsAGkAZAAARm9udCBBd2Vzb21lIDUgUHJvIFNvbGlkAAAzADMAMQAuADAAMAA5ACAAKABGAG8AbgB0ACAAQQB3AGUAcwBvAG0AZQAgAHYAZQByAHMAaQBvAG4AOgAgADUALgAxADMALgAxACkAADMzMS4wMDkgKEZvbnQgQXdlc29tZSB2ZXJzaW9uOiA1LjEzLjEpAABGAG8AbgB0AEEAdwBlAHMAbwBtAGUANQBQAHIAbwAtAFMAbwBsAGkAZAAARm9udEF3ZXNvbWU1UHJvLVNvbGlkAABUAGgAZQAgAHcAZQBiACcAcwAgAG0AbwBzAHQAIABwAG8AcAB1AGwAYQByACAAaQBjAG8AbgAgAHMAZQB0ACAAYQBuAGQAIAB0AG8AbwBsAGsAaQB0AC4AAFRoZSB3ZWIncyBtb3N0IHBvcHVsYXIgaWNvbiBzZXQgYW5kIHRvb2xraXQuAABoAHQAdABwAHMAOgAvAC8AZgBvAG4AdABhAHcAZQBzAG8AbQBlAC4AYwBvAG0AAGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tAABGAG8AbgB0ACAAQQB3AGUAcwBvAG0AZQAgADUAIABQAHIAbwAARm9udCBBd2Vzb21lIDUgUHJvAABTAG8AbABpAGQAAFNvbGlkAABGAG8AbgB0ACAAQQB3AGUAcwBvAG0AZQAgADUAIABQAHIAbwAgAFMAbwBsAGkAZAAARm9udCBBd2Vzb21lIDUgUHJvIFNvbGlkAABGAG8AbgB0ACAAQQB3AGUAcwBvAG0AZQAgADUAIABQAHIAbwAARm9udCBBd2Vzb21lIDUgUHJvAABTAG8AbABpAGQAAFNvbGlkAAAAAAIAAAAAAAD/2wAZAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAEAAgECAQMBBAEFAQYBBwEIAQkBCgELAQwDY29nBXByaW50BmFkanVzdA1zdGVwLWJhY2t3YXJkDWZhc3QtYmFja3dhcmQMZmFzdC1mb3J3YXJkDHN0ZXAtZm9yd2FyZA1oYW5kLXBvaW50LXVwA2N1dAtwbGF5LWNpcmNsZQxwYXVzZS1jaXJjbGUAAAAB//8AAgABAAAADAAAABYAAAACAAEAAwANAAIABAAAAAIAAAAAAAAAAQAAAADZaFOiAAAAANseEmAAAAAA2x4SZg==");

/***/ }),

/***/ "./src/fontawesome/webfonts/fa-solid-900.woff":
/*!****************************************************!*\
  !*** ./src/fontawesome/webfonts/fa-solid-900.woff ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:font/woff;base64,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");

/***/ }),

/***/ "./src/fontawesome/webfonts/fa-solid-900.woff2":
/*!*****************************************************!*\
  !*** ./src/fontawesome/webfonts/fa-solid-900.woff2 ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:font/woff2;base64,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");

/***/ }),

/***/ "./src/i18n.js":
/*!*********************!*\
  !*** ./src/i18n.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locales_en_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locales/en.js */ "./src/locales/en.js");
/* harmony import */ var _locales_de_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales/de.js */ "./src/locales/de.js");
/* harmony import */ var _locales_fr_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales/fr.js */ "./src/locales/fr.js");
/* harmony import */ var _locales_es_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locales/es.js */ "./src/locales/es.js");
/* harmony import */ var _locales_cs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locales/cs.js */ "./src/locales/cs.js");
/* harmony import */ var _locales_da_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locales/da.js */ "./src/locales/da.js");
/* harmony import */ var _locales_et_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locales/et.js */ "./src/locales/et.js");
/* harmony import */ var _locales_fi_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locales/fi.js */ "./src/locales/fi.js");
/* harmony import */ var _locales_hu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./locales/hu.js */ "./src/locales/hu.js");
/* harmony import */ var _locales_is_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locales/is.js */ "./src/locales/is.js");
/* harmony import */ var _locales_it_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locales/it.js */ "./src/locales/it.js");
/* harmony import */ var _locales_nb_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locales/nb.js */ "./src/locales/nb.js");
/* harmony import */ var _locales_nl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./locales/nl.js */ "./src/locales/nl.js");
/* harmony import */ var _locales_pt_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./locales/pt.js */ "./src/locales/pt.js");
/* harmony import */ var _locales_ro_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./locales/ro.js */ "./src/locales/ro.js");
/* harmony import */ var _locales_sv_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./locales/sv.js */ "./src/locales/sv.js");
__webpack_require__(/*! roddeh-i18n */ "./node_modules/roddeh-i18n/dist/i18n.js")
















let jsons = {}
jsons.en = _locales_en_js__WEBPACK_IMPORTED_MODULE_0__["default"]
jsons.de = _locales_de_js__WEBPACK_IMPORTED_MODULE_1__["default"]
jsons.fr = _locales_fr_js__WEBPACK_IMPORTED_MODULE_2__["default"]
jsons.es = _locales_es_js__WEBPACK_IMPORTED_MODULE_3__["default"]
jsons.cs = _locales_cs_js__WEBPACK_IMPORTED_MODULE_4__["default"]
jsons.da = _locales_da_js__WEBPACK_IMPORTED_MODULE_5__["default"]
jsons.et = _locales_et_js__WEBPACK_IMPORTED_MODULE_6__["default"]
jsons.fi = _locales_fi_js__WEBPACK_IMPORTED_MODULE_7__["default"]
jsons.hu = _locales_hu_js__WEBPACK_IMPORTED_MODULE_8__["default"]
jsons.is = _locales_is_js__WEBPACK_IMPORTED_MODULE_9__["default"]
jsons.it = _locales_it_js__WEBPACK_IMPORTED_MODULE_10__["default"]
jsons.nb = _locales_nb_js__WEBPACK_IMPORTED_MODULE_11__["default"]
jsons.nl = _locales_nl_js__WEBPACK_IMPORTED_MODULE_12__["default"]
jsons.pt = _locales_pt_js__WEBPACK_IMPORTED_MODULE_13__["default"]
jsons.ro = _locales_ro_js__WEBPACK_IMPORTED_MODULE_14__["default"]
jsons.sv = _locales_sv_js__WEBPACK_IMPORTED_MODULE_15__["default"]
const i18next = function (loc) { return i18n.create(jsons[loc]) }
/* harmony default export */ __webpack_exports__["default"] = (i18next);


/***/ }),

/***/ "./src/img/board/beyer.svg":
/*!*********************************!*\
  !*** ./src/img/board/beyer.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+CiAgICA8ZGVmcz4gCiAgICAgICAgPHBhdHRlcm4gaWQ9InZlcnRpY2FsLXN0cmlwZS0zIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiPiAKICAgICAgICAgICAgPGltYWdlIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owbmFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jbklIZHBaSFJvUFNjeE1DY2dhR1ZwWjJoMFBTY3hNQ2MrQ2lBZ1BISmxZM1FnZDJsa2RHZzlKekV3SnlCb1pXbG5hSFE5SnpFd0p5Qm1hV3hzUFNkM2FHbDBaU2NnTHo0S0lDQThjbVZqZENCNFBTY3dKeUI1UFNjd0p5QjNhV1IwYUQwbk15Y2dhR1ZwWjJoMFBTY3hNQ2NnWm1sc2JEMG5ZbXhoWTJzbklDOCtDand2YzNablBnPT0iIHg9IjAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+IDwvaW1hZ2U+CiAgICAgICAgPC9wYXR0ZXJuPiAKICAgIDwvZGVmcz4gCjxnIGlkPSJ6ZWl0LWJvYXJkIj4KPGcgaWQ9IkxpZ2h0IiBmaWxsPSIjZjRmNGY0Ij4KPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiLz4KPC9nPgo8ZyBpZD0iRnJhbWUiIGZpbGw9Im5vbmUiPgo8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIvPgo8L2c+CjxnIGlkPSJEYXJrIiBzdHlsZT0iZmlsbDp1cmwoI3ZlcnRpY2FsLXN0cmlwZS0zKTsiPgo8ZyBpZD0icmF6Ij4KPGcgaWQ9ImR2YSI+CjxnIGlkPSJ0cmkiPgo8cmVjdCB4PSIxMDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIi8+CjxyZWN0IHg9IjMwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz4KPHJlY3QgeD0iNTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPgo8cmVjdCB4PSI3MDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIi8+CjwvZz4KPHVzZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwLDEwMCkiIHhsaW5rOmhyZWY9IiN0cmkiLz4KPC9nPgo8dXNlIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMjAwKSIgeGxpbms6aHJlZj0iI2R2YSIvPgo8L2c+Cjx1c2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw0MDApIiB4bGluazpocmVmPSIjcmF6Ii8+CjwvZz4KPC9nPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/img/board/blue.svg":
/*!********************************!*\
  !*** ./src/img/board/blue.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+CjxnIGlkPSJicm93bi1ib2FyZCI+CjxnIGlkPSJMaWdodCIgZmlsbD0iI2RlZTNlNiI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIi8+CjwvZz4KPGcgaWQ9IkZyYW1lIiBmaWxsPSJub25lIj4KPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiLz4KPC9nPgo8ZyBpZD0iRGFyayIgZmlsbD0iIzhjYTJhZCI+CjxnIGlkPSJyYXoiPgo8ZyBpZD0iZHZhIj4KPGcgaWQ9InRyaSI+CjxyZWN0IHg9IjEwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz4KPHJlY3QgeD0iMzAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPgo8cmVjdCB4PSI1MDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIi8+CjxyZWN0IHg9IjcwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz4KPC9nPgo8dXNlIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDAsMTAwKSIgeGxpbms6aHJlZj0iI3RyaSIvPgo8L2c+Cjx1c2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyMDApIiB4bGluazpocmVmPSIjZHZhIi8+CjwvZz4KPHVzZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDQwMCkiIHhsaW5rOmhyZWY9IiNyYXoiLz4KPC9nPgo8L2c+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/img/board/brown.svg":
/*!*********************************!*\
  !*** ./src/img/board/brown.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+CjxnIGlkPSJicm93bi1ib2FyZCI+CjxnIGlkPSJMaWdodCIgZmlsbD0iI2YwZDliNSI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIi8+CjwvZz4KPGcgaWQ9IkZyYW1lIiBmaWxsPSJub25lIj4KPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiLz4KPC9nPgo8ZyBpZD0iRGFyayIgZmlsbD0iI2I1ODg2MyI+CjxnIGlkPSJyYXoiPgo8ZyBpZD0iZHZhIj4KPGcgaWQ9InRyaSI+CjxyZWN0IHg9IjEwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz4KPHJlY3QgeD0iMzAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPgo8cmVjdCB4PSI1MDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIi8+CjxyZWN0IHg9IjcwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz4KPC9nPgo8dXNlIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDAsMTAwKSIgeGxpbms6aHJlZj0iI3RyaSIvPgo8L2c+Cjx1c2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyMDApIiB4bGluazpocmVmPSIjZHZhIi8+CjwvZz4KPHVzZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDQwMCkiIHhsaW5rOmhyZWY9IiNyYXoiLz4KPC9nPgo8L2c+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/img/board/chesscom.svg":
/*!************************************!*\
  !*** ./src/img/board/chesscom.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+CjxnIGlkPSJjaGVzc2NvbS1ib2FyZCI+CjxnIGlkPSJMaWdodCIgZmlsbD0iI2VkZWRkOSI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIi8+CjwvZz4KPGcgaWQ9IkZyYW1lIiBmaWxsPSJub25lIj4KPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiLz4KPC9nPgo8ZyBpZD0iRGFyayIgZmlsbD0iIzRjNkQ5MiI+CjxnIGlkPSJyYXoiPgo8ZyBpZD0iZHZhIj4KPGcgaWQ9InRyaSI+CjxyZWN0IHg9IjEwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz4KPHJlY3QgeD0iMzAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPgo8cmVjdCB4PSI1MDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIi8+CjxyZWN0IHg9IjcwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz4KPC9nPgo8dXNlIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDAsMTAwKSIgeGxpbms6aHJlZj0iI3RyaSIvPgo8L2c+Cjx1c2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwyMDApIiB4bGluazpocmVmPSIjZHZhIi8+CjwvZz4KPHVzZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDQwMCkiIHhsaW5rOmhyZWY9IiNyYXoiLz4KPC9nPgo8L2c+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/img/board/falken.svg":
/*!**********************************!*\
  !*** ./src/img/board/falken.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+CjxnIGlkPSJ6ZWl0LWJvYXJkIj4KPGcgaWQ9IkxpZ2h0IiBmaWxsPSIjZjRmNGY0Ij4KPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiLz4KPC9nPgo8ZyBpZD0iRnJhbWUiIGZpbGw9Im5vbmUiPgo8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIvPgo8L2c+CjxnIGlkPSJEYXJrIiBmaWxsPSIjNjM2YjZhIj4KPGcgaWQ9InJheiI+CjxnIGlkPSJkdmEiPgo8ZyBpZD0idHJpIj4KPHJlY3QgeD0iMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPgo8cmVjdCB4PSIzMDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIi8+CjxyZWN0IHg9IjUwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz4KPHJlY3QgeD0iNzAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPgo8L2c+Cjx1c2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMCwxMDApIiB4bGluazpocmVmPSIjdHJpIi8+CjwvZz4KPHVzZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDIwMCkiIHhsaW5rOmhyZWY9IiNkdmEiLz4KPC9nPgo8dXNlIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsNDAwKSIgeGxpbms6aHJlZj0iI3JheiIvPgo8L2c+CjwvZz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/img/board/green.svg":
/*!*********************************!*\
  !*** ./src/img/board/green.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+CjxnIGlkPSJ6ZWl0LWJvYXJkIj4KPGcgaWQ9IkxpZ2h0Ij4KPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiIHN0eWxlPSJmaWxsOiByZ2JhKDExNiwgMTg1LCA0OCwgMC4xMCk7Ii8+CjwvZz4KPGcgaWQ9IkZyYW1lIiBmaWxsPSJub25lIj4KPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiLz4KPC9nPgo8ZyBpZD0iRGFyayIgc3R5bGU9ImZpbGw6IHJnYmEoMTE2LCAxODUsIDQ4LCAwLjkwKTsiPgo8ZyBpZD0icmF6Ij4KPGcgaWQ9ImR2YSI+CjxnIGlkPSJ0cmkiPgo8cmVjdCB4PSIxMDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIi8+CjxyZWN0IHg9IjMwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz4KPHJlY3QgeD0iNTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPgo8cmVjdCB4PSI3MDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIi8+CjwvZz4KPHVzZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwLDEwMCkiIHhsaW5rOmhyZWY9IiN0cmkiLz4KPC9nPgo8dXNlIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMjAwKSIgeGxpbms6aHJlZj0iI2R2YSIvPgo8L2c+Cjx1c2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw0MDApIiB4bGluazpocmVmPSIjcmF6Ii8+CjwvZz4KPC9nPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/img/board/informator.svg":
/*!**************************************!*\
  !*** ./src/img/board/informator.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+CjxnIGlkPSJ6ZWl0LWJvYXJkIj4KPGcgaWQ9IkxpZ2h0IiBmaWxsPSIjZWVlZWVlIj4KPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiLz4KPC9nPgo8ZyBpZD0iRnJhbWUiIGZpbGw9Im5vbmUiPgo8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIvPgo8L2c+CjxnIGlkPSJEYXJrIiBmaWxsPSIjYWFhYWFhIj4KPGcgaWQ9InJheiI+CjxnIGlkPSJkdmEiPgo8ZyBpZD0idHJpIj4KPHJlY3QgeD0iMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPgo8cmVjdCB4PSIzMDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIi8+CjxyZWN0IHg9IjUwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz4KPHJlY3QgeD0iNzAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPgo8L2c+Cjx1c2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMCwxMDApIiB4bGluazpocmVmPSIjdHJpIi8+CjwvZz4KPHVzZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDIwMCkiIHhsaW5rOmhyZWY9IiNkdmEiLz4KPC9nPgo8dXNlIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsNDAwKSIgeGxpbms6aHJlZj0iI3JheiIvPgo8L2c+CjwvZz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/img/board/sportverlag.svg":
/*!***************************************!*\
  !*** ./src/img/board/sportverlag.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+CiAgICA8ZGVmcz4gCiAgICAgICAgPHBhdHRlcm4gaWQ9ImRpYWdvbmFsLXN0cmlwZS0xIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiPiAKICAgICAgICAgICAgPGltYWdlIGhyZWY9ImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owbmFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jbklIZHBaSFJvUFNjeE1DY2dhR1ZwWjJoMFBTY3hNQ2MrQ2lBZ1BISmxZM1FnZDJsa2RHZzlKekV3SnlCb1pXbG5hSFE5SnpFd0p5Qm1hV3hzUFNkM2FHbDBaU2N2UGdvZ0lEeHdZWFJvSUdROUowMHRNU3d4SUd3eUxDMHlDaUFnSUNBZ0lDQWdJQ0FnVFRBc01UQWdiREV3TEMweE1Bb2dJQ0FnSUNBZ0lDQWdJRTA1TERFeElHd3lMQzB5SnlCemRISnZhMlU5SjJKc1lXTnJKeUJ6ZEhKdmEyVXRkMmxrZEdnOUp6RW5MejRLUEM5emRtYytDZz09IiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiPiAKICAgICAgICAgICAgPC9pbWFnZT4gCiAgICAgICAgPC9wYXR0ZXJuPiAKICAgIDwvZGVmcz4gCjxnIGlkPSJ6ZWl0LWJvYXJkIj4KPGcgaWQ9IkxpZ2h0IiBmaWxsPSIjZjRmNGY0Ij4KPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiLz4KPC9nPgo8ZyBpZD0iRnJhbWUiIGZpbGw9Im5vbmUiPgo8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIvPgo8L2c+CjxnIGlkPSJEYXJrIiBzdHlsZT0iZmlsbDp1cmwoI2RpYWdvbmFsLXN0cmlwZS0xKTsiPgo8ZyBpZD0icmF6Ij4KPGcgaWQ9ImR2YSI+CjxnIGlkPSJ0cmkiPgo8cmVjdCB4PSIxMDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIi8+CjxyZWN0IHg9IjMwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz4KPHJlY3QgeD0iNTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPgo8cmVjdCB4PSI3MDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIi8+CjwvZz4KPHVzZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTAwLDEwMCkiIHhsaW5rOmhyZWY9IiN0cmkiLz4KPC9nPgo8dXNlIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMjAwKSIgeGxpbms6aHJlZj0iI2R2YSIvPgo8L2c+Cjx1c2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw0MDApIiB4bGluazpocmVmPSIjcmF6Ii8+CjwvZz4KPC9nPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/img/board/zeit.svg":
/*!********************************!*\
  !*** ./src/img/board/zeit.svg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+CjxnIGlkPSJ6ZWl0LWJvYXJkIj4KPGcgaWQ9IkxpZ2h0IiBmaWxsPSIjY2NjIj4KPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI4MDAiLz4KPC9nPgo8ZyBpZD0iRnJhbWUiIGZpbGw9Im5vbmUiPgo8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIvPgo8L2c+CjxnIGlkPSJEYXJrIiBmaWxsPSIjNjQ5NGIxIj4KPGcgaWQ9InJheiI+CjxnIGlkPSJkdmEiPgo8ZyBpZD0idHJpIj4KPHJlY3QgeD0iMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPgo8cmVjdCB4PSIzMDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIi8+CjxyZWN0IHg9IjUwMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz4KPHJlY3QgeD0iNzAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPgo8L2c+Cjx1c2UgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMCwxMDApIiB4bGluazpocmVmPSIjdHJpIi8+CjwvZz4KPHVzZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDIwMCkiIHhsaW5rOmhyZWY9IiNkdmEiLz4KPC9nPgo8dXNlIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsNDAwKSIgeGxpbms6aHJlZj0iI3JheiIvPgo8L2c+CjwvZz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/img/chesspieces/alpha/bB.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/alpha/bB.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/alpha/bK.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/alpha/bK.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/alpha/bN.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/alpha/bN.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/alpha/bP.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/alpha/bP.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAE1UlEQVR42u2bS2wbRRjHx5vY3oftJH47fsXxq17HJrYbh6QprZqmChENNFAhQQmkTWigtMGUqEh9cEkKQaKIh4QqFQlUcStVqYSioOaABJcieqJCHCiFnipVXHrGy8zWdW1TGuxdp7s785c+jdfr/db6+Zv5Zr5ZA0BERERERERERERERERERESkdr1V2P+v9+bnZgiYBykcCojtjm2bxk0cd9FiNv1OUdR1Sqe7bjabfjNz7NdPjg2Po88k4mECrFZDj+Z4jmV+hi+FBxn6zOMjjyUIsQoN5DOH1wJXYUXUQuCvEXJQg/nMq3XAq7KhgdzL2IIbHdkC9k3uDre0tAiNAtS3tgoH978QHt2+GU+IdlvHj3e7ZINW7Gi3/IAlvDOfnPRLAFdln3+65McOYLY3eU4ugLmM6AsvwbHvklwA9Xr9JewAOuzWP+QCWPKFWQKxW6/JCPAaVvAOzU7CLkytSMzA5UzcQlErhQMv4RWBvanEe3JFYMkXXhIEgdbpdJLhUZROQL6wnAu2t1m+kTqRLvnAT89OjIktx7INR1/p2rIvPIsJ/dmswaCvGx66ZmhgYxbrSkyn2ym23V3+q/UCDIcCVyt9YCeYOcH7i0fsRoPhSoPjYNFoNF5ZevuwNZPm8QMIM7DDZOIEqUnEjHxQwIEFtP6+R8R25+i2UYNeLxVeRSQaBOQT+e7LprQJz+20i21fLrVPjvlfrSGfud6kuBxxu+zagnd0/hWxdTlsq6BiX0NmE326nOI9wJGCRqr91o42tOqgPC7H7SbCq4Fovy0IRQrdW9UKBX3gzYPTaAvyRpPB3Q/kjflD07HukIqL1UG/Nw+nKcI6w6tKLkGfJ69KeHsnn3GwDHMWvvx4LYOrigsNrEQu/B/fHMeeRd9F09Mbn9e9u16AcEydAETlJV3dEejtdJ0n5EryuJ11j3EBf6dAyEFNPT/R02iimJ+b6cEa3tzsJAj4PHsbBRiLdE0tHi/gHYFmE3e+UYA2a/tXWMODKxQdnGY0PNdjWRrfcXBi5w4Qi3bNSJ0wZ9L81IGZPdh23++krjbaLOZVbKOwVcKzgaD8XEwrnt04FPStyrVGjkVC32IH0MRxshUNOJbBKwrdLsdPcldfvB7X5R4+pn146WTM26ySfrS7y6NZcInYnT/H0LSxaSV9ttSVNReJu54YQZNm4LBZb4EmF1JdTvstdK+n4D01oe1bByG8v6nkhuivYH0q00V+Q+QXtMoZ3jKgDYjxaOgvsM57IvGIeE916sOlY2K7cLwQpijqJnhIeyIwsdxcOPa6OPh++dkpdUEMBrzvPARo9zW/z3NCFdDGx4bFlmGMl0Hz94Dr2itus5jQdwLJRFSZ8Ph4RGxt1vY/lRJ5tWY0GtBfy9CTscqCh8aX5YtfwOUZ+71S4ZVriAy9gjK04iIwxcdmFdJl1+zSAb9HWVuipz9aYGC2FVQAr9SVjejJfmXAWzzxBhqYR1QSfWXj4+GhD949qgyIWzf3n1QTPGTwR59WTBfuTfPn1AZwY6ZHOX+R7cumCUBpAFMqBJhSDsBN/dllGma2KqPvGENXHFecY2qOUcvQdM3xf5wvnWPoe/e59z5ddS1Tc+7u+cF8ZlkR8Kb2PK3aoseLz+0CRERERERERESY6h+RAfZINhLK1wAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/img/chesspieces/alpha/bQ.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/alpha/bQ.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/alpha/bR.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/alpha/bR.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAE5klEQVR42u2bTW8bRRjHvbbj3cT2eu3ETuw4Tp04bZoABoWAq9KGJG6o1KoQqIRQADsKqEigfgQORW2EFMQhl0aVIgTiSC6oQT0gtcixUkTbqBJISFA4ID5E/TLMrGeTzdYlu6T1zFPmLz2ayc7MzjO/zO68rV0uISEhISEhISEhISEhISEhIWjqjXc7LpNM9DxRDPqxIbuW6Ilp1htEO8OrdstHOyOr1vL0nrbKS5Ie9nNDrzOipRwBjDcDGFmxW76rM7xiLR93AJAY9ZkPvTCWdQQw3qQHUigtAzj+3DP8ACzOnd03wP33wKgmSZJtH4pzs/wARAh5nQDE7zu1SQ+87ADg5SavEdWJD9RnrmTb+ZP5lz579dTUxddOTX+C7cLrZ058nOqN37FbPpWM3yFlSFl6nwsn88c+deIDd8Ow1+Ox63jdYUOdmK17U1/5UkgNoMcI5pGaGvTzBzCZ6AYDEE/C+QN4INX7NxSA2Ne/eFyNrEABSH3lS3gOBgYg9ZUv4XnYlcc8wj6ykToSDl3hCt6hTNqVG8+SlUClBVOVfU1xiI+557Ma8Zk7DWUOSHiV8L2TJVUrjfh2MJOWuN3TinZF9BD/h0/joMJJTyQ+VI6MP3va7CP3yk/kegIB/8/mxlSrVVSvVfWQWK1WQzUaGtcMq9dxWCFhDVUqFT0PIteqjTi5T42YqUytel8PzXUGA/5fpo/n4O2+GrvMHrf7NmmIBy+fnKher+8KrfF/k9fr1eG5G3X/px1vboTBlUhjFEVBrRKpi655S+D3+rtjXY3G4F6xsLCAisWiyQq6FQrE3kXzOD6Pr5O4nlYobIdGnqKe3shXNPLRayRO6vDQjQ1aN2wpisxsAKF1gxfrURiuflj/Msoa4PWrX0TBApyeODLJGuArk0cnwQLEczDmAKkPMCXLvhOsAWIf8mABjgxnllgDHD2c+RwswLCmLrMGSH2Ap/Pn3iGbrMwBEh8+en8OZg/UQsE11gBDavAbsI+wpga3OHiEtyBvJDAHSH2AKfz+ucvBO/Au4FE4xHwbPxIOwV0Py7425gCpD2In5n+3I/Prj1fDvACkvsDSzNTRs7wApL7AEp7AvsELQOoLOM1y9A6cBUdvdDizxgvAkeHBNXAAI2HtmtGAxUsXUblcRhsbG7oZ8bLl711ppjyNfKXGtVJpJ6+RVio9cI/FxUvmueA1aNtYJFg3GrC5ufnQw/KHHZg3O1Df67DdnH7z5qa5F65rmso/uKdHDuphojs25nG7jS+10J9//IZarXv3ft8G6Ma+JOOxMbOPfM6aEXJlBlIP/Obtxo3r249bubxHaLWyzTyWdFKn1Y+hgf5V4iNX+mD+TT0cTPcFtJDK/depeEqDBtOpgNl35sqODs+4+P2wsumHltnRQzNcwEv1Jb6jH1RCgLcN0eNxo2Rvz7cc7Lj4ECBw1iNPxHzQgArPtfOjQ3YAJ4/n8tABTh17kenB+wR0gJLkepnlencJOsCnDg8tMYH34XtvuTralWXoABVFXj5/7m02PTDgb/8aOkB/R/tXzB5hv799CzrAgL9ji+Ugcgs6QGw/MaMX64rox4aKLCMyoSa2O+7T042/d6xNn8Qa8ablZV+TcnuUN67JdutvQ1HcBibwBtN9/P7mzKEyA6knpi1CQkJCQkJCQjb1DwnxQ/I2LRu/AAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/img/chesspieces/alpha/wB.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/alpha/wB.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/alpha/wK.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/alpha/wK.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/alpha/wN.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/alpha/wN.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/alpha/wP.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/alpha/wP.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/alpha/wQ.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/alpha/wQ.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/alpha/wR.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/alpha/wR.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/beyer/bB.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/beyer/bB.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/beyer/bK.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/beyer/bK.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/beyer/bN.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/beyer/bN.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/beyer/bP.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/beyer/bP.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/beyer/bQ.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/beyer/bQ.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAABHNCSVQICAgIfAhkiAAAC81JREFUaIHtmFuMZMdZx/91O7e+TXdPT89M78zuXHZ2vF4cvN61DItDFHBWkMTZSCgoWElIEBGWeEBxEEgWIRgUWVgWEkiR8hIeDILIUqyQl4ibZBSEheLFk/i2cry79s5udnZ7Lt2nz61O1Skeuk/T7u1ZzyIH8eBPas2crq+/+lXVV/+v6gDv2/+tsZ9GUM5ZoTk7+2u2JU5zLhIpZfun0c8dmRCiWq/XHyCETBw0IYSurCx9Z21t2SwtL5rjx48FruvcvV88z/MWHceZv1MOeifOCwsLXz106NBmvVb9j9WVpfNCiPq4z8zMzIcp5Q+nqYFKM4Rh4jUazcfH/SzLqi4tHX6m1Zr9QetQ88dra6vPASDvOXilUjlZrVb/GIAXRjFSpe5ZWJj/k3G/nZ2dDUKIUkqBMQ6tNThn/rhfoVC4l3Pr01EkG0msXKX0uenp6Y+/5+Cc86kwDAEAWmcwhoBS0Rz3S9P0ZrFYfM5xHDDGUKvVdtrt9jfG/Xzff1lKmWVZBoAgywwAzN4xOKVULCws/MHJkyf/bXFx4UuMMWfUcXt7+1+llN/inMNxbJTLZfi+/+ykoBsbG58pFoub5XIZ165d+2i32z0/7kMISYUQ14UQEELAdd12GIb/NO5n2/bKsWPH/mZtbe3PCSHiFvCVlZW/sm37yW6386AQ9OnT99/33HiQzc3NzyqlnmCMgXP+7I0bNyaCa62TIAjellIiTdPdST5pmu72er2nLMvCzMzMxuXLl+8Pw/DSqE+hUPilQ4cO/XsURY9orX9/eXn5WcaYPQQXQtRt2/681hpSpgjDBH63exfGNkuWZfLmzZvf5Jxjb29v1xhjJkERQhghZFVKCSllOskHACilFUIINjc3vxxF0aXx9lar9adJkjS11tBaQwjxiUajcXYInqbpNqV0i3MOYwwoZUjTdAvALWDGGPTTxXmIUirG2wHAsqxpADNpmsJ13aX9wG3b/ghjTLbb7ZcmtUdR9F9ZlmGwwlBK6SAI3h6CA8DFixcf7na7XysUCmG1Wk18P/jKpGBxHF9P07QjpVwqFounJ/lUKpVzYRjCGINyufSJfbiJlLJgjLEYY6VJDltbW09Uq9WMcw5KqRFCfMv3/ZfeAd7r9V7a2tp63Pf9P+KCkiAML08Kxjkvcc6dNNVYWlr+0iSfUql0tp9FBkKI45N8FhYWnqaUntwn2wAAaZq2AfykWCz+y/Xr10+/9tprj+Rtt8jh1tbWN1OZkkaj/tikYFmWJVpnijEGStnHbNuujvt4nnfKsixQykApu0XiXNdtlsvlR4UQUEqB0smqPD8//2iWZTNvvvnm73a73RdH2275hVKqA9At23J+q1qtnhpv55zXCEEByBCGPduyrEOj7bZtV5MkmTPGQGsN27bv4py7oz7FYvHeNE2dNE1BCIHnea3xfiqVylqpVPqaUupmEASvj7dPGqoJgmA3jhN6+PDhpyfNRJZlSJIEcRyjVqt9drTNcZx1rTXPn33fp7Ozs++oiHNzc1/MU4RSCqVUNN5HrVb7YhiGJc/zJiFMrpxKqe8bY6CU+jnXdVfHwOaVUiCEwBgDz/MeHStWjlIKWmswxqCUgu/7w0Qul8tLhJCP948EDJxzHcfx3mgfU1NTJ4QQvzOQwIl1YCK4lPJVrTXiOBZHjhz561z0AYBz3tRa534IgqDQaDR+ZXSyhBBgjCHLMhBCMD09/fN5o23bp4Mg4JRSJEmCJElYuVy+Z7T/+fn5J4MgKDiOg16v9/yBwQG80g8sEcfxLywtHfm9vIExVgb6ep7DOY7z0bzddd0PDiomsiyDlBLGmA8OR1WrfSGKIkRRhP4GppBS7oz8fjVJkrODFUe73f7OgcF7vd4Fz/M0YGBMBssSX8jP34SQLPcjpF9YLcs6m39XrVYfztMoTdN8gAsj4R8khOS5DSklANTykHNzc0+FYcgHv0uDINg4MHgYhtcIIR3GGNJUodvtrTUajc8DQJIkJssyaK2HYMaYVrlcPuN53rEkSQ4rpQD0N7FSCnEcV6vV6olWq/Wo7/supRSO44BSOkwnAKhUKmcIIef6UksB4HwURVuTGPmkLweAP9RafyifnWaz+ZdKqRdKpdJRKeWwM601kiQhzWbzD+M4fiEIAgIAnHMwxnI/vri4+JuMsU9vbm6SPIUIIeC8j2DbdnV5efnv2+02KKV53Bf249v3PO55XpQXBq01ut2ue+TIkSdnZmYeyGcqBySEQAjxqzMzM18BMFSTwWogTVNMT08/tru7O59PRA4MAJZluXNzc19ut9ut/EBFCIGU8sf78e17Wc6yLPQ871PGGJLPDiFkrVQqrXa7XWRZBmPMcKmllCSKIpYrzmg1NMag0+kgSZKhjOYfzjlOnTr1yU6n82CSJGQggfmMPxHH8dVJfLe9462vr6e+7/P+9Ysjr3T5xiKEINdjy7LyAYNSmg8GlFLkxSZPL2PMME4+8PwUmP8tFoud119/fWo/tn1zHABs246klKW8oBBCkM9olmUYnNrAGBvC5KuQr0he+i3LescsAximU552uTHGoLW+5Xw+are9cwZB8Pw4SP6/EALG/E9KUMoghDUYAIUQAoRQAARCWCCEgnOB/v0yy1PvlpQTQiDLMsRx/P3bsd12xnd2dr5eKpU+Npq3tm2DcwHOBYrFIowxstfzX3AcxzLGXO0Dk+29vb3rhULhaBiGrxWLpUVjsmqWGbdSmToWhiGyLJvlXBSiKBymUq4mhUIBu7u7E6+Fud02xyml9vr6+pVer9cghLQdx7mUJMmP0jT9QafTeT5Jkk0AWZqmvdvEn3jgdl13vlKp3F8sFs9Wq9Vf932/EoYhHUjkty9evPgpY4z+X4EDwPHjxx+nlP4ZY+zvNjY2foMQQoUQ1VKpdG+9Xn+IUmqHYVgDwDjnPyOlBOcclmU1pqamZrvd7puWZfndbve87/uv2LaNwRnkVSnlJd/3L2utE9d1m2fOnNm8evWqf+HChVaWZbecGO8InBDCTpw48beMsXOU0sudTqdICGmlaTrcqLl8aa2HqpJfEEaVIlehvPA4jgOt9VtCiCtKqW3P8x7e29t77K233vqLd+V6NwcAKJfLy6urqxdu3rzJc5XIlYAxBsbYUKPzD6V0KIWjkpdbrkq5UhFCMDc398aLL754DPuk16gd6E1Wt9u9COD8ONiotAkhhgrDOR8+j8LlpT6vB6PXNsYYbty48Y2DQB8YHAB2dna+2391QQEYcM6G5xHHcQby119AKeUQKp9NQggYY8OB5QPK9d9xHPi+/48H5bmtHI4aY2wlByeEAaRfLYWw4DgOLEtDCAkhGNJUZZwzaVkWoijihFIeRdEQPk8t23agtUKWmcHLUd54T8Edx1n0PO+RIAjAOUezORsFQfif7faNf0iSeIcxWrp27eo/AwAh/Ttkr+dfBgDXdWenpqY+YNlWzXWc1s7OzjXP8z4ghKhYlrgPEIvGYCaOI7Rarae2t7fvv50M5nagzXn06NFnKlNTn7x86dJvp2n6ahzHl5Mk6Yz6FIvFJcsSjXp9+sE4jq72LwhmULQctbOz+3IYhm8rpcJxhmaz+VC1Wn3Edd3PtNvtz125cuWZd2M60IwLIe4pl0s9Y8wGY+xwqVT60MrS8oellGVjUHYc+64Myo6TiMZJDwYAFwSW1b8swBjU61NozjYSY0zWl0H1CqPs+tVrP/m67/uvBkHw1bvvvvsc5/wXAbwr+IFmvNls/vL6+vq3gyAodTodGGOgUgUheF/iCEGayoHcjWr46Omv/2aLEDrYkBg8k+FtyPMKW2+88cZDQRD86D0BBwDP82amp6c/UqvVPuc4zgPGmOLe3h6yzOSnOcRxPFQKpRRs20KaqqGq5ErXf6aDzS1gTPZyu91+qtfrfS+KohsH4Tkw+KhRSnm9Xr/PcZx7lMpsYYm7HMdZKpXKPyuE8BilXKkUSSJ3tNbblmXVtday1/PPR1G0FUXRDxmjSRzH54MguJBlmcIB9ft9e9/et//n9t8EJxuyRFiLKAAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/img/chesspieces/beyer/bR.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/beyer/bR.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAABHNCSVQICAgIfAhkiAAAB9VJREFUaIHtWEtvHFkV/s59VXW12/bEedmZ2OTlCE0cDRlloiA2w4qHWI00SLBhAxL/ACGBhgXLEUJsYIGEBCsYieUgjQCJzcx2IBESKCSxTYKdxInj7q6+z8OiuiodxGBXQ4ZZ5GxKap3q+9W53/nOdy/wPJ7H8/hYBrVJVkoVWZbNxxjBzGBmhBDupZT8ZN7c/NzLKSZ23u3Mzc5ecM7defRo94PJnKJbvDLb613sdDrHlJIIIaSNjc2fhBB3D4SlDfC1tbV3iejTREAIETFG7O7uvrmxsfG9OufIkcOvnzn7ibfLsoSUEsyMGKO11p0qy/JunffSS+ffH41GKoYIIRUyGCwtLRbr65tv/s+BE9G54XAIKSVCCACATqczP5kjpJjv9/uIMUIpBSKCMSbTWhdlWU7+m4oBcC4B8FBKAiB5UCyiDXAhRGf8hJQSRAQp5fHJnOPHjn1WCFHTCN57eO+RZeZYnbO4uPh57yJSYqSUQAQQCRAJe1AsrSoupYRSCt57CCEQQkBRdL786quXv9jv7/1lbm52rSxLPRyOoLUGGIiJ4V3EiRNLfzh79mx0zgEgNRqNYIwBM0PKptCDZwI8BAchBIgEmAGtDWIEDYejHiBfGQwsQkhQMgdBQGkFjbqJkxwMS0lESInR6czAe4eZmR5SqnL29vYOTJVWwHu9XtrZefQzIti9vf66c/YhQA1ttNYgArz30NrAWtsfjcobMUXEmCClgBQSzNXuJU6IMQ6kkHp19fyPBoPB7WcC3Pvw12vXrn09pRQ+LCfP86MhhH4IYdjtdpe89wMikkQkRmUotdaHmBlCCMQYAZCoKDYYSikfPxPgN2/eeuvy5ct/dM4dU0ohxoiUElJKEEIgpYQYY0+IZI0xTkg5H2Oww2EpACZjjBdCdIkIzABYABDI85y3t7e/c//+/XcPiqXVAAKAhYWF106eXP5FjHEpxgDmShnqBqtoopE4AlytEHxASglZliGEJzIJAJ1Osb25ufm1ra1/vNMGx4GboY6yLG89fvz47dnZ3oqU8pP1FK0jhAAhRIUYVWWJCEQCUmoADKUUpJSQUn5w48aNL+3sPHivLY7WFa9Da927ePHi3d3d3W49IYloDBqNJRBCwDkHY0xDrW63CykFbt9e/8KDBw9aVbqOVgNoMkIIQyFEqZRqtNgYg0ru0rjxgBhjpSDjPpBSjueAnNTv1tGqOScjz/PDRHR47EVARLDWwjkHpVQDMqUEAI2KeO8RY4QQAoKm3vDpK55SsjHGUYwRIYQGoDEGIYTmt5pC9dMYA6UUtNZQWk8NfOqKp5SCUirmeQ4hBJRSSCk1dqBqSKpzn6p8PaxqOn2kwIUQmXM2SylBKfUUqLpJ649g5ubDavl0zmEwGNyZev3/ArjqzuSKEeC9AzPDOdcoSU2PSU5rrZvdAYBOp7P0kQOvbasxBsZkjbLU9KidH/CEKtbapkmZGdbah9OuPzVVgGrYWDsCWGPSf9RaPsnzmiLeV6e8cc6B/fe/xvQVR1VxMCAEoVaXmt+1fo8PG099hFIK1lqUZbk17fpTV7weNESi0fHag8QYG8WYVJYadP2k/4eOc2LEwEip4rbWBikxvPNgxrgZTVNxAMiyvNmRWm2mjakrnmXZUWNyGENWKX2/5q9U6okDYmz0+3s73sex7WUQQfd6vashhBljzFFr7dSS2DqklJ1Lly799urVqzsLCwufaft+lmULV65c+dPq6urvi6J4cRoMrUmmtZ5bPX/21wS81uvNlXfu3P1Vt9s9bow5PBwOrxljzoB4JoZwoyg6p0fWkhSEEBhK6aZx8zxf7ff7HWPMrfX19a88fPiwlbVtBTzLzIsvf2rtd3Zkz4UYETw/dd703iEEi5ji2HsTpJBwzkFKBSLRKBCA5l1m3l1fX//c3t7e+wfF0qo5z50789PBYHCOAYCpAZNShPcWITg470CQSBEIPiKECIDGTVpN1Fo2Qwi1jM4tLy9/vw2WVs0ZI7rGmOpIBoa1FlIKMAIkBECMPM8QAzUyWSsKETXepR5Qk35cqXbmvFXFDx16Yc2N5a5auDqaGZ0hxYrHnERzZzg5Setnpf3U6D2A2il+6M3Bv4tWFU8pCikllFTwALozOUIaD58sh7V2fLdCkDFCSQkCgUiO+YyxLxdwzj4siuIFax0qzDy/3/qtgWdZdvTUqZVvp5S6Wuv3tu9t/3w4LP9cjsq/Be/3iqI4BSJPgBoMBhvMHMcom+k4OSUr2oSh1qpIKcnFxaWvnjix9K0LFy68c+/evR9ubW39Zj9M+6rK4uLiN44ePfKDTqcopJS/vH79+ltCiGw0Gt2dne2dZjD6e/2beSdfAUNM8pqZwWCIMd9jGl9NgFAUxemUuBRCKGY+dPLkyStE9DozY3Nz85ubm5s//k+49q34ysrKd8uyLEajEUIIbywvL79RN5gPFlopMIDgPVJiCPHEDYrxwTjLDFJMzdW0NgYxRDA/4flgUN13jv872w/XvsCFELG+6yNKYMYTgCwRQtVcWiuE4J9ygswMQaqhTKeTV7ZAKEBWd4hFMTNuXILWCikxh3Cv3A/XvlTpdmfWssysTKYyM7RWDThmQKkK8Ghkd7IsO+S9K1PiMsvMIWvt/eFw+Hee4DzwtF+v4RABg8FgYz9cz+N5PI+PafwTXKVjDLgFTXEAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/img/chesspieces/beyer/wB.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/beyer/wB.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/beyer/wK.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/beyer/wK.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAABHNCSVQICAgIfAhkiAAACFxJREFUaIHtmFtsFNcZx/9nztx2Zzzetb1rswZMwDYYYyAGDAalAlIVrNCChHhAjaqiGpGCTIloq9CqShtVLZVzETyUEFQQaqU+RAqhSSkhCWqUNHWhdkxoufhG8WUx2Av2er3end2Zrw/Gli/YHjt2USX+0jzsnpn/95vvfGfOBXiiJ3q8kiTJCyDrcXNMWobhOQ/g3kz5CzNlHA53cQB8pvyn2ZgZoiittW37GQDbAKSKothKRAIAAtA7vfGmSYzxn6Ef8FHXyemMJU6nGUAnAcQAqAB+AoAB+C36a/2T6Y01c/oIQGimzGdscKK/PP5/xBgTATwNoAVAnyhK5ZzzlMeMNb4URS10u7X/YMTAlCS5nnOxYDpjsek0Mwzjs3A4vK6wYDF27vw2BAE4efIkGpoaIQg8yLmwKpFIBKcz5rhyuzVjzpx561VV+4YgiGsYY5m6nuIZcdsmABTImkXhrm4aULi7m4qXP00AiHOx/H8CzBhTJEl5NT3dHxEEYUj3M/J60yOG4TnlTU179uHt3wdAh39zmEbq+PHjBIBkWTkGAJyLqiSpOxTZ/bZL0RsB3AFwx+vJuMkgvAog56twZwL4CwDinFNBQQGtX7+eVq1YSdmzAkNr2NbdKR8CeBkAHT1ydBT4sWPHCACJovxnVXX/kHOxHmNPVAQg7vX6fy+K0sheHV+CIOS6XO4GAFRWVkbV1dVk2/YgiGVZVH25hn5QcYAURR0WdM/uPaPADx06NApu/vz5dPDgj+jdd8/SF198SbW1V+jcufO0ffsOYowRANL1lH+Louh3yu0B0AyAKisrybKsUSBD1VDfSKWl6waBcnNzKZlMDrbbtk0FBQWD7T6fj06cOEGxWOyRfrZt0/nzH5LXmzZQlmfhZL4xDONtAFRevntYlsdTT0+EysrKBuHOnDkz2Pbee+cGM7h69WpqaWlx5FlbW0ter/dhiUnfGhdaUVTd5XL3yLJMzc3OAgwoHA5TSUkJAaANGzaQZVmUSCRoxYpVBICKi1dSR0fHpDwPHz5MAMjrTfvX+DXiSfsaAHp249fJYbKH6fbt24NZ+vjji/TOO2cJAKV706ihrnHSfp2dIdI0nURRinHOxx6oLpd7KwCq2Lt/8tQP9corvyQAtHTpMlq0aBEBoDdef31KXrZt08KFg+NjwZjgGRn+LQDomXXPOK7vkWpvbydFUQbrfXb2bIpGo1MGX7Zs2cAgHRucMeYWRSmiqipdu3ZtSsGIiLZs2TIIXlFRMWWfYPAOaZpGkiRHORfd49Z5SkrqEQC0aVMZJZPjfwrH0tGjRwfBq6qqpgxeUXGAAJDbrTnahLhcLncrADp48MdTKpkLFy4QAFIUhUKh0JSgT5/+A3HOSRAEkiRljRNw6LqxmTEhDoD27z8w4SQ0Uteu3SAAlOZNI5rke9u2TadOnSa5f5zYmpby8iPLepyS2R6L9f0xkTCl55//Dt588xg0rb/MIpEouru6UF/fiKtXryLS241QRzc6QyHE4r24ceMmrlypAeccW5/bhgy/D3PnzYWRkoq8vDzkL8xDIBCAqsrDYhIR3jr+O+zdtwe2bUPX9SORSOSAo2wPVZZ/1naRi90AaO3adbRrVzmVlKx5OB2z8RZJE16G4aHi4lW067u76bXKo1RT8yUdeumnxJhAAEwAO8djm3AjwZiwXBCETywraQz853K5kJ09G7m5eZg7Zy40lxs+nw+6rmNWIBO2ZSHc0wNJkhCLxcA5R01NDWJ9MTQ0NaDp1i0Eg0EQPXJb2qyq6r5YLPb+RGwTStP0bwKg7Oxsunz5MnV1dU2ucEcokUhQMBikqqoqqqyspI0bNw70RB1jLNMJk6OtG2NMFQSh0e3WAh0dHVCU/tq0LBu9vb24d68Tra3N6OwM4X6oG4zZ4FyBruvQNQ2ixJGZmQW/PwPp6V7IijTM/4MPLmDz5k2QZfmsaZrbnDA5OhAiophlWZd6esLbXnhhL2zbQltbG5qamtDW1grTjDuxARdEeDxpyM1diEWLFmHtujVYurQQx4+fAAAIAv/MkREmsVmWZeUl04z/ehgI50jRdeTMy0FWVhYyM7NgGAZsy4bAGOKmiWikF83NzQj3RHCz7gYs20IikXhUCJsxYT6RfdsJj+MjONOMhwBgSWERXjzwIoqKCpGTk4MMvw+CIICIEI30gTEGengWpKoqTNMEiKC6VSRiSfTF+1BXX4fPP/87amtrcfHiR2hubgaAuFNowGHGORclRZFvRqPRp37x819hzepVuHKlFreabqH97l00NTYi2B5ENNo7zFKSRCSTFgBgdvYc5OXnYVZgFkpL12LJksUoKirCgwddyM/PR09PN3Eurras5GWn8BPK78/aAiCOCb7NnHPSNY0CgQD5fD5KT0+n1NTUMe+XZYVmz84hw0gdeP6IUyZHGU9NTXu/u/v+cwO/DT0FJStXobS0FEuKlsDwerBgwQJ4PB64VBWaroOIYNs2kskk7t69g9bWIBoaGlBXV4/q6n/i0qV/4MGDrmFxZFluTyQSOURkOn2BidSEIZlaubyYjrz2Bn3610+p816IEonkuN/t4YsRItNM0I3rTVT+vX2Unu4f1guMsdVOgBxlXJKkrbZt77Us6ykAeUPbRFFCRoYPC/MLEQj4kTMvBwyAomgACJKkgAsCmlta0N7ehvv3Q7h+/SZCoQ4krVGJjSiKsiMej5+fFvBhLyGLJWRbG20b6xgTFgOYY1mWNOGDo2UKghBOTTWu9fZG/2aa5p8A1KB/nTKhvvKhp+bWfL3RXkOWpCIzkRBURVlimia3h6xDBMZgE8HlUqKxmFkvSVIwmUzW27Y9Ywf/T/RED/VfCDIhCCwCtFsAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/img/chesspieces/beyer/wN.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/beyer/wN.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/beyer/wP.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/beyer/wP.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAABHNCSVQICAgIfAhkiAAABRhJREFUaIHtmU9oFFccx39v5s3Mzv5pshldt01SEjZrdo3rylLj1s1E3JyCQazxkkCLDfTQg7QiFARvXry0h4IQpLGBtnjw0hwqSvCQNigNljaIYsU2HhpX0dZJdif7583MrweJWBPN7OzE9LCf6/u99/3M8N6b9xiAOnXq/C8hbg8oimLT7t27vy6Xyx2VSgUMw1i4e/fux6VSadbNHN7NwWRZbt6+fftVv9//biaT2dzX17dZ07RWRBwqFAq/GIbxp5t5rkAI4ePx+Pi+ffvwxo0buEyhUMBTp05hMpk0FEV5f6M9V9Dc3Jzu6enBixcv4ovk83kcHh7GSCQy7VYe59ZAjDGOMQaRSGRFm9/vh56eHmhsbHzHrTzXxDVN+x0A9HK5vHoQx0GxWPzVrTxXCQQCg8eOHTM1TfvPVLl58yaqqop+vz+z0Y6r4vF4wolEQj9+/Pgz6evXr6Oqqrhnz54/OI4T3cpyZaoQQmhbW9uJaDR6ZcuWLd5YLPasLR6PQzabBQBobmwMfkopDbqRWTM8zzfGYrEf9u/fjxMTE5jP51fsKoiIuq7j2bNnMZ1O/yXL3tjaI68jlFJfKpW6euTIEZyfn19V+Hksy8ILFy5gV1fXrNfr7d4w8Xg8/sXw8DAuLCysKf28/OnTp7G9vf3bDRNXVTU3NjZmW3qZXC6Hqqr+Lctyh9Nsx4uTEMJXKhVeVdWq+4bDYejs7GySJCnqNN+xeCAQ2AoAm0XR2Q7HGAOed37GcyzOGPvHNM389HT1x48nT57A/Pw8Gobx0Gm+Y/FisfhQ1/VvxsbG4M6dO9X0g9HRUXjw4MHU4uLib07zayIYDMay2Wx5ZGQEHz9+vOaiNE0TT548iZlMhimKUv3icJO2trbBZDJ55fDhw9a1a9deuZMcPXrUSqVSP3s8nq215tZ8A9I07TaltAIA73Ecx+3du3fVujNnzsClS5f0+/fvn9A07adacx1DCKGRSOTDnTt3zg4NDVnT09NomuZL33ihUMDx8XHs6+uzEonETGdn52eCIAReqzTP83Iikfi+v78fL1++jKVSyfbH59GjR3ju3DnMZDKYTCa/e23SlNI3duzY8WN/fz/eu3fPtvCLTE5OoqqqZmtr6+eEEFcv7SsghNBUKjU5MDBQk/QyU1NTmMlk0O/3r+8O093d/ZWqqnjr1q2apZcZHR3Fbdu2LTUpTb3rIs1xnNTb26ufP3/eNWnEp+f0Q4cOYTQanajKx25hS0vLR4IgeA8cOFD9U78Cr9cLIyMj0NDQMODz+d6228+WOM/zUigU+mTXrl3g9XqdW76EdDoNoihy1VwubIkHg8EuSmnH4OCgc7tXoCgKZLNZCIVCH9jtY3eqvImI0NHh+Ny/JolEAkqlku16W+KU0vZQKASBwPp96MLhMHAc12S33u4ch0AgUNPBfy0URQFJklrt1tsSL5fLIMsy5PN5qFQqAABgWRZUKhUoFosr6hFx1XEQcUWbZVkAALC4uAimadr1BmqnSJKkrTMzM3Dw4EEQBAEaGhqAMQZLS0tACAFZliEcDoMkScDzPORyOWCMAQCAIAhQLBaBUgocxwGlFBhjsGnTJmCMgWVZ4PP5YHZ2FjjO/r3G1h8JURTfMgwjb1mWLopiiyiKCgCAaZpACOE4jhMtyyoBPH2DoigCIoJlWYCIy3UgCILo8XgihBCBMbbA8zwXDodVwzCAUgq6rs/Nzc19adu+Tp06dVzjXwNcIZtBM3nKAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/img/chesspieces/beyer/wQ.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/beyer/wQ.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/beyer/wR.png":
/*!******************************************!*\
  !*** ./src/img/chesspieces/beyer/wR.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAAEGElEQVR42u2avYsaTRzHf/FWhJD4logvpyjiS+FLKTZRSBeQENBgCCipbG0uklKx0CJ/gkUwnW3KNFqIKIgi2tiIBEzQRkkhYuI8xTDsc949xD1nRy/PfJrv7dz6e/myzO7ODgCHw+Fw7isP6IYTBKzv3kn73efPWDeb6+MqFdZUik68hw+xvn0rLd6nT1h//aLpFgUePcKKkDR9+vT2eGScVjyr9W7xSF/Ho6AVaJ9sNpvNZgEmk8lkMhG1UCgUCgXp8XK5XC6XuxmP5JEKqYNWvEMR5Aqs1Wq1Wi2Aw+FwOBziuF6v1+v1+2e/eIH158/r448fk790Op1Op7sZj+Q5LN6TJ/t1HBaPHrIZLo1q9bzj0YO54clkMplMAoTD4XA4fPjvrFarlczA/yaTyWQyGYBYLBaLxQ6PZ7fb7XY76+5PYLjBYDAYDKIei8VisVgsop47shler9fr9TpAPp/P5/OnblN63feEuz4WnrvSeyyUiffvBUEQBAEhhUKhUCgQKpVKpVIJofV6vV6vz0fL5XK5XBbrJHXjPq6uTu2kRCIRk8lkMpnEKyaVSqVSKbFh1pC86XQ6nU6LdZnNZrPZTI6fPZPLEcqv9v+FyRSNRqPR6PfvjUaj0WgA+Hw+n88H4Pf7/X4/myoAAEaj0Wg0AhgOh8PhEADXBYDrMpvxWT9+yJWfkeGEiwus5TLWqyvyoqHRaDQajXyZV6vVarUCWC6Xy+WSjH78iPXDB6y/f7P1gxnkXQ6hYrFYLBbln0pIHpL3eh3skG0thXM73HDGcMMZww1nDDecMdxwxnDDGcMNZww3nDEn+sQmflvsdrvdbhegUqlUKhX5MpI8t9chvuz/ZVxeut1ut9t96vVthDwej8fjIcfsvhUxWryyWl0ul8vl+vZtPp/P53OAWq1Wq9UAvF6v1+tl1S7AeDwej8cAiUQikUgA4GVZMn55ic+azdhVRBWbzel0Op1OhPCqIELtdrvdbrNfB9+n1Wq1Wi2E1Gq1Wq1md8XLdoUHg8FgMIjQYDAYDAYAkUgkEokABAKBQCAgV1bp9Pv9fr8P0Gw2m80mQCgUCoVCAJ1Op9PpPKDuj2yGG41Go9GI0GKxWCwWAEqlUqlUyurdUWy32+12C2Cz2Ww2G8B0Op1Op/QNlw1ieDwej8fjp55A/gypE+9XIVMLffhzOGO44Yw5co56/VqlUqlUqlpt/z+bzWaz2QDg7Qf3Zw7f7Xa73Q4A93XzPNzXy5f46MsXqXmOfNO8uCDG4m0H9LawnQvkpl+tVqviFlHyMZw5b95gRajX6/V6vVPf+uhD+iJ9Yn316q6OUVtLmc1ms9lM/v3VrCF9nQniFf7/0rtf4UfeNJ1OrM+fHxfnvvH1K9bp9NSVcDgcDocd/wAAD6ae7l7vDAAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/img/chesspieces/case/bB.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/case/bB.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAAFXUlEQVR42u2by4tSbxjHHy+Nt/F+QxFKCBooxJIuU7gQEsJazEALiXIXUQTSypWb/oBo18JWZquWUYHERExTEEkFEdNtCgNrIRLI4HU8v8Xzezid45jXc96x/G4+vMdzed7Hx+d93vc9Asw000wzTUwK1gYMJocDefky8sAB4edv3iBv3UL++sXa4inVsWMmk8lkMnEctnvTbrfb7XZqHzzI2vIp1YsXSN6xkUgkEolwXCwWi8ViHKdQKBQKhfgLWF1lbfnUSaPRaDQa3pHxeDwej3NdWlpaWlpa4s8TXrfzpGRtQC/Nz8/Pz8/zbZVKpVKp+l+HKYi19VOru3eRfARTKlleXl5eXu6VUrJZ1pZPqfbt0+v1er2+/6ApPG/vXtaWT5lOnUKurW0fwd0UnvfoETIUYt2THSrKunfuIPs7uB+VSqVSqaT2zZtInY51TxlrYQG5vo4c39F/5tu3yH8u5YRCVqvVarVK7eBuulwul8tF7WCQtSckViBgsVgsFsvwjqL6OpVKpVIpnuJ6fVAKHe/3s/bMhKXRIN+9G9YxRLPZbDabuyc+dHzU+yJfvkSq1VJ7QqaJz7VryP375XnesDp8GHnlCmtLxpTi/9XIjQ3k8Cmk1Wq1Wi2Oa7fb7Xa7O8LpOJ03aopBfv0qtHvqRNXA6Dl7WI3ncCJVT5OXxDlr9+5Rr2w2m81mEyAYDAaDQQCj0Wg0GgFWV1dXf18LDIfD4XAYoFqtVqtV/rrxtGcPksrVqdGJE8jxyzlpB00xye7JS+II//gRp9wA6J7R79TpdDqdDsD6+vr673FHx8eV0M5Pn6T1i+R6+hQp/0RnOD57xtpTE9K5c/I6blReuCC1J2Qqf6jMevUKeeiQ+Ay1Wq1WqwECgUAgEADAPUqAubm5ubm5wZ9Ur9fr9TpAqVQqlUp8CvpzSiO7jhxB7twdoyG1uIg7N90Rlsvlcrnc8GVgP2UymUwm07vsxHZ3AEglRgV+Oo28fp2O+P1+v98PEI1Go9EogMPhcDgcADqdTqfT8ZGOy678nWjQpHKwVqvVajWASqVSqVQA8vl8Pp8H2NjY2KDpF6+LF5G3b7Pxg2xSKr1er9frlT9X22w2m83GLmUwinC7HXN2uYxTc4BQKBQKhQASiUQikQDALwRAq9VqtdrB7yzO4dlsNpvNAhQKhUKhID6b1nbev2fjB9lEi0R85KXT6XQ6zXGNRqPRaIyfu4vFYrFY5LhkMplMJntFPKU2+cQowtfWkMePiz/BwQzA5/P5fL7eEU5Vx9bW1tbWFsDm5ubm5iZAuVwul8t8pP9ZtCx79CgbP8igySwujU8chP+a8q+fHjwY1kHS8P591p6QSTSVuXoVubIirB4mR+FLno8fI2kMGWZKNRkN8PLYIKLKmLao+i0nmc3CtkKB9bPNhm23e1IdxPu+fo0t+mXRmkmlguy3oLtrl7AteypaXEQ+eYLlXfcMjnblnU6n0+nkOIPBYDAYWKeQbuI7jPymMtktHmuE/VxZQUo+2J48KRxs/l0K/RCJTNjRFovb7Xa73ew7utPo8Xg8Hg+1xalyZKVSrDtGxDUW8WC4U0h+GlsuF3WUbYeeP0fSniO9wPPwISu7hFt8Pt+EHE46f17qDuBmMbXv3UOePj2YffTq2o0bSLneWbx0aVAPjji1J0ecPSv+hKbmuCZCe4M/fiB//kR+/44sFpHfviE/fEB++YJst0ezTyynE0l/tqLXIOgX4vUiqRx1u3FZeGGBlnu3F/2yzpxBSlYu6vXCB5KDYjGk/BMKaUTzimgU+fkzMp9HGo0yG0RbZxRBf7vo/6IzzTTT9voPBq1K3JUSj60AAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/img/chesspieces/case/bK.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/case/bK.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/case/bN.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/case/bN.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/case/bP.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/case/bP.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAACT0lEQVR42u2asUrDUBSGm6hQCAkmkLoo2KKIULAIFkdB6KKDgyJ0Ln0ABwcntz5A1w59gXZ3cXMstuDWVjd3UwhO0eF4h0axTZObP9HzLR+3Q3L+nza5aZvJMAzDMAzDMExGQQ8w55hfcx4ekvf2pl9/eiI/PJA9Dz1xSikWyf0++ePjd4vi9/fRk6eMfN6yLMuyZhX83YZhGIYh1ru76CQpod0mBy982p0OOklKeH4mL164bdu2bYt1clDRA/zM0lLYI3ie5/Gtc266XXLYS8rdHTpJSjg9JYct/PISncRPwi4py8vk9XVVVVU19HTb22RNQydLGGtr5Hn320E9HpN3dtBJwayskMUDS9RF+z0akbNZdHIQtRpZdtF+1+uoxOBruLg5xs35OSoxuPB8HnPeQgGVGFz4ZII579sbKjG48MEAc97HR2xuGKUSOe6b5sEBOjmYZpMsu+hWC500IYhnyutr0zRN0wxfsKZpmqaJ9e0tWTzJApOiByAsi7y56TiO4zjhj+i6ruu6YiV2Q7aNTgrm5GTRX3aCWtd1XdfF+uICnTxmbm4URVEUJe6bpd+NBroJyVxdhStIlsU1/s9QLtPXrehiZ/n4GN1URPR68Ra3qIdDcvif+EAcHSWjyKA+O5PViORtYbUq9/g8t4+XFzL6HTu/p7epSkr+CphZXUUXF403NqJuRtIlZWtLznHjJvockgoXj+ppR3xSo0NS4X/lbwnR50jIl1f/B0mFv7+jgyU1h6RtTy5HrlRk1iGf+3vy6yt6EoZhGAbPJzzWeN/F71W3AAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/img/chesspieces/case/bQ.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/case/bQ.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/case/bR.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/case/bR.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAACz0lEQVR42u2aP0vzUBSHbxJDugRqQmkXHRMkIKK4ObhY/AwKIg4KDiIOfgJnR6cuujgoDoLQwUVxFouCQzC4SkApNBAhJO9wvZTUlsb8uae8Pc/y8xh7cvN4IZykhCAIgiAIgiAIEYptPzlJc2Gh//EoovnwQPP7u2d5P+tbXqYpScnO+/FB8/m5//HpaZqG0f94ENC8u4uvc2TRdZpPT/EFD8rr6/59jo+Tfb6bsizLsszqlZV4v6mpWq1Wq9WS9js5oSkUvDEzc3mZVJCiKIqiDNpBSf9hg/LoKN5vdTVdn81NaKNDuL1NekGCIAiCwOqXF5alUqlUKqUVHUWVSqVSqfT2fX9P129/Py8zE8WKH04URVF3f1sW+8n3fd/30/d1Xdd13d99oRGhFzBuoHDOFCT87Q36wvLFcaBXMARZpnl1RTP9zY93xm/iOzvQJv/IxM9N+eICWuSwFEVRFEVWb21Bm8sImxDPz3mLHJaSJEmSxOqNjaJNcJ6gmPjTU5rr66qqqqpKSL1er9frxZ3Z8zzP8whpNpvNZpMQuqMJCcMwDMO1NfpXbEP8dywt0Ywi0zRN04wKx7Zt27a7O1vXdV3X+T8jAR982u12u90mpNFoNBqN4s4TH4TGju4Oh0qoHY6DD2dQOGdQOGdQOGdQOGdQOGdQOGfABx/DMAzDIKTVarVareLO4ziO4ziEWJZlQb7/ARK+uNj7myAIAvblhCLo7d/pdDqdDqtmZmi+vsL4KIzt7fjzZvisVqvVapXVo/PuMyO7u6Mmujfjb/lnZ6GNpWRvD1rkXzP+jGVuDtpgQg4OoMVlTU3TNE1j9fw8tNEBHB5Ci8o7y+VyuVxm9e+bPRCaBi2GT97fZzWV0+AjjskAlf06x0TU6IDCOZOT8K8vmjc30BeUN3R+YNXZWeZ++S5PUWiyd5Yj/0X2hHx+0nx8hF4JgiAIAsc/gqw3Q5grjGkAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/img/chesspieces/case/wB.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/case/wB.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/case/wK.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/case/wK.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/case/wN.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/case/wN.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/case/wP.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/case/wP.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAAExElEQVR42u2azatSTRzHjy941XxJFypKiJlCiInciMxFieBCXBgtg8ytLXQhKdgiaSO4CKE2Uishwr8gghBykTtJMoNwUYggLkR8L/X3LKZh6JiP1dU7+jzns/me0euc+X2ZO/ObF4bh4ODg4ODg4ODgYHi0G/CbzfzRzuvXkR4fIxUIkH78iPT1a6TfvtFu8YFy6RLSWg0pwL/rly9Ib9yg3fIDw2RSqVQqlYoYqlar1Wo1QDQajUajALFYLBaLAWg0Go1GQ/5OLBaLxWJcvnKFdiQHwrNnSAF0Op1OpwNotVqtVgtW6Ha73W4XwGw2m81mdo9/84Z2JAfChw9IAeLxeDweh41ks9lsNruup+8PfNoN+DWTCX7q9/v9fn/zL5DtpMzj8Xi8A0kJ9oDnz5ECSKVSqVQK0G632+32as8eDofD4RDAYDAYDAb2kPL2Le1IDgSXCykxMJ1Op9PpVcPz+Xw+n1+Xtdy5QzsSNns2pIhESF0ugUAgwFk2wzDMZDKZkIGGMB6Px+PxuvosFqRnztCObM/QapGSyRIZDpBMJpPJJMB0Op1Op6s9fLFYLBYLMmkeHR0dHR2xe/rXr0itVtqRUgb34ffvkQLIZDKZTAZQKpVKpdLm7IRNtVqtVqskncT16vV6vV6Py2fP0o6cErdvY0OwFovFYrH450azqVQqlUoFAGUr7B7/4AHtyCnx4gU2wmKxWCyWkxvNxufz+Xw+tuHv3tGKmPKkaTTiJ4fD4XA4tv8Gp9PpdDpJWavVarXaq1dpRUzZ8MEAP6F8evtvmM1ms9mMlDudTqfT+fyZbtzUyGSQkqU4MmR7Qwr6z2EPKS9f0o6cEufP4/QPG+LxeDweD8BgMBgMBn9u8Hw+n8/nZDcR1/uzejy0I6fMo0dIiTFWq9VqtZI0bxONRqPRaAC4XC6Xy7XOaLwLyfGDe/fwvjcqAxiNRqPRuNlwu91ut9vJ73A+j8r37yPlU19ZU28AQqdDenzc6/V6vR75xu/3+/3+zTUEg8FgMEjKP0/Cly8jPXeOdqSUuXlTqVQqlUrSM/l8Pp/PB0gkEolEgizdf5dMJpPJZABEIpFIJCL14l1HVL57l3bkp8zDh9gIrDabzWazkRXiSanX6/V6HcDtdrvd7nVj+pMnSP+zO+fJJDvwUCgUCoUA0K7fyY1mg/9DUqlUKpVaZ/zjx7Sd2TLXrrH3NHDadtrkcrlcLrfO+Fu3aDu1Jcg1B6/X6/V6AZbL5XK5PH3DMeFwOBwOE8N/3l2USGg79pfg+yFkfxuPrbTBK1qFQqFQKNg9/WAn1adPcSCBQCAQCNC2eZVIJBKJRNiGv3pF27m/5NMnHEihUCgUCrTtXaVcLpfLZWK4RCKRSCS4jI/89h6xmD1JNpvNZrNJ295V8NGdUCgUCoXsnn7x4rad2dFK02RC4TCMXC6Xy+UMYzKZTCbTbt52EtAZKMOgvRv2txcubPt9OzJcrcZP6O7f/l/MQQcT7E+3f/a5I8OlUvyEe/i+g7IV9qfbv14h3E3zya5crVar1WoMg3bvdvO2bcA+GdoVOzL8+3f8hBY4DDMajUaj0e4D2i7T6bZr3NGoqtEg9fl2acfuKZeR4ov+HBwcHBz/Z/4BOxI4Qcg7oK8AAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/img/chesspieces/case/wQ.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/case/wQ.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/case/wR.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/case/wR.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAAEdElEQVR42u2bTagSXRjHHz9AQ0UR8SMlQ4JyZWBoCBdaSGtBMERChCDBRW1qqStdt3BhX9dwKSouLahFtIhICFxYCyshExH8QCUF9byL03mnmXvtvqUz4305v80fZ8bn/J8/83FmHAEoFAqFQqFQKBSQ8FP2zBms16//HOaEcd6/x/rtG3v52bNYPZ4/G//dO6zfv7OXnz+P9fLl338fIawvXmD98YOfnLZGpcL66hXb+Ga1Wq1Wq5V8NpmwarVYv3z5r3XY+vkzu865c0aj0Wg0/mmdly/Zfe0dDx5wjctkMplMdlQlEolEIuE2eOUK1gsX/i5orpI6166R5WTcTb6Or0P62juePCFGg8FgMBhEaLVarVYrdIRIJBKJRJjGLBaLxWLh7vEIuVwul8uFUL/f7/f7m5VsR75H6phMJpPJxCwn43IhPolvduCkr+2R8hW93+/3+/0AUqlUKj1mFJvNZrPZmM/dbrfb7QJ0Op1Op8Mst9vtdrsdwGAwGAyGzUq2I5A6vV6v1+ttHvffIH76JL75Qs5f6d+TTqfT6TQA3jMBFovFYrFg1uNDHyAQCAQCgZPrFQqFQqEAUK1Wq9UqAN5vmfUKhUKhUACEQqFQKCRW1yIGjs+ZAOFwOBwOb19Pq9VqtVqAaDQajUbF6kpw7t3DipDD4XA4HAg1Go1Go4H2HuKT+CZ9sPvaW+7fJ7MBtVqtVqsRqlQqlUpF7FiPUi6Xy+Uy45M9e9r7oLncuIHPnUwjqVQqlUohtF6v1+u18AGTcZPJZDKZZHwRn9g3f2d5nu40uRwc6PV6vV7/+vVgMBgMBsysQqlUKpVKYVwAAMzn8/l8DtBut9vtNgD2BYB9HRzgrd68Ec4Rr1y6hPXrV6zb3thsq8THxYtCJSDwLOXjR6zVKtY7dzKZTCaTAYjFYrFYjL+Rs9lsNptlpqNsH58+CZWAaNNCgkaj0Wg0AGaz2Ww28zcOviiK3S2Pd5qU46GBCwwNXGBo4AJDAxcYGrjA0MAFhgYuMKLf+ORyuVwuB1Cr1Wq1Gn/jtFqtVqsldreCQ35se/4cq9jPUogPqWBHukBPC0lDz55hvXnT7Xa73W5mD5fL5XI5j8fbcrlcLpcA8Xg8Ho8D1Ov1er1O1hYKWMnTnPVamFx2DjdohLxer9frRWg0Go1GI+Gfhw+Hw+FwiJDH4/F4PNw9Pp9n+z41kDetDg9JQz6fz+fzITQej8fjsfBBcyE+iC928E+fsvvYYTL8BP3oEdZbt5xOp9PpBCgWi8VicX+e2hGm0+l0OmV+zW82m81mk6x9/Bjr7dtYf30PQFRI0A8fso39XzSXY/e5RVK7CZxcbA4PVSqVSqUC0Ol0Op1uN9XFAF9jAGaz2Ww24/ZJrkmicfcuVoQSiUQikRD7DL09pA/SF7vPv+e0XY1PPTuf+ebz+Xw+D1AqlUqlktjt/T2TyWQymYjtYiM+H37dQeyL2+6V3ZfPt21SO54WXr2K9aR/GJw2PnzA+vat2E4oFAqFIh7/AAuXUgmgBUSTAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/img/chesspieces/chesscom/bb.png":
/*!*********************************************!*\
  !*** ./src/img/chesspieces/chesscom/bb.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/chesscom/bk.png":
/*!*********************************************!*\
  !*** ./src/img/chesspieces/chesscom/bk.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/chesscom/bn.png":
/*!*********************************************!*\
  !*** ./src/img/chesspieces/chesscom/bn.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/chesscom/bp.png":
/*!*********************************************!*\
  !*** ./src/img/chesspieces/chesscom/bp.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/chesscom/bq.png":
/*!*********************************************!*\
  !*** ./src/img/chesspieces/chesscom/bq.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/chesscom/br.png":
/*!*********************************************!*\
  !*** ./src/img/chesspieces/chesscom/br.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/chesscom/wb.png":
/*!*********************************************!*\
  !*** ./src/img/chesspieces/chesscom/wb.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEJGlDQ1BJQ0MgUHJvZmlsZQAAOBGFVd9v21QUPolvUqQWPyBYR4eKxa9VU1u5GxqtxgZJk6XtShal6dgqJOQ6N4mpGwfb6baqT3uBNwb8AUDZAw9IPCENBmJ72fbAtElThyqqSUh76MQPISbtBVXhu3ZiJ1PEXPX6yznfOec7517bRD1fabWaGVWIlquunc8klZOnFpSeTYrSs9RLA9Sr6U4tkcvNEi7BFffO6+EdigjL7ZHu/k72I796i9zRiSJPwG4VHX0Z+AxRzNRrtksUvwf7+Gm3BtzzHPDTNgQCqwKXfZwSeNHHJz1OIT8JjtAq6xWtCLwGPLzYZi+3YV8DGMiT4VVuG7oiZpGzrZJhcs/hL49xtzH/Dy6bdfTsXYNY+5yluWO4D4neK/ZUvok/17X0HPBLsF+vuUlhfwX4j/rSfAJ4H1H0qZJ9dN7nR19frRTeBt4Fe9FwpwtN+2p1MXscGLHR9SXrmMgjONd1ZxKzpBeA71b4tNhj6JGoyFNp4GHgwUp9qplfmnFW5oTdy7NamcwCI49kv6fN5IAHgD+0rbyoBc3SOjczohbyS1drbq6pQdqumllRC/0ymTtej8gpbbuVwpQfyw66dqEZyxZKxtHpJn+tZnpnEdrYBbueF9qQn93S7HQGGHnYP7w6L+YGHNtd1FJitqPAR+hERCNOFi1i1alKO6RQnjKUxL1GNjwlMsiEhcPLYTEiT9ISbN15OY/jx4SMshe9LaJRpTvHr3C/ybFYP1PZAfwfYrPsMBtnE6SwN9ib7AhLwTrBDgUKcm06FSrTfSj187xPdVQWOk5Q8vxAfSiIUc7Z7xr6zY/+hpqwSyv0I0/QMTRb7RMgBxNodTfSPqdraz/sDjzKBrv4zu2+a2t0/HHzjd2Lbcc2sG7GtsL42K+xLfxtUgI7YHqKlqHK8HbCCXgjHT1cAdMlDetv4FnQ2lLasaOl6vmB0CMmwT/IPszSueHQqv6i/qluqF+oF9TfO2qEGTumJH0qfSv9KH0nfS/9TIp0Wboi/SRdlb6RLgU5u++9nyXYe69fYRPdil1o1WufNSdTTsp75BfllPy8/LI8G7AUuV8ek6fkvfDsCfbNDP0dvRh0CrNqTbV7LfEEGDQPJQadBtfGVMWEq3QWWdufk6ZSNsjG2PQjp3ZcnOWWing6noonSInvi0/Ex+IzAreevPhe+CawpgP1/pMTMDo64G0sTCXIM+KdOnFWRfQKdJvQzV1+Bt8OokmrdtY2yhVX2a+qrykJfMq4Ml3VR4cVzTQVz+UoNne4vcKLoyS+gyKO6EHe+75Fdt0Mbe5bRIf/wjvrVmhbqBN97RD1vxrahvBOfOYzoosH9bq94uejSOQGkVM6sN/7HelL4t10t9F4gPdVzydEOx83Gv+uNxo7XyL/FtFl8z9ZAHF4bBsrEwAABVVJREFUWAntmGlIbVUUx5fzrCDO5kAqiZga+kwjfIbQ+yDiABpGUH5TSZIiCAUhfchL+iTShxCFUOuLgYJhaKaEr6h8qUilmGM4puKsz2H3/x884tWLeG9Xn4QLfvdM++z9P3vttfbeV+TO/uc9YGPh77O2cH0Wq47C3gO/gp/AW+BW2ZvW1tYqIyNDpaamKig7BPdvk8KmuLg4RdvZ2VGBgYEU+dASAm0tUQnqmJqbm5Pe3l5ZXV2V9fV1VjtjobotUo03apkC7DnyBDiA/2yWiGIXqPgIvJaenm4XEBAg09PTTrjmOPwZHINnZi+h5X5bW1tVVlamDg4O1ObmpioqKtJ78hs8D39W6t5Gw6sRERGqo6NDC5CzP83Nzcrf359C/waZNynSCo1VAZWbm6sQHGd1GZyPjo6qtLQ0inwK3gc3Yp9YWVmpiooKdXh4aCCopKREVVdXG9xj2jnj8g+uW+HraOC4srLSQIR+wVyYnZ2tXxocT0Tu4v3Y6xTZGBUVpfb29k4bZw9NTk6qqakpFRsbqxDJ2jmv9/f3T8stLi4qX19fuvvj6xT4XU5OzmmjPKmpqVH29vbKwcFBcbojPHd0dFQtLS0GZZOTkymw0RSBps4kW9vb2wb1I1AkJCREoETKy8vF29tbSktLBUIlJSXltCzGq5y8u3V68xpOHkGM2tjYMOgZ/SIhIUHl5eXplwZHutzd3Z09WGSKLlPXb50zMzOqu7vbaBs+Pj7i6elp9FlbW5vgwxgkPUYLWOimHer5gT3F4Dhva2trRnuXARIaGsre+9JCOi6t5lU83S0sLFRHR0fnNV64xrhTmZmZFPcPeOHSmo085Kxgjr2Llz7NyspyCA4OlvHxcVlZWRHMxVpdiGotWMLCwmR4eFh6eno28KAAfK0VMOHHXIFsgo1lU0RQUJBw/Dk5cREjWrTCrYLxypUNb9UCbgluzNzR0jhnh+Pj4wtu1W9wdXPi3scob2pK0z7GrJfw5n0bG5swuFiWlpZkfn5elpeXBTOMVqmzs7Ng1hCsZgRpR9rb2+9BdBweclN1I9YEgSo8PFy5uroqLh44g/Ae0WcUDw8PrQyfQ9Ujc5SZ04P+aOiBm5ubJCUlCZZTEhkZqY1BBgcNc7DWqyMjI9LV1SXcryAt5eDRQ2DSTGKOwBfRiMPu7q4MDg6yYS1S/fz8tCCBK7V7dDsWETI2NqZHN8dtGBgCVzZzopj7mGBwDySAeJAKzs9KzDnfgt8A9ya/gCVAd1/ZLts0uaGW50EEeA64Aopgw0y6f4IVkAQiq6qqrBgwMTExwgVEf38/bmv/MnyOI6OYrmUe8gIhgL3Jernp2gdcdV/JuARpBn8Bzp38YsIQXQR/gCeAz484hTU1NamJiQnl4uKibdo55dXV1el7EjY8dvIOj8uAgvR62cY4+ALQIwZmzMVvoMRXyF+Sn58v3EYi12lphIN9YWGBk75AjMTHxwsWqIJdnTDldHZ2buJdu4KCAseGhgaBUMGGShurDBxEtZZ6mH68vLy0Jdrs7KzU19dLX18fhaUBg8WEsSBpR6HfISCK7hoaGtIGO9dyWIgKekwTzTxHYa2trVJbWysDAwPsqXeAb2Nj42dYXklxcbFER0cLdn5aVDNw9LyJpZdwFkpMTBR+DOx70MuTq9iHzF3MaShM186CUUC3ctxRjO4ijskfwQOgWz5OGK1HQC9Ht9K9dCfrmgNPuafGkfCdC2bMxSzEKGVi7QKMQFZGoTaAwcO/OjjY7cECGAGH4Kw54iIasBzfZWBR4BY4Bs6AQfIKeBlwrtb+1MHxzu564Nb0wL/LKEvXOj6AjwAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/img/chesspieces/chesscom/wk.png":
/*!*********************************************!*\
  !*** ./src/img/chesspieces/chesscom/wk.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/chesscom/wn.png":
/*!*********************************************!*\
  !*** ./src/img/chesspieces/chesscom/wn.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/chesscom/wp.png":
/*!*********************************************!*\
  !*** ./src/img/chesspieces/chesscom/wp.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/chesscom/wq.png":
/*!*********************************************!*\
  !*** ./src/img/chesspieces/chesscom/wq.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEJGlDQ1BJQ0MgUHJvZmlsZQAAOBGFVd9v21QUPolvUqQWPyBYR4eKxa9VU1u5GxqtxgZJk6XtShal6dgqJOQ6N4mpGwfb6baqT3uBNwb8AUDZAw9IPCENBmJ72fbAtElThyqqSUh76MQPISbtBVXhu3ZiJ1PEXPX6yznfOec7517bRD1fabWaGVWIlquunc8klZOnFpSeTYrSs9RLA9Sr6U4tkcvNEi7BFffO6+EdigjL7ZHu/k72I796i9zRiSJPwG4VHX0Z+AxRzNRrtksUvwf7+Gm3BtzzHPDTNgQCqwKXfZwSeNHHJz1OIT8JjtAq6xWtCLwGPLzYZi+3YV8DGMiT4VVuG7oiZpGzrZJhcs/hL49xtzH/Dy6bdfTsXYNY+5yluWO4D4neK/ZUvok/17X0HPBLsF+vuUlhfwX4j/rSfAJ4H1H0qZJ9dN7nR19frRTeBt4Fe9FwpwtN+2p1MXscGLHR9SXrmMgjONd1ZxKzpBeA71b4tNhj6JGoyFNp4GHgwUp9qplfmnFW5oTdy7NamcwCI49kv6fN5IAHgD+0rbyoBc3SOjczohbyS1drbq6pQdqumllRC/0ymTtej8gpbbuVwpQfyw66dqEZyxZKxtHpJn+tZnpnEdrYBbueF9qQn93S7HQGGHnYP7w6L+YGHNtd1FJitqPAR+hERCNOFi1i1alKO6RQnjKUxL1GNjwlMsiEhcPLYTEiT9ISbN15OY/jx4SMshe9LaJRpTvHr3C/ybFYP1PZAfwfYrPsMBtnE6SwN9ib7AhLwTrBDgUKcm06FSrTfSj187xPdVQWOk5Q8vxAfSiIUc7Z7xr6zY/+hpqwSyv0I0/QMTRb7RMgBxNodTfSPqdraz/sDjzKBrv4zu2+a2t0/HHzjd2Lbcc2sG7GtsL42K+xLfxtUgI7YHqKlqHK8HbCCXgjHT1cAdMlDetv4FnQ2lLasaOl6vmB0CMmwT/IPszSueHQqv6i/qluqF+oF9TfO2qEGTumJH0qfSv9KH0nfS/9TIp0Wboi/SRdlb6RLgU5u++9nyXYe69fYRPdil1o1WufNSdTTsp75BfllPy8/LI8G7AUuV8ek6fkvfDsCfbNDP0dvRh0CrNqTbV7LfEEGDQPJQadBtfGVMWEq3QWWdufk6ZSNsjG2PQjp3ZcnOWWing6noonSInvi0/Ex+IzAreevPhe+CawpgP1/pMTMDo64G0sTCXIM+KdOnFWRfQKdJvQzV1+Bt8OokmrdtY2yhVX2a+qrykJfMq4Ml3VR4cVzTQVz+UoNne4vcKLoyS+gyKO6EHe+75Fdt0Mbe5bRIf/wjvrVmhbqBN97RD1vxrahvBOfOYzoosH9bq94uejSOQGkVM6sN/7HelL4t10t9F4gPdVzydEOx83Gv+uNxo7XyL/FtFl8z9ZAHF4bBsrEwAAB6FJREFUWAntWGtMlmUYvjnJWZTFGUFRAQMF0TyAKbg00eEceWCi2bRkazoramtz1qez+cPp1lr9sFVjJRP+aCtxtGozhpsmYgKZHAQEQUAOKgM5yNN1PXwv+/z8+D4qqz9e28X7HN/3fu7Tc3+IPMMzDfy/GnB5ip9Pwrs+BFeBdWAX+J/CCV/bBH4K7gYngQai0LgTFRWlwsPDFdrXweeMSTx9wVzwE3AN+K9gl7Ozs4qNjVXu7u4U4iOLr+zw8PBQ9fX16vz588rJyYnzL5nnnfHM8/HxUdHR0ZwbQj/dPPdUH8WpqamK2LlzJwW4ARpaXEbhc3Jy1JYtWzjXB0aDBDXZZTKZ1KNHj/QB0f+CExOBLR9MwMZ9IH2qGuTHiOSBgYEX8BE5e/asdHR0XMLYNyAFaoLcvWVlZQurqqroe++AP4ME57OGhoYC29vb5dy5c4L3FGCslJNABPgWuBJsArvBcfE8ZtrDwsLUlClT+OIfQU/z6jA8i8B+sByMBa3xLQY+th5EfzlYD/aCJ0E/kKB2KwICAlRQUBC/VwPyO+PiAAVrbW1Vp06d4gYywWr1l+jnW42x6wbS7D+xYwMlGDNZja+ja5SWlqry8nLl6urK771rucbVsoN2fV9fn5w4cUJu3OC35AHYw4YFqEFGczB4x2I8FO1poAfIqOVeA3PRSAa/NwbMz3a4xkh+fr4zgkzoPgAzwLhwx8xnYCc4CL4JWuMrDPCku6wmVpvHuY8CWeIQOtxz0HIQbUb4YXAY5GFNINPZGLjAEgPoUKh4sAxk3xpe5oGteFrun+/i4iIwGU3N/QbowxvNHcOfjbkRNEhqlocygTzIGCw/MDaIRitYBZpAw6HR1PCEr7CRAloKkpSYmCizZs3iHDOAgRfRiKXwgLWAkRh7G/wV7ACfwHgCcuHvYDiYw44FPJcsWSLTpk2jO9AXCbbjkCclKUnLlqhHR/9kI7k7zZ2rre5jMc7meyDHtMNzwBr2BKw1L+YJQyw2esbHx8vatWs5RNMxWXM+cvHixbJgwQI0JQbkhwPB9M2bN/NAaIrhHmxT+6+BNHEDaBP2BGzEDjovo5WJlOB6Dy8vL9m+fbvg2mIuXApGwew+FHzevHnoaoFD8UxHdAZs3bpVJk3iOR4z8X70vUFmiRbQJuwJyE1dU6dO5cYccCZIB9Y+SDPPmTMHXckCE4ODgyUiIkJw34q3tzeddCG4KSUlRWJiYgwBDQ0m43CvIOdiiY7eTjZswZ6A3djQumLFCkGVwkB5H+R6d09PT6HT03RABriRQkAwCQ0NlchI+r68DqZkZ2ezLcxzAH2V7/gAvupmdgdaagC0CXsC0rwN3LV3714++KVUUKEywUNk27ZtAnOHobl00aJFeoymZDQDadDqlMzMTD1O4c3ggVbv27dPHjzQubzOmLD1tCcg19dUV1fLjh07BJHIFHEI9Pbz8xMUBcLL3xAMxYBQGK6ljxJpaWlSUVEhN2/eFLM56c8HMe6Unp4uKM+4rIZ//i5yfH199T2Zl5eneG/iRQr+Z9SEY2Mchw+qwMBAvYZ9892qCw+YU4+zliwuLlZFRUUKbsKxdeC4eOxasbFqFcZ+oHlQKRv3M28L2bNnjzDvXbx4UYaHhyUhIUE2bNggDx8+lNOnT+u11CQ1XFBQICdPsogZBXxampqaBFrn5TsfrDBPPfFwJGAQdlyaPHlyxPr168XNzU3i4uIkIyNDR6vxtpGREdZ4wkID0SkMImhKH8RYc/XqVYHWpKamRvr7++XMmTPc8xvml4G9xjrrpyMBuT4Tpig8evSoS1ZWltAnr1y5IteuXdO+hdJM7t27pzVHQQlqmFEL95CQkBCZMWOGDhxGLdPQ8ePH5dixY/2oZF7G8hK9aZw/ExGQW0/go29Qg9QUHZ45jx8mUWyKv7+/keu0sF1dXULhGxoa9EFu3bolvb29WnC6AWACD7LxNEAzjOTm5qrKykoFE+Hwo4D/qe7ubtXc3KwaGxs1b9++raBVBY0ayxSEU9C8wg3EwOgDdVXhSDhm/ImARWQbNBhcV1enHd5IH/htojUzODgokEa/iyZmPqSJqd3Zs2frK5C3D+eAWvCWXuzgz0RNzNecA9cwCOhXvDl41dHENDdzo/m+1W4ArQo0qs17/fp1HRxtbW2GOJ+jsdvo2HtOVIM8iHNycrLWHlMOa8L79+/rZM2E3dPTY9wMWlAKTo3hB5Hw5mEir62t1akIgaaLQ3uCGXMTFTAGG5axGC0sLJSSkhKhVhgETBkE72aS4G8L8+8LLRx+JQorneXLl+uCFgKyVgsAbRapfIeBiZp4PzYcZm7DTaHNy7IK159Mnz5dj1FLjHKC/sh7libldcbDMC0xB969e1fPY9mr4Ndc/0/BMqQS1P+6OHLkiLp8+bKOyrEQddCA+dWFCxfUgQMHjP/dMJqKQYcKcrgAL6FaVoI0C39fzEag+NC36Iskg4Z1IzVM0OwMkpaWFn2lIe1IZ6cu+Vic/gH+An4HloKjoY+GLUxEQMt99NlIkJU0ORMMB/1BX9Bw/iG0WUtRqiaQaYWCkc3g6JWDhiP8VQHtvY/CG++jACwEnuGZBhxp4E8pR+qjZOVbwAAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/img/chesspieces/chesscom/wr.png":
/*!*********************************************!*\
  !*** ./src/img/chesspieces/chesscom/wr.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/condal/bB.png":
/*!*******************************************!*\
  !*** ./src/img/chesspieces/condal/bB.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/condal/bK.png":
/*!*******************************************!*\
  !*** ./src/img/chesspieces/condal/bK.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/condal/bN.png":
/*!*******************************************!*\
  !*** ./src/img/chesspieces/condal/bN.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/condal/bP.png":
/*!*******************************************!*\
  !*** ./src/img/chesspieces/condal/bP.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAACrklEQVR42u2av0rzUBjGmxjzBw00IZkkIVIMIiRQglAzFEkgiVjvQkRQJ70D3VzEwSsQBDcHcfYCsmR01ikZxDVDv+Fw+KjQpk1t3pSc3/LwliTnfR7KOSd/Wi0CgUAgEAgEQml4HunNjW3btm0Ph1jR79fXSDkOutOlJwiCIAhwsEX6+grd75LjeUinDRxrvw/d+Tho6AYmY5rlztvagu58HDUP/OOj2vMaD033er1er1c8lbiu67ourikKuvOxjqAbmMz6epZlWZYVH5mmaZqmuFpbg+58yWi3oyiKomjWxfL3bqXdhnZSc/p9wzAMwygb9H/VdV3XdVzj3U7jYRik9/cURVEUNX/Qv3X0ug8PSFdXoZ1XzMoK0udnHEy1+vKCtDHBHx9PF8yi9eSkaudM1QMifn4cx3Ecp/jIJEmSJGm18jzP83z8cSzLsizbalmWZVlW8XXjOI7j+Psbxn+NEUVRFMXif6wkSZIk4ZpQkk4H6axTha5Ddz6Omt/4lJ1jq5+bl5y9PY7jOI6bfTHkeZ7neVzv7kI7qTndrizLsizPvwtRFEVRFFxPs4w2ik5ndNH7Ox0N3jCgnYLjeZ7neYvfd4dhGIZh43cx3S7Sqm94dnagHAPvUo6OYMYdDKAcAwe+uQkzLtxcDhw41IsCuBcUwIF/fcGM+/kJ5Rg48Pf3Zo0LDstqmqZp2uJ3J6ZpmqaJa/w8vrEcHtI0TdP03wfNMAzDMLje34d2WjOurpD+9au101NoZzVnMFBVVVXVeW/lwxDaSc3Z3kb69DQ6FZSdQh4fkdb30zcgLi/LPo4tUkEQBEHA9cUFtFNg7u6QVv0s5fYW2nnFnJ9PDqQqPTuDTmLh+L7v+z500MPhaB/VAfSV6cEB0o0NmPEx+NHC2xtsHwQCgUBYBv4BD0RtfK5TbhcAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/img/chesspieces/condal/bQ.png":
/*!*******************************************!*\
  !*** ./src/img/chesspieces/condal/bQ.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/condal/bR.png":
/*!*******************************************!*\
  !*** ./src/img/chesspieces/condal/bR.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAAEr0lEQVR42u2az4tSURTHjz9RMUVSNEnHIFQwM0g3IoqIhauiIBetgpZNEG37GwIjhDa2EvpFtVZEXIgIQdIEgwt1KPAHulCZFEV7LS634dmM49N5907D+2y+3PfuO/fe4/XcnwACAgICAv8rIn7NK5VI799fnu/LF6SVyuHvIxGkly4tt9NoIM3lDn9/7RpSr3e5nXfvkA6H/PrnxDGZkDLMcn32bLmdDx9Ws4PzHQUu5zg7ly/z5REpX4a5odEgvXjx8Pf4n3IcON9RdnA5Z5ZVe/hpU/56uJgvwwKHQyykqFQqlUoFoFQqlasGCBKMRqPRaAQwHo/H4zHt2mzM+fMymUwmkzGMTqfT6XQMk0wmk8kkw8zn8/l8zhBnNpvNZjOGSSQSiUSCYTQajUajYRipVCqVSnFIsVj48gjP00KM0xmNRqPR6O5uNpvNZrMAXq/X6/UCxOPxeDxOphYAAOl0Op1OA1QqlUqlAhAOh8PhMEA+n8/n8243yvX9O7kaEeHuXavVarVayQ+KFovFYrHg9L17tD1BmDt32A7B82i12m632+127g51u91utxun1Wq2XfqOpjxLMRrZ6dkM6f6+SCQSidYIeGKxWCz+26r9fbZdDJ6ukofywkepNBqNRqMRoNPpdDqdfh+/MRgMBoMBoN/v9w+eHo9er9fr9YtP+31sr9vtdrtd3PMFzjyEZilH8fAhUqeT23cvX7LTjx5x+75eR5pM0m0/QXw+n8/nW3e2EQiwdfXvXS6Xy+XCafJQGzRbrVar1SJfbrvdbrfbtFpNPaTcvo1UynHwzufZ6XCY2/e/fyP9+JF0iyk5XCJBipfQeCL36xfSTgep1YpULudmfzJB+vMnUjz9PHeOnW9vD+nitPHMceUK0sUY++YNzuFwOBwOB/cY7/F4PB7PYozGdhfzezykW04phtNbeLC5cIF0iZQWPtNpLBaLxWIAaNcQIJPJZDKZnR2co1qtVqvV168jkUgkEnnwYFXLuVwul8u9esV+urOD7Bxsk6F88zmd9gsQg9Kgub0dCoVCodCLF1y/LBQKhULh6lWcRna+fVvPztOnKPX8OR0/EOPtW6TkFz5sff+etid4JxAIBAKBTfe1N3d4MBgMBoP0Vpw8c/060s+fFQqFQqFY3+Emk8lkMh3ounbQ2SpOf/qEFF8U4g+eY/jWllqtVqvVe3sSiUQikQDYbDabzcZ3s1an0Wg08H0tAIDhcDgcDre2UOrHD9r148jjx0gZpl6v1+t18ofGx1Gr1Wq12uI/YHubL4/wPA8/ODool8vlcvn0XZPA9Tqq3v8ZKtW6Z5OklV1P/roEzzE8GkWDZCYjl8vlcjmA3+/3+/0AWq1Wq9XyW/oyBoPBYDAAKBaLxWIRYDKZTCYTgOl0Op1Ob9xAubJZejXkhExmNpvNZjPDOJ1Op9PJML1er9fr0Y7Y/4LOOA96OPv6hvjE95p4iuE+X7PZbDabAHjPpFQqlUolPn/kzUDrA4BUKpVKpfBTvJv49Svt+h3DrVtI6cfmzfTmzZP2DE/bs+vcKDmNnHw7hOvKhBEcThieBk18kPDkCe0GbsbuLu0aCAgICAicHv4A9Qtv+fJkFLsAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/img/chesspieces/condal/wB.png":
/*!*******************************************!*\
  !*** ./src/img/chesspieces/condal/wB.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/condal/wK.png":
/*!*******************************************!*\
  !*** ./src/img/chesspieces/condal/wK.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/condal/wN.png":
/*!*******************************************!*\
  !*** ./src/img/chesspieces/condal/wN.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/condal/wP.png":
/*!*******************************************!*\
  !*** ./src/img/chesspieces/condal/wP.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/condal/wQ.png":
/*!*******************************************!*\
  !*** ./src/img/chesspieces/condal/wQ.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/condal/wR.png":
/*!*******************************************!*\
  !*** ./src/img/chesspieces/condal/wR.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAAEyUlEQVR42u2aPWhaXRjHHzWiVvG74tX6UYgfCIWWulgXtVi0ZBBSaqGLdOrSYoduurkki7i4dspSAi24VYqjCApKSwMuBh0UHLQFIQblvMPh9DbGfDXec+2b+1v+8Z6b8zznn+PNOfc8AAICAgIC/yoibrtXKLC+fHn+ffU61mZzefvjx1jv3j2/n04H69evy9vv38fq95/fz8ePWH/94taflWM2Y0XofM1kzu9nf/9y/ZD7zoLEuaifzU2uHBFz1fEiuVwul8sBtFqtVqu12KpWY71zZ7kqFG632+12A3Q6nU6nw6rD4XA4HKQf8o06qx8Sh80jm81ms1laLgBs0ApkMBgMBgOA3W632+2Lre/fn9TTSKVSqVQK4HQ6nU7nHwPY2NjY+D2Kp0+x9noX5UPy0Ov1er2elgsUDScoFAqFQgGQz+fz+fzlf89oNBqNxtPXM5lMJpMBGI/H4/H46nnQhprhCCGEEIBMJpPJZADpdDqdTl+/31QqlUqlrp/X/wSDAT8KENLpdDqdDqFisVgsFhGaz+fz+RxRZzabzWYzhAqFQqFQQEitVqvVaoTwo4lYb7Nx5QjHy0KC1xuNRqPR6MFBuVwul8sAfr/f7/cDJJPJZDJJJwsAgL29vb29PYBms9lsNgHC4XA4HAaoVCqVSuXePXzX9+/0MqLC9jb+p3XR8mz1arPZbDYb+fz8Oe2RU5rhZ7G9jXV/v1qtVqtVAJfL5XK5/khQJBKJRKf1rPbF6/V6vV6vA0QikUgkQlrJd4pscOhBfZVyEoYhP/l8Pp/PB4CfqauLsLm5uXl6G0M2ZPShtvFZjtmsUqlUKtXqjSYwDMMwDIBYLBaLf4/2xhrOMMQQriAbI5PJZDKZ2Lh8jZg3w+PxeDwef/XKYrFYLBbu41mtVqvVChCLxWKx2HVW7teDN8MHg8FgMACgbTiJyxe8Gd7v9/v9vmA4rbDi4XA4HA7pG07ikjyoj5x2QIzJhLf2rBFcQ+KQuJjbt2mPnCfD2WUZ7Rl+Vh604MlwdlkmGE4FYYZThmG0Wq1Wq6V3EKDRaDQaDYBSqVQqleTqDTKc1sxe5ORMvzGGm82C4ZQIBoPBYPDZM74ND4VCoVDoxQva8SkZ/vAh1s+fG41Go9Ggt/5ehMSt1Wq1Wo1c/fQJKykU4g4Jt907HPj1648f+K2g1xsIBAKBAEAikUgkEgAej8fj8XA9TJbJZDKZTABGo9FoNAKYTqfT6dTrxSeer1/jzx8+4Lt//qSX2Up4+xYrQr1er9fr0T80vohut9vtdheP4t684coRjh8pbKVIu91ut9vcRvsblud1lQqXteLWLVyixs4giUQikUjWR0leJ/PkbmfA8SFyNCqXy+Vy+ZcvpABoa2tra2sLwGw2m/k76GJf05ZKpVKpBHB0dHR0dARwfHx8fHz85Am+q1zmL8MrIZXiZR9C2Fj2WbluHB4eHh4eIoSP4BA6Wb5B//XtX/LoEVaEdnd3d3d3+bb1YnZ2dnZ2dhb/eT54sGpnOPoLsu+Zl5cprB+L9TAY9th5VXBkOFuSs1igs64sz3P1mXNeCETKiPk+S7xsnv8oiQRW+rWDq9VYbNXOcDTDv33D+u4dN/3T4uCA7wwEBAQEBNaH/wDo0m3mozXy6AAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/img/chesspieces/leipzig/bB.png":
/*!********************************************!*\
  !*** ./src/img/chesspieces/leipzig/bB.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/leipzig/bK.png":
/*!********************************************!*\
  !*** ./src/img/chesspieces/leipzig/bK.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAAI2UlEQVR42u1b3U9jRRS/+IGAKA8aI+BXDE/GxO9EffbJRP8DTdY3Ej8gm7gaEePGDUQDhdCG0l0FK5Tw2RALllYSJLjgCmXjbrcEWizQBYHyUaCllpbx4fjLzQy97YUtW0j6e/nlTufOnDl35sw5Z6aSlEEGGWSQQQYZqEJWugVIjHPniB955Gjvra4SG43pHsEZw/Q0MWNH4+vX0y25Eu5JtwDqMDLS1NTU1NSEZyg2Eunp6enp6UH5tWvplvSMQ5zhFRV9fX19fX2MDQ0NDQ0NoVyn4+ud3hl+yiEqPBLZ3d3d3d1lbG1tbW1t7eyZlPtS08y99xK/8QbxY48RP/oocXY28T//EE9MEHu96tqPRru7u7u7u++/Pz8/Pz8//+LF+vr6+vr6ysrGxsbGxkZJKi0tLS0thcLV4plniF95hbiwkDgSIfb7ibEJX71KfHCQGr0dGW+9RXzcze2vv4jfe4/4HmFPQbt//EF85Ur8dr79lhgfUpzhaPf99/l+jyrvn38SY2LdNXz11dEE3d4m3txMXA8Ke/ZZXuHH9VJKSogdjsT119eJg0F17WOGf/TRCSv6888TC7K8TEucsZWVlZWVFXYIOzs7Ozs7jHV1dXV1deG9oSG+HXyYrS2+3Omsra2tra1lTKfT6XQ6lP/yS3wFiu/39vb39/f39zO2t7e3t7d3WL75+fn5+XnUv3CBOBBIPO4PP0yxol94gTgajd+h06mk4IODg4ODA8Y2Nzc3NzcZi0QikUjkcL22tra2tja0J860GzeUFARQvf5+/j2/f3BwcHBw8HD9cDgcDocZ29ra2traUm53ZmZmZmYG7fl88ce/v0/8/PMpUnhra/yOYjGn0+l0OmUBvV6v1+vF7yYT8c4O/x6W5PXrGo1Go9HIChgbGxsbG5MH0tDQ0NDQwJJCr9fr9Xp5hUxPT09PTzO2vb29vb2N8spKYiVTtbFBrNfDCwLsdrvdbk9man788Q4VnZXFCyJ2MDwMgXw+n8/nQ/nSUmLBlNjlGh8fHx8fl91ArVar1WqTK5wCI7y3uDg8PDw8PJxsZibjW7fwwfiV5HbHrw+v5th4/PHEAmk0vCCXLx9vYMnY4VAyRXz/fX0n039lJd9Pd3fi+nCLDyNJaJ+Xl/h32Frg7bcT1795s6Ojo6OjA89araQKL72UnZ2dnZ3tcJDpkKTm5ubm5mZJysrKysrKMpup3rvvJm4HpuzSpd7e3t7eXpS7XInfE8cljlvEgw+qG9ch5OcTK31JrTYajUajUdE2i/VCoeXl5eXlZaWZWVGRuJ87Z3hPIvg9B5uf+P7t20dbSdDbsXHzZvyGrVZeEERoYr2BAdTDJkjlVVWxWCwWi+EZkdyXXxLPzBxPwZOTxJ9+Svzrr/CW6Fmvh83n5R8Zid/e33/z9ZzO+PVu3LhDRQMXL8bvIBCAbaXnlRX+d/jHFRW8wKOjqOdyuVwuF2Pr6+vr6+uyAmw2m81mO/pMnpqampqaktvZ2NjY2NhgbHR0dHR0VKxvsfByIaAbHOTrTUz4/X6/359sJX/9dYoU/tRTxEp++OEIEn53fBPS1YV6CGTgZ1P5yMjq6urq6qq4+ydTuNvNm4ixMd7kXbrE1zcYRPkWFxcXFxeV2leKlKGXJ59MkcKBzk51A5ezeS0tLS0tLXLkCb+br9/ezkd4YvrVblfXr9lMm7JcjsCGnuWZC7nm5ubm5uYYa21tbW1tZWx2dnZ2dvaoK0t2A1KMZBGnzAih6RlHBFVVCEj4+hMTwWAwGAzKS9ZkMplMJjy3takbuEbD7xGhEG+75+bQPjZxejYYiK9cgeLV9ReLEb/44gkpHKiuVifQ5ctWq9Vqtcq7Pb/E4Y75fLzJ8Xg6Ozs7Ozvx3Niorr/qagRK9HztGt8uIt6rV5FXp3QvY5OTk5OTk2r9bPkDn7CiAUSgOPRSEigY5G2x3V5TU1NTU4Nnm40Y7thvv+E9YqXNSS2HQsRIq4o5l2++ITaZPB6Px+NJ5h7KJpAY5wBH0FxqPgDcOHgzIjCTi4uJH3qIeHaWV4jXS/7yF18UFxcXFxdLEs1AScrJycnJyZGk3Nzc3NxcScK8pc1WkkKhUCgUkiQKxSVpYWFhYWFBksrLy8vLy+vqqH2kfWEC4Azgw6ytET/9dPxx4Cjv44+J03YQAXz/PbE4UywW2GS4aenG0tLS0tISY0aj0Wg0yulbXm7Rq7pzpPheyg8/EJ87R96IJJWVlZWVlSm/gRnqdrvdbrckkSJkDgQCgUAAMxX5+JwcXiHhMPVXXV1QUFBQUCBJRUVFRUVFklRYWFhYWChJJSUlJSUlkpSXl5eXKGFRV1dXV1eH/lDa3Ez8wQep1dcdA6qVAwFSGGN0JolyDAARW3KvJzUMr+LWLWKjsb29vb29XV55VC766598km7NKuDhh4lhs1OlKNhKs9nhcDgcDjFytFhS25/oRWFcpxbIYYgDgHsH7wCbZrKBf/cd3EkRfC6mqkpde7g9gGwlDiZE2/3ZZ+nWpEqIfvP586KieBMTDqtTlMdjMBgMBgNjMAVUDhOhduZeuCDKMzAwMDAwICbhkN8/9YDNE70V+N3YXE/aZifjn38mRmgunqWeP59qzZzQ7dkHHiBGuvXll9W9h+sUmLFY+kheYdMTAyIEILh/gtu2uNjz3HPEBQXq5EA6+rXXiLECTz1wqCrOLCxZvR4hNWyxEvb39/f39xmjAEfOLirZdtHGI21L/SKA+fff+PIhkjwzwAWcw+4ebCUUgcuZ9DtsP1bG7dvEam383h4xDo2Rd9fpLBaLxWKRr22IWUWeITfGceqBs0VxIA4Hn0wSLwDdLbbZeDlwzVms98476dakSiBXIl4n+P13OrxN92bJmNlsNpvNSkdrcFcxjjODJ54gFo+sTitbrcRIsp15vPkm8U8/EStdMDppxt1DbOqvv363NJDmP1Xd9//99Fdf5Rl39JA+hXuH6we5uXw72Cx3d4lx82thgRhuHtLAONWHm5lBBhlkcCbxHy71ZHfuAb2ZAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/img/chesspieces/leipzig/bN.png":
/*!********************************************!*\
  !*** ./src/img/chesspieces/leipzig/bN.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/leipzig/bP.png":
/*!********************************************!*\
  !*** ./src/img/chesspieces/leipzig/bP.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAACiElEQVR42u2bvS9DURjGaX3UR4nPCImQNDHakDRG/gIRm8FgIf4JLCaLTWJh1qQD0kQrpFsbBpNBQoiE0bdgePIO9ybF7T2nz7nu+S2/RHqc931yHKfntlVVFovFEjZ6e+GtLfjmxunNTbi7m11pwOnshC8v4a+vn31xAbe1sSsPKGtr8G9Bu72ywq68FBF2AT+TTJY3bnycXXkpDA/8+bmy4/RjeOC7u+WNS6XYlQeUmhr47Az+be8uFJzjzMPwFf7xAdfW/rGdiHOcxSMDA/BfTyefn3BfH7vyUhi+whcXvb2+uhpeWGBXHjCGhuCXF9jrOfzpCU4k2J0YTmMjfHoKew3a7WIRbmhgd2YYshVsb8N+g3Z7Z8c5Dw9D9vDlZbipCd7YUPN719dh+ctZXWV3SqauDq6vd/58bw/2u7Ldb4BKzRda5HShekuZn2d3ZhjDw/DrK6w6cDntyDyhJ5+HVQfttswTWsbGYN1Buz06yuqYfEqZnOTMOzHB6pgcuNyVVJrBQVbH5MBZt3q820Ry4NfXnHmvrlgdkwM/POTMm81y+6Zzfg7rPp3IPKFHjmnv77DqoN/e4JERdqeGMT0Ny32236AfH+GpKXZnhrO0BPsN3OsTo9DR0wPf3cF+A7+9hbu62J0ZRiwGy6lF9R5+cACH/lpWHgxkMrDuU8r+Phy6R26trfDJiTOQSvnoCG5pYSehGVnRx8feAtLlXA7+tys+nVYTlGr/u88izs3pDUyVZ2fZSfkkHocfHjgBevX9PdzcrCsRzZdXMzNwe7veeVTR0QHLO97AYco/R68O3G1iNArLNxHYAZZ7BxNRvgNo+uC6PDqTwsVBo78flm/RWSwWi1F8A35MzfcZ/LM4AAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/img/chesspieces/leipzig/bQ.png":
/*!********************************************!*\
  !*** ./src/img/chesspieces/leipzig/bQ.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/leipzig/bR.png":
/*!********************************************!*\
  !*** ./src/img/chesspieces/leipzig/bR.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/leipzig/wB.png":
/*!********************************************!*\
  !*** ./src/img/chesspieces/leipzig/wB.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/leipzig/wK.png":
/*!********************************************!*\
  !*** ./src/img/chesspieces/leipzig/wK.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/leipzig/wN.png":
/*!********************************************!*\
  !*** ./src/img/chesspieces/leipzig/wN.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/leipzig/wP.png":
/*!********************************************!*\
  !*** ./src/img/chesspieces/leipzig/wP.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAAEl0lEQVR42u2b24sSURzHx22734yy60tRsI+9RPXUH9Bz9BoUEUTRcxBtD9USERKIIt7RQvJWEFERNHYlgjK3FoxojC5rmSlobWozp4dvP2LOYrub2hlzPi8fHMedc77MnPnNObOSZGJiYtJvrF0LB4Pwhw96+3zwypWiW9rjrFgB5/Pwly/wxYt6l8vwq1fwsmWiW96jnD0Lf/2qKIqiKGwStJ32g0+dEt3yVlhEN+DPPHgAN5uId8eOlh2xWCwWy927+q2t9xfFgOgG/JmJCXjBguntT/vR70xmyOHDsKYlk8lkMjl5SEkkEolEgoYUTYMPHhTd8h5lcBDOZmEK9uNHvWn7kyf63xkPwzYM/PgBz54Nj43Bjx/r99u2DR4Y0P/OZIasXw/TGXz0KD+kYPuJEzANKevWiW55j3LuHKyq+Xw+n89PHsNzuVwul+PH8JER0S3vMYaG4O/f4UuX2BRgv8uX4W/f4E2bRPfE4FBZ9+wZzJjP5/P5fIx5PB6Px0PBHj8ODw87HA6Hw8GYy+VyuVz0PfnpU3j+fNE9MxiWXw9gFy7AfHDtmqYALMIf9Azy4HPyJLxwIex00jc4syWpXC6Xy2VJ0jRN07Tfpu1ut9vtdvN/9/x5mK6c06dF91Qwc+bAc+fqt1+/Do+NIdipRnDGVFVVVZXO6Jcv4StXpne8vuXQIZixeDwej8enDponGo1Go1F+SDlwQHTPDMbmzXC9Dk9dlUyvakmlYKp26Dh9z8OH8KdftBs3Y4VCoVAoUPClkv44fcv27TBjTqfT6XS2HzSP3W632+38EENTAX0H1dOqimqj84HTFYPjkI8dE9VjwWUhzZW8f2+1Wq1Wa+ePYLPZbDYbffr8Gd6wQVSPBQcualZP3Gyi4MDfvYPXrKlWq9VqtfNHKJVKJbplStLy5fDbt6J6LDjw27fhwcFUKpWiIq6ToJ6nT/RoL8ti+y0cWlhQlE7dPIvFYrFYpJskXUl0nL6HyrRmE5blSqVSqVRmHjSGEAqaVv0bDXjrVtE9NRi7d8M0n/36dTgcDofDjNVqtVqtNjlgjP2MBYPBYDBIQb95A9N7Krt2ie6ZwTlyBObrZ3r0VxS96Qzm96dVf5MWrF4N02r86Kgsy7Is82uX9I4heXg4nU6n02na7/lzeHwc/l2Jm0iSJEnz5sFUtUxMZLPZbDY78zE8k8lkMhn+irh5E+77aVlaGLh1C9a0QCAQCATar1L0S3K0uHzjBtx3S25Ll8L378Oq6vf7/X5/+0HzeL1er9dLwasqfOcOvGSJ6CS6DJ3R9+7BzWYkEolEIp0PmoeqHRyXHu3Tafi/PeOvXoUZC4VCoVCo+0Hz6MtHMr8U1/Ps26fv4MjIv49aD9px5oy+XXv2iE6qTRYvhmn6aHS00Wg0Gg3RcTNWr9fr9ToF/eIFTNO3ixaJTu4v2b8fZqzV68aiicVisViMH2L27hWd3F9CN8fxcXqNwWjoX6+gB67uzSZ26U2kWbPgWo0Ch69d61ZHOsPOnfCqVTANiVTHt0+XAt+4EX70qFvR/Bu2bIHpv+hMTExMDMVPTM2HbP5F/R8AAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/img/chesspieces/leipzig/wQ.png":
/*!********************************************!*\
  !*** ./src/img/chesspieces/leipzig/wQ.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/leipzig/wR.png":
/*!********************************************!*\
  !*** ./src/img/chesspieces/leipzig/wR.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/maya/bB.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/maya/bB.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAAEyElEQVR42u2by6tSQRzHx3w/OqT4QElL0UJBUHGRgih6URDxkaII9Qe0CVpUEBStWkgUKfTYtYpw486FCYIQbkR3ugiEENyogVAiip4Ww3Dxdr23o5473nv9bL7OOGfOb74Oc2bmjADs2bNnz2Xjxo1kMplMJklSLBaLxWKSlEgkEomEJNPpdDqdJklY7vp13JGec1QqpVKpVCqRoatVrVar1WqUVihwR35Oef8e6umGL+u7d7gjP3eYzWaz2UzVaJK02Ww2mw2ld48ruANYBY/H4/F41K/j8/l8Ph939OeWJ0+gUu3pT5/ijnwVDNwBnIxQqFAoFArF799wVgKAXC6Xy+UALBaLxWIBwHQ6nU6nAHS73W63C0Cv1+v1eiIRvP7PH9wtOGe8ecNisVgsFkk2Go1Go0H+A8pns9lsNhv1cL0ed+Sr2NEe7nRCo79/n8/n8/kcgEAgEAgEAPB6vV6v97BkqVQqlUoAlMvlcrkMgN/v9/v9KJ+xo+3bGUQinU6n0+moz06O13AYd4t2nE+foG5uuNFoNBqNKH1lZ2djmDg4gLqtno3040fcLdsxeLztDiEkGY/H4/H4qp596cf058+hbm60x+PxeDwozeUu30cgcLvdbrcbfW+x4G75GSMWEwRBEMTmRlssFovFgtIEsXwfJjMcDofD4cPyTqfT6XTu7tKfJl68QAasq8tD0ardwQ8fTq4nncbtBM2wWCqVSqVSrW80k8lkMpkoffv28fd59uy0egwGg8FgQGkmE7czNBGNnmbEacrhcDgcDkorlcv137+/Xr2xGG5ntg56Y7OeIf+qRqPRaDQkicZoBoPBYDCo1xMKhUKh0AUc0zcdSujS5TdK9HNmKzCRSCRCe3i7BBzLcUdBA9FoNBqN4u/Rx+vLl7j9oYkHD7Zr1Pq6PObfuoXbGZq4dm1bC55NNRaLxWKxC/iwPJ6HD6katC1d/sFv3sTtxJmBd0y/dw9XuzHvnhFEMBgMBoOjUbFYLBaLAMCFDQBwP3v9mtvtdrvdBmA2m81mMwDgC7nHj+G3r1/jbTftXL0K1eOBilacSO/etdvtdrudJDOZTCaTITcG1bO8eZVKQU0koKIVJooLxUkfLHqrPziQSqVSqfTbt8FgMBgMVpes1+v1eh2A8Xg8Ho8BGI1Go9Fo/TsXCoVCoQBAq9VqtVoo9+vXVeVlMplMJgOg3+/3+3301rRSodefrSEQwAbgn41QVXgsA6UFAtxO/icOB27jtqN37mzbGZqGlF+/0Ce4wAAAHeTZVYbD4XA4PJrb7+OO6wjoFN+jR+jh5PP5fD4fSXK5XC6XS5K5XC6Xy23+EKSbbDabzWYPDxShdkQikUgkgno8Wj8cfYX3/6w5LSQIq9VqtVpHo2az2Ww2V5eEgQOQSCQSaG6wi+Tz+Xw+D0ClUqmc9Kh0OBwOhwOAWq1Wq9WEQpg7HtMc3tu3UHGPsbj11SuajQZAq9VqtVrcDcWvJpPJZDJR34uhvB8+mUwmkwnVqy4e6/pA2XCXy+VyuXA3Fz+dTqfT6Xz+fEa30+vRv8hg+vLo8sJIo6Hq3IabV3p9KpVKpVI/flSr1Wq1erg0vygIhUKhUIgO+n/5AnPRMYyfP3HHt2fPnkvNX4yndJ0dtj7AAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/img/chesspieces/maya/bK.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/maya/bK.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/maya/bN.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/maya/bN.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/maya/bP.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/maya/bP.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAAEW0lEQVR42u2azasSXxjHH2fU1IHr282ZQEPNqEzxZSG4cCEk9HIZsUUKrdoWBLUJgup2g3bRv9DKXbho0zLc6EbcKEmBlojo8qb4FjotTofLSL/fVXPmjOl38+EMMz7P82U885wzA7DTTjvttC3a30c8OgqFQqFQSBCMRqPRaDxhOBwOh8OCgM57+RLRYiGd+Ybp4AAbisaL02QymUwmPL5xg3QlCtfBAUVRFEUtb/Q8aZqmaRqPr18nXZnCtL+/6h19Gs1ms9lsxmOzmXSlCtHREeL6DRfz2TPSlRJXMBgMBoNSGy0IkUgkEong8RZLqqlknlar1Wq1kjecIp2ASqVSqVQyFEpRFEW8WgUY7nQ6nU7nvxNnQyTXQ/PFC9KVKkQsK27f1keLxWKxWPD47FnSlSpMPK/RaDQazd8brVar1Wo1HvM86cqw1PKEuX0b8do1xL29/zozkUgkEgmAVCqVSqUA/H6/3+8HcDgcDocDwGAwGAwGgOl0Op1OAXq9Xq/XA6jX6/V6HaBYLBaLRYBsNpvNZgGq1Wq1Wr1zB/065ryOjxE/fkT88GFDDX/zBvHx40WvKJVKpVIJAG1WATAMwzAMwHA4HA6HAHq9Xq/XA8xms9lsBtDv9/v9PkCz2Ww2mwCNRqPRaADUarVarYZ/9e7dxaLfv4/46hXi8+fS+rM2OZ2o3ZO+v143xXs5HLduZyRqCy9cEARBIL/MWF74n4PrIJ3PguI4rVar1WrJ37HLEk1ZG7vZ9eCBeJtUuRR3R/fuSeWIDItqAIArVxBjMcT5LoVhfD6fz+c7PMzlcrlcDkCn0+l0utUjjkaj0Wh00u1UKpVKpYIf4p2O+OwfPxA/fUL88kUqJ2RqCz9/FnNeFy9OJpPJZHJ42Ol0Op3O+gwfj8fj8Rgfff8esVCQp27FKhpFlHrquHmTdKXEN6+Qzp2TJw7Lkq5UIYZ7vfLEuXSJdKXElclkMpmM9F1IMplMJpObuDJYs+x2u91ul95wm81ms9nwWI5XHorU5cvYEHnp95OqmPAcnkqRiZtMkq1bdqlUbrfb7XbLv6IUx92aqeXWrUUNkpY4j39WNB0IBAKBAGmjBUGcB02TdkYi4a9byRsuJn7hIL0knsPUv/dqnjxB9HgQq1W5ClxMV68ifvuG+Po14s+fpDObk16P+OgRz/M8zwtCPB6Px+OCwHEcx3Hzd5LDQTrjPwvnddKv4zrEC6aHDxHPnFk10op3+N4eeud4fFwul8vl8ulXsCzLsixe6Mhp5v+r1Wq1Wi2Abrfb7XZPPz8ajUajUYBCoVAoFBgGHR0MJE7z7VtE0nMvaeKpR0K5XC6Xy0W6UPL0er1er3f5vZmlV5p4Y3/btaoPSxsei8Vi+EXZNgt9ePTunUzhPB7xN3vbQ/Twx+Pz55d17i/7cI8nnU6n0+mvX/P5fD6fBxgMBgPJn9kyCn/51W632+12NouOPn2K+P076fx22mmnrdYvBCtPlU60btgAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/img/chesspieces/maya/bQ.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/maya/bQ.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/maya/bR.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/maya/bR.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAAFTElEQVR42u1bT2gaTRR//fpZa5WoiWixpEET1Cb4JwHBtCpNekgQNIdQIj330ovQQi+9mUMPFdpTe8ipp+ZS8OBd8E8MRFCMqEgx0kvAIhjJ31rjfodhWDSxuybZ2Xzt/i4/Z3z73szb9b03syOAAAECBFwZbnCj9tGjqampqampZJJJUq/X6/V6gEgkEolEbvSM59YtpOfnT7aWC4VCoVAQi1Gr1cL9Xq/X6/VS1M7Ozs7ODls9TidqbWxw46crw+IiYopiYqPRaDQacbsXt2+z1dPN+Doa3XbYMp7H1eGfq1Yo4PcQHE4Y//I9gP39/f39fdzy+7u/FYkupvXpU8S/fp1v548D+xh+vVmI4f97CA4nDMHhhMHRwketRvzwYXe/Tof4/Xu+J96NV68QV6vd/akU4h8/+B7hBWGzIeY7GfYyHhf34K0sXF1dXV1dBZibm5ubmyNnN5vNZrNZgEAgEAgEyM+bcAy/eRN/EolEIpEIwG632+12AJPJZDKZmDVMT09PT08DWK1Wq9XKLI/1Yjt93PCn5rInTxDTP+lqtVqtVilqfX19fX2dOQSgJ5SiNjc3Nzc3meWxXmznfLnHj0l5gPCdVSjI2mOLoSFSlgg7XKkka48t5HJSlggnTYUCx+5UKpVKpQC0Wq1WqwVYWFhYWFgASKfT6XS6vwa0zQrQ6XQ6nQ6z/Pj4+Pj4OIBUKpVKpbQ8TtYHBwcHBwfknnDeHN5ut9vtNkAmk8lkMmclbTabzWYDOD4+Pj4+BiiXy+VyGSCXy+VyubPy+EaIxWKxWAywvb29vb1NX/d7kHvCCePjR8TMya5UKpVKJYoKh8PhcJhZHsvhpMrWDuJQiJQHhKRJeFzEHO7xeDwez7NnpOyxxfLy8vLy8vPnpOwRi+HNZrPZbALMz8/Pz88DBIPBYDDYX35sbGxsbAxArVar1WqARCKRSCT6y09OTk5OTtIxnEk+FAqFQiGARqPRaDRIeYGgw2u1Wq1WAzAYDAaDAeDk5OTk5ATA6XQ6nU76huTz+Xw+D7CxsbFx3rtyh8PhcDjoKmVra2tra6t/8jWbzWazGUAul8vlcoBkMplMJukbU6lUKpUKOYcTg0wmk8lkZ5MW3ytNhUKhUCj6nRq4ehCK4VIpqndJTYs99vb29vb2cOvOHa7tEXL43btk7FwW9+5xbYGjFxC9wCeYEom1tbW1tTV6189isVgsFoDDw8PDw0PmmIpOYtExHNXr/eV7V5p4QbS7u7u7uwuwtLS0tLSEpfHmWjTKlScIJU2DAX9qtVqtVgugXq/X63WAaDQaPW96LpfL5XLRNwInxVgsFovFzsrPzMzMzMwASCQSiURCJ11spxenp6enp6e9vQ8eIObO4YTw7h1i9itAsitNzJ8+ce0JzmO4z+fz+XyvX3Nt57Jwu91ut/vFC67tcO5wdptH/KNYLBaLRe7tcBTD8RG1xUW84EHHkdlrGB0dHR0dBVAqlUqlkvl6/AoNx/BB7fn9fj990A5vQXz9ipg+9swzJBLEL1+i0EFRKpVKpVLRsRGt8KhrDzxOPO6RkZGRkRGKQlUM7sevnfH588FxwbJwaAiVdc0mfgvOBFyWXVfgaogJs7Ozs7OzAGili2d0dMTx8D58QMz3eRK++e1bjh0NoNPpdDod3xPln9Hu5OB7MANXKXiX72/HRf0wsMPxCvBvB/pz1ufPhMxNTAwPDw8PD/P/0ybNGo1Go9Hg9v37g3rukptXExMrKysrKyvfvsXj8Xg8DnB0dHTEec4mCFxdoc2uL19Q75s3iL9/53t8AgQI+KvxHw9cw/LdEdzaAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/img/chesspieces/maya/wB.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/maya/wB.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/maya/wK.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/maya/wK.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/maya/wN.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/maya/wN.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/maya/wP.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/maya/wP.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/maya/wQ.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/maya/wQ.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuEAYAAAAHKfd0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAuAAAALgAjc9BjAAAICklEQVR42u1aWSxkTRSutkzrafsudpoYWxghRPAknsYey8tghugEIRGEdCYhQ2JrmcSSGZF5MYgH4oGIxBIRHmwREWswExEklrHFfv6H+k9udOu/tdHu8Pf3crrrVtU957tVp86pKkJUUEEFFVRQQYWXBA6Hyg8fwsPDw8PDAVDS8vfv2dbwhUEsphJAV1dXV1cXQEdHR0dHBwlH+eUL25o+cwgEHA6Hw+EApKenp6enA1xfX19fXwNcXV1dXV0BpKSkpKSkSBL/5g3bmj9TxMRQCTAwMDAwMABS6Onp6enpkSQ8IYFtzWVBjW0F/hsbG/hrbm5ubm5Ousbd5aurbGv+bOHq6urq6gqgqampqakJEBMTExMTAxAdHR0dHQ2goaGhoaEB4OHh4eHhgSNcBQXh7BwaGhoaGirpKuTLsLCwsLAw/C8QsG3JXw43N1NTU1NTU4bA+Pj4+Ph4gJGRkZGREYDj4+Pj42NGYjnWw3bm5ubm5ub438WFbctYgqbm3eU8nr29vb29PUNYbW1tbW2t9CJ5cXFxcXHBSEk0NTU1NTUBYHTj6Ojo6OiI/fJ4d7+fy2WbGRlwd39Yu8BAKmtr737+8SMSHRUVFRUVBTKRn5+fn58PkJeXl5eXJ7teTk5OTk6OpMsRCu9+f1PTbT0VhZubkgj38aEyM/N+9V+9CggICAgIkDS8vp5KLS0qm5vxeVtbW1tbG0Pczc3Nzc0NQEVFRUVFhbTPRuIvLy8vLy+ZdhsbGxsbG0y925mp2r/RWWUlPg8MDAwMDMTnsmYiAtuLRFS+faskwgmJiIiIiIgA8PPz8/PzQwXxA7x7R6VQ6Onp6enpCYAyOTk5OTmZIcDGxsbGxoaRWC4UCoVCIUBhYWFhYSGAu7u7u7s789zf39/f35+RWG5paWlpaQmQm5ubm5sLIBaLxWIxAJ/P5/P5jE+/Hc0wdjg5OTk5OQF4e3t7e3vj89RUKsPDqSwsFAgEAoEAIDIyMjIy8smiIg8PNTU1NTU1JlxDA1AGBQUFBQUBbG5ubm5uMplhfX19fX09gIuLi4uLi/yoAwnLysrKysoCODw8PDw8BDg5OTk5OQEoLS0tLS1lCJPXHy7KIpFIJBIx/czPz8/PzwM4ODg4ODhIt0M70W5arjRXIgs/fuCIGB8fHx8fB6CJCNwbW1tbW1tbAJOTk5OTkwBDQ0NDQ0MAU1NTU1NTAGdnZ2dnZ/fvDz/w4ODg4OAgQG9vb29vL8Ds7Ozs7CzjomQBF+PR0dHR0VGAmZmZmZkZAC8vLy8vLyQaXeCTQyDAxEPS974UtLa2tra2MgkWtdvRkSXCEd++4ZSWXLweC6enp6enpwBVVVVVVVUAlZWVlZWVTDz+2EA70GdTO79+ZZlohLU1l8vlcrkADQ0NDQ0Nj2d4XV1dXV0dgJmZmZmZmbRvNTExMTExAaiurq6urpbvMu4LXGu0tLS0tLTwfZaWbDMtgZoaCwsLCwsLZjGShYODg4ODA4Di4uLi4mLmQ52fn5+fnzP11tfX19fXAVJTU1NTU5nFC6c4bs+urKysrKzInhEYVsqbEag32kHtqq5mm1kZMDXV1tbW1tYGKCsrKysrYwzBfWwsNzAwMDAwkB6xVlZWVlZWAI2NjY2NjdKErK2tra2tAayurq6urio+I4yNjY2NjQHKy8vLy8ulZwRGPWgHbWdiwjazcvD5s76+vr6+PsDe3t7e3h5jEIZfCQkJCQkJTJiFUzczMzMzM5NJXBC4H47hJiYqfX19fX19958RSUlJSUlJAEtLS0tLS0w71BP1pnaUlLDN5D2hr4+KYyouC/gBMJyTBLan/cqWGRkZGRkZ0iNW3oxAYMZqaGhoaGiI/erpsc2kgigq4vF4PB5PesQqiu7u7u7ubgBfX19fX18AHx8fHx8fgK6urq6urof3i3rdXhwLCthm7oHg8zGzS0tLS0tLezgxygK6ntvbua9fs83cHyI7G33o4uLi4uIi2zQDLCwsLCwsAKirq6urq0vuCT17cLnW1tbW1tYAsbGxsbGxbNPNHNXZ2tra2toi4a9eKZsJztMQjhd5SkrowYBI1NLS0tLSQggNA59GC0IIoT6bkMTExMTERCz9/JnKT5+ofLZno2/fOjs7Ozs7K342+dTy9u6lp6eyGNFQTrd8Pt2fnpzU09PT09MjpL+/v7+/nxB6c0pZ5igOut1LSEFBQUFBASF2dnZ2dnYzMzSexwOS83O29ZSDkBAqAZqbm5ubm9n22PKBeqLeVPr5PTYzSroIdHGBv2hGp5y3PCZo9CRZenDw2O/5w0UTT8GFQnpmKBYfHR0dHR0RQg8ACKGLJCE0YSGEXsJ8Eg7vBXQpExMTExMThNAwkZCQkJCQkBBC6J4KITTBys6mrXCbVnFX80DCdXXpSc/v39PT09PT04TQzShCaGrMNo2PB7rHQsj+/v7+/j4h9FCckLGxsbGxMT6f1jo9VbIaNTW46dTZ2dnZ2cm2B1Y+2tvb29vbmfsulIeyMqV/cbywExwcHBwczDYNTw/cy8E7j4ryp/CiSQ91/z5f/FTAsBZ5UDri4uLi4uIAjIyMjIyMAHZ3d3d3d9ked8rHzs7Ozs4OAM0rcGR//64ofw9cNAUCujguL9N7I4TQizEvd9Hs6Ojo6OgghN6vIWR7e3t7e9vWltb69eu+/f1hWCgQ0Fury8vDw8PDw8OE0LNEtml6POCAogckLS20tKiIyp8/2dZPBRVU+F/jH0VFr7Z8aR0QAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/img/chesspieces/maya/wR.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/maya/wR.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/merida-svg/bB.svg":
/*!***********************************************!*\
  !*** ./src/img/chesspieces/merida-svg/bB.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjA5IiB5MT0iMzcuMSIgeDI9Ijc3LjY3IiB5Mj0iMzcuNDY5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0ibTI1IDQyLjE2Yy0uMjI5Ljk0LS41MTcgMS41OTItLjg0NyAxLjk1Ni0uMzMuMzY0LS43NjIuNzQ1LTEuMzEyIDEuMTQzLS41OTMuNDE1LTEuMjk1Ljc2Mi0yLjEwOCAxLjA1LS44MTMuMjg4LTEuNzEuMzY0LTIuNzAxLjIxMmwtNi45NjgtLjk2NWMtLjI4OC0uMDM0LS41MzMtLjAzNC0uNzYyIDAtLjIyLjAzNC0uNDMyLjA1MS0uNjM1LjA1MS0uMzQ3IDAtLjc4Ny4wNzYtMS4zMjEuMjM3LS41NDIuMTUyLS45NTcuMzgxLTEuMjUzLjY3N2wtMi40MDQtMy45NDZjLjI5Ni0uMzMuNTU5LS41NTkuNzg3LS42OTQuMjM3LS4xMjcuNTA4LS4yNzEuODIxLS40MTUuOTU3LS40NDkgMS45ODEtLjcyIDMuMDczLS44MjEuNDY2LS4wMzQuOTIzLS4wNDIgMS4zNjMtLjAyNS40NDkuMDE3LjkxNCAwIDEuMzk3LS4wNTEuODg5LjE1MiAxLjc4Ni4yODggMi42ODQuNDA2LjkwNi4xMjcgMS44MTIuMjU0IDIuNzE4LjM5Ljk5MSAwIDEuNjYtLjEwMiAyLjAxLS4yOTYuMTg2LS4xMDIuNDc0LS4yODguODcyLS41NS4zOTgtLjI2Mi43OTYtLjY1MiAxLjE5NC0xLjE2OC0uODgxLS4wOTMtMS43Ny0uMjYyLTIuNjg0LS41MDgtLjkwNi0uMjM3LTEuNzEtLjQ5MS0yLjQwNC0uNzU0bDIuNTgyLTYuNDAxYy0xLjI5NS0uNzQ1LTIuMTkzLTEuMzM4LTIuNzA5LTEuNzk1LS41MDgtLjQ1Ny0uOTE0LS45ODItMS4yMTEtMS41NzUtLjQzMi0uNzYyLS43MTEtMS40OTktLjgzLTIuMjEtLjEyNy0uNzExLS4xNzgtMS4zNDYtLjE2MS0xLjkxMy4wMTctLjk5MS4yNDUtMi4wODMuNzAzLTMuMjg1LjQ1Ny0xLjE5NCAxLjMxMi0yLjI2OSAyLjU2NS0zLjIwOSAxLjA0MS0uNzk2IDIuMDY2LTEuNjE3IDMuMDU3LTIuNDU1Ljk5MS0uODQ3IDEuOTczLTEuODI5IDIuOTQ2LTIuOTU1LTEuMjE5LS42MjctMS44MjktMS42MjYtMS44MjktMi45OTcgMC0uOTMxLjMyMi0xLjcxOS45NzQtMi4zODguNjUyLS42NiAxLjQ1Ni0uOTkxIDIuMzk2LS45OTEuOTIzIDAgMS43MTkuMzMgMi4zNzkuOTkxLjY2LjY2OS45OTEgMS40NTYuOTkxIDIuMzg4IDAgMS4zNTUtLjYxIDIuMzU0LTEuODI5IDIuOTk3Ljk1NyAxLjEyNiAxLjkzIDIuMTA4IDIuOTEzIDIuOTU1Ljk4Mi44MzggMi4wMiAxLjY1OSAzLjA5IDIuNDU1IDEuMjM2Ljk0IDIuMDgzIDIuMDEgMi41MjMgMy4yMDkuNDQ5IDEuMjAyLjY5NCAyLjI5NS43MiAzLjI4NSAwIC41NjctLjA1MSAxLjIwMi0uMTY5IDEuOTEzLS4xMTguNzExLS4zODEgMS40NDgtLjc5NiAyLjIxLS4zMy41OTMtLjc0NSAxLjExOC0xLjI1MyAxLjU3NS0uNS40NTctMS4zODkgMS4wNS0yLjY2NyAxLjc5NWwyLjU4MiA2LjQwMWMtLjcyOC4yNjMtMS41NDkuNTE3LTIuNDU1Ljc1NC0uOTE0LjI0Ni0xLjc4Ny40MTUtMi42MzMuNTA4LjM4MS41MTcuNzcxLjkwNiAxLjE2OCAxLjE2OC4zOTguMjYzLjY5NC40NDkuODk3LjU1LjM0Ny4xOTUgMS4wMTYuMjk2IDIuMDEuMjk2Ljg4OS0uMTM2IDEuNzg3LS4yNjMgMi42OTItLjM5Ljg5OC0uMTE4IDEuODAzLS4yNTQgMi43MTgtLjQwNi40NC4wNTEuODg5LjA2OCAxLjM0Ni4wNTEuNDU3LS4wMTcuOTIzLS4wMDggMS40MDYuMDI1IDEuMDU4LjEwMiAyLjA4My4zNzMgMy4wNzMuODIxLjI5Ni4xNDQuNTY3LjI4OC44MDQuNDE1LjI0NS4xMzUuNTA4LjM2NC44MDQuNjk0bC0yLjQzIDMuOTQ2Yy0uMjk2LS4yOTYtLjcxMS0uNTI1LTEuMjUzLS42NzctLjUzMy0uMTYxLS45NjUtLjIzNy0xLjI5NS0uMjM3LS4yMiAwLS40NC0uMDE3LS42Ni0uMDUxLS4yMi0uMDM0LS40NzQtLjAzNC0uNzU0IDBsLTYuOTUxLjk2NWMtLjk5MS4xNTItMS45MTMuMDg1LTIuNzYtLjE5NS0uODU1LS4yNzktMS41NTgtLjY1Mi0yLjEtMS4xMTgtLjU0Mi0uNDQ5LS45ODItLjgzLTEuMzA0LTEuMTUxLS4zMjItLjMyMi0uNTkzLS45NTctLjgwNC0xLjg5NyIgZmlsbD0iIzFmMWExNyIvPjxwYXRoIGQ9Im0yNC4wOSAyMy43MDV2Mi4xMDhjMCAuNjEuMzA1LjkxNC45MTQuOTE0LjYxIDAgLjkxNC0uMzA1LjkxNC0uOTE0di0yLjEzNGgyLjIzNWMuNTc2IDAgLjg3Mi0uMjk2Ljg3Mi0uODk3IDAtLjU5My0uMjk2LS44ODktLjg3Mi0uODg5aC0yLjIzNXYtMi4yMzVjMC0uNjEtLjMwNS0uOTE0LS45MTQtLjkxNC0uNjEgMC0uOTE0LjMwNS0uOTE0LjkxNHYyLjIzNWgtMi4xODRjLS41ODQgMC0uODcyLjI5Ni0uODcyLjg4OSAwIC42MDEuMjg4Ljg5Ny44NzIuODk3bDIuMTg0LjAyNW03LjUxIDEzLjc0MWwtMS4wNDEtMi41MzFjLTEuNjg1LS4zNjQtMy41MzktLjU0Mi01LjU1NC0uNTQyLTEuOTk4IDAtMy44MzUuMTc4LTUuNTAzLjU0MmwtMS4wNDEgMi41MDZjMi4wNDktLjUxNiA0LjIzMy0uNzcgNi41NDUtLjc3IDIuMjg2IDAgNC40NzkuMjYyIDYuNTk2Ljc5Nm0tMi4wODMtNS4xMTRsLS43Mi0xLjczNnYtLjY2OWMtMS4yNTMtLjE3OC0yLjUyMy0uMjcxLTMuNzkzLS4yNzEtMS4yMzYgMC0yLjQ5OC4wOTMtMy43NjguMjcxbC0uMDI1LjY2OS0uNjY5IDEuNzM2YzEuNDA1LS4yNDYgMi44ODctLjM3MyA0LjQ2Mi0uMzczIDEuNTkyIDAgMy4wOS4xMjcgNC41MTMuMzczbS0uODY0IDkuMzgxYy0uNjYtLjQ5OS0xLjMyOS0xLjI4Ny0xLjk5LTIuMzYyaC0uNzg3YzAgLjgxMy4xODYgMS42LjU2NyAyLjM2MmgyLjIxbS01LjExNCAwYy4zODEtLjgxMy41NzYtMS42LjU3Ni0yLjM2MmgtLjc5NmMtLjY0MyAxLjA1OC0xLjMxMiAxLjg0Ni0yLjAyIDIuMzYyaDIuMjM1IiBmaWxsPSJ1cmwoIzApIi8+PC9zdmc+");

/***/ }),

/***/ "./src/img/chesspieces/merida-svg/bK.svg":
/*!***********************************************!*\
  !*** ./src/img/chesspieces/merida-svg/bK.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjEzIiB5MT0iMzcuMjIiIHgyPSI3Ny43NiIgeTI9IjM3LjQ2OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9IiMxZjFhMTciPjxwYXRoIGQ9Im0yNS44MjEgMTIuMDJoLTEuNzYxdi0zLjI1MWgtMi4wNjZjLS41NTkgMC0uODM4LS4yNzEtLjgzOC0uODIxdi0uMDI1YzAtLjU0Mi4yNzktLjgxMy44MzgtLjgxM2gyLjA2NnYtMi4xMDhjMC0uNTg0LjI5Ni0uODcyLjg4OS0uODcyLjU3NiAwIC44NzIuMjg4Ljg3Mi44NzJ2Mi4xMDhoMi4xMzRjLjU0MiAwIC44MTMuMjcxLjgxMy44MTN2LjAyNWMwIC41NS0uMjcxLjgyMS0uODEzLjgyMWwtMi4xMTcuMDI1LS4wMTcgMy4yMjYiLz48cGF0aCBkPSJtMTEuMDMgMzcuNzQ0bC0uODEzLTQuNjRjLS4wMTcgMC0uMDQyLS4wMzQtLjA3Ni0uMTAyLS4wODUtLjExOC0uMzIyLS4yNzEtLjcxMS0uNDU3LS4zODEtLjE5NS0uODM4LS41MTYtMS4zNDYtLjk4Mi0uNzI4LS42MS0xLjI5NS0xLjEwOS0xLjcwMi0xLjQ5LS40MDYtLjM3My0uNzcxLS43ODctMS4xMDEtMS4yMzYtMS4wMS0xLjM4OS0xLjU3NS0zLjA2NS0xLjY4NS01LjA0LS4xNjktMS44OTcuNjAxLTMuNzkzIDIuMzAzLTUuNjgxIDEuNzE5LTEuODggNC4wNDctMi43NjkgNi45NjgtMi42NSAxLjA5Mi4wNjggMi4zNzkuMzMgMy44NDQuNzk2LjQ4My4xOTUuOTc0LjM5IDEuNDgyLjU3Ni41LjE5NS45OTkuMzg5IDEuNDk5LjU4NC4yNjIuMTM1LjUuMjcxLjY5NC4zOTgtLjA4NS0uMzQ3LS4xMjctLjY5NC0uMTI3LTEuMDQxIDAtMS4yODcuNDU3LTIuMzg4IDEuMzgtMy4zMDIuOTE0LS45MDYgMi4wMjQtMS4zNzIgMy4zMTEtMS4zODkgMS4yODcgMCAyLjM4OC40NjYgMy4zMDIgMS4zOC45MDYuOTE0IDEuMzYzIDIuMDIgMS4zNjMgMy4yODUgMCAuMjYyLS4wMzQuNjEtLjEwMiAxLjA0MS4yMjktLjE0NC40NTctLjI3MS42NjktLjM3Mi43NjItLjMzIDEuNzYxLS43MiAzLjAxLTEuMTYgMS40MjItLjQ4MyAyLjcwMS0uNzU0IDMuODQ0LS44MjEgMi45MjEtLjEzNiA1LjI0MS43NTQgNi45NDMgMi42NSAxLjY2OCAxLjg4OCAyLjQ0NyAzLjc4NSAyLjMyOCA1LjY4MS0uMTI3IDEuOTczLS43MDMgMy42NDktMS43MSA1LjA0LS4zMy40NDktLjcwMy44NjQtMS4xMTggMS4yNTMtLjQwNi4zOS0uOTY1Ljg4MS0xLjY2IDEuNDczLS41NDIuNDY2LTEuMDEuNzk2LTEuMzg5Ljk4Mi0uMzgxLjE4Ni0uNjAxLjM0Ny0uNjY5LjQ1Ny0uMDE3LjAzNC0uMDM0LjA1OS0uMDUxLjA3Ni0uMDE3LjAxNy0uMDI1LjAzNC0uMDI1LjA1MWwtLjc5NiA0LjY2NSAxLjY0MyA2LjEyMWMtLjgzLjc0NS0yLjY4NCAxLjM1NS01LjU1NCAxLjgzNy0yLjg3OS40ODMtNi4yMDYuNzItOS45NzQuNzItMy44MzUgMC03LjIxNC0uMjU0LTEwLjExOC0uNzU0LTIuOTEyLS41MDgtNC43NDEtMS4xNDMtNS40ODYtMS44OTdsMS42MzQtNi4wNSIvPjwvZz48cGF0aCBmaWxsPSJ1cmwoIzApIiBkPSJtMjQuOTQ5IDIwLjY3NWMtLjAzNC0uMTYxLS4wNzYtLjMwNS0uMTI3LS40MjMtLjA5My0uMzMtLjE3OC0uNTY3LS4yNDUtLjcyLS4wNTEtLjExLS4xMTktLjI1NC0uMTk1LS40MzItLjA4NS0uMTY5LS4xNjktLjM1Ni0uMjU0LS41NTktLjA1MS0uMTE5LS4xMS0uMjcxLS4xODYtLjQ1Ny0uMDY4LS4xOTUtLjEzNi0uMzczLS4xODYtLjUzMy0uMDQyLS4xNTItLjA2OC0uMzA1LS4wNjgtLjQ3NCAwLS44NzIuNDE1LTEuMzEyIDEuMjYyLTEuMzEyLjg4MSAwIDEuMzEyLjQzMiAxLjMxMiAxLjI4NyAwIC4yMi0uMDM0LjM3My0uMDkzLjQ3NC0uMjM3LjYyNy0uMzU2Ljk2NS0uMzcyIDEuMDE2LS4yNTQuNS0uNDA2LjgyMS0uNDc0Ljk2NS0uMTE5LjI3MS0uMTk1LjUwOC0uMjIuNzItLjA1MS4xMDItLjA4NS4xODYtLjEwMi4yNjItLjAxNy4wNzYtLjAzNC4xMzYtLjA1MS4xODZtLTIuNzc3IDguNTZjLTIuMDY2LjAzNC0zLjk1NC4xMzUtNS42NzMuMzIyLTEuNzEuMTc4LTMuMDMuNDQtMy45NzkuNzctLjQ5MS0uNjE4LTEuMDY3LTEuMjI4LTEuNzE5LTEuODU0LS42Ni0uNjE4LTEuMjI4LTEuMjAyLTEuNzI3LTEuNzQ0LS44My0uODQ3LTEuMjM2LTEuNzctMS4yMzYtMi43NzcgMC0xLjI0NS4yMDMtMi4xNTEuNjE4LTIuNzI2LjQ0LS42NjkgMS4xMzUtMS4xNiAyLjA1Ny0xLjQ4Mi45MjMtLjMyMiAxLjg2My0uNDgzIDIuODAzLS40ODMgMS4xOTQgMCAyLjMyOC4yNjIgMy40Mi43OTYgMS4wNzUuNTU5IDEuNzg3IDEuMDEgMi4xMzQgMS4zMzggMS4xMjYgMS4xNDMgMi4wMSAyLjM3OSAyLjYzMyAzLjcxNy4yMTIuNS4zNzIgMS4xOTQuNDgzIDIuMDc0LjExLjg4OS4xNjkgMS41NjYuMTg2IDIuMDQ5bTIuNzc3LTQuMzE4Yy4xMTktLjQ2Ni4yMTItLjc4Ny4yOTYtLjk2NS4xNjktLjY0My4zNTYtMS4xOTQuNTc2LTEuNjQzLjA5My0uMjc5LjIzNy0uNjAxLjQzMi0uOTc0LjE4Ni0uMzczLjM4OS0uODA0LjYxLTEuMjc5LjEyNy0uMjc5LjI3MS0uNjI3LjQxNS0xLjAzMy4xNTItLjQwNi4zMDUtLjgwNC40NDktMS4yMDIuMTM1LS4zMy4yMDMtLjY4Ni4yMDMtMS4wNjcgMC0uODEzLS4yOTYtMS40OTktLjg3Mi0yLjA2Ni0uNTc2LS41NzYtMS4yNzktLjg2NC0yLjEwOC0uODY0LTEuOTY0IDAtMi45NTUuOTkxLTIuOTU1IDIuOTU1IDAgLjM4MS4wNjguNzM3LjIwMyAxLjA2Ny4zNjQgMS4wNzUuNjQzIDEuODIuODM4IDIuMjM1LjIyLjQ3NC40MTUuOTA2LjYwMSAxLjI3OS4xNzguMzcyLjMzOS42OTQuNDY2Ljk3NC4yMi41NS4zOTggMS4wOTIuNTUgMS42NDMuMDM0LjA5My4xMjcuNDE1LjI5Ni45NG0tLjg4OSA2LjIyM2MwLS42Ni0uMDE3LTEuNTc1LS4wNTEtMi43MzUtLjAzNC0xLjE2OC0uMTYxLTIuMTQyLS4zNzItMi45MjEtLjY3Ny0yLjIxLTEuNzAyLTMuOTk2LTMuMDgyLTUuMzUxLS43MTEtLjY5NC0xLjc5NS0xLjM0Ni0zLjI2OC0xLjkzOS0xLjY4NS0uNjYtMy4yODUtLjk5MS00Ljc5Mi0uOTkxLTIuNjA4IDAtNC41NDcuOTMxLTUuOCAyLjgwMy0uNzExLjk5MS0xLjA2NyAyLjIzNS0xLjA2NyAzLjcxNyAwIDEuNjI2LjM5OCAyLjk1NSAxLjE4NSAzLjk5Ni40MTUuNTkzIDEuMjExIDEuMzI5IDIuMzg4IDIuMjEgMS4xNjguODcyIDIuMTY4IDEuNjg1IDIuOTcyIDIuNDMgMS40MzktLjMxMyAzLjA2NS0uNTg0IDQuODc3LS44MjEgMS44MTItLjIyOSA0LjE0OS0uMzY0IDcuMDEtLjM5OG0xMy43ODQgMTEuNzM1bC0uNzM3LTIuOTI5Yy0zLjIyNi0uNzM3LTcuMjgxLTEuMTA5LTEyLjE1OC0xLjEwOS00LjgyNiAwLTguODY1LjM3My0xMi4xMSAxLjEwOWwtLjc4NyAyLjk1NWMzLjE0MS0uOTU3IDcuNDQyLTEuNDM5IDEyLjkyLTEuNDM5IDIuNjI1IDAgNS4wNzIuMTM2IDcuMzE1LjM5OCAyLjI1Mi4yNjIgNC4xMDYuNjAxIDUuNTU0IDEuMDE2bS0uNjQzLTcuNDE3Yy0zLjA0LS44MzgtNy4wOTUtMS4yNjItMTIuMTUtMS4yNjItNS4wOTcgMC05LjE5NS40MzItMTIuMzAyIDEuMjg3bC4zNzMgMi41MDZjMy4xMjQtLjgxMyA3LjA5NS0xLjIxOSAxMS45My0xLjIxOSA0LjgwOSAwIDguNzI5LjM5OCAxMS43NTIgMS4xOTRsLjM5OC0yLjUwNm0tMTEuMzYyLTQuMjkzYzIuODQ1LjA1MSA1LjE4Mi4xOTUgNyAuNDIzIDEuODEyLjIyOSAzLjQ1NC41MDggNC45MTEuODIxLjkwNi0uODk4IDEuOTEzLTEuNzQ0IDMuMDItMi41NTcgMS4xMDktLjgxMyAxLjg4OC0xLjUwNyAyLjMzNy0yLjA4My43ODctMS4wNzUgMS4xODUtMi40MTMgMS4xODUtNC4wMiAwLTEuNDY1LS4zNTYtMi43MDEtMS4wNjctMy42OTItMS4yNy0xLjg3MS0zLjIxNy0yLjgwMy01LjgyNS0yLjgwMy0xLjUyNCAwLTMuMTA3LjMzLTQuNzY3Ljk5MS0xLjUwNy41OTMtMi41OTEgMS4yMzYtMy4yNzcgMS45My0xLjQwNSAxLjM2My0yLjQzIDMuMTUtMy4wNzMgNS4zNTktLjI0NS43NjItLjM4MSAxLjcyNy0uNDA2IDIuOTA0LS4wMjUgMS4xNzctLjA0MiAyLjA4My0uMDQyIDIuNzI2bTEuODEyLTEuOTNjMC0uNDgzLjA1OS0xLjE2LjE2MS0yLjA0OS4xMS0uODgxLjI3OS0xLjU3NS41MDgtMi4wNzQuNjE4LTEuMzM4IDEuNDktMi41NzQgMi42MzMtMy43MTcuMzMtLjMzIDEuMDQxLS43NzkgMi4xMzQtMS4zMzggMS4wNzUtLjUzMyAyLjIyNy0uNzk2IDMuNDQ2LS43OTYuOTMxIDAgMS44NDYuMTYxIDIuNzY5LjQ4My45MTQuMzIyIDEuNjA5LjgxMyAyLjA2NiAxLjQ4Mi40MTUuNTU5LjYyNyAxLjQ2NS42MjcgMi43MjYgMCAuOTkxLS40MDYgMS45MTMtMS4yMTkgMi43NzctLjUyNS41NDItMS4xMDEgMS4wOTItMS43MSAxLjY1MS0uNjEuNTUtMS4yMDIgMS4yMDItMS43NjEgMS45NDctLjk1Ny0uMzMtMi4yOTQtLjU5My00LS43Ny0xLjcxLS4xODYtMy41OS0uMjg4LTUuNjQ3LS4zMjIiLz48L3N2Zz4=");

/***/ }),

/***/ "./src/img/chesspieces/merida-svg/bN.svg":
/*!***********************************************!*\
  !*** ./src/img/chesspieces/merida-svg/bN.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjI1MyIgeTE9IjM3LjU5MiIgeDI9Ijc3LjY0IiB5Mj0iMzcuNDY5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0iIzFmMWExNyIgZD0ibTI2LjE4IDkuMzk1YzIuNTk5LjE2OSA1IC44MzggNy4yMjIgMi4wMiAyLjIxIDEuMTY4IDQuMDk4IDIuNjc1IDUuNjU2IDQuNTEzIDEuMDkyIDEuMjg3IDIuMTE3IDIuODQ1IDMuMDgyIDQuNjY1Ljk3NCAxLjgxMiAxLjc0NCAzLjc0MiAyLjMyIDUuNzc0LjY2IDIuMzcxIDEuMDg0IDQuODUxIDEuMjUzIDcuNDU5LjE3OCAyLjU5OS4yNjMgNS4wMS4yNjMgNy4yM3Y1LjQwMmMwIDAtMS4yODcgMC0zLjg2MSAwLTIuNTY1IDAtNS45MDEgMC0xMC4wMSAwaC0xNi42MzdjLS4xNTIgMC0uMjItLjQwNi0uMjEyLTEuMjExLjAwOC0uODEzLjA1OS0xLjQ2NS4xNjEtMS45NjQuMDU5LS4zOTguMjItLjk1Ny40NjYtMS42ODUuMjU0LS43MjguNjYtMS42MDkgMS4yNDUtMi42NS4yNjItLjUzMy44ODktMS4zMDQgMS44OC0yLjMyLjk5OS0xLjAxNiAyLjEzNC0yLjIwMSAzLjQyOS0zLjUzOS43NDUtLjc2MiAxLjMyMS0xLjcxOSAxLjc0NC0yLjg3OS40MjMtMS4xNTEuNjAxLTIuMjAxLjUzMy0zLjE1LS42MS41LTEuMjc5LjkwNi0yLjAxIDEuMjE5LTMuNTA1IDEuMjUzLTYuMDUgMy4wNzMtNy42MTEgNS40NTItLjExOS4xNTItLjQ5MS44MjEtMS4xMTggMi4wMi0uMzMuNjI3LS42MTggMS4wNTgtLjg0NyAxLjI4Ny0uMzEzLjMxMy0uNzcxLjQ5MS0xLjM2My41MjUtLjkyMy4wNDItMS42NDMtLjM5OC0yLjE1OS0xLjM0Ni0uNjk0LjIwMy0xLjMxMi4yODgtMS44NjMuMjU0LS45MjMtLjM0Ny0xLjU5Mi0uNzItMi4wMS0xLjExOC0uODQ3LS44NDctMS4zODktMS42ODUtMS42NTEtMi41MzItLjI1NC0uODQ3LS4zODEtMS43NTMtLjM4MS0yLjcyNiAwLTEuMzg5Ljg1NS0zLjIyNiAyLjU4Mi01LjUxMiAyLjAyLTIuNjI1IDMuMDktNC42MzEgMy4yMTctNiAwLS41OTMuMDU5LTEuMjYyLjE3OC0yLjAxLjEwMi0uNTE3LjMwNS0xLjAxLjYxOC0xLjQ5LjIyLS4zMy4zNjQtLjU1OS40MzItLjY3Ny4wNzYtLjEyNy4yMTItLjMxMy40MTUtLjU1OS4xNDQtLjIwMy4yNzEtLjM1Ni4zNzMtLjQ1Ny4wOTMtLjExLjIyLS4yNTQuMzczLS40NC4xNzgtLjIxMi40MDYtLjQ1Ny42OTQtLjc0NS0uODgtMi40MTMtMS4yMzYtNC45MDItMS4wNjctNy40NTkgMy4yODUgMS4xNjggNi4wNSAzLjAxIDguMjggNS41MjkuNTUtMS44NzEgMS42MjYtMy4zODcgMy4yMjYtNC41MzggMS4zMjEuOTIzIDIuMzcxIDIuMTUxIDMuMTUgMy42NjYiLz48cGF0aCBmaWxsPSJ1cmwoIzApIiBkPSJtMTUuNjg4IDE3Ljc4NmMuMzY0LS4xODYuNTQyLS4yNzkuNTQyLS4yNzkuNDk5LS4xOTUuNjUyLS41NTkuNDc0LTEuMDkyLS4xOTUtLjQ5MS0uNTc2LS42Ni0xLjE0My0uNDkxLTEuOTQ3LjcxMS0zLjI5NCAyLjAyLTQuMDQgMy45Mi0uMTE4LjU0Mi4wNzYuOTE0LjU5MyAxLjExOC41MTYuMTYxLjg2NC0uMDE3IDEuMDQxLS41NS4xMzYtLjI3OS4yMjktLjQ2Ni4yOTYtLjU0Mi4xODYuMTQ0LjQyMy4yNDUuNzIuMjk2IDEuMDEuMTYxIDEuNi0uMjc5IDEuNzYxLTEuMzM4LjA1MS0uMzY0LS4wMzQtLjcxMS0uMjQ2LTEuMDQxbS00LjExNSAxNi43NjRjLjA1OS0uMTUyLjE2OS0uMzczLjMyMi0uNjY5LjI3OS0uNjk0LjQxNS0xLjEwOS40MTUtMS4yNDUtLjAyNS0uNDU3LS4yNzEtLjY5NC0uNzItLjY5NC0uMzMgMC0uNzExLjQ3NC0xLjE2IDEuNDE0LS4wNjguMTM2LS4xNjkuMjU0LS4yOTYuMzQ3LS40NDkuNDY2LS4zODEuODU1LjE5NSAxLjE2OC41MzMuMzEzLjk0LjIxMiAxLjI0NS0uMzIybTE0LjYzLTkuMjAzYzEuMTYtMS41MjQgMS43MjctMy4yMTcgMS43MS01LjA4LS4wNjgtLjU1LS4zODEtLjgyMS0uOTQtLjgyMS0uNzYyIDAtMS4wNTguMjc5LS44OTguODM4LjA1MS45MTQtLjAzNCAxLjY2OC0uMjcxIDIuMjYxLS4zODEuOTQtLjgwNCAxLjY0Mi0xLjI2MSAyLjEwOC0uMjU0LjUtLjEwMi44NjQuNDQ5IDEuMDkyLjUyNS4yNDUuOTMxLjExOSAxLjIxMS0uMzk4bS02LjQ3Ny0xMi4xMWMtLjA3Ni0uNTkzLS4wNTktMS4yMzYuMDUxLTEuOTMtLjk5MS4xOTUtMS45MjIuNjYtMi44MDIgMS4zODktLjUyNS4yNzktLjY1Mi42NjktLjM3MyAxLjE2OC4yNzkuNTA4LjY2OS41OTMgMS4xNjguMjQ2LjM0Ny0uMTg2LjY2OS0uMzU2Ljk1Ny0uNTA4LjI4OC0uMTYxLjYxOC0uMjc5Ljk5OS0uMzY0bTIzLjI1IDMxLjQ1NGMtLjAxNyAwIDAtLjQ0OS4wNDItMS4zNDYuMTMxLTMuMTA3LjA5NS02LjIyMS4wNzYtOS4zMy0uMDE3LTIuMjEtLjMxMy00LjQxMS0uODg5LTYuNjEzLS44NC0zLjMxLTIuMTI0LTYuNDg1LTQuMDcyLTkuMjk2LTIuNjM0LTMuODQ1LTYuODE0LTYuMDMtMTEuMjg2LTYuOTc2LjEyNi43NjYuMDMzIDEuNTQuMDc2IDIuMzExIDEuNi41NDIgMy4xMTYgMS4yMTkgNC41MzggMi4wMzIgNC4yNDEgMi41NTQgNi40MTQgNy4yNzUgNy4xOTcgMTEuOTMgMS4yNzIgNi4xNTQuNDUzIDExLjU1Ny44MTMgMTcuMjg5aDMuNTA1bS0zMy41MzctMTQuNTU0Yy40NzQtLjMzOS41MjUtLjcyOC4xNDQtMS4xOTQtLjM5OC0uMzgxLS44My0uNDE1LTEuMzEyLS4xMDItMS4wMS42Ni0xLjU0OSAxLjUzMi0xLjYxNyAyLjYwOC4wMTcuNTQyLjM0Ny44MDQuOTc0Ljc3MS41OTMtLjA1MS44ODEtLjM1Ni44NjQtLjkyMy4xMzUtLjUyNS40NDktLjkxNC45NDgtMS4xNiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/img/chesspieces/merida-svg/bP.svg":
/*!***********************************************!*\
  !*** ./src/img/chesspieces/merida-svg/bP.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxwYXRoIGQ9Im0yNSA0Ni40NWgtMTMuMzk0Yy0uNjYtMS42NTEtLjk5MS0zLjM3OC0uOTkxLTUuMTgyIDAtMy4wNTYuODY0LTUuOCAyLjU5OS04LjIzOCAxLjczNi0yLjQzIDMuOTcxLTQuMTY2IDYuNjk3LTUuMjA3LTEuMTY4LS41NDItMi4xMjUtMS4zNjMtMi44NjItMi40NjQtLjczNy0xLjEwMS0xLjEwMS0yLjM0NS0xLjEwMS0zLjczNCAwLTEuNzM2LjU3Ni0zLjI0MyAxLjczNi00LjUxMyAxLjE1Mi0xLjI3OCAyLjU3NC0yLjAyIDQuMjY3LTIuMjEtMS4zNDYtMS4wMS0yLjAyLTIuMzQ1LTIuMDItMy45OTYgMC0xLjM4OS40OTEtMi41ODIgMS40ODItMy41NzMuOTgyLS45OTEgMi4xNzYtMS40ODIgMy41ODEtMS40ODIgMS4zODkgMCAyLjU4Mi40OTEgMy41NzMgMS40ODIuOTkxLjk5MSAxLjQ5IDIuMTg0IDEuNDkgMy41NzMgMCAxLjY1MS0uNjY5IDIuOTg5LTIuMDIgMy45OTYgMS42OTMuMTk1IDMuMTE2LjkzMSA0LjI2NyAyLjIxIDEuMTYgMS4yNyAxLjczNiAyLjc3NyAxLjczNiA0LjUxMyAwIDEuMzg5LS4zNzMgMi42MzMtMS4xMjYgMy43MzQtLjc1MyAxLjEwMS0xLjcxIDEuOTIyLTIuODYyIDIuNDY0IDIuNzI2IDEuMDQxIDQuOTYxIDIuNzc3IDYuNjk3IDUuMjA3IDEuNzM2IDIuNDM4IDIuNTk5IDUuMTgyIDIuNTk5IDguMjM4IDAgMS43ODYtLjMyMiAzLjUxNC0uOTY1IDUuMTgyaC0xMy4zOTQiIGZpbGw9IiMxZjFhMTciIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC45NzMyNCAwIDEuMjQzKSIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/img/chesspieces/merida-svg/bQ.svg":
/*!***********************************************!*\
  !*** ./src/img/chesspieces/merida-svg/bQ.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjI1MyIgeTE9IjM3LjIyIiB4Mj0iNzcuNzYiIHkyPSIzNy4zNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9IiMxZjFhMTciPjxwYXRoIGQ9Im0yNC45NDkgMTAuNzUyYy0uOTQgMC0xLjc0NC0uMzMtMi4zOTYtLjk5MS0uNjUyLS42Ni0uOTc0LTEuNDY1LS45NzQtMi40MDUgMC0uOTMxLjMyMi0xLjcyNy45NzQtMi4zODguNjUyLS42NiAxLjQ1Ni0uOTkxIDIuMzk2LS45OTEuOTIzIDAgMS43MjcuMzMgMi4zOTYuOTkxLjY2OS42Ni45OTkgMS40NTYuOTk5IDIuMzg4IDAgLjk0LS4zMyAxLjc0NC0uOTk5IDIuNDA1LS42NjkuNjYtMS40NzMuOTkxLTIuMzk2Ljk5MSIvPjxwYXRoIGQ9Im00MC4yMyA0My45NDJjLS44MTMuNzExLTIuNjMzIDEuMzA0LTUuNDYxIDEuNzg2LTIuODI4LjQ3NC02LjA4Ny43Mi05Ljc3LjcyLTMuNzUxIDAtNy4wNS0uMjU0LTkuODk4LS43NDUtMi44NDUtLjQ5OS00LjY0LTEuMTE4LTUuMzg1LTEuODYzbDEuNTY2LTUuOTUyLS42OTQtMy44OTUtMi4xODQtMy43OTMtMi4xMDgtMTUuNDI2IDEuMjExLS40NzQgNi43OTkgMTEuNDU1LjE1Mi0xMy42NCAxLjY4NS0uMjk2IDUuMTgyIDEzLjcxNiAyLjc3Ny0xNC43NTdoMS43MTlsMi43NzcgMTQuNzA3IDUuMTMxLTEzLjY2NSAxLjcxLjI5Ni4xNTIgMTMuNjQgNi44MjQtMTEuNDgxIDEuMTYuNTQyLTIuMDU3IDE1LjM1OS0yLjIxIDMuNzkzLS42OTQgMy45NDYgMS42MTcgNi4wMyIvPjxwYXRoIGQ9Im0xNC41MzUgMTEuOTg5Yy0uOTQ4IDAtMS43NTMtLjMyMi0yLjQxMy0uOTc0LS42Ni0uNjUyLS45OTEtMS40NTYtLjk5MS0yLjM5NiAwLS45MjMuMzMtMS43MTkuOTkxLTIuMzc5LjY2LS42NiAxLjQ2NS0uOTkxIDIuNDEzLS45OTEuOTIzIDAgMS43MTkuMzMgMi4zNzkuOTkxLjY2LjY2Ljk5MSAxLjQ1Ni45OTEgMi4zNzkgMCAuOTQtLjMzIDEuNzQ0LS45OTEgMi4zOTYtLjY2LjY1Mi0xLjQ1Ni45NzQtMi4zNzkuOTc0Ii8+PHBhdGggZD0ibTM1LjM2IDExLjk4OWMtLjk0IDAtMS43MzYtLjMyMi0yLjM4OC0uOTc0LS42NTItLjY1Mi0uOTgyLTEuNDU2LS45ODItMi4zOTYgMC0uOTIzLjMzLTEuNzE5Ljk4Mi0yLjM3OS42NTItLjY2IDEuNDQ4LS45OTEgMi4zODgtLjk5MS45NDggMCAxLjc1My4zMyAyLjQxMy45OTEuNjYuNjYuOTkxIDEuNDU2Ljk5MSAyLjM3OSAwIC45NC0uMzMgMS43NDQtLjk5MSAyLjM5Ni0uNjYuNjUyLTEuNDY1Ljk3NC0yLjQxMy45NzQiLz48cGF0aCBkPSJtNS40IDE0LjcyM2MtLjk0IDAtMS43MzYtLjMzLTIuMzg4LS45ODItLjY1Mi0uNjUyLS45ODItMS40NDgtLjk4Mi0yLjM5NiAwLS45MjMuMzMtMS43MTkuOTgyLTIuMzg4LjY1Mi0uNjc3IDEuNDQ4LTEuMDEgMi4zODgtMS4wMS45NDggMCAxLjc0NC4zMyAyLjQxMyAxLjAxLjY2LjY2OS45OTEgMS40NjUuOTkxIDIuMzg4IDAgLjk0OC0uMzMgMS43NDQtLjk5MSAyLjM5Ni0uNjY5LjY1Mi0xLjQ2NS45ODItMi40MTMuOTgyIi8+PHBhdGggZD0ibTQ0LjU0MSAxNC43MjNjLS45NCAwLTEuNzQ0LS4zMy0yLjQwNS0uOTgyLS42Ni0uNjUyLS45OTEtMS40NDgtLjk5MS0yLjM5NiAwLS45MjMuMzMtMS43MTkuOTkxLTIuMzg4LjY2LS42NzcgMS40NjUtMS4wMSAyLjQwNS0xLjAxLjkzMSAwIDEuNzI3LjMzIDIuMzg4IDEuMDEuNjYuNjY5Ljk5MSAxLjQ2NS45OTEgMi4zODggMCAuOTQ4LS4zMyAxLjc0NC0uOTkxIDIuMzk2LS42Ni42NTItMS40NTYuOTgyLTIuMzg4Ljk4MiIvPjwvZz48cGF0aCBmaWxsPSJ1cmwoIzApIiBkPSJtMzcuMiAzNS43MjljLTMuMDQtLjgzOC03LjA5NS0xLjI2Mi0xMi4xNS0xLjI2Mi01LjA5NyAwLTkuMTk1LjQzMi0xMi4zMDIgMS4yODdsLjM3MyAyLjUwNmMzLjEyNC0uODEzIDcuMDk1LTEuMjE5IDExLjkzLTEuMjE5IDQuODA5IDAgOC43MjkuMzk4IDExLjc1MiAxLjE5NGwuMzk4LTIuNTA2bTEuNzM2LTQuNDM3Yy0xLjM3Mi0uNS0zLjMwMi0uOTA2LTUuNzkxLTEuMjI4LTIuNDg5LS4zMjItNS4yMzItLjQ4My04LjI0Ni0uNDgzLTIuOTQ2IDAtNS42MzkuMTUyLTguMDkuNDU3LTIuNDQ3LjMwNS00LjM3Ny43MDMtNS43ODMgMS4yMDJsMS4yNDUgMi4yNTJjMS4zODktLjQwNiAzLjE5Mi0uNzAzIDUuNDEtLjg4OSAyLjIxLS4xNzggNC42MzEtLjI3MSA3LjI2NC0uMjcxIDIuNjMzIDAgNS4wNjMuMDkzIDcuMjkuMjcxIDIuMjM1LjE4NiA0LjA0Ny40OTEgNS40MzYuOTE0bDEuMjYxLTIuMjI3bS0xLjA5MiAxMS44NTNsLS43MzctMi45MjljLTMuMjI2LS43MzctNy4yODEtMS4xMDktMTIuMTU4LTEuMTA5LTQuODI2IDAtOC44NjUuMzczLTEyLjExIDEuMTA5bC0uNzg3IDIuOTU1YzMuMTQxLS45NTcgNy40NDItMS40MzkgMTIuOTItMS40MzkgMi42MjUgMCA1LjA3Mi4xMzYgNy4zMTUuMzk4IDIuMjUyLjI2MiA0LjEwNi42MDEgNS41NTQgMS4wMTYiLz48L3N2Zz4=");

/***/ }),

/***/ "./src/img/chesspieces/merida-svg/bR.svg":
/*!***********************************************!*\
  !*** ./src/img/chesspieces/merida-svg/bR.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjE5IiB5MT0iMzcuNTUyIiB4Mj0iNzcuNzQiIHkyPSIzNy40MjkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSIjMWYxYTE3IiBkPSJtMjguNDA4IDkuMjJoNC4yMTZ2LTMuMzk1aDYuNzk2djkuMjk1bC01LjUgNC4yNDN2MTEuODU3bDQuMjIgNC4yMjF2NS4wOGgzLjc4OXY1LjkyOWgtMzMuODU5di01LjkyOWgzLjc5NHYtNS4wOGw0LjI0Ni00LjIyMXYtMTEuODU3bC01LjUwOC00LjI0M3YtOS4yOTVoNi43NzR2My4zOTVoNC4yNDJ2LTMuMzk1aDYuNzl6Ii8+PHBhdGggZmlsbD0idXJsKCMwKSIgZD0ibTI1LjAxIDM1LjA0aC0xMC4yN2wtMS4xNDMgMS4wNjd2MS40MzloMjIuODI2di0xLjQzOWwtMS4xNDMtMS4wNjdoLTEwLjI3bS0xMS40MTMgNS4wOHYyLjUzMmgyMi44MjZ2LTIuNTMyaC0yMi44MjZtMTEuNDEzLTI3LjA4aC0xMi43djEuMTQzbDEuODEyIDEuMzYzaDIxLjgwMmwxLjc2MS0xLjM2M3YtMS4xNDNoLTEyLjY3NW0wIDQuMTkxaC04LjY3OGwxLjQ4MiAxLjE2OHYxLjQxNGgxNC4zOTN2LTEuNDE0bDEuNDgyLTEuMTY4aC04LjY3OG0wIDEzLjU0N2gtNy4xOTd2MS4xNDNsLTEuNDgyIDEuNDM5aDE3LjM1N2wtMS40ODItMS40Mzl2LTEuMTQzaC03LjE5NyIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/img/chesspieces/merida-svg/wB.svg":
/*!***********************************************!*\
  !*** ./src/img/chesspieces/merida-svg/wB.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjEzIiB5MT0iMzcuNTkyIiB4Mj0iNzcuNjQiIHkyPSIzNy40NjkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPSIjMWYxYTE3IiBkPSJtMjUuNDQ3IDQyLjAxYy0uMjI5Ljk0LS41MTcgMS41OTItLjg0NyAxLjk1Ni0uMzMuMzY0LS43NjIuNzQ1LTEuMzEyIDEuMTQzLS41OTMuNDE1LTEuMjk1Ljc2Mi0yLjEwOCAxLjA1LS44MTMuMjg4LTEuNzEuMzY0LTIuNzAxLjIxMmwtNi45NjgtLjk2NWMtLjI4OC0uMDM0LS41MzMtLjAzNC0uNzYyIDAtLjIyLjAzNC0uNDMyLjA1MS0uNjM1LjA1MS0uMzQ3IDAtLjc4Ny4wNzYtMS4zMjEuMjM3LS41NDIuMTUyLS45NTcuMzgxLTEuMjUzLjY3N2wtMi40MDUtMy45NDZjLjI5Ni0uMzMuNTU5LS41NTkuNzg3LS42OTQuMjM3LS4xMjcuNTA4LS4yNzEuODIxLS40MTUuOTU3LS40NDkgMS45ODEtLjcyIDMuMDczLS44MjEuNDY2LS4wMzQuOTIzLS4wNDIgMS4zNjMtLjAyNS40NDkuMDE3LjkxNCAwIDEuMzk3LS4wNTEuODg5LjE1MiAxLjc4Ni4yODggMi42ODQuNDA2LjkwNi4xMjcgMS44MTIuMjU0IDIuNzE4LjM4OS45OTEgMCAxLjY2LS4xMDIgMi4wMS0uMjk2LjE4Ni0uMTAyLjQ3NC0uMjg4Ljg3Mi0uNTUuMzk4LS4yNjIuNzk2LS42NTIgMS4xOTQtMS4xNjgtLjg4MS0uMDkzLTEuNzctLjI2Mi0yLjY4NC0uNTA4LS45MDYtLjIzNy0xLjcxLS40OTEtMi40MDQtLjc1NGwyLjU4Mi02LjQwMWMtMS4yOTUtLjc0NS0yLjE5My0xLjMzOC0yLjcwOS0xLjc5NS0uNTA4LS40NTctLjkxNC0uOTgyLTEuMjExLTEuNTc1LS40MzItLjc2Mi0uNzExLTEuNDk5LS44My0yLjIxLS4xMjctLjcxMS0uMTc4LTEuMzQ2LS4xNjEtMS45MTMuMDE3LS45OTEuMjQ1LTIuMDgzLjcwMy0zLjI4NS40NTctMS4xOTQgMS4zMTItMi4yNjkgMi41NjUtMy4yMDkgMS4wNDEtLjc5NiAyLjA2Ni0xLjYxNyAzLjA1Ny0yLjQ1NS45OTEtLjg0NyAxLjk3My0xLjgyOSAyLjk0Ni0yLjk1NS0xLjIxOS0uNjI3LTEuODI5LTEuNjI2LTEuODI5LTIuOTk3IDAtLjkzMS4zMjItMS43MTkuOTc0LTIuMzg4LjY1Mi0uNjYgMS40NTYtLjk5MSAyLjM5Ni0uOTkxLjkyMyAwIDEuNzE5LjMzIDIuMzc5Ljk5MS42Ni42NjkuOTkxIDEuNDU2Ljk5MSAyLjM4OCAwIDEuMzU1LS42MSAyLjM1NC0xLjgyOSAyLjk5Ny45NTcgMS4xMjYgMS45MyAyLjEwOCAyLjkxMyAyLjk1NS45ODIuODM4IDIuMDIgMS42NiAzLjA5IDIuNDU1IDEuMjM2Ljk0IDIuMDgzIDIuMDIgMi41MjMgMy4yMDkuNDQ5IDEuMjAyLjY5NCAyLjI5NC43MiAzLjI4NSAwIC41NjctLjA1MSAxLjIwMi0uMTY5IDEuOTEzLS4xMTguNzExLS4zODEgMS40NDgtLjc5NiAyLjIxLS4zMy41OTMtLjc0NSAxLjExOC0xLjI1MyAxLjU3NS0uNS40NTctMS4zODkgMS4wNS0yLjY2NyAxLjc5NWwyLjU4MiA2LjQwMWMtLjcyOC4yNjMtMS41NDkuNTE3LTIuNDU1Ljc1NC0uOTE0LjI0Ni0xLjc4Ny40MTUtMi42MzMuNTA4LjM4MS41MTcuNzcuOTA2IDEuMTY4IDEuMTY4LjM5OC4yNjMuNjk0LjQ0OS44OTguNTUuMzQ3LjE5NSAxLjAxNi4yOTYgMi4wMS4yOTYuODg5LS4xMzYgMS43ODYtLjI2MyAyLjY5Mi0uMzg5Ljg5OC0uMTE4IDEuODAzLS4yNTQgMi43MTgtLjQwNi40NC4wNTEuODg5LjA2OCAxLjM0Ni4wNTEuNDU3LS4wMTcuOTIzLS4wMDggMS40MDUuMDI1IDEuMDU4LjEwMiAyLjA4My4zNzMgMy4wNzMuODIxLjI5Ni4xNDQuNTY3LjI4OC44MDQuNDE1LjI0NS4xMzUuNTA4LjM2NC44MDQuNjk0bC0yLjQzIDMuOTQ2Yy0uMjk2LS4yOTYtLjcxMS0uNTI1LTEuMjUzLS42NzctLjUzMy0uMTYxLS45NjUtLjIzNy0xLjI5NS0uMjM3LS4yMiAwLS40NC0uMDE3LS42Ni0uMDUxLS4yMi0uMDM0LS40NzQtLjAzNC0uNzU0IDBsLTYuOTUxLjk2NWMtLjk5MS4xNTItMS45MTMuMDg1LTIuNzYtLjE5NS0uODU1LS4yNzktMS41NTgtLjY1Mi0yLjEtMS4xMTgtLjU0Mi0uNDQ5LS45ODItLjgzLTEuMzA0LTEuMTUxLS4zMjItLjMyMi0uNTkzLS45NTctLjgwNC0xLjg5NyIvPjxwYXRoIGZpbGw9InVybCgjMCkiIGQ9Im0yNi4zMiAzOS4yYzAgMS4wOTIuMjQ1IDIuMDI0Ljc1MyAyLjc5NC41Ljc3IDEuMDQxIDEuMzcyIDEuNjI2IDEuNzk1LjkwNi42NjkgMi4yMzUuOTk5IDMuOTg4Ljk5OS40MzIgMCAxLjI3OS0uMDkzIDIuNTMyLS4yNzkgMS4wMjUtLjE2MSAxLjg1NC0uMjc5IDIuNDgxLS4zNTYuNjI3LS4wNzYgMS4wNS0uMTM1IDEuMjctLjE4Ni42MjctLjA4NSAxLjI4Ny0uMDY4IDEuOTgxLjA1MS4yNjIuMDY4LjU1OS4xMjcuODguMTg2LjMyMi4wNTkuNTkzLjE4Ni44MDQuMzgxbDEuMTk0LTEuOTNjLS42NzctLjM0Ny0xLjM5Ny0uNTkzLTIuMTU5LS43Mi0xLjI1My0uMjItMi4zNTQtLjI2My0zLjMwMi0uMTUyLS4yNzkuMDM0LS42NDMuMTE4LTEuMTAxLjI0NS0uNDU3LjEzNi0xLjA2Ny4yNjMtMS44NDYuMzczLTEuNjc2LjI3MS0yLjU1Ny4zOTgtMi42NTkuMzk4LS42NDQgMC0xLjIwMi0uMDc2LTEuNjg1LS4yNDYtLjQ4My0uMTY5LS45MDYtLjM0Ny0xLjI4Ny0uNTQyLS44ODEtLjM5OC0xLjc3LTEuMzM4LTIuNjg0LTIuODExaC0uNzg3bS0xLjc2MSAwaC0uNzk2Yy0uOTMxIDEuNDktMS44MTIgMi40My0yLjY1OSAyLjgxMS0uMzk4LjE5NS0uODMuMzczLTEuMzEyLjU0Mi0uNDgzLjE2OS0xLjAzMy4yNDYtMS42Ni4yNDYtLjExOSAwLS45OTktLjEyNy0yLjY1OS0uMzk4LS43ODctLjExLTEuNDIyLS4yMzctMS44OC0uMzczLS40NjYtLjEyNy0uODMtLjIxMi0xLjA5Mi0uMjQ1LS45NDgtLjExLTIuMDQtLjA2OC0zLjMwMi4xNTItLjc2Mi4xMjctMS40NzMuMzczLTIuMTM0LjcybDEuMTk0IDEuOTNjLjE5NS0uMTk1LjQ1Ny0uMzIyLjc3OS0uMzgxLjMyMi0uMDU5LjYxOC0uMTE4Ljg4LS4xODYuNjk0LS4xMTkgMS4zNTUtLjEzNiAxLjk4MS0uMDUxLjIyLjA1MS42NDMuMTEgMS4yNy4xODYuNjI3LjA3NiAxLjQ2NS4xOTUgMi41MDYuMzU2IDEuMjM2LjE4NiAyLjA4My4yNzkgMi41MzIuMjc5IDEuNzM2IDAgMy4wNjUtLjMzIDMuOTg4LS45OTkuNTY3LS40MjMgMS4xMDEtMS4wMjUgMS42LTEuNzk1LjUwOC0uNzcuNzYyLTEuNzAyLjc2Mi0yLjc5NG0uODg5LTkuMzQ3YzEuNiAwIDMuMTQxLjEyNyA0LjYxNC4zNzMgMS42MTctLjU3NiAyLjc5NC0xLjQ4MiAzLjUyMi0yLjcwMS42MjctMS4wNTguOTQtMi4yMjcuOTQtMy40OTcgMC0uNzYyLS4xODYtMS42LS41NjctMi41MjMtLjM4MS0uOTE0LS45OTktMS43NDQtMS44NjMtMi40ODktLjk3NC0uODEzLTIuMDQtMS43MDItMy4yLTIuNjY3LTEuMTUxLS45NjUtMi4zMDMtMi4xLTMuNDQ2LTMuMzg3LTEuMTYgMS4yODctMi4zMTEgMi40MjItMy40NzEgMy4zODctMS4xNi45NjUtMi4yMTggMS44NTQtMy4xNzUgMi42NjctLjg4MS43NDUtMS40OTkgMS41NzUtMS44NzEgMi40ODktLjM3Mi45MjMtLjU1OSAxLjc2MS0uNTU5IDIuNTIzIDAgMS4yNy4zMDUgMi40MzguOTE0IDMuNDk3LjcxMSAxLjIxOSAxLjg5NyAyLjEyNSAzLjU0OCAyLjcwMSAxLjQ1Ni0uMjQ2IDIuOTk3LS4zNzMgNC42MTQtLjM3M20wIDQuNTEzYzEuOTM5IDAgMy43OTMuMTk1IDUuNTc5LjU3NmwtMS4xODUtMy4wNTdjLTEuNDU2LS4yMjktMi45MjEtLjM0Ny00LjM5NC0uMzQ3LTEuNTA3IDAtMi45OC4xMTktNC40MTEuMzQ3bC0xLjE5NCAzLjA1N2MxLjc3LS4zODEgMy42NDEtLjU3NiA1LjYwNS0uNTc2bTAtMjMuNTM3YzEuMTI2IDAgMS42ODUtLjU1OSAxLjY4NS0xLjY4NSAwLTEuMTI2LS41NTktMS42OTMtMS42ODUtMS42OTMtMS4xMjYgMC0xLjY4NS41NjctMS42ODUgMS42OTMgMCAxLjEyNi41NTkgMS42ODUgMS42ODUgMS42ODVtMCAyNy4wMWMxLjEyNiAwIDIuMjE4LS4wOTMgMy4yODUtLjI3OSAxLjA2Ny0uMTk1IDIuMS0uNDIzIDMuMDktLjY4Ni0xLjkzOS0uNTA4LTQuMDY0LS43Ny02LjM3NS0uNzctMi4zNDUgMC00LjQ3LjI2My02LjM3NS43Ny45NTcuMjYzIDEuOTczLjQ5MSAzLjA0OC42ODYgMS4wNzUuMTg2IDIuMTg0LjI3OSAzLjMyNy4yNzltLS44ODktMTQuMzM0bC0yLjA2Ni0uMDI1Yy0uNTU5IDAtLjgzOC0uMjc5LS44MzgtLjg0NyAwLS41NTkuMjc5LS44MzguODM4LS44MzhoMi4wNjZ2LTIuMTM0YzAtLjU3Ni4yOTYtLjg3Mi44ODktLjg3Mi41NzYgMCAuODcyLjI5Ni44NzIuODcydjIuMTM0aDIuMTM0Yy41NDIgMCAuODEzLjI3OS44MTMuODM4IDAgLjU2Ny0uMjcxLjg0Ny0uODEzLjg0N2gtMi4xMzR2Mi4wMzJjMCAuNjAxLS4yOTYuODk4LS44NzIuODk4LS41OTMgMC0uODg5LS4yOTYtLjg4OS0uODk4di0yLjAxIi8+PC9zdmc+");

/***/ }),

/***/ "./src/img/chesspieces/merida-svg/wK.svg":
/*!***********************************************!*\
  !*** ./src/img/chesspieces/merida-svg/wK.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjM3NiIgeDI9Ijc3LjY0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgZmlsbD0iIzFmMWExNyI+PHBhdGggZD0ibTI1LjgyMSAxMi4wMmgtMS43NjF2LTMuMjUxaC0yLjA2NmMtLjU1OSAwLS44MzgtLjI3MS0uODM4LS44MjF2LS4wMjVjMC0uNTQyLjI3OS0uODEzLjgzOC0uODEzaDIuMDY2di0yLjEwOGMwLS41ODQuMjk2LS44NzIuODg5LS44NzIuNTc2IDAgLjg3Mi4yODguODcyLjg3MnYyLjEwOGgyLjEzNGMuNTQyIDAgLjgxMy4yNzEuODEzLjgxM3YuMDI1YzAgLjU1LS4yNzEuODIxLS44MTMuODIxbC0yLjExNy4wMjUtLjAxNyAzLjIyNiIvPjxwYXRoIGQ9Im0xMS4wMyAzNy43NDRsLS44MTMtNC42NGMtLjAxNyAwLS4wNDItLjAzNC0uMDc2LS4xMDItLjA4NS0uMTE4LS4zMjItLjI3MS0uNzExLS40NTctLjM4MS0uMTk1LS44MzgtLjUxNi0xLjM0Ni0uOTgyLS43MjgtLjYxLTEuMjk1LTEuMTA5LTEuNzAyLTEuNDktLjQwNi0uMzczLS43NzEtLjc4Ny0xLjEwMS0xLjIzNi0xLjAxLTEuMzg5LTEuNTc1LTMuMDY1LTEuNjg1LTUuMDQtLjE2OS0xLjg5Ny42MDEtMy43OTMgMi4zMDMtNS42ODEgMS43MTktMS44OCA0LjA0Ny0yLjc2OSA2Ljk2OC0yLjY1IDEuMDkyLjA2OCAyLjM3OS4zMyAzLjg0NC43OTYuNDgzLjE5NS45NzQuMzkgMS40ODIuNTc2LjUuMTk1Ljk5OS4zODkgMS40OTkuNTg0LjI2Mi4xMzUuNS4yNzEuNjk0LjM5OC0uMDg1LS4zNDctLjEyNy0uNjk0LS4xMjctMS4wNDEgMC0xLjI4Ny40NTctMi4zODggMS4zOC0zLjMwMi45MTQtLjkwNiAyLjAyNC0xLjM3MiAzLjMxMS0xLjM4OSAxLjI4NyAwIDIuMzg4LjQ2NiAzLjMwMiAxLjM4LjkwNi45MTQgMS4zNjMgMi4wMiAxLjM2MyAzLjI4NSAwIC4yNjItLjAzNC42MS0uMTAyIDEuMDQxLjIyOS0uMTQ0LjQ1Ny0uMjcxLjY2OS0uMzcyLjc2Mi0uMzMgMS43NjEtLjcyIDMuMDEtMS4xNiAxLjQyMi0uNDgzIDIuNzAxLS43NTQgMy44NDQtLjgyMSAyLjkyMS0uMTM2IDUuMjQxLjc1NCA2Ljk0MyAyLjY1IDEuNjY4IDEuODg4IDIuNDQ3IDMuNzg1IDIuMzI4IDUuNjgxLS4xMjcgMS45NzMtLjcwMyAzLjY0OS0xLjcxIDUuMDQtLjMzLjQ0OS0uNzAzLjg2NC0xLjExOCAxLjI1My0uNDA2LjM5LS45NjUuODgxLTEuNjYgMS40NzMtLjU0Mi40NjYtMS4wMS43OTYtMS4zODkuOTgyLS4zODEuMTg2LS42MDEuMzQ3LS42NjkuNDU3LS4wMTcuMDM0LS4wMzQuMDU5LS4wNTEuMDc2LS4wMTcuMDE3LS4wMjUuMDM0LS4wMjUuMDUxbC0uNzk2IDQuNjY1IDEuNjQzIDYuMTIxYy0uODMuNzQ1LTIuNjg0IDEuMzU1LTUuNTU0IDEuODM3LTIuODc5LjQ4My02LjIwNi43Mi05Ljk3NC43Mi0zLjgzNSAwLTcuMjE0LS4yNTQtMTAuMTE4LS43NTQtMi45MTItLjUwOC00Ljc0MS0xLjE0My01LjQ4Ni0xLjg5N2wxLjYzNC02LjA1Ii8+PC9nPjxwYXRoIGZpbGw9InVybCgjMCkiIGQ9Im0yNS43OTYgMjkuNTMyYzIuODQ1LjAzNCA1LjQ0NC4yMDMgNy44MDYuNTA4IDIuMzcxLjMwNSA0LjIyNS42OTQgNS41NjMgMS4xNTEuNjI3LS40OTEgMS4zMTItMS4wNDEgMi4wNTctMS42NTEuNzQ1LS42MDEgMS4zNjMtMS4yMTkgMS44NjMtMS44NDYuNzg3LTEuMDEgMS4xODUtMi4zMzcgMS4xODUtMy45OTYgMC0xLjQ4Mi0uMzU2LTIuNzI2LTEuMDY3LTMuNzE3LTEuMjctMS44NTQtMy4yMDktMi43NzctNS44LTIuNzc3LTEuNTU4IDAtMy4xNS4zMjItNC43OTIuOTY1LTEuNDM5LjU4NC0yLjUzMiAxLjIyOC0zLjI2OCAxLjkzOS0xLjM4OSAxLjM4OS0yLjQyMSAzLjE3NS0zLjA4MiA1LjM1MS0uMjI5Ljc3OS0uMzY0IDEuNDktLjQwNiAyLjEyNS0uMDQyLjYzNS0uMDU5IDEuMjg3LS4wNTkgMS45NDdtLTEzLjI1IDYuNjk3YzMuMTQxLS43OTYgNy4zMDctMS4xOTQgMTIuNTA1LTEuMTk0IDUuMDg5IDAgOS4yMDMuMzgxIDEyLjMyNyAxLjE0M2wuNjE4LTMuNjQ5Yy0zLjMyNy0uODcyLTcuNjcxLTEuMzEyLTEzLjA1LTEuMzEyLTUuNDEgMC05Ljc0NS40NDktMTMuMDIgMS4zMzhsLjYxOCAzLjY3NW0yNS4yOTggNC40MTFsLS43MzctMi44NDVjLTMuMjc3LS43MjgtNy4zMzItMS4wOTItMTIuMTU4LTEuMDkyLTQuODA5IDAtOC44NTYuMzY0LTEyLjEzMyAxLjA5MmwtLjc4NyAyLjg3YzMuMTU4LS45MjMgNy40NjgtMS4zODkgMTIuOTQ1LTEuMzg5IDUuNDQ0IDAgOS43MjguNDU3IDEyLjg2OSAxLjM2M20uNjUyIDIuMzM3Yy0zLjE5Mi0xLjI4Ny03LjY3OS0xLjkzOS0xMy40NDUtMS45MzktNS45ODYgMC0xMC41MTYuNjYtMTMuNTk4IDEuOTkgMi45MTMgMS4xNTEgNy40MTcgMS43MzYgMTMuNTIxIDEuNzM2IDIuOTEzIDAgNS41NjMtLjE2MSA3Ljk1OS0uNDgzIDIuNDA0LS4zMjIgNC4yNS0uNzYyIDUuNTYzLTEuMzA0bS0xNC40MTktMTMuNDQ1Yy0uMDA4LS42NDMtLjAzNC0xLjI4Ny0uMDY4LTEuOTIyLS4wMzQtLjYzNS0uMTYxLTEuMzQ2LS4zNzItMi4xMjUtLjY3Ny0yLjIxLTEuNzAyLTMuOTk2LTMuMDgyLTUuMzUxLS43MTEtLjY5NC0xLjc5NS0xLjM0Ni0zLjI2OC0xLjkzOS0xLjY4NS0uNjYtMy4yODUtLjk5MS00Ljc5Mi0uOTkxLTIuNjA4IDAtNC41NDcuOTMxLTUuOCAyLjgwMi0uNzExLjk5MS0xLjA2NyAyLjIzNS0xLjA2NyAzLjcxNyAwIDEuNjI2LjM5OCAyLjk1NSAxLjE4NSAzLjk5Ni40ODMuNjEgMS4wOTIgMS4yMjggMS44MzcgMS44MzcuNzQ1LjYxIDEuNDM5IDEuMTY4IDIuMDgzIDEuNjYgMi44OTYtMS4wNDEgNy4zNDEtMS42IDEzLjM0My0xLjY4NW0uODcyLTQuNjE0Yy4xMTktLjQ2Ni4yMTItLjc4Ny4yOTYtLjk2NS4xNjktLjY0My4zNTYtMS4xOTQuNTc2LTEuNjQzLjA5My0uMjc5LjIzNy0uNjAxLjQzMi0uOTc0LjE4Ni0uMzczLjM4OS0uODA0LjYxLTEuMjc5LjEyNy0uMjc5LjI3MS0uNjI3LjQxNS0xLjAzMy4xNTItLjQwNi4zMDUtLjgwNC40NDktMS4yMDIuMTM1LS4zMy4yMDMtLjY4Ni4yMDMtMS4wNjcgMC0uODEzLS4yOTYtMS40OTktLjg3Mi0yLjA2Ni0uNTc2LS41NzYtMS4yNzktLjg2NC0yLjEwOC0uODY0LTEuOTY0IDAtMi45NTUuOTkxLTIuOTU1IDIuOTU1IDAgLjM4MS4wNjguNzM3LjIwMyAxLjA2Ny4zNjQgMS4wNzUuNjQzIDEuODIuODM4IDIuMjM1LjIyLjQ3NC40MTUuOTA2LjYwMSAxLjI3OS4xNzguMzcyLjMzOS42OTQuNDY2Ljk3NC4yMi41NS4zOTggMS4wOTIuNTUgMS42NDMuMDM0LjA5My4xMjcuNDE1LjI5Ni45NCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/img/chesspieces/merida-svg/wN.svg":
/*!***********************************************!*\
  !*** ./src/img/chesspieces/merida-svg/wN.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjQwNSIgeDI9Ijc3LjY0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0iIzFmMWExNyIgZD0ibTI2LjE4IDkuMzk1YzIuNTk5LjE2OSA1IC44MzggNy4yMjIgMi4wMiAyLjIxIDEuMTY4IDQuMDk4IDIuNjc1IDUuNjU2IDQuNTEzIDEuMDkyIDEuMjg3IDIuMTE3IDIuODQ1IDMuMDgyIDQuNjY1Ljk3NCAxLjgxMiAxLjc0NCAzLjc0MiAyLjMyIDUuNzc0LjY2IDIuMzcxIDEuMDg0IDQuODUxIDEuMjUzIDcuNDU5LjE3OCAyLjU5OS4yNjMgNS4wMS4yNjMgNy4yM3Y1LjQwMmMwIDAtMS4yODcgMC0zLjg2MSAwLTIuNTY1IDAtNS45MDEgMC0xMC4wMSAwaC0xNi42MzdjLS4xNTIgMC0uMjItLjQwNi0uMjEyLTEuMjExLjAwOC0uODEzLjA1OS0xLjQ2NS4xNjEtMS45NjQuMDU5LS4zOTguMjItLjk1Ny40NjYtMS42ODUuMjU0LS43MjguNjYtMS42MDkgMS4yNDUtMi42NS4yNjItLjUzMy44ODktMS4zMDQgMS44OC0yLjMyLjk5OS0xLjAxNiAyLjEzNC0yLjIwMSAzLjQyOS0zLjUzOS43NDUtLjc2MiAxLjMyMS0xLjcxOSAxLjc0NC0yLjg3OS40MjMtMS4xNTEuNjAxLTIuMjAxLjUzMy0zLjE1LS42MS41LTEuMjc5LjkwNi0yLjAxIDEuMjE5LTMuNTA1IDEuMjUzLTYuMDUgMy4wNzMtNy42MTEgNS40NTItLjExOS4xNTItLjQ5MS44MjEtMS4xMTggMi4wMi0uMzMuNjI3LS42MTggMS4wNTgtLjg0NyAxLjI4Ny0uMzEzLjMxMy0uNzcxLjQ5MS0xLjM2My41MjUtLjkyMy4wNDItMS42NDMtLjM5OC0yLjE1OS0xLjM0Ni0uNjk0LjIwMy0xLjMxMi4yODgtMS44NjMuMjU0LS45MjMtLjM0Ny0xLjU5Mi0uNzItMi4wMS0xLjExOC0uODQ3LS44NDctMS4zODktMS42ODUtMS42NTEtMi41MzItLjI1NC0uODQ3LS4zODEtMS43NTMtLjM4MS0yLjcyNiAwLTEuMzg5Ljg1NS0zLjIyNiAyLjU4Mi01LjUxMiAyLjAyLTIuNjI1IDMuMDktNC42MzEgMy4yMTctNiAwLS41OTMuMDU5LTEuMjYyLjE3OC0yLjAxLjEwMi0uNTE3LjMwNS0xLjAxLjYxOC0xLjQ5LjIyLS4zMy4zNjQtLjU1OS40MzItLjY3Ny4wNzYtLjEyNy4yMTItLjMxMy40MTUtLjU1OS4xNDQtLjIwMy4yNzEtLjM1Ni4zNzMtLjQ1Ny4wOTMtLjExLjIyLS4yNTQuMzczLS40NC4xNzgtLjIxMi40MDYtLjQ1Ny42OTQtLjc0NS0uODgtMi40MTMtMS4yMzYtNC45MDItMS4wNjctNy40NTkgMy4yODUgMS4xNjggNi4wNSAzLjAxIDguMjggNS41MjkuNTUtMS44NzEgMS42MjYtMy4zODcgMy4yMjYtNC41MzggMS4zMjEuOTIzIDIuMzcxIDIuMTUxIDMuMTUgMy42NjYiLz48cGF0aCBmaWxsPSJ1cmwoIzApIiBkPSJtNDIuOTc2IDQ0LjY5M2MtLjAxNyAwIDAtLjQ0OS4wNDItMS4zNDYuMDUxLS45MDYuMDc2LTEuODguMDc2LTIuOTIxLjAxNy0yLjA2Ni4wMTctNC4yIDAtNi40MDktLjAxNy0yLjIxLS4zMTMtNC40MTEtLjg4OS02LjYxMy0uNTY3LTIuMTE3LTEuMTg1LTMuOTItMS44NjMtNS40MTktLjY3Ny0xLjQ5OS0xLjQxNC0yLjc4Ni0yLjIxLTMuODc4LTEuMTg1LTEuNzg2LTIuODExLTMuMzAyLTQuODYtNC41MzgtMi4wNDktMS4yNDUtNC4xOTEtMi4wNTctNi40MjYtMi40MzguMTUyLjgxMy4yMiAxLjYwOS4yMDMgMi4zODgtLjAzNC41OTMtLjMxMy44ODktLjg0Ny44ODktLjYxIDAtLjg4MS0uMjk2LS44MjEtLjg4OS4wNTEtMi4xODQtLjcyOC00LjA1Ni0yLjMyOC01LjYwNS0xLjI1MyAxLjMyMS0xLjkzOSAyLjg1My0yLjAzMiA0LjYwNi0uMDM0LjU4NC0uMzMuODM4LS44OTcuNzcxLS41MjUtLjAxNy0uNzg3LS4zMjItLjc4Ny0uOTE0IDAgMCAuMDE3LS4wNjguMDQyLS4yMDMtLjY3Ny4yMi0xLjM4OS41MjUtMi4xMzQuOTIzLS40NzQuMzMtLjg2NC4yNDUtMS4xNi0uMjQ2LS4yOTYtLjQ5OS0uMTY5LS44ODkuMzk4LTEuMTY4LjcxMS0uMzY0IDEuMjQ1LS42MzUgMS42MDktLjgyMS0xLjQyMi0xLjQ1Ni0zLjA0LTIuNjI1LTQuODYtMy41MjIuMTk1IDIuMzAzLjgzIDQuNDcgMS44ODggNi41MjguMjc5LjQyMy4yMTIuODA0LS4yMDMgMS4xMzUtLjQ2Ni4zNjQtLjg1NS4zMTMtMS4xNjgtLjE2OS0uMTEtLjE2OS0uMjc5LS40NjYtLjQ5MS0uODk3LS4zNDcuMzQ3LS41ODQuNjEtLjY5NC43Ny0uMTE4LjE1Mi0uMzIyLjQ4My0uNjEuOTkxLS4yODguNTE2LS40OTkuOTQtLjYzNSAxLjI3LS4xNDQuNDE1LS4yMTIuNzQ1LS4xODYgMS4wMS4wMjUuMjU0LjA1MS41MzMuMDY4Ljg1NS0uMTUyLjk3NC0uNDkxIDEuODg4LTEuMDEgMi43NTItLjUyNS44NTUtMS4xODUgMS45MDUtMS45OTggMy4xNS0uNzc5IDEuMTg1LTEuMzcyIDIuMDgzLTEuNzg2IDIuNjc1LS40MTUuNjAxLS43MjggMS4zNTUtLjk0IDIuMjg2LS4xNTIuNTU5LS4xNTIgMS4yNDUgMCAyLjA0MS4xNDQuODA0LjQ3NCAxLjQzMS45NjUgMS44OC43NjIuNzcgMS40OTkgMS4xMjYgMi4yMSAxLjA2Ny4yMjkgMCAuNTQyLS4wOTMuOTMxLS4yNzkuMzg5LS4xNzguNjg2LS41MjUuOTA2LTEuMDQxLjQyMy0uOTQuNzc5LTEuNDE0IDEuMDY3LTEuNDE0LjQwNiAwIC42MzUuMjM3LjY2OS42OTQgMCAuMTAyLS4xMzYuNTE3LS4zOTggMS4yNDUtLjE1Mi4zMy0uMzQ3LjY3Ny0uNTkzIDEuMDQxLS4zMjIuNDMyLS40NTcuNjEtLjQyMy41NDIuMjYyLjk0OC43MDMgMS4xMDkgMS4zMTIuNDk5LjE3OC0uMTc4LjM4OS0uNTI1LjYxOC0xLjAxNi4yMzctLjQ5OS42MDEtMS4xNjggMS4wOTItMi4wMS41ODQtLjk4MiAxLjIwMi0xLjc3IDEuODYzLTIuMzg4LjY2LS42MSAxLjI0NS0xLjEwOSAxLjc2MS0xLjQ4Mi4yOTYtLjIyLjY2LS40NjYgMS4wOTItLjc0NS40MzItLjI4OCAxLjAxLS41NzYgMS43MzYtLjg3Mi41NzYtLjIyOSAxLjIxOS0uNTE2IDEuOTIyLS44NTUuNzAzLS4zMzkgMS4zMjktLjc3IDEuODcxLTEuMzA0Ljc2Mi0uNzQ1IDEuMzQ2LTEuNjU5IDEuNzYxLTIuNzUyLjIyLS42MS4yOTYtMS4zNjMuMjQ1LTIuMjYxLS4xNDQtLjU1OS4xMzYtLjgzOC44NDctLjgzOC41MzMgMCAuODMuMjcxLjg5OC44MjEgMCAxLjg2My0uNTMzIDMuNTY0LTEuNTkyIDUuMTA1LjM0NyAxLjA1OC40NCAyLjIxOC4yNzEgMy40NzEtLjE0NCAxLjAxLS41IDIuMDkxLTEuMDUgMy4yNDMtLjU1OSAxLjE0My0xLjY3NiAyLjQyMi0zLjM2MSAzLjgyNy0zLjQyOSAyLjg0NS01LjA1IDUuNzc0LTQuODYgOC43OCAwIDAgMS40MDUgMCA0LjIyNSAwIDIuODE5IDAgNS40NyAwIDcuOTUgMGgxMy41NzJtLTMzLjYzOC0xNS4wOGMtLjQ4My4yOTYtLjc3LjY5NC0uODcyIDEuMTk0LjAxNy41NDItLjIzNy44MzgtLjc2Mi44ODktLjU4NC4wNjgtLjg4MS0uMTc4LS44OTgtLjc0NS4wNjgtMS4wOTIuNTUtMS45NTYgMS40NjUtMi41OTkuNDMyLS4zNDcuODMtLjMyMiAxLjE5NC4wOTMuMzY0LjQ0OS4zMjIuODM4LS4xMjcgMS4xNjhtNy4zNjYtMTEuODI4Yy4yMTIuMzMuMjk2LjY3Ny4yNDYgMS4wNDEtLjE2MSAxLjA1OC0uNzU0IDEuNDk5LTEuNzYxIDEuMzM4LS4yOTYtLjA1MS0uNTMzLS4xNTItLjcyLS4yOTYtLjA1OS4wNzYtLjE2MS4yNjItLjI5Ni41NDItLjE3OC41MzMtLjUyNS43MTEtMS4wNDEuNTUtLjUwOC0uMjAzLS43MTEtLjU3Ni0uNTkzLTEuMTE4Ljc0NS0xLjkwNSAyLjA5MS0zLjIwOSA0LjA0LTMuOTIuNTY3LS4xNjkuOTQgMCAxLjExOC40OTEuMjAzLjUzMy4wNTEuODk4LS40NDkgMS4wOTItLjA5My4wNTEtLjE4Ni4xMDItLjI3MS4xMzYtLjA4NS4wNDItLjE2OS4wOTMtLjI3MS4xNDQiLz48L3N2Zz4=");

/***/ }),

/***/ "./src/img/chesspieces/merida-svg/wP.svg":
/*!***********************************************!*\
  !*** ./src/img/chesspieces/merida-svg/wP.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMS4xMyIgeTE9IjM3LjM1IiB4Mj0iNzcuNzYiIHkyPSIzNy40NjkiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLjk3MzI0IDAgMS4yNDMpIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJtMjUgNDYuNDVoLTEzLjM5NGMtLjY2LTEuNjA3LS45OTEtMy4yODgtLjk5MS01LjA0IDAtMi45NzUuODY0LTUuNjQ0IDIuNTk5LTguMDIgMS43MzYtMi4zNjUgMy45NzEtNC4wNTQgNi42OTctNS4wNjgtMS4xNjgtLjUyNy0yLjEyNS0xLjMyNy0yLjg2Mi0yLjM5OC0uNzM3LTEuMDcxLTEuMTAxLTIuMjgzLTEuMTAxLTMuNjM0IDAtMS42ODkuNTc2LTMuMTU2IDEuNzM2LTQuMzkyIDEuMTUyLTEuMjQ0IDIuNTc0LTEuOTYxIDQuMjY3LTIuMTUxLTEuMzQ2LS45ODEtMi4wMi0yLjI4Mi0yLjAyLTMuODg5IDAtMS4zNTEuNDkxLTIuNTEzIDEuNDgyLTMuNDc3Ljk4Mi0uOTY0IDIuMTc2LTEuNDQyIDMuNTgxLTEuNDQyIDEuMzg5IDAgMi41ODIuNDc4IDMuNTczIDEuNDQyLjk5MS45NjQgMS40OSAyLjEyNiAxLjQ5IDMuNDc3IDAgMS42MDctLjY2OSAyLjkwOS0yLjAyIDMuODg5IDEuNjkzLjE5IDMuMTE2LjkwNiA0LjI2NyAyLjE1MSAxLjE2IDEuMjM2IDEuNzM2IDIuNzAzIDEuNzM2IDQuMzkyIDAgMS4zNTEtLjM3MyAyLjU2My0xLjEyNiAzLjYzNC0uNzUzIDEuMDcxLTEuNzEgMS44Ny0yLjg2MiAyLjM5OCAyLjcyNiAxLjAxNCA0Ljk2MSAyLjcwMyA2LjY5NyA1LjA2OCAxLjczNiAyLjM3MyAyLjU5OSA1LjA0IDIuNTk5IDguMDIgMCAxLjczOS0uMzIyIDMuNDItLjk2NSA1LjA0aC0xMy4zOTQiIGZpbGw9IiMxZjFhMTciLz48cGF0aCBkPSJtMjUgNDQuODA4aDEyLjE3NWMuMzQ3LTEuMTU0LjUyNS0yLjI5MS41MjUtMy40MDMgMC0yLjUxMy0uNzExLTQuNzg3LTIuMTQyLTYuODMxLTEuNDMxLTIuMDQ0LTMuMjc3LTMuNTUyLTUuNTItNC41MTYtMS41ODQtLjYyLTEuNjQzLS42NTktMS42NDMtMS43MzkgMC0uODQ5LjU1OS0xLjQ3NSAxLjY2OC0xLjg3OSAxLjUzMi0xLjA0NyAyLjMwMy0yLjQzMSAyLjMwMy00LjE1MyAwLTEuMjQ0LS40MzItMi4zMjQtMS4yODctMy4yNjMtLjg2NC0uOTMxLTEuOTA1LTEuNDY3LTMuMTI0LTEuNjE1LS45OTktLjA4Mi0xLjQ5LS42MjYtMS40OS0xLjY0IDAtLjQ1My4xNzgtLjg3My41NDItMS4yNjEuODk4LS42NzYgMS4zNDYtMS41NTcgMS4zNDYtMi42NTMgMC0uODk4LS4zMzktMS42NzMtLjk5OS0yLjMxNi0uNjYtLjY0My0xLjQ0OC0uOTY0LTIuMzU0LS45NjQtLjk0IDAtMS43NDQuMzIxLTIuMzk2Ljk2NC0uNjUyLjY0My0uOTc0IDEuNDE3LS45NzQgMi4zMTYgMCAxLjA3OS40NCAxLjk2MSAxLjMzOCAyLjY1My4zNjQuMzU0LjU0Mi43NzUuNTQyIDEuMjYxIDAgMS4wMTQtLjQ4MyAxLjU1Ny0xLjQ2NSAxLjY0LTEuMjM2LjE0OC0yLjI4Ni42ODQtMy4xMzMgMS42MTUtLjg1NS45MzktMS4yNzkgMi4wMi0xLjI3OSAzLjI2MyAwIDEuNzIyLjc3IDMuMTA2IDIuMzAzIDQuMTUzIDEuMTA5LjQxMiAxLjY2OCAxLjA0NiAxLjY2OCAxLjg3OSAwIDEuMDc5LS4wNjcgMS4xMTgtMS42NjggMS43MzktMi4yNDQuOTY0LTQuMDgxIDIuNDcyLTUuNTAzIDQuNTE2LTEuNDIyIDIuMDQ0LTIuMTM0IDQuMzE4LTIuMTM0IDYuODMxIDAgMS4xOTUuMTc4IDIuMzI0LjUyNSAzLjQwM2gxMi4xNzUiIGZpbGw9InVybCgjMCkiLz48L3N2Zz4=");

/***/ }),

/***/ "./src/img/chesspieces/merida-svg/wQ.svg":
/*!***********************************************!*\
  !*** ./src/img/chesspieces/merida-svg/wQ.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjI1MyIgeTE9IjM3LjIyIiB4Mj0iNzcuNjQiIHkyPSIzNy4zNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHN0cm9rZT0iIzFmMWExNyIgc3Ryb2tlLXdpZHRoPSIuMDc2Ij48cGF0aCBmaWxsPSIjMWYxYTE3IiBkPSJtNDQuNTQxIDE0LjcyM2MtLjk0IDAtMS43NDQtLjMzLTIuNDA1LS45ODItLjY2LS42NTItLjk5MS0xLjQ0OC0uOTkxLTIuMzk2IDAtLjkyMy4zMy0xLjcxOS45OTEtMi4zODguNjYtLjY3NyAxLjQ2NS0xLjAxIDIuNDA1LTEuMDEuOTMxIDAgMS43MjcuMzMgMi4zODggMS4wMS42Ni42NjkuOTkxIDEuNDY1Ljk5MSAyLjM4OCAwIC45NDgtLjMzIDEuNzQ0LS45OTEgMi4zOTYtLjY2LjY1Mi0xLjQ1Ni45ODItMi4zODguOTgyem0tNC4zMSAyOS4yMmMtLjgxMy43MTEtMi42MzMgMS4zMDQtNS40NjEgMS43ODYtMi44MjguNDc0LTYuMDg3LjcyLTkuNzcuNzItMy43NTEgMC03LjA1LS4yNTQtOS44OTgtLjc0NS0yLjg0NS0uNDk5LTQuNjQtMS4xMTgtNS4zODUtMS44NjNsMS41NjYtNS45NTItLjY5NC0zLjg5NS0yLjE4NC0zLjc5My0yLjEwOC0xNS40MjYgMS4yMTEtLjQ3NCA2Ljc5OSAxMS40NTUuMTUyLTEzLjY0IDEuNjg1LS4yOTYgNS4xODIgMTMuNzE2IDIuNzc3LTE0Ljc1N2gxLjcxOWwyLjc3NyAxNC43MDcgNS4xMzEtMTMuNjY1IDEuNzEuMjk2LjE1MiAxMy42NCA2LjgyNC0xMS40ODEgMS4xNi41NDItMi4wNTcgMTUuMzU5LTIuMjEgMy43OTMtLjY5NCAzLjk0NiAxLjYxNyA2LjAzem0tMjUuNjk2LTMxLjk1M2MtLjk0OCAwLTEuNzUzLS4zMjItMi40MTMtLjk3NC0uNjYtLjY1Mi0uOTkxLTEuNDU2LS45OTEtMi4zOTYgMC0uOTIzLjMzLTEuNzE5Ljk5MS0yLjM3OS42Ni0uNjYgMS40NjUtLjk5MSAyLjQxMy0uOTkxLjkyMyAwIDEuNzE5LjMzIDIuMzc5Ljk5MS42Ni42Ni45OTEgMS40NTYuOTkxIDIuMzc5IDAgLjk0LS4zMyAxLjc0NC0uOTkxIDIuMzk2LS42Ni42NTItMS40NTYuOTc0LTIuMzc5Ljk3NHptLTkuMTM2IDIuNzM1Yy0uOTQgMC0xLjczNi0uMzMtMi4zODgtLjk4Mi0uNjUyLS42NTItLjk4Mi0xLjQ0OC0uOTgyLTIuMzk2IDAtLjkyMy4zMy0xLjcxOS45ODItMi4zODguNjUyLS42NzcgMS40NDgtMS4wMSAyLjM4OC0xLjAxLjk0OCAwIDEuNzQ0LjMzIDIuNDEzIDEuMDEuNjYuNjY5Ljk5MSAxLjQ2NS45OTEgMi4zODggMCAuOTQ4LS4zMyAxLjc0NC0uOTkxIDIuMzk2LS42NjkuNjUyLTEuNDY1Ljk4Mi0yLjQxMy45ODJ6bTE5LjU1LTMuOTcxYy0uOTQgMC0xLjc0NC0uMzMtMi4zOTYtLjk5MS0uNjUyLS42Ni0uOTc0LTEuNDY1LS45NzQtMi40MDUgMC0uOTMxLjMyMi0xLjcyNy45NzQtMi4zODguNjUyLS42NiAxLjQ1Ni0uOTkxIDIuMzk2LS45OTEuOTIzIDAgMS43MjcuMzMgMi4zOTYuOTkxLjY2OS42Ni45OTkgMS40NTYuOTk5IDIuMzg4IDAgLjk0LS4zMyAxLjc0NC0uOTk5IDIuNDA1LS42NjkuNjYtMS40NzMuOTkxLTIuMzk2Ljk5MXptMTAuNDE0IDEuMjM2Yy0uOTQgMC0xLjczNi0uMzIyLTIuMzg4LS45NzQtLjY1Mi0uNjUyLS45ODItMS40NTYtLjk4Mi0yLjM5NiAwLS45MjMuMzMtMS43MTkuOTgyLTIuMzc5LjY1Mi0uNjYgMS40NDgtLjk5MSAyLjM4OC0uOTkxLjk0OCAwIDEuNzUzLjMzIDIuNDEzLjk5MS42Ni42Ni45OTEgMS40NTYuOTkxIDIuMzc5IDAgLjk0LS4zMyAxLjc0NC0uOTkxIDIuMzk2LS42Ni42NTItMS40NjUuOTc0LTIuNDEzLjk3NHoiLz48cGF0aCBmaWxsPSJ1cmwoIzApIiBkPSJtMzguMjIgNDMuMDRjLTMuMDItMS4yNTMtNy40MTctMS44OC0xMy4xNjYtMS44OC01Ljg3NiAwLTEwLjMxMi42NDMtMTMuMzI3IDEuOTMgMi44OTYgMS4xNDMgNy4zMTUgMS43MSAxMy4yNSAxLjcxIDIuODQ1IDAgNS40NDQtLjE1MiA3Ljc5OC0uNDY2IDIuMzYyLS4zMTMgNC4xNzQtLjc0NSA1LjQ0NC0xLjI5NXptLTEzLjI2Ny0zNC4wM2MxLjEwOSAwIDEuNjYtLjU1OSAxLjY2LTEuNjU5IDAtMS4wOTItLjU1LTEuNjQzLTEuNjYtMS42NDMtMS4wOTIgMC0xLjYzNC41NS0xLjYzNCAxLjY0MyAwIDEuMTAxLjU0MiAxLjY1OSAxLjYzNCAxLjY1OXptMTIuNjI0IDI0Ljk3N2MtMy4xOTItLjgxMy03LjM2Ni0xLjIxMS0xMi41MjItMS4yMTEtNS4yOTIgMC05LjUxNy40MDYtMTIuNjc1IDEuMjM2bC4zNzMgMi4zNzljMy4yMTctLjc2MiA3LjMyNC0xLjE0MyAxMi4zMDItMS4xNDMgNC45NDQgMCA4Ljk3NS4zNzMgMTIuMSAxLjExOGwuNDIzLTIuMzc5em0uNjE4LTEuNDlsMS42MTctMi44NTNjLS43OTYuMzIyLTEuNjA5LjQ3NC0yLjQzLjQ3NC0yLjIxOCAwLTMuOTg4LS44OTctNS4zMDktMi43MDEtLjk5MS44MjEtMi4xIDEuMjM2LTMuMzI3IDEuMjM2LTEuNTgzIDAtMi44NTMtLjYxOC0zLjc5My0xLjg2My0xLjA1OCAxLjE2LTIuMzIgMS43NDQtMy43OTMgMS43NDQtMS4xOTQgMC0yLjI4Ni0uNDA2LTMuMjc3LTEuMjE5LTEuMzg5IDEuNzctMy4xODMgMi42NS01LjM4NSAyLjY1LS44MzggMC0xLjY3Ni0uMTUyLTIuNTA2LS40NjZsMS43MzYgMi45NzJjMy4yMDktLjkyMyA3LjYyLTEuMzg5IDEzLjIyNS0xLjM4OSA1LjcwNiAwIDEwLjExOC40NzQgMTMuMjQyIDEuNDE0em0tMTEuMTEtNS45MjdsLTIuMTA4LTEyLjEzMy0yLjEwOCAxMS45ODljLjA1MS0uMDM0LjE2MS0uMTE5LjM0Ny0uMjU0LjM4MS0uNzQ1Ljk1Ny0xLjExOCAxLjczNi0xLjExOC44NDcgMCAxLjM4OS4zNzIgMS42MzQgMS4xMTguMTAyLjEwMi4yNzEuMjM3LjUuMzk4em02Ljg2Ny40NzR2LTExLjQ4OWwtNC4wODkgMTEuMjYxYy4zMTMtLjExLjU3Ni0uMjYyLjc5Ni0uNDQuMzMtLjQxNS43NzktLjYyNyAxLjMzOC0uNjI3LjY2IDAgMS4xOTQuMjk2IDEuNTkyLjg3Mi4wNDIuMDY4LjEwMi4xMzYuMTY5LjIxMi4wNjguMDc2LjEzNi4xNDQuMTk1LjIxMnptLTEzLjkzNi0uMzQ3bC00LjA2NC0xMS4xNDJ2MTEuMzM3Yy4wNDItLjA2OC4xMTktLjE0NC4yMi0uMjQ1LjMzLS42OTQuODcyLTEuMDQxIDEuNjM0LTEuMDQxLjYyNyAwIDEuMTQzLjI2MiAxLjU0MS43OTYuNDQ5LjE5NS42NjkuMjk2LjY2OS4yOTZ6bS02LjI5OSAxLjM4OWwtNS4zMzQtOS4yMDMgMS4zNjMgOC4zODJjLjk0LjY2IDEuODYzLjk5MSAyLjc1Mi45OTEuMzQ3IDAgLjc1NC0uMDU5IDEuMjE5LS4xNjl6bTIyLjM5NC4xMTljLjM4MS4xMTkuODA0LjE3OCAxLjI3LjE3OCAxLjAxIDAgMS45NDctLjMxMyAyLjgyOC0uOTRsMS4zNjMtOC41ODUtNS40NjEgOS4zNDd6bTEuNDkgMTIuNTU2bC0uNzQ1LTIuODAyYy0zLjI0My0uNzExLTcuMjA1LTEuMDY3LTExLjkwNC0xLjA2Ny00LjY0OCAwLTguNjExLjM1Ni0xMS44NzkgMS4wNjdsLS43NzEgMi44MjhjMy4wNzMtLjkzMSA3LjI5OC0xLjM4OSAxMi42NzUtMS4zODkgNS4yNDEgMCA5LjQ0OS40NDkgMTIuNjI0IDEuMzYzem0tMjMuMDYtMzAuNTE0YzEuMDg0IDAgMS42MzQtLjU0MiAxLjYzNC0xLjYzNCAwLTEuMDkyLS41NS0xLjYzNC0xLjYzNC0xLjYzNC0xLjEwOSAwLTEuNjY4LjU0Mi0xLjY2OCAxLjYzNCAwIDEuMDkyLjU1OSAxLjYzNCAxLjY2OCAxLjYzNHptMjAuODI4IDBjMS4xMDkgMCAxLjY2OC0uNTQyIDEuNjY4LTEuNjM0IDAtMS4wOTItLjU1OS0xLjYzNC0xLjY2OC0xLjYzNC0xLjA4NCAwLTEuNjM0LjU0Mi0xLjYzNCAxLjYzNCAwIDEuMDkyLjU1IDEuNjM0IDEuNjM0IDEuNjM0em0tMjkuOTY0IDIuNzM1YzEuMTA5IDAgMS42NjgtLjU1IDEuNjY4LTEuNjQzIDAtMS4xMDktLjU1OS0xLjY1OS0xLjY2OC0xLjY1OS0xLjA4NCAwLTEuNjM0LjU1LTEuNjM0IDEuNjU5IDAgMS4wOTIuNTUgMS42NDMgMS42MzQgMS42NDN6bTM5LjE0IDBjMS4wOTIgMCAxLjY0Mi0uNTUgMS42NDItMS42NDMgMC0xLjEwOS0uNTUtMS42NTktMS42NDItMS42NTktMS4xMDEgMC0xLjY2LjU1LTEuNjYgMS42NTkgMCAxLjA5Mi41NTkgMS42NDMgMS42NiAxLjY0M3oiLz48L2c+PC9zdmc+");

/***/ }),

/***/ "./src/img/chesspieces/merida-svg/wR.svg":
/*!***********************************************!*\
  !*** ./src/img/chesspieces/merida-svg/wR.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzcuMTciIGhlaWdodD0iMTc3LjE3IiBzaGFwZS1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgaW1hZ2UtcmVuZGVyaW5nPSJvcHRpbWl6ZVF1YWxpdHkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiB2aWV3Qm94PSIwIDAgNTAgNTAiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iMCIgeDE9IjIxLjM3NiIgeDI9Ijc3LjY0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD0iIzFmMWExNyIgZD0ibTI4LjQwOCA5LjIyaDQuMjE2di0zLjM5NWg2Ljc5NnY5LjI5NWwtNS41IDQuMjQzdjExLjg1N2w0LjIyIDQuMjIxdjUuMDhoMy43ODl2NS45MjloLTMzLjg1OXYtNS45MjloMy43OTR2LTUuMDhsNC4yNDYtNC4yMjF2LTExLjg1N2wtNS41MDgtNC4yNDN2LTkuMjk1aDYuNzc0djMuMzk1aDQuMjQydi0zLjM5NWg2Ljc5eiIvPjxwYXRoIGZpbGw9InVybCgjMCkiIGQ9Im0zMy4wNyAxNy42NzhsMy4xNS0yLjU1N2gtMjIuNDJsMy4xNzUgMi41NTdoMTYuMW03LjE5NyAyNC41MjhoLTMwLjUxNHYyLjU1N2gzMC41MTR2LTIuNTU3bS0zLjg0NC01LjA1aC0yMi44MjZ2My4zN2gyMi44MjZ2LTMuMzdtLTQuMjE2LTE3Ljc4OGgtMTQuMzkzdjExLjg2MmgxNC4zOTN2LTExLjg2Mm01LjUwMy01LjkyN3YtNS45MjdoLTMuMzk1djMuMzk1aC03LjY0NXYtMy4zOTVoLTMuMzQ0djMuMzk1aC03LjYydi0zLjM5NWgtMy4zOTV2NS45MjdoMjUuNG0tMS45MTMgMjJsLTIuNTQ4LTIuNTMyaC0xNi40NTFsLTIuNTk5IDIuNTMyaDIxLjU5OCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/img/chesspieces/uscf/bB.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/uscf/bB.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/uscf/bK.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/uscf/bK.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/uscf/bN.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/uscf/bN.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/uscf/bP.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/uscf/bP.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAEx0lEQVR42u2bW2gcVRjHz+7OffY2e5nJJtnd2WySTdOmtNukpKbdZpMmtmowKohFEPShFtkYhcaUtoilD0JFBN989EGKUcQ3H/paEdQnfRCMWB+ktNALSKGN0R2/s90JW2ltZnZizuScP3zs7Cw7O/z2O+e7zDkIMTExMTExMTExMW2y8ma+8Xrm7KlIzsw9FY1Fa7F4rIaP3//wvII/K20rMVAP0/hkJZxMJT8JBoMWvMVWb5qFzxkdxsfPPf9MmJF6gGRFTrSAe6iFQiFscUasKfAq1J3rjjwKXKsFAgGrK9sV0Tt0BhAL5rmv7KG6TqvD/PglIweqVPf3O/G+VpucrvazyFswZ90CNHsa36Vbxd7CvMPhuzaMzUJ+jnqAuXx2h1sPzGQy02wSBGla/K5TLwwGgtbM7JNZ6uHhykIQhD6n3qfr6XeY64HOf/AuCofDGk6Q1wsPgFuMHGji0HhaFMWf4fBvp0OY47gf/1i9JVIF7ImZI2vHalj9zm3waLEVVVW/2bd/tGpfd3J6YktXHEdlWf4WvMfyAN59JkniHUmWvud5/oUtAwzytMarbujnJEm63dJhsTbIGtfmBb6uadqFF186GvE5QLMAHvfLBgL7T5hciLNSegon6uiNhXl/wevMdmbdBIeNMBjW/mk8gMehwzOHcfd4lQR4a4l3MHgR31+hxyQXnm6k7cOrJMGzDeAdI94DOzLGPGngWgLMn3B/HMGNge5QIBBYJdH7bNs7OlIlFuChxyfLpIKzzTD0r4kFmEwlPyccYF0QCa6jI5GIRfLwbTFiU5gr8PKbC3MTta+6+S2Yo6+Q6X1R91XTjqHtB516UbG3eND1H63IW6vJ0FfqnXIKMG/mp1hD0AY40OcCYI4BtNU/0M8AtgVwm3OAZsFkAG2l9dRxpwB1Qz/ByIFqb9bEZnLryERJtJ5+dlaiHmAimTjrMvmux2LRc9QDVFTFdUXR/C69isVjr7dblmkJjd65kOf5H9qsneuSJC1TCa8yXnnMq+ZAebg8QRW83Xt24cbDEvLuodHSwOAAXR4oCMLvXgEURfEadUPYyWIi9OgnbnRF4+1DgzXkcZO0q7vzNWoAQhn2ntcAc/ncBYpq3/Qy8rj1DzklPelMXIsve+2BalilB2Cxt+eS1wDNHvMnagCWBkueB5F8IV+jKhJzHLfiFTxIif6iCl6mM4PS6dQian/BZR1vPEwkE6eprIch9Zhr1/sKRXOR2m7MyN7harsAh0f2VKkFCPNgFQ/BdgDKskwHwFeOvfyg0wc8CCIH1vlb/lI2d28b26m3T+rRWOQEJM+XIVpiuwWnGwbet+JBELlrXw9fG95fhqrkV1VV31o8vWC03gvxsje5wI0nFUX+jOf5G+hfWxDQ/7ca1d4WdkOSpE9PnllI4Xtr3exDlCT53hNG+PeJXSOoaRpu4ra1EGrDdHzuVQWCwnVE+NpAQRSuk9aaQmOVMR4ObyJ/LK7E8+bNnbt38sRseVBU5SOfwFuDCEHtCyJSk6FdQ2UfgbvPUulUed/Y6OZCjEajiz4FWNf19BIJI/iiXz0wHo9v/sMoSFssvwJslpGbK0iWfQsQkbDlAZLSKcj0q340WZbZKlcmJiYmJiYmWvUP+HBgWWGVo7EAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/img/chesspieces/uscf/bQ.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/uscf/bQ.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/uscf/bR.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/uscf/bR.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAADf0lEQVR42u2b0UvbQBzH0+QiXaxBUBHaOdqmrVZNWoUynXO04JiCYw/+D2UMnMoK/QP2uMeN9Wl/huKDD/4Be/Fh78LYw2AM3wfNcjF2aWiTOmp6F79f+HHXmP783id35sxdBAGCIAiCIOh+Sh6Tv8gy+dgvJFFqFYqFsl+O4tJCVpLET72+T4hTH5M7dSKTz5lsJumXk/5OiUitfr7sXJZ3FhiaQZEr5Pb8EiwuFzcHydOdUyv55dTy2t6AuUarWCxm+gU1qWnZIIDP6HlBubpy5rOGX07nog2Si32Aubx/Dyz+D8CcP0Dnot0PgEvLi5tDB+gM4UgADBrCd9EDnYsWDYAZLdMyykZdL+t1b1laKdXni/MfbguwsFB438m1Ytj5aC4a9FhGS7ciAdCK9iB3Q3reoACHmZMHgEwHAAIgAAIgAI74f2GO4Y0e4Gpl9RWPEKlny/tLJh5pGWV9hyeI1KvjmR2VVoytfpPX2z6qGlb0m4A7XtlT5XGl6oVIP5+fn5thq9lseiHa8ByP7OrJxvrGjeEbgMfHxz0b2W637fAec5f91Os8d/3w8NAN0Pay/nRtnflH/IX5vFBZq5TdPfDk5CQQyLDlAWhST9QbN1IU5TKoB4YFUBlXLrlbbPICdA9X79D1DkfveX7H+/2sC6DCOcDZ2VkznU6HGqqqRgMgCwGAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAABjGolIikTAnJydDjXg8Hp1VudPT09DXhY+OjqIDkO5MGGS7ht8WDr964MI6jwAJIVes7EygXriANjU9ZZeyLP+4MS8wsDeGlo6njkfmlEql7NL64/1TcG3qofWzs7PQe2Cj0TC9PhxvHa/MKJ/P2aWqqr8Ez8ZG+lk3dLNaq5rVanfUajU73HV39Dru91137rlHc2YvL45H+josG/D0ki7sNw/EmZnp37d8XWtU0Z62vO6/OxCNss4GxGQqecUJvA7E1MMkOzcWSZK426VPiGQyA1AU+XtHhHpmY8I8rlwInL4noigPLkYC7c3b19dDl0hfBc7fVCLXbei06c71fHtLsKZZMWti+o1neG6ItC20TbRtoWhCnfgTBXhuiE6bwrppiJGB9++mIpoACIAACIAACIAACIAAGDiR/p6YSFxGKWibQoG3vftCiKp2drcFCIIgCApNfwHBkZUbj586ygAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/img/chesspieces/uscf/wB.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/uscf/wB.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/uscf/wK.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/uscf/wK.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/uscf/wN.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/uscf/wN.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/uscf/wP.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/uscf/wP.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/uscf/wQ.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/uscf/wQ.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/uscf/wR.png":
/*!*****************************************!*\
  !*** ./src/img/chesspieces/uscf/wR.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAFc0lEQVR42u1czU8bRxRfsLHxd1OqQEuAQMAmFIwpH6FpuUAaW3ZVVaK0SdWqBiQurXqoeqBXeugJIb4aCYUD19gSGBdx5t5L/wCMFdFKqcCK1AMSH97OW3vWs6sFG4LsWfN+0tPMzr735u3PbzzjnV0LAgKBQCAQCMTNhNFoXK2qqlok5SKU6jqRZ0TNd5GPe63NjcRmWcue1tk2g8GwfLe5qT5PaD7om4lD4TPrb5UHDsUCZPQiB63u1gcF+pGluaWpO09cowX6upkEtrS2fFBWBJLhIMb/iIuxWEyMbcZET7uncALblARubGyIm5ubGV9EoL6+vq7MwHvNPYUS2NfXJ8bjcckHlBArdwSazWaRxeDg4JUz8OzsTFQD2lQZWDCBwWBQ8pFOp6XSYrGUN4HsxZ5HYPMVCKSAWHVF4Ns1t551+7xTvp7uKVrm6t6pNnfbb2oC1QBCWR23u/VXsGf9sX5vkT6pbigUUviqrq7mj0AYFucQmC7wy1zWU2cf4PT0VFO3EJ9qAnWRgQMDA5eaVfNloHoIX0YCgQD/GagmMBKJiEtLS7IsLi4qSnV9+ffM8cLCgubwBczPzzO2pFxeUvShJeATZl7dEfgm0BrCWm1XBZezMHyqeoEuljG8gc1gLicRkLGxsWsfbtcJmIiGh4f5+inX1d0ZZgPy+/3ckUhj6e3tVZDnue/+iItbWp1d73/JBjYyMsINiRADSE9Pj4K8xqbGfq7uC3p9XV+wi9dHnzwqOYnQ99HRkdjR0aFYWNffqe8WeETfg75RNtChoSHxMHUoHh7m5ODgQBa2nT2nblfbaepk+0mlUuLBYUZnf39fbGhoUJDndDpbuL5D/eHHg6FL/twqhtBY3uP+Fn+nt1N4OPTQzxF5VOp0tVditVqTNHiDwSDdxIT1FwjUTSaTom4yVck6tE0qzRk9ekzPS23mXBs9T22hT/lGh9WS1N1mE1ntywTOzs6KJ6cn4slJkYT0BX3qm0BrjsC5ubmiz8DQJ3OrDQl8IwIxA29iBlowAzEDkcAyWcZgBuJ3IH4HYgbiJIIE4iyMkwhmIBKIBCKBSCASiMsYzEDMQMzAMltIX/cjIGWVgdK25gXbkMfHx9e+tVlW25rsxjrd/D5PWJ3MhrtJ85xi853RoaLYWNdjBhqNhtcCJ491VFZWvtYFabV1tVJJMuBv9gIgG8hFaAp7Tq13kV0+e6PRKKpigJgEl8vFJ3lNd5vo5PGKBj0eHi/5A5bhcFgmkQx1iE2oeaeGL/La73uk0vWW64AGOzk5yc2jvRALM6FAjEL9HU6edPP6vMJPv/xsuF17OyVkn8ObmJjg7vloiClLYtrlcqa+Gw9Xeto9fJBY927dLiXv6ddPuX3V4cmTr2QSyQfOz8TCLhm2t7e5JRBiEzh7W11CRUUFEnhV2Oy2v2hAP/z4Pbcv2tCYpqen2fUhxC58O/5NqRbLxj9pMDMzM1y/pcTGtrKyIpNIft3svfrvH0t/f5FeG/l89DNalcmDV0p5J09NIvsnFmTtevQ4+NhatEU26fBf2vnz1ee6IU+NnZ0deVYmoyldkkkDXmzRM+h1ZK+p+ATC20FIIBKIBJYdgXRSKWRyUeucd8y25/Obr3/aXnIC19bWpH/oeBF5IUaiEUmgHo1GJYFzVOTjaES2kewiORvZF2MnC2PH+lT0E41o2so20ZzN1tZW6QksF0EC9USg0+l8abPZkkQSdoc9SX4P75H6brZM2knpcNihvme3k9JuSzgcjj3pfEbAJgF1e0ZvN6ufJHoZXWpry/rK2UrHsn9S2sGXTTqXoHFlfSRyNg5aJqjvjK3spzgbT8FPA0K5IhDyCwgEAoFAFA3/AxxZoH+S2WUzAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/img/chesspieces/wikipedia/bB.png":
/*!**********************************************!*\
  !*** ./src/img/chesspieces/wikipedia/bB.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAFRElEQVR42u1cXWgcVRS+abNSddXqKlYbsUjVrEJVuhUV7a+tmNj6ooLSSkJjIK4gaB7FJC9B64P4kDzUtyxqKJG2UDAtlQURBCmWPlRttVSr4k9M2zSJbkgy13N2v4k328l0ZndmN3P3fvDB7Mydc8583P85s0IYGBgYGBgYGBgYLB5cR9xI7CS+SdyAcwYe8ALxJFEW8SSuGbjgNeKsIpoF2r/5WtrI5IwHiKOKcMU10D7HZdYYuS7HnqLatxBnUdagCIc8iGfzkJFrPq4iHvYh4DAxZmSbj4wPATNGrsuxi5hbYABRB5J/iTuNXO79oNsobPo/F9xE/MulBv5JvNHI5IwdxB+JMy4C8rXTxGeMXP/jduI+h6YqXZqxxD231bJwMQwcox7FcyrzN2zU15p4ceJen8K5CbkXNmum5g2XKZ7TvZ/VwuR6ibLiKEe4hYQ8DB9aYinx4xDEKxbxI11FfNuPeIlEQg4MDOTJxz5FfEs38R4jnvdTo1paWuTU1FSefOxTQB7ZH9VFvKuJB/w23XQ6PScgH5fQlPfDd+TxRCl9Wnt7+5yAfFxiv/i4DgJ+6aX2cT/X2toqOzo6ZFtbmxwcHJTT09N58jGf42tcxkOfaPv6Iuri3eG1tmQymbkal8vl8sJZlpUnH/M5+zqX9VELG6IsYOciELAzygIe9fqgATdhlUeiLODvpU6MAxpEJGKIJK7HfKykVUcZ05jiwYRjiGRayK1+J88BTKSdyDHcEtUtq/Ol1sASl3JONZBjuDaqzfjXEDYN/PKXKA8i+xeBgJ9GWcCdIW5feV2NvBRlAfldxWQVRLR9TWAfMtJIV1HAV3XYTOA52OcVFNH2cVRolBbMCZFnlQe04vF4fnoSBNmWmJ/NelZomIS5kXicH7ChocHKZrP5jYJywTbYFtuEeN+IQlK6lriZRUylUnJsbEwGBbbFNiFeQmiM57mW1NXVyaamJtnV1SW7u7vLIttgW2wTNfA5XcW7D9OKMAcSCz6SuonH88EDFRiJ1RdKWuXLPCzc8/6CJucRrtNJwF1VWMq9rIt4MersP8Coa8nwYbGvnp6e94UOyUbNzc3xoaGhr2SFwT7Ztw41cHljY+NIb2+v7O/vl319faGSfbCvZDLJfe5yHQS8gfhzfX29jMViFSH7Yp/wHXlcI8LJCbzSVGYYviMPztXrEMFkpPrJWOWtrDpdRmLOknqdOB6SkKqtS8Q3hIY500uw0H9PFD7XkiK4JHNmDrYTQuM0X1VM3ljgFz5/YP0640O8GdzD9w5hAyHyovHu7wrincTVxHuxqL8fm5sPEteKQuboenAT8UVRyJ0e9SHgKO7hezdj/289bK+FrzXwnUQsqxHbisWyU72KuBvN5iAxS/yaeIL4LfEU8QfiGeJPxHPE34gjxDE0OVlCU3Yqk4PNEfg4B59nEMMpxHQCMWaxucGxP1tp4biP2aeIMCuCGwAqea/99wH/iMI/gjxVkZWZErQlqvO+N8ypzydhTr5bKjSXq5aI6gupR4IWjxPFL2gq3kKfSWwOcjf5nRoQr1jEd4Pc1eYPnCev0BnnUGYcqwGV4+AEOKlwQrnnoih8wsofVX8oCq9CN+H4NK5dVGw62ZpQ/DnFMelh8OMyTwfdjFuJxzBqzSKY70ThPwz4j3BeIW7HfCxFfAhMYX7Gc7UtxG3EJoVb0UVwubuIy1xiWIYyKdyztcjWNvjYAJ9qHOsQ2w7Eugexf49nsUfkY+jvQ8FK4pMYjblm3C2inbzDsd+DZ2nGs60UBgYGBgYGBgYGBgbh4j9wZbBvRaSd0wAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/img/chesspieces/wikipedia/bK.png":
/*!**********************************************!*\
  !*** ./src/img/chesspieces/wikipedia/bK.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/wikipedia/bN.png":
/*!**********************************************!*\
  !*** ./src/img/chesspieces/wikipedia/bN.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/wikipedia/bP.png":
/*!**********************************************!*\
  !*** ./src/img/chesspieces/wikipedia/bP.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAC0ElEQVR42u2cPWgUQRSAP82PRjQSBUHTWamgIIiiEkWtAgo2goggKWxEQ4SoCGJiIYrVlYKiKAEbG8EUFlbaBBQ7f2JjoyCRIMZfojcWc0uWMTHJ3k7yZuZ98Jrj2Fu+ezv3Zt7jQFEURVEURVEURVEURVGUgiwGzgJDwAjwCXgDXAPaVc/ULAC6gHHA1KJaC5OLPqBJdf0rr98RZ5zIv/YAWK7aJuiaRt5kIm9qJk6seeMzlJeP78Be1QfnCsjL3lvRLLS/tqZgvACWpS5wZJbZl49vQJsKVIF18bKOR/g10Jq6wMsFxOVLmebUBbYWzL5fQKcWMXCpjkf4durbt0qBGtDdIw8CjSkK7K0j89y18H5qBfX2gtu3/0nsS0ng25Lk5eMdsDEFeYc8yMuudR5YGLvApyWKcwU+B5bGLG8F8Lnk7HMj6mP/fcBXTwKzax6MWeBR4IfH7DPA6ZgFHgd+ehZ4MWaBh7FH8T4FnoxZ4Fbgiydx2Rq4K2aBDcBHj9n3mwQOWO95LKQfAi2xC9zgQWAWx1LZC9/1IPEZsCoVgW3A+xLljdX22EnRie2qlSHwSmryVgMDJQocBDpSkbffOVAo60B1DOiOXV4PU8/9lSHRYAcxG2KU1wv88VhE57+UO8CSmOSdqu0SfNV/k2XjDWBRLGuemSN5bvRg26fB0o7/E+jp1sRNocprwvZr5yPz8p85TKDzMwfm4PB0NpOsQdECPJ7H7HNjFFgfksAOQfKy+7geksAnwgQa4BWwNgR56wRJc+NICAIrArMvu5eBEIrrD4IzcBThPZPN2K5bVaC87J62SRbYjZ1dNoIFXpUs8JbgxzeLIanymoFHAQisShW4BtsZky7P1FoKIuu/4QAy0AA7JQrcIryEEV9Q78D+QUQIAk9IFLgbf5NXZccZiQL3YFuLIQi8IFFgI3aIfGUAEf0El6IoiqIoiuKfv3U5xct5ETXIAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/img/chesspieces/wikipedia/bQ.png":
/*!**********************************************!*\
  !*** ./src/img/chesspieces/wikipedia/bQ.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/wikipedia/bR.png":
/*!**********************************************!*\
  !*** ./src/img/chesspieces/wikipedia/bR.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAACs0lEQVR42u2bMWtaURiGL60V4YoUmiXQP+Av6OAgKrQdLk6aTB2cpLFjp0JQsNLuIhmyZe2ge8ChuuYHNKtTYoYsYtPiOT3f7Se9SiNcTa7fkfeBlxuI537vfTQSk3scBwAAAAAAAAAAAADYyQuTisn7e3Jksr/B+nkq/Nj72OdZ667fGmcmdyvy2+Ryg/XBnK04zyXPWnf9Vkia9E30iig+rrs+mD6v+R/BWeusFytQBwQmA3H5x24QQuCA17hL53Ie4AkQL/CcHxsMCbkNIfCW1yyf53zXBaoNv/9Q57D6FSghEAiBEPiPWCzm2iaQO4vhued536fTqZYOdaSu1FmSwKelUum02+3qfr9PUXyUFL9Tr9fT5XL5lDpL+zSyl0qlvrquq5PJJEXxUUL8LtTNdPwi7rNwPB6ff/nE5CDk72SPnWCHA+4Y7CyS1yZXVLpYLKpWq6UbjUakoZk0m8VdcSereGXyYzQa+W/es9ks0hA0mzpwFyv5nE6ndaFQ0LlcLtLQTJpNHWz+I+uxgPfAYwiEQAiEQAiEQAiEQAiEQAiEQAiEQAiEQAiEQAiEQAiEQAiEwEfmUz6f181mU9fr9UhDM2k2dbBZ4GAymfj/YlRKRRqCZjt/72S1kncmvzKZjKrVarparUYamkmzqQN3sYo9kwtHzu1sF9zJCl6afGu323o8HosIdaFO3E081/SsdzodZcorAQIVdeFX4rUNAqXclRVmo484gZIDgRAIgasFJhIJLej2Xj/USaLAt87i3txKNpvVw+FQ2g3mfifq5izuST7ia9gKb0xunMV9uD89zxO7xYG6Ucelzjd8LZHzgQtoy3PH1xI5tR0SWINACIRACAzJ4Q7Im+dwGwJpv+1HkxOTjqU54WvY2t5h2ndGm86eWZo4XwMAAAAAAACh+APSjxzHQG+afwAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/img/chesspieces/wikipedia/wB.png":
/*!**********************************************!*\
  !*** ./src/img/chesspieces/wikipedia/wB.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/wikipedia/wK.png":
/*!**********************************************!*\
  !*** ./src/img/chesspieces/wikipedia/wK.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/wikipedia/wN.png":
/*!**********************************************!*\
  !*** ./src/img/chesspieces/wikipedia/wN.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/wikipedia/wP.png":
/*!**********************************************!*\
  !*** ./src/img/chesspieces/wikipedia/wP.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/wikipedia/wQ.png":
/*!**********************************************!*\
  !*** ./src/img/chesspieces/wikipedia/wQ.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/img/chesspieces/wikipedia/wR.png":
/*!**********************************************!*\
  !*** ./src/img/chesspieces/wikipedia/wR.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAEEElEQVR42u1bv0sjQRhdIwloklNMLIRg4T9hKWJxZ21x1RVidea0ukoQFbEWD6OndoLFIRbW0ShaimBt4R+gIqIW+QH5bt7ejE6WJP7CnZnje/DIkt1v3pvn7sZN5vM8BoPBYDAYDAaDwWAwGAyGm0gJjgp+b8BxwZ531CuOymMboUdqvbXeGDYFS01YETx/R73OzSbjnEutt9YbQUKwIEhgNBqlWCzmv4ItLS14vyr3v7pebav98thEg7F8LWi+sd5sgO3t7bS0tEQrKyuUy+X87f7+ft28Ol4xLi+743r1ILbxHvbJMY5lTTwwlgrQ10RNg3p7A0ylUhTE5OSkHmBeHqsTgdw2qlfAPjnGrawJjpNXOtBsUm9vgF1dXVSpVB5Nl0olmpiYUMarWpD1WO3o6GgYIPa9ZAy8QhPaCvAEb84FCOTzecpkMv4+nAWNiIBmZ2f9mmq1+livtrEPxzQbAxrQgqYOZwPUg3gp6tW8dxynA3zN5Jsd+9pxXAow3uxDxBYEPkTiNgXYIXj0zM3dJh5Jz1bht/4p2NfXR0NDQzQ4OGiU8AAvgf8Cftn6LPxHGe3t7aWTkxMqFot0d3dH9/f3oRKa0IYHeNHCg8dPtn6hEBHcUiF2dnbSxcWFsXsetOFBC29LerQaEe1M9CdwdnZGNzc3dHV1FQqhBU0ZHmlnnvXhKSQFt/X7Tjwep0QiEQqhFbjnbUtPTiGhnk3T6TQtLi5SoVCg/f39DyU0oAVN7dk74TmKGUwCZ8XBwUFo9z5oQVMGOOPyt9TTKkCcGWEBWlqA0xwgB8gBcoAcIAfIAXKAHCAHyAFygBwgB8gBcoAcIAfIAXKATgVo8Btp9wPEwsa9vb3QAoSWtpjS6QCn5CSora2NkslkKISW9/Rz5pTLAT4u2x0bG6O5uTl/jd9HEhrQ0kI8djW8b4JlwerAwAA9PDyEdglDC5rev9+Fy9KLU0gLnqpL9/DwMPRlHdDUzsJT6ckJZLynVQnU3d1NCwsLH37pBglNaGv3wm3pzXpcek/LKp5bEB4GdR+XLgRIlgRXd/W+KwHS8PAw7ezs0O7urlHCA7x4tY0+9geYzWapXC4bXxcND/DiZIB6o4spwIOTAdZrtTKFQKuZVfji1fbmjnp1mv1Msk6zo96TPC7nYASfBa+92j7cojKqt5uapmy3VSwGPF/LuYSOH9IARSKRmv7e1tZWK6n3D8OzDLQk5xI6shCHkZGREVpfX/cvmeXlZZqfn/cf6m0iPMEbPMIrPMsQS3IuZgLEX3RtbY1cAzzLLnazAeJy2NjYcC5AeIZ34wF67vTHNaKxAL/+B+EpfjURIHovfgquCuYc5aqcg7E+ErROxQSjjjLmOdT+xWAwGAwGg8GwB38BOndQ3xYeBEYAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: pgnBoard, pgnEdit, pgnBase, pgnPrint, pgnView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgnBoard", function() { return pgnBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgnEdit", function() { return pgnEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgnPrint", function() { return pgnPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pgnView", function() { return pgnView; });
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pgnvjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pgnvjs */ "./src/pgnvjs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pgnBase", function() { return _pgnvjs__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _css_chessground_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/chessground.css */ "./src/css/chessground.css");
/* harmony import */ var _css_chessground_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_chessground_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/theme.css */ "./src/css/theme.css");
/* harmony import */ var _css_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_pgnvjs_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/pgnvjs.css */ "./src/css/pgnvjs.css");
/* harmony import */ var _css_pgnvjs_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_pgnvjs_css__WEBPACK_IMPORTED_MODULE_4__);






// kick off the polyfill!
smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default.a.polyfill()

// Users of PgnViewerJS may redefine some defaults by defining globally the var `PgnBaseDefaults.
// This will be merged then with the defaults defined by the app itself.
if (window && !window.PgnBaseDefaults) {
    window.PgnBaseDefaults = {}
}

/**
 * Defines the utility function just to display the board including the moves
 * read-only. It allows to play through the game, but not to change or adapt it.
 * @param boardId the unique ID per HTML page
 * @param configuration the configuration for chess, board and pgn.
 *      See the configuration of `pgnBoard` for the board configuration. Relevant for pgn is:
 *   pgn: the pgn as single string, or empty string (default)
 * @returns {{base}} base: all utility functions available, board: reference to Chessground
 */
let pgnView = function (boardId, configuration) {
    let base = Object(_pgnvjs__WEBPACK_IMPORTED_MODULE_1__["default"])(boardId, Object.assign({mode: 'view'}, configuration))
    base.generateHTML()
    let board = base.generateBoard()
    base.generateMoves()
    return {base, board}
}

/**
 * Defines a utility function just to display a board (only). There are some similar
 * parameters to `pgnView`, but some are not necessary.
 * @param boardId needed for the inclusion of the board itself
 * @param configuration object with the attributes:
 *  position: 'start' or FEN string
 *  orientation: 'black' or 'white' (default)
 *  showCoords: false or true (default)
 *  pieceStyle: some of alpha, uscf, wikipedia (from chessboardjs) or
 *              merida-svg (default), case, leipzip, maya, condal (from ChessTempo)
 *              or chesscom (from chess.com) (as string)
 *  pieceTheme: allows to adapt the path to the pieces, default is 'img/chesspieces/alpha/{piece}.png'
 *          Normally not changed by clients
 *  theme: (only CSS related) some of zeit, blue, chesscom, ... (as string)
 */
let pgnBoard = function (boardId, configuration) {
    let base = Object(_pgnvjs__WEBPACK_IMPORTED_MODULE_1__["default"])(boardId, Object.assign({headers: false, mode: 'board'}, configuration))
    base.generateHTML()
    let board = base.generateBoard()
    return { base, board }
}

/**
 * Defines a utility function to get a full-fledged editor for PGN. Allows
 * to make moves, play forward and backward, try variations, ...
 * This functionality should sit on top of the normal pgnView functionality,
 * and should allow to "use" in some way the generated PGN at the end.
 * @param boardId the unique ID of the board (per HTML pagew)
 * @param configuration the configuration of everything. See pgnBoard and
 *      pgnView for some of the parameters. Additional parameters could be:
 *    allowVariants: false or true (default)
 *    allowComments: false or true (default)
 *    allowAnnotations: false or true (default)
 */
let pgnEdit = function (boardId, configuration) {
    let base = Object(_pgnvjs__WEBPACK_IMPORTED_MODULE_1__["default"])(boardId, Object.assign(
        {
            showFen: true, mode: 'edit',
            movable: {
                free: false,
                events: {
                    after: function (orig, dest, meta) {
                        base.onSnapEnd(orig, dest, meta)
                    }
                }
            },
            viewOnly: false
        },
        configuration))
    base.generateHTML()
    let board = base.generateBoard()
    base.generateMoves()
    return {base, board}
}

/**
 * Defines a utility function to get a printable version of a game, enriched
 * by diagrams, comments, ... Does  not allow to replay the game (no buttons),
 * disables all editing functionality.
 * @param boardId the unique ID of the board (per HTML page)
 * @param configuration the configuration, mainly here the board style and position.
 * Rest will be ignored.
 */
let pgnPrint = function (boardId, configuration) {
    let base = Object(_pgnvjs__WEBPACK_IMPORTED_MODULE_1__["default"])(boardId, Object.assign({showCoords: false, mode: 'print'}, configuration))
    base.generateHTML()
    base.generateMoves(null)
    return base
}



/***/ }),

/***/ "./src/locales/cs.js":
/*!***************************!*\
  !*** ./src/locales/cs.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let cs = {
    "values": {
        "buttons:flipper" : "Flip po stranách desky",
        "buttons:first" : "Jít na první tah",
        "buttons:prev" : "Přejít na předchozí tah",
        "buttons:next" : "Přejít na další tah",
        "buttons:play" : "Přehrát / zastavit přehrávání všech tahů",
        "buttons:last" : "Přejít na poslední tah",
        "buttons:deleteVar" : "smazat variaci",
        "buttons:promoteVar" : "podporovat změnu",
        "buttons:deleteMoves" : "Odstranit odpočinku pohyby odtud",
        "buttons:nags" : "NAGs menu",
        "buttons:pgn" : "Zobrazení PGN z aktuální hry",
        "buttons:hidePGN" : "Skrýt zobrazené PGN",
        "chess:q": "D",
        "chess:k": "K",
        "chess:r": "V",
        "chess:b": "S",
        "chess:n": "J",
        "chess:Q": "D",
        "chess:K": "K",
        "chess:R": "V",
        "chess:B": "S",
        "chess:N": "J"
    }
}

/* harmony default export */ __webpack_exports__["default"] = (cs);

/***/ }),

/***/ "./src/locales/da.js":
/*!***************************!*\
  !*** ./src/locales/da.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let da = {
    "values": {
        "buttons:flipper" : "Flip siderne af brættet",
        "buttons:first" : "Gå til første skridt",
        "buttons:prev" : "Gå til forrige træk",
        "buttons:next" : "Gå til næste træk",
        "buttons:play" : "Afspil / stoppe med at spille alle bevægelser",
        "buttons:last" : "Gå til sidste træk",
        "buttons:deleteVar" : "Slet variation",
        "buttons:promoteVar" : "Fremme variation",
        "buttons:deleteMoves" : "Slet resten bevæger sig fra her",
        "buttons:nags" : "NAGs menu",
        "buttons:pgn" : "Visning PGN af aktuelle spil",
        "buttons:hidePGN" : "Skjul den viste PGN",
        "chess:q": "D",
        "chess:k": "K",
        "chess:r": "T",
        "chess:b": "L",
        "chess:n": "S",
        "chess:Q": "D",
        "chess:K": "K",
        "chess:R": "T",
        "chess:B": "L",
        "chess:N": "S"
    }
}

/* harmony default export */ __webpack_exports__["default"] = (da);

/***/ }),

/***/ "./src/locales/de.js":
/*!***************************!*\
  !*** ./src/locales/de.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let de = {
  "values": {
    "chess:q": "D",
    "chess:k": "K",
    "chess:r": "T",
    "chess:b": "L",
    "chess:n": "S",
    "chess:Q": "D",
    "chess:K": "K",
    "chess:R": "T",
    "chess:B": "L",
    "chess:N": "S",
    "buttons:flipper": "Tausche die Seiten",
    "buttons:first": "Gehe zum ersten Zug",
    "buttons:prev": "Gehe einen Zug zurück",
    "buttons:next": "Nächster Zug",
    "buttons:play": "Spiele alle Züge",
    "buttons:last": "Gehe ans Ende des Spiels",
    "buttons:deleteVar": "Lösche Variante",
    "buttons:promoteVar": "Werte Variante auf",
    "buttons:deleteMoves": "Lösche die restlichen Züge von hier",
    "buttons:nags": "NAGs Menü",
    "buttons:pgn": "Zeige die PGN Notation an",
    "buttons:hidePGN": "Ausblenden des angezeigten PGN",
    "nag:$1": "Starker Zug",
    "nag:$1_menu": "Guter Zug",
    "nag:$2": "Ein Fehler",
    "nag:$2_menu": "Fehler",
    "nag:$3": "Sehr starker Zug",
    "nag:$3_menu": "Sehr guter Zug",
    "nag:$4": "Ein grober Fehler",
    "nag:$4_menu": "Grober Fehler",
    "nag:$5": "Interessanter Zug",
    "nag:$5_menu": "Interessanter Zug",
    "nag:$6": "Zweifelhafter Zug",
    "nag:$6_menu": "Zweifelhafter Zug",
    "nag:$7": "Erzwungener Zug",
    "nag:$7_menu": "Erzwungener Zug",
    "nag:$8": "Einziger Zug",
    "nag:$8_menu": "Einziger Zug",
    "nag:$9": "Schlechtester Zug",
    "nag:$10": "Ausgeglichene Stellung",
    "nag:$10_menu": "Ausgeglichene Stellung",
    "nag:$11": "Ausgeglichene ruhige Stellung",
    "nag:$12": "Ausgeglichene aktive Stellung",
    "nag:$13": "Unklar",
    "nag:$13_menu": "Unklar",
    "nag:$14": "Weiß steht etwas besser",
    "nag:$14_menu": "Weiß steht etwas besser",
    "nag:$15": "Schwarz steht etwas besser",
    "nag:$15_menu": "Schwarz steht etwas besser",
    "nag:$16": "Weiß steht besser",
    "nag:$16_menu": "Weiß steht besser",
    "nag:$17": "Schwarz steht besser",
    "nag:$17_menu": "Schwarz steht besser",
    "nag:$18": "Weiß hat entscheidenden Vorteil",
    "nag:$18_menu": "Weiß gewinnt",
    "nag:$19": "Schwarz hat entscheidenden Vorteil",
    "nag:$19_menu": "Schwarz gewinnt",
    "nag:$20": "Weiß steht auf Gewinn.",
    "nag:$21": "Schwarz steht auf Gewinn.",
    "nag:$22": "Zugzwang Weiß",
    "nag:$22_menu": "Zugzwang",
    "nag:$23": "Zugzwang Schwarz",
    "nag:$24": "Weiß hat Raumvorteil",
    "nag:$24_menu": "Raumvorteil",
    "nag:$25": "Schwarz hat Raumvorteil",
    "nag:$26": "Weiß hat großen Raumvorteil",
    "nag:$27": "Schwarz hat großen Raumvorteil",
    "nag:$28": "Weiß hat entscheidenden Raumvorteil",
    "nag:$29": "Schwarz hat entscheidenden Raumvorteil",
    "nag:$30": "Weiß hat leichten Entwicklungsvorteil",
    "nag:$31": "Schwarz hat leichten Entwicklungsvorteil",
    "nag:$32": "Weiß hat moderaten Entwicklungsvorteil",
    "nag:$32_menu": "Entwicklungsvorteil",
    "nag:$33": "Schwarz hat moderaten Entwicklungsvorteil",
    "nag:$34": "Weiß hat entscheidenden Entwiclungsvorteil",
    "nag:$35": "Schwarz hat entscheidenden Entwiclungsvorteil",
    "nag:$36": "Weiß hat die Initiative",
    "nag:$36_menu": "Initiative",
    "nag:$37": "Schwarz hat die Initiative",
    "nag:$38": "Weiß hat entscheidende Initiative",
    "nag:$39": "Schwarz hat entscheidende Initiative",
    "nag:$40": "Weiß hat Angriff",
    "nag:$40_menu": "Angriffsvorteil",
    "nag:$41": "Schwarz hat Angriff",
    "nag:$42": "Weiß hat ungenügende Kompensation für das verlorene Material",
    "nag:$43": "Schwarz hat ungenügende Kompensation für das verlorene Material",
    "nag:$44": "Weiß hat genügende Kompensation für das verlorene Material",
    "nag:$44_menu": "Mit Kompensation",
    "nag:$45": "Schwarz hat genügende Kompensation für das verlorene Material",
    "nag:$46": "Weiß hat mehr als genügende Kompensation für das verlorene Material",
    "nag:$47": "Schwarz hat mehr als genügende Kompensation für das verlorene Material",
    "nag:$132_menu": "Gegenspiel",
    "nag:$136_menu": "Zeitnot",
    "nag:$140_menu": "Mit der Idee",
    "nag:$146_menu": "Neuheit"
  }
}

/* harmony default export */ __webpack_exports__["default"] = (de);

/***/ }),

/***/ "./src/locales/en.js":
/*!***************************!*\
  !*** ./src/locales/en.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let en = {
  "values": {
    "chess:q": "Q",
    "chess:k": "K",
    "chess:r": "R",
    "chess:b": "B",
    "chess:n": "N",
    "chess:Q": "Q",
    "chess:K": "K",
    "chess:R": "R",
    "chess:B": "B",
    "chess:N": "N",
    "buttons:flipper": "Flip the sides of the board",
    "buttons:first": "Go to first move",
    "buttons:prev": "Go to previous move",
    "buttons:next": "Go to next move",
    "buttons:play": "Play / stop playing all moves",
    "buttons:last": "Go to last move",
    "buttons:deleteVar": "Delete variation",
    "buttons:promoteVar": "Promote variation",
    "buttons:deleteMoves": "Delete rest moves from here",
    "buttons:nags": "NAGs menu",
    "buttons:pgn": "Display PGN of current game",
    "buttons:hidePGN": "Hide the displayed PGN",
    "nag:$0": "null annotation",
    "nag:$1": "good move",
    "nag:$1_menu": "Good move",
    "nag:$2": "poor move or mistake",
    "nag:$2_menu": "Mistake",
    "nag:$3": "very good or brilliant move",
    "nag:$3_menu": "Brilliant move",
    "nag:$4": "very poor move or blunder",
    "nag:$4_menu": "Blunder",
    "nag:$5": "speculative or interesting move",
    "nag:$5_menu": "Interesting move",
    "nag:$6": "questionable or dubious move",
    "nag:$6_menu": "Dubious move",
    "nag:$7": "forced move (all others lose quickly) or only move",
    "nag:$7_menu": "Forced move",
    "nag:$8": "singular move (no reasonable alternatives)",
    "nag:$8_menu": "Singular move",
    "nag:$9": "worst move",
    "nag:$10": "drawish position or even",
    "nag:$10_menu": "Equal position",
    "nag:$11": "equal chances, quiet position",
    "nag:$12": "equal chances, active position",
    "nag:$13": "unclear position",
    "nag:$13_menu": "Unclear position",
    "nag:$14": "White has a slight advantage",
    "nag:$14_menu": "White is slightly better",
    "nag:$15": "Black has a slight advantage",
    "nag:$15_menu": "Black is slightly better",
    "nag:$16": "White has a moderate advantage",
    "nag:$16_menu": "White is better",
    "nag:$17": "Black has a moderate advantage",
    "nag:$17_menu": "Black is better",
    "nag:$18": "White has a decisive advantage",
    "nag:$18_menu": "White is winning",
    "nag:$19": "Black has a decisive advantage",
    "nag:$19_menu": "Black is winning",
    "nag:$20": "White has a crushing advantage (Black should resign)",
    "nag:$21": "Black has a crushing advantage (White should resign)",
    "nag:$22": "White is in zugzwang",
    "nag:$22_menu": "Zugzwang",
    "nag:$23": "Black is in zugzwang",
    "nag:$24": "White has a slight space advantage",
    "nag:$24_menu": "Space advantage",
    "nag:$25": "Black has a slight space advantage",
    "nag:$26": "White has a moderate space advantage",
    "nag:$27": "Black has a moderate space advantage",
    "nag:$28": "White has a decisive space advantage",
    "nag:$29": "Black has a decisive space advantage",
    "nag:$30": "White has a slight time (development) advantage",
    "nag:$31": "Black has a slight time (development) advantage",
    "nag:$32": "White has a moderate time (development) advantage",
    "nag:$32_menu": "Time advantage",
    "nag:$33": "Black has a moderate time (development) advantage",
    "nag:$34": "White has a decisive time (development) advantage",
    "nag:$35": "Black has a decisive time (development) advantage",
    "nag:$36": "White has the initiative",
    "nag:$36_menu": "Attack",
    "nag:$37": "Black has the initiative",
    "nag:$38": "White has a lasting initiative",
    "nag:$39": "Black has a lasting initiative",
    "nag:$40": "White has the attack",
    "nag:$40_menu": "Initiative",
    "nag:$41": "Black has the attack",
    "nag:$42": "White has insufficient compensation for material deficit",
    "nag:$43": "Black has insufficient compensation for material deficit",
    "nag:$44": "White has sufficient compensation for material deficit",
    "nag:$44_menu": "With compensation",
    "nag:$45": "Black has sufficient compensation for material deficit",
    "nag:$46": "White has more than adequate compensation for material deficit",
    "nag:$47": "Black has more than adequate compensation for material deficit",
    "nag:$48": "White has a slight center control advantage",
    "nag:$49": "Black has a slight center control advantage",
    "nag:$50": "White has a moderate center control advantage",
    "nag:$51": "Black has a moderate center control advantage",
    "nag:$52": "White has a decisive center control advantage",
    "nag:$53": "Black has a decisive center control advantage",
    "nag:$54": "White has a slight kingside control advantage",
    "nag:$55": "Black has a slight kingside control advantage",
    "nag:$56": "White has a moderate kingside control advantage",
    "nag:$57": "Black has a moderate kingside control advantage",
    "nag:$58": "White has a decisive kingside control advantage",
    "nag:$59": "Black has a decisive kingside control advantage",
    "nag:$60": "White has a slight queenside control advantage",
    "nag:$61": "Black has a slight queenside control advantage",
    "nag:$62": "White has a moderate queenside control advantage",
    "nag:$63": "Black has a moderate queenside control advantage",
    "nag:$64": "White has a decisive queenside control advantage",
    "nag:$65": "Black has a decisive queenside control advantage",
    "nag:$66": "White has a vulnerable first rank",
    "nag:$67": "Black has a vulnerable first rank",
    "nag:$68": "White has a well protected first rank",
    "nag:$69": "Black has a well protected first rank",
    "nag:$70": "White has a poorly protected king",
    "nag:$71": "Black has a poorly protected king",
    "nag:$72": "White has a well protected king",
    "nag:$73": "Black has a well protected king",
    "nag:$74": "White has a poorly placed king",
    "nag:$75": "Black has a poorly placed king",
    "nag:$76": "White has a well placed king",
    "nag:$77": "Black has a well placed king",
    "nag:$78": "White has a very weak pawn structure",
    "nag:$79": "Black has a very weak pawn structure",
    "nag:$80": "White has a moderately weak pawn structure",
    "nag:$81": "Black has a moderately weak pawn structure",
    "nag:$82": "White has a moderately strong pawn structure",
    "nag:$83": "Black has a moderately strong pawn structure",
    "nag:$84": "White has a very strong pawn structure",
    "nag:$85": "Black has a very strong pawn structure",
    "nag:$86": "White has poor knight placement",
    "nag:$87": "Black has poor knight placement",
    "nag:$88": "White has good knight placement",
    "nag:$89": "Black has good knight placement",
    "nag:$90": "White has poor bishop placement",
    "nag:$91": "Black has poor bishop placement",
    "nag:$92": "White has good bishop placement",
    "nag:$93": "Black has good bishop placement",
    "nag:$94": "White has poor rook placement",
    "nag:$95": "Black has poor rook placement",
    "nag:$96": "White has good rook placement",
    "nag:$97": "Black has good rook placement",
    "nag:$98": "White has poor queen placement",
    "nag:$99": "Black has poor queen placement",
    "nag:$100": "White has good queen placement",
    "nag:$101": "Black has good queen placement",
    "nag:$102": "White has poor piece coordination",
    "nag:$103": "Black has poor piece coordination",
    "nag:$104": "White has good piece coordination",
    "nag:$105": "Black has good piece coordination",
    "nag:$106": "White has played the opening very poorly",
    "nag:$107": "Black has played the opening very poorly",
    "nag:$108": "White has played the opening poorly",
    "nag:$109": "Black has played the opening poorly",
    "nag:$110": "White has played the opening well",
    "nag:$111": "Black has played the opening well",
    "nag:$112": "White has played the opening very well",
    "nag:$113": "Black has played the opening very well",
    "nag:$114": "White has played the middlegame very poorly",
    "nag:$115": "Black has played the middlegame very poorly",
    "nag:$116": "White has played the middlegame poorly",
    "nag:$117": "Black has played the middlegame poorly",
    "nag:$118": "White has played the middlegame well",
    "nag:$119": "Black has played the middlegame well",
    "nag:$120": "White has played the middlegame very well",
    "nag:$121": "Black has played the middlegame very well",
    "nag:$122": "White has played the ending very poorly",
    "nag:$123": "Black has played the ending very poorly",
    "nag:$124": "White has played the ending poorly",
    "nag:$125": "Black has played the ending poorly",
    "nag:$126": "White has played the ending well",
    "nag:$127": "Black has played the ending well",
    "nag:$128": "White has played the ending very well",
    "nag:$129": "Black has played the ending very well",
    "nag:$130": "White has slight counterplay",
    "nag:$131": "Black has slight counterplay",
    "nag:$132": "White has moderate counterplay",
    "nag:$132_menu": "Counterplay",
    "nag:$133": "Black has moderate counterplay",
    "nag:$134": "White has decisive counterplay",
    "nag:$135": "Black has decisive counterplay",
    "nag:$136": "White has moderate time control pressure",
    "nag:$136_menu": "Time trouble",
    "nag:$137": "Black has moderate time control pressure",
    "nag:$138": "White has severe time control pressure",
    "nag:$139": "Black has severe time control pressure",
    "nag:$140": "With the idea",
    "nag:$140_menu": "With the idea",
    "nag:$146": "Novelty",
    "nag:$146_menu": "Novelty"
  }
}

/* harmony default export */ __webpack_exports__["default"] = (en);

/***/ }),

/***/ "./src/locales/es.js":
/*!***************************!*\
  !*** ./src/locales/es.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let es = {
    "values": {
        "buttons:flipper" : "Voltear los lados del tablero",
        "buttons:first" : "Ir al primer movimiento",
        "buttons:prev" : "Ir al movimiento anterior",
        "buttons:next" : "Ir al siguiente movimiento",
        "buttons:play" : "Reproducir / detener todos los movimientos",
        "buttons:last" : "Ir al último movimiento",
        "buttons:deleteVar" : "Eliminar variación",
        "buttons:promoteVar" : "Promover la variación",
        "buttons:deleteMoves" : "Eliminar resto se mueve desde aquí",
        "buttons:nags" : "NAGs menu",
        "buttons:pgn" : "Mostrar PGN del juego actual",
        "buttons:hidePGN" : "Ocultar la PGN mostrada",
        "chess:q": "D",
        "chess:k": "R",
        "chess:r": "T",
        "chess:b": "A",
        "chess:n": "C",
        "chess:Q": "D",
        "chess:K": "R",
        "chess:R": "T",
        "chess:B": "A",
        "chess:N": "C"
    }
}

/* harmony default export */ __webpack_exports__["default"] = (es);

/***/ }),

/***/ "./src/locales/et.js":
/*!***************************!*\
  !*** ./src/locales/et.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let et = {
    "values": {
        "buttons:flipper" : "Flip pool pardal",
        "buttons:first" : "Mine esimese sammu",
        "buttons:prev" : "Mine eelmise käigu",
        "buttons:next" : "Mine järgmise käigu",
        "buttons:play" : "Play / lõpetada mängimine kõik käigud",
        "buttons:last" : "Mine viimase käigu",
        "buttons:deleteVar" : "Kustuta variatsioon",
        "buttons:promoteVar" : "Edendada variatsioon",
        "buttons:deleteMoves" : "Kustuta ülejäänud käigud siit",
        "buttons:nags" : "NAGs menu",
        "buttons:pgn" : "Näita PGN praeguse mängu",
        "buttons:hidePGN" : "Peida kuvatakse PGN",
        "chess:q": "L",
        "chess:k": "K",
        "chess:r": "V",
        "chess:b": "O",
        "chess:n": "R",
        "chess:Q": "L",
        "chess:K": "K",
        "chess:R": "V",
        "chess:B": "O",
        "chess:N": "R"
    }
}

/* harmony default export */ __webpack_exports__["default"] = (et);

/***/ }),

/***/ "./src/locales/fi.js":
/*!***************************!*\
  !*** ./src/locales/fi.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./de */ "./src/locales/de.js");


let fi = {
    "values": {
        "buttons:flipper" : "Flip puolin hallituksen",
        "buttons:first" : "Mene ensimmäinen siirto",
        "buttons:prev" : "Mene edellisen siirron",
        "buttons:next" : "Mene seuraavaa siirtoa",
        "buttons:play" : "Toista / lopettaa pelaamisen kaikki liikkuu",
        "buttons:last" : "Siirry viimeiseen liikkua",
        "buttons:deleteVar" : "Poista vaihtelu",
        "buttons:promoteVar" : "Edistää vaihtelu",
        "buttons:deleteMoves" : "Poista loput liikkuu täältä",
        "buttons:nags" : "NAGs menu",
        "buttons:pgn" : "Näyttö PGN nykyisen pelin",
        "buttons:hidePGN" : "Piilota näytössä PGN",
        "chess:q": "D",
        "chess:k": "K",
        "chess:r": "T",
        "chess:b": "L",
        "chess:n": "R",
        "chess:Q": "D",
        "chess:K": "K",
        "chess:R": "T",
        "chess:B": "L",
        "chess:N": "R"
    }
}

/* harmony default export */ __webpack_exports__["default"] = (fi);

/***/ }),

/***/ "./src/locales/fr.js":
/*!***************************!*\
  !*** ./src/locales/fr.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let fr = {
    "values": {
        "buttons:flipper" : "Tourner l'échiquier",
        "buttons:first" : "Aller au premier coup",
        "buttons:prev" : "Coup précédent",
        "buttons:next" : "Coup suivant",
        "buttons:play" : "Jouer / arrêter tous les coups",
        "buttons:last" : "Aller au dernier coup",
        "buttons:deleteVar" : "Effacer la variation",
        "buttons:promoteVar" : "Promouvoir la variation",
        "buttons:deleteMoves" : "Effacer ce coup et tous les suivants",
        "buttons:nags" : "Menu NAGs",
        "buttons:pgn" : "Montrer le PGN de la partie",
        "buttons:hidePGN" : "Masquer le PGN affiché",
        "chess:q": "D",
        "chess:k": "R",
        "chess:r": "T",
        "chess:b": "F",
        "chess:n": "C",
        "chess:Q": "D",
        "chess:K": "R",
        "chess:R": "T",
        "chess:B": "F",
        "chess:N": "C",
        "nag:$0":	"pas d'annotation",
        "nag:$1":	"bon coup",
        "nag:$1_menu": "Bon coup",
        "nag:$2":	"mauvais coup",
        "nag:$2_menu": "Mauvais coup",
        "nag:$3":	"coup excellent",
        "nag:$3_menu": "Coup excellent",
        "nag:$4":	"très mauvais coup",
        "nag:$4_menu": "Très mauvais coup",
        "nag:$5":	"coup spéculatif",
        "nag:$5_menu": "Coup spéculatif",
        "nag:$6":	"coup douteux",
        "nag:$6_menu": "Coup douteux",
        "nag:$7":	"coup forcé (tous les autres coups perdent rapidement)",
        "nag:$7_menu": "Coup forcé",
        "nag:$8":	"seul coup (pas d'alternative raisonnable)",
        "nag:$8_menu": "Seul coup",
        "nag:$9":	"le plus mauvais coup",
        "nag:$10":	"position égale",
        "nag:$10_menu": "Position égale",
        "nag:$11":	"chances égales, position équilibrée",
        "nag:$12":	"chances égales, position dynamique",
        "nag:$13":	"position peu claire",
        "nag:$13_menu": "Position peu claire",
        "nag:$14":	"les Blancs ont un avantage minime",
        "nag:$14_menu": "Avantage minime blancs",
        "nag:$15":	"les Noirs ont un avantage minime",
        "nag:$15_menu": "Les Noirs ont un avantage minime",
        "nag:$16":	"les Blancs ont un avantage modéré",
        "nag:$17":	"les Noirs ont un avantage modéré"
    }
}

/* harmony default export */ __webpack_exports__["default"] = (fr);

/***/ }),

/***/ "./src/locales/hu.js":
/*!***************************!*\
  !*** ./src/locales/hu.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./de */ "./src/locales/de.js");


let hu = {
    "values": {
        "buttons:flipper" : "Flip oldalán a tábla",
        "buttons:first" : "Menjünk az első lépés",
        "buttons:prev" : "Ugrás az előző mozgás",
        "buttons:next" : "Ugrás a következő lépés",
        "buttons:play" : "Lejátszás / stop playing minden mozog",
        "buttons:last" : "Menj az utolsó lépés",
        "buttons:deleteVar" : "Törlés variáció",
        "buttons:promoteVar" : "Támogassák variáció",
        "buttons:deleteMoves" : "Törlés többi mozog itt",
        "buttons:nags" : "NAGs menu",
        "buttons:pgn" : "Kijelző PGN aktuális játék",
        "buttons:hidePGN" : "Elrejtése a megjelenített PGN",
        "chess:q": "V",
        "chess:k": "K",
        "chess:r": "B",
        "chess:b": "F",
        "chess:n": "H",
        "chess:Q": "V",
        "chess:K": "K",
        "chess:R": "B",
        "chess:B": "F",
        "chess:N": "H"
    }
}

/* harmony default export */ __webpack_exports__["default"] = (hu);

/***/ }),

/***/ "./src/locales/is.js":
/*!***************************!*\
  !*** ./src/locales/is.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./de */ "./src/locales/de.js");


let is = {
    "values": {
        "buttons:flipper" : "Flip hliðar borðsins",
        "buttons:first" : "Fara á fyrsta ferðinni",
        "buttons:prev" : "Fara í fyrri ferðinni",
        "buttons:next" : "Fara á næsta hreyfa",
        "buttons:play" : "Play / hætta að spila allt færist",
        "buttons:last" : "Fara að síðasta færa",
        "buttons:deleteVar" : "Eyða tilbrigði",
        "buttons:promoteVar" : "Efla tilbrigði",
        "buttons:deleteMoves" : "Eyða hvíld færist frá hér",
        "buttons:nags" : "NAGs menu",
        "buttons:pgn" : "Sýna PGN núverandi leik",
        "buttons:hidePGN" : "Fela birtist PGN",
        "chess:q": "D",
        "chess:k": "K",
        "chess:r": "H",
        "chess:b": "B",
        "chess:n": "R",
        "chess:Q": "D",
        "chess:K": "K",
        "chess:R": "H",
        "chess:B": "B",
        "chess:N": "R"
    }
}

/* harmony default export */ __webpack_exports__["default"] = (is);

/***/ }),

/***/ "./src/locales/it.js":
/*!***************************!*\
  !*** ./src/locales/it.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./de */ "./src/locales/de.js");


let it = {
    "values": {
        "buttons:flipper" : "Capovolgere i lati del bordo",
        "buttons:first" : "Vai alla prima mossa",
        "buttons:prev" : "Vai alla precedente mossa",
        "buttons:next" : "Vai alla prossima mossa",
        "buttons:play" : "PLAY / STOP giocare tutte le mosse",
        "buttons:last" : "Vai ultima mossa",
        "buttons:deleteVar" : "Eliminare variazione",
        "buttons:promoteVar" : "Promuovere variazione",
        "buttons:deleteMoves" : "Eliminare muove resto da qui",
        "buttons:nags" : "NAGs menu",
        "buttons:pgn" : "Visualizzazione PGN di partita in corso",
        "buttons:hidePGN" : "Nascondere il PGN visualizzato",
        "chess:q": "D",
        "chess:k": "R",
        "chess:r": "T",
        "chess:b": "A",
        "chess:n": "C",
        "chess:Q": "D",
        "chess:K": "R",
        "chess:R": "T",
        "chess:B": "A",
        "chess:N": "C"
    }
}

/* harmony default export */ __webpack_exports__["default"] = (it);

/***/ }),

/***/ "./src/locales/nb.js":
/*!***************************!*\
  !*** ./src/locales/nb.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./de */ "./src/locales/de.js");


let nb = {
    "values": {
        "buttons:flipper" : "Vend sider av bordet",
        "buttons:first" : "Gå til første trekket",
        "buttons:prev" : "Gå til forrige trekk",
        "buttons:next" : "Gå til neste trekk",
        "buttons:play" : "Play / slutte å spille alle trekk",
        "buttons:last" : "Gå til siste trekk",
        "buttons:deleteVar" : "Slett variasjon",
        "buttons:promoteVar" : "Fremme variasjon",
        "buttons:deleteMoves" : "Slett resten beveger seg fra her",
        "buttons:nags" : "NAGs menu",
        "buttons:pgn" : "Visning PGN av dagens spill",
        "buttons:hidePGN" : "Skjul vises PGN",
        "chess:q": "D",
        "chess:k": "K",
        "chess:r": "T",
        "chess:b": "L",
        "chess:n": "S",
        "chess:Q": "D",
        "chess:K": "K",
        "chess:R": "T",
        "chess:B": "L",
        "chess:N": "S"
    }
}

/* harmony default export */ __webpack_exports__["default"] = (nb);

/***/ }),

/***/ "./src/locales/nl.js":
/*!***************************!*\
  !*** ./src/locales/nl.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./de */ "./src/locales/de.js");


let nl = {
    "values": {
        "buttons:flipper" : "Flip de zijkanten van het bord",
        "buttons:first" : "Ga naar eerste zet",
        "buttons:prev" : "Ga naar vorige zet",
        "buttons:next" : "Ga naar de volgende stap",
        "buttons:play" : "Play / stop spelen van alle moves",
        "buttons:last" : "Ga naar laatste zet",
        "buttons:deleteVar" : "Verwijder variatie",
        "buttons:promoteVar" : "Bevorder variatie",
        "buttons:deleteMoves" : "Verwijder rust verhuist van hier",
        "buttons:nags" : "NAGs menu",
        "buttons:pgn" : "Weergave PGN van het huidige spel",
        "buttons:hidePGN" : "Verberg de weergegeven PGN",
        "chess:q": "D",
        "chess:k": "K",
        "chess:r": "T",
        "chess:b": "L",
        "chess:n": "P",
        "chess:Q": "D",
        "chess:K": "K",
        "chess:R": "T",
        "chess:B": "L",
        "chess:N": "P"
    }
}

/* harmony default export */ __webpack_exports__["default"] = (nl);

/***/ }),

/***/ "./src/locales/pt.js":
/*!***************************!*\
  !*** ./src/locales/pt.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./de */ "./src/locales/de.js");


let pt = {
    "values": {
        "buttons:flipper" : "Virar os lados da placa",
        "buttons:first" : "Ir para o primeiro movimento",
        "buttons:prev" : "Ir para o movimento anterior",
        "buttons:next" : "Ir para o próximo movimento",
        "buttons:play" : "Reproduzir / parar de jogar todos os movimentos",
        "buttons:last" : "Ir para o último movimento",
        "buttons:deleteVar" : "Excluir variação",
        "buttons:promoteVar" : "Promover a variação",
        "buttons:deleteMoves" : "Excluir rest move daqui",
        "buttons:nags" : "NAGs menu",
        "buttons:pgn" : "Exibir PGN do jogo atual",
        "buttons:hidePGN" : "Ocultar a PGN exibida",
        "chess:q": "D",
        "chess:k": "R",
        "chess:r": "T",
        "chess:b": "B",
        "chess:n": "C",
        "chess:Q": "D",
        "chess:K": "R",
        "chess:R": "T",
        "chess:B": "B",
        "chess:N": "C"
    }
}

/* harmony default export */ __webpack_exports__["default"] = (pt);

/***/ }),

/***/ "./src/locales/ro.js":
/*!***************************!*\
  !*** ./src/locales/ro.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./de */ "./src/locales/de.js");


let ro = {
    "values": {
        "buttons:flipper" : "Flip părțile laterale ale plăcii",
        "buttons:first" : "Du-te la prima mutare",
        "buttons:prev" : "Du-te la mutarea anterioară",
        "buttons:next" : "Du-te la următoarea mutare",
        "buttons:play" : "Redare / opri redarea toate mișcările",
        "buttons:last" : "Mergi la ultima mutare",
        "buttons:deleteVar" : "Şterge variație",
        "buttons:promoteVar" : "Să promoveze variația",
        "buttons:deleteMoves" : "Șterge de aici se mută de odihnă",
        "buttons:nags" : "NAGs menu",
        "buttons:pgn" : "Afișare PGN de joc curente",
        "buttons:hidePGN" : "Ascundeți PGN afișat",
        "chess:q": "D",
        "chess:k": "R",
        "chess:r": "T",
        "chess:b": "N",
        "chess:n": "C",
        "chess:Q": "D",
        "chess:K": "R",
        "chess:R": "T",
        "chess:B": "N",
        "chess:N": "C"
    }
}

/* harmony default export */ __webpack_exports__["default"] = (ro);

/***/ }),

/***/ "./src/locales/sv.js":
/*!***************************!*\
  !*** ./src/locales/sv.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./de */ "./src/locales/de.js");


let sv = {
    "values": {
        "buttons:flipper" : "Vänd sidorna av styrelsen",
        "buttons:first" : "Gå till första steget",
        "buttons:prev" : "Gå till föregående drag",
        "buttons:next" : "Gå till nästa steg",
        "buttons:play" : "Play / sluta spela alla drag",
        "buttons:last" : "Gå till det senaste drag",
        "buttons:deleteVar" : "Radera variation",
        "buttons:promoteVar" : "Främja variation",
        "buttons:deleteMoves" : "Radera vila flyttar härifrån",
        "buttons:nags" : "NAGs menu",
        "buttons:pgn" : "Visning PGN av aktuella spelet",
        "buttons:hidePGN" : "Dölja visas PGN",
        "chess:q": "D",
        "chess:k": "K",
        "chess:r": "T",
        "chess:b": "L",
        "chess:n": "S",
        "chess:Q": "D",
        "chess:K": "K",
        "chess:R": "T",
        "chess:B": "L",
        "chess:N": "S"
    }
}

/* harmony default export */ __webpack_exports__["default"] = (sv);

/***/ }),

/***/ "./src/pgnvjs.js":
/*!***********************!*\
  !*** ./src/pgnvjs.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n */ "./src/i18n.js");
/* harmony import */ var _mliebelt_pgn_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mliebelt/pgn-reader */ "./node_modules/@mliebelt/pgn-reader/lib/pgn.js");
/* harmony import */ var _mliebelt_pgn_reader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mliebelt_pgn_reader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chessground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chessground */ "./node_modules/chessground/chessground.js");
/* harmony import */ var chessground__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chessground__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Timer */ "./src/Timer.js");
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mousetrap */ "./node_modules/mousetrap/mousetrap.js");
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);


//import {pgnReader, Utils} from "../../pgn-reader/src/pgn";





/**
 * This implements the base function that is used to display a board, a whole game
 * or even allow to play it.
 * See the other functions and their implementation how to use the building blocks
 * of pgnBase to build new functionality. The configuration here is the super-set
 * of all the configurations of the other functions.
 */
let pgnBase = function (boardId, configuration) {
    // Section defines the variables needed everywhere.
    let that = {};
    let utils = new _mliebelt_pgn_reader__WEBPACK_IMPORTED_MODULE_1__["Utils"]();
    // Sets the default parameters for all modes. See individual functions for individual overwrites
    let defaults = {
        theme: "blue",
        pieceStyle: 'merida',
        //width: '320px',
        //boardSize: '320px',
        manyGames: false,
        showCoords: true,
        orientation: 'white',
        position: 'start',
        showFen: false,
        layout: 'top',
        headers: true,
        timerTime: 700,
        locale: 'en',
        movable: {free: false},
        highlight: {lastMove: true},
        viewOnly: true,
        hideMovesBefore: false,
        colorMarker: null,
        showResult: false,
        timeAnnotation: 'none',
        notation: 'short',
        IDs: {
            bottomHeaderId: boardId + 'BottomHeader',
            topHeaderId: boardId + 'TopHeader',
            innerBoardId: boardId + 'Inner',
            movesId: boardId + 'Moves',
            buttonsId: boardId + 'Button',
            fenId: boardId + "Fen",
            colorMarkerId: boardId + 'ColorMarker'
        }
    };
    that.promMappings = {q: 'queen', r: 'rook', b: 'bishop', n: 'knight'};
    that.configuration = Object.assign(Object.assign(defaults, PgnBaseDefaults), configuration);
    that.mypgn = Object(_mliebelt_pgn_reader__WEBPACK_IMPORTED_MODULE_1__["pgnReader"])(that.configuration);
    let game = that.mypgn.game;     // Use the same instance from chess.src
    let theme = that.configuration.theme || 'default';
    const hasMode = function (mode) {
        return that.configuration.mode === mode;
    };
    const possibleMoves = function () {
        return that.mypgn.possibleMoves(game);
    };
    const id = function (id) {
        return that.configuration.IDs[id];
    }
    that.board = null              // Will be set later, but has to be a known variable

    // Initialize locale
    let locale = that.configuration.locale || "en"
    that.configuration.i18n = Object(_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])(locale)
    that.configuration.defaultI18n = Object(_i18n__WEBPACK_IMPORTED_MODULE_0__["default"])("en")

    let t = function (term) {
        if (that.configuration.i18n) {
            let ret = that.configuration.i18n(term)
            if (ret === term) {
                ret = that.configuration.defaultI18n(term)
            }
        return ret
        }
        return term.substring(term.indexOf(':') + 1)
    }

    if (that.configuration.position) { // Allow early correction
        if (that.configuration.position !== 'start') {
            let tokens = that.configuration.position.split(/\s+/);
            if (tokens.length === 4) {
                that.configuration.position += ' 1 1';
            }
        }
    }

    /**
     * Allow logging of error to HTML.
     */
    function logError(str) {
        let node = document.createElement("DIV");
        const textnode = document.createTextNode(str);
        node.appendChild(textnode);
        that.errorDiv.appendChild(node);
    }

    /**
     * Adds a class to an element.
     */
    function addClass(elementOrId, className) {
        let ele = utils.pvIsElement(elementOrId) ? elementOrId : document.getElementById(elementOrId);
        if (!ele) return;
        if (ele.classList) {
            ele.classList.add(className);
        } else {
            ele.className += ' ' + className;
        }
    }

    /**
     * Remove a class from an element.
     */
    function removeClass(elementOrId, className) {
        let ele = utils.pvIsElement(elementOrId) ? elementOrId : document.getElementById(elementOrId);
        if (ele === null) return;
        if (ele.classList) {
            ele.classList.remove(className);
        } else {
            ele.className = ele.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    /**
     * Inserts an element after targetElement
     * @param {*} newElement the element to insert
     * @param {*} targetElement the element after to insert
     */
    function insertAfter(newElement, targetElement) {
        const parent = targetElement.parentNode;
        if (parent.lastChild === targetElement) {
            parent.appendChild(newElement);
        } else {
            parent.insertBefore(newElement, targetElement.nextSibling);
        }
    }

    /**
     * Adds an event listener to the DOM element.
     */
    function addEventListener(elementOrId, event, func) {
        let ele = utils.pvIsElement(elementOrId) ? elementOrId : document.getElementById(elementOrId);
        if (ele === null) return;
        ele.addEventListener(event, func);
    }

    function toggleColorMarker() {
        let ele = document.getElementById(id('colorMarkerId'));
        if (!ele) return;
        if (ele.classList.contains('cm-black')) {
            ele.classList.remove('cm-black');
        } else {
            ele.classList.add('cm-black');
        }
    }

    /**
     * Scroll if element is not visible
     * @param element the element to show by scrolling
     */
    function scrollToView(element) {
        function scrollParentToChild(parent, child) {
            let parentRect = parent.getBoundingClientRect();
            // What can you see?
            let parentViewableArea = {
                height: parent.clientHeight,
                width: parent.clientWidth
            };

            // Where is the child
            let childRect = child.getBoundingClientRect();
            // Is the child viewable?
            let isViewable = (childRect.top >= parentRect.top) && (childRect.top <= parentRect.top + parentViewableArea.height);

            // if you can't see the child try to scroll parent
            if (!isViewable) {
                // scroll by offset relative to parent
                parent.scrollTop = (childRect.top + parent.scrollTop) - parentRect.top;
            }
        }

        const node = element;
        const movesNode = node.parentElement;
        scrollParentToChild(movesNode, node);
    }

    /**
     * Allows for move to be made programmatically from external javascript
     * @param san the san formatted move to play
     */
    const manualMove = function (san) {
        const m = game.move(san)
        if (m === null) return
        game.undo()
        onSnapEnd(m.from, m.to)
        that.board.set({fen: game.fen()})
    }

    /**
     * Called when the piece is released. Here should be the logic for calling all
     * pgn enhancement.
     * @param from the source
     * @param to the destination
     * @param meta additional parameters (not used at the moment)
     */
    const onSnapEnd = function (from, to, meta) {
        //console.log("Move from: " + from + " To: " + to + " Meta: " + JSON.stringify(meta, null, 2));
        //board.set({fen: game.fen()});
        const cur = that.currentMove;
        let primMove = {from: from, to: to};
        if ((that.mypgn.game.get(from).type === 'p') && ((to.substring(1, 2) === '8') || (to.substring(1, 2) === '1'))) {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Select the promotion figure", {
                buttons: {
                    queen: {text: "Queen", value: 'q'},
                    rook: {text: "Rook", value: 'r'},
                    bishop: {text: "Bishop", value: 'b'},
                    knight: {text: 'Knight', value: 'n'}
                }
            }).then((value) => {primMove.promotion = value}).then( () => { onSnapEndFinish() })
        } else {
            onSnapEndFinish()
        }

        function onSnapEndFinish() {
            that.currentMove = that.mypgn.addMove(primMove, cur);
            const move = that.mypgn.getMove(that.currentMove);
            if (primMove.promotion) {
                let pieces = {};
                pieces[to] = null;
                that.board.setPieces(pieces);
                pieces[to] = {
                    color: (move.turn == 'w' ? 'white' : 'black'),
                    role: that.promMappings[primMove.promotion]
                };
                that.board.setPieces(pieces);
            }
            if (move.notation.ep) {
                let ep_field = to[0] + from[1];
                let pieces = {};
                pieces[ep_field] = null;
                that.board.setPieces(pieces);
            }
            if (moveSpan(that.currentMove) === null) {
                generateMove(that.currentMove, null, move, move.prev, document.getElementById(id('movesId')), []);
            }
            unmarkMark(that.currentMove);
            updateUI(that.currentMove);
            let col = move.turn == 'w' ? 'black' : 'white';
            that.board.set({
                movable: Object.assign({}, that.board.state.movable, {color: col, dests: possibleMoves(game)}),
                check: game.in_check()
            });
            //makeMove(null, that.currentMove, move.fen);
            let fenView = document.getElementById(id('fenId'));
            if (fenView) {
                fenView.value = move.fen;
            }
            toggleColorMarker();
        }
    };

    // Utility function for generating general HTML elements with id, class (with theme)
    function createEle(kind, id, clazz, my_theme, father) {
        const ele = document.createElement(kind);
        if (id) {
            ele.setAttribute("id", id);
        }
        if (clazz) {
            if (my_theme) {
                ele.setAttribute("class", my_theme + " " + clazz);
            } else {
                ele.setAttribute("class", clazz);
            }
        }
        if (father) {
            father.appendChild(ele);
        }
        return ele;
    }

    // Internationionalize the figures in SAN
    function i18nSan(san) {
        function i18nFig(fig, locale) {
            return t("chess:" + fig);
        }
        let locale = that.configuration.locale;
        if (! locale) return san;
        let new_san = san;
        if ( ! (san.match(/^[a-h]?x/) || san.match(/^[a-h]\d/) || san.match(/^O/) ) ) {
            let move_fig = i18nFig(san[0], locale);
            new_san = san.replace(san[0], move_fig);
        }
        let m = new_san.match(/=([QRNB])/);
        if (m) {
            new_san = new_san.replace(m[1], i18nFig(m[1], locale));
        }
        return new_san;
    }

    /**
     * Generates all HTML elements needed for display of the (playing) board and
     * the moves. Generates that in dependence of the theme
     */
    const generateHTML = function () {
        // Utility function for generating buttons divs
        function addButton(pair, buttonDiv) {
            const l_theme = (['green', 'blue'].indexOf(theme) >= 0) ? theme : 'default';
            const button = createEle("i", id('buttonsId') + pair[0], "button fa " + pair[1], l_theme, buttonDiv);
            const title = t("buttons:" + pair[0]);
            document.getElementById(id('buttonsId') + pair[0]).setAttribute("title", title);
            return button;
        }

        // Generates the view buttons (only)
        const generateViewButtons = function (buttonDiv) {
            [["flipper", "fa-adjust"], ["first", "fa-fast-backward"], ["prev", "fa-step-backward"],
                ["next", "fa-step-forward"], ["play", "fa-play-circle"], ["last", "fa-fast-forward"]].forEach(function (entry) {
                addButton(entry, buttonDiv);
            });
        };
        // Generates the edit buttons (only)
        const generateEditButtons = function (buttonDiv) {
            [["promoteVar", "fa-hand-point-up"], ["deleteMoves", "fa-cut"]].forEach(function (entry) {
                addButton(entry, buttonDiv);
                //but.className = but.className + " gray"; // just a test, worked.
                // only gray out if not usable, check that later.
            });
            [["pgn", "fa-print"], ['nags', 'fa-cog']].forEach(function (entry) {
                addButton(entry, buttonDiv);
            });
        };

        // Generate 3 rows, similar to lichess in studies
        let generateNagMenu = function (nagEle) {
            let generateRow = function (array, rowClass, nagEle) {
                let generateLink = function (link, nagDiv) {
                    let generateIcon = function (icon, myLink) {
                        let ele = createEle('i', null, null, theme, myLink);
                        let i = that.mypgn.NAGS[icon] || '';
                        ele.setAttribute("data-symbol", i);
                        ele.setAttribute("data-value", icon);
                        ele.textContent = t('nag:$' + icon + "_menu");
                    };
                    let myLink = createEle('a', null, null, theme, myDiv);
                    generateIcon(link, myLink);
                    myLink.addEventListener("click", function () {
                        function updateMoveSAN(moveIndex) {
                            let move = that.mypgn.getMove(moveIndex);
                            let san = i18nSan(that.mypgn.sanWithNags(move));
                            document.querySelector("#" + id('movesId') + moveIndex + " > a").textContent = san;
                        }

                        this.classList.toggle("active");
                        let iNode = this.firstChild;
                        that.mypgn.changeNag('$' + iNode.getAttribute('data-value'), that.currentMove, this.classList.contains('active'));
                        updateMoveSAN(that.currentMove);
                    });
                };
                let myDiv = createEle('div', null, rowClass, theme, nagEle);
                array.forEach(ele => generateLink(ele, myDiv));
            };
            generateRow([1, 2, 3, 4, 5, 6, 7, 146], 'nagMove', nagEle);
            generateRow([10, 13, 14, 15, 16, 17, 18, 19], 'nagPosition', nagEle);
            generateRow([22, 40, 36, 132, 136, 32, 44, 140], 'nagObservation', nagEle);
        };
        const generateCommentDiv = function (commentDiv) {
            const radio = createEle("div", null, "commentRadio", theme, commentDiv);
            const mc = createEle("input", null, "moveComment", theme, radio);
            mc.type = "radio";
            mc.value = "move";
            mc.name = "radio";
            createEle("label", null, "labelMoveComment", theme, radio).appendChild(document.createTextNode("Move"));
            const mb = createEle("input", null, "beforeComment", theme, radio);
            mb.type = "radio";
            mb.value = "before";
            mb.name = "radio";
            createEle("label", null, "labelBeforeComment", theme, radio).appendChild(document.createTextNode("Before"));
            const ma = createEle("input", null, "afterComment", theme, radio);
            ma.type = "radio";
            ma.value = "after";
            ma.name = "radio";
            createEle("label", null, "labelAfterComment", theme, radio).appendChild(document.createTextNode("After"));
            createEle("textarea", null, "comment", theme, commentDiv);
        };

        const hasHeaders = function () {
            return that.configuration.headers && (Object.keys(that.mypgn.getTags()).length > 0)
        }

        const divBoard = document.getElementById(boardId);
        if (divBoard == null) {
            return;
        } else {
            // ensure that the board is empty before filling it
            while (divBoard.childNodes.length > 0) {
                divBoard.removeChild(divBoard.childNodes[0]);
            }
        }
        divBoard.classList.add(theme);
        divBoard.classList.add('whole');
        divBoard.classList.add(that.configuration.mode + 'Mode');
        divBoard.setAttribute('tabindex', '0');
        // Add layout for class if configured
        if (that.configuration.layout) {
            divBoard.classList.add('layout-' + that.configuration.layout);
        }

        /** Add a drop-down list for all games if necessary. */
        let gamesDropDown = createEle("select", boardId + "Games", 'games', null, divBoard)
        if (! that.configuration.manyGames) {
            gamesDropDown.style.display = 'none'
        }

        /** Add an error div to show errors */
        that.errorDiv = createEle("div", boardId + "Error", 'error', null, divBoard);

        /** outerBoard */
        const outerInnerBoardDiv = createEle("div", null, "outerBoard", null, divBoard);
        let boardAndDiv = createEle('div', null, 'boardAnd', theme, outerInnerBoardDiv);

        /** topInner for headers / time of Black. TODO: Orientation should switch that then. **/
        let topInnerBoardDiv = createEle("div", null, "topInnerBoard", theme, boardAndDiv);
        let blackHeader = createEle('div', id('topHeaderId'), "blackHeader", theme, boardAndDiv);
        let topTime = createEle("span", null, "topTime", theme, topInnerBoardDiv);
        const innerBoardDiv = createEle("div", id('innerBoardId'), "board", theme, boardAndDiv);
        /** bottomInner for headers / time of White. TODO: Orientation should switch that then. **/
        let bottomInnerBoardDiv = createEle("div", null, "bottomInnerBoard", theme, boardAndDiv);
        let whiteHeader = createEle('div', id('bottomHeaderId'), "whiteHeader", theme, boardAndDiv);
        let bottomTime = createEle("div", null, "bottomTime", theme, bottomInnerBoardDiv);

        /** Buttons */
        if (hasMode('view') || hasMode('edit')) {
            const buttonsBoardDiv = createEle("div", id('buttonsId'), "buttons", theme, divBoard);
            generateViewButtons(buttonsBoardDiv);
            if ( that.configuration.colorMarker ) {
                createEle("div", id('colorMarkerId'), 'colorMarker' + " " + that.configuration.colorMarker, theme, buttonsBoardDiv);
            }
        }
        if (hasMode('board')) {
            if ( that.configuration.colorMarker ) {
                createEle("div", id('colorMarkerId'), 'colorMarker' + " " + that.configuration.colorMarker, theme, topInnerBoardDiv);
            }
        }

        /** Fen */
        if ((hasMode('edit') || hasMode('view')) && (that.configuration.showFen)) {
            const fenDiv = createEle("textarea", id('fenId'), "fen", theme, outerInnerBoardDiv);
            addEventListener(id('fenId'), 'mousedown', function (e) {
                e = e || window.event;
                e.preventDefault();
                this.select();
            });
            if (hasMode('edit')) {
                document.getElementById(id('fenId')).onpaste = function (e) {
                    const pastedData = e.originalEvent.clipboardData.getData('text');
                    // console.log(pastedData);
                    that.configuration.position = pastedData;
                    that.configuration.pgn = '';
                    pgnEdit(boardId, that.configuration);
                };
            } else {
                document.getElementById(id('fenId')).readonly = true;
            }
        }

        /** Moves Div */
        if (hasMode('print') || hasMode('view') || hasMode('edit')) {
            const movesDiv = createEle("div", id('movesId'), "moves", null, divBoard);
        }

        /** Edit Divs TODO Redo those */
        if (hasMode('edit')) {
            const editButtonsBoardDiv = createEle("div", "edit" + id('buttonsId'), "edit", theme, divBoard);
            generateEditButtons(editButtonsBoardDiv);
            let nagMenu = createEle('div', 'nagMenu' + id('buttonsId'), 'nagMenu', theme, editButtonsBoardDiv);
            generateNagMenu(nagMenu);
            const pgnDiv = createEle("textarea", "pgn" + id('buttonsId'), "pgn", theme, editButtonsBoardDiv);
            const commentBoardDiv = createEle("div", "comment" + id('buttonsId'), "comment", theme, editButtonsBoardDiv);
            generateCommentDiv(commentBoardDiv);
            // Bind the paste key ...
            addEventListener("pgn" + id('buttonsId'), 'mousedown', function (e) {
                e = e || window.event;
                e.preventDefault();
                e.target.select();
            });
            document.getElementById("pgn" + id('buttonsId')).onpaste = function (e) {
                const pastedData = e.originalEvent.clipboardData.getData('text');
                that.configuration.pgn = pastedData;
                pgnEdit(boardId, that.configuration);
            };
        }

        const computeBoardSize = function() {
            const setBoardSizeAndWidth = function (boardSize, width) {
                that.configuration.boardSize = boardSize;
                that.configuration.width = width;
                divBoard.style.width = width;
            }
            let _boardSize = that.configuration.boardSize;
            let _width =  that.configuration.width || divBoard.style.width;

            function getRoundedBoardSize(_boardSize) {
                return `${Math.round(parseInt(_boardSize) / 8) * 8}px`;
            }

            if (that.configuration.layout === 'top' || that.configuration.layout === 'bottom') {
                if (_boardSize) {
                    let rounded = getRoundedBoardSize(_boardSize);
                    setBoardSizeAndWidth(rounded, rounded)
                    return _boardSize;
                } else {
                    _width = _width || '320px';
                    _width = getRoundedBoardSize(_width);
                    setBoardSizeAndWidth(_width, _width);
                    return _width;
                }
            }
            // Layout left or right, more complex combinations possible
            if (_boardSize && _width) {
                _boardSize = getRoundedBoardSize(_boardSize)
                setBoardSizeAndWidth(_boardSize, _width)
                return _boardSize
            } else if (! _boardSize) {
                _boardSize = getRoundedBoardSize(parseInt(_width) / 8 * 5);
                setBoardSizeAndWidth(_boardSize, _width)
                return _boardSize
            } else {
                _width = `${parseInt(_boardSize) / 5 * 8}px`
                setBoardSizeAndWidth(_boardSize, _width)
                return _boardSize
            }
        }

        let _boardHeight = computeBoardSize();
        let _boardWidth = _boardHeight;
        let _buttonFontSize = `${Math.max(10, parseInt(_boardHeight) / 24)}px`;
        if (document.getElementById(id('buttonsId'))) {
            document.getElementById(id('buttonsId')).style.fontSize = _buttonFontSize;
        }

        const resizeLayout = function () {
            console.log("Start computing layout")
            if (hasMode('board')) {
                if (document.getElementById(id('colorMarkerId'))) {
                    document.getElementById(id('colorMarkerId')).style.marginLeft = 'auto';
                }
                return;
            }
            if (hasMode('print')) return;
            if (that.configuration.showFen) {
                let _fenHeight = document.getElementById(id('fenId')).offsetHeight;
                _boardHeight = `${parseInt(_boardHeight) + _fenHeight}px`;
            }
            if (hasHeaders()) {
                _boardHeight = `${parseInt(_boardHeight) + 40}px`;
            }
            let _buttonsHeight = document.getElementById(id('buttonsId')).offsetHeight;
            let _gamesHeight = that.configuration.manyGames ? '40px' : '0'
            if (that.configuration.layout === 'left' || that.configuration.layout === 'right') {
                divBoard.style.gridTemplateRows = `${_gamesHeight} auto minmax(auto, ${_boardHeight}) ${_buttonsHeight}px`;
                let _movesWidth = `${parseInt(that.configuration.width) - parseInt(_boardWidth)}px`;
                if (that.configuration.layout === 'left') {
                    divBoard.style.gridTemplateColumns = _boardWidth + " " + _movesWidth;
                } else {
                    divBoard.style.gridTemplateColumns = _movesWidth + " " + _boardWidth;
                }
            } else {
                let _movesCount = that.mypgn.getMoves().length;
                let _minMovesHeight = (_movesCount + 7) / 7 * 30;
                let _movesHeight = parseInt(_boardHeight) / 5 * 3;
                if (_minMovesHeight < _movesHeight) _movesHeight = _minMovesHeight;
                if (that.configuration.layout === 'top') {
                    divBoard.style.gridTemplateRows = `${_gamesHeight} auto minmax(auto, ${_boardHeight}) ${_buttonsHeight}px minmax(0, ${_movesHeight}px) auto`;
                } else if (that.configuration.layout === 'bottom') {
                    divBoard.style.gridTemplateRows = `${_gamesHeight} auto minmax(0,${_movesHeight}px) minmax(auto,${_boardHeight}) ${_buttonsHeight}px`;
                }
                divBoard.style.gridTemplateColumns = _boardWidth
            }
        }
        resizeLayout()
    };

    /**
     * Generate the board that uses the unique id('innerBoardId') and the part of the configuration
     * that is for the board only. Returns the resulting object (as reference for others).
     * @returns {Window.ChessBoard} the board object that may play the moves later
     */
    const generateBoard = function () {
        function copyBoardConfiguration(source, target, keys) {
            utils.pvEach(keys, function (key) {
                if (typeof source[key] != "undefined") {
                    target[key] = source[key];
                }
            });
        }

        // Default values of the board, if not overwritten by the given configuration
        let boardConfiguration = {coordsInner: true, coordsFactor: 1.0, disableContextMenu: true,
            drawable: {
                onChange: (shapes) => {
                    let move = that.mypgn.getMove(that.currentMove)
                    that.mypgn.setShapes(move, shapes);
                }
            }};

        copyBoardConfiguration(that.configuration, boardConfiguration,
            ['position', 'orientation', 'showCoords', 'pieceTheme', 'draggable',
                'coordsInner', 'coordsFactor', 'width', 'movable', 'viewOnly', 'highlight', 'boardSize',
                'rankFontSize']);
        // board = new ChessBoard(id('innerBoardId'), boardConfiguration);
        // Allow Chessground to be resizable
        boardConfiguration.resizable = true;
        if (typeof boardConfiguration.showCoords != 'undefined') {
            boardConfiguration.coordinates = boardConfiguration.showCoords;
        }
        boardConfiguration.fen = boardConfiguration.position;
        const el = document.getElementById(id('innerBoardId'));
        if (typeof that.configuration.pieceStyle != 'undefined') {
            el.className += " " + that.configuration.pieceStyle;
        }
        if (boardConfiguration.boardSize) {
            boardConfiguration.width = boardConfiguration.boardSize;
        }
        let currentWidth = parseInt(boardConfiguration.width);
        let moduloWidth = currentWidth % 8;
        let smallerWidth = currentWidth - moduloWidth;
        // Ensure that boardWidth is a multiply of 8
        boardConfiguration.width = "" + smallerWidth +"px";
        that.board = Object(chessground__WEBPACK_IMPORTED_MODULE_2__["Chessground"])(el, boardConfiguration);
        //console.log("Board width: " + board.width);
        if (boardConfiguration.width) {
            el.style.width = boardConfiguration.width;
            el.style.height = boardConfiguration.width;
            let fontSize = null;
            if (boardConfiguration.rankFontSize) {
                fontSize = boardConfiguration.rankFontSize;
            } else {
                // Set the font size related to the board (factor 28), ensure at least 8px font
                fontSize = Math.max(8, Math.round(parseInt(boardConfiguration.width.slice(0, -2)) / 28 * boardConfiguration.coordsFactor));
            }
            el.style.fontSize = `${fontSize}px`;
            document.body.dispatchEvent(new Event('chessground.resize'));
        }
        if (boardConfiguration.coordsInner) {
            el.classList.add('coords-inner');
        }
        if (hasMode('edit')) {
            game.load(boardConfiguration.position);
            let toMove = (game.turn() == 'w') ? 'white' : 'black';
            that.board.set({
                movable: Object.assign({}, that.board.state.movable, {color: toMove, dests: possibleMoves(game)}),
                turnColor: toMove, check: game.in_check()
            });
        }
        if (that.configuration.colorMarker) {
            if ( (that.configuration.position != 'start') &&
                (that.configuration.position.split(' ')[1] === 'b') ) {
                let ele = document.getElementById(id('colorMarkerId'));
                if (ele) {
                    ele.classList.add('cm-black');
                }
            }
        }
        return that.board;
    };

    const moveSpan = function (i) {
        return document.getElementById(id('movesId') + i);
    };

    /**
     * Generates one move from the current position.
     * @param currentCounter the current move counter (should be redundant, because
     *      the move itself should know its move counter)
     * @param game the chess game that helps find the position
     * @param move the current move  generated by reading the PGN (or playing on the board)
     * @param prevCounter the previous counter (have to check that)
     * @param movesDiv the div that contains the current moves
     * @param varStack if empty no current variation (main line), else contains the divs of the variations played currently
     * @return {*} the current counter which may the next prev counter
     */
    const generateMove = function (currentCounter, game, move, prevCounter, movesDiv, varStack) {
        /**
         * Comments are generated inline, there is no special block rendering
         * possible for them.
         * @param comment the comment to render as span
         * @param clazz class parameter appended to differentiate different comments
         * @returns {HTMLElement} the new created span with the comment as text
         */
        const generateCommentSpan = function (comment, clazz) {
            const span = createEle('span', null, "comment " + clazz);
            if (comment && (typeof comment == "string")) {
                span.appendChild(document.createTextNode(" " + comment + " "));
            }
            return span;
        };

        const append_to_current_div = function (index, span, movesDiv, varStack) {
            if (varStack.length == 0) {
                if (typeof index == "number") {
                    insertAfter(span, moveSpan(index));
                } else {
                    movesDiv.appendChild(span);
                }
            } else {
                varStack[varStack.length - 1].appendChild(span);
            }
        };
        function localBoard(id, configuration) {
            let base = pgnBase(id, Object.assign({headers: false, mode: 'board', boardSize: '200px'}, configuration));
            base.generateHTML();
            base.generateBoard();
        }
        // Ignore null moves
        if (move === null || (move === undefined)) {
            return prevCounter;
        }
        let clAttr = "move";
        if (move.variationLevel > 0) {
            clAttr = clAttr + " var var" + move.variationLevel;
        }
        if (move.turn == 'w') {
            clAttr = clAttr + " white";
        }
        const span = createEle("span", id('movesId') + currentCounter, clAttr);
        if (that.mypgn.startVariation(move)) {
            const varDiv = createEle("div", null, "variation");
            if (varStack.length == 0) {
                // This is the head of the current variation
                let varHead = null;
                if (typeof move.prev == "number") {
                    varHead = that.mypgn.getMove(move.prev).next;
                } else {
                    varHead = 0;
                }
                moveSpan(varHead).appendChild(varDiv);
                // movesDiv.appendChild(varDiv);
            } else {
                varStack[varStack.length - 1].appendChild(varDiv);
            }
            varStack.push(varDiv);
            //span.appendChild(document.createTextNode(" ( "));
        }
        span.appendChild(generateCommentSpan(move.commentMove, "moveComment"));
        if ((move.turn == 'w') || (that.mypgn.startMainLine(move)) || (that.mypgn.startVariation(move)) || (that.mypgn.afterMoveWithVariation(move))) {
            const mn = move.moveNumber;
            const num = createEle('span', null, "moveNumber", null, span);
            num.appendChild(document.createTextNode("" + mn + ((move.turn == 'w') ? ". " : "... ")));
        }
        span.appendChild(generateCommentSpan(move.commentBefore, "beforeComment"));
        const link = createEle('a', null, null, null, span);
        const san = i18nSan(that.mypgn.sanWithNags(move));
        const text = document.createTextNode(san);
        link.appendChild(text);
        span.appendChild(document.createTextNode(" "));
        if (that.configuration.timeAnnotation != 'none' && move.commentDiag && move.commentDiag.clock) {
            let cl_time = move.commentDiag.clock.value;
            let cl_class = that.configuration.timeAnnotation.class || 'timeNormal';
            let clock_span = generateCommentSpan(cl_time, cl_class);
            if (that.configuration.timeAnnotation.colorClass) {
                clock_span.style = "color: " + that.configuration.timeAnnotation.colorClass;
            }
            span.appendChild(clock_span);
        }
        span.appendChild(generateCommentSpan(move.commentAfter, "afterComment"));
        append_to_current_div(move.prev, span, movesDiv, varStack);
        //movesDiv.appendChild(span);
        if (that.mypgn.endVariation(move)) {
            //span.appendChild(document.createTextNode(" ) "));
            varStack.pop();
        }
        addEventListener(moveSpan(currentCounter), 'click', function (event) {
            makeMove(that.currentMove, currentCounter, move.fen);
            event.stopPropagation();
        });
        if (that.mypgn.has_diagram_nag(move)) {
            const diaID = boardId + "dia" + currentCounter;
            const diaDiv = createEle('div', diaID);
            span.appendChild(diaDiv);
            that.configuration.position = move.fen;
            localBoard(diaID, that.configuration);
        }
        //console.log(`FEN size: ${move.fen.length}`)
        return currentCounter;
    };

    /**
     * Unmark all marked moves, mark the next one.
     * @param next the next move number
     */
    function unmarkMark(next) {
        const moveASpan = function (i) {
            return document.querySelector('#' + id('movesId') + i + '> a');
        };

        removeClass(document.querySelector('#' + id('movesId') + " a.yellow"), 'yellow');
        addClass(moveASpan(next), 'yellow');
    }

    /**
     * Check which buttons should be grayed out
     */
    const updateUI = function (next) {
        let elements = document.querySelectorAll("div.buttons .gray");
        utils.pvEach(elements, function (ele) {
            removeClass(ele, 'gray');
        });
        const move = that.mypgn.getMove(next);
        if (next === null) {
            ["prev", "first"].forEach(function (name) {
                addClass(document.querySelector("div.buttons ." + name), 'gray');
            });
        }
        if ((next !== null) && (typeof move.next != "number")) {
            ["next", "play", "last"].forEach(function (name) {
                addClass(document.querySelector("div.buttons ." + name), 'gray');
            });
        }
        // Update the drop-down for NAGs
        try {
            if (move === undefined) {
                return;
            }
            let nagMenu = document.querySelector('#nagMenu' + id('buttonsId'));
            document.querySelectorAll('#nagMenu' + id('buttonsId') + ' a.active').forEach(function (act) {
                act.classList.toggle('active');
            });
            let nags = move.nag || [];
            nags.forEach(function (eachNag) {
                document.querySelector('#nagMenu' + id('buttonsId') + ' [data-value="' + eachNag.substring(1) + '"]')
                    .parentNode.classList.toggle('active');
            });
        } catch (err) {

        }

    };

    /**
     * Plays the move that is already in the notation on the board.
     * @param curr the current move number
     * @param next the move to take now
     * @param fen the fen of the move to make
     */
    const makeMove = function (curr, next, fen) {
        /**
         * Fills the comment field depending on which and if a comment is filled for that move.
         */
        function fillComment(moveNumber) {
            let myMove = that.mypgn.getMove(moveNumber);
            if (!~myMove) return;
            if (myMove.commentAfter) {
                document.querySelector('#' + boardId + " input.afterComment").checked = true;
                document.querySelector('#' + boardId + " textarea.comment").value = myMove.commentAfter;
            } else if (myMove.commentBefore) {
                document.querySelector('#' + boardId + " input.beforeComment").checked = true;
                document.querySelector('#' + boardId + " textarea.comment").value = myMove.commentBefore;
            } else if (myMove.commentMove) {
                document.querySelector('#' + boardId + " input.moveComment").checked = true;
                document.querySelector('#' + boardId + " textarea.comment").value = myMove.commentMove;
            } else {
                document.querySelector('#' + boardId + " textarea.comment").value = "";
            }
        }

        function handlePromotion(aMove) {
            if (!aMove) return;
            if (aMove.notation.promotion) {
                let promPiece = aMove.notation.promotion.substring(1, 2).toLowerCase();
                let pieces = {};
                pieces[aMove.to] =
                    {
                        role: that.mypgn.PROMOTIONS[promPiece],
                        color: (aMove.turn == 'w' ? 'white' : 'black')
                    };
                that.board.setPieces(pieces);
            }
        }

        function getShapes(commentDiag) {
            function colOfDiag(color) {
                const colors = {Y: 'yellow', R: 'red', B: 'blue', G: 'green'};
                return colors[color];
            }

            let arr = [];
            if ((commentDiag !== undefined) && (commentDiag !== null)) {
                if (commentDiag.colorArrows) {
                    for (let i = 0; i < commentDiag.colorArrows.length; i++) {
                        let comm = commentDiag.colorArrows[i];
                        arr.push({
                            orig: comm.substring(1, 3),
                            dest: comm.substring(3, 5),
                            brush: colOfDiag(comm.substring(0, 1))
                        });
                    }
                }
                if (commentDiag.colorFields) {
                    for (let i = 0; i < commentDiag.colorFields.length; i++) {
                        let comm = commentDiag.colorFields[i];
                        arr.push({orig: comm.substring(1, 3), brush: colOfDiag(comm.substring(0, 1))});
                    }
                }
            }
            return arr;
        }

        //console.log("Marke move: Curr " + curr + " Next " + next + " FEN " + fen);
        //board.set({fen: fen});
        let myMove = that.mypgn.getMove(next);
        let myFen = myMove ? myMove.fen : fen;
        if (!myFen) { // fen not given, take start position
            myFen = that.configuration.position == 'start' ? 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' : that.configuration.position;
        }
        if (myMove) {
            that.board.set({fen: myFen, lastMove: [myMove.from, myMove.to]});
        } else {
            that.board.set({fen: myFen, lastMove: []});
        }
        handlePromotion(myMove);
        if (myMove) {
            that.board.setShapes(getShapes(myMove.commentDiag));
        }
        game.load(myFen);
        unmarkMark(next);
        that.currentMove = next;
        if (next) {
            scrollToView(moveSpan(next));
        }
        if (hasMode('edit')) {
            let col = game.turn() == 'w' ? 'white' : 'black';
            that.board.set({
                movable: Object.assign({}, that.board.state.movable, {color: col, dests: possibleMoves(game)}),
                turnColor: col, check: game.in_check()
            });
            if (next) {
                fillComment(next);
            }
        } else if (hasMode('view')) {
            let col = game.turn() == 'w' ? 'white' : 'black';
            that.board.set({
                movable: Object.assign({}, that.board.state.movable, {color: col}),
                turnColor: col, check: game.in_check()
            });
        }
        let fenView = document.getElementById(id('fenId'));
        if (fenView) {
            fenView.value = fen;
        }
        toggleColorMarker();
        updateUI(next);
    };

    /**
     * Generates the HTML (for the given moves). Includes the following: move number,
     * link to FEN (position after move)
     */
    const generateMoves = function () {
        /** Create something printable from the tags for the list. */
        function printTags(game) {
            if (Object.keys(game.tags).length === 0) {
                return "Should print somehow the moves of the game"
            }
            let _t = game.tags
            return `[${_t.Event}] ${_t.Round}: ${_t.White} - ${_t.Black} (${_t.Date})`
        }
        /** Fill the drop down with loaded game. */
        function fillGamesDropDown() {
            let _games = that.mypgn.getGames()
            let _select = document.getElementById(boardId + 'Games')
            for (let i=0; i < _games.length; i++) {
                let _el = document.createElement('option')
                let _game = _games[i]
                _el.text = printTags(_game)
                _el.value = i
                _select.add(_el)
            }
            _select.addEventListener('change', function (ev) {
                that.mypgn.load_one(parseInt(ev.currentTarget.value))
                regenerateMoves(that.mypgn.getMoves())
                // bindFunctions();
                generateHeaders()
                makeMove(null, null, null)
            })
        }
        try {
            that.mypgn.load_pgn();
            fillGamesDropDown();
        } catch (err) {
            if (typeof err.location != "undefined") {
                const sta = err.location.start.offset;
                let pgnStr = that.configuration.pgn;
                logError("Offset: " + sta);
                logError("PGN: " + pgnStr);
                logError(err.message);
            } else {
                let pgnStr = that.configuration.pgn;
                logError("PGN: " + pgnStr);
                logError(err);
            }
        }
        let myMoves = that.mypgn.getMoves();
        if (that.configuration.position == 'start') {
            game.reset();
        } else {
            game.load(that.configuration.position);
        }
        if (that.board) {
            that.board.set({fen: game.fen()});
        }
        let fenField = document.getElementById(id('fenId'));
        if (utils.pvIsElement(fenField)) {
            fenField.value = game.fen();
        }

        /**
         * Generate a useful notation for the headers, allow for styling. First a version
         * that just works.
         */
        const generateHeaders = function () {
            let tags = that.mypgn.getTags();
            let whd = document.getElementById(id('bottomHeaderId'));
            let bhd = document.getElementById(id('topHeaderId'));
            if (that.configuration.headers == false || (utils.pvIsEmpty(tags))) {
                whd.parentNode.removeChild(whd);
                bhd.parentNode.removeChild(bhd);
                return;
            }
            if (tags.White) {
                whd.innerHTML = ''
                whd.appendChild(document.createTextNode(tags.White + " "))
            }
            //div_h.appendChild(document.createTextNode(" - "));
            if (tags.Black) {
                bhd.innerHTML = ''
                bhd.appendChild(document.createTextNode(" " + tags.Black));
            }
            // let rest = "";
            // const appendHeader = function (result, header, separator) {
            //     if (header) {
            //         if (result.length > 0) {
            //             result += separator;
            //         }
            //         result += header;
            //     }
            //     return result;
            // };
            // [tags.Event, tags.Site, tags.Round, tags.Date,
            //     tags.ECO, tags.Result].forEach(function (header) {
            //     rest = appendHeader(rest, header, " | ");
            // });
            // const restSpan = createEle("span", null, "restHeader", theme, div_h);
            // restSpan.appendChild(document.createTextNode(rest));

        };

        // Bind the necessary functions to move the pieces.
        const bindFunctions = function () {
            const switchHeaderValues = function () {
                if (! document.getElementById(id('bottomHeaderId'))) return
                let bottomInner = document.getElementById(id('bottomHeaderId')).innerText
                let topInner = document.getElementById(id('topHeaderId')).innerText
                document.getElementById(id('bottomHeaderId')).innerText = topInner
                document.getElementById(id('topHeaderId')).innerText = bottomInner
            }
            const bind_key = function (key, to_call) {
                const form = document.querySelector("#" + boardId + ",#" + boardId + "Moves");
                mousetrap__WEBPACK_IMPORTED_MODULE_4___default()(form).bind(key, function (evt) {
                    to_call();
                    evt.stopPropagation();
                });
            };
            const nextMove = function () {
                let fen = null;
                if ((typeof that.currentMove == 'undefined') || (that.currentMove === null)) {
                    fen = that.mypgn.getMove(0).fen;
                    makeMove(null, 0, fen);
                } else {
                    const next = that.mypgn.getMove(that.currentMove).next;
                    if (typeof next == 'undefined') return;
                    fen = that.mypgn.getMove(next).fen;
                    makeMove(that.currentMove, next, fen);
                }
            };
            const prevMove = function () {
                let fen = null;
                if ((typeof that.currentMove == 'undefined') || (that.currentMove == null)) {
                    /*fen = that.mypgn.getMove(0).fen;
                     makeMove(null, 0, fen);*/
                }
                else {
                    const prev = that.mypgn.getMove(that.currentMove).prev;
                    if ((typeof prev === 'undefined') || (prev == null)) {
                        firstMove();
                    } else {
                        fen = that.mypgn.getMove(prev).fen;
                        makeMove(that.currentMove, prev, fen);
                    }
                }
            };
            const firstMove = function () {
                makeMove(null, null, null);
            };
            const timer = new _Timer__WEBPACK_IMPORTED_MODULE_3__["default"](10);
            timer.bind(that.configuration.timerTime, function () {
                nextMove();
            });
            addEventListener(id('buttonsId') + 'flipper', 'click', function () {
                that.board.toggleOrientation();
                switchHeaderValues();
            });
            addEventListener(id('buttonsId') + 'next', 'click', function () {
                nextMove();
            });
            addEventListener(id('buttonsId') + 'prev', 'click', function () {
                prevMove();
            });
            addEventListener(id('buttonsId') + 'first', 'click', function () {
                firstMove();
            });
            addEventListener(id('buttonsId') + 'last', 'click', function () {
                const fen = that.mypgn.getMove(that.mypgn.getMoves().length - 1).fen;
                makeMove(that.currentMove, that.mypgn.getMoves().length - 1, fen);
            });
            let togglePgn = function () {
                const pgnButton = document.getElementById(id('buttonsId') + "pgn");
                const pgnText = document.getElementById(boardId + " .outerpgn");
                document.getElementById(id('buttonsId') + "pgn").classList.toggle('selected');
                if (document.getElementById(id('buttonsId') + "pgn").classList.contains('selected')) {
                    const str = computePgn();
                    showPgn(str);
                    document.querySelector("#" + boardId + " .pgn").style.display = 'block'; //slideDown(700, "linear");
                } else {
                    document.querySelector("#" + boardId + " .pgn").style.display = 'none';
                }
            };
            let toggleNagMenu = function () {
                let nagMenu = document.getElementById(id('buttonsId') + 'nags').classList.toggle('selected');
                if (document.getElementById(id('buttonsId') + 'nags').classList.contains('selected')) {
                    document.getElementById('nagMenu' + id('buttonsId')).style.display = 'flex';
                } else {
                    document.getElementById('nagMenu' + id('buttonsId')).style.display = 'none';
                }
            };
            if (hasMode('edit')) { // only relevant functions for edit mode
                addEventListener(id('buttonsId') + "pgn", 'click', function () {
                    togglePgn();
                });
                addEventListener(id('buttonsId') + 'nags', 'click', function () {
                    toggleNagMenu();
                });
                addEventListener(id('buttonsId') + "deleteMoves", 'click', function () {
                    const prev = that.mypgn.getMove(that.currentMove).prev;
                    const fen = that.mypgn.getMove(prev).fen;
                    that.mypgn.deleteMove(that.currentMove);
                    //document.getElementById(id('movesId')).innerHtml = "";
                    let myNode = document.getElementById(id('movesId'));
                    while (myNode.firstChild) {
                        myNode.removeChild(myNode.firstChild);
                    }
                    regenerateMoves(that.mypgn.getMoves());
                    makeMove(null, prev, fen);
                });
                addEventListener(id('buttonsId') + "promoteVar", 'click', function () {
                    let curr = that.currentMove;
                    that.mypgn.promoteMove(that.currentMove);
                    //document.getElementById(id('movesId')).html("");
                    let myNode = document.getElementById(id('movesId'));
                    while (myNode.firstChild) {
                        myNode.removeChild(myNode.firstChild);
                    }
                    regenerateMoves(that.mypgn.getOrderedMoves());
                    let fen = that.mypgn.getMove(curr).fen;
                    makeMove(null, that.currentMove, fen);
                });
                document.querySelector('#' + boardId + ' .pgn').style.display = 'none';
                document.querySelector('#comment' + id('buttonsId') + " textarea.comment").onchange = function () {
                    function commentText() {
                        return " " + document.querySelector('#' + 'comment' + id('buttonsId') + " textarea.comment").value + " ";
                    }

                    let text = commentText();
                    let checked = document.querySelector('#' + "comment" + id('buttonsId') + " :checked");
                    checked = checked ? checked.value : "after";
                    moveSpan(that.currentMove).querySelector("." + checked + "Comment").textContent = text;
                    if (checked === "after") {
                        that.mypgn.getMove(that.currentMove).commentAfter = text;
                    } else if (checked === "before") {
                        that.mypgn.getMove(that.currentMove).commentBefore = text;
                    } else if (checked === "move") {
                        that.mypgn.getMove(that.currentMove).commentMove = text;
                    }
                };
                const rad = ["moveComment", "beforeComment", "afterComment"];
                const prevComment = null;
                for (let i = 0; i < rad.length; i++) {
                    document.querySelector('#' + 'comment' + id('buttonsId') + " ." + rad[i]).onclick = function () {
                        const checked = this.value;
                        let text;
                        if (checked === "after") {
                            text = that.mypgn.getMove(that.currentMove).commentAfter;
                        } else if (checked === "before") {
                            text = that.mypgn.getMove(that.currentMove).commentBefore;
                        } else if (checked === "move") {
                            text = that.mypgn.getMove(that.currentMove).commentMove;
                        }
                        document.querySelector('#' + boardId + " textarea.comment").value = text;
                    };
                }
            }

            function togglePlay() {
                if (timer.running()) {
                    timer.stop()
                } else {
                    timer.start()
                }
                const playButton = document.getElementById(id('buttonsId') + 'play');
                let clString = playButton.getAttribute('class');
                if (clString.indexOf('play') < 0) { // has the stop button
                    clString = clString.replace('pause', 'play');
                } else {
                    clString = clString.replace('play', 'pause');
                }
                playButton.setAttribute('class', clString);
            }

            bind_key("left", prevMove);
            bind_key("right", nextMove);
            //bind_key("space", togglePlay);
            addEventListener(id('buttonsId') + 'play', 'click', function () {
                togglePlay();
            });

        };

        const computePgn = function () {
            return that.mypgn.write_pgn();
        };

        const showPgn = function (val) {
            document.getElementById('pgn' + id('buttonsId')).textContent = val;
        };

        /**
         * Regenerate the moves div, may be used the first time (DIV is empty)
         * or later (moves have changed).
         */
        const regenerateMoves = function (myMoves) {
            const movesDiv = document.getElementById(id('movesId'))
            movesDiv.innerHTML = ''
            let prev = null
            const varStack = [];
            let firstMove = 0;
            for (let i = firstMove; i < myMoves.length; i++) {
                if (!that.mypgn.isDeleted(i)) {
                    const move = myMoves[i];
                    prev = generateMove(move.index, game, move, prev, movesDiv, varStack);
                }
            }
        };
        regenerateMoves(myMoves);
        bindFunctions();
        generateHeaders();

        /**
         * Allows to add functions after having generated the moves. Used currently for setting start position.
         */
        function postGenerateMoves() {
            if (that.configuration.startPlay && !that.configuration.hideMovesBefore) {
                let move = that.mypgn.findMove(that.configuration.startPlay)
                if (move === undefined) {
                    logError('Could not find startPlay: ' + that.configuration.startPlay);
                    return;
                }
                makeMove(move.prev, move.index, move.fen);
                unmarkMark(move.index);
            }

            if (that.configuration.showResult) {
                // find the result from the header
                let endGame = that.mypgn.getEndGame();
                // Insert it as new span
                let span = createEle("span", id('movesId') + "Result", "move", theme,
                    document.getElementById(id('movesId')));
                span.innerHTML = endGame ? endGame : "*";

            }
        }

        postGenerateMoves();
    };
    return {
        // PUBLIC API
        chess: game,
        board: that.board,
        getPgn: function () {
            return that.mypgn;
        },
        generateHTML: generateHTML,
        generateBoard: generateBoard,
        generateMoves: generateMoves,
        manualMove: manualMove,
        onSnapEnd: onSnapEnd
    };
};

/* harmony default export */ __webpack_exports__["default"] = (pgnBase);

/***/ })

/******/ });
});
//# sourceMappingURL=pgnv.js.map