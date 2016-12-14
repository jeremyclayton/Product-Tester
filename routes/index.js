var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
router.get('/snowboard', function(req, res, next) {
    return knex("snowboard")
        .then(data => {
            res.render('index', {
                data: data
            });

        });
});

router.get('/snowboard/:id', function(req, res, next) {
    knex('snowboard')
        .where("id", req.params.id)
        .then(data => {
            res.render('view', {
                data: data
            });
        });
});
router.get('/new', function(req, res, next) {
    res.render('new');
});
router.post('/new', function(req, res, next) {
    knex('snowboard').insert({
        make: req.body.make,
        model: req.body.model,
        size: req.body.size,
        price: req.body.price,
        flex: req.body.flex,
    }).returning('id').then(function(id) {
        res.redirect('/snowboard/' + id);
    });
});
// router.delete('snowboard/:id', (req,res)=>){
//     let id = req.params.id;
//      knex('snowboard')
//      .where('id', id)
//              .del()
//              .then(function (){
//                  res.redirect('/snowboard');
//              });
// });
// router.get('/delete', function(req, res, next) {
//     res.render('delete');
// });
router.delete('/snowboard/:id', (req, res) =>{
    // console.log('snowboard');
    let id = req.params.id;
    knex('snowboard')
        .where('id', id)
        .del()
        .then(function (){
            res.redirect('/snowboard');
        });
});
// router.delete('/:id', (req, res) => {
//   knex ("snowboard").del({
//       make: req.body.make,
//       model: req.body.model,
//       size: req.body.size,
//       price: req.body.price,
//       flex: req.body.flex,
//   })
//   .then(function () {
//     res.redirect('/snowboard');
//     console.log(id);
// });
// });

module.exports = router;
