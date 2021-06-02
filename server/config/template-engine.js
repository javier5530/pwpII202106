import { ExpressHandlebars } from 'express-handlebars';
import Exphbs from 'express-handlebars';
import phat from 'path';

// Exportando una funcion de configuracion 
export default (app) =>{
    //1.Registrar el motor de plantillas 
    app.engine('hbs', Exphbs({
        extname: '.hbs',
        defaultLayout: 'main',
    })
    );
//2. Seleccionar el motor de plantillas recien registrado 
app.set('view engine','hbs');
//3. Establecer  la ruta de las vistas 
app.set('views',phat.join(__dirname,'..', 'views'));

//Retornamos el valor de entrada 
return app;
};