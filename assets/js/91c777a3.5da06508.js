"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1331],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),i=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=i(t.components);return r.createElement(c.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=i(n),d=a,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||p;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,o=new Array(p);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[s]="string"==typeof t?t:a,o[1]=l;for(var i=2;i<p;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2520:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const p={},o=void 0,l={permalink:"/blog/study6",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/study6.md",source:"@site/blog/study6.md",title:"study6",description:"1.\u4ec0\u4e48\u53eb\u505a\u526f\u4f5c\u7528",date:"2023-03-15T08:01:24.623Z",formattedDate:"2023\u5e743\u670815\u65e5",tags:[],readingTime:6.95,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"study7",permalink:"/blog/study7"},nextItem:{title:"study5",permalink:"/blog/study5"}},c={authorsImageUrls:[]},i=[],u={toc:i},s="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.\u4ec0\u4e48\u53eb\u505a\u526f\u4f5c\u7528")),(0,a.kt)("p",null,"\u51fd\u6570\u7684\u526f\u4f5c\u7528\u5c31\u662f\u51fd\u6570\u9664\u4e86\u8fd4\u56de\u503c\u5916\u5bf9\u5916\u754c\u73af\u5883\u9020\u6210\u7684\u5176\u4ed6\u5f71\u54cd\uff0c\u5047\u5982\u6211\u4eec\u6bcf\u6b21\u6267\u884c\u4e00\u4e2a\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u90fd\u4f1a\u64cd\u4f5c\u5168\u5c40\u7684\u4e00\u4e2a\u53d8\u91cf\uff0c\u90a3\u4e48\u5bf9\u5168\u5c40\u7684\u64cd\u4f5c\u5c31\u662f\u8fd9\u4e2a\u51fd\u6570\u7684\u526f\u4f5c\u7528"),(0,a.kt)("p",null,"\u5728react\u91cc\uff0c\u526f\u4f5c\u7528\u5927\u4f53\u53ef\u4ee5\u5206\u4e3a\u4e24\u7c7b\uff0c\u4e00\u7c7b\u662f\u8c03\u7528\u6d4f\u89c8\u5668API\uff0c\u6bd4\u5982\u4f7f\u7528addEventListener\u6765\u6dfb\u52a0\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u7b49\uff0c\u53e6\u4e00\u7c7b\u662f\u53d1\u8d77\u83b7\u53d6\u670d\u52a1\u5668\u6570\u636e\u7684\u8bf7\u6c42\uff0c\u6bd4\u5982\u5f53\u7528\u6237\u7ec4\u4ef6\u6302\u5728\u7684\u65f6\u5019\u53bb\u5f02\u6b65\u83b7\u53d6\u7528\u6237\u7684\u4fe1\u606f\u7b49"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.react.memo()")),(0,a.kt)("p",null,"react.memo( )\u662f\u4e00\u4e2a\u9ad8\u9636\u51fd\u6570"),(0,a.kt)("p",null,"\u200b\t-\u63a5\u6536\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u4e14\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5305\u88c5\u8fc7\u7684\u65b0\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u200b    -\u5305\u88c5\u8fc7\u7684\u65b0\u7ec4\u4ef6\u5c31\u4f1a\u5177\u6709\u7f13\u5b58\u529f\u80fd"),(0,a.kt)("p",null,"\u200b    \t-\u5305\u88c5\u8fc7\u540e\uff0c\u53ea\u6709\u7ec4\u4ef6\u7684props\u53d1\u751f\u53d8\u5316\u624d\u4f1a\u89e6\u53d1\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\uff0c\u5426\u5219\u603b\u662f\u4f1a\u8fd4\u56de\u7f13\u5b58\u4e2d\u7684\u7ed3\u679c"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u51fd\u6570\u7ec4\u4ef6\u5728\u7ed9\u5b9a\u76f8\u540c props \u7684\u60c5\u51b5\u4e0b\u6e32\u67d3\u76f8\u540c\u7684\u7ed3\u679c\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u901a\u8fc7\u5c06\u5176\u5305\u88c5\u5728 React.memo \u4e2d\u8c03\u7528\uff0c\u4ee5\u6b64\u901a\u8fc7\u8bb0\u5fc6\u7ec4\u4ef6\u6e32\u67d3\u7ed3\u679c\u7684\u65b9\u5f0f\u6765\u63d0\u9ad8\u7ec4\u4ef6\u7684\u6027\u80fd\u8868\u73b0\u3002\u8fd9\u610f\u5473\u7740\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cReact \u5c06\u8df3\u8fc7\u6e32\u67d3\u7ec4\u4ef6\u7684\u64cd\u4f5c\u5e76\u76f4\u63a5\u590d\u7528\u6700\u8fd1\u4e00\u6b21\u6e32\u67d3\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.react\u4e2d\u7684\u94a9\u5b50\u51fd\u6570")),(0,a.kt)("p",null,"\u94a9\u5b50\u51fd\u6570( hook )\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u51fd\u6570\uff0c\u76ee\u7684\u662f\u8ba9\u51fd\u6570\u7ec4\u4ef6\u4e5f\u6709\u7c7b\u7ec4\u4ef6\u7684\u7279\u6027 --- \u751f\u547d\u5468\u671f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"useState"),(0,a.kt)("p",{parentName:"li"},"\u4fdd\u5b58\u72b6\u6001\uff0c\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u7b2c\u4e00\u4e2a\u4e3a\u4fdd\u5b58\u7684\u72b6\u6001\uff0c\u7b2c\u4e8c\u4e2a\u4e3a\u4fee\u6539\u72b6\u6001\u7684\u65b9\u6cd5")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"useContext"),(0,a.kt)("p",{parentName:"li"},"\u76ee\u7684\u5728\u4e8e\u5b9e\u73b0\u7236\u5b50\u7ec4\u4ef6\u4e4b\u95f4\u7684\u6570\u636e\u4f20\u9012"),(0,a.kt)("p",{parentName:"li"},"\u5b9e\u73b0\u65b9\u6cd5\u4e00\uff1a"),(0,a.kt)("p",{parentName:"li"},"\u200b    1.\u5f15\u5165context"),(0,a.kt)("p",{parentName:"li"},"\u200b    2.\u4f7f\u7528xxx.Consumer\u7ec4\u4ef6\u6765\u521b\u5efa\u5143\u7d20"),(0,a.kt)("p",{parentName:"li"},"\u200b      Consumer \u7684\u6807\u7b7e\u4f53\u9700\u8981\u4e00\u4e2a\u56de\u8c03\u51fd\u6570"),(0,a.kt)("p",{parentName:"li"},"\u200b      \u5b83\u4f1a\u5c06context\u8bbe\u7f6e\u4e3a\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\uff0c\u901a\u8fc7\u53c2\u6570\u5c31\u53ef\u4ee5\u8bbf\u95ee\u5230context\u4e2d\u7684\u6570\u636e"),(0,a.kt)("p",{parentName:"li"},"\u200b\t\t\u4f7f\u7528\u65b9\u5f0f\u4e8c\uff1a"),(0,a.kt)("p",{parentName:"li"},"\u200b    1.\u5bfc\u5165context"),(0,a.kt)("p",{parentName:"li"},"\u200b    2.\u4f7f\u7528\u94a9\u5b50\u51fd\u6570useContext()\u83b7\u53d6\u5230context"),(0,a.kt)("p",{parentName:"li"},"\u200b      useContext()\u9700\u8981\u4e00\u4e2acontext\u4f5c\u4e3a\u53c2\u6570"),(0,a.kt)("p",{parentName:"li"},"\u200b        \u5b83\u4f1a\u5c06context\u4e2d\u7684\u6570\u636e\u83b7\u53d6\u5e76\u4f5c\u4e3a\u8fd4\u56de\u503c"),(0,a.kt)("p",{parentName:"li"},"  \txxx.Provider"),(0,a.kt)("p",{parentName:"li"},"\u200b    \t-\u8868\u793a\u6570\u636e\u7684\u751f\u4ea7\u8005\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u6307\u5b9acontext\u4e2d\u7684\u6570\u636e"),(0,a.kt)("p",{parentName:"li"},"\u200b    \t-\u901a\u8fc7value\u6765\u6307\u5b9a\u90a3\u4e2acontext\u5b58\u50a8\u7684\u6570\u636e"),(0,a.kt)("p",{parentName:"li"},"  \t\u5f53\u6211\u4eec\u901a\u8fc7context\u8bbf\u95ee\u6570\u636e\u65f6\uff0c\u5b83\u4f1a\u8bfb\u53d6\u79bb\u4ed6\u6700\u8fd1\u7684Provider\u4e2d\u7684\u6570\u636e"),(0,a.kt)("p",{parentName:"li"},"\u200b     \u5982\u679c\u6ca1\u6709Provider\uff0c\u5219\u8bfb\u53d6context\u4e2d\u7684\u9ed8\u8ba4\u6570\u636e"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//\u5f15\u5165\u72b6\u6001\u94a9\u5b50useState()\nimport React,{useContext} from 'react'\nimport './App.css';\nfunction App(){\n    //\u901a\u8fc7createContext\u6765\u521b\u5efa\u4e0a\u4e0b\u6587\n    const AppContext = React.createContext()\n\n    const Achild = ()=>{\n        //\u5728\u5b50\u7ec4\u4ef6\u4e2d\u901a\u8fc7useContext\u6765\u83b7\u53d6\u6570\u636e\n        const {name1} = useContext(AppContext)\n        return(\n            <div>\n                \u8fd9\u662f\u7ec4\u4ef6A,\u4f7f\u7528\u7684name\u503c\u662f:{name1}\n            </div>\n        )\n    }\n    \n    const Bchild = ()=>{\n        //\u5728\u5b50\u7ec4\u4ef6\u4e2d\u901a\u8fc7useContext\uff08Context\u53e5\u67c4\uff09\u6765\u83b7\u53d6\u6570\u636e\n        const {name2} = useContext(AppContext)\n        return(\n            <div>\n                \u8fd9\u662f\u7ec4\u4ef6B,\u4f7f\u7528\u7684name\u503c\u662f:{name2}\n            </div>\n        )\n    }\n    return (\n            //AppContext.Provider\u6570\u636e\u5171\u4eab\u7ec4\u4ef6,\u6765\u786e\u5b9a\u5171\u4eab\u8303\u56f4,\u901a\u8fc7value\u6765\u5206\u53d1\u5185\u5bb9\n          <AppContext.Provider value={{name1:'jack',name2:'Bob'}}>\n              <Achild></Achild>\n              <Bchild></Bchild>\n          </AppContext.Provider>\n        );\n}\nexport default App;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"useEffect"),(0,a.kt)("p",{parentName:"li"},"useEffect( )\u53ef\u4ee5\u68c0\u6d4b\u6570\u636e\u66f4\u65b0\uff0c\u53ef\u4ee5\u7528\u6765\u66f4\u597d\u5730\u5904\u7406\u526f\u4f5c\u7528\uff0c\u6bd4\u5982\u5f02\u6b65\u8bf7\u6c42\u7b49"))),(0,a.kt)("p",null,"\u200b\t\tuseEffect( )\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4f60\u8981\u8fdb\u884c\u7684\u5f02\u6b65\u64cd\u4f5c\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u7528\u6765\u7ed9\u51faeffect( )\u7684\u4f9d\u8d56\u9879\uff1a\u7701\u7565\u4e0d\u586b\u65f6\uff0c\u6bcf\u6b21\u7ec4\u4ef6\u6e32\u67d3\u65f6\u90fd\u4f1a\u6267\u884c\uff1b\u5b58\u5728\u65f6\uff0c\u53c2\u6570\u6539\u53d8\u5c31\u6267\u884c\uff1b\u7a7a\u6570\u7ec4\uff0c\u4e0d\u7ba1\u7ec4\u4ef6\u4e2d\u7684\u503c\u600e\u4e48\u53d8\u90fd\u4e0d\u4f1a\u6267\u884c"),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"useReducer"),(0,a.kt)("p",{parentName:"li"},"useState( )\u7684\u66ff\u4ee3\u65b9\u6848\uff0c\u6216\u8005\u4e0b\u4e00\u4e2astate\u4f9d\u8d56\u4e0e\u4e4b\u524d\u7684state\uff0c\u5b9e\u73b0\u51fd\u6570\u7ec4\u4ef6\u7684\u72b6\u6001\u7ba1\u7406"),(0,a.kt)("p",{parentName:"li"},"\u57fa\u672c\u539f\u7406\u662f\u901a\u8fc7\u7528\u6237\u5728\u9875\u9762\u53d1\u8d77action\uff0c\u4ece\u800c\u901a\u8fc7reducer\u65b9\u6cd5\u6765\u6539\u53d8state\uff0c\u4ece\u800c\u5b9e\u73b0\u9875\u9762\u548c\u72b6\u6001\u7684\u901a\u4fe1"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//\u5b9e\u73b0\u70b9\u51fb\u6539\u53d8\u72b6\u6001\nimport React,{useReducer} from 'react'\nimport './App.css';\nfunction App(){\n  \n  //useReducer(),state\u8868\u793a\u72b6\u6001\uff0caction\u8868\u793a\u76f8\u5173\u64cd\u4f5c\n  const reducer = (state,action)=>{\n    if (action.type === 'add') {\n      return {\n          ...state,\n          count: state.count + 1,\n      }\n    }else if (action.type === 'jian') {\n      return {\n          ...state,\n          count: state.count - 1,\n      }\n    } else {\n      return state\n    } \n  }\n \n  const addCount=()=>{\n    dispatch({\n      type:'add'\n    })\n  }\n  const min=()=>{\n    dispatch({\n      type:'jian'\n    })\n  }\n  const [state,dispatch] = useReducer(reducer,{count:0})\n  return(\n    <div>\n      <div>{state.count}</div>\n      <button onClick={addCount}>\u70b9\u51fb\u52a01</button>\n      <button onClick={min}>\u70b9\u51fb\u51cf1</button>\n    </div>\n  )\n}\nexport default App;\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"useRef"),(0,a.kt)("p",{parentName:"li"},"\u7528\u4e8e\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u83b7\u53d6\u771f\u5b9e\u7684DOM\u5143\u7d20\u5bf9\u8c61\u6216\u662f\u7ec4\u4ef6\u5b9e\u4f8b\uff08\u51fd\u6570\u7ec4\u4ef6\u6ca1\u6709\u5b9e\u4f8b\uff0c\u8fd9\u91cc\u6307\u7684\u662f\u7c7b\u7ec4\u4ef6\u7684\u5b9e\u4f8b\uff09"),(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u6b65\u9aa4\uff1a"),(0,a.kt)("p",{parentName:"li"},"a. \u5bfc\u5165useRef()\u51fd\u6570\nb. \u6267\u884cuseRef()\u51fd\u6570\u5e76\u4f20\u5165null\uff0c\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5185\u90e8\u6709\u4e00\u4e2acurrent\u5c5e\u6027\u5b58\u653e\u62ff\u5230\u7684dom\u5bf9\u8c61\uff08\u7ec4\u4ef6\u5b9e\u4f8b\uff09\nc. \u901a\u8fc7ref\u7ed1\u5b9a\u8981\u83b7\u53d6\u7684\u5143\u7d20\u6216\u8005\u7ec4\u4ef6\u5b9e\u4f8b\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"useCallback"),(0,a.kt)("p",{parentName:"li"},"\u76ee\u7684\u662f\u7528\u4e8e\u4f18\u5316\u4ee3\u7801\uff0c\u5f53\u7ec4\u4ef6\u53d1\u751f\u66f4\u65b0\u65f6\uff0c\u7ec4\u4ef6\u4e00\u5b9a\u4f1a\u88ab\u91cd\u65b0\u6e32\u67d3\uff0c\u5e76\u4e14\u5f53\u5f15\u5165\u5b50\u7ec4\u4ef6\u65f6\uff0c\u5b50\u7ec4\u4ef6\u4e0d\u53d1\u751f\u4e5f\u4f1a\u91cd\u65b0\u6e32\u67d3\uff0c\u4f1a\u9020\u6210\u6027\u80fd\u7684\u6d6a\u8d39\uff0c\u4e8e\u662f\u5f15\u5165memo\uff0cmemo\u5305\u88f9\u7ec4\u4ef6\u5e76\u8fd4\u56de\u5305\u88c5\u540e\u7684\u7ec4\u4ef6\uff0c\u5b50\u7ec4\u4ef6\u5185\u90e8\u6570\u636e\u6ca1\u6709\u6539\u53d8\u5c31\u4e0d\u4f1a\u8fdb\u884c\u6e32\u67d3"),(0,a.kt)("p",{parentName:"li"},"\u5f53\u67d0\u4e2a\u5b50\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u65f6\uff0c\u6240\u6709\u7684\u5b50\u7ec4\u4ef6\u90fd\u4f1a\u88ab\u91cd\u65b0\u6e32\u67d3\uff0c\u539f\u56e0\u662f\u5b50\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u5bfc\u81f4\u7236\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u7236\u7ec4\u4ef6\u4e2d\u7684\u6570\u636e\u548c\u65b9\u6cd5\u4f1a\u91cd\u65b0\u6e32\u67d3\uff0c\u6240\u6709\u4f20\u9012\u7684\u6570\u636e\u90fd\u4f1a\u53d1\u751f\u53d8\u5316"),(0,a.kt)("p",{parentName:"li"},"\u56e0\u6b64\u9700\u8981\u662f\u54e6\u90a3\u4e2auseCallback\uff0cuseCallback\u6709\u4e24\u4e2a\u53c2\u6570"),(0,a.kt)("p",{parentName:"li"},"\u53c2\u6570\u4e00\uff1a\u51fd\u6570\u65b9\u6cd5      \u53c2\u6570\u4e8c\uff1a\u4f9d\u8d56\u9879"))))}m.isMDXComponent=!0}}]);