``
// import the express package
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

//create an instance of express
const app = express();
app.use(express.json());

//const variable for our PORT number
const PORT = process.env.PORT ?? 5000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

mongoose.connect(process.env.MONGOOSE_PRACTICE, (error) => {

    if (error) {
        return console.log("unsuccessfuly connected");
    }

    else {
        console.log("successfully connected");
        app.listen(PORT, () => console.log(`server is up and listening to request from PORT: ${PORT}`));
    }

});






