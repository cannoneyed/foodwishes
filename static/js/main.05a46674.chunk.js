(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,a){e.exports={root:"styles_root__2LWvI",container:"styles_container__1z31m"}},260:function(e,t){},295:function(e,t,a){e.exports={list:"styles_list__2BY2O"}},315:function(e,t,a){e.exports=a(744)},402:function(e,t){},414:function(e,t){},416:function(e,t){},48:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"b",function(){return i});var n="AIzaSyCOnWUQfBP54Os0UO7maSDmS05xDmJ5gIw",r="7173052990851751381",i="/foodwishes"},50:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s});var n=a(67),r=a(133),i=a(294);function c(e){return{completeRecipeLink:e.completeRecipeLink,description:e.description,directions:e.directions,images:e.images,imagesLow:e.imagesLow,videoSrc:e.videoSrc,rawContent:e.rawContent,id:e.id,image:e.image,imageLow:e.imageLow,labels:e.labels,published:new Date(e.published),replies:e.replies,title:e.title,updated:new Date(e.updated)}}function s(e){return e.filter(function(e){var t=!!e.labels,a=!Object(r.includes)(e.labels,"Blog News");return Object(r.every)([t,a])}).map(function(e){var t=function(e){var t=e.content,a=i.load(e.content),n=a("img").map(function(e,t){return t.attribs.src}).get(),r=n.map(function(e){return e.replace("/s320","/s1600")}),c=a("a").map(function(e,t){return t.attribs.href}).get().find(function(e){return-1!==e.indexOf("allrecipes.com")}),s=a("iframe").attr("src"),u=(p=t=t.replace("<iframe","___PLACEHOLDER___<iframe"),(p=(p=p.replace(/<\/\s*?div\s*?>/gm,"\n\n")).replace(/<br\s*\/?>/gm,"\n\n")).replace(/<(?:.|\n)*?>/gm,"")).split("___PLACEHOLDER___");var p;if(o(u[0])||o(u[1]))return;var d=l(u[0]),h=l(u[1].split(/[vV]iew [tT]he [cC]omplete [rR]ecipe/)[0]);return{completeRecipeLink:c,description:d,directions:h,images:r,imagesLow:n,videoSrc:s}}(e);if(t)return Object(n.a)({},t,{rawContent:e.content,id:e.id,image:t.images[0],imageLow:t.imagesLow[0],labels:e.labels,published:new Date(e.published),replies:Number(e.replies.totalItems),title:e.title,updated:new Date(e.updated)})}).filter(function(e){return e})}function o(e){return void 0===e||0===e.length||0===e.replace(/\s/g,"").length}function l(e){return e?e.split("\n").map(function(e){return Object(r.unescape)(e)}).reduce(function(e,t){if(""===t)return e.inTextBlock=!1,e;if(e.inTextBlock){var a=0===e.lines.length?0:e.lines.length-1;e.lines[a]=(e.lines[a]||"")+" "+t}else e.lines.push(t),e.inTextBlock=!0;return e},{lines:[],inTextBlock:!0}).lines.map(function(e){return e.trim()}).filter(function(e){return e.replace(/[^a-zA-Z0-9]+/,"").length>0}):[]}},53:function(e,t,a){e.exports={card:"styles_card__2QB7g",header:"styles_header__3eTlF",chips:"styles_chips__3LolP",chip:"styles_chip__3RkhF",listItem:"styles_listItem__3alhA",actions:"styles_actions__2mFIR"}},68:function(e,t,a){e.exports={card:"styles_card__1riQd",chips:"styles_chips__2DaNW",chip:"styles_chip__1mtUk",title:"styles_title__By4YA",media:"styles_media__3P_YI",actions:"styles_actions__dTLOP"}},69:function(e,t,a){e.exports={container:"styles_container__19cwU",recipeCardContainer:"styles_recipeCardContainer__pTt7V",loadMoreContainer:"styles_loadMoreContainer__2IfbJ",loadButton:"styles_loadButton__3okkx",loadingContainer:"styles_loadingContainer__15Imp",loadingText:"styles_loadingText__3LIPr"}},710:function(e,t,a){e.exports={title:"styles_title__1xSmn"}},711:function(e,t,a){e.exports={card:"styles_card__TBTKV",chip:"styles_chip__tvcKF"}},714:function(e,t,a){e.exports={card:"styles_card__1Yn49",searchCard:"styles_searchCard__1D-hV",inputContainer:"styles_inputContainer__3hyBw",searchButton:"styles_searchButton__3w6Rv"}},744:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(21),i=a(747),c=a(748),s=a(746),o=a(48),l=a(10),u=a(11),p=a(19),d=a(18),h=a(20),m=a(27),f=a(23),b=a.n(f),g=a(70),v=a(36),y=a(88),O=a(12),k=function(){function e(){Object(l.a)(this,e),this.isLoading=!1,this.recipes=[],this.nextPageToken=void 0}return Object(u.a)(e,[{key:"canLoadMore",get:function(){return!(0!==this.recipes.length&&!this.nextPageToken)}}]),e}();Object(O.g)(k,{isLoading:O.l,recipes:O.l,canLoadMore:O.d});var _=a(50),E=function(){function e(){var t=this;Object(l.a)(this,e),this.latestRecipesManager=new k,this.recipesManagersByLabel=new Map,this.searchRecipesManager=new k,this.isLoadingRecipeById=new Map,this.recipesById=new Map,this.favorites=new Map,this.toggleFavorite=function(e){t.isFavorited(e)?t.removeFromFavorites(e):t.addToFavorites(e)},this.addToFavorites=function(e){t.favorites.set(e.id,{recipe:e,timestamp:Date.now()}),t.serializeFavorites()},this.removeFromFavorites=function(e){t.favorites.delete(e.id),t.serializeFavorites()},this.isFavorited=function(e){return t.favorites.has(e.id)},this.loadLatestRecipes=Object(v.a)(b.a.mark(function e(){var a,n,r,i,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.latestRecipesManager.isLoading){e.next=2;break}return e.abrupt("return");case 2:return t.latestRecipesManager.isLoading=!0,e.prev=3,n={pageToken:t.latestRecipesManager.nextPageToken},e.next=7,y.loadRecipes(n);case 7:r=e.sent,i=r.recipes,c=r.nextPageToken,t.latestRecipesManager.nextPageToken=c,(a=t.latestRecipesManager.recipes).push.apply(a,Object(g.a)(i)),i.forEach(function(e){return t.recipesById.set(e.id,e)}),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(3);case 17:t.latestRecipesManager.isLoading=!1;case 18:case"end":return e.stop()}},e,this,[[3,15]])})),this.loadRecipesByLabel=function(){var e=Object(v.a)(b.a.mark(function e(a){var n,r,i,c,s,o,l;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.recipesManagersByLabel.has(a)||t.recipesManagersByLabel.set(a,new k),!(n=t.recipesManagersByLabel.get(a)).isLoading){e.next=4;break}return e.abrupt("return");case 4:return n.isLoading=!0,e.prev=5,i=n.nextPageToken,c={labels:a,pageToken:i},e.next=10,y.loadRecipesByLabels(c);case 10:s=e.sent,o=s.recipes,(l=s.nextPageToken)&&(n.nextPageToken=l),(r=n.recipes).push.apply(r,Object(g.a)(o)),o.forEach(function(e){return t.recipesById.set(e.id,e)}),e.next=20;break;case 18:e.prev=18,e.t0=e.catch(5);case 20:n.isLoading=!1;case 21:case"end":return e.stop()}},e,this,[[5,18]])}));return function(t){return e.apply(this,arguments)}}(),this.loadRecipesBySearch=function(){var e=Object(v.a)(b.a.mark(function e(a){var n,r,i,c,s,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.searchRecipesManager.isLoading){e.next=2;break}return e.abrupt("return");case 2:return t.searchRecipesManager.isLoading=!0,e.prev=3,r=t.searchRecipesManager.nextPageToken,i={q:a,pageToken:r},e.next=8,y.loadRecipesBySearch(i);case 8:c=e.sent,s=c.recipes,o=c.nextPageToken,t.searchRecipesManager.nextPageToken=o,(n=t.searchRecipesManager.recipes).push.apply(n,Object(g.a)(s)),s.forEach(function(e){return t.recipesById.set(e.id,e)}),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(3);case 18:t.searchRecipesManager.isLoading=!1;case 19:case"end":return e.stop()}},e,this,[[3,16]])}));return function(t){return e.apply(this,arguments)}}(),this.loadRecipeById=function(){var e=Object(v.a)(b.a.mark(function e(a){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLoadingRecipeById.get(a)&&!t.recipesById.get(a)){e.next=2;break}return e.abrupt("return");case 2:return t.isLoadingRecipeById.set(a,!0),e.prev=3,e.next=6,y.loadRecipeById(a);case 6:(n=e.sent)&&t.recipesById.set(n.id,n),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:t.isLoadingRecipeById.set(a,!1);case 13:case"end":return e.stop()}},e,this,[[3,10]])}));return function(t){return e.apply(this,arguments)}}(),this.deserializeFavorites()}return Object(u.a)(e,[{key:"getLatestRecipes",value:function(){return this.latestRecipesManager.recipes}},{key:"getSearchRecipes",value:function(){return this.searchRecipesManager.recipes}},{key:"getRecipesByLabel",value:function(e){var t=this.recipesManagersByLabel.get(e);return t?t.recipes:[]}},{key:"deserializeFavorites",value:function(){var e=this;try{var t=window.localStorage.getItem("favorites");(t?JSON.parse(t):[]).forEach(function(t){var a=Object(_.a)(t.recipe);e.favorites.set(a.id,{recipe:a,timestamp:t.timestamp})})}catch(a){console.error(a),window.localStorage.clear()}}},{key:"serializeFavorites",value:function(){var e=Object(g.a)(this.favorites.values()),t=JSON.stringify(e);window.localStorage.setItem("favorites",t)}},{key:"getFavorites",value:function(){return Object(g.a)(this.favorites.values()).sort(function(e,t){return e.timestamp-t.timestamp}).map(function(e){return e.recipe})}}]),e}();Object(O.g)(E,{latestRecipesManager:O.l,recipesManagersByLabel:O.l,favorites:O.l,isLoadingRecipeById:O.l,recipesById:O.l});var j=new E,w=a(306),L=a.n(w),x=a(86),C=a.n(x),R=a(51),B=a.n(R),M=a(89),T=a.n(M),I=a(52),S=a.n(I),P=a(297),N=a.n(P),D=a(64),F=a.n(D),A=a(298),z=a.n(A),V=a(299),W=a.n(V),J=a(745),G=a(295),U=a.n(G),Y=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"navigateTo",value:function(e){var t=this;return function(){t.props.closeDrawer(),t.props.history.push(e)}}},{key:"render",value:function(){return n.createElement("div",{className:U.a.list},n.createElement(C.a,null,n.createElement(B.a,{button:!0,onClick:this.navigateTo("/")},n.createElement(T.a,null,n.createElement(N.a,null)),n.createElement(S.a,{primary:"Latest"})),n.createElement(B.a,{button:!0,onClick:this.navigateTo("/favorites")},n.createElement(T.a,null,n.createElement(F.a,null)),n.createElement(S.a,{primary:"Favorites"})),n.createElement(B.a,{button:!0,onClick:this.navigateTo("/categories")},n.createElement(T.a,null,n.createElement(z.a,null)),n.createElement(S.a,{primary:"Categories"})),n.createElement(B.a,{button:!0,onClick:this.navigateTo("/search")},n.createElement(T.a,null,n.createElement(W.a,null)),n.createElement(S.a,{primary:"Search"}))))}}]),t}(n.Component),q=Object(J.a)(Y),Q=a(303),H=a.n(Q),K=a(65),X=a.n(K),Z=a(304),$=a.n(Z),ee=a(39),te=a.n(ee),ae=a(305),ne=a.n(ae),re=a(87),ie=a(302),ce=a.n(ie),se=a(188),oe=Object(re.createMuiTheme)({palette:{primary:se.deepOrange,secondary:se.blueGrey},typography:{useNextVariants:!0}});var le=function(e){return function(t){return n.createElement(re.MuiThemeProvider,{theme:oe},n.createElement(ce.a,null),n.createElement(e,t))}},ue=a(90),pe=a.n(ue),de=le(function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onMenuClick,a=e.title;return n.createElement(H.a,{position:"sticky"},n.createElement($.a,null,n.createElement("span",{className:pe.a.left},n.createElement("img",{src:"".concat(o.b,"/foodwishes_logo.png"),width:"90"})),n.createElement("span",{className:pe.a.center},n.createElement(te.a,{variant:"h6",style:{color:"white"}},a)),n.createElement("span",{className:pe.a.right},n.createElement(X.a,{className:pe.a.menuButton,onClick:t,color:"inherit","aria-label":"Menu"},n.createElement(ne.a,null)))))}}]),t}(n.Component)),he=a(189),me=a.n(he),fe=le(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={drawerOpen:!1},a.toggleDrawer=function(e){a.setState({drawerOpen:e})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.children,r=t.title;return n.createElement("div",{className:me.a.root},n.createElement(de,{title:r,onMenuClick:function(){return e.toggleDrawer(!0)}}),n.createElement("div",{className:me.a.container},a),n.createElement(L.a,{anchor:"right",open:this.state.drawerOpen,onClose:function(){e.toggleDrawer(!1)}},n.createElement(q,{closeDrawer:function(){return e.toggleDrawer(!1)}})))}}]),t}(n.Component)),be=a(132),ge=a.n(be),ve=a(310),ye=a.n(ve),Oe=a(311),ke=a.n(Oe),_e=a(42),Ee=a.n(_e),je=a(131),we=a.n(je),Le=a(309),xe=a.n(Le),Ce=a(308),Re=a.n(Ce),Be=a(66),Me=a.n(Be),Te=a(307),Ie=a.n(Te),Se=a(68),Pe=a.n(Se),Ne=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).formatDate=function(e){return e.toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})},a.getCategory=function(e){return n.createElement(Ie.a,null)},a.renderTitle=function(e){return n.createElement(te.a,{variant:"h6",classes:{h6:Pe.a.title},onClick:a.navigateToRecipe()},e)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"navigateToRecipe",value:function(){var e=this,t=this.props.recipe,a="/recipe/".concat(t.id);return function(){return e.props.history.push(a)}}},{key:"renderChips",value:function(){var e=this,t=this.props.recipe;return n.createElement("span",{className:Pe.a.chips},t.labels.map(function(t){return n.createElement(Me.a,{onClick:function(a){a.stopPropagation(),e.props.history.push("/labels/".concat(t))},color:"primary",className:Pe.a.chip,key:t,label:t})}))}},{key:"render",value:function(){var e=this.props.recipe,t=j.isFavorited,a=j.toggleFavorite;return n.createElement(Ee.a,{className:Pe.a.card},n.createElement(we.a,{action:n.createElement(X.a,{"aria-label":"Add to favorites",onClick:function(){return a(e)}},n.createElement(F.a,{color:t(e)?"primary":"disabled"})),title:this.renderTitle(e.title),subheader:this.formatDate(e.published)}),n.createElement(Re.a,null,n.createElement(xe.a,{onClick:this.navigateToRecipe(),className:Pe.a.media,image:e.image,title:e.title},this.renderChips())))}}]),t}(n.Component),De=Object(J.a)(le(Object(m.a)(Ne))),Fe=a(69),Ae=a.n(Fe),ze=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.canLoadMore,a=e.isLoading,r=e.loadMore,i=e.recipes;return n.createElement("div",{className:Ae.a.container},i.map(function(e){return n.createElement("div",{key:e.id,className:Ae.a.recipeCardContainer},n.createElement(De,{recipe:e}))}),t&&n.createElement("div",{className:Ae.a.loadMoreContainer},n.createElement(ye.a,{color:"primary",variant:"extended","aria-label":"More",onClick:function(){return r()}},a?n.createElement("span",{className:Ae.a.loadButton},n.createElement(ge.a,{style:{color:"white"},size:30,thickness:4})):n.createElement("span",{className:Ae.a.loadButton},n.createElement(ke.a,null),"Load More"))))}}]),t}(n.Component);ze.defaultProps={isLoading:!1,loadMore:function(){},canLoadMore:!1};var Ve=le(ze),We=(a(710),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.labels;this.maybeLoadRecipesByLabels(e)}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.labels;this.maybeLoadRecipesByLabels(t)}},{key:"maybeLoadRecipesByLabels",value:function(e){var t=j.recipesManagersByLabel.get(e);t&&t.recipes.length>0||j.loadRecipesByLabel(e)}},{key:"render",value:function(){var e=this.props.match.params.labels,t=j.recipesManagersByLabel.get(e),a=j.getRecipesByLabel(e),r=!!t&&t.isLoading,i=!!t&&t.canLoadMore,c="".concat(e," Recipes");return n.createElement(fe,{title:c},n.createElement(Ve,{recipes:a,isLoading:r,loadMore:function(){return j.loadRecipesByLabel(e)},canLoadMore:i}))}}]),t}(n.Component)),Je=Object(m.a)(We),Ge=a(49),Ue=a.n(Ge),Ye=["African Cuisine","Appetizer","Asian Cuisine","Barbecue","Beef","Blog News","Breads","Breakfast","Buffalo","Candy","Cheese","Chicken","Chocolate","Cookies","Dessert","Dips","Dressings","Drinks","Duck","Dumplings","Eggs","French Cuisine","Fruit","German Cuisine","Goose","Grains","Grill Recipes","Indian Cuisine","Italian Cuisine","Lamb","Latin Food","Legumes","Mediterranean Cuisine","Mexican Food","Pasta","Pickles","Pie","Pizza","Pork","Portuguese cuisine","Potato","Reader Poll","Relish","Rice","Salads","Sandwiches","Sauces","Seafood","Side Dish","Soups","Spanish Cuisine","Spicy","Stews","Tips and Techniques","Turkey","Vegetables","Weekend Filler"],qe=a(711),Qe=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.createElement(fe,{title:"Categories"},n.createElement(Ee.a,{className:qe.card},n.createElement(Ue.a,null,Ye.map(function(t){return n.createElement(Me.a,{onClick:function(a){a.stopPropagation(),e.props.history.push("/labels/".concat(t))},color:"default",className:qe.chip,key:t,label:t})}))))}}]),t}(n.Component),He=Object(J.a)(Object(m.a)(Qe)),Ke=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=j.getFavorites();return n.createElement(fe,{title:"Favorites"},n.createElement(Ve,{recipes:e}))}}]),t}(n.Component),Xe=Object(m.a)(Ke),Ze=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){0===j.getLatestRecipes().length&&j.loadLatestRecipes()}},{key:"render",value:function(){var e=j.latestRecipesManager,t=e.recipes,a=e.isLoading,r=e.canLoadMore;return n.createElement(fe,{title:"Latest"},n.createElement(Ve,{recipes:t,isLoading:a,loadMore:function(){return j.loadLatestRecipes()},canLoadMore:r}))}}]),t}(n.Component),$e=Object(m.a)(Ze),et=a(312),tt=a.n(et),at=a(53),nt=a.n(at),rt=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).formatDate=function(e){return e.toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})},a.renderTitle=function(e){return n.createElement(te.a,{variant:"h6",classes:{h6:nt.a.title}},e)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderChips",value:function(){var e=this,t=this.props.recipe;return n.createElement("span",{className:nt.a.chips},t.labels.map(function(t){return n.createElement(Me.a,{onClick:function(a){a.stopPropagation(),e.props.history.push("/labels/".concat(t))},color:"primary",className:nt.a.chip,key:t,label:t})}))}},{key:"renderVideo",value:function(){var e=this.props.recipe;return n.createElement("iframe",{width:"560",height:"315",src:"".concat(e.videoSrc,"?rel=0"),allow:"autoplay; encrypted-media",frameBorder:"0",allowFullScreen:!0})}},{key:"render",value:function(){var e=this.props.recipe;return n.createElement(Ee.a,{className:nt.a.card},n.createElement(we.a,{className:nt.a.header,action:n.createElement(X.a,{"aria-label":"Add to favorites"},n.createElement(F.a,null)),title:this.renderTitle(e.title),subheader:this.formatDate(e.published)}),n.createElement(Ue.a,null,this.renderChips(),this.renderVideo()),n.createElement(Ue.a,null,e.description.map(function(e,t){return n.createElement(te.a,{key:t,paragraph:!0},e)}),n.createElement(tt.a,null),n.createElement(C.a,{dense:!0},e.directions.map(function(e,t){return n.createElement(B.a,{className:nt.a.listItem,key:t},n.createElement(S.a,null,e))}))))}}]),t}(n.Component),it=Object(J.a)(le(rt)),ct=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.recipeId;j.loadRecipeById(e)}},{key:"render",value:function(){var e=this.props.match.params.recipeId,t=j.recipesById.get(e);return n.createElement(fe,{title:""},t&&n.createElement(it,{recipe:t}))}}]),t}(n.Component),st=Object(m.a)(ct),ot=a(314),lt=a.n(ot),ut=a(313),pt=a.n(ut),dt=a(714),ht=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:""},a.handleChange=function(e){a.setState({searchText:e.currentTarget.value})},a.handleSubmit=function(){j.loadRecipesBySearch(a.state.searchText)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=j.searchRecipesManager,a=t.recipes,r=t.isLoading;return n.createElement(fe,{title:"Search"},n.createElement(Ee.a,{className:dt.card},n.createElement(Ue.a,null,n.createElement("div",{className:dt.searchCard},n.createElement("div",{className:dt.inputContainer},n.createElement(pt.a,{label:"Search",className:dt.searchField,value:this.state.searchText,onChange:this.handleChange,fullWidth:!0})),n.createElement("div",{className:dt.buttonContainer},n.createElement(lt.a,{disabled:r,variant:"contained",color:"primary",onClick:this.handleSubmit},r?n.createElement("span",{className:dt.searchButton},n.createElement(ge.a,{style:{color:"white"},size:30,thickness:4})):n.createElement("span",{className:dt.searchButton},"Search")))))),n.createElement(Ve,{recipes:a,isLoading:r,loadMore:function(){return j.loadRecipesBySearch(e.state.searchText)},canLoadMore:!1}))}}]),t}(n.Component),mt=Object(J.a)(Object(m.a)(ht));r.render(n.createElement(function(){return n.createElement(i.a,{basename:o.b},n.createElement(c.a,null,n.createElement(s.a,{exact:!0,path:"/",component:$e}),n.createElement(s.a,{exact:!0,path:"/categories",component:He}),n.createElement(s.a,{exact:!0,path:"/favorites",component:Xe}),n.createElement(s.a,{path:"/labels/:labels",component:Je}),n.createElement(s.a,{path:"/recipe/:recipeId",component:st}),n.createElement(s.a,{exact:!0,path:"/search",component:mt})))},null),document.getElementById("root"))},88:function(e,t,a){"use strict";a.d(t,"loadRecipes",function(){return h}),a.d(t,"loadRecipeById",function(){return f}),a.d(t,"loadRecipesByLabels",function(){return g}),a.d(t,"loadRecipesBySearch",function(){return y});var n=a(23),r=a.n(n),i=a(67),c=a(36),s=a(293),o=a.n(s),l=a(48),u=a(50),p=(a(260),"https://www.googleapis.com/blogger/v3/blogs/".concat(l.c)),d=o.a.create({baseURL:p});function h(e){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(r.a.mark(function e(t){var a,n,c,s,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(i.a)({},t,{maxResults:20,fetchImages:!0}),e.next=3,d.get("posts",a);case 3:return n=e.sent,c=n.data?n.data.items:[],s=Object(u.b)(c),o=n.data?n.data.nextPageToken:void 0,e.abrupt("return",{recipes:s,nextPageToken:o});case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function f(e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(r.a.mark(function e(t){var a,n,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("posts/".concat(t),{fetchImages:!0});case 2:if(a=e.sent,!(n=a.data)){e.next=7;break}return i=Object(u.b)([n]),e.abrupt("return",i[0]);case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function g(e){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(r.a.mark(function e(t){var a,n,c,s,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(i.a)({},t,{maxResults:20,fetchImages:!0}),e.next=3,d.get("posts",a);case 3:return n=e.sent,c=n.data?n.data.items:[],s=Object(u.b)(c),o=n.data?n.data.nextPageToken:void 0,e.abrupt("return",{recipes:s,nextPageToken:o});case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function y(e){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(r.a.mark(function e(t){var a,n,c,s,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(i.a)({},t,{maxResults:100,fetchImages:!0}),e.next=3,d.get("posts/search",a);case 3:return n=e.sent,c=n.data?n.data.items:[],s=Object(u.b)(c),o=n.data?n.data.nextPageToken:void 0,e.abrupt("return",{recipes:s,nextPageToken:o});case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}d.addRequestTransform(function(e){e.params.key=l.a})},90:function(e,t,a){e.exports={root:"styles_root__3mXW-",left:"styles_left__3RBfM",center:"styles_center__3r6ex",right:"styles_right__9wv3M",menuButton:"styles_menuButton__171Rz"}}},[[315,1,2]]]);
//# sourceMappingURL=main.05a46674.chunk.js.map