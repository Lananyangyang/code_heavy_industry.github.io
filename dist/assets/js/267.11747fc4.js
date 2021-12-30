(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{2077:function(t,e,a){"use strict";a.r(e);var v=a(54),M=Object(v.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#_1、超级-pom"}},[t._v("1、超级 POM")])]),v("li",[v("a",{attrs:{href:"#_2、父-pom"}},[t._v("2、父 POM")])]),v("li",[v("a",{attrs:{href:"#_3、有效-pom"}},[t._v("3、有效 POM")]),v("ul",[v("li",[v("a",{attrs:{href:"#_1概念"}},[t._v("①概念")])]),v("li",[v("a",{attrs:{href:"#_2查看有效-pom"}},[t._v("②查看有效 POM")])])])]),v("li",[v("a",{attrs:{href:"#_4、小结"}},[t._v("4、小结")])])])]),v("p"),t._v(" "),v("h1",{attrs:{id:"第二节-pom的四个层次"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第二节-pom的四个层次"}},[t._v("#")]),t._v(" 第二节 POM的四个层次")]),t._v(" "),v("h2",{attrs:{id:"_1、超级-pom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、超级-pom"}},[t._v("#")]),t._v(" 1、超级 POM")]),t._v(" "),v("p",[t._v("经过我们前面的学习，我们看到 Maven 在构建过程中有很多默认的设定。例如：源文件存放的目录、测试源文件存放的目录、构建输出的目录……等等。但是其实这些要素也都是被 Maven 定义过的。定义的位置就是："),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("超级 POM")]),t._v("。")]),t._v(" "),v("p",[t._v("关于超级 POM，Maven 官网是这样介绍的：")]),t._v(" "),v("blockquote",[v("p",[t._v("The Super POM is Maven's default POM. All POMs extend the Super POM unless explicitly set, meaning the configuration specified in the Super POM is inherited by the POMs you created for your projects.")]),t._v(" "),v("p",[t._v("译文：Super POM 是 Maven 的默认 POM。除非明确设置，否则所有 POM 都扩展 Super POM，这意味着 Super POM 中指定的配置由您为项目创建的 POM 继承。")])]),t._v(" "),v("p",[t._v("所以我们自己的 POM 即使没有明确指定一个父工程（父 POM），其实也默认继承了超级 POM。就好比一个 Java 类默认继承了 Object 类。")]),t._v(" "),v("p",[t._v("那么超级 POM 中定义了哪些东西呢？点击"),v("RouterLink",{attrs:{to:"/pro002-maven/chapter09/super-pom-content.html"}},[t._v("这里")]),t._v("查看。")],1),t._v(" "),v("h2",{attrs:{id:"_2、父-pom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、父-pom"}},[t._v("#")]),t._v(" 2、父 POM")]),t._v(" "),v("p",[t._v("和 Java 类一样，POM 之间其实也是"),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("单继承")]),t._v("的。如果我们给一个 POM 指定了父 POM，那么继承关系如下图所示：")]),t._v(" "),v("p",[v("img",{attrs:{src:a(861),alt:"images"}})]),t._v(" "),v("h2",{attrs:{id:"_3、有效-pom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、有效-pom"}},[t._v("#")]),t._v(" 3、有效 POM")]),t._v(" "),v("h3",{attrs:{id:"_1概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1概念"}},[t._v("#")]),t._v(" ①概念")]),t._v(" "),v("p",[t._v("有效 POM 英文翻译为 effective POM，它的概念是这样的——在 POM 的继承关系中，子 POM 可以覆盖父 POM 中的配置；如果子 POM 没有覆盖，那么父 POM 中的配置将会被继承。按照这个规则，继承关系中的所有 POM 叠加到一起，就得到了一个最终生效的 POM。显然 Maven 实际运行过程中，执行构建操作就是按照这个最终生效的 POM 来运行的。这个最终生效的 POM 就是"),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("有效 POM")]),t._v("，英文叫"),v("span",{staticStyle:{color:"blue","font-weight":"bold"}},[t._v("effective  POM")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"_2查看有效-pom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2查看有效-pom"}},[t._v("#")]),t._v(" ②查看有效 POM")]),t._v(" "),v("blockquote",[v("p",[t._v("mvn help:effective-pom")])]),t._v(" "),v("p",[t._v("运行效果"),v("a",{attrs:{href:"./effective-pom-content"}},[t._v("点击这里")]),t._v("查看。")]),t._v(" "),v("h2",{attrs:{id:"_4、小结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、小结"}},[t._v("#")]),t._v(" 4、小结")]),t._v(" "),v("p",[t._v("综上所述，平时我们使用和配置的 POM 其实大致是由四个层次组成的：")]),t._v(" "),v("ul",[v("li",[t._v("超级 POM：所有 POM 默认继承，只是有直接和间接之分。")]),t._v(" "),v("li",[t._v("父 POM：这一层可能没有，可能有一层，也可能有很多层。")]),t._v(" "),v("li",[t._v("当前 pom.xml 配置的 POM：我们最多关注和最多使用的一层。")]),t._v(" "),v("li",[t._v("有效 POM：隐含的一层，但是实际上真正生效的一层。")])]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/pro002-maven/chapter09/verse01.html"}},[t._v("上一节")]),t._v(" "),v("RouterLink",{attrs:{to:"/pro002-maven/chapter09/index.html"}},[t._v("回目录")]),t._v(" "),v("RouterLink",{attrs:{to:"/pro002-maven/chapter09/verse03.html"}},[t._v("下一节")])],1)])}),[],!1,null,null,null);e.default=M.exports},861:function(t,e){t.exports="data:image/png;base64,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"}}]);