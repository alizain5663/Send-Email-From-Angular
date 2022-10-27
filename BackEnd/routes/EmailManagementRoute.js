const express = require('express');
const Router = express.Router();


const { SendEmailUsingNodeMailer } = require('../controllers/EmailManagementController');

Router.exports

Router.post('/SendEmailUsingNodeMailer',SendEmailUsingNodeMailer);

module.exports = Router