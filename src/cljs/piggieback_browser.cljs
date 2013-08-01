(ns piggieback-browser
  (:require [clojure.browser.repl :as repl]))

(.log js/console "Ohai, Charnock!")

(repl/connect "http://localhost:9000/repl")

(.log js/console "Ohai, Whitefield!")
