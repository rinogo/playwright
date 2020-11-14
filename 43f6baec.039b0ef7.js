(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(6),i=(a(0),a(399)),c={id:"README",title:"Running Playwright in Docker"},o={unversionedId:"docker/README",id:"version-1.2.0/docker/README",isDocsHomePage:!1,title:"Running Playwright in Docker",description:"Dockerfile.bionic is a playwright-ready image of playwright.",source:"@site/versioned_docs/version-1.2.0/docker/README.md",slug:"/docker/README",permalink:"/playwright/docs/1.2.0/docker/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.2.0/docker/README.md",version:"1.2.0"},l=[{value:"Usage",id:"usage",children:[{value:"Pull the image",id:"pull-the-image",children:[]},{value:"Run the image",id:"run-the-image",children:[]},{value:"Using on CI",id:"using-on-ci",children:[]}]},{value:"Development",id:"development",children:[{value:"Build the image",id:"build-the-image",children:[]},{value:"Push",id:"push",children:[]}]},{value:"Base images",id:"base-images",children:[{value:"Alpine",id:"alpine",children:[]}]}],p={rightToc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"Dockerfile.bionic"}),"Dockerfile.bionic")," is a playwright-ready image of playwright.\nThis image includes all the dependencies needed to run browsers in a Docker\ncontainer."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#usage"}),"Usage"),Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#pull-the-image"}),"Pull the image")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#run-the-image"}),"Run the image")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#using-on-ci"}),"Using on CI")))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#development"}),"Development"),Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#build-the-image"}),"Build the image")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#push"}),"Push")))),Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#base-images"}),"Base images"),Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"#alpine"}),"Alpine"))))),Object(i.a)("h2",{id:"usage"},"Usage"),Object(i.a)("p",null,Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright"}),Object(i.a)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/docker-mcr.microsoft.com%2Fplaywright-blue",alt:"docker hub"})))),Object(i.a)("p",null,"This image is published on ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/_/microsoft-playwright"}),"Docker Hub"),"."),Object(i.a)("h3",{id:"pull-the-image"},"Pull the image"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{}),"$ docker pull mcr.microsoft.com/playwright:bionic\n")),Object(i.a)("h3",{id:"run-the-image"},"Run the image"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{}),"$ docker container run -it --rm --ipc=host --security-opt seccomp=chrome.json mcr.microsoft.com/playwright:bionic /bin/bash\n")),Object(i.a)("p",null,"Note that:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"The seccomp profile is required to run Chrome without sandbox. Thanks to ",Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/jessfraz/dotfiles/blob/master/etc/docker/seccomp/chrome.json"}),"Jessie Frazelle"),"."),Object(i.a)("li",{parentName:"ul"},"Using ",Object(i.a)("inlineCode",{parentName:"li"},"--ipc=host")," is also recommended when using Chrome (",Object(i.a)("a",Object(r.a)({parentName:"li"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"Docker docs"),"). Chrome can run out of memory without this flag.")),Object(i.a)("h3",{id:"using-on-ci"},"Using on CI"),Object(i.a)("p",null,"See our ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"/playwright/docs/1.2.0/ci"}),"Continuous Integration guides")," for sample configs."),Object(i.a)("h2",{id:"development"},"Development"),Object(i.a)("h3",{id:"build-the-image"},"Build the image"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{}),"$ docker build -t mcr.microsoft.com/playwright:bionic -f Dockerfile.bionic .\n")),Object(i.a)("h3",{id:"push"},"Push"),Object(i.a)("p",null,"Playwright on Docker Hub relies on"),Object(i.a)("pre",null,Object(i.a)("code",Object(r.a)({parentName:"pre"},{}),"$ docker push playwright.azurecr.io/public/playwright:bionic\n")),Object(i.a)("h2",{id:"base-images"},"Base images"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"playwright:bionic")," is based on Ubuntu 18.04 LTS (Bionic Beaver)."),Object(i.a)("h3",{id:"alpine"},"Alpine"),Object(i.a)("p",null,"Browser builds for Firefox and WebKit are built for the ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/GNU_C_Library"}),"glibc")," library. Alpine Linux and other distributions that are based on the ",Object(i.a)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Musl"}),"musl")," standard library are not supported."))}u.isMDXComponent=!0},399:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(a),m=r,d=s["".concat(c,".").concat(m)]||s[m]||b[m]||i;return a?n.a.createElement(d,o(o({ref:t},p),{},{components:a})):n.a.createElement(d,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);