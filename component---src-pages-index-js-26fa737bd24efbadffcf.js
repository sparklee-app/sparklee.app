(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3aSG":function(e,t,a){e.exports=a.p+"static/header-58036a188ebee7b0e28b31b50b895477.png"},"4frP":function(e,t,a){e.exports=a.p+"static/mockup-frame-b9050674e8edc6198f7f43b91c8db7a6.png"},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),d=r(a("8OQS")),s=r(a("pVnL")),o=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=p(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+o+l+d+a+r+t+n+i+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},V=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,d=o.default.createElement(O,(0,s.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?o.default.createElement("picture",null,i(r),d):d})),O=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,d=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,E=e.itemProp,w=e.loading,L=e.draggable,R=m||h;if(!R)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,W=(0,s.default)({opacity:k?1:0,transition:T?"opacity "+y+"ms":"none"},d),C="boolean"==typeof b?"lightgray":b,H={transitionDelay:y+"ms"},P=(0,s.default)({opacity:this.state.imgLoaded?0:1},T&&H,d,f),j={title:t,alt:this.state.isVisible?"":a,style:P,className:p,itemProp:E},N=this.state.isHydrated?g(R):R[0];if(m)return o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:N.maxWidth?N.maxWidth+"px":null,maxHeight:N.maxHeight?N.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},o.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),C&&o.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&H)}),N.base64&&o.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:j,imageVariants:R,generateSources:I}),N.tracedSVG&&o.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:j,imageVariants:R,generateSources:x}),this.state.isVisible&&o.default.createElement("picture",null,S(R),o.default.createElement(O,{alt:a,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)({alt:a,title:t,loading:w},N,{imageVariants:R}))}}));if(h){var q=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},n);return"inherit"===n.display&&delete q.display,o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},C&&o.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:C,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},T&&H)}),N.base64&&o.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:j,imageVariants:R,generateSources:I}),N.tracedSVG&&o.default.createElement(V,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:j,imageVariants:R,generateSources:x}),this.state.isVisible&&o.default.createElement("picture",null,S(R),o.default.createElement(O,{alt:a,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)({alt:a,title:t,loading:w},N,{imageVariants:R}))}}))}return null},t}(o.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),W=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function C(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}k.propTypes={resolutions:T,sizes:W,fixed:C(c.default.oneOfType([T,c.default.arrayOf(T)])),fluid:C(c.default.oneOfType([W,c.default.arrayOf(W)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var H=k;t.default=H},QULW:function(e,t,a){e.exports=a.p+"static/feature-54bf66a93de7cbdcf6ac0291600ee7da.png"},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),l=a("vrFN"),d=a("R3j0"),s=(a("j8bV"),function(e){var t=e.children;return i.a.createElement("button",{style:{padding:".5rem 2.5rem",color:d.b.lightWhite,fontWeight:700,background:d.c,borderRadius:d.a,borderWidth:0,cursor:"pointer"}},t)}),o=a("3aSG"),c=a.n(o),u=a("Wbzz"),f=a("9eSz"),p=a.n(f),g=function(){return i.a.createElement(u.a,{query:"196824694",render:function(e){return i.a.createElement(p.a,{fluid:e.placeholderImage.childImageSharp.fluid})}})},m=a("4frP"),h=a.n(m),b=function(e){e.siteTitle;return i.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",padding:"4rem 1rem"}},i.a.createElement("div",{style:{backgroundImage:"url("+c.a+")",position:"absolute",top:0,zIndex:-5,height:"100vh",width:"100vw",opacity:.5}}),i.a.createElement("h1",{style:{textAlign:"center"}},"Sparklee"),i.a.createElement("p",{style:{textAlign:"center",maxWidth:440}},"This landing page looks great on all devices and is minimal in design. Add what you want and deploy."),i.a.createElement(s,null,"Download Now"),i.a.createElement("div",{style:{margin:60,width:"250px",position:"relative"}},i.a.createElement("div",{style:{clipPath:"inset(2% 5% round 2% 5%)"}},i.a.createElement(g,null)),i.a.createElement("div",{style:{position:"absolute",width:"250px",top:0}},i.a.createElement("img",{src:h.a,alt:"outlines of shapes and confetti in the background "}))))};b.defaultProps={siteTitle:""};var y=b,v=a("QULW"),E=a.n(v),S=function(e){var t=e.title,a=e.description;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,t),i.a.createElement("p",{style:{color:d.b.mediumGray}},a))},w=function(){return i.a.createElement("div",{style:{padding:"4rem 1rem",textAlign:"center"}},i.a.createElement(S,{title:"Minimal Features",description:"Don't spend time ripping out unneeded plugins and bloat."}),i.a.createElement("content",{style:{display:"grid",alignItems:"center",justifyContent:"center",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 340px))"}},i.a.createElement("div",null,i.a.createElement("h3",null,"What you need to Start"),i.a.createElement("p",{style:{color:d.b.gray}},"Includes plugins for analytics, building sitemaps, and optimizing images")),i.a.createElement("div",null,i.a.createElement("img",{src:E.a,alt:"a blank card floating over colorful graphics"}))))},x=function(){return i.a.createElement("div",{style:{padding:"4rem 1rem",textAlign:"center"}},i.a.createElement(S,{title:"Stay Updated",description:"Give a final call to action because that's what the cool kids are doing."}),i.a.createElement(s,null,"Get Early Access"))};t.default=function(){return i.a.createElement(n.a,null,i.a.createElement(l.a,null),i.a.createElement(y,null),i.a.createElement(w,null),i.a.createElement(x,null))}},j8bV:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-26fa737bd24efbadffcf.js.map