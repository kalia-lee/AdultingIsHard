const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'akirchner',
  host: 'localhost',
  database: 'adulting_app',
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query('SELECT * FROM test_table', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  });
}

const dashboard = (request, response) => {
  const users = [
      { name: 'Grace' }
  ];
  response.render('dashboard.ejs', {
      users
  });
};




module.exports = {
  getUsers,
  dashboard
  /*getUserById,
  createUser,
  updateUser,
  deleteUser,*/
}
