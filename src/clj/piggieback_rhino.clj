(ns bible-plan.piggieback-rhino
  (:require [clojure.tools.nrepl.server :as server]
            [cemerick.piggieback :as pback]))

(server/start-server
 :handler (server/default-handler #'pback/wrap-cljs-repl))

(pback/cljs-repl)
