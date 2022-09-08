require("./src/db/connections")
const mongoose = require("mongoose")
const yargs = require("yargs")
const {createMovie, deleteMovie, readMovie, updateMovie} = require ("./src/movie/functions")

const app = async (yargsObject) => {
    try{
        if(yargsObject.create) {
            await createMovie ({title: yargsObject.title, actor: yargsObject.actor})
            console.log("Your Movie Entry has been succesfully created")
        }
        else if (yargsObject.delete){
            await deleteMovie ({title: yargsObject.title, actor: yargsObject.actor})
        }
        else if (yargsObject.read){
            await readMovie ({title: yargsObject.title, actor: yargsObject.actor})
        }
        else if (yargsObject.update){
            await updateMovie ({title: yargsObject.newTitle}, {title: yargsObject.newTitle})  /// update here and in app js to pass objects correctly
        }
        else{
            console.log("We are currently experiencing technical difficulties")
        }}
        catch(error){
            console.log("Error within CRUD Operations")
            console.log(error)
        }
        await mongoose.disconnect()
    }

    app(yargs.argv)