// ==========================================
//               DEPENDENCIES
// ==========================================
const express = require('express');
const app = express();
const PORT = 3000;

// ==========================================
//               DATABASE
// ==========================================
const bakedGoods = require('./models/bakedgoods.js');

// ==========================================
//               ROUTES
// ==========================================
// Index route
app.get('/bakedgoods/', (req, res) => {
  res.render('index.ejs',{bakedGoods});
});

//Show route
app.get('/backedgoods/:id', (req, res) => {
  res.send(backedGoods[req.params.id]);
})

// ==========================================
//               LISTENERS
// ==========================================
app.listen(PORT, () => {
  console.log(`Biscoff bakery app is listening on port ${PORT}`)
})

console.log(bakedGoods)