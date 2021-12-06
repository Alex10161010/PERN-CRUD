const { request } = require('express');
const express = require('express');
const morgan = require('morgan');
const taskRouter = require('./routes/tasks.routes.js');

const app = express();

app.use(morgan('dev'));

/* Entienda Peticiones objecto JSON */
app.use(express.json());

/* Rutas */
app.use(taskRouter);
/* Middleware de error */
app.use((err, req, res, next) => {
	return res.json({
		message: err.message,
	});
});

app.listen(4000);
console.log('Server en puerto 4000');
