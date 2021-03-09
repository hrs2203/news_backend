const router = require("express").Router();

router.get("/all", (req, res) => {
    return res.json({
        "urlList": {
            "/user?userEmail=userEmail": "get user by email",
            "/news?nid=newId": "get news by id",
            "/news/bycategory?category=categoryname": "get news by category",
            "/news/category?ncid=new_cat_id": "get news by its",
            "/news/category/all": "get all news category"
        }
    })
})


module.exports = router;