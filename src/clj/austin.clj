(ns bible-plan.austin
  (:require [cemerick piggieback austin]))

(cemerick.piggieback/cljs-repl :repl-env (cemerick.austin/exec-env))
