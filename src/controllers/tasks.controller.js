const pool = require('../db');
const tabla = 'tareas';

class TareaService {
	static nametable = 'tareas';

	async getAll(req, res, next) {
		try {
			const resp = await pool.query(`SELECT * FROM ${TareaService.nametable}`);
			res.json(resp.rows);
		} catch (error) {
			next(error);
		}
	}

	async getById(req, res, next) {
		const { id } = req.params;
		try {
			const resp = await pool.query(`SELECT * FROM ${TareaService.nametable} WHERE id = $1`, [id]);
			if (resp.rows.length === 0)
				return res.status(400).json({
					message: 'Tarea no encontrada',
				});
			res.json(resp.rows[0]);
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
		/* objecto json pasado por request */
		const { titulo, descripcion } = req.body;
		try {
			const resp = await pool.query(
				`INSERT INTO ${TareaService.nametable} (titulo,descripcion) VALUES ($1,$2) RETURNING *`,
				[titulo, descripcion]
			);
			res.json(resp.rows[0]);
		} catch (error) {
			next(error);
		}
	}

	async destroy(req, res, next) {
		const { id } = req.params;
		try {
			const resp = await pool.query(`DELETE FROM ${TareaService.nametable} WHERE id = $1`, [id]);
			if (resp.rowCount === 0)
				return res.status(400).json({
					message: 'Tarea no encontrada',
				});
			res.status(204);
		} catch (error) {
			next(error);
		}
	}

	async update(req, res, next) {
		const { id } = req.params;
		const { titulo, descripcion } = req.body;
		try {
			const respuesta = await pool.query(
				`UPDATE ${TareaService.nametable} SET titulo = $1, descripcion = $2 WHERE id = $3 RETURNING *`,
				[titulo, descripcion, id]
			);
			if (respuesta.rowCount === 0)
				return res.status(400).json({
					message: 'Tarea no actualizada',
				});
			res.status(201).json(respuesta.rows[0]);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = new TareaService();
