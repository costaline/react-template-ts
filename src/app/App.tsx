import { Routes } from '@@/init/routes';
import { SwitchRoutes } from '@@/shared/components';

import './app.scss';

export const App = (): JSX.Element => <SwitchRoutes routes={Routes.all} />;
