
var app = require('expresslane').app,
    view = require('expresslane').view,
    data = require('./data'),
    user = require('user'),
    forms = require('forms');

/**
 * Loaders.
 */
var loaders = [
    // checkAccess,
    loadDataSet
];

/**
 * View all datasets.
 */
app.get('/admin/data', loaders, function(req, res, next) {
    res.render(view('content'), {locals: {
        pageTitle: 'Manage data sets',
        title: 'Manage data sets',
        content: 'TODO: list data sets'
    }});
});

/**
 * View a particular dataset.
 */
app.get('/admin/data/edit/:set', loaders, function(req, res, next) {
    res.render(__dirname + '/templates/dataset_edit.hbs', {locals: {
        pageTitle: 'Manage data sets',
        title: 'Manage data sets',
        content: 'TODO: list data sets'
    }});
});

/**
 * Checks access.
 */
function checkAccess(req, res, next) {
    if (user.permission(req, 'administer data')) {
        next();
    }
    else {
        res.redirect('/login');
    }
}

/**
 * Loads a dataset.
 */
function loadDataSet(req, res, next) {
    console.log(req.params);
    next();
}
