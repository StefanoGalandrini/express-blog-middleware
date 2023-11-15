// import modules
const express = require('express');
const dotenv = require('dotenv').config();
const app = express();

// use data types
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import posts routes
const postsRouter = require('./routers/posts');

//import standard routes
const homeController = require('./controllers/home');

// use router
app.use('/posts', postsRouter);


// static files
app.use(express.static('public'));

// define routes
app.get('/', homeController.index);



// start server
app.listen(process.env.PORT || 3000, () =>
{
	console.log(`Server running on http://localhost:${process.env.PORT}`);
});
