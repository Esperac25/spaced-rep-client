(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(40)},27:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);n(20);var r,a,o=n(0),c=n.n(o),u=n(17),s=n.n(u),l=n(44),i=n(2),m=n(3),h=n(5),f=n(4),p=n(6),d="https://spaced-rep-api-esperanza.herokuapp.com/api",g="spaced-rep-auth-token",E=n(18),v=n.n(E),b={saveAuthToken:function(e){window.localStorage.setItem(g,e)},getAuthToken:function(){return window.localStorage.getItem(g)},clearAuthToken:function(){window.localStorage.removeItem(g)},hasAuthToken:function(){return!!b.getAuthToken()},parseJwt:function(e){return v()(e)},parseAuthToken:function(){var e=b.getAuthToken();return e?b.parseJwt(e):void 0},_getMsUntilExpiry:function(e){return 1e3*e.exp-Date.now()},queueCallbackBeforeExpiry:function(e){var t=b._getMsUntilExpiry(b.parseAuthToken());r=setTimeout(e,t-1e4)},clearCallbackBeforeExpiry:function(){clearTimeout(r)}},j=b,O={postUser:function(e){return fetch("".concat(d,"/user"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},postLogin:function(e){var t=e.username,n=e.password;return fetch("".concat(d,"/auth/token"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:n})}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},refreshToken:function(){return fetch("".concat(d,"/auth/token"),{method:"PUT",headers:{authorization:"Bearer ".concat(j.getAuthToken())}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})}},k=null,w=["mousedown","mousemove","keypress","scroll","touchstart"],y={setIdleCallback:function(e){k=e},resetIdleTimer:function(e){clearTimeout(a),a=setTimeout(k,3e5)},registerIdleTimerResets:function(){w.forEach(function(e){return document.addEventListener(e,y.resetIdleTimer,!0)})},unRegisterIdleResets:function(){clearTimeout(a),w.forEach(function(e){return document.removeEventListener(e,y.resetIdleTimer,!0)})}},S=y,T=c.a.createContext({user:{},error:null,setError:function(){},clearError:function(){},setUser:function(){},processLogin:function(){},processLogout:function(){}}),L=T,N=function(e){function t(e){var n;Object(i.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).setError=function(e){console.error(e),n.setState({error:e})},n.clearError=function(){n.setState({error:null})},n.setUser=function(e){n.setState({user:e})},n.processLogin=function(e){j.saveAuthToken(e);var t=j.parseAuthToken();n.setUser({id:t.user_id,name:t.name,username:t.sub}),S.regiserIdleTimerResets(),j.queueCallbackBeforeExpiry(function(){n.fetchRefreshToken()})},n.processLogout=function(){j.clearAuthToken(),j.clearCallbackBeforeExpiry(),S.unRegisterIdleResets(),n.setUser({})},n.logoutBecauseIdle=function(){j.clearAuthToken(),j.clearCallbackBeforeExpiry(),S.unRegisterIdleResets(),n.setUser({idle:!0})},n.fetchRefreshToken=function(){O.refreshToken().then(function(e){j.saveAuthToken(e.authToken),j.queueCallbackBeforeExpiry(function(){n.fetchRefreshToken()})}).catch(function(e){n.setError(e)})};var r={user:{},error:null},a=j.parseAuthToken();return a&&(r.user={id:a.user_id,name:a.name,username:a.sub}),n.state=r,S.setIdleCallback(n.logoutBecauseIdle),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.hasAuthToken()&&(S.registerIdleTimerResets(),j.queueCallbackBeforeExpiry(function(){e.fetchRefreshToken()}))}},{key:"componentWillUnmount",value:function(){S.unRegisterIdleResets(),j.clearCallbackBeforeExpiry()}},{key:"render",value:function(){var e={user:this.state.user,error:this.state.error,setError:this.setError,clearError:this.clearError,setUser:this.setUser,processLogin:this.processLogin,processLogout:this.processLogout};return c.a.createElement(T.Provider,{value:e},this.props.children)}}]),t}(o.Component),C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?c.a.createElement("h1",null,"Error, Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(o.Component),x=n(46),A=n(45),R=n(42),I=(n(27),function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).handleLogoutClick=function(){n.context.processLogout()},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"renderLogoutLink",value:function(){return c.a.createElement("nav",null,c.a.createElement("span",{className:"user"},this.context.user.name),c.a.createElement(R.a,{onClick:this.handleLogoutClick,to:"/login"},"Logout"))}},{key:"renderLoginLink",value:function(){return c.a.createElement("nav",null,c.a.createElement(R.a,{to:"/login"},"Login")," ",c.a.createElement(R.a,{to:"/register"},"Sign up"))}},{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"navbar"},j.hasAuthToken()?this.renderLogoutLink():this.renderLoginLink(),c.a.createElement("h1",{className:"header-logo"},c.a.createElement(R.a,{to:"/"},"Espace-it"))))}}]),t}(o.Component));I.contextType=L;var P=I,W=n(9),U=n(43);function q(e){var t=e.component,n=Object(W.a)(e,["component"]),r=t;return c.a.createElement(A.a,Object.assign({},n,{render:function(e){return c.a.createElement(L.Consumer,null,function(t){return t.user.id?c.a.createElement(r,e):c.a.createElement(U.a,{to:{pathname:t.user.idle?"/login":"/register",state:{from:e.location}}})})}}))}function B(e){var t=e.component,n=Object(W.a)(e,["component"]),r=t;return c.a.createElement(A.a,Object.assign({},n,{render:function(e){return c.a.createElement(L.Consumer,null,function(t){return t.user.id?c.a.createElement(U.a,{to:"/"}):c.a.createElement(r,e)})}}))}var F=n(11),D=n.n(F);n(31);function J(e){var t=e.className,n=Object(W.a)(e,["className"]);return c.a.createElement("label",Object.assign({className:D()("Label",t)},n))}var M=c.a.forwardRef(function(e,t){var n=e.className,r=Object(W.a)(e,["className"]);return c.a.createElement("input",Object.assign({className:D()("Input",n),type:"text",ref:t},r))});function _(e){var t=e.className,n=Object(W.a)(e,["className"]);return c.a.createElement("span",Object.assign({className:D()("Required",t)},n),"*")}n(32);var z=c.a.forwardRef(function(e,t){var n=e.className,r=Object(W.a)(e,["className"]);return c.a.createElement("button",Object.assign({className:D()("Button",n),ref:t},r))}),G=(n(33),function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={error:null},n.firstInput=c.a.createRef(),n.handleSubmit=function(e){e.preventDefault();var t=e.target,r=t.name,a=t.username,o=t.password;O.postUser({name:r.value,username:a.value,password:o.value}).then(function(e){r.value="",a.value="",o.value="",n.props.onRegistrationSuccess()}).catch(function(e){n.setState({error:e.error})})},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.firstInput.current.focus()}},{key:"render",value:function(){var e=this.state.error;return c.a.createElement("form",{className:"box",onSubmit:this.handleSubmit},c.a.createElement("div",{role:"alert"},e&&c.a.createElement("p",null,e)),c.a.createElement("div",null,c.a.createElement(J,{htmlFor:"registration-name-input"},"Name",c.a.createElement(_,null)),c.a.createElement("br",null),c.a.createElement(M,{ref:this.firstInput,id:"registration-name-input",name:"name",required:!0})),c.a.createElement("div",null,c.a.createElement(J,{htmlFor:"registration-username-input"},"Username",c.a.createElement(_,null)),c.a.createElement("br",null),c.a.createElement(M,{id:"registration-username-input",name:"username",required:!0})),c.a.createElement("div",null,c.a.createElement(J,{htmlFor:"registration-password-input"},"Password",c.a.createElement(_,null)),c.a.createElement("br",null),c.a.createElement(M,{id:"registration-password-input",name:"password",type:"password",required:!0})),c.a.createElement("footer",null,c.a.createElement(z,{type:"submit"},"Sign up")," ",c.a.createElement(R.a,{className:"link",to:"/login"},"Already have an account?")))}}]),t}(o.Component));G.defaultProps={onRegistrationSuccess:function(){}};var Y=G,H=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).handleRegistrationSuccess=function(){n.props.history.push("/login")},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"center"},c.a.createElement("p",null,"Practice learning French with the spaced repetition revision technique."),c.a.createElement("h2",null,"Sign up"),c.a.createElement(Y,{onRegistrationSuccess:this.handleRegistrationSuccess}))}}]),t}(o.Component);H.defaultProps={history:{push:function(){}}};var $=H,K=(n(34),function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={error:null},n.firstInput=c.a.createRef(),n.handleSubmit=function(e){e.preventDefault();var t=e.target,r=t.username,a=t.password;n.setState({error:null}),O.postLogin({username:r.value,password:a.value}).then(function(e){r.value="",a.value="",n.context.processLogin(e.authToken),n.props.onLoginSuccess()}).catch(function(e){n.setState({error:e.error})})},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.firstInput.current.focus()}},{key:"render",value:function(){var e=this.state.error;return c.a.createElement("form",{className:"box",onSubmit:this.handleSubmit},c.a.createElement("div",{role:"alert"},e&&c.a.createElement("p",null,e)),c.a.createElement("div",null,c.a.createElement(J,{htmlFor:"login-username-input"},"Username"),c.a.createElement("br",null),c.a.createElement(M,{ref:this.firstInput,id:"login-username-input",name:"username",required:!0})),c.a.createElement("div",null,c.a.createElement(J,{htmlFor:"login-password-input"},"Password"),c.a.createElement("br",null),c.a.createElement(M,{id:"login-password-input",name:"password",type:"password",required:!0})),c.a.createElement("footer",null,c.a.createElement(z,{type:"submit"},"Login")))}}]),t}(o.Component));K.defaultProps={onLoginSuccess:function(){}},K.contextType=L;var Q=K,V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).handleLoginSuccess=function(){var e=n.props,t=e.location,r=e.history,a=(t.state||{}).from||"/";r.push(a)},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"center"},c.a.createElement("h2",null,"Login"),c.a.createElement(Q,{onLoginSuccess:this.handleLoginSuccess}))}}]),t}(o.Component);V.defaultProps={location:{},history:{push:function(){}}};var X=V,Z=c.a.createContext({language:{},words:[],head:null,processLanguage:function(){},processNextWord:function(){},setError:function(){},clearError:function(){}}),ee=Z,te=function(e){function t(e){var n;Object(i.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).setError=function(e){console.error(e),n.setState({error:e})},n.clearError=function(){n.setState({error:null})},n.processLanguage=function(e){n.setState({language:e.language,words:e.words})},n.processNextWord=function(e){n.setState({head:e})};return n.state={language:{},words:[],head:null},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e={language:this.state.language,words:this.state.words,head:this.state.head,error:this.state.error,setError:this.setError,clearError:this.clearError,processLanguage:this.processLanguage,processNextWord:this.processNextWord,processLogout:this.processLogout};return c.a.createElement(Z.Provider,{value:e},this.props.children)}}]),t}(o.Component),ne={getLanguage:function(){return fetch("".concat(d,"/language"),{method:"GET",headers:{authorization:"Bearer ".concat(j.getAuthToken())}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})}};function re(e){var t=e.word,n=e.word,r=n.correct_count,a=n.incorrect_count;return c.a.createElement("li",null,c.a.createElement("h4",{className:"item"},t.original),c.a.createElement("br",null),c.a.createElement("span",{className:"item-span"},c.a.createElement("div",null,"correct: ",r),c.a.createElement("div",null,"incorrect: ",a)))}n(35);var ae=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={error:null,language:null},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;ne.getLanguage().then(function(t){e.context.processLanguage(t)}).catch(function(t){return e.setState({error:t.error})})}},{key:"render",value:function(){var e=this,t=this.context.words;return c.a.createElement(L.Consumer,null,function(n){return c.a.createElement("div",{className:"center"},c.a.createElement("h2",null,e.context.language.name),c.a.createElement("p",null,"Total correct answers: ",e.context.language.total_score),c.a.createElement("section",{className:"box"},c.a.createElement("h3",{className:"larger"},"Word List"),c.a.createElement("ul",{className:"word-list"},t.map(function(e,t){return c.a.createElement(re,{key:t,word:e})})),c.a.createElement(R.a,{className:"adjust",to:"/learn"},c.a.createElement(z,null,"Start"))))})}}]),t}(o.Component);ae.contextType=ee;var oe=ae,ce=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(te,null,c.a.createElement("section",null,c.a.createElement(oe,null)))}}]),t}(o.Component),ue=n(13),se={getLanguageHead:function(){return fetch("".concat(d,"/language/head"),{method:"GET",headers:{authorization:"Bearer ".concat(j.getAuthToken())}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},makeGuess:function(e){return fetch("".concat(d,"/language/guess"),{method:"POST",headers:{authorization:"Bearer ".concat(j.getAuthToken()),"content-type":"application/json"},body:JSON.stringify({guess:e})}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})}};function le(){return c.a.createElement(c.a.Fragment,null,"You were correct!")}function ie(){return c.a.createElement(c.a.Fragment,null,"Incorrect, try again!")}n(36);function me(){var e=Object(o.useContext)(ee),t=Object(o.useState)(null),n=Object(ue.a)(t,2),r=n[0],a=n[1],u=Object(o.useState)(null),s=Object(ue.a)(u,2),l=s[0],i=s[1],m=Object(o.useState)("question"),h=Object(ue.a)(m,2),f=h[0],p=h[1],d=Object(o.useState)(null),g=Object(ue.a)(d,2),E=g[0],v=g[1],b=Object(o.useState)({}),j=Object(ue.a)(b,2),O=j[0],k=j[1],w=Object(o.useRef)(null);Object(o.useEffect)(function(){se.getLanguageHead().then(function(t){a(t),e.processNextWord(t)})},[]);var y=function(){p("question")};return c.a.createElement(c.a.Fragment,null,null!==r&&"question"===f&&c.a.createElement(c.a.Fragment,null,c.a.createElement("header",null,c.a.createElement("h2",null,"Translate the word:"),c.a.createElement("p",null,"Your total score is: ".concat(r.totalScore))),c.a.createElement("form",{className:"box",onSubmit:function(e){return function(e){e.preventDefault(),se.makeGuess(w.current.value).then(function(e){var t={nextWord:e.nextWord,totalScore:e.totalScore,wordCorrectCount:e.wordCorrectCount,wordIncorrectCount:e.wordIncorrectCount};k({question:r.nextWord,answer:e.answer}),v(w.current.value),i(e.isCorrect),a(t),p("answer")})}(e)}},c.a.createElement("span",{className:"word"},r.nextWord),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"learn-guess-input"},"What's the translation for this word?"),c.a.createElement("br",null),c.a.createElement(M,{ref:w,id:"learn-guess-input",name:"question",required:!0})),c.a.createElement(z,{type:"submit"},"Submit"))),"answer"===f&&null!==r&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"center"},c.a.createElement("p",null,"Your total score is: ",r.totalScore)),c.a.createElement("section",null,c.a.createElement("h2",{className:"center"},l?c.a.createElement(le,null):c.a.createElement(ie,null)),c.a.createElement("div",{className:"box"},c.a.createElement("p",null,"The correct translation for ",O.question," was ",O.answer," ","and you chose ",E,"!")),c.a.createElement(z,{onClick:y,type:"submit"},c.a.createElement("p",{className:"button-2"},"Next")))),null===r&&"Loading")}var he=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement(me,null))}}]),t}(o.Component),fe=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("h2",null,"404 - Page not found"),c.a.createElement("p",null,"Try going back to your previous page."))}}]),t}(o.Component),pe=(n(37),function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.hasError;return c.a.createElement("div",{className:"App"},c.a.createElement(P,null),c.a.createElement("main",null,e&&c.a.createElement("p",null,"There was an error! Oh no!"),c.a.createElement(x.a,null,c.a.createElement(q,{exact:!0,path:"/",component:ce}),c.a.createElement(q,{path:"/learn",component:he}),c.a.createElement(B,{path:"/register",component:$}),c.a.createElement(B,{path:"/login",component:X}),c.a.createElement(A.a,{component:fe}))))}}],[{key:"getDerivedStateFromError",value:function(e){return console.error(e),{hasError:!0}}}]),t}(o.Component)),de=(n(38),n(39),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function ge(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(c.a.createElement(l.a,null,c.a.createElement(N,null,c.a.createElement(C,null,c.a.createElement(pe,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");de?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ge(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ge(t,e)})}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.1e8a2aa1.chunk.js.map