//module.exports = app => {
    const genres = require("../controllers/genre.controller");
    
      var router = require("express").Router();
    
      router.get("/genres", genres.findAllGenres);
      module.exports = router;
      
    //  app.use('/api', router);
 //   };
  