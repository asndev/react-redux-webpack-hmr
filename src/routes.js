import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Index from 'components/Index';
import FooBarBaz from 'components/FooBarBaz';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Index} />
    <Route path='foobarbaz' component={FooBarBaz} />
  </Route>
);
