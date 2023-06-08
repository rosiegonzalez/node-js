const cors = require('cors')

const express = require('express')

const { body, check, param, validationResult } = require('express-validator');

const { result } = require('lodash');

const con= require('./PromisePool.js').con


const PORT = 80

const app = express()

const corsOptions = { origin: ['http://localhost:3000'], optionsSuccessStatus: 200 }


// Middleware...

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: true}))




// Your endpoints here..

// app.get('/message', cors(corsOptions), async (req, res) => {

//     res.send({message: 'Hello World!!!'})

//    })

// get car

//    app.get('/car', cors(corsOptions), async (req, res) => {

//     let result = await con.query('SELECT * FROM car  where car_id')

//     console.log(result[0])

//     res.send(result[0])

   

//    })

// get make

// app.get('/car/:make', cors(corsOptions), async (req, res) => {

//     const make = req.params.make;
    
//     let result = await con.query('SELECT * FROM car where make=?', [make])

//     console.log(result[0])

//     res.send(result[0])
// })

// // post car 

// app.post('/car/', cors(corsOptions), async (req, res) => {
//     const { make, model, color, price } = req.body;

//     let result = await con.query(
//         'INSERT INTO car (model, make, color, price) VALUES ("Corolla", "Toyota", "Gray", "30000")'
       
//     );

//     console.log(result[0])
//     res.send(result[0])
// })

// Put Car 

// app.put('/car/', cors(corsOptions), async (req, res) => {
    
//     const { make, model, color, price, carId } = req.body;

//     let result = await con.query(
//         'UPDATE car SET make = ?, model = ?, color = ?, price = ? WHERE car_id = ?',
//         [make, model, color, price, carId])

        
//     res.send(result[0])
   
//      } )

app.listen(PORT, () => {

    console.log(`Express web API running on port: ${PORT}.`)

})

// Delete Car 

app.delete("/car/:id", cors(corsOptions), async (req, res) => {

        const { id } =  req.params;

        let result = await con.query('DELETE FROM car WHERE car_id=?', [id]);

        
    
        console.log(result[0]);
    
        res.send(result[0]);
    
       
    
       })