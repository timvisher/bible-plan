(ns bible-plan.core)

(comment
  (set! (.-value (goog.dom/getElement "afield")) "Ohai, Charnock!")
  (.-value (goog.dom/getElement "afield"))
  )

(comment
  (require 'cljs.repl.browser)

  (cemerick.piggieback/cljs-repl :repl-env (doto (cljs.repl.browser/repl-env :port 9000) cljs.repl/-setup))
  )
