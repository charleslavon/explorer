define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var StockAPI = require('component/stock_api');
  var ProvisioningAPI = require('component/provisioning_api');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    StockAPI.attachTo(document);
    ProvisioningAPI.attachTo(document);
  }

});
