// import modules
const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

// use data types
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import posts routes
const postsRouter = require('./routers/posts');
const authRouter = require('./routers/auth');

//import standard routes
const homeController = require('./controllers/home');

// import middleware
const notFound404 = require('./middleware/notFound404');
const errorHandler = require('./middleware/errorHandler');
const routesLogger = require('./middleware/routesLogger');


// use router for posts
app.use('/posts', postsRouter);

// use router for login
app.use('/', authRouter);

// static files
app.use(express.static('public'));

// define routes
app.get('/', homeController.index);


// middleware for 404 not found
app.use(notFound404);

// middleware for errors
app.use(errorHandler);

// middleware for logging routes
app.use(routesLogger);

// start server
app.listen(process.env.PORT || 3000, () =>
{
	console.log(`Server running on http://localhost:${process.env.PORT}`);
});
