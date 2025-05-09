const path = "/home/william/twitApp/client/dist/"
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// Allow for resources to come in from other origin (DB)
app.use(cors({
	origin: 'http://localhost:3000',
	methods: ['GET'],
}));

// Serve static files (like index.html) from the "public" folder
app.use(express.static(path));

// API endpoint
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
