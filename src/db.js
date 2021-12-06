/* Esta clase permitira crear una conexion al pasarle
un parameto*/
const { Pool } = require('pg');
const pool = new Pool({
	user: 'postgres',
	password: '',
	host: 'localhost',
	port: 5432,
	database: 'tareasdb',
});

module.exports = pool;
