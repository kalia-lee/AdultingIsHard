const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'akirchner',
  host: 'localhost',
  database: 'adulting_app',
  port: 5432,
});

const dashboard = (request, response) => {
  const users = [
      { name: 'Grace',
        email: 'graceJones@gmail.com',
        address: '1234 Seasame St. NW',
        zipCode: '55401'
      }
  ];
  response.render('dashboard.ejs', {
      users
  });
};

const assets = (request, response) => {
  /*const users = [
      { name: 'Grace' }
  ];*/
  response.render('assets.ejs');
};

const healthGeneral = (request, response) => {
  /*const users = [
      { name: 'Grace' }
  ];*/
  response.render('health-general.ejs');
};
/////// CRUD ROUTES ///////

// GET all users from the Users table
const getUsers = (request, response) => {
  pool.query('SELECT users.name FROM users', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
}

// GET all events of a certain type
var getAllEventsQuery = 'select events."eventName", categories."categoryName", events."reminderDate", events."dateCompleted"'
  + ' from events join categories on categories.id = events."categoryId"';

const getAllEvents = (request, response) => {
  pool.query(getAllEventsQuery, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

var getHealthEventsQuery = 'select events."eventName", categories."categoryName", events."reminderDate", events."dateCompleted"'
  + ' from events join categories on categories.id = events."categoryId" where events."categoryId" = 1"';

const getHealthEvents = (request, response) => {
  pool.query(getHealthEventsQuery, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

var getAssetEventsQuery = 'select events."eventName", categories."categoryName", events."reminderDate", events."dateCompleted"'
  + ' from events join categories on categories.id = events."categoryId" where events."categoryId" = 2"';

const getAssetEvents = (request, response) => {
  pool.query(getAssetEventsQuery, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

var getPersonalEventsQuery = 'select events."eventName", categories."categoryName", events."reminderDate", events."dateCompleted"'
  + ' from events join categories on categories.id = events."categoryId" where events."categoryId" = 3"';

const getPersonalEvents = (request, response) => {
  pool.query(getPersonalEventsQuery, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


// CREATE a new event (userID, categoryID, eventName, frequency, reminderDate, dateCompleted = null)
const createEvent = (request, response) => {

  const { userId, categoryId, eventName, frequency, reminderDate } = request.body;

  pool.query('INSERT INTO events (userId, categoryId, eventName, frequency, reminderDate) VALUES ($1, $2, $3, $4, $5)', [userId, categoryId, eventName, frequency, reminderDate], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`Event added with ID: ${result.insertId}`);
  });
};


//UPDATE existing event
const updateEvent = (request, response) => {
  const id = parseInt(request.params.id);
  const { userId, categoryId, eventName, frequency, reminderDate, dateCompleted } = request.body;

  pool.query(
    'UPDATE events SET userId = $1, categoryID = $2, eventName = $3, frequency = $4, reminderDate = $5, dateCompleted = $6 WHERE id = $3',
    [userId, categoryId, eventName, frequency, reminderDate, dateCompleted, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    });
};


module.exports = {
  getUsers,
  dashboard,
  assets,
  healthGeneral,
  getAllEvents,
  getHealthEvents,
  getAssetEvents,
  getPersonalEvents,
  createEvent,
  updateEvent
};
