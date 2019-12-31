import React from 'react';
import { Switch } from 'react-router-dom';

import { ROUTE_PATH } from '~/config/constants';

import Route from './Route';
import SignIn from '~/pages/SignIn';
import Student from '~/pages/Student';
import StudentForm from '~/pages/Student/Form';
import Plan from '~/pages/Plan';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route
      path={`${ROUTE_PATH.STUDENT_FORM}`}
      component={StudentForm}
      isPrivate
    />
    <Route path={ROUTE_PATH.STUDENT} component={Student} isPrivate />

    {/* <Route path={`${ROUTE_PATH.PLAN_FORM}`} component={PlanForm} isPrivate /> */}
    <Route path={ROUTE_PATH.PLAN} component={Plan} isPrivate />
  </Switch>
);

export default Routes;
