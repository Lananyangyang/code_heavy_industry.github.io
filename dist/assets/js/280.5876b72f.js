(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{2115:function(a,t,s){"use strict";s.r(t);var e=s(54),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_1、声明式事务配置"}},[a._v("1、声明式事务配置")])]),e("li",[e("a",{attrs:{href:"#_2、注解写法"}},[a._v("2、注解写法")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1查询操作"}},[a._v("①查询操作")])]),e("li",[e("a",{attrs:{href:"#_2增删改操作"}},[a._v("②增删改操作")])])])])])]),e("p"),a._v(" "),e("h1",{attrs:{id:"第三节-搭建环境-事务控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三节-搭建环境-事务控制"}},[a._v("#")]),a._v(" 第三节 搭建环境：事务控制")]),a._v(" "),e("h2",{attrs:{id:"_1、声明式事务配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、声明式事务配置"}},[a._v("#")]),a._v(" 1、声明式事务配置")]),a._v(" "),e("p",[e("img",{attrs:{src:s(341),alt:"images"}})]),a._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 配置事务管理器 --\x3e")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("bean")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("transactionManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("org.springframework.jdbc.datasource.DataSourceTransactionManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 装配数据源 --\x3e")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("property")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("dataSource"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("ref")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("dataSource"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("bean")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 配置事务的注解驱动，开启基于注解的声明式事务功能 --\x3e")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("tx:")]),a._v("annotation-driven")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("transaction-manager")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("transactionManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 配置对 Service 所在包的自动扫描 --\x3e")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("context:")]),a._v("component-scan")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("base-package")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("com.atguigu.imperial.court.service"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br")])]),e("h2",{attrs:{id:"_2、注解写法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、注解写法"}},[a._v("#")]),a._v(" 2、注解写法")]),a._v(" "),e("h3",{attrs:{id:"_1查询操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1查询操作"}},[a._v("#")]),a._v(" ①查询操作")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Transactional")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("readOnly "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2增删改操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2增删改操作"}},[a._v("#")]),a._v(" ②增删改操作")]),a._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Transactional")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("propagation "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Propagation")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("REQUIRES_NEW"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" readOnly "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("在具体代码开发中可能会将相同设置的 @Transactional 注解提取到 Service 类上。")])]),a._v(" "),e("p",[e("RouterLink",{attrs:{to:"/pro002-maven/chapter07/verse02.html"}},[a._v("上一节")]),a._v(" "),e("RouterLink",{attrs:{to:"/pro002-maven/chapter07/index.html"}},[a._v("回目录")]),a._v(" "),e("RouterLink",{attrs:{to:"/pro002-maven/chapter07/verse04.html"}},[a._v("下一节")])],1)])}),[],!1,null,null,null);t.default=n.exports},341:function(a,t){a.exports="data:image/png;base64,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"}}]);