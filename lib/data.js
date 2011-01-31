
/**
 * Returns a list of known datasets.
 */
var dataSets = function() {
    return {
        'k12_state',
        'k12_district',
        'higher_ed'
    }
}

module.exports {
    dataSets: dataSets,
}

require('./pages');
