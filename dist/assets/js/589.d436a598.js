(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{2445:function(t,e,r){"use strict";r.r(e);var o=r(54),l=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p"),r("div",{staticClass:"table-of-contents"},[r("ul")]),r("p"),t._v(" "),r("h1",{attrs:{id:"第六节-线程池的拒绝策略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第六节-线程池的拒绝策略"}},[t._v("#")]),t._v(" 第六节 线程池的拒绝策略")]),t._v(" "),r("p",[t._v("一般我们创建线程池时，为防止资源被耗尽，任务队列都会选择创建有界任务队列，但这种模式下如果出现任务队列已满且线程池创建的线程数达到你设置的最大线程数时，这时就需要你指定ThreadPoolExecutor的RejectedExecutionHandler参数即合理的拒绝策略，来处理线程池“超载”的情况。")]),t._v(" "),r("p",[t._v("ThreadPoolExecutor自带的拒绝策略如下：")]),t._v(" "),r("ul",[r("li",[t._v("AbortPolicy(默认)：直接抛出RejectedExecutionException异常，阻止接收新的任务。")]),t._v(" "),r("li",[t._v("CallerRunsPolicy：“调用者运行”一种调节机制，该策略既不会抛弃任务，也不会抛出异常，而是将某些任务回退到调用者，从而降低新任务的流量。")]),t._v(" "),r("li",[t._v("DiscardOldestPolicy：抛弃队列中等待最久的任务，然后把当前任务加入队列中尝试再次提交当前任务。")]),t._v(" "),r("li",[t._v("DiscardPolicy：该策略默默地丢弃无法处理的任务，不予任何处理也不抛出异常。如果允许任务丢失，这是最好的一种策略。")])]),t._v(" "),r("p",[t._v("以上内置的策略均实现了RejectedExecutionHandler接口，也可以自己扩展RejectedExecutionHandler接口，定义自己的拒绝策略。")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/pro017-JUC/lecture/chapter07/verse05.html"}},[t._v("上一节")]),t._v(" "),r("RouterLink",{attrs:{to:"/pro017-JUC/lecture/chapter07/index.html"}},[t._v("回目录")]),t._v(" "),r("RouterLink",{attrs:{to:"/pro017-JUC/lecture/chapter07/verse07.html"}},[t._v("下一节")])],1)])}),[],!1,null,null,null);e.default=l.exports}}]);