import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'
import 'dotenv/config';

const app = express()
app.use(express.json())

const port = process.env.PORT || 3001

app.use(cors({
    origin: '*'
}));

// const apiKey = process.env.API_KEY;
// console.log(`Your API Key is: ${apiKey}`);

const profile = [
    { name: 'Linda', Nationality: 'Congo', appearance: '😃', favColor: 'yellow' },
    { name: 'Nico', Nationality: 'China', appearance: '🤓', favColor: 'purple' },
    { name: 'Stephen', Nationality: 'United States', appearance: '🥸', favColor: 'green' },
];

app.get("/", (req, res) => {
    res.json(profile);
});

app.get('/profile', (req, res) => {
    const name = req.query.name;
    const favColor = req.query.favColor;
    const Nationality = req.query.Nationality

    const filteredPeople = profile.filter(profile =>
        (name ? profile.name === name : true) &&
        (favColor ? profile.favColor === favColor : true) &&
        (Nationality ? profile.Nationality === Nationality : true)
    );

    if (filteredPeople.length > 0) {
        res.json({ profile: filteredPeople });
    } else {
        res.status(404).json({ message: 'No matching profiles found.' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// Example of an application route that makes a request to another server
app.get('/advice', async (req, res) => {
    // Make a request to another wbesite and wait for a response
    const response = await fetch('https://api.adviceslip.com/advice')
  
    // Read the response
    const body = await response.json()
  
    // Print the repsonse body to the console
    console.log(body)
  
    // Get the advice text string from the response body object
    const advice = body.slip.advice
  
    res.json({ data: advice })
  })