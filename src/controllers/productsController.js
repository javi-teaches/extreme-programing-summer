let JsonModel = require('../models/JsonModel');
let productsModel = new JsonModel('products');

const controller = {
    index: (req, res) => {
        let allProducts = productsModel.getAll();
        return res.render('products/index', { allProducts });
    },

    create: (req, res) => {
        return res.render('products/create');
    },

    store: (req, res) => {
        productsModel.save(req.body);
        return res.redirect('/products');
    },

    show: (req, res) => {
        let product = productsModel.findByPk(req.params.id);
        if (product) {
            return res.render('products/detail', { product });
        } else {
            return res.render('404');
        }
    },

    destroy: (req, res) => {
        productsModel.destroy(req.params.id);
        return res.redirect('/products');
    }
};

module.exports = controller;