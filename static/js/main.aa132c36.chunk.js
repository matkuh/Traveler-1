(window.webpackJsonptraveler=window.webpackJsonptraveler||[]).push([[0],{111:function(e,t){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),s=a.n(r),i=(a(63),a(1)),c=a.n(i),o=a(8),m=a(2),u=a(3),d=a(5),p=a(4),h=a(6),f=a(11),g=a(18),E=a(16);var v=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"navbar-fixed"},l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper blue",style:{paddingLeft:10,opacity:.9}},l.a.createElement(f.b,{className:"brand-logo",to:"/"},"Traveler"),l.a.createElement("ul",{className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(f.b,{to:"/profile"},"Profile")),l.a.createElement("li",null,l.a.createElement(f.b,{to:"/"},"Feed")),l.a.createElement("li",null,l.a.createElement(f.b,{to:"/discover"},"Discover")),l.a.createElement("li",null,l.a.createElement("a",{onClick:e.logout},"Logout")))))))};function b(e){return l.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e),e.children)}function N(e){return l.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e),e.children)}function w(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col "+e}).join(" ")},a)}a(69);function y(e){return l.a.createElement("div",null,l.a.createElement("button",Object.assign({className:"btn waves-effect waves-light blue",type:"submit",name:"action"},e),e.children))}var C=function(e){return l.a.createElement("div",null,l.a.createElement(b,null,l.a.createElement(w,{size:"s3"},l.a.createElement("div",Object.assign({className:"chip disable"},e),e.tag,l.a.createElement("i",{className:"close material-icons"},"close")," "))))};var O=function(e){return l.a.createElement(w,{size:"s6"},l.a.createElement("div",{className:"card",id:"posts"},l.a.createElement("div",{className:"card-action"},l.a.createElement(N,null,l.a.createElement(w,{size:"s10"},l.a.createElement("img",{src:e.image,style:{marginLeft:"150px"},width:"80px",height:"80px",alt:"",position:"absolute","verticle-align":"center"})),l.a.createElement(w,{size:"s1"},l.a.createElement("span",null,l.a.createElement("a",{href:"#",align:"center","verticle-align":"center"}),e.follow?l.a.createElement(y,{className:"btn-small right blue",onClick:function(){return e.followUser(e.user_id)}},"Follow"):"")))),l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:e.image,width:"300",height:"350",className:"activator"}),l.a.createElement("span",{className:"card-title activator black-text"},e.title)),l.a.createElement("div",{className:"card-content"},l.a.createElement("p",{className:"activator"},e.location),l.a.createElement("p",{className:"chip disable"},e.tag)),l.a.createElement("div",{className:"card-reveal"},l.a.createElement("span",{className:"card-title grey-text text-darken-4"},l.a.createElement("i",{className:"material-icons right"},"close")),l.a.createElement("p",{className:"card-title"},e.info))))};var k=function(e){return l.a.createElement("div",Object.assign({className:"card-panel center"},e),e.children)};var x=function(e){return l.a.createElement("div",null,l.a.createElement(b,null,l.a.createElement(N,null,l.a.createElement(w,{size:"s4"}," "),l.a.createElement("div",{className:"row center"},l.a.createElement("div",{className:"input-field col s4"},l.a.createElement("h3",{className:"grey-text text-darken-3"},e.children))),l.a.createElement(w,{size:"s4"}," "))))},j=a(48),S=a.n(j);function P(e){return l.a.createElement("form",null,l.a.createElement("div",{className:"input-field"},l.a.createElement("textarea",Object.assign({id:"textarea1",className:"materialize-textarea"},e)),l.a.createElement("label",{htmlFor:"textarea1"},e.children)))}var I=a(14),_=a.n(I),T=(n.Component,a(70),a(9)),F=a.n(T),z=(n.Component,a(87),{followUser:function(e){return F.a.post("/api/follow",e)},editUser:function(e){return F.a.put("/api/user",e)},getProfile:function(e){return F.a.get("/api/user/"+e)},getPhoto:function(e){return F.a.get("/api/user/"+e)},getPosts:function(){return F.a.get("/api/post")},getFollowPosts:function(e){return F.a.get("api/follow/"+e)},getPostSearch:function(e){return F.a.get("/api/discover/"+e)},getUserPosts:function(e){return F.a.get("/api/post/"+e)},newPost:function(e){return F.a.post("/api/post",e)},getUser:function(){return F.a.get("/auth/user")},logout:function(){return F.a.get("/auth/logout")}}),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={info:"",title:"",location:"",url:"",file:"",fileName:"",tag:"",user_id:"",lat:"",lng:"",image:"",place:{}},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(E.a)({},n,l))},a.handlePicture=function(){var e=Object(o.a)(c.a.mark(function e(t){var n,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.files[0].name,console.log(n),a.setState({file:t.target.files[0],url:"https://travelerdb.s3-us-west-1.amazonaws.com/".concat(n),fileName:n}),(l=new FormData).append("imageData",t.target.files[0]),l.append("imageName",n),F.a.post("/api/feed",l).then(function(e){console.log(e)});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.addPost=function(){var e=Object(o.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("Add post begins"),console.log(a.state.url),n={info:a.state.info,tag:a.state.tag,user_id:a.props.user_id,title:a.state.title,location:a.state.location,url:a.state.url,lat:a.state.lat,lng:a.state.lng},console.log("POST DATA:",n),z.newPost(n).then(function(e){console.log(e),window.location.reload()});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){_.a.AutoInit()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N,null,l.a.createElement(b,null,l.a.createElement(b,null,l.a.createElement(N,{className:"center"},l.a.createElement("a",{className:" waves-light btn-large modal-trigger blue",href:"#modal1"},"Create Post"))))),l.a.createElement("div",{id:"modal1",className:"modal"},l.a.createElement(N,{className:"center"},l.a.createElement("h3",{style:{marginTop:"2rem"}},"Create a Post")),l.a.createElement(b,null,l.a.createElement(k,null,l.a.createElement(b,null,l.a.createElement("form",null,l.a.createElement(N,null,l.a.createElement(w,{size:"s6"},l.a.createElement("input",{placeholder:"Location",id:"location",name:"location",type:"text",className:"validate",value:this.state.location,onChange:this.handleInputChange})),l.a.createElement(w,{size:"s6"},l.a.createElement("input",{placeholder:"Title",id:"title",name:"title",type:"text",className:"validate",value:this.state.title,onChange:this.handleInputChange}))),l.a.createElement(N,null,l.a.createElement(w,{size:"s6"},l.a.createElement("input",{placeholder:"Record your journey",id:"description",name:"info",type:"text",className:"validate",value:this.state.info,onChange:this.handleInputChange})),l.a.createElement(w,{size:"s6"},l.a.createElement("input",{placeholder:"Tag",id:"tag",name:"tag",type:"text",className:"validate",value:this.state.tag,onChange:this.handleInputChange}))),l.a.createElement(N,null,l.a.createElement(w,{size:"s6"},l.a.createElement("input",{placeholder:"lat",id:"lat",name:"lat",type:"text",className:"validate",value:this.state.lat,onChange:this.handleInputChange})),l.a.createElement(w,{size:"s6"},l.a.createElement("input",{placeholder:"lng",id:"lng",name:"lng",type:"text",className:"validate",value:this.state.lng,onChange:this.handleInputChange}))),l.a.createElement(N,null,l.a.createElement("div",{className:"file-field input-field"},l.a.createElement("div",{className:"btn blue"},l.a.createElement("span",null,"Upload Photo"),l.a.createElement("input",{type:"file",onChange:this.handlePicture})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate"})))),l.a.createElement(y,{className:"btn blue modal-close",onClick:this.addPost},"Submit")))))))}}]),t}(n.Component),A=(a(88),a(89),l.a.Component,n.Component,a(49)),L=a.n(A),U=(a(90),a(38),{backgroundImage:"url(".concat(L.a,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundAttachment:"fixed"}),R={left:"0",bottom:"0",marginTop:"30%",width:"100%",backgroundColor:"#2196f3",color:"white",textAlign:"center",opacity:"1"},M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={user_id:a.props.user_id,email:"",firstName:a.props.firstName,lastName:"",image:"",followPosts:{},place:{}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"showPlaceDetails",value:function(e){this.setState({place:e})}},{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark(function e(){var t=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("BRING IN FOLLOWERS"),z.getFollowPosts(this.state.user_id).then(function(e){console.log("\nFOLLOWING POST ARRAY"),console.log(e),t.setState({followPosts:e.data})});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{style:U},l.a.createElement(x,null),l.a.createElement(b,null,l.a.createElement(D,{user_id:this.state.user_id}),l.a.createElement(b,null,this.state.followPosts.length?this.state.followPosts.map(function(e,t){return l.a.createElement(N,{className:"center"},l.a.createElement(O,{key:t,title:e.title,info:e.info,location:e.location,tag:e.tag,user_id:e.user_id,image:e.image}))}):"No Posts")),l.a.createElement(k,{style:R}))}}]),t}(n.Component),B=(a(91),{backgroundImage:"url(".concat(S.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",backgroundAttachment:"fixed"}),W={left:"0",bottom:"0",marginTop:"30%",width:"100%",backgroundColor:"#2196f3",color:"white",textAlign:"center",opacity:"1"},G=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={user_id:a.props.user_id,tag:"",searched:!1,posts:[]},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(E.a)({},n,l))},a.followUser=function(e){console.log("WE FOLLOWED THE USER");var t={user_id:a.state.user_id,follow_id:parseInt(e)};console.log(t),z.followUser(t).then(function(e){return console.log(e)})},a.handleFormSubmit=function(e){e.preventDefault(),a.setState({searched:!0});var t=a.state.tag;console.log(t),z.getPostSearch(t).then(function(e){console.log("Searched Posts xD"),console.log(e),a.setState({posts:e.data})})},a.handleChipClick=function(e){e.preventDefault(),a.setState({searched:!0}),console.log("CLICKED SEARCH")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark(function e(){var t=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:_.a.Chips.init(),!1===this.state.searched&&(console.log("DISCOVER PAGE"),z.getPosts().then(function(e){console.log(e.data),t.setState({posts:e.data})}));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:B},l.a.createElement(b,null,l.a.createElement(x,null,"Discover"),l.a.createElement(b,null,l.a.createElement(N,null,l.a.createElement("div",{className:"input-field col s12 bgSearchBar blue-text"},l.a.createElement(w,{size:"s10"},l.a.createElement("i",{className:" material-icons prefix",style:{marginTop:"10px"}},"search"),l.a.createElement("input",{type:"text",id:"discoversearch",name:"tag",value:this.state.tag,onChange:this.handleInputChange})),l.a.createElement(w,{size:"s2"},l.a.createElement(y,{style:{marginTop:"10px"},onClick:this.handleFormSubmit},l.a.createElement("i",{className:"material-icons"},"search")))))),l.a.createElement(N,null,this.state.posts.length?this.state.posts.map(function(t,a){return l.a.createElement(C,{key:a,name:"tag",value:e.state.tag,tag:t.tag,user_id:t.user_id,onClick:e.handleInputChange})}):"No Posts"),l.a.createElement(b,null,l.a.createElement(b,null,this.state.posts.length?this.state.posts.map(function(t,a){return l.a.createElement(N,{className:"center"},l.a.createElement(O,{follow:!0,followUser:e.followUser,key:a,title:t.title,info:t.info,location:t.location,tag:t.tag,user_id:t.user_id,image:t.image}))}):"No Posts"))),l.a.createElement(k,{style:W}))}}]),t}(n.Component),H=a(50);var J=function(e){return l.a.createElement("div",null,l.a.createElement(N,null,l.a.createElement(w,{size:"s12"},l.a.createElement("div",{className:"card #90caf9 blue lighten-2"},l.a.createElement("div",{className:"card-content white-text"},l.a.createElement("span",{className:"card-title"},"Bio"),l.a.createElement("p",null,e.bio)),l.a.createElement("div",{className:"card-action"})))))},K=a(51),V=a.n(K),Y=a(52),Z=a.n(Y);function $(){var e=Object(H.a)(["\n  position: absolute;\n\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 15px solid red;\n  border-radius: 50%;\n  text-align: center;\n\n  cursor: ",";\n  &:hover {\n    z-index: 1;\n  }\n  "]);return $=function(){return e},e}var q=a(53).a.div($(),function(e){return e.onClick?"pointer":"default"}),Q=function(e){var t=e.text;return l.a.createElement("div",null,l.a.createElement(q,null,t))},X={backgroundImage:"url(".concat(Z.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"100%",backgroundAttachment:"fixed"},ee=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={user_id:a.props.user_id,editBio:"",bio:"",image:"",posts:[],lat:a.props.lat,lng:a.props.lng,title:a.props.title,firstName:a.props.firstName},a.handleFormSubmit=function(){var e=Object(o.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("WE MADE IT TO THE FORM SUBMIT"),n={user_id:a.state.user_id,bio:a.state.editBio,image:a.state.image},console.log(n),z.editUser(n).then(function(e){return console.log(e)}),window.location.reload();case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(E.a)({},n,l))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("IS THIS WORKING"),console.log("USER ID:",this.state.user_id);var t=this.state.user_id;z.getUserPosts(t).then(function(t){console.log("GET USER POSTS"),console.log(t.data),e.setState({posts:t.data})}),z.getProfile(t).then(function(t){console.log("\nGET PROFILE\n"),console.log(t.data);var a=t.data;e.setState({bio:a.bio,image:a.image})})}},{key:"render",value:function(){return l.a.createElement("div",{style:X},l.a.createElement(b,null,l.a.createElement(x,null,this.state.firstName),l.a.createElement(N,{className:"center"},l.a.createElement(w,{size:"s6"},l.a.createElement("img",{style:{height:"300px",width:"400px"},src:this.state.image,alt:"Profile picture"}))),l.a.createElement(N,{className:"center"},l.a.createElement(w,{size:"s6"},l.a.createElement(k,null,l.a.createElement(J,{bio:this.state.bio}),l.a.createElement(P,{name:"editBio",placeholder:"Edit Bio",value:this.state.editBio,onChange:this.handleInputChange}),l.a.createElement(y,{onClick:this.handleFormSubmit},"Submit")))),l.a.createElement(k,null,l.a.createElement("div",{style:{height:"100vh",width:"100%"}},l.a.createElement(V.a,{defaultCenter:this.props.center,defaultZoom:this.props.zoom,yesIWantToUseGoogleMapApiInternals:!0},console.log("\nWE MADE IT\n"),console.log(this.state.posts),this.state.posts.length?this.state.posts.map(function(e,t){return l.a.createElement(Q,{key:t,id:e.user_id,lat:e.lat,lng:e.lng,text:e.title})}):console.log("No Markers"))))),l.a.createElement(b,null,l.a.createElement(b,null,this.state.posts.length?this.state.posts.map(function(e,t){return l.a.createElement(N,{className:"center"},l.a.createElement(O,{follow:!1,key:t,title:e.title,info:e.info,location:e.location,tag:e.tag,user_id:e.user_id,image:e.image}))}).reverse():"No Posts")))}}]),t}(n.Component);ee.defaultProps={center:{lat:37.77,lng:-122.43},zoom:1};var te=ee,ae=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:""},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(E.a)({},n,l))},a.handleFormSubmit=function(){var e=Object(o.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("WE MADE IT TO THE FORM SUBMIT"),e.next=4,fetch("/auth/login",{method:"POST",credentials:"include",mode:"cors",body:JSON.stringify({password:a.state.password,email:a.state.email}),headers:new Headers({"Content-Type":"application/json"})}).then(function(e){window.location.href="/"}).catch(function(e){return console.log(e)});case 4:a.setstate({email:"",password:""});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(b,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(k,{id:"cardStyleLogin"},l.a.createElement("h1",{id:"logo"},"Traveler"),l.a.createElement("h5",{className:"loginFont"},"Login"),l.a.createElement("form",{className:"col s12"},l.a.createElement(N,null,l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{id:"email",className:"validate",name:"email",type:"email",value:this.state.email,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"email"},"Email"))),l.a.createElement(N,null,l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{id:"password",className:"validate",name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"password"},"Password"))),l.a.createElement(N,{className:"center"},l.a.createElement(w,{size:"s6"},l.a.createElement(f.b,{to:"/signup"},"Don't have an account? Sign up here."))),l.a.createElement(N,{className:"center"},l.a.createElement(w,{size:"s6"},l.a.createElement("br",null),l.a.createElement(y,{onClick:this.handleFormSubmit},"Login ",l.a.createElement("i",{className:"material-icons"},"send")),l.a.createElement("br",null))))))))}}]),t}(n.Component),ne=(a(111),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:"",passwordConfirm:"",firstName:"",lastName:"",file:"",fileName:"",url:""},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(E.a)({},n,l))},a.handlePicture=function(){var e=Object(o.a)(c.a.mark(function e(t){var n,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.files[0].name,console.log(n),a.setState({file:t.target.files[0],url:"https://travelerdb.s3-us-west-1.amazonaws.com/".concat(n),fileName:n}),(l=new FormData).append("imageData",t.target.files[0]),l.append("imageName",n),F.a.post("/api/user",l).then(function(e){console.log(e)});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleFormSubmit=function(){var e=Object(o.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(a.state.firstName&&a.state.lastName&&a.state.email&&a.state.password&&a.state.passwordConfirm)){e.next=11;break}if(a.state.password!==a.state.passwordConfirm){e.next=8;break}return e.next=5,fetch("/auth/signup",{method:"POST",credentials:"include",mode:"cors",body:JSON.stringify({password:a.state.password,email:a.state.email,firstName:a.state.firstName,lastName:a.state.lastName,image:a.state.url}),headers:new Headers({"Content-Type":"application/json"})}).then(function(e){window.location.href="/"}).catch(function(e){return console.log(e)});case 5:a.setState({email:"",password:"",passwordConfirm:"",firstName:"",lastName:"",url:""}),e.next=9;break;case 8:console.log("Make sure that your passwords match");case 9:e.next=12;break;case 11:console.log("Make sure to fill out all fields");case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(b,null,l.a.createElement("div",{className:"card-panel center",id:"cardStyleSignup"},l.a.createElement("h4",{style:{marginBottom:"0"}},"Sign Up"),l.a.createElement("form",{className:"col s12"},l.a.createElement(N,null,l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"firstName",className:"validate",type:"text",name:"firstName",value:this.state.firstName,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"firstName"},"First Name")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"lastName",className:"validate",type:"text",name:"lastName",value:this.state.lastName,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"lastLame"},"Last Name"))),l.a.createElement(N,{className:"mb-1"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{id:"email",className:"validate",type:"email",name:"email",value:this.state.email,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"email"},"Email"))),l.a.createElement(N,{className:"mb-1"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{id:"password",className:"validate",type:"password",name:"password",value:this.state.password,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"password"},"Password"))),l.a.createElement(N,{className:"mb-1"},l.a.createElement("div",{className:"input-field col s12"},l.a.createElement("input",{id:"passwordConfirm",className:"validate",type:"password",name:"passwordConfirm",value:this.state.passwordConfirm,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"passwordConfirm"}," Confirm Password"))),l.a.createElement(N,null,l.a.createElement("div",{className:"file-field input-field"},l.a.createElement("div",{className:"btn blue",id:"signUP"},l.a.createElement("span",null,"Upload Photo"),l.a.createElement("input",{type:"file",onChange:this.handlePicture})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate"}))))),l.a.createElement(N,{className:"center",id:"loginRe"},l.a.createElement(f.b,{to:"/"},"Already have an account? Login here.")),l.a.createElement(N,null,l.a.createElement(y,{onClick:this.handleFormSubmit},"Signup ",l.a.createElement("i",{className:"material-icons right"},"send"))))))}}]),t}(n.Component)),le=(a(112),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={isLoggedin:!1,user_id:"",firstName:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(c.a.mark(function e(){var t=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getUser().then(function(e){console.log(e),t.setState({isLoggedin:e.data.isLoggedin,user_id:e.data.id,firstName:e.data.firstName})});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){z.logout().then(function(e){console.log("We logged out"),window.location="/"})}},{key:"render",value:function(){var e=this;return!1===this.state.isLoggedin?l.a.createElement(f.a,null,l.a.createElement(g.c,null,l.a.createElement(g.a,{exact:!0,path:"/",component:ae}),l.a.createElement(g.a,{exact:!0,path:"/login",component:ae}),l.a.createElement(g.a,{exact:!0,path:"/signup",component:ne}))):l.a.createElement(f.a,null,l.a.createElement(v,{firstName:this.state.firstName,logout:this.logout}),l.a.createElement(g.c,null,l.a.createElement(g.a,{exact:!0,path:"/",component:function(){return l.a.createElement(M,{firstName:e.state.firstName,user_id:e.state.user_id})}}),l.a.createElement(g.a,{exact:!0,path:"/discover",component:function(){return l.a.createElement(G,{firstName:e.state.firstName,user_id:e.state.user_id})}}),l.a.createElement(g.a,{exact:!0,path:"/profile",component:function(){return l.a.createElement(te,{firstName:e.state.firstName,user_id:e.state.user_id})}})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},48:function(e,t,a){e.exports=a.p+"static/media/bg9.a12e6bc9.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/bg10.9b5fdfdd.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/bg4.5c4cfaa3.jpg"},58:function(e,t,a){e.exports=a(113)},63:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.aa132c36.chunk.js.map