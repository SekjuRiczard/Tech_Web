import App from './app';
import IndexController from './controllers/index.controller';
import DataController from './controllers/data.controllers';
const app: App = new App([
    new IndexController(),
    new DataController()
]);
app.listen();