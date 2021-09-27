(this["webpackJsonprick-and-morty-bible"]=this["webpackJsonprick-and-morty-bible"]||[]).push([[0],{108:function(e,n,t){"use strict";t.r(n);var c,a,i,r,o,d,s,j,b,l,x,h,O,u,p,g=t(2),m=t.n(g),f=t(69),v=t.n(f),w=(t(84),t(12)),k=t(14),y=t(32),P=t(10),C=t(33),S=t(70),E=t.n(S),F=function(e){var n=Object(g.useState)([]),t=Object(C.a)(n,2),c=t[0],a=t[1];return Object(g.useEffect)((function(){E.a.get("https://rickandmortyapi.com/api/character/".concat(e)).then((function(e){a(e.data)}))}),[e]),{character:c}},B=t(4),I=k.a.img(c||(c=Object(w.a)(["\n  margin-top: 20px;\n  height: 200px;\n  border-radius: 50%;\n  border: 5px solid #539bf5;\n"]))),L=k.a.h1(a||(a=Object(w.a)(["\n  color: #539bf5;\n"]))),N=k.a.h4(i||(i=Object(w.a)(["\n  color: #539bf5;\n  margin-bottom: -10px;\n"]))),T=k.a.p(r||(r=Object(w.a)(["\n  color: white;\n"]))),q=Object(k.a)(y.b)(o||(o=Object(w.a)(["\n  color: #539bf5;\n  border: 1px solid #539bf5;\n  padding: 10px;\n  text-decoration: none;\n  border-radius: 4px;\n"]))),J=function(){var e,n,t,c=Object(P.f)().id,a=F(c).character;return Object(B.jsxs)("div",{"data-testid":"character-container",children:[Object(B.jsx)(I,{src:a.image,alt:"".concat(a.name,"-image"),"data-testid":"character-image"}),Object(B.jsx)(L,{children:a.name}),Object(B.jsxs)("div",{children:[Object(B.jsx)(N,{children:"Species:"}),Object(B.jsx)(T,{children:a.species})]}),Object(B.jsxs)("div",{children:[Object(B.jsx)(N,{children:"Genre:"}),Object(B.jsx)(T,{children:a.gender})]}),(null===(e=a.location)||void 0===e?void 0:e.name)&&Object(B.jsxs)("div",{children:[Object(B.jsx)(N,{children:"Location:"}),Object(B.jsx)(T,{children:a.location.name})]}),(null===(n=a.origin)||void 0===n?void 0:n.name)&&Object(B.jsxs)("div",{children:[Object(B.jsx)(N,{children:"Origin:"}),Object(B.jsx)(T,{children:a.origin.name})]}),a.status&&Object(B.jsxs)("div",{children:[Object(B.jsx)(N,{children:"Status:"}),Object(B.jsx)(T,{children:a.status})]}),(null===(t=a.episode)||void 0===t?void 0:t.length)&&Object(B.jsxs)("div",{children:[Object(B.jsx)(N,{children:"Appears in:"}),Object(B.jsx)(T,{children:"".concat(a.episode.length," episodes")})]}),Object(B.jsx)(q,{to:"/",children:"Back"})]})},M=Object(g.createContext)(0),$=function(e){var n=e.children,t=Object(g.useState)(1),c=Object(C.a)(t,2),a=c[0],i=c[1];return Object(B.jsx)(M.Provider,{value:{counter:a,setCounter:i},children:n})},A=t(121),D=t(120),G=Object(D.a)(d||(d=Object(w.a)(["\n  query characters($page: Int) {\n    characters(page: $page) {\n      results {\n        name\n        image\n        id\n      }\n    }\n  }\n"]))),R=function(){var e=Object(g.useContext)(M),n=e.counter,t=e.setCounter,c=Object(g.useState)([]),a=Object(C.a)(c,2),i=a[0],r=a[1],o=Object(A.a)(G,{variables:{page:n}}),d=Object(C.a)(o,2),s=d[0],j=d[1].data;return Object(g.useEffect)((function(){s()}),[s]),Object(g.useEffect)((function(){j&&r(j.characters.results)}),[j]),{characters:i,getNextPage:function(){t(n+1),s()},getPreviousPage:function(){n>0&&t(n-1),s()}}},z=k.a.div(s||(s=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),H=k.a.div(j||(j=Object(w.a)(["\n  margin-bottom: 20px;\n"]))),K=k.a.button(b||(b=Object(w.a)(["\n  width: 100px;\n  border: 1px solid #539bf5;\n  border-radius: 5px;\n  padding: 10px 5px;\n  color: #539bf5;\n  background-color: transparent;\n  text-decoration: none;\n  margin-right: 10px;\n"]))),Q=k.a.div(l||(l=Object(w.a)(["\n  text-align: center;\n  display: inline-flex;\n  flex-wrap: wrap;\n  width: 70%;\n"]))),U=k.a.div(x||(x=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  margin: auto;\n  margin-bottom: 20px;\n  align-items: center;\n  border: 1px solid #539bf5;\n  border-radius: 10px;\n  padding: 30px 5px;\n  width: 200px;\n"]))),V=k.a.img(h||(h=Object(w.a)(["\n  height: 80px;\n  width: 80px;\n  border: 5px solid #539bf5;\n  border-radius: 50%;\n  margin-bottom: 5px;\n"]))),W=Object(k.a)(y.b)(O||(O=Object(w.a)(["\n  text-decoration: none;\n  color: #539bf5;\n"]))),X=function(){var e=R(),n=e.characters,t=e.getNextPage,c=e.getPreviousPage;return Object(B.jsxs)(z,{children:[Object(B.jsxs)(H,{children:[Object(B.jsx)(K,{onClick:function(){return c()},children:"< Previous"}),Object(B.jsx)(K,{onClick:function(){return t()},children:"Next >"})]}),Object(B.jsx)(Q,{children:null===n||void 0===n?void 0:n.map((function(e){return Object(B.jsxs)(U,{"data-testid":"avatar-container",children:[Object(B.jsx)(V,{src:e.image,alt:"".concat(e.name,"-image"),"data-testid":"avatar-image"}),Object(B.jsx)(W,{to:"/character/".concat(e.id),children:e.name})]},e.id)}))})]})},Y=t(118),Z=t(119),_=t(117),ee=k.a.div(u||(u=Object(w.a)(["\n  text-align: center;\n"]))),ne=k.a.h1(p||(p=Object(w.a)(["\n  color: #539bf5;\n  margin-bottom: 50px;\n"]))),te=new Y.a({uri:"https://rickandmortyapi.com/graphql",cache:new Z.a}),ce=function(){return Object(B.jsx)(_.a,{client:te,children:Object(B.jsx)(y.a,{basename:"/",children:Object(B.jsxs)(ee,{children:[Object(B.jsx)(ne,{children:"The Rick and Morty bible"}),Object(B.jsx)($,{children:Object(B.jsxs)(P.c,{children:[Object(B.jsx)(P.a,{exact:!0,path:"/",children:Object(B.jsx)(X,{})}),Object(B.jsx)(P.a,{path:"/character/:id",children:Object(B.jsx)(J,{})})]})})]})})})},ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,123)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),i(e),r(e)}))};v.a.render(Object(B.jsx)(m.a.StrictMode,{children:Object(B.jsx)(ce,{})}),document.getElementById("root")),ae()},84:function(e,n,t){}},[[108,1,2]]]);
//# sourceMappingURL=main.5ffbc7c6.chunk.js.map