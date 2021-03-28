!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vlitejsPictureInPicture=t():e.vlitejsPictureInPicture=t()}(globalThis,(function(){return(()=>{"use strict";var e={952:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=i(82))&&n.__esModule?n:{default:n};function u(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}t.default=class{constructor({player:e}){u(this,"providers",["html5"]),u(this,"types",["video"]),this.player=e,this.video=this.player.element,this.onClickOnPipButton=this.onClickOnPipButton.bind(this),this.onEnterPictureInPicture=this.onEnterPictureInPicture.bind(this),this.onLeavePictureInPicture=this.onLeavePictureInPicture.bind(this)}init(){this.isPipApiAvailable()&&(this.render(),this.pipButton=this.player.container.querySelector(".v-pipButton"),this.addEvents())}isPipApiAvailable(){return"pictureInPictureEnabled"in document&&!this.video.disablePictureInPicture}render(){this.player.container.insertAdjacentHTML("beforeend",'<div class="v-captions"></div>'),this.player.container.querySelector(".v-fullscreenButton").insertAdjacentHTML("beforebegin",`\n\t\t\t    <button class="v-pipButton v-controlButton">${r.default}</button>\n\t\t\t`)}addEvents(){this.pipButton.addEventListener("click",this.onClickOnPipButton),this.video.addEventListener("enterpictureinpicture",this.onEnterPictureInPicture),this.video.addEventListener("leavepictureinpicture",this.onLeavePictureInPicture)}async onClickOnPipButton(e){e.preventDefault();try{this.video!==document.pictureInPictureElement?await this.video.requestPictureInPicture():await document.exitPictureInPicture()}catch(e){console.warn(`vlitejs :: ${e}`)}}onEnterPictureInPicture(e){}onLeavePictureInPicture(e){}}},82:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 11h-8v6h8v-6zm-2 4h-4v-2h4v2zm4-12H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4.98C23 3.88 22.1 3 21 3zm0 16.02H3V4.97h18v14.05z"/></svg>'}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,i),u.exports}var n={};return(()=>{var e,t=n;t.default=void 0;var r=((e=i(952))&&e.__esModule?e:{default:e}).default;t.default=r})(),n=n.default})()}));