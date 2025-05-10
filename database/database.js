const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;

// DB API
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

// Middleware to parse request bodies
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// CORS setup
app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true,
}));

// API endpoint to get all users
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

// Login endpoint (POST)
app.post('/login', (req, res) => {
	const { username, password } = req.body; // Access data from the body

	if (!username || !password) {
		return res.status(400).send('Username and password are required');
	}

	const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
	db.query(sql, [username, password], (err, results) => {
		if (err) {
			return res.status(500).send('Database error');
		}

		if (results.length > 0) {
			res.send('Login successful');
		} else {
			res.status(401).send('Invalid credentials');
		}
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

