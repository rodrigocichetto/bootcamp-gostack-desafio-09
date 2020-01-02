import React from 'react';
import { Switch } from 'react-router-dom';

import { ROUTE_PATH } from '~/config/constants';

import Route from './Route';
import SignIn from '~/pages/SignIn';
import Student from '~/pages/Student';
import StudentForm from '~/pages/Student/Form';
import Plan from '~/pages/Plan';
import PlanForm from '~/pages/Plan/Form';
import Registration from '~/pages/Registration';
import RegistrationForm from '~/pages/Registration/Form';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route
      path={`${ROUTE_PATH.STUDENT_FORM}`}
      component={StudentForm}
      isPrivate
    />
    <Route path={ROUTE_PATH.STUDENT} component={Student} isPrivate />

    <Route path={`${ROUTE_PATH.PLAN_FORM}`} component={PlanForm} isPrivate />
    <Route path={ROUTE_PATH.PLAN} component={Plan} isPrivate />

    <Route
      path={`${ROUTE_PATH.REGISTRATION_FORM}`}
      component={RegistrationForm}
      isPrivate
    />
    <Route path={ROUTE_PATH.REGISTRATION} component={Registration} isPrivate />
  </Switch>
);

export default Routes;
