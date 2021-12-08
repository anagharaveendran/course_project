
//	Genre Model Schema is created as per Mongo DB Genre Collection
module.exports = mongoose => {
    const Genres = mongoose.model(
        "genres",
        mongoose.Schema(
          {
            genreid: { type : String , required : true },
            genre: { type : String , required : true }
          },
          { timestamps: true }
        )
      );
    
      return Genres;
    };