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
//               Midddleware
// ==========================================
app.use(express.urlencoded({ extended: false }))

// ==========================================
//               ROUTES
// ==========================================
// Index route
app.get('/bakedgoods/', (req, res) => {
  res.render('index.ejs',{bakedGoods});
});

//New Route
app.get('/bakedgoods/new', (req, res) => {
  res.render('new.ejs')
})

//Create Route
app.post('/bakedgoods', (req, res) => {
  console.log('New Good', req.body)
  console.log(bakedGoods)
  
  res.redirect('/bakedgoods/')
})

//Show Route
app.get('/bakedgoods/:id', (req, res) => {
  res.render('show.ejs', {
    bakedGoods: bakedGoods[req.params.id]
   })
})

// ==========================================
//               LISTENERS
// ==========================================
app.listen(PORT, () => {
  console.log(`Biscoff bakery app is listening on port ${PORT}`)
})

