(ns whitespace-server
  (:require [cemerick.austin.repls  :refer (browser-connected-repl-js)]
            [net.cgrand.enlive-html :as enlive]
            [compojure.route        :refer (resources)]
            [compojure.core         :refer (GET defroutes)]
            ring.adapter.jetty
            ring.middleware.content-type
            ring.middleware.file-info
            ring.middleware.head
            ring.util.response
            [clojure.java.io :as io]))

(defn index-page []
  (io/resource "index.html"))

(enlive/deftemplate page
  (index-page)
  []
  [:body] (enlive/append
           (enlive/html [:script (browser-connected-repl-js)])))

(defroutes whitespace-site
  (resources "/" {:root "public/whitespace"})
  (GET "/" req (page)))

(defroutes advanced-site
  (resources "/")
  (GET "/*" req (index-page)))

(defn run
  []
  (defonce ^:private whitespace-server
    (ring.adapter.jetty/run-jetty #'whitespace-site {:port 8080 :join? false}))
  (defonce ^:private advanced-server
    (ring.adapter.jetty/run-jetty #'advanced-site {:port 8081 :join? false}))
  [whitespace-server advanced-server])

(comment
  (run)

  (def repl-env (reset! cemerick.austin.repls/browser-repl-env
                        (cemerick.austin/repl-env)))

  (cemerick.austin.repls/cljs-repl repl-env)
  )
