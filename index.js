const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

// Enable HTTP security headers
app.use(helmet());

// Enable compression for performance
app.use(compression());

// Set EJS as templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from /public with caching for 1 day
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1d' }));

// Routes

// Home Page
app.get('/', (req, res) => {
  res.render('index', { title: 'Home | SSC' });
});

// About Us Page
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us | SSC' });
});

// Career Page
app.get('/career', (req, res) => {
  res.render('career', { title: 'Career | SSC' });
});

// Contact Us Page
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us | SSC' });
});

// CyberSecurity Service Page
app.get('/services/CyberSecurity', (req, res) => {
  res.render('services/CyberSecurity', { title: 'CyberSecurity Services | SSC' });
});

// RASP Service Page
app.get('/services/rasp', (req, res) => {
  res.render('services/rasp', { title: 'RASP Services | SSC' });
});

// Endpoint Security Service Page
app.get('/services/endpoint', (req, res) => {
  res.render('services/endpoint', { title: 'Endpoint Security Services | SSC' });
});

// Performance Testing Service Page
app.get('/services/performance-testing', (req, res) => {
  res.render('services/performance', { title: 'Performance Testing Services | SSC' });
});

// Sitemap for SEO
app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
