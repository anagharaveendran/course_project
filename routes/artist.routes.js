module.exports = app => {
    const artists = require("../controllers/artist.controller");
    
      var router = require("express").Router();
    
      router.get("/artists", genres.findAllArtists);
      
      app.use('/api', router);
    };
  