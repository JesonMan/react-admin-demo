(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1471:function(e,t,a){"use strict";a.r(t);a(815);var n=a(814),r=(a(1032),a(889)),l=(a(424),a(214)),o=(a(158),a(39)),i=(a(425),a(160)),c=(a(1359),a(1464)),u=(a(438),a(222)),s=(a(213),a(11)),m=(a(217),a(78)),p=(a(437),a(221)),f=(a(1033),a(946)),b=(a(219),a(49)),y=a(0),d=a.n(y),E=a(798);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var x=b.a.Item,k=f.a.Option,q=[{label:"湖北",value:"hubei",children:[{label:"武汉",value:"wuhang",children:[{label:"蔡甸区",value:"caidian"},{label:"江夏",value:"jiangxia"}]},{label:"宜昌",value:"yichang",children:[{label:"伍家岗",value:"wujiagang"},{label:"夷陵区",value:"yilingqu"},{label:"江南",value:"jiangnan"},{label:"开发区",value:"kaifaqu"},{label:"CBD",value:"CBD"}]}]}],P=function(e){function t(e){var a,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=w(t).call(this,e),a=!r||"object"!==h(r)&&"function"!=typeof r?S(n):r,j(S(a),"timer",null),j(S(a),"countdown",function(){var e=60;a.setState({text:"".concat(--e,"s"),disabled:!0}),a.timer=setInterval(function(){e>0?a.setState({text:"".concat(--e,"s"),disabled:!0}):a.setState({text:"获取验证码",disabled:!1})},1e3)}),j(S(a),"handleSubmit",function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e){e?p.a.warning("请先填写正确的表单"):p.a.success("提交成功")})}),a.state={text:"获取验证码",disabled:!1},a}var a,P,C;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,y["Component"]),a=t,(P=[{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this,t=this.props.form,a=t.getFieldDecorator,p=t.getFieldValue,y={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:12}}},h={wrapperCol:{xs:{span:24,offset:0},sm:{span:12,offset:4}}},g=a("prefix",{initialValue:86})(d.a.createElement(f.a,{style:{width:70}},d.a.createElement(k,{value:86},"+86"),d.a.createElement(k,{value:87},"+87")));return d.a.createElement("div",null,d.a.createElement(E.a,{arr:["输入组件","表单","基础表单"]}),d.a.createElement(n.a,{title:"基础表单"},d.a.createElement(b.a,{layout:"horizontal",style:{width:"70%",margin:"0 auto"},onSubmit:this.handleSubmit},d.a.createElement(x,v({label:"邮箱"},y),a("email",{rules:[{type:"email",message:"请输入正确的邮箱地址"},{required:!0,message:"请填写邮箱地址"}]})(d.a.createElement(m.a,null))),d.a.createElement(x,v({label:"密码"},y),a("password",{rules:[{required:!0,message:"请输入密码"},{min:6,message:"密码至少为6个字符"},{max:16,message:"密码最多为16个字符"},{whitespace:!0,message:"密码中不能有空格"}]})(d.a.createElement(m.a,{type:"password"}))),d.a.createElement(x,v({label:"确认密码"},y,{required:!0}),a("confirm",{rules:[{validator:function(t,a,n){var r=e.props.form.getFieldValue;r("password")||n("请先输入上面的密码！"),a&&a!==r("password")&&n("两次输入不一致！"),n()}}]})(d.a.createElement(m.a,{type:"password"}))),d.a.createElement(x,v({},y,{label:d.a.createElement("span",null,"昵称 ",d.a.createElement(u.a,{title:"请输入您的昵称"},d.a.createElement(s.a,{type:"question-circle-o"})))}),a("nickname",{rules:[]})(d.a.createElement(m.a,null))),d.a.createElement(x,v({label:"居住地"},y,{required:!0}),a("residence",{rules:[{type:"array",required:!0,message:"请选择居住地"}]})(d.a.createElement(c.a,{options:q,expandTrigger:"hover",placeholder:""}))),d.a.createElement(x,v({label:"电话"},y),a("phone",{rules:[{len:11,pattern:/^[1][3,4,5,7,8][0-9]{9}$/,required:!0,message:"请输入正确的11位手机号码"}]})(d.a.createElement(m.a,{addonBefore:g}))),d.a.createElement(x,v({label:"个人站点"},y),a("website",{rules:[{pattern:/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/,message:"请输入正确的站点地址"}]})(d.a.createElement(m.a,null))),d.a.createElement(x,v({},y,{label:"验证码"}),d.a.createElement(l.a,{gutter:8},d.a.createElement(i.a,{span:12},a("captcha",{rules:[{required:!0,message:"请输入验证码！"}]})(d.a.createElement(m.a,null))),d.a.createElement(i.a,{span:12},d.a.createElement(o.a,{disabled:this.state.disabled,onClick:function(t){return e.countdown(t)}},this.state.text)))),d.a.createElement(x,h,a("agreement",{valuePropName:"checked"})(d.a.createElement(r.a,null,"我已阅读并同意",d.a.createElement("a",null,"协议")))),d.a.createElement(x,v({style:{textAlign:"center"}},h),d.a.createElement(o.a,{type:"primary",htmlType:"submit",disabled:!p("agreement")},"提交")))))}}])&&g(a.prototype,P),C&&g(a,C),t}();t.default=b.a.create({name:"register"})(P)},798:function(e,t,a){"use strict";a(808);var n=a(809),r=a(0),l=a.n(r),o=a(30);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.a=function(e){return l.a.createElement(n.a,{style:{marginBottom:16}},l.a.createElement(n.a.Item,null,l.a.createElement(o.Link,{to:"/home"},"首页")),e.arr&&e.arr.map(function(e){return"object"===i(e)?l.a.createElement(n.a.Item,{key:e.title},l.a.createElement(o.Link,{to:e.to},e.title)):l.a.createElement(n.a.Item,{key:e},e)}))}}}]);
//# sourceMappingURL=22-ea0ec21c.js.map