function actualizaCacheDianmico(dynamicCache, req, res){



        if (res.ok ){
            return caches.open(dynamicCache).then(cache=> {

            cache.put(req, res.clone() );
            return req.clone();    


            });

        } else{
            return res;

        }

}