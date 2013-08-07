(defproject bible-plan "0.1.0-SNAPSHOT"
  :description  "A Tool to Generate Bible Reading Plans"
  :url          "http://bibleplan.twonegatives.com"
  :license      {:name "Eclipse Public License"
                 :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure             "1.5.1"]
                 [org.clojure/clojurescript       "0.0-1847"]
                 [com.cemerick/piggieback         "0.1.0"]
                 [clj-time                        "0.5.1"]
                 [com.draines/postal              "1.10.4"]
                 [prismatic/dommy                 "0.1.1"]
                 [com.cemerick/clojurescript.test "0.0.4"]]
  :profiles     {:dev {:repl-options {:init-ns          piggieback-server
                                      :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                       :plugins      [[com.cemerick/austin "0.1.0"]
                                      [lein-cljsbuild      "0.3.2"]]
                       :cljsbuild    {:builds [{:source-paths ["src/cljs"]
                                                :compiler     {:pretty-print  true
                                                               :output-to     "resources/public/bible-plan.js"
                                                               :optimizations :whitespace}}]}}})
