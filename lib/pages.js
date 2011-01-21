
var data = require('./data'),
    user = require('user'),
    forms = require('forms');

/**
 * View data.
 */
app.get('/admin/data', function(req, res, next) {
    if (user.permission('administer data')) {
        res.render(view('content'), {locals: {
            pageTitle: 'Manage data sets',
            title: 'Manage data sets',
            content: 'TODO: list data sets'
        }});
    }
    else {
        res.redirect('/login');
    }
});
