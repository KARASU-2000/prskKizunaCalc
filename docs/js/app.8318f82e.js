(function(){"use strict";var e={8075:function(e,n,t){var a=t(9242),r=t(3396);function i(e,n,t,a,i,o){const u=(0,r.up)("Header"),l=(0,r.up)("router-view"),c=(0,r.up)("Fotter");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(u),(0,r.Wm)(l),(0,r.Wm)(c)],64)}var o=t(7139);function u(e,n,t,a,i,u){return(0,r.wg)(),(0,r.iD)("h3",{class:"header",onClick:n[0]||(n[0]=(...e)=>u.onHeaderClick&&u.onHeaderClick(...e))},(0,o.zw)(i.title),1)}t(7658);const l="/",c="/disclaimer",s="S",p="A",_="B",k="C",d="D",m="サブリーダーに設定",f="メンバーに設定",v=1,A=55,x=15,g=13,R=11,N=10,h=5,b=10,I=1;var K={PAGE_HOME:l,PAGE_DISCLAIMER:c,RANK_S:s,RANK_A:p,RANK_B:_,RANK_C:k,RANK_D:d,KIZUNA_RANK_MIN:v,KIZUNA_RANK_MAX:A,RANK_S_EXP:x,RANK_A_EXP:g,RANK_B_EXP:R,RANK_C_EXP:N,RANK_D_EXP:h,ORGANIZATION_SUB:m,ORGANIZATION_MEMBER:f,ORGANIZATION_SUB_RATIO:b,ORGANIZATION_MEMBER_RATIO:I},O={data(){return{title:"プロセカ キズナランク計算"}},methods:{onHeaderClick(){this.$router.push(K.PAGE_HOME)}}},E=t(89);const C=(0,E.Z)(O,[["render",u]]);var U=C;const w={class:"footer"};function Z(e,n){const t=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",w,[(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Wm)(t,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("トップページ")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(t,{to:"/disclaimer"},{default:(0,r.w5)((()=>[(0,r.Uk)("免責事項")])),_:1})])])])}const M={},T=(0,E.Z)(M,[["render",Z]]);var B=T,D={name:"App",components:{Header:U,Fotter:B}};const y=(0,E.Z)(D,[["render",i]]);var L=y,S=t(2483);const P={class:"content"},X=(0,r._)("br",null,null,-1),z=(0,r._)("a",{href:"https://pjsekai.com/?6d8e00d4c6"},"プロジェクトセカイ攻略Wiki",-1),V={class:"input_filed"},G={class:"input_field_section"},H={class:"input_kizuna_rank"},W={class:"input_kizuna_rank"},j={class:"input_field_section"},F={class:"input_clear_rank"},Y={class:"input_field_section"},q={class:"input_organization"},$={class:"input_field_section"},J=(0,r._)("hr",null,null,-1),Q={class:"output_field"};function ee(e,n,t,a,i,o){const u=(0,r.up)("NumberInputBox"),l=(0,r.up)("RadioButton"),c=(0,r.up)("Button"),s=(0,r.up)("Table");return(0,r.wg)(),(0,r.iD)("div",P,[(0,r.Uk)(" 目標のキズナランクまでに必要なライブ回数の計算を行います。"),X,(0,r.Uk)(" 各キズナランクの必要EXPは"),z,(0,r.Uk)("様の情報を参照させていただきました。 "),(0,r._)("div",V,[(0,r._)("div",G,[(0,r._)("div",H,[(0,r.Wm)(u,{text:"現在のキズナランク",name:"current_rank",min:"1",max:"55",onUpdateValue:n[0]||(n[0]=e=>i.currentRank=e)})]),(0,r._)("div",W,[(0,r.Wm)(u,{text:"目標のキズナランク",name:"target_rank",min:"1",max:"55",onUpdateValue:n[1]||(n[1]=e=>i.targetRank=e)})])]),(0,r._)("div",j,[(0,r._)("div",F,[(0,r.Uk)(" ライブのクリアランク "),(0,r.Wm)(l,{name:"rdb_clear_rank",itemList:i.itemListClearRank,isFlex:"true",onUpdateValue:n[2]||(n[2]=e=>i.clearRank=e)},null,8,["itemList"])])]),(0,r._)("div",Y,[(0,r._)("div",q,[(0,r.Uk)(" 編成 "),(0,r.Wm)(l,{name:"rdb_setting",itemList:i.itemListOrganization,onUpdateValue:n[3]||(n[3]=e=>i.organization=e)},null,8,["itemList"])])]),(0,r._)("div",$,[(0,r.Wm)(c,{name:"btn_calc",value:"計算",class:"input_button",onClick:o.onCaclClick},null,8,["onClick"]),(0,r.Wm)(c,{name:"btn_reset",value:"クリア",class:"input_button",onClick:o.onResetClick},null,8,["onClick"])])]),J,(0,r._)("div",Q,[(0,r.Wm)(s,{itemList:i.outputTable},null,8,["itemList"])])])}const ne=["name","min","max"];function te(e,n,t,a,i,u){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Uk)((0,o.zw)(t.text)+" ",1),(0,r._)("input",{type:"number",name:t.name,min:t.min,max:t.max,onInput:n[0]||(n[0]=e=>u.onInput(e))},null,40,ne)],64)}var ae={props:{text:String,name:String,min:String,max:String},methods:{onInput:function(e){this.$emit("updateValue",e.target.value)}}};const re=(0,E.Z)(ae,[["render",te]]);var ie=re;const oe=["name","value","checked"];function ue(e,n,t,a,i,u){return(0,r.wg)(),(0,r.iD)("div",{class:(0,o.C_)({flex:t.isFlex})},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.itemList,((e,a)=>((0,r.wg)(),(0,r.iD)("div",{key:a},[(0,r._)("input",{type:"radio",name:t.name,value:e.value,checked:e.defaultChecked,onChange:n[0]||(n[0]=(...e)=>u.onUpdate&&u.onUpdate(...e))},null,40,oe),(0,r.Uk)(" "+(0,o.zw)(e.value),1)])))),128))],2)}var le={props:{name:String,isFlex:Boolean,itemList:Array["defaultChecked"]},methods:{onUpdate:function(e){this.$emit("updateValue",e.target.value)}}};const ce=(0,E.Z)(le,[["render",ue]]);var se=ce;const pe=["name","value"];function _e(e,n,t,a,i,o){return(0,r.wg)(),(0,r.iD)("input",{type:"button",class:"inputButton",name:t.name,value:t.value},null,8,pe)}var ke={props:{name:String,value:String}};const de=(0,E.Z)(ke,[["render",_e]]);var me=de;function fe(e,n,t,a,i,u){return(0,r.wg)(),(0,r.iD)("table",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.itemList,((e,n)=>((0,r.wg)(),(0,r.iD)("tr",{key:n},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e,((e,n)=>((0,r.wg)(),(0,r.iD)("th",{key:n},(0,o.zw)(e),1)))),128))])))),128))])}var ve={props:{itemList:Array}};const Ae=(0,E.Z)(ve,[["render",fe]]);var xe=Ae;function ge(){let e=[{rank:1,exp:0},{rank:2,exp:7224},{rank:3,exp:7224},{rank:4,exp:7224},{rank:5,exp:7224},{rank:6,exp:7224},{rank:7,exp:28094},{rank:8,exp:28094},{rank:9,exp:28094},{rank:10,exp:60200},{rank:11,exp:60200},{rank:12,exp:60200},{rank:13,exp:70234},{rank:14,exp:70234},{rank:15,exp:70234},{rank:16,exp:100332},{rank:17,exp:100332},{rank:18,exp:100332},{rank:19,exp:130432},{rank:20,exp:130432},{rank:21,exp:130432},{rank:22,exp:160534},{rank:23,exp:160534},{rank:24,exp:160534},{rank:25,exp:210700},{rank:26,exp:210700},{rank:27,exp:210700},{rank:28,exp:250834},{rank:29,exp:250834},{rank:30,exp:250834},{rank:31,exp:280934},{rank:32,exp:280934},{rank:33,exp:280934},{rank:34,exp:301e3},{rank:35,exp:301e3},{rank:36,exp:301e3},{rank:37,exp:301e3},{rank:38,exp:301e3},{rank:39,exp:301e3},{rank:40,exp:301e3},{rank:41,exp:301e3},{rank:42,exp:301e3},{rank:43,exp:301e3},{rank:44,exp:301e3},{rank:45,exp:301e3},{rank:46,exp:301e3},{rank:47,exp:301e3},{rank:48,exp:301e3},{rank:49,exp:301e3},{rank:50,exp:301e3},{rank:51,exp:301e3},{rank:52,exp:301e3},{rank:53,exp:301e3},{rank:54,exp:301e3},{rank:55,exp:301e3}];return e}function Re(){let e=[{boost:1,magnification:5},{boost:2,magnification:10},{boost:3,magnification:14},{boost:4,magnification:17},{boost:5,magnification:20},{boost:6,magnification:21},{boost:7,magnification:22},{boost:8,magnification:23},{boost:9,magnification:24},{boost:10,magnification:25}];return e}var Ne={getExpTable:ge,getMagnificationTable:Re};function he(e){let n,t;try{n=Ne.getExpTable(),t=0;for(let a=0;a<e;a++)t+=n[a]["exp"];return t}catch(a){console.error(a)}}function be(e,n){let t,a,r=[];try{t=Ne.getMagnificationTable();for(let i=0;i<t.length;i++)a=Math.ceil(e/(n*t[i]["magnification"])),r[i]=a;return r}catch(i){console.error(i)}}var Ie={getRequiredExp:he,getTryLiveCount:be},Ke={components:{NumberInputBox:ie,RadioButton:se,Button:me,Table:xe},data(){return{currentRank:0,targetRank:0,clearRank:K.RANK_S,itemListClearRank:[{value:K.RANK_S,calcValue:K.RANK_S_EXP,defaultChecked:"true"},{value:K.RANK_A,calcValue:K.RANK_A_EXP},{value:K.RANK_B,calcValue:K.RANK_B_EXP},{value:K.RANK_C,calcValue:K.RANK_C_EXP},{value:K.RANK_D,calcValue:K.RANK_D_EXP}],organization:K.ORGANIZATION_SUB,itemListOrganization:[{value:K.ORGANIZATION_SUB,calcValue:K.ORGANIZATION_SUB_RATIO,defaultChecked:"true"},{value:K.ORGANIZATION_MEMBER,calcValue:K.ORGANIZATION_MEMBER_RATIO}],outputTable:[{id:"ブースト消費量",value:"ライブ回数"},{id:"1",value:""},{id:"2",value:""},{id:"3",value:""},{id:"4",value:""},{id:"5",value:""},{id:"6",value:""},{id:"7",value:""},{id:"8",value:""},{id:"9",value:""},{id:"10",value:""}]}},methods:{onCaclClick(){let e=Number(this.currentRank),n=Number(this.targetRank);if(e<K.KIZUNA_RANK_MIN||e>K.KIZUNA_RANK_MAX)return void alert("現在ランクは"+K.KIZUNA_RANK_MIN+"～"+K.KIZUNA_RANK_MAX+"いずれかを入力してください");if(n<K.KIZUNA_RANK_MIN||n>K.KIZUNA_RANK_MAX)return void alert("目標ランクは"+K.KIZUNA_RANK_MIN+"～"+K.KIZUNA_RANK_MAX+"いずれかを入力してください");if(n<=e)return void alert("目標ランクは現在ランクよりも高い数値を入力してください");let t=this.itemListClearRank.filter((e=>e.value===this.clearRank))[0].calcValue*this.itemListOrganization.filter((e=>e.value===this.organization))[0].calcValue,a=Ie.getTryLiveCount(Ie.getRequiredExp(n)-Ie.getRequiredExp(e),t);for(let r=0;r<a.length;r++)this.outputTable[r+1].value=a[r]+"回";alert("計算完了しました")},onResetClick(){confirm("入力と計算結果をクリアしますがよろしいですか？")&&window.location.reload()}}};const Oe=(0,E.Z)(Ke,[["render",ee]]);var Ee=Oe;const Ce={class:"content"},Ue=(0,r._)("h4",null,"免責事項",-1),we=(0,r._)("div",{class:"disclaimer"},[(0,r._)("p",null,[(0,r.Uk)(" 当サイトのコンテンツや情報において、可能な限り正確な情報を掲載するよう努めています。"),(0,r._)("br"),(0,r.Uk)(" しかし、誤情報が入り込んだり、情報が古くなったりすることもあります。"),(0,r._)("br"),(0,r.Uk)(" 必ずしも正確性を保証するものではありません。また合法性や安全性なども保証しません。 ")]),(0,r._)("p",null," 当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますので、ご了承ください。 ")],-1),Ze=[Ue,we];function Me(e,n){return(0,r.wg)(),(0,r.iD)("div",Ce,Ze)}const Te={},Be=(0,E.Z)(Te,[["render",Me]]);var De=Be;const ye=(0,S.p7)({history:(0,S.PO)(),routes:[{path:K.PAGE_HOME,name:"home",component:Ee},{path:K.PAGE_DISCLAIMER,name:"disclaimer",component:De}]});var Le=ye;(0,a.ri)(L).use(Le).mount("#app")}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var i=n[a]={exports:{}};return e[a].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,a,r,i){if(!a){var o=1/0;for(s=0;s<e.length;s++){a=e[s][0],r=e[s][1],i=e[s][2];for(var u=!0,l=0;l<a.length;l++)(!1&i||o>=i)&&Object.keys(t.O).every((function(e){return t.O[e](a[l])}))?a.splice(l--,1):(u=!1,i<o&&(o=i));if(u){e.splice(s--,1);var c=r();void 0!==c&&(n=c)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[a,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var r,i,o=a[0],u=a[1],l=a[2],c=0;if(o.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(l)var s=l(t)}for(n&&n(a);c<o.length;c++)i=o[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},a=self["webpackChunkprsk_kizuna_calc"]=self["webpackChunkprsk_kizuna_calc"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(8075)}));a=t.O(a)})();
//# sourceMappingURL=app.8318f82e.js.map