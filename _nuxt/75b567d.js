(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4],{259:function(t,e,o){var content=o(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("907a084c",content,!0,{sourceMap:!1})},262:function(t,e,o){"use strict";o(259)},263:function(t,e,o){var d=o(53)(!1);d.push([t.i,".imagetext-top-content[data-v-d911f956]{width:100%}.imagetext i[data-v-d911f956]{margin-top:1rem;font-size:50px}.imagetext-subtitle[data-v-d911f956]{margin-top:2rem}.imagetext-body[data-v-d911f956]{margin-top:2rem;color:var(--color-black);line-height:1.8}.imagetext-body.bottom[data-v-d911f956]{margin-bottom:4rem}@media screen and (max-width:9000px){.imagetext-top-content[data-v-d911f956]{display:flex}.imagetext-img[data-v-d911f956]{width:var(--image-width)}.imagetext-img[data-v-d911f956]:not(.clickable),.img-link[data-v-d911f956]{margin-right:5rem}.flex-container[data-v-d911f956]{display:flex}.imagetext-right-content[data-v-d911f956]{width:100%;margin-top:auto;margin-bottom:auto}}@media screen and (max-width:500px){.imagetext-title[data-v-d911f956]{margin-top:20px;margin-bottom:20px}.imagetext-body[data-v-d911f956]{text-align:justify}.imagetext-top-content[data-v-d911f956]{display:block}.flex-container[data-v-d911f956]{display:flex;padding-left:0}.imagetext-right-content[data-v-d911f956]{width:unset;padding-left:0;padding-top:1rem}.imagetext-img[data-v-d911f956]{width:100%;padding-right:0}}",""]),t.exports=d},265:function(t,e,o){"use strict";o.r(e);var d=o(1).a.extend({props:{title:{type:String,default:""},subtitle:{type:String,default:""},bodyText:{type:String,default:""},bodyTextBelow:{type:Boolean,default:!1},image:{type:String,default:""},imageClickable:{type:Boolean,default:!1},icon:{type:String,default:""},titleSizePx:{type:String,default:"35"},subtitleSizePx:{type:String,default:"24"},imageWidthPx:{type:String,default:"400"},bodySizePx:{type:String,default:"18"}},computed:{cssProps:function(){return{"--image-width":this.imageWidthPx+"px"}}}}),n=(o(262),o(28)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"imagetext",style:t.cssProps},[o("div",{staticClass:"imagetext-top-content"},[t.image&&!t.imageClickable?o("img",{staticClass:"imagetext-img",attrs:{src:t.image}}):t._e(),t._v(" "),t.image&&t.imageClickable?o("a",{staticClass:"img-link",attrs:{href:t.image,target:"_blank"}},[o("img",{staticClass:"imagetext-img clickable",attrs:{src:t.image}})]):t._e(),t._v(" "),o("div",{staticClass:"flex-container"},[o("div",{staticClass:"imagetext-right-content"},[t.icon?o("i",{staticClass:"imagetext-icon",class:t.icon}):t._e(),t._v(" "),t.title?o("h4",{staticClass:"imagetext-title title"},[t._v("\n          "+t._s(t.title)+"\n        ")]):t._e(),t._v(" "),t.subtitle?o("h4",{staticClass:"imagetext-subtitle subtitle"},[t._v("\n          "+t._s(t.subtitle)+"\n        ")]):t._e(),t._v(" "),t.bodyText&&!t.bodyTextBelow?o("p",{staticClass:"imagetext-body",domProps:{innerHTML:t._s(t.bodyText)}}):t._e()])])]),t._v(" "),t.bodyText&&t.bodyTextBelow?o("p",{staticClass:"imagetext-body bottom",domProps:{innerHTML:t._s(t.bodyText)}}):t._e()])}),[],!1,null,"d911f956",null);e.default=component.exports},277:function(t,e,o){var content=o(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("64b768e7",content,!0,{sourceMap:!1})},295:function(t,e,o){t.exports=o.p+"img/method_1.8bfe1e0.jpg"},296:function(t,e,o){t.exports=o.p+"img/method_2.7186838.jpg"},297:function(t,e,o){t.exports=o.p+"img/method_3.c72a179.jpg"},298:function(t,e,o){t.exports=o.p+"img/method_4.929b41d.jpg"},299:function(t,e,o){t.exports=o.p+"img/method_5.ef0b17e.jpg"},300:function(t,e,o){"use strict";o(277)},301:function(t,e,o){var d=o(53)(!1);d.push([t.i,".method-item[data-v-07d1d9a6]{margin-bottom:40px}.body-text[data-v-07d1d9a6]{margin-bottom:3rem;line-height:1.8}#method-items[data-v-07d1d9a6]{margin-top:5rem;margin-bottom:75px}",""]),t.exports=d},324:function(t,e,o){"use strict";o.r(e);var d=o(1).a.extend({data:function(){return{body_text:this.$root.context.app.i18n.t("pages.method.body"),pictures:[o(295),o(296),o(297),o(298),o(299)]}}}),n=(o(300),o(28)),component=Object(n.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"main-content"}},[o("h2",{staticClass:"page-title title"},[t._v("\n    "+t._s(t.$t("pages.method.title"))+"\n  ")]),t._v(" "),o("h4",{staticClass:"page-subtitle subtitle"},[t._v("\n    "+t._s(t.$t("pages.method.subtitle"))+"\n  ")]),t._v(" "),o("p",{staticClass:"body-text",domProps:{innerHTML:t._s(t.body_text)}}),t._v(" "),o("div",{attrs:{id:"method-items"}},t._l(t.$t("pages.method.items"),(function(e,d){return o("ImageTextDisplay",{key:d,staticClass:"method-item",attrs:{title:e.title,subtitle:e.subtitle,"body-text":e.body,image:t.pictures[d]}})})),1)])}),[],!1,null,"07d1d9a6",null);e.default=component.exports;installComponents(component,{ImageTextDisplay:o(265).default})}}]);