(defproject bible-plan "0.1.0-SNAPSHOT"
  :description  "A Tool to Generate Bible Reading Plans"
  :url          "http://bibleplan.twonegatives.com"
  :license      {:name "Creative Commons Attribution 3.0 Unported License"
                 :url "http://creativecommons.org/licenses/by/3.0/"}
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure             "1.5.1"]
                 [org.clojure/clojurescript       "0.0-2156"]
                 [prismatic/dommy                 "0.1.2"]
                 [ring                            "1.2.1"]
                 [compojure                       "1.1.6"]
                 [enlive                          "1.1.5"]
                 [com.cemerick/clojurescript.test "0.2.2"]
                 [shodan                          "0.1.0"]
                 [cljs-ajax                       "0.2.3"]]
  :repositories {"sonatype-staging" "https://oss.sonatype.org/content/groups/staging/"}
  :profiles     {:dev {;; :repl-options {:init-ns dev-server}
                       :plugins      [[com.cemerick/austin "0.1.3"]
                                      [lein-cljsbuild      "1.0.1"]]
                       :cljsbuild    {:builds [{:id             "whitespace"
                                                :source-paths   ["src/cljs"]
                                                :notify-command ["terminal-notifier"
                                                                 "-title"
                                                                 "bible-plan"
                                                                 "-subtitle"
                                                                 "whitespace"
                                                                 "-group"
                                                                 "bible-plan-build"
                                                                 "-activate"
                                                                 "com.googlecode.iTerm2"
                                                                 "-message"]
                                                :compiler       {:pretty-print    true
                                                                 :output-to       "resources/public/whitespace/js/bible-plan.js"
                                                                 :source-map      "resources/public/whitespace/js/bible-plan.js.map"
                                                                 :output-dir      "resources/public/whitespace/js/out"
                                                                 :externs         ["externs/modernizr-externs.js"]
                                                                 :optimizations   :whitespace}}
                                               {:id             "advanced"
                                                :source-paths   ["src/cljs"]
                                                :notify-command ["terminal-notifier"
                                                                 "-title"
                                                                 "bible-plan"
                                                                 "-subtitle"
                                                                 "advanced"
                                                                 "-group"
                                                                 "bible-plan-build"
                                                                 "-activate"
                                                                 "com.googlecode.iTerm2"
                                                                 "-message"]
                                                :compiler       {:pretty-print    false
                                                                 :output-to       "resources/public/js/bible-plan.js"
                                                                 :output-dir      "resources/public/js/out"
                                                                 :source-map      "resources/public/js/bible-plan.js.map"
                                                                 :externs         ["externs/modernizr-externs.js"]
                                                                 :optimizations   :advanced}}
                                               {:id             "prod"
                                                :source-paths   ["src/cljs"]
                                                :notify-command ["terminal-notifier"
                                                                 "-title"
                                                                 "bible-plan"
                                                                 "-subtitle"
                                                                 "prod"
                                                                 "-group"
                                                                 "bible-plan-build"
                                                                 "-activate"
                                                                 "com.googlecode.iTerm2"
                                                                 "-message"]
                                                :compiler       {:pretty-print  false
                                                                 :output-to     "sync/prod/js/bible-plan.js"
                                                                 :output-dir    "target/prod"
                                                                 :externs       ["externs/modernizr-externs.js"]
                                                                 :optimizations :advanced}}]}}})
