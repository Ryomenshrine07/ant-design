(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8863],{49313:function(T,O,t){"use strict";t.d(O,{Z:function(){return h},f:function(){return o}});var m=t(667294),o=m.createContext(!1);function h(){return m.useContext(o)}},902316:function(T,O,t){"use strict";var m=t(9783),o=t.n(m),h=t(168400),i=t.n(h),d=t(667294),c=t(259696),R=t(647759),E=t(693967),M=t.n(E),F=t(438199),W=t(821385),u=t(785893),V,X,$,p=(0,R.kc)(function(y){var n=y.css,v=y.token;return{box:n(V||(V=i()([`
    position: relative;
    transition: all `,`;
  `])),v.motionDurationSlow),marginStyle:n(X||(X=i()([`
    max-width: 1208px;
    margin-inline: auto;
    box-sizing: border-box;
    padding-inline: `,`px;
  `])),v.marginXXL),withoutChildren:n($||($=i()([`
    min-height: 300px;
    border-radius: `,`px;
    background-color: '#e9e9e9';
  `])),v.borderRadiusLG)}}),x=function(n){var v=n.id,f=n.title,z=n.titleColor,H=n.description,e=n.children,b=n.decoration,Z=n.background,w=n.collapse,C=(0,R.Fg)(),et=p(),J=et.styles,a=(0,d.useContext)(F.Z),r=a.isMobile,S=(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{style:{textAlign:"center"},children:[(0,u.jsx)(c.Z.Title,{id:v,level:1,style:{fontWeight:900,color:z,fontFamily:"AliPuHui, ".concat(C.fontFamily),fontSize:r?C.fontSizeHeading2:C.fontSizeHeading1},children:f}),(0,u.jsx)(c.Z.Paragraph,{style:{color:z,marginBottom:r?C.marginXXL:C.marginFarXS},children:H})]}),(0,u.jsx)("div",{className:M()(o()({},J.marginStyle,!w)),children:e?(0,u.jsx)("div",{children:e}):(0,u.jsx)("div",{className:J.withoutChildren})})]});return(0,u.jsxs)("div",{style:{backgroundColor:Z},className:J.box,children:[(0,u.jsx)("div",{style:{position:"absolute",inset:0},children:b}),(0,u.jsx)(W.Z,{style:{paddingBlock:C.marginFarSM},children:S})]})};O.Z=x},821385:function(T,O,t){"use strict";var m=t(168400),o=t.n(m),h=t(667294),i=t(647759),d=t(693967),c=t.n(d),R=t(785893),E,M=(0,i.kc)(function(W){var u=W.css;return{siteMask:u(E||(E=o()([`
    z-index: 1;
    position: relative;
  `])))}}),F=function(u){var V=u.children,X=u.className,$=u.style,p=u.onMouseMove,x=u.onMouseEnter,y=u.onMouseLeave,n=M(),v=n.styles;return(0,R.jsx)("div",{style:$,className:c()(X,v.siteMask),onMouseMove:p,onMouseEnter:x,onMouseLeave:y,children:V})};O.Z=F},365695:function(T,O,t){"use strict";t.r(O),t.d(O,{default:function(){return xt}});var m=t(805574),o=t.n(m),h=t(168400),i=t.n(h),d=t(667294),c=t(965516),R=t(75529),E=t(647759),M=t(49313),F=t(302559),W=t(548657),u=t(259696),V=t(707898),X=t(181632),$=t(693967),p=t.n($),x=t(438199),y=t(833494),n=t(785893),v,f,z,H,e,b=(0,E.kc)(function(k){var s=k.token,l=k.css,P=k.cx,D=(0,y.EI)(),g=D.carousel,j=l(v||(v=i()([`
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    align-items: stretch;
    text-decoration: none;
    background: `,`;
    border: `,"px solid ",`;
    border-radius: `,`px;
    transition: all `,`;
    padding-block: `,`px;
    padding-inline: `,`px;
    box-sizing: border-box;
  `])),s.colorBgContainer,s.lineWidth,s.colorBorderSecondary,s.borderRadiusLG,s.motionDurationSlow,s.paddingMD,s.paddingLG);return{itemBase:j,ribbon:l(f||(f=i()([`
      & > .`,` {
        height: 100%;
      }
    `])),P(j)),cardItem:l(z||(z=i()([`
      &:hover {
        box-shadow: `,`;
      }
    `])),s.boxShadowCard),sliderItem:l(H||(H=i()([`
      margin: 0 `,`px;
      text-align: start;
    `])),s.margin),container:l(e||(e=i()([`
      display: flex;
      width: 100%;
      max-width: 100%;
      margin-inline: auto;
      box-sizing: border-box;
      column-gap: `,`px;
      align-items: stretch;
      text-align: start;
      min-height: 178px;
      > * {
        width: calc((100% - `,`px) / 3);
      }
    `])),s.paddingMD*2,s.marginXXL*2),carousel:g}}),Z=function(s){var l=s.extra,P=s.index,D=s.icons,g=s.className,j=(0,E.Fg)(),L=b(),G=L.styles;if(!l)return(0,n.jsx)(W.Z,{},P);var B=D.find(function(Q){return Q.name===l.source}),K=(0,n.jsxs)("a",{href:l.href,target:"_blank",className:p()(G.itemBase,g),rel:"noreferrer",children:[(0,n.jsx)(u.Z.Title,{level:5,children:l==null?void 0:l.title}),(0,n.jsx)(u.Z.Paragraph,{type:"secondary",style:{flex:"auto"},children:l.description}),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(u.Z.Text,{children:l.date}),B&&(0,n.jsx)("img",{src:B.href,style:{height:j.fontSize},alt:"banner"})]})]},l==null?void 0:l.title);return P===0?(0,n.jsx)(V.Z.Ribbon,{text:"HOT",color:"red",rootClassName:G.ribbon,children:K}):K},w=function(){var s=(0,d.useContext)(x.Z),l=s.isMobile,P=b(),D=P.styles,g=Array(3).fill(1);return l?(0,n.jsx)(X.Z,{className:D.carousel,children:g.map(function(j,L){return(0,n.jsx)("div",{className:D.itemBase,children:(0,n.jsx)(W.Z,{active:!0,style:{padding:"0 24px"}})},L)})}):(0,n.jsx)("div",{className:D.container,children:g.map(function(j,L){return(0,n.jsx)("div",{className:D.itemBase,children:(0,n.jsx)(W.Z,{active:!0})},L)})})},C=function(){var s,l=b(),P=l.styles,D=(0,F.default)(),g=o()(D,2),j=g[1],L=d.useContext(x.Z),G=L.isMobile,B=(0,y.WF)(),K=B==null||(s=B.extras)===null||s===void 0?void 0:s[j],Q=(B==null?void 0:B.icons)||[],tt=!K||K.length===0?Array(3).fill(null):K.slice(0,3);return B?G?(0,n.jsx)(X.Z,{className:P.carousel,children:tt.map(function(q,nt){return(0,n.jsx)("div",{children:(0,n.jsx)(Z,{extra:q,index:nt,icons:Q,className:P.sliderItem})},nt)})}):(0,n.jsx)("div",{className:P.container,children:tt.map(function(q,nt){return(0,n.jsx)(Z,{extra:q,index:nt,icons:Q,className:P.cardItem},nt)})}):(0,n.jsx)(w,{})},et=C,J=t(902316),a=t(106750),r=t(941346),S=t(385956),A=t(472638),I=t(373638),U=t(821385),N,_,Y,st,rt,lt,ct=d.lazy(function(){return Promise.all([t.e(5560),t.e(6920),t.e(3253),t.e(8558),t.e(580),t.e(1050)]).then(t.bind(t,941050))}),vt={cn:{slogan:"\u52A9\u529B\u8BBE\u8BA1\u5F00\u53D1\u8005\u300C\u66F4\u7075\u6D3B\u300D\u5730\u642D\u5EFA\u51FA\u300C\u66F4\u7F8E\u300D\u7684\u4EA7\u54C1\uFF0C\u8BA9\u7528\u6237\u300C\u5FEB\u4E50\u5DE5\u4F5C\u300D\uFF5E",start:"\u5F00\u59CB\u4F7F\u7528",designLanguage:"\u8BBE\u8BA1\u8BED\u8A00"},en:{slogan:"Help designers/developers building beautiful products more flexible and working with happiness",start:"Getting Started",designLanguage:"Design Language"}},dt=function(){var s=d.useContext(R.ZP.ConfigContext),l=s.direction,P=l==="rtl";return(0,E.kc)(function(D){var g=D.token,j=D.css,L=D.cx,G="0 0 4px ".concat(g.colorBgContainer),B=L(j(N||(N=i()([`
      position: absolute;
      inset: 0;
      backdrop-filter: blur(4px);
      opacity: 1;
      background-color: rgba(255, 255, 255, 0.2);
      transition: all 1s ease;
      pointer-events: none;
    `]))));return{holder:j(_||(_=i()([`
        height: 640px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        perspective: 800px;
        /* fix safari bug by removing blur style */
        transform: translateZ(1000px);
        row-gap: `,`px;

        &:hover .`,` {
          opacity: 0;
        }
      `])),g.marginXL,B),mask:B,typography:j(Y||(Y=i()([`
        text-align: center;
        position: relative;
        z-index: 1;
        padding-inline: `,`px;
        text-shadow: `,`;

        h1 {
          font-family: AliPuHui, `,` !important;
          font-weight: 900 !important;
          font-size: `,`px !important;
          line-height: `,` !important;
        }

        p {
          font-size: `,`px !important;
          font-weight: normal !important;
          margin-bottom: 0;
        }
      `])),g.paddingXL,new Array(5).fill(null).map(function(){return G}).join(", "),g.fontFamily,g.fontSizeHeading2*2,g.lineHeightHeading2,g.fontSizeLG),block:j(st||(st=i()([`
        position: absolute;
        inset-inline-end: 0;
        top: -38px;
        transform: `,`;
      `])),P?"rotate3d(24, 83, -45, 57deg)":"rotate3d(24, -83, 45, 57deg)"),child:j(rt||(rt=i()([`
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        z-index: 1;
      `]))),btnWrap:j(lt||(lt=i()([`
        margin-bottom: `,`px;
      `])),g.marginXL)}})()},ot=function(s){var l=s.children,P=(0,F.default)(vt),D=o()(P,1),g=D[0],j=dt(),L=j.styles,G=d.useContext(x.Z),B=G.isMobile,K=(0,S.useLocation)(),Q=K.pathname,tt=K.search,q=I.KE(Q);return(0,n.jsxs)(U.Z,{children:[(0,n.jsx)("img",{style:{position:"absolute",left:B?-120:0,top:0,width:240},src:"https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg",alt:"bg"}),(0,n.jsx)("img",{style:{position:"absolute",right:B?0:"40%",bottom:120,width:240},src:"https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg",alt:"bg"}),(0,n.jsxs)("div",{className:L.holder,children:[(0,n.jsx)(d.Suspense,{fallback:null,children:B?null:(0,n.jsx)("div",{className:L.block,children:(0,n.jsx)(ct,{})})}),(0,n.jsx)("div",{className:L.mask}),(0,n.jsxs)(u.Z,{className:L.typography,children:[(0,n.jsx)("h1",{children:"Ant Design 5.0"}),(0,n.jsx)("p",{children:g.slogan})]}),(0,n.jsxs)(a.Z,{gap:"middle",className:L.btnWrap,children:[(0,n.jsx)(A.Z,{to:I.J1("/components/overview/",q,tt),children:(0,n.jsx)(r.ZP,{size:"large",type:"primary",children:g.start})}),(0,n.jsx)(A.Z,{to:I.J1("/docs/spec/introduce/",q,tt),children:(0,n.jsx)(r.ZP,{size:"large",children:g.designLanguage})})]}),(0,n.jsx)("div",{className:L.child,children:l})]})]})},ut=ot,it,gt=d.lazy(function(){return Promise.all([t.e(7531),t.e(3253),t.e(4137),t.e(1402),t.e(5793)]).then(t.bind(t,235793))}),mt=d.lazy(function(){return t.e(332).then(t.bind(t,820332))}),ft=d.lazy(function(){return Promise.all([t.e(5560),t.e(8558),t.e(7257),t.e(1888)]).then(t.bind(t,793582))}),ht=(0,E.kc)(function(){return{image:(0,E.iv)(it||(it=i()([`
    position: absolute;
    left: 0;
    top: -50px;
    height: 160px;
  `])))}}),pt={cn:{assetsTitle:"\u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982",assetsDesc:"\u5927\u91CF\u5B9E\u7528\u7EC4\u4EF6\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u7075\u6D3B\u5B9A\u5236\u4E0E\u62D3\u5C55",designTitle:"\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B6",designDesc:"\u914D\u5957\u751F\u6001\uFF0C\u8BA9\u4F60\u5FEB\u901F\u642D\u5EFA\u7F51\u7AD9\u5E94\u7528"},en:{assetsTitle:"Rich components",assetsDesc:"Practical components to meet your needs, flexible customization and expansion",designTitle:"Design and framework",designDesc:"Supporting ecology, allowing you to quickly build website applications"}},at=function(){var s=(0,F.default)(pt),l=o()(s,1),P=l[0],D=ht(),g=D.styles,j=c.Z.useToken(),L=j.token,G=(0,M.Z)();return(0,n.jsxs)("section",{children:[(0,n.jsx)(ut,{children:(0,n.jsx)(et,{})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(R.ZP,{theme:{algorithm:c.Z.defaultAlgorithm},children:(0,n.jsx)(d.Suspense,{fallback:null,children:(0,n.jsx)(ft,{})})}),(0,n.jsx)(J.Z,{background:L.colorBgElevated,collapse:!0,title:P.assetsTitle,description:P.assetsDesc,id:"design",children:(0,n.jsx)(d.Suspense,{fallback:null,children:(0,n.jsx)(gt,{})})}),(0,n.jsx)(J.Z,{title:P.designTitle,description:P.designDesc,background:G?"rgb(57, 63, 74)":"#F5F8FF",decoration:(0,n.jsx)("img",{className:g.image,src:"https://gw.alipayobjects.com/zos/bmw-prod/ba37a413-28e6-4be4-b1c5-01be1a0ebb1c.svg",alt:""}),children:(0,n.jsx)(d.Suspense,{fallback:null,children:(0,n.jsx)(mt,{})})})]})]})},xt=at},373638:function(T,O,t){"use strict";t.d(O,{J1:function(){return F},Is:function(){return $},Fy:function(){return u},KE:function(){return M},qE:function(){return W}});var m=t(661227),o=t(805574),h=t(97857),i=t(385564),d=t(842348),c=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),R={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":c?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function E(p,x,y,n){var v=p.map(function(e){return e.meta}).filter(function(e){return!e.skip}),f=[],z=function(b,Z){return(b.order||0)-(Z.order||0)};v.sort(z).forEach(function(e){if(e.category&&(e.category=e.category[x]||e.category),e.type&&(e.type=e.type[x]||e.type),e!=null&&e.title&&(e.title=e.title[x]||e.title),!e.category){f.push(e);return}if(e.category==="Components"&&e.type){var b=f.find(function(C){return(C==null?void 0:C.title)===e.type});b||(b={type:"type",title:e.type,children:[],order:n[e.type]},f.push(b)),b.children=b.children||[],b.children.push(e);return}var Z=f.find(function(C){return(C==null?void 0:C.title)===e.category});if(Z||(Z={type:"category",title:e.category,children:[],order:y[e.category]},f.push(Z)),Z.children=Z.children||[],e.type){var w=Z.children.filter(function(C){return(C==null?void 0:C.title)===e.type})[0];w||(w={type:"type",title:e.type,children:[],order:n[e.type]},Z.children.push(w)),w.children=w.children||[],w.children.push(e)}else Z.children.push(e)});function H(e){return e.sort(z).map(function(b){return b.children?_objectSpread(_objectSpread({},b),{},{children:H(b.children)}):b})}return H(f)}function M(p){return/-cn\/?$/.test(p)}function F(p,x,y,n){var v=p.startsWith("/")?p:"/".concat(p),f;if(x?v==="/"?f="/index-cn":v.endsWith("/")?f=v.replace(/\/$/,"-cn/"):(f="".concat(v,"-cn"),f=f.replace(/(-cn)+/,"-cn")):f=/\/?index-cn/.test(v)?"/":v.replace("-cn",""),n){var z=n[x?"zhCN":"enUS"];f+="#".concat(z)}return{pathname:f,search:y}}function W(p){var x="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",y=new Image,n,v=function(z){n||(n=!0,y.src="",p(z))};return y.onload=function(){return v("responded")},y.onerror=function(){return v("error")},y.src=x,setTimeout(function(){return v("timeout")},1500)}function u(){var p="test",x=window.localStorage;try{return x.setItem(p,"1"),x.removeItem(p),!0}catch(y){return!1}}function V(p){return new Promise(function(x,y){var n=document.createElement("script");n.type="text/javascript",n.src=p,n.onload=x,n.onerror=y,document.head.appendChild(n)})}function X(p){var x=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(p))return"";var y=flattenDeep(p.filter(function(n){if(Array.isArray(n)){var v=_slicedToArray(n,1),f=v[0];return f==="p"}return!1}).map(function(n){var v=flatten(n),f=_toArray(v),z=f[0],H=f.slice(1),e=H.filter(function(b){return typeof b=="string"&&!x.includes(b)}).join("");return[z,e]})).find(function(n){return n&&typeof n=="string"&&!x.includes(n)});return y}var $=function(){return R}},181632:function(T,O,t){"use strict";t.d(O,{Z:function(){return J}});var m=t(9783),o=t.n(m),h=t(805574),i=t.n(h),d=t(97857),c=t.n(d),R=t(513769),E=t.n(R),M=t(667294),F=t(777602),W=t(693967),u=t.n(W),V=t(73287),X=t(90661),$=t(548073),p=t(284513),x=function(r){var S=r.componentCls,A=r.antCls;return o()({},S,c()(c()({},(0,$.Wf)(r)),{},{".slick-slider":{position:"relative",display:"block",boxSizing:"border-box",touchAction:"pan-y",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",".slick-track, .slick-list":{transform:"translate3d(0, 0, 0)",touchAction:"pan-y"}},".slick-list":{position:"relative",display:"block",margin:0,padding:0,overflow:"hidden","&:focus":{outline:"none"},"&.dragging":{cursor:"pointer"},".slick-slide":o()(o()(o()({pointerEvents:"none"},"input".concat(A,"-radio-input, input").concat(A,"-checkbox-input"),{visibility:"hidden"}),"&.slick-active",o()({pointerEvents:"auto"},"input".concat(A,"-radio-input, input").concat(A,"-checkbox-input"),{visibility:"visible"})),"> div > div",{verticalAlign:"bottom"})},".slick-track":{position:"relative",top:0,insetInlineStart:0,display:"block","&::before, &::after":{display:"table",content:'""'},"&::after":{clear:"both"}},".slick-slide":{display:"none",float:"left",height:"100%",minHeight:1,img:{display:"block"},"&.dragging img":{pointerEvents:"none"}},".slick-initialized .slick-slide":{display:"block"},".slick-vertical .slick-slide":{display:"block",height:"auto"}}))},y=function(r){var S=r.componentCls,A=r.motionDurationSlow,I=r.arrowSize,U=r.arrowOffset,N=r.calc(I).div(Math.SQRT2).equal();return[o()({},S,{".slick-prev, .slick-next":{position:"absolute",top:"50%",width:I,height:I,transform:"translateY(-50%)",color:"#fff",opacity:.4,background:"transparent",padding:0,lineHeight:0,border:0,outline:"none",cursor:"pointer",zIndex:1,transition:"opacity ".concat(A),"&:hover, &:focus":{opacity:1},"&.slick-disabled":{pointerEvents:"none",opacity:0},"&::after":{boxSizing:"border-box",position:"absolute",top:r.calc(I).sub(N).div(2).equal(),insetInlineStart:r.calc(I).sub(N).div(2).equal(),display:"inline-block",width:N,height:N,border:"0 solid currentcolor",borderInlineWidth:"2px 0",borderBlockWidth:"2px 0",borderRadius:1,content:'""'}},".slick-prev":{insetInlineStart:U,"&::after":{transform:"rotate(-45deg)"}},".slick-next":{insetInlineEnd:U,"&::after":{transform:"rotate(135deg)"}}})]},n=function(r){var S=r.componentCls,A=r.dotOffset,I=r.dotWidth,U=r.dotHeight,N=r.dotGap,_=r.colorBgContainer,Y=r.motionDurationSlow;return[o()({},S,{".slick-dots":{position:"absolute",insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:15,display:"flex !important",justifyContent:"center",paddingInlineStart:0,margin:0,listStyle:"none","&-bottom":{bottom:A},"&-top":{top:A,bottom:"auto"},li:{position:"relative",display:"inline-block",flex:"0 1 auto",boxSizing:"content-box",width:I,height:U,marginInline:N,padding:0,textAlign:"center",textIndent:-999,verticalAlign:"top",transition:"all ".concat(Y),button:{position:"relative",display:"block",width:"100%",height:U,padding:0,color:"transparent",fontSize:0,background:_,border:0,borderRadius:U,outline:"none",cursor:"pointer",opacity:.2,transition:"all ".concat(Y),"&: hover, &:focus":{opacity:.75},"&::after":{position:"absolute",inset:r.calc(N).mul(-1).equal(),content:'""'}},"&.slick-active":{width:r.dotActiveWidth,"& button":{background:_,opacity:1},"&: hover, &:focus":{opacity:1}}}}})]},v=function(r){var S=r.componentCls,A=r.dotOffset,I=r.arrowOffset,U=r.marginXXS,N={width:r.dotHeight,height:r.dotWidth};return o()({},"".concat(S,"-vertical"),{".slick-prev, .slick-next":{insetInlineStart:"50%",marginBlockStart:"unset",transform:"translateX(-50%)"},".slick-prev":{insetBlockStart:I,insetInlineStart:"50%","&::after":{transform:"rotate(45deg)"}},".slick-next":{insetBlockStart:"auto",insetBlockEnd:I,"&::after":{transform:"rotate(-135deg)"}},".slick-dots":{top:"50%",bottom:"auto",flexDirection:"column",width:r.dotHeight,height:"auto",margin:0,transform:"translateY(-50%)","&-left":{insetInlineEnd:"auto",insetInlineStart:A},"&-right":{insetInlineEnd:A,insetInlineStart:"auto"},li:c()(c()({},N),{},{margin:"".concat((0,X.unit)(U)," 0"),verticalAlign:"baseline",button:N,"&.slick-active":c()(c()({},N),{},{button:N})})}})},f=function(r){var S=r.componentCls;return[o()({},"".concat(S,"-rtl"),{direction:"rtl",".slick-dots":o()({},"".concat(S,"-rtl&"),{flexDirection:"row-reverse"})}),o()({},"".concat(S,"-vertical"),{".slick-dots":o()({},"".concat(S,"-rtl&"),{flexDirection:"column"})})]},z=function(r){var S=24;return{arrowSize:16,arrowOffset:r.marginXS,dotWidth:16,dotHeight:3,dotGap:r.marginXXS,dotOffset:12,dotWidthActive:S,dotActiveWidth:S}},H=(0,p.I$)("Carousel",function(a){return[x(a),y(a),n(a),v(a),f(a)]},z,{deprecatedTokens:[["dotWidthActive","dotActiveWidth"]]}),e=t(785893),b=["currentSlide","slideCount"],Z=["dots","arrows","prevArrow","nextArrow","draggable","waitForAnimate","dotPosition","vertical","rootClassName","className","style","id"],w=function(r){var S=r.currentSlide,A=r.slideCount,I=E()(r,b);return(0,e.jsx)("button",c()({type:"button"},I))},C="slick-dots",et=M.forwardRef(function(a,r){var S=a.dots,A=S===void 0?!0:S,I=a.arrows,U=I===void 0?!1:I,N=a.prevArrow,_=N===void 0?(0,e.jsx)(w,{"aria-label":"prev"}):N,Y=a.nextArrow,st=Y===void 0?(0,e.jsx)(w,{"aria-label":"next"}):Y,rt=a.draggable,lt=rt===void 0?!1:rt,ct=a.waitForAnimate,vt=ct===void 0?!1:ct,dt=a.dotPosition,ot=dt===void 0?"bottom":dt,ut=a.vertical,it=ut===void 0?ot==="left"||ot==="right":ut,gt=a.rootClassName,mt=a.className,ft=a.style,ht=a.id,pt=E()(a,Z),at=M.useContext(V.E_),xt=at.getPrefixCls,k=at.direction,s=at.carousel,l=M.useRef(),P=function(yt){var bt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;l.current.slickGoTo(yt,bt)};M.useImperativeHandle(r,function(){return{goTo:P,autoPlay:l.current.innerSlider.autoPlay,innerSlider:l.current.innerSlider,prev:l.current.slickPrev,next:l.current.slickNext}},[l.current]);var D=M.useRef(M.Children.count(a.children));M.useEffect(function(){D.current!==M.Children.count(a.children)&&(P(a.initialSlide||0,!1),D.current=M.Children.count(a.children))},[a.children]);var g=c()({vertical:it,className:u()(mt,s==null?void 0:s.className),style:c()(c()({},s==null?void 0:s.style),ft)},pt);g.effect==="fade"&&(g.fade=!0);var j=xt("carousel",g.prefixCls),L=!!A,G=u()(C,"".concat(C,"-").concat(ot),typeof A=="boolean"?!1:A==null?void 0:A.className),B=H(j),K=i()(B,3),Q=K[0],tt=K[1],q=K[2],nt=u()(j,o()(o()({},"".concat(j,"-rtl"),k==="rtl"),"".concat(j,"-vertical"),g.vertical),tt,q,gt);return Q((0,e.jsx)("div",{className:nt,id:ht,children:(0,e.jsx)(F.Z,c()(c()({ref:l},g),{},{dots:L,dotsClass:G,arrows:U,prevArrow:_,nextArrow:st,draggable:lt,verticalSwiping:it,waitForAnimate:vt}))}))}),J=et},862488:function(T){function O(t,m){for(var o=-1,h=m.length,i=t.length;++o<h;)t[i+o]=m[o];return t}T.exports=O},121078:function(T,O,t){var m=t(862488),o=t(137285);function h(i,d,c,R,E){var M=-1,F=i.length;for(c||(c=o),E||(E=[]);++M<F;){var W=i[M];d>0&&c(W)?d>1?h(W,d-1,c,R,E):m(E,W):R||(E[E.length]=W)}return E}T.exports=h},909454:function(T,O,t){var m=t(644239),o=t(637005),h="[object Arguments]";function i(d){return o(d)&&m(d)==h}T.exports=i},137285:function(T,O,t){var m=t(562705),o=t(135694),h=t(701469),i=m?m.isConcatSpreadable:void 0;function d(c){return h(c)||o(c)||!!(i&&c&&c[i])}T.exports=d},385564:function(T,O,t){var m=t(121078);function o(h){var i=h==null?0:h.length;return i?m(h,1):[]}T.exports=o},842348:function(T,O,t){var m=t(121078),o=1/0;function h(i){var d=i==null?0:i.length;return d?m(i,o):[]}T.exports=h},135694:function(T,O,t){var m=t(909454),o=t(637005),h=Object.prototype,i=h.hasOwnProperty,d=h.propertyIsEnumerable,c=m(function(){return arguments}())?m:function(R){return o(R)&&i.call(R,"callee")&&!d.call(R,"callee")};T.exports=c}}]);
