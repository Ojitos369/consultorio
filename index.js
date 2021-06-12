//console.clear()
const app = require('./src/config/server');
const datos = require('./src/app/assets/json/datos.json');
require('./src/app/routes/news')(app,datos);

// iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Corriendo servidor en puerto', app.get('port'));
});