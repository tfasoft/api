// Requires
const express = require('express'); // Require Express
const cors = require('cors'); // Require CORS

// Import routes
const AuthenticationRoutes = require('./routes/authentication_routes'); // Import Authentication routes
const BlogRoutes = require('./routes/blog_routes'); // Import Blog routes
const DashboardRoutes = require('./routes/dashboard_routes'); // Import Dashboard routes
const DemoRoutes = require('./routes/demo_routes'); // Import  Demp routes
const MobileRoutes = require('./routes/mobile_routes'); // Import Mobile routes
const UserRoutes = require('./routes/user_routes'); // Import User routes

// Initiall Express app
const app = express();

// Json, url encode and cors
app.set('json spaces', 2);
app.use(express.urlencoded({extended: true}));
app.use(express.json());    
app.use(cors());

// Use routes starting with /api
app.use('/api/auth', AuthenticationRoutes); // Use Authentication routes
app.use('/api/blog', BlogRoutes); // Use Blog routes
app.use('/api/dashboard', DashboardRoutes); // Use Dashboard routes
app.use('/api/demo', DemoRoutes); // Use Demo routes
app.use('/api/mobile', MobileRoutes); // Use Mobile routes
app.use('/api/user', UserRoutes); // Use User routes

// Export Express to use in /app.js
module.exports = app;