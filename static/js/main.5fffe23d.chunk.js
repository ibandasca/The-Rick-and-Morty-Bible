(this["webpackJsonprick-and-morty-bible"]=this["webpackJsonprick-and-morty-bible"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var c,i,a,r,o,d,s,j,b,l,x,O,h,u,p,g,f,m,v=n(2),k=n.n(v),w=n(69),y=n.n(w),C=(n(84),n(10)),P=n(12),S=n(33),L=n(11),F=n(30),E=n(70),N=n.n(E),B=function(e){var t=Object(v.useState)([]),n=Object(F.a)(t,2),c=n[0],i=n[1],a=Object(v.useState)(!0),r=Object(F.a)(a,2),o=r[0],d=r[1];return Object(v.useEffect)((function(){N.a.get("https://rickandmortyapi.com/api/character/".concat(e)).then((function(e){i(e.data)})).finally((function(){return d(!1)}))}),[e]),{character:c,isLoading:o}},I=n(3),T=P.a.p(c||(c=Object(C.a)(["\n  font-size: 22px;\n  color: #539bf5;\n"]))),q=P.a.div(i||(i=Object(C.a)(["\n  margin-bottom: 20px;\n"]))),z=P.a.img(a||(a=Object(C.a)(["\n  margin-top: 20px;\n  height: 200px;\n  border-radius: 50%;\n  border: 5px solid #539bf5;\n"]))),J=P.a.h1(r||(r=Object(C.a)(["\n  color: #539bf5;\n"]))),M=P.a.h4(o||(o=Object(C.a)(["\n  color: #539bf5;\n  margin-bottom: -10px;\n"]))),$=P.a.p(d||(d=Object(C.a)(["\n  color: white;\n"]))),A=Object(P.a)(S.b)(s||(s=Object(C.a)(["\n  color: #539bf5;\n  border: 1px solid #539bf5;\n  padding: 10px;\n  text-decoration: none;\n  border-radius: 4px;\n"]))),D=function(){var e,t,n,c=Object(L.f)().id,i=B(c),a=i.character,r=i.isLoading;return Object(I.jsx)(I.Fragment,{children:r?Object(I.jsx)(T,{children:"Loading..."}):Object(I.jsxs)("div",{children:[Object(I.jsx)(q,{children:Object(I.jsx)(A,{to:"/",children:"< Back"})}),Object(I.jsxs)("div",{"data-testid":"character-container",children:[Object(I.jsx)(z,{src:a.image,alt:"".concat(a.name,"-image"),"data-testid":"character-image"}),Object(I.jsx)(J,{children:a.name}),Object(I.jsxs)("div",{children:[Object(I.jsx)(M,{children:"Species:"}),Object(I.jsx)($,{children:a.species})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)(M,{children:"Genre:"}),Object(I.jsx)($,{children:a.gender})]}),(null===(e=a.location)||void 0===e?void 0:e.name)&&Object(I.jsxs)("div",{children:[Object(I.jsx)(M,{children:"Location:"}),Object(I.jsx)($,{children:a.location.name})]}),(null===(t=a.origin)||void 0===t?void 0:t.name)&&Object(I.jsxs)("div",{children:[Object(I.jsx)(M,{children:"Origin:"}),Object(I.jsx)($,{children:a.origin.name})]}),a.status&&Object(I.jsxs)("div",{children:[Object(I.jsx)(M,{children:"Status:"}),Object(I.jsx)($,{children:a.status})]}),(null===(n=a.episode)||void 0===n?void 0:n.length)&&Object(I.jsxs)("div",{children:[Object(I.jsx)(M,{children:"Appears in:"}),Object(I.jsx)($,{children:"".concat(a.episode.length," episodes")})]})]})]})})},G=Object(v.createContext)(0),R=function(e){var t=e.children,n=Object(v.useState)(1),c=Object(F.a)(n,2),i=c[0],a=c[1];return Object(I.jsx)(G.Provider,{value:{counter:i,setCounter:a},children:t})},H=n(121),K=n(120),Q=Object(K.a)(j||(j=Object(C.a)(["\n  query characters($page: Int) {\n    characters(page: $page) {\n      results {\n        name\n        image\n        id\n      }\n    }\n  }\n"]))),U=function(){var e=Object(v.useContext)(G),t=e.counter,n=e.setCounter,c=Object(v.useState)([]),i=Object(F.a)(c,2),a=i[0],r=i[1],o=Object(H.a)(Q,{variables:{page:t}}),d=Object(F.a)(o,2),s=d[0],j=d[1],b=j.loading,l=j.data;return Object(v.useEffect)((function(){s()}),[s]),Object(v.useEffect)((function(){l&&r(l.characters.results)}),[l]),{characters:a,loading:b,counter:t,getNextPage:function(){n(t+1),s()},getPreviousPage:function(){t>0&&n(t-1),s()}}},V=P.a.p(b||(b=Object(C.a)(["\n  font-size: 22px;\n  color: #539bf5;\n"]))),W=P.a.div(l||(l=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),X=P.a.div(x||(x=Object(C.a)(["\n  margin-bottom: 20px;\n"]))),Y=P.a.button(O||(O=Object(C.a)(["\n  width: 100px;\n  border: 1px solid #539bf5;\n  border-radius: 5px;\n  padding: 10px 5px;\n  color: #539bf5;\n  background-color: transparent;\n  text-decoration: none;\n  margin-right: 5px;\n  margin-left: 5px;\n"]))),Z=P.a.div(h||(h=Object(C.a)(["\n  text-align: center;\n  display: inline-flex;\n  flex-wrap: wrap;\n  width: 70%;\n"]))),_=P.a.div(u||(u=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  margin: auto;\n  margin-bottom: 20px;\n  align-items: center;\n  border: 1px solid #539bf5;\n  border-radius: 10px;\n  padding: 20px 10px 10px 10px;\n  width: 200px;\n"]))),ee=P.a.img(p||(p=Object(C.a)(["\n  height: 80px;\n  width: 80px;\n  border: 5px solid #539bf5;\n  border-radius: 50%;\n"]))),te=Object(P.a)(S.b)(g||(g=Object(C.a)(["\n  text-decoration: none;\n  color: #539bf5;\n"]))),ne=function(){var e=U(),t=e.characters,n=e.loading,c=e.counter,i=e.getNextPage,a=e.getPreviousPage;return Object(I.jsx)(I.Fragment,{children:n?Object(I.jsx)(V,{children:"Loading..."}):Object(I.jsxs)(W,{children:[Object(I.jsxs)(X,{children:[c>1&&Object(I.jsx)(Y,{onClick:function(){return a()},"data-testid":"previous-button",children:"< Previous"}),c<34&&Object(I.jsx)(Y,{onClick:function(){return i()},"data-testid":"next-button",children:"Next >"})]}),Object(I.jsx)(Z,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(I.jsx)(_,{"data-testid":"avatar-container",children:Object(I.jsxs)(te,{to:"/character/".concat(e.id),children:[Object(I.jsx)(ee,{src:e.image,alt:"".concat(e.name,"-image"),"data-testid":"avatar-image"}),Object(I.jsx)("p",{children:e.name})]})},e.id)}))}),Object(I.jsxs)(X,{children:[c>1&&Object(I.jsx)(Y,{onClick:function(){return a()},"data-testid":"previous-button",children:"< Previous"}),c<34&&Object(I.jsx)(Y,{onClick:function(){return i()},"data-testid":"next-button",children:"Next >"})]})]})})},ce=n(118),ie=n(119),ae=n(117),re=P.a.div(f||(f=Object(C.a)(["\n  text-align: center;\n"]))),oe=P.a.h1(m||(m=Object(C.a)(["\n  color: #539bf5;\n  margin-bottom: 50px;\n"]))),de=new ce.a({uri:"https://rickandmortyapi.com/graphql",cache:new ie.a}),se=function(){return Object(I.jsx)(ae.a,{client:de,children:Object(I.jsx)(S.a,{basename:"/",children:Object(I.jsxs)(re,{children:[Object(I.jsx)(oe,{children:"The Rick and Morty bible"}),Object(I.jsx)(R,{children:Object(I.jsxs)(L.c,{children:[Object(I.jsx)(L.a,{exact:!0,path:"/",children:Object(I.jsx)(ne,{})}),Object(I.jsx)(L.a,{path:"/character/:id",children:Object(I.jsx)(D,{})})]})})]})})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};y.a.render(Object(I.jsx)(k.a.StrictMode,{children:Object(I.jsx)(se,{})}),document.getElementById("root")),je()},84:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.5fffe23d.chunk.js.map