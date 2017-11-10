(ns eucalc.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [eucalc.core-test]
   [eucalc.common-test]))

(enable-console-print!)

(doo-tests 'eucalc.core-test
           'eucalc.common-test)
