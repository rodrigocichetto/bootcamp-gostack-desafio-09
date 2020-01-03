import React from 'react';
import { Switch } from 'react-router-dom';

import PATHS from '~/routes/paths';

import Route from './Route';
import SignIn from '~/pages/SignIn';
import Student from '~/pages/Student';
import StudentForm from '~/pages/Student/Form';
import Plan from '~/pages/Plan';
import PlanForm from '~/pages/Plan/Form';
import Registration from '~/pages/Registration';
import RegistrationForm from '~/pages/Registration/Form';
import HelpOrder from '~/pages/HelpOrder';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />

    <Route path={`${PATHS.STUDENT_FORM}`} component={StudentForm} isPrivate />
    <Route path={PATHS.STUDENT} component={Student} isPrivate />

    <Route path={`${PATHS.PLAN_FORM}`} component={PlanForm} isPrivate />
    <Route path={PATHS.PLAN} component={Plan} isPrivate />

    <Route
      path={`${PATHS.REGISTRATION_FORM}`}
      component={RegistrationForm}
      isPrivate
    />
    <Route path={PATHS.REGISTRATION} component={Registration} isPrivate />

    <Route path={PATHS.HELP_ORDER} component={HelpOrder} isPrivate />
  </Switch>
);

export default Routes;
