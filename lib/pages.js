
var data = require('./data'),
    user = require('user'),
    forms = require('forms');

/**
 * View data.
 */
app.get('/admin/data', function(req, res, next) {
    if (req.session.user) {
        res.render(view('content'), {locals: {
            pageTitle: req.session.user.name,
            title: req.session.user.name,
            content: '<a href="/logout">Log out</a>'
        }});
    }
    else {
        res.redirect('/login');
    }
});
