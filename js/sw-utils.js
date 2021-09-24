function actualizarCacheDinamico(dynamicCache, req, res) {
    if (res.ok) {
        return caches.open(dynamicCache).then(cache => {
            return res.clone();
        });
    } else {
        return res;
    }
}