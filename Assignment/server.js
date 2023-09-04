
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const salesRoutes = require('./routes/sales');
require('./db/conn')
const app = express();
app.use(bodyParser.json());



app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/sales', salesRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
