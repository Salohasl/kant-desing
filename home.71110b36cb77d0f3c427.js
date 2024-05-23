/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");

function showDescriptionText() {
    var servicesBlocks = document.querySelectorAll('.services-block');
    var servicesItemShows = document.querySelectorAll('.services-item__show');
    servicesBlocks.forEach(function (item, index) {
        item.addEventListener('mouseover', function () {
            // Закрытие всех.services-item__show
            Array.from(servicesItemShows).forEach(function (show) {
                if (show !== servicesItemShows[index]) { // Если это не соответствующий блок
                    show.classList.remove('show'); // Удаляем класс 'show', если он есть
                }
            });
            // Раскрытие соответствующего.services-item__show
            var correspondingShow = servicesItemShows[index];
            if (correspondingShow) {
                correspondingShow.classList.add('show'); // Добавляем класс 'show' для раскрытия
                setTimeout(function () {
                    correspondingShow.classList.remove('show'); //удаление спустя 2.5 сек
                }, 2500);
            }
        });
    });
}
showDescriptionText();
var advantages = document.querySelectorAll('.animation');
var observerCallback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('anim');
            observer.unobserve(entry.target);
        }
    });
};
// Create an instance of IntersectionObserver
var observer = new IntersectionObserver(observerCallback, {
    rootMargin: '0px',
    threshold: 0.5
});
// Observe each advantage element
advantages.forEach(function (advantag) {
    observer.observe(advantag);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS43MTExMGIzNmNiNzdkMGYzYzQyNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUI7QUFFdkIsU0FBUyxtQkFBbUI7SUFDeEIsSUFBTSxjQUFjLEdBQTRCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdGLElBQU0saUJBQWlCLEdBQTRCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBRXJHLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFO1lBQy9CLG9DQUFvQztZQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLGNBQUk7Z0JBQ3RDLElBQUksSUFBSSxLQUFJLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxtQ0FBbUM7b0JBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMscUNBQXFDO2dCQUN4RSxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxpREFBaUQ7WUFDakQsSUFBTSxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRCxJQUFJLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3BCLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7Z0JBQ2hGLFVBQVUsQ0FBQztvQkFDUCxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMseUJBQXlCO2dCQUN6RSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDYixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxtQkFBbUIsRUFBRSxDQUFDO0FBR3RCLElBQU0sVUFBVSxHQUF3QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFaEYsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLE9BQW9DLEVBQUUsUUFBOEI7SUFDMUYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFLO1FBQ2pCLElBQUksS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFRiw2Q0FBNkM7QUFDN0MsSUFBTSxRQUFRLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN4RCxVQUFVLEVBQUUsS0FBSztJQUNqQixTQUFTLEVBQUUsR0FBRztDQUNqQixDQUFDLENBQUM7QUFFSCxpQ0FBaUM7QUFDakMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7SUFDeEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QvLi9zcmMvc3R5bGVzLnNjc3M/MDI5YSIsIndlYnBhY2s6Ly9mb29kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvb2Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb29kLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5mdW5jdGlvbiBzaG93RGVzY3JpcHRpb25UZXh0KCkge1xuICAgIGNvbnN0IHNlcnZpY2VzQmxvY2tzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlcy1ibG9jaycpO1xuICAgIGNvbnN0IHNlcnZpY2VzSXRlbVNob3dzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlcy1pdGVtX19zaG93Jyk7XG5cbiAgICBzZXJ2aWNlc0Jsb2Nrcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIC8vINCX0LDQutGA0YvRgtC40LUg0LLRgdC10YUuc2VydmljZXMtaXRlbV9fc2hvd1xuICAgICAgICAgICAgQXJyYXkuZnJvbShzZXJ2aWNlc0l0ZW1TaG93cykuZm9yRWFjaChzaG93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdyE9PSBzZXJ2aWNlc0l0ZW1TaG93c1tpbmRleF0pIHsgLy8g0JXRgdC70Lgg0Y3RgtC+INC90LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQuNC5INCx0LvQvtC6XG4gICAgICAgICAgICAgICAgICAgIHNob3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpOyAvLyDQo9C00LDQu9GP0LXQvCDQutC70LDRgdGBICdzaG93Jywg0LXRgdC70Lgg0L7QvSDQtdGB0YLRjFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyDQoNCw0YHQutGA0YvRgtC40LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQtdCz0L4uc2VydmljZXMtaXRlbV9fc2hvd1xuICAgICAgICAgICAgY29uc3QgY29ycmVzcG9uZGluZ1Nob3cgPSBzZXJ2aWNlc0l0ZW1TaG93c1tpbmRleF07XG4gICAgICAgICAgICBpZiAoY29ycmVzcG9uZGluZ1Nob3cpIHtcbiAgICAgICAgICAgICAgICBjb3JyZXNwb25kaW5nU2hvdy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7IC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBICdzaG93JyDQtNC70Y8g0YDQsNGB0LrRgNGL0YLQuNGPXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvcnJlc3BvbmRpbmdTaG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTsgLy/Rg9C00LDQu9C10L3QuNC1INGB0L/Rg9GB0YLRjyAyLjUg0YHQtdC6XG4gICAgICAgICAgICAgICAgfSwgMjUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5zaG93RGVzY3JpcHRpb25UZXh0KCk7XG5cblxuY29uc3QgYWR2YW50YWdlczogTm9kZUxpc3RPZjxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbmltYXRpb24nKTtcblxuY29uc3Qgb2JzZXJ2ZXJDYWxsYmFjayA9IChlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10sIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlcik6IHZvaWQgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FuaW0nKTtcbiAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG4vLyBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKG9ic2VydmVyQ2FsbGJhY2ssIHtcbiAgICByb290TWFyZ2luOiAnMHB4JyxcbiAgICB0aHJlc2hvbGQ6IDAuNVxufSk7XG5cbi8vIE9ic2VydmUgZWFjaCBhZHZhbnRhZ2UgZWxlbWVudFxuYWR2YW50YWdlcy5mb3JFYWNoKChhZHZhbnRhZykgPT4ge1xuICAgIG9ic2VydmVyLm9ic2VydmUoYWR2YW50YWcpO1xufSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==