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





module.exports = {
  getUsers,
  /*getUserById,
  createUser,
  updateUser,
  deleteUser,*/
}
