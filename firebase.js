import {initializeApp, cert} from "firebase-admin/app"
import {getFirestore} from "firebase-admin/firestore"
import {credentials} from "./credentials.js"

initializeApp({
    credential:cert(credentials)
})

const db = getFirestore()
//everything above is a boilerplate we can copy/paste for many prjects
// ready to do anything with the database

db.collection("movies").get()
.then(movies => {
    movies.docs.forEach(movie=>{
        console.log(movie.data())
    })
})
.catch(err =>{console.error(err)})
