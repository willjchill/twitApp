const path = "/home/william/twitApp/client/dist/"
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Serve static files (like index.html) from the "public" folder
app.use(express.static(path))

// MySQL setup
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
	console.log(`Server running at http://localhost:${port}`);
});
