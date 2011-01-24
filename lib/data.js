
/**
 * Helper for retrieving configuration.
 *
 * @todo: This could be pushed up into expresslane.
 */
function configuration(name) {
    return require('stash')(process.cwd() + '/config/data/' + name + '.json');
}

console.log(configuration('data').list());
console.log(configuration('datasets').list());

require('./pages');
