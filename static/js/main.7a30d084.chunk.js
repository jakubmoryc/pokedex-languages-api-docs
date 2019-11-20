(this["webpackJsonppokedex-languages-rest-api-docs"]=this["webpackJsonppokedex-languages-rest-api-docs"]||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/united-kingdom.e5564902.svg"},21:function(e,a,t){e.exports=t.p+"static/media/germany.d810f621.svg"},22:function(e,a,t){e.exports=t.p+"static/media/italy.612e617f.svg"},23:function(e,a,t){e.exports=t.p+"static/media/spain.36938bbe.svg"},24:function(e,a,t){e.exports=t.p+"static/media/japan.1f905d23.svg"},25:function(e,a,t){e.exports=t.p+"static/media/south-korea.8a067f19.svg"},26:function(e,a,t){e.exports=t.p+"static/media/china.7f8455b7.svg"},27:function(e,a,t){e.exports=t.p+"static/media/france.968aaa24.svg"},28:function(e,a,t){e.exports=t.p+"static/media/sign-in.7a910bbe.svg"},29:function(e,a,t){e.exports=t.p+"static/media/github-logo.76d344f0.svg"},30:function(e,a,t){e.exports=t(41)},35:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),s=t.n(r),c=t(7),i=t(8),o=t(10),m=t(9),u=t(11),p=(t(35),t(4));function h(e){var a=e.setActivePage,t=e.activePage,n=e.screenWidth;return l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-wrapper"},n>599?l.a.createElement("div",{className:"navbar-logo"},l.a.createElement("h1",null,l.a.createElement(p.b,{className:"navbar-menu-item"+("homepage"===t?" active":""),to:"/",onClick:function(e){a("homepage")}},"Pok\xe9LANG"))):null,l.a.createElement("div",{className:"navbar-menu"},l.a.createElement(p.b,{className:"navbar-menu-item"+("homepage"===t?" active":""),to:"/",onClick:function(e){a("homepage")}},"Home"),l.a.createElement(p.b,{className:"navbar-menu-item"+("about"===t?" active":""),to:"/about",onClick:function(e){a("about")}},"About"),l.a.createElement(p.b,{className:"navbar-menu-item"+("docs"===t?" active":""),to:"/docs",onClick:function(e){a("docs")}},"Docs"))))}var E=t(5),d=t(20),g=t.n(d),f=t(21),k=t.n(f),b=t(22),v=t.n(b),N=t(23),P=t.n(N),y=t(24),w=t.n(y),A=t(25),C=t.n(A),T=t(26),S=t.n(T),I=t(27),G=t.n(I),O=t(28),j=t.n(O),x=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={result:"No results yet",inputValue:"",isLoading:!1},t.fetchResults=function(){var e="https://pokedex-languages-api.herokuapp.com/"+t.state.inputValue;t.state.isLoading||(t.setState({isLoading:!0}),fetch(e).then((function(e){200!==e.status?e.json().then((function(a){t.setState({result:"Error: "+e.status.toString()+" - "+JSON.stringify(a.msg),isLoading:!1})})):e.json().then((function(e){t.setState({result:JSON.stringify(e,null,2),isLoading:!1})}))})).catch((function(e){t.setState({result:"Failed to fetch. Service may be unavailable (503 Status Code)",isLoading:!1})})))},t.handleInput=function(e){t.setState({inputValue:e.target.value})},t.handleSubmit=function(e){t.fetchResults()},t.handleLinkClick=function(e){return function(a){a.preventDefault(),t.setState({inputValue:e},(function(){t.handleSubmit()}))}},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"homepage"},l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h1",null,"Pok\xe9LANG API"),l.a.createElement("h2",null,"A RESTful API with Pok\xe9mon' names in various languages"),l.a.createElement("div",{className:"jumbotron-flags"},l.a.createElement("img",{src:g.a,alt:"",className:"flag-icon"}),l.a.createElement("img",{src:k.a,alt:"",className:"flag-icon"}),l.a.createElement("img",{src:G.a,alt:"",className:"flag-icon"}),l.a.createElement("img",{src:v.a,alt:"",className:"flag-icon"}),l.a.createElement("img",{src:P.a,alt:"",className:"flag-icon"}),l.a.createElement("img",{src:w.a,alt:"",className:"flag-icon"}),l.a.createElement("img",{src:C.a,alt:"",className:"flag-icon"}),l.a.createElement("img",{src:S.a,alt:"",className:"flag-icon"}))),l.a.createElement("h1",null,"Try it now!"),l.a.createElement("h3",null,"And ",l.a.createElement(p.b,{to:"/docs",onClick:function(a){e.props.setActivePage("docs")}},"check out the docs!")),l.a.createElement("div",{className:"demo-box"},l.a.createElement("div",{className:"input-group"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("a",{href:"https://pokedex-languages-api.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},this.props.screenWidth>599?"https://pokedex-languages-api.herokuapp.com/":".../")),l.a.createElement("input",{type:"text",placeholder:"pokemon/resource",value:this.state.inputValue,onChange:this.handleInput}),l.a.createElement("button",{class:"input-group-button",onClick:this.handleSubmit,disabled:this.state.isLoading},l.a.createElement("img",{src:j.a,alt:""})),l.a.createElement("br",null)),l.a.createElement("p",null,"Try: ",l.a.createElement("a",{href:"#",onClick:this.handleLinkClick("pokemon")},"/pokemon "),", ",l.a.createElement("a",{href:"#",onClick:this.handleLinkClick("pokemon/roserade")},"pokemon/roserade"),", ",l.a.createElement("a",{href:"#",onClick:this.handleLinkClick("pokemon/420")},"pokemon/420"),", ",l.a.createElement("a",{href:"#",onClick:this.handleLinkClick("pokemon/roserade/fr")},"pokemon/roserade/fr")),l.a.createElement("h2",null,"Response"),l.a.createElement("div",{className:"demo-box-result"},l.a.createElement("pre",{className:this.state.isLoading?"spinner":""},l.a.createElement("code",null,this.state.isLoading?l.a.createElement("div",null,l.a.createElement("div",{class:"lds-ring"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement("p",null,"Fetching...")):this.state.result)))))}}]),a}(n.Component);function L(){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"pageWrapper"},l.a.createElement("div",{className:"tableOfContents-sticky"},l.a.createElement("div",{className:"tableOfContents-wrapper tableOfContents-wrapper-docs "},l.a.createElement("div",{className:"tableOfContents"},l.a.createElement("ul",null,l.a.createElement("h2",null,"Pok\xe9mon"),l.a.createElement("li",null,l.a.createElement("a",{href:"#path1"},"GET /pokemon/")),l.a.createElement("li",null,l.a.createElement("a",{href:"#path2"},"GET /pokemon/{pokemon_id}")),l.a.createElement("li",null,l.a.createElement("a",{href:"#path3"},"GET /pokemon/{pokemon_name}")),l.a.createElement("li",null,l.a.createElement("a",{href:"#path4"},"GET /pokemon/{pokemon_id}/{language}")),l.a.createElement("li",null,l.a.createElement("a",{href:"#path5"},"GET /pokemon/{pokemon_name}/{language}")),l.a.createElement("h2",null,"Other"),l.a.createElement("li",null,l.a.createElement("a",{href:"#path6"},"GET /")))))),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"About"),l.a.createElement("h2",{id:"about-q1"},"What is this?"),l.a.createElement("p",null,"This website provides a RESTful, GET-Only API interface to retrieve Pok\xe9mon' names in different languages. Using this website, you can learn how to use this API to get data you need."),l.a.createElement("h2",{id:"about-q2"},"What is an API?"),l.a.createElement("p",null,"An API (Application Programming Interface) is a contract that allow developers to interact with an application through a set of interfaces. In this case, the application is a database of Pok\xe9mon names in various languages.",l.a.createElement("br",null),l.a.createElement("br",null),"A RESTful API is an API that conforms to a set of loose conventions based on HTTP verbs, errors, and hyperlinks."),l.a.createElement("h2",{id:"about-q3"},"How much information is stored here?"),l.a.createElement("p",null,"All Pok\xe9mon names up to 7th generation."),l.a.createElement("img",{src:"https://i.kym-cdn.com/photos/images/original/001/150/490/507.jpg",alt:""}),l.a.createElement("h2",{id:"about-q4"},"So who built this?"),l.a.createElement("p",null,"This page was created by Jakub Moryc as a part of his learning routine.",l.a.createElement("br",null),l.a.createElement("br",null),"Check out his portfolio as well as his ",l.a.createElement("a",{href:"https://github.com/jakubmoryc",target:"_blank",rel:"noopener noreferrer"},"GitHub page")," for more projects."),l.a.createElement("h2",{id:"about-q5"},"Where did you get all of this data?"),l.a.createElement("p",null,"I took a few CSV files from ",l.a.createElement("a",{href:"https://github.com/PokeAPI/pokeapi",target:"_blank",rel:"noopener noreferrer"},"Pok\xe9API's GitHub")," and combined them into one big array of objects (in fact, my other app uses that array on it's client side) and uploaded it to a database."),l.a.createElement("h2",{id:"about-q6"},"What's the technology stack?"),l.a.createElement("p",null,"This page itself uses React.js and SASS.",l.a.createElement("br",null),l.a.createElement("br",null),"The API was built with Node, Express.js and MongoDB and it uses Atlas as it's database host whilst the app itself is hosted on Heroku."),l.a.createElement("h2",{id:"about-q7"},"Are there any known bugs?"),l.a.createElement("p",null,"You can't retrieve data if Pok\xe9mon's name includes a hyphen (-). For example Type-Null. For these Pok\xe9mon, I recommend using their IDs."))))}function _(){return l.a.createElement("div",{className:"docs"},l.a.createElement("div",{className:"pageWrapper page-docs"},l.a.createElement("div",{className:"tableOfContents-sticky"},l.a.createElement("div",{className:"tableOfContents-wrapper tableOfContents-wrapper-docs "},l.a.createElement("div",{className:"tableOfContents"},l.a.createElement("ul",null,l.a.createElement("h2",null,"Pok\xe9mon"),l.a.createElement("li",null,l.a.createElement("a",{href:"#path1"},"GET /pokemon/")),l.a.createElement("li",null,l.a.createElement("a",{href:"#path2"},"GET /pokemon/{pokemon_id}")),l.a.createElement("li",null,l.a.createElement("a",{href:"#path3"},"GET /pokemon/{pokemon_name}")),l.a.createElement("li",null,l.a.createElement("a",{href:"#path4"},"GET /pokemon/{pokemon_id}/{language}")),l.a.createElement("li",null,l.a.createElement("a",{href:"#path5"},"GET /pokemon/{pokemon_name}/{language}")),l.a.createElement("h2",null,"Other"),l.a.createElement("li",null,l.a.createElement("a",{href:"#path6"},"GET /")))))),l.a.createElement("div",{className:"content content-docs"},l.a.createElement("h1",{className:"big-header"},"Pok\xe9mon Routes"),l.a.createElement("div",{className:"path"},l.a.createElement("h2",null,l.a.createElement("span",{className:"path-get-span"},"GET")," /pokemon/"),l.a.createElement("p",null,"Fetch data with all Pok\xe9mon or search many Pok\xe9mon using a string."),l.a.createElement("div",{className:"path-parameters"},l.a.createElement("h3",{className:"parameters-header"},l.a.createElement("p",null,"Query Parameters")),l.a.createElement("ul",null,l.a.createElement("li",null,"limit - Number of Pok\xe9mon to limit. Default - 20. ",l.a.createElement("span",{className:"path-type-span"},"integer")),l.a.createElement("li",null,"page - Pagination. Default - 0. ",l.a.createElement("span",{className:"path-type-span"},"integer")),l.a.createElement("br",null),l.a.createElement("li",null,"search - Optional. If present - search Pok\xe9mon English names with a given string. Case insensitive. Hypens (-) are not supported and spaces should be encoded as '%20'. ",l.a.createElement("span",{className:"path-type-span"},"string"))))),l.a.createElement("div",{className:"path"},l.a.createElement("h2",null,l.a.createElement("span",{className:"path-get-span"},"GET")," ","pokemon/{pokemon_id}"),l.a.createElement("p",null,"Fetch specific Pok\xe9mon data by its ID."),l.a.createElement("div",{className:"path-parameters"},l.a.createElement("h3",{className:"parameters-header"},l.a.createElement("p",null,"Path Parameters")),l.a.createElement("ul",null,l.a.createElement("li",null,"pokemon_id - Pok\xe9mon's ID. Max 3 digits. ",l.a.createElement("span",{className:"path-type-span"},"integer"))))),l.a.createElement("div",{className:"path"},l.a.createElement("h2",null,l.a.createElement("span",{className:"path-get-span"},"GET")," ","pokemon/{pokemon_name}"),l.a.createElement("p",null,"Fetch specific Pok\xe9mon data by its English name."),l.a.createElement("div",{className:"path-parameters"},l.a.createElement("h3",{className:"parameters-header"},l.a.createElement("p",null,"Path Parameters")),l.a.createElement("ul",null,l.a.createElement("li",null,"pokemon_name - Pok\xe9mon's name in English. Case insensitive. Doesn't support hyphens (-) and spaces should be encoded as '%20'. ",l.a.createElement("span",{className:"path-type-span"},"string"))))),l.a.createElement("div",{className:"path"},l.a.createElement("h2",null,l.a.createElement("span",{className:"path-get-span"},"GET")," ","pokemon/{pokemon_id}/{language}"),l.a.createElement("p",null,"Fetch Pok\xe9mon's name in specified language or it's sprite/ID/name."),l.a.createElement("div",{className:"path-parameters"},l.a.createElement("h3",{className:"parameters-header"},l.a.createElement("p",null,"Path Parameters")),l.a.createElement("ul",null,l.a.createElement("li",null,"pokemon_id - Pok\xe9mon's ID. Max 3 digits. ",l.a.createElement("span",{className:"path-type-span"},"integer")," ",l.a.createElement("span",{className:"path-required-span"},"required")),l.a.createElement("li",null,"language - Language to fetch or other subresource (sprite/id): ",l.a.createElement("span",{className:"path-type-span"},"string"),l.a.createElement("ul",null,l.a.createElement("li",null,"us - English"),l.a.createElement("li",null,"de - German"),l.a.createElement("li",null,"fr - French"),l.a.createElement("li",null,"it - Italian"),l.a.createElement("li",null,"es - Spanish"),l.a.createElement("li",null,"jp - Japanese"),l.a.createElement("li",null,"kr - Korean"),l.a.createElement("li",null,"cn - Traditional Chinese"),l.a.createElement("li",null,"jp - Japanese"),l.a.createElement("li",null,"sprite - URL to Pok\xe9mon's sprite"),l.a.createElement("li",null,"id - Pok\xe9mon's ID")))))),l.a.createElement("div",{className:"path"},l.a.createElement("h2",null,l.a.createElement("span",{className:"path-get-span"},"GET")," ","pokemon/{pokemon_name}/{language}"),l.a.createElement("p",null,"Fetch Pok\xe9mon's name in specified language or it's sprite/ID/name."),l.a.createElement("div",{className:"path-parameters"},l.a.createElement("h3",{className:"parameters-header"},l.a.createElement("p",null,"Path Parameters")),l.a.createElement("ul",null,l.a.createElement("li",null,"pokemon_name - Pok\xe9mon's name in English. Case insensitive. Doesn't support hyphens (-) and spaces should be encoded as '%20'. ",l.a.createElement("span",{className:"path-type-span"},"integer")," ",l.a.createElement("span",{className:"path-required-span"},"required")),l.a.createElement("li",null,"language - Language to fetch or other subresource (sprite/id): ",l.a.createElement("span",{className:"path-type-span"},"string"),l.a.createElement("ul",null,l.a.createElement("li",null,"us - English"),l.a.createElement("li",null,"de - German"),l.a.createElement("li",null,"fr - French"),l.a.createElement("li",null,"it - Italian"),l.a.createElement("li",null,"es - Spanish"),l.a.createElement("li",null,"jp - Japanese"),l.a.createElement("li",null,"kr - Korean"),l.a.createElement("li",null,"cn - Traditional Chinese"),l.a.createElement("li",null,"jp - Japanese"),l.a.createElement("li",null,"sprite - URL to Pok\xe9mon's sprite"),l.a.createElement("li",null,"id - Pok\xe9mon's ID")))))),l.a.createElement("h1",{className:"big-header"},"Other Routes"),l.a.createElement("div",{className:"path"},l.a.createElement("h2",null,l.a.createElement("span",{className:"path-get-span"},"GET")," /"),l.a.createElement("p",null,"Fetch API's version and link to GitHub")))))}function W(){return l.a.createElement("footer",null,l.a.createElement("p",null,l.a.createElement("span",null,"\u24b8 2019 Jakub Moryc "),l.a.createElement("span",null,l.a.createElement("a",{href:"#"},"See my portfolio ")),l.a.createElement("span",null,"Pok\xe9mon and Pok\xe9mon character names are trademarks of Nintendo. ")))}var D=t(29),R=t.n(D);function F(){return l.a.createElement("a",{className:"github-button",href:"https://github.com/jakubmoryc/pokelang-rest-api-documentation",target:"_blank",rel:"noopener noreferrer",title:"See code on GitHub"},l.a.createElement("div",null,l.a.createElement("img",{src:R.a,alt:""})))}var q=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={activePage:"homepage",screenWidth:void 0},t.setActivePage=function(e){t.setState({activePage:e})},t.setActivePageOnLoad=function(){switch(window.location.pathname){case"/":t.setState({activePage:"homepage"});break;case"/about":t.setState({activePage:"about"});break;case"/docs":t.setState({activePage:"docs"});break;default:t.setState({activePage:"homepage"})}},t.handleResize=function(){t.setState({screenWidth:window.innerWidth})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),this.handleResize(),this.setActivePageOnLoad()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement(h,{setActivePage:this.setActivePage,activePage:this.state.activePage,screenWidth:this.state.screenWidth}),l.a.createElement("div",{className:"app"},l.a.createElement(E.d,null,l.a.createElement(E.b,{path:"/docs"},l.a.createElement(_,null)),l.a.createElement(E.b,{path:"/about"},l.a.createElement(L,null)),l.a.createElement(E.b,{path:"/",exact:!0},l.a.createElement(x,{screenWidth:this.state.screenWidth,setActivePage:this.setActivePage})),l.a.createElement(E.b,{path:"*"},l.a.createElement(E.a,{push:!0,to:"/"}))),l.a.createElement(W,null),this.state.horizontalWidth),l.a.createElement(F,null))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.7a30d084.chunk.js.map