(ns piggieback-server
  (:require [cljs.repl.browser   :refer :all]
            [cljs.repl           :refer :all]
            [cemerick.piggieback :refer :all]))
(comment
  (cljs-repl
   :repl-env
   (doto (repl-env :port 9000)
     -setup))
  )
