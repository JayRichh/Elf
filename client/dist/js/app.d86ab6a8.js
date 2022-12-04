(function(){"use strict";var e={640:function(e,t,n){var a=n(821);const i={id:"app"},o={key:0,id:"nav-bar"};function r(e,t,n,r,s,l){const c=(0,a.up)("router-link"),u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",i,[s.playing?((0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(c,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1}),(0,a.Wm)(c,{to:"/game"},{default:(0,a.w5)((()=>[(0,a.Uk)("Game")])),_:1})])):(0,a.kq)("",!0),(0,a.Wm)(u)])}var s=n(594),l={name:"App",data(){return{elves:[],playing:!1}},async mount(){const e=await s.Z.get("http://localhost:3000/api/elf");this.elves=e.data}},c=n(3744);const u=(0,c.Z)(l,[["render",r]]);var m=u,d=n(2201),h=(n(7658),n.p+"img/houses.2215fbb3.jpg");const f=e=>((0,a.dD)("data-v-24b58f0d"),e=e(),(0,a.Cn)(),e),p={class:"game-window"},v=f((()=>(0,a._)("h3",null,"Find the elves!",-1))),g={class:"timer"},w={class:"game-window__container"},_={class:"image-container"},k=f((()=>(0,a._)("img",{src:h,class:"gameboard-img",alt:"elf background"},null,-1))),b=["onClick","src","id"];function y(e,t,n,i,o,r){const s=(0,a.up)("CustomModal");return(0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("nav",null,[v,(0,a._)("h4",g,"Time: "+(0,a.zw)(o.timer),1),(0,a._)("h4",null,"Elves remaining: "+(0,a.zw)(r.elvesRemaining),1),(0,a._)("div",null,[(0,a._)("button",{onClick:t[0]||(t[0]=t=>e.$router.push("/"))},"Restart")])]),o.modal?((0,a.wg)(),(0,a.j4)(s,{key:0,show:o.modal,onConfirm:e.confirm,onCancel:e.cancel,timeTaken:r.timeTaken},null,8,["show","onConfirm","onCancel","timeTaken"])):(0,a.kq)("",!0),(0,a._)("div",w,[(0,a._)("div",_,[k,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.elves,(e=>((0,a.wg)(),(0,a.iD)("img",{key:e._id,class:"game-window__elf",onClick:t=>r.handleElfClick(e),src:e.url,alt:"elf",id:"elf"+e.elfId,draggable:"false"},null,8,b)))),128))])])])}const T=e=>((0,a.dD)("data-v-f64f21da"),e=e(),(0,a.Cn)(),e),C={class:"modal"},O=T((()=>(0,a._)("h2",null,"Well done!",-1))),S=T((()=>(0,a._)("h4",null,"Please enter your name",-1))),D={class:"modal-buttons"};function j(e,t,n,i,o,r){return(0,a.wg)(),(0,a.iD)("div",C,[O,(0,a._)("h3",null,"You found all the elves in "+(0,a.zw)(n.timeTaken)+" seconds",1),S,(0,a.wy)((0,a._)("input",{type:"text",name:"name",id:"name",placeholder:"Enter your name","onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t)},null,512),[[a.nr,e.name]]),(0,a._)("div",D,[(0,a._)("button",{class:"cancel",onClick:t[1]||(t[1]=(...e)=>r.cancel&&r.cancel(...e))},"Cancel"),(0,a._)("button",{class:"confirm",onClick:t[2]||(t[2]=(...e)=>r.confirm&&r.confirm(...e))},"Confirm")])])}var G={name:"CustomModal",props:{show:{type:Boolean,default:!1},timeTaken:{type:Number,default:0}},data:function(){return{name:""}},methods:{async confirm(){if(""!==this.name)try{await s.Z.post("http://localhost:3000/api/highScore",{name:this.name,timeTaken:this.timeTaken}),this.$router.push("/")}catch(e){console.log(e)}},cancel(){this.$router.push("/")}},computed:{nameInput(){return this.name}}};const Z=(0,c.Z)(G,[["render",j],["__scopeId","data-v-f64f21da"]]);var I=Z,M={name:"GameWindow",data(){return{elves:[],timer:0,name:"",gameOver:!1,modal:!1}},async mounted(){const e=await s.Z.get("http://localhost:3000/api/elf");this.elves=e.data,console.log(this.elves),this.startTimer()},methods:{resetTimer(){this.timer=0},startTimer(){this.modal||this.gameOver||(this.timer=Math.round(100*(this.timer+.01))/100,setTimeout(this.startTimer,10))},pauseTimer(){clearInterval(this.timer)},reset(){this.$router.push("/")},endGame(){this.gameOver=!0,this.modal=!0,this.pauseTimer()},openModal(){this.modal=!0,this.pauseTimer()},handleElfClick(e){const t=this.elves.find((t=>t._id===e._id));this.elves.splice(this.elves.indexOf(t),1),0===this.elves.length&&this.endGame()}},components:{CustomModal:I},computed:{elvesRemaining(){return this.elves.length},timeTaken(){return this.timer}}};const P=(0,c.Z)(M,[["render",y],["__scopeId","data-v-24b58f0d"]]);var x=P;const E=e=>((0,a.dD)("data-v-782b7e53"),e=e(),(0,a.Cn)(),e),z={class:"splash-screen"},W=E((()=>(0,a._)("h1",null,"Elf Invaders",-1))),$=E((()=>(0,a._)("h2",null,"Quickest Times",-1)));function H(e,t,n,i,o,r){return(0,a.wg)(),(0,a.iD)("div",z,[W,(0,a._)("button",{class:"play",onClick:t[0]||(t[0]=(...e)=>r.startGame&&r.startGame(...e))},"Play"),$,(0,a._)("ul",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.highScores,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id},(0,a.zw)(e.name)+": "+(0,a.zw)(e.timeTaken)+"s ",1)))),128))])])}var R={name:"SplashScreen",data(){return{highScores:[]}},async mounted(){const e=await s.Z.get("http://localhost:3000/api/highScore");this.highScores=e.data.sort(((e,t)=>e.timeTaken-t.timeTaken)).slice(0,10)},methods:{startGame(){this.$router.push("/game")}}};const U=(0,c.Z)(R,[["render",H],["__scopeId","data-v-782b7e53"]]);var Y=U;const q=[{path:"/",name:"Splash",component:Y},{path:"/game",name:"Game",component:x}],F=(0,d.p7)({history:(0,d.PO)("/"),routes:q});var K=F;(0,a.ri)(m).use(K).mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],i=e[u][1],o=e[u][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(s=!1,o<r&&(r=o));if(s){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,i,o]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,r=a[0],s=a[1],l=a[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var u=l(n)}for(t&&t(a);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunkclient"]=self["webpackChunkclient"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(640)}));a=n.O(a)})();
//# sourceMappingURL=app.d86ab6a8.js.map