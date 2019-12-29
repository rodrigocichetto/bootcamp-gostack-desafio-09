import React from 'react';
import { Switch } from 'react-router-dom';

import { ROUTE_PATH } from '~/config/constants';

import Route from './Route';
import SignIn from '~/pages/SignIn';
import Student from '~/pages/Student';
import StudentForm from '~/pages/Student/Form';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route
      path={`${ROUTE_PATH.STUDENT_FORM}`}
      component={StudentForm}
      isPrivate
    />
    <Route path={ROUTE_PATH.STUDENT} component={Student} isPrivate />
  </Switch>
);

export default Routes;
