(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});a(196);var o=a(210),n=a(62),c=a(63),s=a(88),p=a(65),i=a(64),l=a(87),r=a(213),m=a(0),h=a.n(m),u=a(212),g=a(86),b=(a(209),{content:"Taiwan called motorcycle, motor bike [1] or a motorcycle, the motorcycle referred to in the mainland, Hong Kong and Southeast Asia known as motorcycles.",title:"Motorcycle"}),y=[{image:"https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png"},{image:"https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png"},{image:"https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png"},{image:"https://zos.alipayobjects.com/rmsportal/SDLiKqyfBvnKMrA.png"},{image:"https://zos.alipayobjects.com/rmsportal/UcVbOrSDHCLPqLG.png"},{image:"https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png"},{image:"https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png"},{image:"https://zos.alipayobjects.com/rmsportal/beHtidyjUMOXbkI.png"},{image:"https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png"},{image:"https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png"},{image:"https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png"},{image:"https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png"}];y=y.map(function(e){return Object(r.a)({},e,b)});var d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(p.a)(t).call(this,e))).onImgClick=function(e,t){var o=a.state.picOpen;Object.keys(o).forEach(function(e){e!==t&&o[e]&&(o[e]=!1)}),o[t]=!0,a.setState({picOpen:o})},a.onClose=function(e,t){var o=a.state.picOpen;o[t]=!1,a.setState({picOpen:o})},a.onTweenEnd=function(e){var t=a.state.picOpen;delete t[e],a.setState({picOpen:t})},a.getDelay=function(e){var t=e.index+y.length%4;return t%4*100+100*Math.floor(t/4)+200},a.getLiChildren=function(){return y.map(function(e,t){var n=e.image,c=e.title,s=e.content,p="boolean"===typeof a.state.picOpen[t],l=a.state.picOpen[t],m=p?0:t%4*260,u=p?t%4*260:0,b=Math.floor(t%4/2),y=Math.floor(t/4),d=y?96*(y-1):0;d=p?d:96*y;var f=y?96:0;f=p?f:0;var O=p?{width:"100%",height:"90vh",zIndex:1}:null,j=l?{boxShadow:"0 2px 8px rgba(140, 140, 140, .35)"}:{boxShadow:"0 0px 0px rgba(140, 140, 140, 0)"},v=p?{delay:400,ease:"easeInOutCubic",width:110,height:76,onComplete:a.onTweenEnd.bind(Object(i.a)(a),t),left:t%4*260,top:y?96:0}:null;return v=l?{ease:"easeInOutCubic",left:b?510:0,width:"50%",height:"90vh",top:0}:v,h.a.createElement(g.b,{key:t,style:Object(r.a)({left:m,top:d},O),component:"li",className:l?"open":"",animation:j},h.a.createElement(g.b,{component:"a",onClick:function(e){return a.onImgClick(e,t)},style:{left:u,top:f},animation:v},h.a.createElement("img",{alt:"",src:n,width:"100%",height:"100%"})),h.a.createElement(g.a,{enter:[{opacity:0,duration:0,type:"from",delay:400},{ease:"easeOutCubic",type:"from",left:b?"50%":"0%"}],leave:{ease:"easeInOutCubic",left:b?"50%":"0%"},component:""},l&&h.a.createElement("div",{className:"".concat(a.props.className,"-text-wrapper"),key:"text",style:{left:b?"0%":"50%"}},h.a.createElement("h1",null,c),h.a.createElement(o.a,{type:"cross",onClick:function(e){return a.onClose(e,t)}}),h.a.createElement("em",null),h.a.createElement("p",null,s))))})},a.state={picOpen:{}},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement(u.a,{type:"bottom",className:"".concat(this.props.className,"-title")},h.a.createElement("h1",{key:"h1"},"Motion Design"),h.a.createElement("p",{key:"p"},"The react animation solution")),h.a.createElement(u.a,{delay:this.getDelay,component:"ul",className:"".concat(this.props.className,"-image-wrapper"),interval:0,type:"bottom"},this.getLiChildren()))}}]),t}(h.a.Component);d.defaultProps={className:"pic-details-demo"}},209:function(e,t,a){}}]);
//# sourceMappingURL=8.c0f0af59.chunk.js.map