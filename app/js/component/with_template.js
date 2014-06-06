/** 
  @author: charles garrett
  @description: this mixin modules provides the ability for a component to render HTML templates

  @required Data: templateName, templateData
  @optional Data: 

  @Additional Info: https://github.com/flightjs/flight/blob/master/doc/mixin_api.md , http://twitter.github.io/hogan.js/
 **/

define(function (require) {

  'use strict';

  /**
   * Module exports
   */

  return withTemplate;


  /**
   * Private functions
   */
  function getAPITemplate() {

        //Grab the imported HTMl template - api_block.html
        var link = document.querySelector('link[rel="import"]');
        var content = link.import;

        // Grab the primary content div 
        var content = content.querySelector('div.panel-group.api');

        return content.innerHTML;
  }

  /**
   * Module function
   */

  function withTemplate() {

    this.defaultAttrs({
        apiBlockTemplate: getAPITemplate()
    });


    this.render = function(templateName, templateData) {
        var templateAsString;

        if(this.templates[templateName]) {
          templateAsString = this.templates[templateName].render(templateData);
        }

        var templateAsDOM = document.createElement('div');
        templateAsDOM.innerHTML = templateAsString;
        
        //Make a copy of the template content and appened it to the apiContainer
        document.querySelector('#apiContainer').appendChild(templateAsDOM);

    };

    /** cgarrett - Instead of running this before every call to 'render', ideally,  this would run only once
    *   like before or after 'initialize', but I settled for this option as it took to long to get the ideal 
    *   solution working
    **/
    this.before('render', function () {
        this.templates = {};
        this.templates.apiBlock = Hogan.compile(this.attr.apiBlockTemplate);
    });

  };

});
