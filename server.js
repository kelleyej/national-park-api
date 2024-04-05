const express = require('express');
const app = express();
app.use(express.json());

app.set('port', process.env.PORT || 3000);

app.locals.parks = [
    {id: '1', name: "Great Smoky Mountains", state: "Tennessee and North Carolina", region: "Southeast", busiestMonth: "October"},
    {id: '2', name: "Grand Canyon", state: "Arizona", region: "Southwest", busiestMonth: "July"},
    {id: '3', name: "Zion", state: "Utah", region: "West", busiestMonth: "July and August"},
    {id: '4', name: "Rocky Mountain", state: "Colorado", region: "West", busiestMonth: "July"},
    {id: '5', name: "Acadia", state: "Maine", region: "Northeast", busiestMonth: "August"},
    {id: '6', name: "Yosemite", state: "California", region: "West", busiestMonth: "July"},
    {id: '7', name: "Yellowstone", state: "Wyoming, Montana, and Idaho", region: "West", busiestMonth: "July"},
    {id: '8', name: "Joshua Tree", state: "California", region: "West", busiestMonth: "March"},
    {id: '9', name: "Cuyahoga Valley", state: "Ohio", region: "Midwest", busiestMonth: "July and August"},
    {id: '10', name: "Glacier", state: "Montana", region: "West", busiestMonth: "July"},
    {id: '11', name: "Grand Teton", state: "Wyoming", region: "West", busiestMonth: "July"},
    {id: '12', name: "Denali", state: "Alaska", region: "Higher", busiestMonth: "July"},
    {id: '13', name: "Bryce Canyon", state: "Utah", region: "West", busiestMonth: "July"},
    {id: '14', name: "Arches", state: "Utah", region: "West", busiestMonth: "April"},
    {id: '15', name: "Redwood", state: "California", region: "West", busiestMonth: "June, July, and August"},
    {id: '16', name: "Sequoia", state: "California", region: "West", busiestMonth: "July"},
    {id: '17', name: "Olympic", state: "Washington", region: "West", busiestMonth: "June, July, and August"},
    {id: '18', name: "Hawai'i Volcanoes", state: "Hawaii", region: "Lower", busiestMonth: "July"},
    {id: '19', name: "Mount Rainier", state: "Washington", region: "West", busiestMonth: "July"},
    {id: '20', name: "Crater Lake", state: "Oregon", region: "West", busiestMonth: "July"},
    {id: '21', name: "Badlands", state: "South Dakota", region: "Midwest", busiestMonth: "July"},
    {id: '22', name: "Petrified Forest", state: "Arizona", region: "Southwest", busiestMonth: "March"},
    {id: '23', name: "Everglades", state: "Florida", region: "Southeast", busiestMonth: "March"},
    {id: '24', name: "Glacier Bay", state: "Alaska", region: "Higher", busiestMonth: "July and August"},
    {id: '25', name: "Great Basin", state: "Nevada", region: "West", busiestMonth: "July"},
    {id: '26', name: "Mammoth Cave", state: "Kentucky", region: "Southeast", busiestMonth: "July"},
    {id: '27', name: "White Sands", state: "New Mexico", region: "Southwest", busiestMonth: "March"},
    {id: '28', name: "Shenandoah", state: "Virginia", region: "Southeast", busiestMonth: "October"},
    {id: '29', name: "Big Bend", state: "Texas", region: "Southwest", busiestMonth: "March"},
    {id: '30', name: "Indiana Dunes", state: "Indiana", region: "Midwest", busiestMonth: "July"}
]

app.locals.title = 'National Parks';

app.get('/api/v1/parks', (request, response) => {
   const parks = app.locals.parks;

   response.json({parks})
})

app.get('/api/v1/parks/:id', (request, response) => {
    const { id } = request.params; 
    const filteredPark = app.locals.parks.find(park => park.id === id)
    if(!filteredPark){
        return response.sendStatus(404)
    } 
    response.status(200).json(filteredPark)
})

app.post('/api/v1/parks', (request, response) => {
    const id = Date.now();
    const park = request.body; 

    for(let requiredParameter of ['name', 'state', 'region', 'busiestMonth']){
        if(!park[requiredParameter]){
            response
            .status(422)
            .send({error: `Expected format: {name: <String>, state: <String>, region: <String>, busiestMonth: <String>}. You're missing a '${requiredParameter}' property.`})
            return
        }
    }

    const { name, state, region, busiestMonth } = request.body; 
    app.locals.parks.push({ id, name, state, region, busiestMonth })
    response.status(201).json({ id, name, state, region, busiestMonth })
})

app.delete('/api/v1/parks/:id', (request, response) => {
    const specificPark = app.locals.parks.find(park => park.id === request.params.id)
    let parkIndex = app.locals.parks.indexOf(specificPark)
    let deletedPark = app.locals.parks.splice(parkIndex, 1)
    if(parkIndex === -1){
       response.sendStatus(404) 
    } else {
       response.send(deletedPark) 
    }
})

app.put('/api/v1/parks/:id', (request, response) => {
    const { body, params: {id } } = request; 
    const specificPark = app.locals.parks.find(park => park.id === id)
    let parkIndex = app.locals.parks.indexOf(specificPark)
    if(parkIndex === -1){
        response.sendStatus(404)
    } else {
       app.locals.parks[parkIndex] = { id: id, ...body }
    return response.sendStatus(200) 
    }
})

app.patch('/api/v1/parks/:id', (request, response) => {
    const { body, params: { id } } = request; 
    const specificPark = app.locals.parks.find(park => park.id === id)
    let parkIndex = app.locals.parks.indexOf(specificPark)
    if(parkIndex === -1){
        return response.sendStatus(404)
    } else {
        app.locals.parks[parkIndex] = {...app.locals.parks[parkIndex], ...body}
    return response.sendStatus(200)
    }
    
})

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})