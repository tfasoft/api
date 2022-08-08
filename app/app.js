const express = require('express');
const cors = require('cors');

const AuthenticationRoutes = require('./routes/authentication_routes');
const BlogRoutes = require('./routes/blog_routes');
const DashboardRoutes = require('./routes/dashboard_routes');
const DemoRoutes = require('./routes/demo_routes');
const MobileRoutes = require('./routes/mobile_routes');
const UserRoutes = require('./routes/user_routes');

const app = express();

app.set('json spaces', 2);
app.use(express.urlencoded({extended: true}));
app.use(express.json());    
app.use(cors());

app.use('/api/auth', AuthenticationRoutes);
app.use('/api/blog', BlogRoutes);
app.use('/api/dashboard', DashboardRoutes);
app.use('/api/demo', DemoRoutes);
app.use('/api/mobile', MobileRoutes);
app.use('/api/user', UserRoutes);

module.exports = app;