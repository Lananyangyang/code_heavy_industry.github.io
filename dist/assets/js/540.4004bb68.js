(window.webpackJsonp=window.webpackJsonp||[]).push([[540],{2348:function(s,n,a){"use strict";a.r(n);var e=a(54),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1、term-单值"}},[s._v("1、term 单值")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1关键词-happy"}},[s._v("①关键词 happy")])]),a("li",[a("a",{attrs:{href:"#_2关键词-happy-tears"}},[s._v("②关键词 happy tears")])])])]),a("li",[a("a",{attrs:{href:"#_2、terms-多值"}},[s._v("2、terms 多值")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1例一"}},[s._v("①例一")])]),a("li",[a("a",{attrs:{href:"#_2例二"}},[s._v("②例二")])])])])])]),a("p"),s._v(" "),a("h1",{attrs:{id:"第二节-精确查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二节-精确查询"}},[s._v("#")]),s._v(" 第二节 精确查询")]),s._v(" "),a("p",[s._v("使用 term 查询"),a("span",{staticStyle:{color:"blue","font-weight":"bold"}},[s._v("不会对关键词进行分词")]),s._v("，把关键词视为一个整体进行匹配，所以是精确匹配查询。")]),s._v(" "),a("h2",{attrs:{id:"_1、term-单值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、term-单值"}},[s._v("#")]),s._v(" 1、term 单值")]),s._v(" "),a("h3",{attrs:{id:"_1关键词-happy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1关键词-happy"}},[s._v("#")]),s._v(" ①关键词 happy")]),s._v(" "),a("p",[s._v("操作举例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# GET index名称/_search\n# {\n#   "query": {\n#     "term": {\n#       "field名": {\n#         "value": "field值"\n#       }\n#     }\n#   }\n# }\n\nGET db_song/_search\n{\n  "query": {\n    "term": {\n      "song_name": {\n        "value": "happy"\n      }\n    }\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("操作结果：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "took" : 0,\n  "timed_out" : false,\n  "_shards" : {\n    "total" : 1,\n    "successful" : 1,\n    "skipped" : 0,\n    "failed" : 0\n  },\n  "hits" : {\n    "total" : {\n      "value" : 2,\n      "relation" : "eq"\n    },\n    "max_score" : 1.4484519,\n    "hits" : [\n      {\n        "_index" : "db_song",\n        "_type" : "_doc",\n        "_id" : "xNwoQHsB10IHkgoCvrIF",\n        "_score" : 1.4484519,\n        "_source" : {\n          "song_name" : "happy tears",\n          "song_singer" : "jerry",\n          "song_album" : "apple farmer",\n          "song_lyrics" : "i will go to London"\n        }\n      },\n      {\n        "_index" : "db_song",\n        "_type" : "_doc",\n        "_id" : "xtwrQHsB10IHkgoCP7Is",\n        "_score" : 1.2794659,\n        "_source" : {\n          "song_name" : "tears of happy",\n          "song_singer" : "jerry",\n          "song_album" : "apple farmer",\n          "song_lyrics" : "i will go to NewYork"\n        }\n      }\n    ]\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br")])]),a("h3",{attrs:{id:"_2关键词-happy-tears"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2关键词-happy-tears"}},[s._v("#")]),s._v(" ②关键词 happy tears")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('GET db_song/_search\n{\n  "query": {\n    "term": {\n      "song_name": {\n        "value": "happy tears"\n      }\n    }\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("此时我们直觉上会认为应该能搜索到，比较关键词和原始数据完全一样啊，但实际结果是：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "took" : 0,\n  "timed_out" : false,\n  "_shards" : {\n    "total" : 1,\n    "successful" : 1,\n    "skipped" : 0,\n    "failed" : 0\n  },\n  "hits" : {\n    "total" : {\n      "value" : 0,\n      "relation" : "eq"\n    },\n    "max_score" : null,\n    "hits" : [ ]\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("实际结果是一个都没有命中。原因是：关键词没有分词，但是原始数据被分词了。用『happy tears』整体和『happy』、『tears』整两个单词比较来看，都不相等，所以都不命中。")]),s._v(" "),a("h2",{attrs:{id:"_2、terms-多值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、terms-多值"}},[s._v("#")]),s._v(" 2、terms 多值")]),s._v(" "),a("h3",{attrs:{id:"_1例一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1例一"}},[s._v("#")]),s._v(" ①例一")]),s._v(" "),a("p",[s._v("操作举例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# GET index名称/_search\n# {\n#   "query": {\n#     "terms": {\n#       "FIELD名称": [\n#         "FIELD值1",\n#         "FIELD值2"\n#       ]\n#     }\n#   }\n# }\n\nGET db_song/_search\n{\n  "query": {\n    "terms": {\n      "song_name": [\n        "apple",\n        "happy"\n      ]\n    }\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("操作结果：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "took" : 5,\n  "timed_out" : false,\n  "_shards" : {\n    "total" : 1,\n    "successful" : 1,\n    "skipped" : 0,\n    "failed" : 0\n  },\n  "hits" : {\n    "total" : {\n      "value" : 3,\n      "relation" : "eq"\n    },\n    "max_score" : 1.0,\n    "hits" : [\n      {\n        "_index" : "db_song",\n        "_type" : "_doc",\n        "_id" : "w9woQHsB10IHkgoCvbLQ",\n        "_score" : 1.0,\n        "_source" : {\n          "song_name" : "give me an apple",\n          "song_singer" : "tom",\n          "song_album" : "apple pie",\n          "song_lyrics" : "i want to give you an apple"\n        }\n      },\n      {\n        "_index" : "db_song",\n        "_type" : "_doc",\n        "_id" : "xNwoQHsB10IHkgoCvrIF",\n        "_score" : 1.0,\n        "_source" : {\n          "song_name" : "happy tears",\n          "song_singer" : "jerry",\n          "song_album" : "apple farmer",\n          "song_lyrics" : "i will go to London"\n        }\n      },\n      {\n        "_index" : "db_song",\n        "_type" : "_doc",\n        "_id" : "xtwrQHsB10IHkgoCP7Is",\n        "_score" : 1.0,\n        "_source" : {\n          "song_name" : "tears of happy",\n          "song_singer" : "jerry",\n          "song_album" : "apple farmer",\n          "song_lyrics" : "i will go to NewYork"\n        }\n      }\n    ]\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br")])]),a("h3",{attrs:{id:"_2例二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2例二"}},[s._v("#")]),s._v(" ②例二")]),s._v(" "),a("p",[s._v("操作举例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('GET db_song/_search\n{\n  "query": {\n    "terms": {\n      "song_name": [\n        "apple",\n        "happy tears"\n      ]\n    }\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("操作结果：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "took" : 2,\n  "timed_out" : false,\n  "_shards" : {\n    "total" : 1,\n    "successful" : 1,\n    "skipped" : 0,\n    "failed" : 0\n  },\n  "hits" : {\n    "total" : {\n      "value" : 1,\n      "relation" : "eq"\n    },\n    "max_score" : 1.0,\n    "hits" : [\n      {\n        "_index" : "db_song",\n        "_type" : "_doc",\n        "_id" : "w9woQHsB10IHkgoCvbLQ",\n        "_score" : 1.0,\n        "_source" : {\n          "song_name" : "give me an apple",\n          "song_singer" : "tom",\n          "song_album" : "apple pie",\n          "song_lyrics" : "i want to give you an apple"\n        }\n      }\n    ]\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("p",[s._v("说明多个值之间是"),a("span",{staticStyle:{color:"blue","font-weight":"bold"}},[s._v("或")]),s._v("的关系。")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/pro012-ElasticSearch/lecture/chapter04/verse01.html"}},[s._v("上一节")]),s._v(" "),a("RouterLink",{attrs:{to:"/pro012-ElasticSearch/lecture/chapter04/index.html"}},[s._v("回目录")]),s._v(" "),a("RouterLink",{attrs:{to:"/pro012-ElasticSearch/lecture/chapter04/verse03.html"}},[s._v("下一节")])],1)])}),[],!1,null,null,null);n.default=t.exports}}]);