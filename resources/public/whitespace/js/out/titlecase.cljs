(ns titlecase
  (:require [clojure.string :as string]))

(defn ->titlecase [title]
  (let [words             (string/split title " ")
        capitalized-words (map string/capitalize words)
        title             (string/join " " capitalized-words)]
    title))

(comment
  (->titlecase "ohai charnock")
  )
