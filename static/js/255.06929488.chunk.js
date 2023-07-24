"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[255],{3255:function(t,n,e){e.r(n),e.d(n,{default:function(){return w}});var r,a,c,u=e(5861),o=e(9439),s=e(4687),i=e.n(s),p=e(2791),l=e(7689),f=e(8221),h=e(168),v=e(7691),d=v.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  height: fit-content;\n  max-height: 700px;\n  overflow-y: scroll;\n"]))),m=v.ZP.li(a||(a=(0,h.Z)(["\n  padding: 10px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border-radius: 4px;\n"]))),x=v.ZP.p(c||(c=(0,h.Z)(["\n    margin-bottom: 10px;\n"]))),g=e(184),w=function(){var t=(0,p.useState)([]),n=(0,o.Z)(t,2),e=n[0],r=n[1],a=(0,p.useState)(null),c=(0,o.Z)(a,2),s=c[0],h=c[1],v=(0,l.UO)().movieId;return(0,p.useEffect)((function(){function t(){return(t=(0,u.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f._r)(v);case 3:if((n=t.sent).total_results){t.next=6;break}throw new Error("We don't have any reviews for this movie");case 6:r(n.results),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),h(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[v]),(0,g.jsxs)(g.Fragment,{children:[s&&(0,g.jsx)("h2",{children:s.message}),(0,g.jsx)(d,{children:e.map((function(t){return(0,g.jsxs)(m,{children:[(0,g.jsxs)("h3",{children:["Author: ",t.author]}),(0,g.jsx)(x,{children:t.content})]},t.id)}))})]})}},8221:function(t,n,e){e.d(n,{Hg:function(){return p},Jh:function(){return m},TP:function(){return v},YQ:function(){return i},_r:function(){return g},ld:function(){return f}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243),o="f5c750e62498ce7d84b29e02e1f941bc",s="https://api.themoviedb.org/3",i="https://image.tmdb.org/t/p/original/";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/trending/movie/day"),{params:{api_key:"".concat(o)}});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(c().mark((function t(){var n,e,r=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"",t.prev=1,t.next=4,u.Z.get("".concat(s,"/search/movie"),{params:{api_key:"".concat(o),query:n}});case 4:return e=t.sent,t.abrupt("return",e.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),h.apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/movie/").concat(n),{params:{api_key:"".concat(o)}});case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/movie/").concat(n,"/credits"),{params:{api_key:"".concat(o)}});case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function g(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/movie/").concat(n,"/reviews"),{params:{api_key:"".concat(o)}});case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=255.06929488.chunk.js.map