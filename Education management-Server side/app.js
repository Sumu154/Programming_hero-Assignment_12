const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');
const stripe = require('stripe')(process.env.PAYMENT_GATEWAY_SK);


const app = express();

app.set('View engine', 'ejs');
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://educair-education-management.firebaseapp.com',
    'https://educair-education-management.web.app'
  ],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

const port = process.env.PORT || 3000;


// import all the routes
const userRoutes = require('./routes/userRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes')
const courseRoutes = require('./routes/courseRoutes')
const assignmentRoutes = require('./routes/assignmentRoutes')
const enrollmentRoutes = require('./routes/enrollmentRoutes')
const paymentRoutes = require('./routes/paymentRoutes')
const submissionRoutes = require('./routes/submissionRoutes')
const authRoutes = require('./routes/authRoutes')


app.use('/api', userRoutes)
app.use('/api', teacherRoutes)
app.use('/api', feedbackRoutes)
app.use('/api', courseRoutes)
app.use('/api', assignmentRoutes)
app.use('/api', enrollmentRoutes)
app.use('/api', paymentRoutes)
app.use('/api', submissionRoutes)
app.use('/api', authRoutes);



app.get('/', (req, res) => {
  res.send('hello.....assignment 12 hbe ki?')
})

app.listen(port, () => {
  console.log(`server is running at port ${port} `)
})