const Movie = require("./model")
/////CREATE NEW MOVIE FUNCTION/////
exports.createMovie = async (movieObject) => {
    try{
        const newMovie = await Movie.create(movieObject)
        console.log(newMovie)
    }
    catch(error){
        console.log("Create Movie Error",error)
    }}
/////DELETE MOVIE BY TITLE FUNCTION/////
exports.deleteMovie = async (yargsObject) => {
    try{
        const deleteMovie = await Movie.deleteOne({title: yargsObject.title})
        console.log(deleteMovie)
    }
    catch(error){
        console.log("Delete Movie Error",error)
    }}
/////READ MOVIE BY TITLE FUNCTION/////
    exports.readMovie = async (yargsObject) => {
    try{
        const readMovie = await Movie.findOne({title: yargsObject.title})
        console.log(readMovie)
    }
    catch (error){
        console.log("Read Movie Error",error)
    }}
/////UPDATE MOVIE BY TITLE FUNCTION/////
    exports.updateMovie = async (yargsObject) => {
    try {
        const updateMovie = await Movie.updateOne(
        { title: yargsObject.title },
        { $set: { title: yargsObject.newTitle } },
    )
        console.log(updateMovie)
    }
    catch (error) {
        console.log("Update Movie Error",error)
    }}