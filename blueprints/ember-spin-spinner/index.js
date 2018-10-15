/* jshint node: true */
'use strict';

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackageToProject('spin.js', '2.3.2');
  }
};
