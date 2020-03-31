const express = require('express');

const OngController = require('./controllers/Ong.Controller');
const IncidentController = require('./controllers/Incident.Controller');
const ProfileController = require('./controllers/Profile.Controller');
const SessionController = require('./controllers/Session.Controller');

const routes = express.Router();

routes.post('/sessions', SessionController.login);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.delete('/ongs/:id', OngController.delete);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;