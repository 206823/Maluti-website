const express = require('express');
const app = express();

app.use(express.json());

const studentRoutes = require('./routes/students');
const applicationRoutes = require('./routes/applications');

app.use('/students', studentRoutes);
app.use('/applications', applicationRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});