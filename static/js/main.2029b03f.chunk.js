(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,a){e.exports={root:"styles_root__2LWvI",container:"styles_container__1z31m"}},260:function(e,t){},295:function(e,t,a){e.exports={list:"styles_list__2BY2O"}},315:function(e,t,a){e.exports=a(744)},40:function(e,t,a){e.exports={card:"styles_card__2QB7g",header:"styles_header__3eTlF",cardContent:"styles_cardContent__fpG5b",chips:"styles_chips__3LolP",chip:"styles_chip__3RkhF",listItem:"styles_listItem__3alhA",actions:"styles_actions__2mFIR",resizableVideo:"styles_resizableVideo__vJ2tA"}},402:function(e,t){},414:function(e,t){},416:function(e,t){},49:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"b",function(){return i});var n="AIzaSyCOnWUQfBP54Os0UO7maSDmS05xDmJ5gIw",r="7173052990851751381",i=window.location.origin.includes("cannoneyed")?"foodwishes":""},51:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s});var n=a(65),r=a(133),i=a(294);function c(e){return{completeRecipeLink:e.completeRecipeLink,description:e.description,directions:e.directions,images:e.images,imagesLow:e.imagesLow,videoSrc:e.videoSrc,rawContent:e.rawContent,id:e.id,image:e.image,imageLow:e.imageLow,labels:e.labels,published:new Date(e.published),replies:e.replies,title:e.title,updated:new Date(e.updated)}}function s(e){return e.filter(function(e){var t=!!e.labels,a=!Object(r.includes)(e.labels,"Blog News");return Object(r.every)([t,a])}).map(function(e){var t=function(e){var t=e.content,a=i.load(e.content),n=a("img").map(function(e,t){return t.attribs.src}).get(),r=n.map(function(e){return e.replace("/s320","/s1600")}),c=a("a").map(function(e,t){return t.attribs.href}).get().find(function(e){return-1!==e.indexOf("allrecipes.com")}),s=a("iframe").attr("src"),u=(p=t=t.replace("<iframe","___PLACEHOLDER___<iframe"),(p=(p=p.replace(/<\/\s*?div\s*?>/gm,"\n\n")).replace(/<br\s*\/?>/gm,"\n\n")).replace(/<(?:.|\n)*?>/gm,"")).split("___PLACEHOLDER___");var p;if(o(u[0])||o(u[1]))return;var d=l(u[0]),m=l(u[1].split(/[vV]iew [tT]he [cC]omplete [rR]ecipe/)[0]);return{completeRecipeLink:c,description:d,directions:m,images:r,imagesLow:n,videoSrc:s}}(e);if(t)return Object(n.a)({},t,{rawContent:e.content,id:e.id,image:t.images[0],imageLow:t.imagesLow[0],labels:e.labels,published:new Date(e.published),replies:Number(e.replies.totalItems),title:e.title,updated:new Date(e.updated)})}).filter(function(e){return e})}function o(e){return void 0===e||0===e.length||0===e.replace(/\s/g,"").length}function l(e){return e?e.split("\n").map(function(e){return Object(r.unescape)(e)}).reduce(function(e,t){if(""===t)return e.inTextBlock=!1,e;if(e.inTextBlock){var a=0===e.lines.length?0:e.lines.length-1;e.lines[a]=(e.lines[a]||"")+" "+t}else e.lines.push(t),e.inTextBlock=!0;return e},{lines:[],inTextBlock:!0}).lines.map(function(e){return e.trim()}).filter(function(e){return e.replace(/[^a-zA-Z0-9]+/,"").length>0}):[]}},66:function(e,t,a){e.exports={toolbar:"styles_toolbar__1ybnO",left:"styles_left__3RBfM",center:"styles_center__3r6ex",right:"styles_right__9wv3M",menuButton:"styles_menuButton__171Rz"}},67:function(e,t,a){e.exports={card:"styles_card__1riQd",chips:"styles_chips__2DaNW",chip:"styles_chip__1mtUk",title:"styles_title__By4YA",media:"styles_media__3P_YI",actions:"styles_actions__dTLOP"}},68:function(e,t,a){e.exports={container:"styles_container__19cwU",recipeCardContainer:"styles_recipeCardContainer__pTt7V",loadMoreContainer:"styles_loadMoreContainer__2IfbJ",loadButton:"styles_loadButton__3okkx",loadingContainer:"styles_loadingContainer__15Imp",loadingText:"styles_loadingText__3LIPr"}},710:function(e,t,a){e.exports={title:"styles_title__1xSmn"}},711:function(e,t,a){e.exports={card:"styles_card__TBTKV",chip:"styles_chip__tvcKF"}},714:function(e,t,a){e.exports={card:"styles_card__1Yn49",searchCard:"styles_searchCard__1D-hV",inputContainer:"styles_inputContainer__3hyBw",searchButton:"styles_searchButton__3w6Rv"}},744:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(21),i=a(747),c=a(748),s=a(746),o=a(49),l=a(10),u=a(11),p=a(16),d=a(15),m=a(17),h=a(22),f=a(24),b=a.n(f),g=a(69),v=a(36),y=a(87),O=a(12),_=function(){function e(){Object(l.a)(this,e),this.isLoading=!1,this.recipes=[],this.nextPageToken=void 0}return Object(u.a)(e,[{key:"canLoadMore",get:function(){return!(0!==this.recipes.length&&!this.nextPageToken)}}]),e}();Object(O.g)(_,{isLoading:O.l,recipes:O.l,canLoadMore:O.d});var k=a(51),E=function(){function e(){var t=this;Object(l.a)(this,e),this.latestRecipesManager=new _,this.recipesManagersByLabel=new Map,this.searchRecipesManager=new _,this.isLoadingRecipeById=new Map,this.recipesById=new Map,this.favorites=new Map,this.toggleFavorite=function(e){t.isFavorited(e)?t.removeFromFavorites(e):t.addToFavorites(e)},this.addToFavorites=function(e){t.favorites.set(e.id,{recipe:e,timestamp:Date.now()}),t.serializeFavorites()},this.removeFromFavorites=function(e){t.favorites.delete(e.id),t.serializeFavorites()},this.isFavorited=function(e){return t.favorites.has(e.id)},this.loadLatestRecipes=Object(v.a)(b.a.mark(function e(){var a,n,r,i,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.latestRecipesManager.isLoading){e.next=2;break}return e.abrupt("return");case 2:return t.latestRecipesManager.isLoading=!0,e.prev=3,n={pageToken:t.latestRecipesManager.nextPageToken},e.next=7,y.loadRecipes(n);case 7:r=e.sent,i=r.recipes,c=r.nextPageToken,t.latestRecipesManager.nextPageToken=c,(a=t.latestRecipesManager.recipes).push.apply(a,Object(g.a)(i)),i.forEach(function(e){return t.recipesById.set(e.id,e)}),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(3);case 17:t.latestRecipesManager.isLoading=!1;case 18:case"end":return e.stop()}},e,this,[[3,15]])})),this.loadRecipesByLabel=function(){var e=Object(v.a)(b.a.mark(function e(a){var n,r,i,c,s,o,l;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.recipesManagersByLabel.has(a)||t.recipesManagersByLabel.set(a,new _),!(n=t.recipesManagersByLabel.get(a)).isLoading){e.next=4;break}return e.abrupt("return");case 4:return n.isLoading=!0,e.prev=5,i=n.nextPageToken,c={labels:a,pageToken:i},e.next=10,y.loadRecipesByLabels(c);case 10:s=e.sent,o=s.recipes,(l=s.nextPageToken)&&(n.nextPageToken=l),(r=n.recipes).push.apply(r,Object(g.a)(o)),o.forEach(function(e){return t.recipesById.set(e.id,e)}),e.next=20;break;case 18:e.prev=18,e.t0=e.catch(5);case 20:n.isLoading=!1;case 21:case"end":return e.stop()}},e,this,[[5,18]])}));return function(t){return e.apply(this,arguments)}}(),this.loadRecipesBySearch=function(){var e=Object(v.a)(b.a.mark(function e(a){var n,r,i,c,s,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.searchRecipesManager.isLoading){e.next=2;break}return e.abrupt("return");case 2:return t.searchRecipesManager.isLoading=!0,e.prev=3,r=t.searchRecipesManager.nextPageToken,i={q:a,pageToken:r},e.next=8,y.loadRecipesBySearch(i);case 8:c=e.sent,s=c.recipes,o=c.nextPageToken,t.searchRecipesManager.nextPageToken=o,(n=t.searchRecipesManager.recipes).push.apply(n,Object(g.a)(s)),s.forEach(function(e){return t.recipesById.set(e.id,e)}),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(3);case 18:t.searchRecipesManager.isLoading=!1;case 19:case"end":return e.stop()}},e,this,[[3,16]])}));return function(t){return e.apply(this,arguments)}}(),this.loadRecipeById=function(){var e=Object(v.a)(b.a.mark(function e(a){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isLoadingRecipeById.get(a)&&!t.recipesById.get(a)){e.next=2;break}return e.abrupt("return");case 2:return t.isLoadingRecipeById.set(a,!0),e.prev=3,e.next=6,y.loadRecipeById(a);case 6:(n=e.sent)&&t.recipesById.set(n.id,n),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(3);case 12:t.isLoadingRecipeById.set(a,!1);case 13:case"end":return e.stop()}},e,this,[[3,10]])}));return function(t){return e.apply(this,arguments)}}(),this.deserializeFavorites()}return Object(u.a)(e,[{key:"getLatestRecipes",value:function(){return this.latestRecipesManager.recipes}},{key:"getSearchRecipes",value:function(){return this.searchRecipesManager.recipes}},{key:"getRecipesByLabel",value:function(e){var t=this.recipesManagersByLabel.get(e);return t?t.recipes:[]}},{key:"deserializeFavorites",value:function(){var e=this;try{var t=window.localStorage.getItem("favorites");(t?JSON.parse(t):[]).forEach(function(t){var a=Object(k.a)(t.recipe);e.favorites.set(a.id,{recipe:a,timestamp:t.timestamp})})}catch(a){console.error(a),window.localStorage.clear()}}},{key:"serializeFavorites",value:function(){var e=Object(g.a)(this.favorites.values()),t=JSON.stringify(e);window.localStorage.setItem("favorites",t)}},{key:"getFavorites",value:function(){return Object(g.a)(this.favorites.values()).sort(function(e,t){return e.timestamp-t.timestamp}).map(function(e){return e.recipe})}}]),e}();Object(O.g)(E,{latestRecipesManager:O.l,recipesManagersByLabel:O.l,favorites:O.l,isLoadingRecipeById:O.l,recipesById:O.l});var j=new E,w=a(306),L=a.n(w),C=a(85),x=a.n(C),R=a(52),B=a.n(R),M=a(88),T=a.n(M),I=a(53),N=a.n(I),S=a(297),P=a.n(S),D=a(127),F=a.n(D),z=a(298),A=a.n(z),V=a(299),J=a.n(V),G=a(745),W=a(295),U=a.n(W),Y=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"navigateTo",value:function(e){var t=this;return function(){t.props.closeDrawer(),t.props.history.push(e)}}},{key:"render",value:function(){var e=j.getFavorites();return n.createElement("div",{className:U.a.list},n.createElement(x.a,null,n.createElement(B.a,{button:!0,onClick:this.navigateTo("/")},n.createElement(T.a,null,n.createElement(P.a,null)),n.createElement(N.a,{primary:"Latest"})),e.length?n.createElement(B.a,{button:!0,onClick:this.navigateTo("/favorites")},n.createElement(T.a,null,n.createElement(F.a,null)),n.createElement(N.a,{primary:"Favorites"})):null,n.createElement(B.a,{button:!0,onClick:this.navigateTo("/categories")},n.createElement(T.a,null,n.createElement(A.a,null)),n.createElement(N.a,{primary:"Categories"})),n.createElement(B.a,{button:!0,onClick:this.navigateTo("/search")},n.createElement(T.a,null,n.createElement(J.a,null)),n.createElement(N.a,{primary:"Search"}))))}}]),t}(n.Component),q=Object(G.a)(Object(h.a)(Y)),Q=a(303),H=a.n(Q),K=a(130),Z=a.n(K),X=a(304),$=a.n(X),ee=a(39),te=a.n(ee),ae=a(305),ne=a.n(ae),re=a(86),ie=a(302),ce=a.n(ie),se=a(188),oe=Object(re.createMuiTheme)({palette:{primary:se.deepOrange,secondary:se.blueGrey},typography:{useNextVariants:!0}});var le=function(e){return function(t){return n.createElement(re.MuiThemeProvider,{theme:oe},n.createElement(ce.a,null),n.createElement(e,t))}},ue=a(66),pe=a.n(ue),de=le(function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onMenuClick,a=e.title;return n.createElement(H.a,{position:"sticky"},n.createElement($.a,{className:pe.a.toolbar},n.createElement("span",{className:pe.a.left},n.createElement("img",{src:"".concat(o.b,"/foodwishes_logo.png"),width:"90"})),n.createElement("span",{className:pe.a.center},n.createElement(te.a,{variant:"h6",style:{color:"white"}},a)),n.createElement("span",{className:pe.a.right},n.createElement(Z.a,{className:pe.a.menuButton,onClick:t,color:"inherit","aria-label":"Menu"},n.createElement(ne.a,null)))))}}]),t}(n.Component)),me=a(189),he=a.n(me),fe=le(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={drawerOpen:!1},a.toggleDrawer=function(e){a.setState({drawerOpen:e})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.children,r=t.title;return n.createElement("div",{className:he.a.root},n.createElement(de,{title:r,onMenuClick:function(){return e.toggleDrawer(!0)}}),n.createElement("div",{className:he.a.container},a),n.createElement(L.a,{anchor:"right",open:this.state.drawerOpen,onClose:function(){e.toggleDrawer(!1)}},n.createElement(q,{closeDrawer:function(){return e.toggleDrawer(!1)}})))}}]),t}(n.Component)),be=a(132),ge=a.n(be),ve=a(310),ye=a.n(ve),Oe=a(311),_e=a.n(Oe),ke=a(43),Ee=a.n(ke),je=a(131),we=a.n(je),Le=a(309),Ce=a.n(Le),xe=a(308),Re=a.n(xe),Be=a(64),Me=a.n(Be),Te=a(307),Ie=a.n(Te),Ne=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.recipe,t=j.isFavorited,a=j.toggleFavorite;return n.createElement(Z.a,{"aria-label":"Add to favorites",onClick:function(){return a(e)}},n.createElement(F.a,{color:t(e)?"primary":"disabled"}))}}]),t}(n.Component),Se=Object(h.a)(Ne),Pe=a(67),De=a.n(Pe),Fe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).formatDate=function(e){return e.toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})},a.getCategory=function(e){return n.createElement(Ie.a,null)},a.renderTitle=function(e){return n.createElement(te.a,{variant:"h6",classes:{h6:De.a.title},onClick:a.navigateToRecipe()},e)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"navigateToRecipe",value:function(){var e=this,t=this.props.recipe,a="/recipe/".concat(t.id);return function(){return e.props.history.push(a)}}},{key:"renderChips",value:function(){var e=this,t=this.props.recipe;return n.createElement("span",{className:De.a.chips},t.labels.map(function(t){return n.createElement(Me.a,{onClick:function(a){a.stopPropagation(),e.props.history.push("/labels/".concat(t))},color:"primary",className:De.a.chip,key:t,label:t})}))}},{key:"render",value:function(){var e=this.props.recipe;return n.createElement(Ee.a,{className:De.a.card},n.createElement(we.a,{action:n.createElement(Se,{recipe:e}),title:this.renderTitle(e.title),subheader:this.formatDate(e.published)}),n.createElement(Re.a,null,n.createElement(Ce.a,{onClick:this.navigateToRecipe(),className:De.a.media,image:e.image,title:e.title},this.renderChips())))}}]),t}(n.Component),ze=Object(G.a)(Object(h.a)(Fe)),Ae=a(68),Ve=a.n(Ae),Je=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.canLoadMore,a=e.isLoading,r=e.loadMore,i=e.recipes;return n.createElement("div",{className:Ve.a.container},i.map(function(e){return n.createElement("div",{key:e.id,className:Ve.a.recipeCardContainer},n.createElement(ze,{recipe:e}))}),t&&n.createElement("div",{className:Ve.a.loadMoreContainer},n.createElement(ye.a,{color:"primary",variant:"extended","aria-label":"More",onClick:function(){return r()}},a?n.createElement("span",{className:Ve.a.loadButton},n.createElement(ge.a,{style:{color:"white"},size:30,thickness:4})):n.createElement("span",{className:Ve.a.loadButton},n.createElement(_e.a,null),"Load More"))))}}]),t}(n.Component);Je.defaultProps={isLoading:!1,loadMore:function(){},canLoadMore:!1};var Ge=le(Je),We=(a(710),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.labels;this.maybeLoadRecipesByLabels(e)}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.labels;this.maybeLoadRecipesByLabels(t)}},{key:"maybeLoadRecipesByLabels",value:function(e){var t=j.recipesManagersByLabel.get(e);t&&t.recipes.length>0||j.loadRecipesByLabel(e)}},{key:"render",value:function(){var e=this.props.match.params.labels,t=j.recipesManagersByLabel.get(e),a=j.getRecipesByLabel(e),r=!!t&&t.isLoading,i=!!t&&t.canLoadMore,c="".concat(e);return n.createElement(fe,{title:c},n.createElement(Ge,{recipes:a,isLoading:r,loadMore:function(){return j.loadRecipesByLabel(e)},canLoadMore:i}))}}]),t}(n.Component)),Ue=Object(h.a)(We),Ye=a(50),qe=a.n(Ye),Qe=["African Cuisine","Appetizer","Asian Cuisine","Barbecue","Beef","Blog News","Breads","Breakfast","Buffalo","Candy","Cheese","Chicken","Chocolate","Cookies","Dessert","Dips","Dressings","Drinks","Duck","Dumplings","Eggs","French Cuisine","Fruit","German Cuisine","Goose","Grains","Grill Recipes","Indian Cuisine","Italian Cuisine","Lamb","Latin Food","Legumes","Mediterranean Cuisine","Mexican Food","Pasta","Pickles","Pie","Pizza","Pork","Portuguese cuisine","Potato","Reader Poll","Relish","Rice","Salads","Sandwiches","Sauces","Seafood","Side Dish","Soups","Spanish Cuisine","Spicy","Stews","Tips and Techniques","Turkey","Vegetables","Weekend Filler"],He=a(711),Ke=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.createElement(fe,{title:"Categories"},n.createElement(Ee.a,{className:He.card},n.createElement(qe.a,null,Qe.map(function(t){return n.createElement(Me.a,{onClick:function(a){a.stopPropagation(),e.props.history.push("/labels/".concat(t))},color:"default",className:He.chip,key:t,label:t})}))))}}]),t}(n.Component),Ze=Object(G.a)(Object(h.a)(Ke)),Xe=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=j.getFavorites();return n.createElement(fe,{title:"Favorites"},n.createElement(Ge,{recipes:e}))}}]),t}(n.Component),$e=Object(h.a)(Xe),et=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){0===j.getLatestRecipes().length&&j.loadLatestRecipes()}},{key:"render",value:function(){var e=j.latestRecipesManager,t=e.recipes,a=e.isLoading,r=e.canLoadMore;return n.createElement(fe,{title:"Latest"},n.createElement(Ge,{recipes:t,isLoading:a,loadMore:function(){return j.loadLatestRecipes()},canLoadMore:r}))}}]),t}(n.Component),tt=Object(h.a)(et),at=a(312),nt=a.n(at),rt=a(40),it=a.n(rt),ct=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).formatDate=function(e){return e.toLocaleDateString("en-us",{year:"numeric",month:"long",day:"numeric"})},a.renderTitle=function(e){return n.createElement(te.a,{variant:"h6",classes:{h6:it.a.title}},e)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"renderChips",value:function(){var e=this,t=this.props.recipe;return n.createElement("span",{className:it.a.chips},t.labels.map(function(t){return n.createElement(Me.a,{onClick:function(a){a.stopPropagation(),e.props.history.push("/labels/".concat(t))},color:"primary",className:it.a.chip,key:t,label:t})}))}},{key:"renderVideo",value:function(){var e=this.props.recipe;return n.createElement("div",{className:it.a.resizableVideo},n.createElement("div",null,n.createElement("iframe",{width:"560",height:"315",src:"".concat(e.videoSrc,"?rel=0"),allow:"autoplay; encrypted-media",frameBorder:"0",allowFullScreen:!0})))}},{key:"render",value:function(){var e=this.props.recipe;return n.createElement(Ee.a,{className:it.a.card},n.createElement(we.a,{className:it.a.header,action:n.createElement(Se,{recipe:e}),title:this.renderTitle(e.title),subheader:this.formatDate(e.published)}),n.createElement(qe.a,{className:it.a.cardContent},this.renderChips(),this.renderVideo()),n.createElement(qe.a,null,e.description.map(function(e,t){return n.createElement(te.a,{key:t,paragraph:!0},e)}),n.createElement(nt.a,null),n.createElement(x.a,{dense:!0},e.directions.map(function(e,t){return n.createElement(B.a,{className:it.a.listItem,key:t},n.createElement(N.a,null,e))}))))}}]),t}(n.Component),st=Object(G.a)(le(ct)),ot=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.recipeId;j.loadRecipeById(e)}},{key:"render",value:function(){var e=this.props.match.params.recipeId,t=j.recipesById.get(e);return n.createElement(fe,{title:""},t&&n.createElement(st,{recipe:t}))}}]),t}(n.Component),lt=Object(h.a)(ot),ut=a(314),pt=a.n(ut),dt=a(313),mt=a.n(dt),ht=a(714),ft=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:""},a.handleChange=function(e){a.setState({searchText:e.currentTarget.value})},a.handleSubmit=function(){j.loadRecipesBySearch(a.state.searchText)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=j.searchRecipesManager,a=t.recipes,r=t.isLoading;return n.createElement(fe,{title:"Search"},n.createElement(Ee.a,{className:ht.card},n.createElement(qe.a,null,n.createElement("div",{className:ht.searchCard},n.createElement("div",{className:ht.inputContainer},n.createElement(mt.a,{label:"Search",className:ht.searchField,value:this.state.searchText,onChange:this.handleChange,fullWidth:!0})),n.createElement("div",{className:ht.buttonContainer},n.createElement(pt.a,{disabled:r,variant:"contained",color:"primary",onClick:this.handleSubmit},r?n.createElement("span",{className:ht.searchButton},n.createElement(ge.a,{style:{color:"white"},size:30,thickness:4})):n.createElement("span",{className:ht.searchButton},"Search")))))),n.createElement(Ge,{recipes:a,isLoading:r,loadMore:function(){return j.loadRecipesBySearch(e.state.searchText)},canLoadMore:!1}))}}]),t}(n.Component),bt=Object(G.a)(Object(h.a)(ft));r.render(n.createElement(function(){return n.createElement(i.a,{basename:"".concat(o.b,"/")},n.createElement(c.a,null,n.createElement(s.a,{exact:!0,path:"/",component:tt}),n.createElement(s.a,{exact:!0,path:"/categories",component:Ze}),n.createElement(s.a,{exact:!0,path:"/favorites",component:$e}),n.createElement(s.a,{path:"/labels/:labels",component:Ue}),n.createElement(s.a,{path:"/recipe/:recipeId",component:lt}),n.createElement(s.a,{exact:!0,path:"/search",component:bt})))},null),document.getElementById("root"))},87:function(e,t,a){"use strict";a.d(t,"loadRecipes",function(){return m}),a.d(t,"loadRecipeById",function(){return f}),a.d(t,"loadRecipesByLabels",function(){return g}),a.d(t,"loadRecipesBySearch",function(){return y});var n=a(24),r=a.n(n),i=a(65),c=a(36),s=a(293),o=a.n(s),l=a(49),u=a(51),p=(a(260),"https://www.googleapis.com/blogger/v3/blogs/".concat(l.c)),d=o.a.create({baseURL:p});function m(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(r.a.mark(function e(t){var a,n,c,s,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(i.a)({},t,{maxResults:20,fetchImages:!0}),e.next=3,d.get("posts",a);case 3:return n=e.sent,c=n.data?n.data.items:[],s=Object(u.b)(c),o=n.data?n.data.nextPageToken:void 0,e.abrupt("return",{recipes:s,nextPageToken:o});case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function f(e){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(r.a.mark(function e(t){var a,n,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("posts/".concat(t),{fetchImages:!0});case 2:if(a=e.sent,!(n=a.data)){e.next=7;break}return i=Object(u.b)([n]),e.abrupt("return",i[0]);case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function g(e){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(r.a.mark(function e(t){var a,n,c,s,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(i.a)({},t,{maxResults:20,fetchImages:!0}),e.next=3,d.get("posts",a);case 3:return n=e.sent,c=n.data?n.data.items:[],s=Object(u.b)(c),o=n.data?n.data.nextPageToken:void 0,e.abrupt("return",{recipes:s,nextPageToken:o});case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function y(e){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(r.a.mark(function e(t){var a,n,c,s,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(i.a)({},t,{maxResults:100,fetchImages:!0}),e.next=3,d.get("posts/search",a);case 3:return n=e.sent,c=n.data?n.data.items:[],s=Object(u.b)(c),o=n.data?n.data.nextPageToken:void 0,e.abrupt("return",{recipes:s,nextPageToken:o});case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}d.addRequestTransform(function(e){e.params.key=l.a})}},[[315,1,2]]]);
//# sourceMappingURL=main.2029b03f.chunk.js.map