
var app = require('expresslane').app,
    view = require('expresslane').view,
    data = require('./data'),
    user = require('user'),
    forms = require('forms');

/**
 * View all datasets.
 */
app.get('/admin/data', [checkAccess, loadDataSet], function(req, res, next) {
    res.render(view('content'), {locals: {
        pageTitle: 'Manage data sets',
        title: 'Manage data sets',
        content: 'TODO: list data sets'
    }});
});

/**
 * Web UI for editing a dataset.
 */
app.get('/admin/data/edit/:set', [checkAccess, loadDataSet], function(req, res, next) {
    res.render(__dirname + '/templates/dataset_edit.hbs', {locals: {
        pageTitle: 'Manage data sets',
        title: 'Manage data sets',
        content: 'TODO: list data sets'
    }});
});

/**
 * Expose javascript for editing a dataset.
 */
app.get('/admin/data/edit.js', [checkAccess], function(req, res, next) {
    var script = '';
    if (!script.length) {
        script = require('fs').readFileSync(__dirname + '/dataset_edit.js');
    }
    res.writeHead(200, {
        'Content-Type': 'application/javascript',
        'Content-Length': script.length
    })
    res.write(script);
});

/**
 * View a data set.
 */
app.get('/data/model/:set', [loadDataSet], function(req, res, next) {
    if (req.loaded.data.set) {
        var json = req.loaded.data.set.stringify();
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Content-Length': json.length
        });
        res.write(json);
        res.end();
    }
    else {
        next();
    }
});

/**
 * Modify a data set.
 */
app.put('/data/model/:set', [checkAccess, loadDataSet], function(req, res, next) {
    // todo.
});

/**
 * Checks access.
 */
function checkAccess(req, res, next) {
    next();
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
    req.loaded = req.loaded || {};
    req.loaded.data = req.loaded.data || {};
    if (req.params.set) {
        req.loaded.data.set = new data(req.params.set) || undefined;
    }
    next();
}
