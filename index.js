import express from 'express'
const app = express()
app.use(express.json())

const port = process.env.PORT || 3001

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