(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{2021:function(t,a,s){"use strict";s.r(a);var v=s(54),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#_1、基础概念"}},[t._v("1、基础概念")]),v("ul",[v("li",[v("a",{attrs:{href:"#_1框架"}},[t._v("①框架")])]),v("li",[v("a",{attrs:{href:"#_2程序包"}},[t._v("②程序包")])]),v("li",[v("a",{attrs:{href:"#_3配置文件"}},[t._v("③配置文件")])]),v("li",[v("a",{attrs:{href:"#_4声明式"}},[t._v("④声明式")])]),v("li",[v("a",{attrs:{href:"#_5渲染"}},[t._v("⑤渲染")])])])]),v("li",[v("a",{attrs:{href:"#_6、vue框架的使用"}},[t._v("6、Vue框架的使用")]),v("ul",[v("li",[v("a",{attrs:{href:"#_1准备环境"}},[t._v("①准备环境")])]),v("li",[v("a",{attrs:{href:"#_2vue的基本语法-嵌入html标签"}},[t._v("②Vue的基本语法：嵌入HTML标签")])]),v("li",[v("a",{attrs:{href:"#_3vue的基本语法-vue对象的属性"}},[t._v("③Vue的基本语法：Vue对象的属性")])]),v("li",[v("a",{attrs:{href:"#_4简化写法"}},[t._v("④简化写法")])]),v("li",[v("a",{attrs:{href:"#_5事件修饰符"}},[t._v("⑤事件修饰符")])])])])])]),v("p"),t._v(" "),v("h1",{attrs:{id:"vue笔记"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue笔记"}},[t._v("#")]),t._v(" Vue笔记")]),t._v(" "),v("h2",{attrs:{id:"_1、基础概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、基础概念"}},[t._v("#")]),t._v(" 1、基础概念")]),t._v(" "),v("h3",{attrs:{id:"_1框架"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1框架"}},[t._v("#")]),t._v(" ①框架")]),t._v(" "),v("p",[t._v("原生API开发→积累经验→提炼最佳实践→封装整合→框架")]),t._v(" "),v("h3",{attrs:{id:"_2程序包"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2程序包"}},[t._v("#")]),t._v(" ②程序包")]),t._v(" "),v("ul",[v("li",[t._v("JavaScript程序包：外部xxx.js文件")]),t._v(" "),v("li",[t._v("Java程序包：jar包")])]),t._v(" "),v("h3",{attrs:{id:"_3配置文件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3配置文件"}},[t._v("#")]),t._v(" ③配置文件")]),t._v(" "),v("p",[t._v("框架=程序包+配置文件")]),t._v(" "),v("h3",{attrs:{id:"_4声明式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4声明式"}},[t._v("#")]),t._v(" ④声明式")]),t._v(" "),v("ul",[v("li",[t._v("编程式：自己写代码实现功能")]),t._v(" "),v("li",[t._v("声明式：通过配置等方式告诉框架，由框架实现功能")])]),t._v(" "),v("h3",{attrs:{id:"_5渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5渲染"}},[t._v("#")]),t._v(" ⑤渲染")]),t._v(" "),v("p",[v("img",{attrs:{src:s(772),alt:"./images"}})]),t._v(" "),v("p",[t._v("程序中的表达式→转换为程序代码→执行、运算→得到具体值")]),t._v(" "),v("ul",[v("li",[t._v("浏览器端渲染：在浏览器端完成计算，例如：Vue")]),t._v(" "),v("li",[t._v("服务器端渲染：在服务器端完成计算，例如：Thymeleaf")])]),t._v(" "),v("blockquote",[v("p",[t._v("渲染对应的英文单词是render")])]),t._v(" "),v("h2",{attrs:{id:"_6、vue框架的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6、vue框架的使用"}},[t._v("#")]),t._v(" 6、Vue框架的使用")]),t._v(" "),v("h3",{attrs:{id:"_1准备环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1准备环境"}},[t._v("#")]),t._v(" ①准备环境")]),t._v(" "),v("div",{staticClass:"language-html line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-html"}},[v("code",[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),v("span",{pre:!0,attrs:{class:"token attr-value"}},[v("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/pro03-vue/script/vue.js"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),v("span",{pre:!0,attrs:{class:"token attr-value"}},[v("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),v("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),v("span",{pre:!0,attrs:{class:"token attr-value"}},[v("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),v("span",{pre:!0,attrs:{class:"token script"}}),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("h3",{attrs:{id:"_2vue的基本语法-嵌入html标签"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2vue的基本语法-嵌入html标签"}},[t._v("#")]),t._v(" ②Vue的基本语法：嵌入HTML标签")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("语法")]),t._v(" "),v("th",[t._v("功能")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v(t._s(t.表达式))]),t._v(" "),v("td",[t._v("声明式渲染")])]),t._v(" "),v("tr",[v("td",[t._v("v-bind")]),t._v(" "),v("td",[t._v("绑定元素属性")])]),t._v(" "),v("tr",[v("td",[t._v("v-model")]),t._v(" "),v("td",[t._v("双向绑定")])]),t._v(" "),v("tr",[v("td",[t._v("v-model.trim")]),t._v(" "),v("td",[t._v("去除前后空格")])]),t._v(" "),v("tr",[v("td",[t._v("v-on")]),t._v(" "),v("td",[t._v("事件绑定")])]),t._v(" "),v("tr",[v("td",[t._v("v-if/v-eles")]),t._v(" "),v("td",[t._v("条件渲染")])]),t._v(" "),v("tr",[v("td",[t._v("v-show")]),t._v(" "),v("td",[t._v("根据条件显示")])]),t._v(" "),v("tr",[v("td",[t._v("v-for")]),t._v(" "),v("td",[t._v("列表渲染")])])])]),t._v(" "),v("h3",{attrs:{id:"_3vue的基本语法-vue对象的属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3vue的基本语法-vue对象的属性"}},[t._v("#")]),t._v(" ③Vue的基本语法：Vue对象的属性")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("属性名")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("el")]),t._v(" "),v("td",[t._v("指定Vue对象关联的HTML元素的id")])]),t._v(" "),v("tr",[v("td",[t._v("data")]),t._v(" "),v("td",[t._v("指定Vue对象中的数据")])]),t._v(" "),v("tr",[v("td",[t._v("methods")]),t._v(" "),v("td",[t._v("配合v-on声明事件响应函数")])]),t._v(" "),v("tr",[v("td",[t._v("watch")]),t._v(" "),v("td",[t._v("实现侦听属性")])])])]),t._v(" "),v("h3",{attrs:{id:"_4简化写法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4简化写法"}},[t._v("#")]),t._v(" ④简化写法")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("完整写法")]),t._v(" "),v("th",[t._v("简化写法")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("v-bind:value")]),t._v(" "),v("td",[t._v(":value")])]),t._v(" "),v("tr",[v("td",[t._v("v-on:click")]),t._v(" "),v("td",[t._v("@click")])])])]),t._v(" "),v("h3",{attrs:{id:"_5事件修饰符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5事件修饰符"}},[t._v("#")]),t._v(" ⑤事件修饰符")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("修饰符")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("@click.prevent")]),t._v(" "),v("td",[t._v("取消控件的默认行为")])]),t._v(" "),v("tr",[v("td",[t._v("@click.stop")]),t._v(" "),v("td",[t._v("阻止事件冒泡")])])])]),t._v(" "),v("p",[t._v("注意：上面的取消和阻止都是彻底封死的模式。")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/pro001-javaweb/note/index.html"}},[t._v("回到上一级目录")])],1)])}),[],!1,null,null,null);a.default=_.exports},772:function(t,a,s){t.exports=s.p+"assets/img/img003.00b9a1dc.png"}}]);