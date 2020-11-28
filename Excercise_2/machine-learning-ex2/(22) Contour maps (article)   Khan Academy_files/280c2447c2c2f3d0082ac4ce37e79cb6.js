(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["280c2447c2c2f3d0082ac4ce37e79cb6"],{EWp6:function(e,t,r){"use strict";var i18n=r("HEOz");var n={shareGoogle:i18n._("Share to Google Classroom."),shareFacebook:i18n._("Share to Facebook."),shareTwitter:i18n._("Share to Twitter."),shareEmail:i18n._("Share with email.")};e.exports=n},P06G:function(e,t,r){"use strict";r("pNMO");r("4Brf");r("ma9I");r("5DmW");r("NBAS");var s=o(r("q1tI"));var u=a(r("Nw73"));var n=a(r("wINb"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function l(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function c(e,t,r){if(t)i(e.prototype,t);if(r)i(e,r);return e}function f(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return h(e)}function h(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return d(e)}function p(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)m(e,t)}function m(e,t){m=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return m(e,t)}function g(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var v=r("mR6N"),b=v.StyleSheet,y=v.css;var w=r("Lx7c");var E=r("pbLn");var C=r("uFGi");var O=r("+Hxn");var k=r("uKIX");var S=r("nVHT");var i18n=r("HEOz");var A=function(e){p(r,e);function r(e){var t;l(this,r);t=f(this,d(r).call(this,e));t.state={description:"",selectedCourse:undefined,googleCourses:undefined,creatingAssignment:false,title:"".concat(i18n._("Khan Academy"),": ").concat(e.title)};return t}c(r,[{key:"componentDidMount",value:function e(){var t=this;w.getCourses().then(function(e){t.setState({googleCourses:e})})}},{key:"getMaterial",value:function e(){var t=this.state.assignment;if(!t||t.materials.length===0){return}return t.materials[0]}},{key:"createAssignment",value:function e(){var t=this;var r=this.props.url;var n=this.state,a=n.selectedCourse,o=n.description,l=n.title;if(!a){return}this.setState({creatingAssignment:true});w.shareToClassroomApi(a,r,l,o).then(function(e){t.setState({assignment:e,creatingAssignment:false})}).catch(function(){return t.setState({creatingAssignment:false})})}},{key:"renderFooter",value:function e(){var t=this;var r=this.state,n=r.selectedCourse,a=r.title,o=r.creatingAssignment,l=r.assignment;var i=n&&a!==""&&!o;return s.createElement("div",null,o&&s.createElement("div",{className:y(P.spinner)},s.createElement(S,null)),!l&&s.createElement(u.default,{type:"primary",onClick:function e(){return t.createAssignment()},disabled:!i},i18n._("Create Assignment")),l&&s.createElement("span",null,s.createElement("span",{className:y(P.takeMeThere)},s.createElement(u.default,{type:"secondary",href:l.alternateLink,target:"_blank"},i18n._("Take me there"))),s.createElement(u.default,{type:"primary",onClick:function e(){return t.modal.handleClose()}},i18n._("Done"))))}},{key:"renderAssignmentForm",value:function e(){var r=this;var t=this.props.url;var n=this.state,a=n.googleCourses,o=n.title;var l=i18n._("Describe your assignment in detail here");return s.createElement("div",null,s.createElement("div",{className:y(P.url)},t),s.createElement(E,{isLoading:!a,googleCourses:a||[],onCourseChanged:function e(t){return r.setState({selectedCourse:t})}}),s.createElement("div",{className:y(P.inputFields)},s.createElement(C,{title:i18n._("Title"),placeholder:i18n._("Please choose a title"),defaultValue:o,onChange:function e(t){return r.setState({title:t.target.value})}}),s.createElement(O,{title:i18n._("Description"),placeholder:l,onChange:function e(t){return r.setState({description:t.target.value})}})))}},{key:"renderComplete",value:function e(){var t=this.getMaterial();return s.createElement("div",{className:y(P.complete)},s.createElement("h2",null,i18n._("Your assignment has been shared to Google Classroom!")),t&&s.createElement("img",{alt:"","aria-hidden":true,src:(0,n.default)(t.link.thumbnailUrl)}))}},{key:"render",value:function e(){var r=this;var t=this.props,n=t.inFixture,a=t.onClose;var o=this.state.assignment;return s.createElement(k,{title:i18n._("Create a Google Classroom Assignment"),forceTop:true,showCloseButton:true,inline:!!n,footer:this.renderFooter(),onClose:function e(){return a()},ref:function e(t){return r.modal=t}},o?this.renderComplete():this.renderAssignmentForm())}}]);return r}(s.Component);g(A,"defaultProps",{inFixture:false});var P=b.create({inputFields:{marginTop:"1em"},url:{color:"lightgrey",marginTop:"-0.5em",marginBottom:"0.5em"},spinner:{float:"left",height:"2em"},takeMeThere:{marginRight:"1em"},complete:{textAlign:"center"}});e.exports=A},ZpGe:function(e,t,r){"use strict";r("ma9I");r("5DmW");r("NBAS");var o=r("mR6N");var l=v(r("q1tI"));var n=g(r("Lx7c"));var i=g(r("P06G"));var a=v(r("wINb"));var s=g(r("/uDT"));var u=r("2oqa");var c=g(r("EWp6"));var f=g(r("6wxr"));var h=g(r("QCGh"));var d=g(r("x1xB"));var p=g(r("mXPZ"));var m=g(r("4Du/"));function g(e){return e&&e.__esModule?e:{default:e}}function v(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}function b(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function w(e,t,r){if(t)y(e.prototype,t);if(r)y(e,r);return e}function E(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return O(e)}function C(e){C=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return C(e)}function O(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function k(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)S(e,t)}function S(e,t){S=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return S(e,t)}function A(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var i18n=r("HEOz");var P={path:"M12.283 0H.717A.717.717 0 0 0 0 .717v11.566c0 .396.32.717.717.717h6.227V7.965H5.25V6.002h1.694V4.554c0-1.679 1.025-2.593 2.524-2.593.717 0 1.335.054 1.515.078v1.755H9.945c-.815 0-.973.388-.973.955v1.253h1.944l-.256 1.963H8.97V13h3.313c.396 0 .717-.32.717-.717V.717A.717.717 0 0 0 12.283 0z",width:13,height:13};var j={path:"M90.576 23.128q0 17.528-9.8 32.48-10.864 16.576-28.336 22.848-9.688 3.472-20.664 3.472-17.36 0-31.752-9.296 2.24.28 4.984.28 14.392 0 25.704-8.848-6.72-.056-12.04-4.088t-7.28-10.248q2.128.336 4.368.336t4.928-.728q-7.168-1.456-11.872-7.112t-4.704-13.16l0-.28q4.368 2.408 9.352 2.632-4.2-2.8-6.72-7.336-2.464-4.536-2.464-10.024t2.8-10.248q7.728 9.52 18.816 15.232t23.8 6.384q-.504-2.408-.504-4.76 0-8.568 6.048-14.616t14.784-6.048 14.952 6.552q7-1.344 13.104-4.984-2.352 7.336-9.072 11.368 5.936-.616 11.872-3.192-4.312 6.272-10.36 10.696.056.896.056 2.688z",width:100,height:81.233};var q={path:"M8.967 71.687l82.418 0q.735 0 1.274-.539t.539-1.274l0-42.973q-1.813 2.009-3.871 3.675-14.945 11.515-20.825 16.415t-7.693 6.272-4.851 2.695q-3.038 1.372-5.733 1.372l-.098 0q-2.695 0-5.733-1.372t-4.851-2.695q-1.813-1.372-7.693-6.272t-20.825-16.415q-2.058-1.666-3.871-3.675l0 42.973q0 .735.539 1.274t1.274.539zm84.231-62.034q0-2.499-1.813-2.499l-82.418 0q-.735 0-1.274.539t-.539 1.274q0 9.408 8.232 15.925 21.952 17.297 25.676 20.433 5.733 4.851 9.065 4.851l.098 0q2.254 0 5.194-2.009t7.056-5.537q11.662-9.261 22.491-17.738 3.038-2.401 5.635-6.468t2.597-7.399l0-1.372zm7.154-.686l0 60.907q0 3.675-2.646 6.321t-6.321 2.646l-82.418 0q-3.675 0-6.321-2.646t-2.646-6.321l0-60.907q0-3.675 2.646-6.321t6.321-2.646l82.418 0q3.675 0 6.321 2.646t2.646 6.321z",width:100,height:78.564};var M="/images/google_classroom_logo_light_square_36.svg";var T=o.StyleSheet.create({sharingFooter:{color:d.default.colors.gray17,font:d.default.labelMedium,display:"flex",justifyContent:"flex-start"},viewCount:{borderRight:"1px solid ".concat(d.default.colors.gray85),fontSize:17,display:"inline-block",marginRight:16,textAlign:"center",width:150},socialButton:{display:"inline-block",fontSize:17,marginRight:32},socialButtonIcon:{marginRight:8},disabled:{color:"lightgrey"}});var x=function(e){k(t,e);function t(){var r;b(this,t);r=E(this,C(t).call(this));A(O(r),"handleGoogleClassroom",function(e){var t=r.state.googleIsReady;e.preventDefault();if(r.useApiShare()){if(!t){return}r.setState({showGClassModal:true});return}n.default.shareToClassroom(r.getAbsoluteUrl(),"".concat(i18n._("Khan Academy"),": ").concat(r.props.title),i18n._("Describe your assignment in detail here"))});A(O(r),"handleTwitter",function(e){e.preventDefault();return s.default.openTwitterPopup(s.default.formatTwitterShareUrl({url:r.getAbsoluteUrl(),text:r.props.title}))});A(O(r),"handleFacebook",function(e){e.preventDefault();s.default.facebookShare(r.props.title,r.getAbsoluteUrl(),r.props.image);return false});r.state={googleIsReady:false,showGClassModal:false};return r}w(t,[{key:"componentDidMount",value:function e(){var t=this;if(this.useApiShare()){n.default.loadGoogleAPI(n.default.SHARE_SCOPES).then(function(){return t.setState({googleIsReady:true})})}}},{key:"getAbsoluteUrl",value:function e(){var t=this.props,r=t.url,n=t.location.pathname;return(0,a.absoluteUrlFromPath)(r||n)}},{key:"useApiShare",value:function e(){return false}},{key:"getMailtoUrl",value:function e(){return s.default.formatMailtoUrl({subject:i18n._("I just learned about %(title)s",{title:this.props.title}),body:i18n._("You can learn about it, too. Check out %(url)s",{url:this.getAbsoluteUrl()})})}},{key:"classroomShareButton",value:function e(){var t=this.state.googleIsReady;var r=[T.socialButton];if(this.useApiShare()&&!t){r.push(T.disabled)}return l.createElement(h.default,{href:"#",style:r,onClick:this.handleGoogleClassroom,"aria-label":"".concat(c.default.shareGoogle," ").concat(u.newWindow)},l.createElement("span",{"aria-hidden":"true",className:(0,o.css)(T.socialButtonIcon)},l.createElement("img",{alt:"","aria-hidden":true,src:(0,a.default)(M),width:13})),i18n._("Google Classroom"))}},{key:"render",value:function e(){var t=this;var r=this.state.showGClassModal;var n=p.default.isChildAccount;var a=l.createElement("div",{className:(0,o.css)(T.sharingFooter)},this.props.views&&l.createElement("span",{className:(0,o.css)(T.viewCount)},i18n.$_("%(count)s views",{count:this.props.views})),!n&&l.createElement("div",null,this.classroomShareButton(),l.createElement(h.default,{href:"#",onMouseOver:function e(){return s.default.prepFacebook()},onClick:this.handleFacebook,style:[T.socialButton],"aria-label":"".concat(c.default.shareFacebook," ").concat(u.newWindow)},l.createElement("span",{"aria-hidden":"true",className:(0,o.css)(T.socialButtonIcon)},l.createElement(f.default,{icon:P,size:13,color:d.default.colors.gray17})),i18n._("Facebook")),l.createElement(h.default,{href:"#",style:[T.socialButton],onClick:this.handleTwitter,"aria-label":"".concat(c.default.shareTwitter," ").concat(u.newWindow)},l.createElement("span",{"aria-hidden":"true",className:(0,o.css)(T.socialButtonIcon)},l.createElement(f.default,{icon:j,size:13,color:d.default.colors.gray17})),i18n._("Twitter"))),l.createElement(h.default,{href:this.getMailtoUrl(),style:[T.socialButton],"aria-label":"".concat(c.default.shareEmail," ").concat(u.newWindow)},l.createElement("span",{"aria-hidden":"true",className:(0,o.css)(T.socialButtonIcon)},l.createElement(f.default,{icon:q,size:13,color:d.default.colors.gray17})),i18n._("Email")));return l.createElement("div",null,r&&l.createElement(i.default,{url:this.getAbsoluteUrl(),title:this.props.title,onClose:function e(){return t.setState({showGClassModal:false})}}),a)}}]);return t}(l.Component);e.exports=(0,m.default)(x)}}]);
//# sourceMappingURL=../../sourcemaps/en/280c2447c2c2f3d0082ac4ce37e79cb6.49c7e04e8919156d5041.js.map