(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(13),i=n(21),o=n(53),l=n.n(o),c=n(54),u=n.n(c),h=n(57),p=n.n(h),d=n(55),f=n.n(d),v=n(56),m=n.n(v),y=n(58),x=n.n(y);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=x()(e);if(t){var r=x()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m()(this,n)}}var R=function(e){f()(n,e);var t=k(n);function n(e){var a;return l()(this,n),(a=t.call(this,e)).state={response:a.props.response},a.handleChange=a.handleChange.bind(p()(a)),a}return u()(n,[{key:"handleChange",value:function(e){this.setState({response:e.target.value}),this.props.handleResponseData(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," ",this.props.prompt," "),r.a.createElement("br",null),r.a.createElement("textarea",{id:this.props.id,name:this.props.id,value:this.state.response,onChange:this.handleChange}))}}]),n}(r.a.Component);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=x()(e);if(t){var r=x()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m()(this,n)}}var b=function(e){f()(n,e);var t=E(n);function n(e){var a;return l()(this,n),(a=t.call(this,e)).handleNext=a.handleNext.bind(p()(a)),a.handleBack=a.handleBack.bind(p()(a)),a.handleResponseData=a.handleResponseData.bind(p()(a)),a.complete=a.complete.bind(p()(a)),a.render=a.render.bind(p()(a)),a.state={index:0,responses:[],result:""},a}return u()(n,[{key:"handleResponseData",value:function(e){this.state.responses[this.state.index]=e.target.value}},{key:"handleNext",value:function(){var e=this.state.index,t=Math.min(this.state.index+1,this.props.sequence.length-1);t==e&&this.complete(),this.setState({index:t})}},{key:"handleBack",value:function(){var e=Math.max(this.state.index-1,0);this.setState({index:e})}},{key:"complete",value:function(){this.setState({result:this.state.responses.join()})}},{key:"render",value:function(){var e=this.props.sequence[this.state.index],t=this.state.responses[this.state.index];return t||(console.log("No response for this slide yet"),t=""),r.a.createElement("div",null,r.a.createElement(R,{key:e.id,prompt:e.prompt,response:t,handleResponseData:this.handleResponseData}),r.a.createElement("br",null),"#",this.state.index+1," out of ",this.props.sequence.length,r.a.createElement("br",null),r.a.createElement("button",{onClick:this.handleBack},"Back"),r.a.createElement("button",{onClick:this.handleNext},"Next"),r.a.createElement("div",{id:"donedone"},this.state.result))}}]),n}(r.a.Component);t.default=function(){var e=Object(s.useRouteData)().workflow;return r.a.createElement("div",null,r.a.createElement(i.a,{to:"/index"},"<"," Back"),r.a.createElement("br",null),r.a.createElement("h1",null,e.title),r.a.createElement(b,{sequence:e.sequence}))}}}]);