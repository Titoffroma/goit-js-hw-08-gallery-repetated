parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\images\\icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"q5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"NV0Y":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./gallery-items"));function t(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var o=function(){function t(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.default;n(this,t),this.galleryRef=i.galleryRef,this.buttonRef=i.buttonRef,this.modalRef=i.modalRef,this.modalImageRef=i.modalImageRef,this.closeButtonRef=i.closeButtonRef,this.imagesArray=a,t.prototype.operateLightbox=function(e){console.log(e.code),"Escape"===e.code&&this.closeLightbox(),"ArrowRight"===e.code&&this.moveRightLightbox(),"ArrowLeft"===e.code&&this.moveLeftLightbox()}.bind(this)}return a(t,[{key:"addImages",value:function(){var e=this.imagesArray.reduce(function(e,t){var n=t.preview,i=t.original,a=t.description;return e+'<li class="gallery__item">\n  <a\n    class="gallery__link"\n    href="'.concat(i,'"\n  >\n    <img\n      class="gallery__image"\n      src="').concat(n,'"\n      data-source="').concat(i,'"\n      alt="').concat(a,'"\n    />\n  </a>\n</li>')},"");this.galleryRef.insertAdjacentHTML("beforeend",e)}},{key:"openGallery",value:function(e){0===this.galleryRef.children.length?(this.addImages(),e.target.textContent="Close Gallery",this.galleryRef.addEventListener("click",this.openLightbox.bind(this))):(this.galleryRef.classList.toggle("is-hidden"),"Close Gallery"===e.target.textContent?e.target.textContent="Open Gallery":e.target.textContent="Close Gallery")}},{key:"addDocListener",value:function(){this.galleryRef.addEventListener("keydown",this.operateLightbox)}},{key:"removeDocListener",value:function(){this.galleryRef.removeEventListener("keydown",this.operateLightbox)}},{key:"openLightbox",value:function(e){e.preventDefault(),"IMG"===e.target.tagName&&(this.addDocListener(),this.modalRef.classList.add("is-open"),document.body.style.overflow="hidden",this.modalImageRef.src=e.target.dataset.source,this.modalImageRef.alt=e.target.alt,this.currentIndex=Array.from(document.querySelectorAll(".gallery__image")).indexOf(e.target),this.closeButtonRef.addEventListener("click",this.closeLightbox.bind(this),{once:!0}))}},{key:"moveImages",value:function(){var e=this;this.modalImageRef.classList.add("scale"),this.modalImageRef.src=this.imagesArray[this.currentIndex].original,this.modalImageRef.alt=this.imagesArray[this.currentIndex].description,setTimeout(function(){return e.modalImageRef.classList.remove("scale")},200)}},{key:"moveRightLightbox",value:function(){this.currentIndex===this.imagesArray.length-1&&(this.currentIndex=-1),this.currentIndex+=1,this.moveImages()}},{key:"moveLeftLightbox",value:function(){0===this.currentIndex&&(this.currentIndex=this.imagesArray.length),this.currentIndex-=1,this.moveImages()}},{key:"closeLightbox",value:function(){var e=this;this.modalRef.classList.remove("is-open"),setTimeout(function(){return e.modalImageRef.src=""},200),document.body.style.overflow="auto",this.removeDocListener()}}]),t}();exports.default=o;
},{"./gallery-items":"q5Rn"}],"d6sW":[function(require,module,exports) {
"use strict";var e=t(require("./task-1-class-done"));function t(e){return e&&e.__esModule?e:{default:e}}var o={galleryRef:document.querySelector(".gallery"),buttonRef:document.querySelector(".open-btn"),modalRef:document.querySelector(".lightbox"),modalImageRef:document.querySelector(".lightbox__image"),closeButtonRef:document.querySelector(".lightbox__button")},l=new e.default(o);l.buttonRef.addEventListener("click",l.openGallery.bind(l));
},{"./task-1-class-done":"NV0Y"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/main.js");
},{"./sass/main.scss":"clu1","./js/main.js":"d6sW"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-08-gallery-repetated/src.d825b8db.js.map