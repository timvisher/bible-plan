(ns bible-plan.reference-test
  (:require [cemerick.cljs.test   :as t]
            [bible-plan.reference :as ref])

  (:require-macros [cemerick.cljs.test :refer (is deftest with-test run-tests testing)]))

(deftest ->str-expands-to-full-book-name
  (is (= "Amos" (ref/->str {:start {:book 30}}))))

(deftest ->str-start-and-only-chapter
  (is (= "Am. 1" (ref/->str {:start {:book 30 :chapter 1}}))))

(deftest ->str-book-chapter-and-verse
  (is (= "Am. 1.1" (ref/->str {:start {:book 30 :chapter 1 :verse 1}}))))

(deftest ->str-start-and-end-when-both-have-verses
  (is (= "Am. 1.16-32" (ref/->str {:start {:book 30 :chapter 1 :verse 16} :end {:book 30 :chapter 1 :verse 32}}))))

(deftest ->str-start-and-end-chapters-and-verses-differ
  (is (= "Am. 1.16-2.32" (ref/->str {:start {:book 30 :chapter 1 :verse 16} :end {:book 30 :chapter 2 :verse 32}}))))

(deftest ->str-start-and-end-when-books-not-ascending
  (is (thrown-with-msg? js/Error #"reference<" (ref/->str {:start {:book 30 :chapter 1} :end {:book 29 :chapter 1}}))))

(deftest ->str-start-and-end-when-ascending
  (is (= "Am. 1-Jon. 3" (ref/->str {:start {:book 30 :chapter 1} :end {:book 32 :chapter 3}}))))

(deftest ->str-start-and-end-when-verses-not-ascending
  (is (thrown-with-msg? js/Error #"reference<" (ref/->str {:start {:book 30 :chapter 1 :verse 15} :end {:book 30 :chapter 1 :verse 1}}))))

(deftest reference<-ascending-start-and-end-full-reference
  (is (ref/reference< {:book 30 :chapter 1 :verse 16} {:book 30 :chapter 1 :verse 32})))

(deftest reference<-differing-specificity-chapters-is-false
  (is (not (ref/reference< {:book 30} {:book 30 :chapter 2}))))

(deftest reference<-differing-specificity-verses-is-false
  (is (not (ref/reference< {:book 30 :chapter 1}  {:book 30 :chapter 1 :verse 15}))))

(comment
  (t/test-ns 'bible-plan.reference-test)

  @t/registered-tests

  (swap! t/registered-tests assoc 'bible-plan.reference-test #{})
  )
