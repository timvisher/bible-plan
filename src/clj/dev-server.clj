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
  (resources "/" {:root "public/whitespace"})
  (resources "/edn" {:root "edn"})
  (GET "/js/resources/public/whitespace/js/bible-plan.js.map"
       req
       (clojure.java.io/file "resources" "public" "whitespace" "js" "bible-plan.js.map"))
  (GET "*.cljs"
       req
       (clojure.java.io/file (:uri req)))
  (GET "/" req (page)))

(defroutes advanced-site
  (resources "/")
  (resources "/edn" {:root "edn"})
  (GET "/js/resources/public/js/bible-plan.js.map"
       req
       (clojure.java.io/file "resources" "public" "js" "bible-plan.js.map"))
  (GET "*.cljs"
       req
       (clojure.java.io/file (:uri req)))
  (GET "/" req (index-page)))

(defn run
  []
  (defonce ^:private whitespace-server
    (ring.adapter.jetty/run-jetty #'whitespace-site {:port 8080 :join? false}))
  (defonce ^:private advanced-server
    (ring.adapter.jetty/run-jetty #'advanced-site {:port 8081 :join? false}))
  [whitespace-server advanced-server])

(run)

(def repl-env (reset! cemerick.austin.repls/browser-repl-env
                      (cemerick.austin/repl-env)))

;; (def repl-env (reset! cemerick.austin.repls/browser-repl-env nil))

(comment
  ;; Only run after you've loaded the page
  (cemerick.austin.repls/cljs-repl repl-env)

  (js/alert "Salut!")
  )
