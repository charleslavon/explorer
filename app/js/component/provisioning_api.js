/** 
  @author: charles garrett
  @description: ProvisioningAPI UI Component providing UI & behavior for API interaction.

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
  var withPostRequest = require('component/with_post_request');
  var withTemplate = require('component/with_template');

  /**
   * Module exports
   */

  return defineComponent(provisioningAPI, withGetRequest, withPostRequest, withTemplate);

  /**
   * Module function
   */

  function provisioningAPI() {
    
    this.defaultAttrs({
      apiName: 'Provisioning API', 
      elementID: 'provisioningAPI',
      apiURL: 'http://tgt-localhost-placeholder-url.com',
      methodsSupported: [ {method:'GET'},  {method:'POST'}, {method:'OPTIONS'}]
    });

    this.after('initialize', function () {

        this.render('apiBlock', this.attr);

    });
  }

});
