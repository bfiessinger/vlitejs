!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vlitejsYoutube=t():e.vlitejsYoutube=t()}(globalThis,(function(){return(()=>{"use strict";var e={464:(e,t,n)=>{var i;void 0===(i=function(e,t){if({value:!0},void 0===window.vlitejs)throw new Error("vlitejs :: The library is not available.");let n=[];class i extends window.vlitejs.Player{init(){this.waitUntilVideoIsReady().then((()=>{super.onPlayerReady()}))}waitUntilVideoIsReady(){return new window.Promise(((e,t)=>{void 0!==window.YT?this.initYoutubePlayer().then(e):n.push(this)}))}initYoutubePlayer(){return new window.Promise(((e,t)=>{this.instancePlayer=new window.YT.Player(this.element.getAttribute("id"),{videoId:this.element.getAttribute("data-youtube-id"),height:"100%",width:"100%",playerVars:{showinfo:0,modestbranding:0,autohide:1,rel:0,fs:this.options.fullscreen?1:0,wmode:"transparent",playsinline:this.options.playsinline?1:0,controls:0},events:{onReady:t=>{this.element=t.target.getIframe(),e()},onStateChange:e=>this.onPlayerStateChange(e)}})}))}onPlayerStateChange(e){switch(e.data){case window.YT.PlayerState.ENDED:super.onVideoEnded();break;case window.YT.PlayerState.PLAYING:super.loading(!1),this.options.controls&&setInterval((()=>{super.onTimeUpdate()}),100);break;case window.YT.PlayerState.BUFFERING:super.loading(!0)}}getInstance(){return this.instancePlayer}getCurrentTime(){return new window.Promise((e=>e(this.instancePlayer.getCurrentTime())))}setCurrentTime(e){this.instancePlayer.seekTo(e)}getDuration(){return new window.Promise((e=>e(this.instancePlayer.getDuration())))}methodPlay(){this.instancePlayer.playVideo()}methodPause(){this.instancePlayer.pauseVideo()}methodSetVolume(e){this.instancePlayer.setVolume(100*e)}methodGetVolume(){return new window.Promise((e=>e(this.instancePlayer.getVolume()/100)))}methodMute(){this.instancePlayer.mute()}methodUnMute(){this.instancePlayer.unMute()}destroy(){this.instancePlayer.destroy(),super.destroy()}}if(void 0===window.YT){const e=document.createElement("script");e.async=!0,e.type="text/javascript",e.src="https://youtube.com/iframe_api",window.onYouTubeIframeAPIReady=()=>{n.forEach((e=>{e.initYoutubePlayer().then((()=>{e.onPlayerReady()}))})),n=[]},document.getElementsByTagName("body")[0].appendChild(e)}t.default=i}.apply(t,[n,t]))||(e.exports=i)}},t={};var n=function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}(464);return n=n.default})()}));