const express = require('express');
const path = require('path');
const app = express();

// Serve static assets
app.use('/assets/images', express.static(path.join(__dirname, 'assets', 'images')));
app.use('/assets/sites', express.static(path.join(__dirname, 'assets', 'sites')));
app.use('/service/assets/images', express.static(path.join(__dirname, 'assets', 'images')));
app.use('/service/assets/sites', express.static(path.join(__dirname, 'assets', 'sites')));


// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'projects.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/testimonials', (req, res) => {
  res.sendFile(path.join(__dirname, 'testimonials.html'));
});

// Services routes
const serviceRouter = express.Router();

serviceRouter.get('/sea-air-freight', (req, res) => {
  res.sendFile(path.join(__dirname, 'service', 'sea-air-freight.html'));
});

serviceRouter.get('/customs-brokerage', (req, res) => {
  res.sendFile(path.join(__dirname, 'service', 'customs-brokerage.html'));
});

serviceRouter.get('/inland-trucking', (req, res) => {
  res.sendFile(path.join(__dirname, 'service', 'inland-trucking.html'));
});

serviceRouter.get('/truck-fleets', (req, res) => {
  res.sendFile(path.join(__dirname, 'service', 'truck-fleets.html'));
});

app.use('/service', serviceRouter);

// Start the server
const port = process.env.PORT || 3434;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
