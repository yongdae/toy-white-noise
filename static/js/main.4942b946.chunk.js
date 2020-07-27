(this["webpackJsonpwhite-noise"]=this["webpackJsonpwhite-noise"]||[]).push([[0],{165:function(e,t,a){e.exports=a(175)},175:function(e,t,a){"use strict";a.r(t);var n=a(162),i={divider:a(37).a.grey[200]},r=Object(n.a)({palette:i,typography:{fontFamily:"Noto Sans KR, Helvetica, Arial, sans-serif",h1:{fontWeight:500,fontSize:"35px",letterSpacing:"-0.24px",lineHeight:"40px"},h2:{fontWeight:500,fontSize:"29px",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{fontWeight:500,fontSize:"24px",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{fontWeight:400,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{fontSize:"12px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{fontSize:"14px"},caption:{fontSize:"11px",letterSpacing:"0.33px",lineHeight:"13px"},overline:{fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"}},zIndex:{appBar:1200,drawer:1100}}),o=a(0),l=a.n(o),c=a(25),p=a.n(c),s=a(197),m=a(163),x=a(179),f=a(160),g=a.n(f),u=a(161),h=a.n(u),d=a(191),v=a(193),b=a(192);function w(){return l.a.createElement(l.a.Fragment,null,"Presented by Yondae Kwon\xa0",(new Date).getFullYear())}var S=Object(d.a)((function(e){return{container:{position:"absolute",left:0,bottom:0,zIndex:10,margin:0,padding:e.spacing(1),color:e.palette.grey[50]}}}));var E=function(){var e=S();return l.a.createElement(b.a,{className:e.container},l.a.createElement(v.a,{container:!0},l.a.createElement(v.a,{item:!0,xs:12,sm:12,md:12},l.a.createElement(w,null))))},y=a(198),z=a(194),k=a(195),N=Object(d.a)((function(e){return{appBar:{color:"#000000e8",backgroundColor:"transparent"},offset:e.mixins.toolbar,title:{fontSize:16},toolbar:{justifyContent:"space-between"},left:{flex:1},leftLinkActive:{color:e.palette.common.white},right:{flex:1,display:"flex",justifyContent:"flex-end"},rightLink:{fontSize:16,color:e.palette.common.white,marginLeft:e.spacing(3)},linkSecondary:{color:e.palette.secondary.main}}}));var H=function(){var e=N();return l.a.createElement("div",null,l.a.createElement(z.a,{className:e.appBar,elevation:0,position:"fixed"},l.a.createElement(k.a,{className:e.toolbar},l.a.createElement("div",{className:e.left}),l.a.createElement(y.a,{variant:"h6",underline:"none",color:"inherit",className:e.title,href:"/white-noise"},"\ubc31 \uc0c9 \uc18c \uc74c"),l.a.createElement("div",{className:e.right}))),l.a.createElement("div",{className:e.offset}))},W=Object(x.a)((function(e){return{root:{position:"absolute",width:"100%",height:"198px",bottom:0,left:0,overflow:"hidden"},wave:{position:"absolute",bottom:0,zIndex:10,width:"6400px",height:"198px",transform:"translate3d(0, 0, 0)","&:nth-of-type(1)":{zIndex:2,background:"url(./images/wave/wave1.svg) repeat-x",animation:"$wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite"},"&:nth-of-type(2)":{bottom:"10px",zIndex:3,background:"url(./images/wave/wave2.svg) repeat-x",animation:"$wave 7.5s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite, $swell1 7.5s ease -0.5s infinite"},"&:nth-of-type(3)":{zIndex:1,background:"url(./images/wave/wave3.svg) repeat-x",animation:"$wave 8s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite, $swell2 8s ease -1s infinite"}},"@keyframes wave":{"0%":{marginLeft:0},"100%":{marginLeft:"-1600px"}},"@keyframes swell1":{"0%, 100%":{opacity:.5,transform:"translate3d(0, 25px, 0)"},"50%":{opacity:.8,transform:"translate3d(0, 10px, 0)"}},"@keyframes swell2":{"0%, 100%":{opacity:.3,transform:"translate3d(0, 10px, 0)"},"50%":{opacity:.5,transform:"translate3d(0, 0, 0)"}}}})),j=function(){var e=W();return l.a.createElement("div",{className:e.root},l.a.createElement("div",{className:e.wave}),l.a.createElement("div",{className:e.wave}),l.a.createElement("div",{className:e.wave}))},I=Object(x.a)((function(e){return{buttonWrap:{marginTop:"40%",textAlign:"center","@media screen and (min-width:768px)":{marginTop:"160px"}},button:{width:"40vw",height:"40vw",maxWidth:"240px",maxHeight:"240px",border:"8px solid #424242",borderRadius:"50%",boxShadow:"rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px"}}}));var O=function(){var e=I(),t=l.a.useState(!1),a=Object(m.a)(t,2),n=a[0],i=a[1];return l.a.createElement("div",null,l.a.createElement(H,null),!n&&l.a.createElement("div",{className:e.buttonWrap,onClick:function(){return i(!n)}},l.a.createElement(g.a,{className:e.button})),n&&l.a.createElement("div",{className:e.buttonWrap,onClick:function(){return i(!n)}},l.a.createElement(h.a,{className:e.button})),l.a.createElement(E,null),l.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.a,{theme:r},l.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[165,1,2]]]);
//# sourceMappingURL=main.4942b946.chunk.js.map