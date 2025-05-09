const path = "/home/william/twitApp/client/dist/";
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;

// DB API
// MySQL setup
app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true,
}));

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'frank',
	database: 'testdb'
});

db.connect(err => {
	if (err) {
		console.error('Database connection failed:', err);
		return;
	}
	console.log('Connected to MySQL');
});

// API endpoint
app.get('/users', (req, res) => {
	db.query('SELECT * FROM users', (err, results) => {
		if (err) {
			res.status(500).send('Database query error');
			return;
		}
		console.log(results); // debug
		res.json(results);
	});
});

app.listen(port, () => {
	console.log(`DB running at http://localhost:${port}`);
});
