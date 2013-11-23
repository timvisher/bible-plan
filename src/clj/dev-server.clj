(ns dev-server
  (:require [cemerick.austin.repls  :refer (browser-connected-repl-js)]
            [net.cgrand.enlive-html :as enlive]
            [compojure.route        :refer (resources)]
            [compojure.core         :refer (GET defroutes)]
            ring.adapter.jetty
            [clojure.java.io :as io]))

(defn index-page []
  (io/resource "index.html"))

(enlive/deftemplate page
  (index-page)
  []
  [:body] (enlive/append
           (enlive/html [:script (browser-connected-repl-js)])))

(defroutes whitespace-site
  (resources "/js" {:root "public/whitespace/js"})
  (resources "/edn" {:root "edn"})
  (resources "/styles" {:root "styles"})
  (GET "/" req (page)))

(defroutes advanced-site
  (resources "/")
  (resources "/edn" {:root "edn"})
  (GET "/" req (index-page)))

(defn run
  []
  (defonce ^:private whitespace-server
    (ring.adapter.jetty/run-jetty #'whitespace-site {:port 8080 :join? false}))
  (defonce ^:private advanced-server
    (ring.adapter.jetty/run-jetty #'advanced-site {:port 8081 :join? false}))
  [whitespace-server advanced-server])

(run)

(comment
  (def repl-env (reset! cemerick.austin.repls/browser-repl-env
                        (cemerick.austin/repl-env)))

  ;; (def repl-env (reset! cemerick.austin.repls/browser-repl-env nil))

  ;; Only run after you've loaded the page
  (cemerick.austin.repls/cljs-repl repl-env)

  (js/alert "Charnock!")
  )
