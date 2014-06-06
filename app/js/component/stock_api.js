/** 
  @author: charles garrett
  @description: StockAPI UI Component providing UI & behavior for API interaction.

  @required Data:
  @optional Data: 

  @Additional Info: 

 **/

define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');
  var withGetRequest = require('component/with_get_request');
  var withTemplate = require('component/with_template');

  /**
   * Module exports
   */

  return defineComponent(stockAPI, withGetRequest, withTemplate);

  /**
   * Module function
   */

  function stockAPI() {
    
    this.defaultAttrs({
      apiName: 'Stock API', 
      elementID: 'stockAPI',
      methodsSupported: [ {method:'GET'}]
    });

    this.after('initialize', function () {

        this.render('apiBlock', this.attr);
    });
  }

});
