(this["webpackJsonprick-and-morty-bible"]=this["webpackJsonprick-and-morty-bible"]||[]).push([[0],{108:function(e,n,t){"use strict";t.r(n);var c,a,i,r,o,d,s,b,j,l,x,h,O,u,p,g=t(2),m=t.n(g),f=t(69),v=t.n(f),k=(t(84),t(12)),w=t(14),y=t(32),P=t(10),C=t(33),S=t(70),B=t.n(S),E=function(e){var n=Object(g.useState)([]),t=Object(C.a)(n,2),c=t[0],a=t[1];return Object(g.useEffect)((function(){B.a.get("https://rickandmortyapi.com/api/character/".concat(e)).then((function(e){a(e.data)}))}),[e]),{character:c}},F=t(4),T=w.a.img(c||(c=Object(k.a)(["\n  margin-top: 20px;\n  height: 200px;\n  border-radius: 50%;\n  border: 5px solid #539bf5;\n"]))),I=w.a.h1(a||(a=Object(k.a)(["\n  color: #539bf5;\n"]))),L=w.a.h4(i||(i=Object(k.a)(["\n  color: #539bf5;\n  margin-bottom: -10px;\n"]))),M=w.a.p(r||(r=Object(k.a)(["\n  color: white;\n"]))),N=Object(w.a)(y.b)(o||(o=Object(k.a)(["\n  color: #539bf5;\n  border: 1px solid #539bf5;\n  padding: 10px;\n  text-decoration: none;\n  border-radius: 4px;\n"]))),q=function(){var e,n,t,c=Object(P.f)().id,a=E(c).character;return Object(F.jsxs)("div",{"data-testid":"character-container",children:[Object(F.jsx)(T,{src:a.image,alt:"".concat(a.name,"-image"),"data-testid":"character-image"}),Object(F.jsx)(I,{children:a.name}),Object(F.jsxs)("div",{children:[Object(F.jsx)(L,{children:"Species:"}),Object(F.jsx)(M,{children:a.species})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)(L,{children:"Genre:"}),Object(F.jsx)(M,{children:a.gender})]}),(null===(e=a.location)||void 0===e?void 0:e.name)&&Object(F.jsxs)("div",{children:[Object(F.jsx)(L,{children:"Location:"}),Object(F.jsx)(M,{children:a.location.name})]}),(null===(n=a.origin)||void 0===n?void 0:n.name)&&Object(F.jsxs)("div",{children:[Object(F.jsx)(L,{children:"Origin:"}),Object(F.jsx)(M,{children:a.origin.name})]}),a.status&&Object(F.jsxs)("div",{children:[Object(F.jsx)(L,{children:"Status:"}),Object(F.jsx)(M,{children:a.status})]}),(null===(t=a.episode)||void 0===t?void 0:t.length)&&Object(F.jsxs)("div",{children:[Object(F.jsx)(L,{children:"Appears in:"}),Object(F.jsx)(M,{children:"".concat(a.episode.length," episodes")})]}),Object(F.jsx)(N,{to:"/",children:"Back"})]})},J=Object(g.createContext)(0),R=function(e){var n=e.children,t=Object(g.useState)(1),c=Object(C.a)(t,2),a=c[0],i=c[1];return Object(F.jsx)(J.Provider,{value:{counter:a,setCounter:i},children:n})},$=t(121),A=t(120),D=Object(A.a)(d||(d=Object(k.a)(["\n  query characters($page: Int) {\n    characters(page: $page) {\n      results {\n        name\n        image\n        id\n      }\n    }\n  }\n"]))),G=function(){var e=Object(g.useContext)(J),n=e.counter,t=e.setCounter,c=Object(g.useState)([]),a=Object(C.a)(c,2),i=a[0],r=a[1],o=Object($.a)(D,{variables:{page:n}}),d=Object(C.a)(o,2),s=d[0],b=d[1].data;return Object(g.useEffect)((function(){s()}),[s]),Object(g.useEffect)((function(){b&&r(b.characters.results)}),[b]),{characters:i,getNextPage:function(){t(n+1),s()},getPreviousPage:function(){n>0&&t(n-1),s()}}},z=w.a.div(s||(s=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),H=w.a.div(b||(b=Object(k.a)(["\n  margin-bottom: 20px;\n"]))),K=w.a.button(j||(j=Object(k.a)(["\n  width: 100px;\n  border: 1px solid #539bf5;\n  border-radius: 5px;\n  padding: 10px 5px;\n  color: #539bf5;\n  background-color: transparent;\n  text-decoration: none;\n  margin-right: 10px;\n"]))),Q=w.a.div(l||(l=Object(k.a)(["\n  text-align: center;\n  display: inline-flex;\n  flex-wrap: wrap;\n  width: 70%;\n"]))),U=w.a.div(x||(x=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  margin: auto;\n  margin-bottom: 20px;\n  align-items: center;\n  border: 1px solid #539bf5;\n  border-radius: 10px;\n  padding: 30px 5px;\n  width: 200px;\n"]))),V=w.a.img(h||(h=Object(k.a)(["\n  height: 80px;\n  width: 80px;\n  border: 5px solid #539bf5;\n  border-radius: 50%;\n  margin-bottom: 5px;\n"]))),W=Object(w.a)(y.b)(O||(O=Object(k.a)(["\n  text-decoration: none;\n  color: #539bf5;\n"]))),X=function(){var e=G(),n=e.characters,t=e.getNextPage,c=e.getPreviousPage;return Object(F.jsxs)(z,{children:[Object(F.jsxs)(H,{children:[Object(F.jsx)(K,{onClick:function(){return c()},children:"< Previous"}),Object(F.jsx)(K,{onClick:function(){return t()},children:"Next >"})]}),Object(F.jsx)(Q,{children:null===n||void 0===n?void 0:n.map((function(e){return Object(F.jsxs)(U,{"data-testid":"avatar-container",children:[Object(F.jsx)(V,{src:e.image,alt:"".concat(e.name,"-image"),"data-testid":"avatar-image"}),Object(F.jsx)(W,{to:"/character/".concat(e.id),children:e.name})]},e.id)}))})]})},Y=t(118),Z=t(119),_=t(117),ee=w.a.div(u||(u=Object(k.a)(["\n  text-align: center;\n"]))),ne=w.a.h1(p||(p=Object(k.a)(["\n  color: #539bf5;\n  margin-bottom: 50px;\n"]))),te=new Y.a({uri:"https://rickandmortyapi.com/graphql",cache:new Z.a}),ce=function(){return Object(F.jsx)(_.a,{client:te,children:Object(F.jsx)(y.a,{basemname:"/".concat("/github.io/The-Rick-and-Morty-Bible"),children:Object(F.jsxs)(ee,{children:[Object(F.jsx)(ne,{children:"The Rick and Morty bible"}),Object(F.jsx)(R,{children:Object(F.jsxs)(P.c,{children:[Object(F.jsx)(P.a,{exact:!0,path:"/",children:Object(F.jsx)(X,{})}),Object(F.jsx)(P.a,{path:"/character/:id",children:Object(F.jsx)(q,{})})]})})]})})})},ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,123)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),i(e),r(e)}))};v.a.render(Object(F.jsx)(m.a.StrictMode,{children:Object(F.jsx)(ce,{})}),document.getElementById("root")),ae()},84:function(e,n,t){}},[[108,1,2]]]);
//# sourceMappingURL=main.ee522e36.chunk.js.map