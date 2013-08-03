(defproject bible-plan "0.1.0-SNAPSHOT"
  :description  "FIXME: write description"
  :url          "http://example.com/FIXME"
  :license      {:name "Eclipse Public License"
                 :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj"]
  :dependencies [[org.clojure/clojure       "1.5.1"]
                 [org.clojure/clojurescript "0.0-1847"]
                 [com.cemerick/piggieback   "0.0.5"]
                 [clj-time                  "0.5.1"]
                 [com.draines/postal        "1.10.4"]
                 [prismatic/dommy           "0.1.1"]]
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :plugins      [[lein-cljsbuild "0.3.2"]]
  :cljsbuild    {:builds [{:source-paths ["src/cljs"]
                           :compiler     {:pretty-print  true
                                          :output-to     "resources/public/piggieback.js"
                                          :optimizations :whitespace}}]})
