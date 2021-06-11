
// Importando el router  de Home 
import homeRouter from  './home';

// Importando router de users 
import  userRouter from './users'

// Agregando las rutas a la aplicacion 
const addRoutes = (app) => {
  app.use('/', homeRouter);
  app.use('/users', userRouter);
  return app;
}
export default {
  addRoutes,
};

