(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{326:function(e,t,n){},344:function(e,t,n){},345:function(e,t,n){},346:function(e,t,n){},347:function(e,t,n){},348:function(e,t,n){},349:function(e,t,n){},350:function(e,t,n){},353:function(e,t,n){},354:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n.n(a),s=n(30),i=n.n(s),r=n(36),c=n(13),l=n(14),h=n(16),d=n(15),u=n(107),p=n.n(u),m=(n(326),n(2)),b=function(e){var t=e.imageUrl,n=e.boxes;return Object(m.jsx)("div",{className:"center ma",children:Object(m.jsxs)("div",{className:"absolute mt2",children:[Object(m.jsx)("img",{id:"inputimage",alt:"",src:t,width:"500px",heigh:"auto"}),n.map((function(e){return Object(m.jsx)("div",{className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}},e.topRow)}))]})})},g=n(47),j=n(356),f=n(358),O=n(359),w=n(357),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).toggle=function(){a.setState((function(e){return{dropDownOpen:!e.dropDownOpen}}))},a.toggle=a.toggle.bind(Object(g.a)(a)),a.state={dropDownOpen:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"pa4 tc",children:Object(m.jsxs)(j.a,{direction:"left",isOpen:this.state.dropDownOpen,toggle:this.toggle,children:[Object(m.jsx)(f.a,{tag:"span","data-toggle":"dropdown","aria-expanded":this.state.dropDownOpen,children:Object(m.jsx)("img",{src:"http://tachyons.io/img/logo.jpg",className:"br-100 h3 w3 dib",alt:"avatar"})}),Object(m.jsxs)(O.a,{className:"b--transparent shadow-5",style:{marginTop:"20px",backgroundColor:"rgba(255, 255, 255, 0.5"},children:[Object(m.jsx)(w.a,{onClick:this.props.toggleModal,children:"View Profile"}),Object(m.jsx)(w.a,{onClick:function(){return e.props.onRouteChange("signout")},children:"Sign Out"})]})]})})}}]),n}(a.Component),x=function(e){var t=e.onRouteChange,n=e.isSignedIn,a=e.toggleModal;return n?Object(m.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(m.jsx)(v,{onRouteChange:t,toggleModal:a})}):Object(m.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(m.jsx)("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(m.jsx)("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})},N=(n(344),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.saveAuthTokenInSession=function(e){window.sessionStorage.setItem("token",e)},a.onSubmitSignIn=function(){fetch("/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.userId&&"true"===e.success&&(a.saveAuthTokenInSession(e.token),a.props.loadUser(e),a.props.onRouteChange("home"))})).catch(console.log)},a.state={signInEmail:"",signInPassword:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.onRouteChange;return Object(m.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(m.jsx)("main",{className:"pa4 black-80",children:Object(m.jsxs)("div",{className:"measure",children:[Object(m.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(m.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(m.jsxs)("div",{className:"mt3",children:[Object(m.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(m.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 black-hover",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(m.jsxs)("div",{className:"mv3",children:[Object(m.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 black-hover",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})}),Object(m.jsx)("div",{className:"lh-copy mt3",children:Object(m.jsx)("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(o.a.Component)),C=(n(345),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,name:a.state.name,password:a.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(m.jsx)("main",{className:"pa4 black-80",children:Object(m.jsxs)("div",{className:"measure",children:[Object(m.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(m.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(m.jsxs)("div",{className:"mt3",children:[Object(m.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(m.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 black-hover",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(m.jsxs)("div",{className:"mt3",children:[Object(m.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(m.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 black-hover",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(m.jsxs)("div",{className:"mv3",children:[Object(m.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 black-hover",type:"password",name:"password",id:"password",onChange:this.onPasswordChange})]})]}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})})]})})})}}]),n}(o.a.Component)),k=n(110),y=n.n(k),A=(n(346),function(){return Object(m.jsx)("div",{className:"ma4 mt0",children:Object(m.jsx)(y.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150},children:Object(m.jsx)("div",{className:"Tilt-inner pa3",children:Object(m.jsx)("img",{style:{paddingTop:"5px"},alt:"logo",src:"data:image/png;base64,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"})})})})}),S=(n(347),document.getElementById("modal-root")),R=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).el=document.createElement("div"),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){S.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){S.removeChild(this.el)}},{key:"render",value:function(){return i.a.createPortal(this.props.children,this.el)}}]),n}(o.a.Component),I=(n(348),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onFormChange=function(e){switch(e.target.name){case"user-name":a.setState({name:e.target.value});break;case"user-age":a.setState({age:e.target.value});break;case"user-pet":a.setState({pet:e.target.value});break;default:return}},a.onProfileUpdate=function(e){fetch("/profile/".concat(a.props.user.id),{method:"post",headers:{"Content-Type":"application/json",Authorization:window.sessionStorage.getItem("token")},body:JSON.stringify({profileForm:e})}).then((function(t){200!==t.status&&304!==t.status||(a.props.toggleModal(),a.props.loadUser(Object(r.a)(Object(r.a)({},a.props.user),e)))})).catch((function(e){return console.log(e)}))},a.state={name:a.props.user.name,age:a.props.user.age,pet:a.props.user.age},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=(t.isProfileOpen,t.toggleModal),a=t.user,o=this.state,s=o.name,i=o.age,r=o.pet;return Object(m.jsx)("div",{className:"profile-modal",children:Object(m.jsxs)("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white",children:[Object(m.jsxs)("main",{className:"pa4 black-80 w-80",children:[Object(m.jsx)("img",{src:"http://tachyons.io/img/logo.jpg",className:"h3 w3 dib",alt:"avatar"}),Object(m.jsx)("h1",{children:this.state.name}),Object(m.jsx)("h4",{children:"Images submitted: ".concat(a.entries," ")}),Object(m.jsx)("p",{children:"Member since: ".concat(new Date(a.joined).toLocaleDateString()," ")}),Object(m.jsx)("hr",{}),Object(m.jsx)("label",{className:"mt2 fw6",htmlFor:"user-name",children:"Name:"}),Object(m.jsx)("input",{onChange:this.onFormChange,className:"pa2 ba w-100",placeholder:a.name,type:"text",name:"user-name",id:"name"}),Object(m.jsx)("label",{className:"mt2 fw6",htmlFor:"email",children:"Age:"}),Object(m.jsx)("input",{onChange:this.onFormChange,className:"pa2 ba w-100",placeholder:a.age,type:"text",name:"age",id:"age"}),Object(m.jsx)("label",{className:"mt2 fw6",htmlFor:"password",children:"Pet:"}),Object(m.jsx)("input",{onChange:this.onFormChange,className:"pa2 ba w-100",placeholder:a.pet,type:"text",name:"pet",id:"pet"}),Object(m.jsxs)("div",{className:"mt4",style:{display:"flex",justifyContent:"space-evenly"},children:[Object(m.jsx)("button",{onClick:function(){return e.onProfileUpdate({name:s,age:i,pet:r})},className:"b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20",children:"Save"}),Object(m.jsx)("button",{onClick:n,className:"b pa2 grow pointer hover-white w-40 bg-light-red b--black-20",children:"Cancel"})]})]}),Object(m.jsx)("div",{className:"close-modal",onClick:n,children:"\xd7"})]})})}}]),n}(o.a.Component)),E=(n(349),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"f3",children:"This Magic Brain will detect faces in your pictures. Git it a try."}),Object(m.jsx)("div",{className:"center",children:Object(m.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(m.jsx)("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),Object(m.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),T=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).generateEmojis=function(t){fetch("https://twh7xpoz4i.execute-api.us-east-1.amazonaws.com/rank?rank=".concat(t)).then((function(e){return e.json()})).then((function(t){return e.setState({emoji:t.input})})).catch((function(e){return console.log(e)}))},e.state={emoji:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.generateEmojis(this.props.entries)}},{key:"componentDidUpdate",value:function(e,t){if(t.entries===this.props.entries&&t.name===this.props.name)return null;this.generateEmojis(this.props.entries)}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"white f3",children:"".concat(this.props.name,", your current entry count is...")}),Object(m.jsx)("div",{className:"white f1",children:this.props.entries}),Object(m.jsx)("div",{className:"white f3",children:"Rank Badge: ".concat(this.state.emoji)})]})}}]),n}(o.a.Component),M=(n(350),{particles:{number:{value:100,density:{enable:!0,value_area:800}}}}),G={input:"",imageUrl:"",boxes:[],route:"signin",isSignedIn:!1,isProfileOpen:!1,user:{id:"",name:"",email:"",entries:0,joined:"",pet:"",age:""}},D=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocations=function(e){if(console.log(e),e&&e.outputs)return e.outputs[0].data.regions.map((function(e){var t=e.region_info.bounding_box,n=document.getElementById("inputimage"),a=Number(n.width),o=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*o,rightCol:a-t.right_col*a,bottomRow:o-t.bottom_row*o}}))},e.displayFaceBoxes=function(t){t&&e.setState({boxes:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("/imageurl",{method:"post",headers:{"Content-Type":"application/json",Authorization:window.sessionStorage.getItem("token")},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("/image",{method:"put",headers:{"Content-Type":"application/json",Authorization:window.sessionStorage.getItem("token")},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBoxes(e.calculateFaceLocations(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){if("signout"===t)return e.setState(G);"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.toggleModal=function(){e.setState((function(e){return Object(r.a)(Object(r.a)({},e),{},{isProfileOpen:!e.isProfileOpen})}))},e.state=G,e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=window.sessionStorage.getItem("token");t&&fetch("/signin",{method:"post",headers:{"Content-Type":"application/json",Authorization:t}}).then((function(e){return e.json()})).then((function(n){n&&n.id&&fetch("/profile/".concat(n.id),{method:"get",headers:{"Content-Type":"application/json",Authorization:t}}).then((function(e){return e.json()})).then((function(t){t&&t.email&&(e.loadUser(t),e.onRouteChange("home"))}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.imageUrl,a=e.route,o=e.boxes,s=e.isProfileOpen,i=e.user;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(p.a,{className:"particles",params:M}),Object(m.jsx)(x,{isSignedIn:t,onRouteChange:this.onRouteChange,toggleModal:this.toggleModal}),s&&Object(m.jsx)(R,{children:Object(m.jsx)(I,{isProfileOpen:s,toggleModal:this.toggleModal,user:i,loadUser:this.loadUser})}),"home"===a?Object(m.jsxs)("div",{children:[Object(m.jsx)(A,{}),Object(m.jsx)(T,{name:this.state.user.name,entries:this.state.user.entries}),Object(m.jsx)(E,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(m.jsx)(b,{boxes:o,imageUrl:n})]}):"signin"===a?Object(m.jsx)(N,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(m.jsx)(C,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(351),n(352),n(353);i.a.render(Object(m.jsx)(D,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");q?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):B(e)}))}}()}},[[354,1,2]]]);
//# sourceMappingURL=main.a526d57e.chunk.js.map