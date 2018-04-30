(ns eucalc-handler
  (:require [compojure.core :refer [defroutes GET]]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.util.response :as response]
	    [tailrecursion.ring-proxy :refer [wrap-proxy]]
	    ))

(defroutes app-routes
  ;; NOTE: this will deliver all of your assets from the public directory
  ;; of resources i.e. resources/public
  (route/resources "/" {:root "public"})
  ;; NOTE: this will deliver your index.html
  #(GET "/" [] (-> (response/resource-response "index.html" {:root "public"})
                  (response/content-type "text/html")))
  (route/not-found "Not Found"))


(def dev-app (-> app-routes
             (wrap-defaults site-defaults)
             ;; Use rails backend on a different localhost port:
             (wrap-proxy "/xss" "http://localhost:9292")))

