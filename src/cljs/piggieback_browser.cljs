(ns piggieback-browser
  (:require [clojure.browser.repl :as repl]))

(.log js/console "Ohai, Charnock!")

(defn connect []
  (.log js/console "boom")
  (repl/connect "http://localhost:9000/repl"))

(js/setTimeout connect 2500)

(.log js/console "Ohai, Whitefield!")
