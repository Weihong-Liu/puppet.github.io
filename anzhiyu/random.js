var posts=["posts/c2bfdb75.html","posts/d53aa7ff.html","posts/a65c0ccd.html","posts/84c8fe73.html","posts/789e7a52.html","posts/2eb77f3a.html","posts/562d9d4b.html","posts/8aa93265.html","posts/364b3f7e.html","posts/682919e1.html","posts/f3308b5.html","posts/8809616b.html","posts/a9b49852.html","posts/fc39ad07.html","posts/9511ced5.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};