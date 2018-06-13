const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller')

require('dotenv').config()

massive(process.env.CONNECTION_STRING).then( dbInstance => {
    app.set('db', dbInstance)

    // dbInstance.new_planes()
    //     .then(planes => console.log('planes', planes))
    //     .catch(err => console.log('err', err))

    // dbInstance.get_planes()
    //     .then(planes => console.log('planes', planes))
    //     .catch(planes => console.log('err', err))

})

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

app.get('/api/planes/:num', controller.getPlanes)

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

