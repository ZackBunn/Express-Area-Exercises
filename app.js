const express = require('express');
const morgan = require('morgan');

const app = express();

// This is middleware that requests pass through
// on their way to the final handler
app.use(morgan('dev'));

//This is the final request handler

// app.get('/', (req, res) => {
//     res.send('Hello Express!');
//     });

// app.get('/burgers', (req, res) => {
//     res.send('We have juicy cheese burgers!');
//     })

//   app.get('/pizza/pepperoni', (req, res) => {
//     res.send('Your pizza is on the way!');
//     })

// app.get('/pizza/pineapple', (req, res) => {
//     res.send('Your pizza is on the way!');
//     })

// app.get('/echo', (req, res) => {
//         const responseText = `Here are some details of your request:
//           Base URL: ${req.baseUrl}
//           Host: ${req.hostname}
//           Path: ${req.path}
//         `;
//         res.send(responseText);
//     });

// app.get('/queryViewer', (req, res) => {
//         console.log(req.query);
//         res.end(); //do not send any data back to the client
//       });

// app.get('/greetings', (req, res) => {
//         //1. get values from the request
//         const name = req.query.name;
//         const race = req.query.race;
      
//         //2. validate the values
//         if(!name) {
//           //3. name was not provided
//           return res.status(400).send('Please provide a name');
//         }
      
//         if(!race) {
//           //3. race was not provided
//           return res.status(400).send('Please provide a race');
//         }
      
//         //4. and 5. both name and race are valid so do the processing.
//         const greeting = `Greetings ${name} the ${race}, welcome to our kingdom.`;
      
//         //6. send the response 
//         res.send(greeting);
//       });

//1st drill
app.get('/sum', (req, res) => {
    const {a, b} = req.query;
  
    // Validation a and b need to be there
    if(!a) {
      return res
            .status(400)
            .send('a is required');
    }
  
    if(!b) {
      return res
            .status(400)
            .send('b is required');
    }
  
    const numA = parseFloat(a);
    const numB = parseFloat(b);
  
    if(Number.isNaN(numA)) {
      return res
            .status(400)
            .send('a must be a number');
    }
  
    if(Number.isNaN(numB)) {
      return res
            .status(400)
            .send('b must be a number');
    }
  
    // validation passed so perform the task
    const c = numA + numB;
  
    // format the response string
    const responseString = `The sum of ${numA} and ${numB} is ${c}`;
  
    // send the response
    res
      .status(200)
      .send(responseString);
  });

app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
  });

