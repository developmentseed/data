
/**
 * Create a new dataset.
 */
var DataSet = function(name) {
    this._name = name;
    this._stash = require('stash')(process.cwd() + '/config/data/datasets.json');
    this._data = this._stash.get(this._name);
}

/**
 * Save a dataset.
 */
DataSet.prototype.save = function() {
    this._stash.set(this._name, this._data);
}

/**
 * Delete a dataset.
 */
DataSet.prototype.rm = function() {
    this._data = {};
    this._stash.del(this._name);
}

/**
 * Convert payload to a JSON string.
 */
DataSet.prototype.stringify = function() {
    return JSON.stringify(this._data, null, 4);
}

module.exports = DataSet;

require('./pages');
