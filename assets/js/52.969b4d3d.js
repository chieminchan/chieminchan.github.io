(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{370:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"小程序上手篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序上手篇"}},[t._v("#")]),t._v(" 小程序上手篇")]),t._v(" "),a("blockquote",[a("p",[t._v("本文主要记录笔者上手字节小程序开发过程中的一些学习总结，知识的搬运工，对某些知识点的理解可能不够深入或存在偏颇，欢迎多多指教。")])]),t._v(" "),a("h2",{attrs:{id:"小程序的出现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序的出现"}},[t._v("#")]),t._v(" 小程序的出现")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("原生 App 应用和 H5 页面")]),t._v(" "),a("ul",[a("li",[t._v("最初的移动客户端开发方式主要有原生 APP 应用开发和 H5 纯页面开发")]),t._v(" "),a("li",[t._v("原生 App 功能强大，消息推送及时，体验好，但开发迭代成本高，每次版本更新需要用户手动下载新版本；")]),t._v(" "),a("li",[t._v("H5 页面相对原生 APP 功能少，体验稍差，但开发成本低，用户对迭代更新感知度相对低")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s4.ax1x.com/2021/12/12/obh2o8.png",alt:"obh2o8.png"}})])]),t._v(" "),a("li",[a("p",[t._v("Hyprid App（APP 内置 H5 页面）")]),t._v(" "),a("ul",[a("li",[t._v("在移动端原生应用的基础上，通过 JSBrdige 等方法，访问原生应用的 API 进行 JS 的交互，并通过 WebView 等技术实现 HTML 与 CSS 的渲染。WebView 可以理解为嵌套了一个浏览器内核（比如 webkit）的移动端组件。")]),t._v(" "),a("li",[t._v("一定程度上，减少了原生 APP 体积和降低迭代更新频率")])])]),t._v(" "),a("li",[a("p",[t._v("微信公众号")]),t._v(" "),a("ul",[a("li",[t._v("用户不愿意再下载更多新的 App，越来越倾向于在大流量 App 里获取一切服务")]),t._v(" "),a("li",[t._v("公众号是小程序的“前身”，当时，企业们普遍会把 H5 网站放在公众号作为流量转换的入口")]),t._v(" "),a("li",[t._v("公众号的出现使得 WebView 使用频率越来越高，微信团队还提供了 JS-SDK，提供了拍摄、录音、语音识别、二维码、地图、支付、分享等能力，开发者都可以使用到微信的原生能力")]),t._v(" "),a("li",[t._v("但是 JS-SDK 并没有完全解决使用移动页面的一些交互体验问题，比如受限于网络或者设备性能影响出现白屏，页面切换效果生硬或者点击迟滞感")])])]),t._v(" "),a("li",[a("p",[t._v("2017 年 1 月 9 日，微信小程序正式发布上线。小程序的产品理念：“用完即走”；小程序的定位：“体验比网站好，比下载 APP 更便捷。”")]),t._v(" "),a("blockquote",[a("p",[t._v("微信并不是第一个做小程序的 App，而是做小程序最有优势的 App，比如高流量、用户较长的停留时间等等。站在微信的视角，从业务形式上看，小程序更像是公众号开发演变产物。在更早的时候，微信通过 sdk 的形式，增强了开发者开发公众号网页的能力。小程序的诞生是微信本身迈向平台化的业务行为，并且帮助用户更好的实现了「轻量级 Web App」。")])])]),t._v(" "),a("li",[a("p",[t._v("2018 年微信小程序 “跳一跳” 爆火，助力了微信小程序在用户中的扩张，也激发了其他厂商开发小程序的热潮。")]),t._v(" "),a("ul",[a("li",[t._v("基于小程序几乎相同的技术原理，以及小程序的方便快捷的特性，还衍生出了多款小程序，比如抖音小程序、快手小程序、京东小程序、美团小程序等，帮助各大厂商更好的为用户提供便捷的服务。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s4.ax1x.com/2021/12/12/obhgdf.png",alt:"obhgdf.png"}})])])]),t._v(" "),a("h2",{attrs:{id:"小程序定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序定义"}},[t._v("#")]),t._v(" 小程序定义")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("小程序的叫法其实主要从微信开始， 指的是不需要下载安装即可使用的应用，它实现了应用“触手可及”，也就是用户可以通过扫一扫或搜一下即可打开的应用。")])]),t._v(" "),a("li",[a("p",[t._v("小程序是平台方为了扩展和丰富生态，给开发者提供的供用户使用的可即时打开的一种应用形态。")])]),t._v(" "),a("li",[a("p",[t._v("字节小程序身处大的开发者生态之中，基于字节 APP 而建，围绕开放场景、开放接口、开放信任关系搭建的一套平台化 SDK，整套解决方案框架如下：")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s4.ax1x.com/2021/12/12/oq8839.md.jpg",alt:"oq8839.md.jpg"}})]),t._v(" "),a("p",[t._v("（此图来源：https://zhuanlan.zhihu.com/p/437664188 ）")]),t._v(" "),a("h2",{attrs:{id:"整体结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体结构"}},[t._v("#")]),t._v(" 整体结构")]),t._v(" "),a("p",[t._v("小程序是 Hybrid 应用，结合了客户端原生技术和 Web 技术的各自特点，即界面主要由成熟的 Web 技术渲染，然后提供大量访问客户端端上原生能力的 API，使得小程序比普通页面拥有更多的能力，同时，每个小程序页面用不同的 WebView 去渲染，以此提供贴近原生的交互体验，也避免了单个 WebView 任务过于繁重。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s4.ax1x.com/2021/12/12/obLbjO.md.png",alt:"obLbjO.md.png"}})]),t._v(" "),a("h3",{attrs:{id:"双线程架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双线程架构"}},[t._v("#")]),t._v(" 双线程架构")]),t._v(" "),a("p",[t._v("小程序的底层架构基于双线程，即小程序的逻辑层与渲染层分开在不同的线程运行，互不干扰。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("渲染层：一般又称为 WebView 侧，依赖宿主创建的 WebView 线程，负责渲染小程序页面，包括 Web 组件渲染和原生组件渲染，可以认为是 webview + nativeview 组件混合渲染方式。")])]),t._v(" "),a("li",[a("p",[t._v("逻辑层：一般又称为 AppService 侧，依赖客户端创建的一个单独 JSCore 线程，负责解释与执行开发者编写的 JS 代码，比如：事件处理、API 调用和生命周期管理等。")])])]),t._v(" "),a("h3",{attrs:{id:"多-webview-结构模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多-webview-结构模式"}},[t._v("#")]),t._v(" 多 WebView 结构模式")]),t._v(" "),a("p",[t._v("双线程最基础的架构模型，而渲染层中则是需要多 WebView 结构的。因为一般小程序都是多页应用，如果渲染层只有一条线程，显然不够用，这时就需要维护多个 WebView 以此来保障页面切换时有流畅的过渡效果。")]),t._v(" "),a("h3",{attrs:{id:"如此设计原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如此设计原因"}},[t._v("#")]),t._v(" 如此设计原因")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("纯原生 APP 和 H5 页面 各有千秋，融合两者特点：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("如果用纯客户端原生技术来编写小程序，那小程序代码需要与客户端代码一起编包，跟随发版本，用户对频繁迭代更新的节奏比较敏感；")])]),t._v(" "),a("li",[a("p",[t._v("浏览器纯 web 的渲染方式虽然可以加载云端资源，通过下载到本地，动态执行后渲染出界面。但是在一些复杂交互的场景，界面上可能需要使用宿主端上的一些原生能力，同时也可能会面临一些性能问题。")])])])]),t._v(" "),a("li",[a("p",[t._v("在小程序中，不同页面由不同的 WebView 渲染后显示，然后将所有的页面、组件的逻辑收在一个线程里，比较方便完成数据状态共享。")])]),t._v(" "),a("li",[a("p",[t._v("提供安全与管控的沙盒环境")]),t._v(" "),a("p",[t._v("小程序是基于 Web 技术的，如果没有进行隔离，开发者可以直接通过 JS 操作界面的 DOM，那么一些敏感数据将会毫无安全性可言（尤其 eval、new Function()这类比较灵活的 API），因此需要提供一个沙箱环境来隔离运行开发者的 JS 代码，这个环境不会有任何的浏览器相关的接口。")])])]),t._v(" "),a("p",[t._v("小程序目前采用 webview + native 的方式，是围绕目标定位最简单有效的方式，即依赖于 Web 技术，又能融合应用功能。尽管目前看来，这套方案在渲染效率上，其实并不比 RN 和 Weex 的原生渲染方式或者 Flutter 使用 Dart 语言的自渲染方式占优势。")]),t._v(" "),a("h2",{attrs:{id:"运行环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行环境"}},[t._v("#")]),t._v(" 运行环境")]),t._v(" "),a("h3",{attrs:{id:"三类运行环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三类运行环境"}},[t._v("#")]),t._v(" 三类运行环境")]),t._v(" "),a("p",[t._v("小程序主要有三类运行环境，不同的运行环境，有着不同的 JS 引擎和界面渲染环境：")]),t._v(" "),a("ul",[a("li",[t._v("iOS 逻辑层 JS 代码运行在 JSCore 中，视图层由 WKWebView 内核渲染")]),t._v(" "),a("li",[t._v("Android 逻辑层 JS 代码运行在 V8，视图层由 Mobile Chrome 内核来渲染的")]),t._v(" "),a("li",[t._v("开发者工具逻辑层的 JavaScript 代码是运行在 NW.js 中，视图层是由 Chromium Webview 来渲染的。其中，小程序主要依赖于客户端上运行，开发者工具仅供调试使用，最终表现以客户端为准。")])]),t._v(" "),a("h3",{attrs:{id:"基础库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础库"}},[t._v("#")]),t._v(" 基础库")]),t._v(" "),a("p",[t._v("小程序的基础库是 JavaScript 编写的，负责处理数据绑定、组件系统、事件系统、通信系统等一系列框架逻辑。由于小程序的渲染层和逻辑层是两个线程管理，因此在宿主创建小程序容器时，会分别往两个线程注入基础库。一般来说：")]),t._v(" "),a("ul",[a("li",[t._v("在逻辑层，基础库主要负责初始化应用整体框架 js 代码，加载业务逻辑 js")]),t._v(" "),a("li",[t._v("在渲染层，基础库主要负责处理渲染相关逻辑，比如：diff 处理、定义页面相关事件的触发等")])]),t._v(" "),a("p",[t._v("对于开发者工具来说，它并不是真正意义上的移动客户端，并没有 Native。它实质是通过 Websocket 进行线程与线程之间的通讯，并在基础库中对 JSBridge 提供的通信方法基础上进行重构兼容。")]),t._v(" "),a("h3",{attrs:{id:"宿主-app、小程序运行容器-sdk、基础库三者构成小程序的运行环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宿主-app、小程序运行容器-sdk、基础库三者构成小程序的运行环境"}},[t._v("#")]),t._v(" 宿主 APP、小程序运行容器 SDK、基础库三者构成小程序的运行环境")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("宿主 APP 接入了小程序运行容器 SDK 后，需要实现必要基础功能（宿主启动进程运行小程序 SDK、支持小程序 SDK 与端上的通信和参数传递等等），同时，也可以按需扩展一些高级功能。")])]),t._v(" "),a("li",[a("p",[t._v("基础库内置于宿主，与 SDK 结合，提供 JSBridge 能力。")])]),t._v(" "),a("li",[a("p",[t._v("基础库的更新能力收敛在 SDK 内，并支持动态下发。（宿主在预加载场景和初始场景情况下均会触发基础更新检查，以保证基础库及时下发）")])]),t._v(" "),a("li",[a("p",[t._v("不同客户端对不同的小程序 SDK 版本和基础库版本，多宿主的差异可以在基础库结合小程序 SDK 上做差异抹平和规避。")])])]),t._v(" "),a("h3",{attrs:{id:"如何兼容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何兼容"}},[t._v("#")]),t._v(" 如何兼容")]),t._v(" "),a("p",[t._v("开放平台提供的 API 和基础库版本有独立且规范的版本对应关系，不同版本的客户端集成了不同版本的基础库，因此小程序运行过程中可能存在一定的差异，因此在开发中需要注意兼容问题。一般可以通过版本号比较、API 存在判断、tt.canIUse 等几种方式进行兼容处理。另外也可以在开平上设置最低基础库版本。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("版本号比较开发过程中，留意官方文档给出的 API 或者属性参数支持最低版本；通过 "),a("code",[t._v("tt.getSystemInfo")]),t._v(" 得到 SDKVersion，与最低版本号比较。SDKVersion 由[大版本].[小版本].[修订版本]三部分组成，例如：1.11.1。")])]),t._v(" "),a("li",[a("p",[t._v("API 存在判断")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("setTabBarStyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTabBarStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showModal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提示"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"当前客户端版本过低，请升级客户端"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("tt.canIUse")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("canIUse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setTabBarStyle"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTabBarStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showModal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提示"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"当前客户端版本过低，请升级客户端"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("配置小程序最低的基础库版本进入开发者后台的设置页，选择 JSSDK 最低版本号（注意受影响用户占比）")])]),t._v(" "),a("h2",{attrs:{id:"前-后台状态-销毁时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前-后台状态-销毁时机"}},[t._v("#")]),t._v(" 前/后台状态 & 销毁时机")]),t._v(" "),a("ul",[a("li",[t._v("用户首次打开小程序时，或小程序销毁后被用户再次打开，会重新创建小程序的逻辑层与视图层，并装载小程序。（冷启动）")]),t._v(" "),a("li",[t._v("小程序被用户打开过后，用户退出小程序，小程序并未销毁，只是暂存于后台。当用户再次点击调起小程序，小程序不会重新创建逻辑层与视图层，只是将后台的小程序进行了展示。（热启动）")]),t._v(" "),a("li",[t._v("小程序无刷新概念，刷新重启会将小程序销毁，然后重新创建小程序（也就是新的一轮冷启）")]),t._v(" "),a("li",[t._v("安卓上，小程序在被用户关闭后，并不会直接销毁，而是退到后台 IOS 上，小程序在被用户点击胶囊按钮关闭后（或者返回退出），会直接销毁")]),t._v(" "),a("li",[t._v("当小程序进入后台一定时间，或者占用系统资源过高会被系统销毁，或被小程序 SDK 主动回收安卓上，小程序进程新增到第 5 个时，会将第 1 个小程序进程销毁掉，重新加载成空的")]),t._v(" "),a("li",[t._v("当运行小程序的客户端进程被杀死，客户端中后台的小程序进程也会被销毁")])]),t._v(" "),a("h2",{attrs:{id:"更新策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新策略"}},[t._v("#")]),t._v(" 更新策略")]),t._v(" "),a("p",[t._v("小程序每次冷启动都会优先使用本地已经缓存的程序包启动小程序。同时，会异步检查是否有更新版本。如果发现有新版本，将会异步下载新版本的代码包。因此新的代码包默认是在下一次冷启动时才会应用。")]),t._v(" "),a("p",[t._v("如果需要在发布后马上应用最新版本，可以使用"),a("code",[t._v("tt.getUpdateManager")]),t._v("在每次启动小程序时获取版本情况。在版本更新时弹窗提醒用户进行重启更新。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" updateManager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUpdateManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    updateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onUpdateReady")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showModal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"更新提示"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"新版本已经准备好，是否重启小程序？"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("confirm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启")]),t._v("\n            updateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("applyUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    updateManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onUpdateFailed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 新的版本下载失败")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"版本下载失败原因"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      tt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showToast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"新版本下载失败，请稍后再试"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("icon")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章：")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.zhihu.com/question/446103629",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎上的一个话题：微信小程序的双线程设计有何创新之处？"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/guide/start/introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("字节小程序官方文档"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=e.exports}}]);