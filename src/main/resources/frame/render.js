/*!
 * epm-ui-simple-spring-boot - EPM UI Spring Boot Simple
 * @version v0.2.0
 * @link http://www.bonc.com.cn
 * Copyright (C) 2017 BONC All rights reserved.
 */
function render( model, context ) {

  var DOCTYPE = '<!DOCTYPE html>';

  var main = null;
  try {
    main = EPMUIApp.default || EPMUIApp;
  } catch ( e ) {}

  var component = EPMUIPage.default || EPMUIPage;

  var props = JSON.parse( model );
  var ctx = JSON.parse( context );

  EPMUI.context = ctx.app;

  var element = React.createElement( component, props );
  if ( main ) {
    element = React.createElement(
        main,
        {
          component: component,
          data: JSON.stringify( props ).replace( /script/g, 'scr"+"ipt' ),
          view: ctx.view.name,
          context: ctx.app,
          env: "development"
        },
        element
    );
  }

  var rendered = DOCTYPE + ReactDOMServer.renderToStaticMarkup( element );

  return rendered;
}
