require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./Routes/Workouts");
const userRoutes = require("./Routes/User");
const app = express();
const PORT  = process.env.PORT;

app.use(express.json());

//middleware
app.use((req,res,next)=>{
    console.log(`"${req.path}"   "${req.method}"`);
    next();
}
)

   //routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

    //connect to mongo 
mongoose.connect(process.env.MONG_URI).then(() => {
    //listen for requests
    app.listen( PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);});
})
.catch( (error) => {
    console.log(`Error connecting to the database ${error}`);
})

