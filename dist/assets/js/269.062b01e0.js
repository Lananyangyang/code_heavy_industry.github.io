(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{2071:function(t,a,s){"use strict";s.r(a);var r=s(54),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#_1、最终目标"}},[t._v("1、最终目标")])]),r("li",[r("a",{attrs:{href:"#_2、微服务打包"}},[t._v("2、微服务打包")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1修改-mysql-连接信息"}},[t._v("①修改 MySQL 连接信息")])]),r("li",[r("a",{attrs:{href:"#_2在父工程执行-install-命令"}},[t._v("②在父工程执行 install 命令")])]),r("li",[r("a",{attrs:{href:"#_3生成微服务可运行-jar-包"}},[t._v("③生成微服务可运行 jar 包")])])])]),r("li",[r("a",{attrs:{href:"#_3、执行部署"}},[t._v("3、执行部署")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1启动-nacos"}},[t._v("①启动 Nacos")])]),r("li",[r("a",{attrs:{href:"#_2启动微服务"}},[t._v("②启动微服务")])])])])])]),r("p"),t._v(" "),r("h1",{attrs:{id:"第六节-部署运行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第六节-部署运行"}},[t._v("#")]),t._v(" 第六节 部署运行")]),t._v(" "),r("h2",{attrs:{id:"_1、最终目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、最终目标"}},[t._v("#")]),t._v(" 1、最终目标")]),t._v(" "),r("h2",{attrs:{id:"_2、微服务打包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、微服务打包"}},[t._v("#")]),t._v(" 2、微服务打包")]),t._v(" "),r("h3",{attrs:{id:"_1修改-mysql-连接信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1修改-mysql-连接信息"}},[t._v("#")]),t._v(" ①修改 MySQL 连接信息")]),t._v(" "),r("p",[r("img",{attrs:{src:s(889),alt:"images"}})]),t._v(" "),r("h3",{attrs:{id:"_2在父工程执行-install-命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2在父工程执行-install-命令"}},[t._v("#")]),t._v(" ②在父工程执行 install 命令")]),t._v(" "),r("h4",{attrs:{id:"_1-why-parent-工程间关系梳理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-why-parent-工程间关系梳理"}},[t._v("#")]),t._v(" [1]Why parent？工程间关系梳理")]),t._v(" "),r("h4",{attrs:{id:"_2-执行命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-执行命令"}},[t._v("#")]),t._v(" [2]执行命令")]),t._v(" "),r("h3",{attrs:{id:"_3生成微服务可运行-jar-包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3生成微服务可运行-jar-包"}},[t._v("#")]),t._v(" ③生成微服务可运行 jar 包")]),t._v(" "),r("h4",{attrs:{id:"_1-应用微服务打包插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-应用微服务打包插件"}},[t._v("#")]),t._v(" [1]应用微服务打包插件")]),t._v(" "),r("div",{staticClass:"language-xml line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-xml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("build")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugins")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-maven-plugin"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugin")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugins")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("build")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br")])]),r("h4",{attrs:{id:"_2-执行插件目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-执行插件目标"}},[t._v("#")]),t._v(" [2]执行插件目标")]),t._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[t._v("mvn clean package spring-boot:repackage -Dmaven.test.skip"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("h2",{attrs:{id:"_3、执行部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、执行部署"}},[t._v("#")]),t._v(" 3、执行部署")]),t._v(" "),r("h3",{attrs:{id:"_1启动-nacos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1启动-nacos"}},[t._v("#")]),t._v(" ①启动 Nacos")]),t._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" /opt/nacos/bin/startup.sh -m standalone\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("h3",{attrs:{id:"_2启动微服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2启动微服务"}},[t._v("#")]),t._v(" ②启动微服务")]),t._v(" "),r("div",{staticClass:"language-sh line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" java -jar demo06-mysql-data-provider-1.0-SNAPSHOT.jar"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("demo06.log "),r("span",{pre:!0,attrs:{class:"token operator"}},[r("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),r("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" java -jar demo02-user-auth-center-1.0-SNAPSHOT.jar"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("demo02.log "),r("span",{pre:!0,attrs:{class:"token operator"}},[r("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),r("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])]),r("p",[r("a",{attrs:{href:"http://heavy_code_industry.gitee.io/code_heavy_industry/pro006-Linux/lecture/chapter03/verse04-07-nohup.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("nohup命令详解"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/pro002-maven/chapter08/verse05.html"}},[t._v("上一节")]),t._v(" "),r("RouterLink",{attrs:{to:"/pro002-maven/chapter08/index.html"}},[t._v("回目录")])],1)])}),[],!1,null,null,null);a.default=n.exports},889:function(t,a){t.exports="data:image/png;base64,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"}}]);