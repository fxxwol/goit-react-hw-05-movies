"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{415:function(t,e,n){n.r(e);var r=n(861),c=n(439),a=n(757),u=n.n(a),o=n(791),s=n(221),i=n(689),p=n(87),l=n(184);e.default=function(t){var e=(0,o.useState)([]),n=(0,c.Z)(e,2),a=n[0],f=n[1],h=(0,i.TH)();return(0,o.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.Hg)();case 3:e=t.sent,f(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"Trending today"}),(0,l.jsx)("ul",{children:a.map((function(t){var e=t.id,n=t.title;return(0,l.jsx)("li",{children:(0,l.jsx)(p.rU,{to:"movies/".concat(e),state:{from:h},children:n})},e)}))})]})}},221:function(t,e,n){n.d(e,{Hg:function(){return i},TP:function(){return h},ld:function(){return l}});var r=n(861),c=n(757),a=n.n(c),u=n(243),o="f5c750e62498ce7d84b29e02e1f941bc",s="https://api.themoviedb.org/3";function i(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/trending/movie/day"),{params:{api_key:"".concat(o)}});case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function l(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(a().mark((function t(){var e,n,r=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",t.prev=1,t.next=4,u.Z.get("".concat(s,"/search/movie"),{params:{api_key:"".concat(o),query:e}});case 4:return n=t.sent,t.abrupt("return",n.data);case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),f.apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(s,"/movie/").concat(e),{params:{api_key:"".concat(o)}});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=415.44591f4c.chunk.js.map