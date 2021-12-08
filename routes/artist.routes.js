
    const artists = require("../controllers/artist.controller.js");
    
      var router = require("express").Router();
    
      router.get("/artists", artists.findAllArtists);
      
      module.exports = router;
 
  