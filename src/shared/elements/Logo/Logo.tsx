import { FC } from 'react';

import classes from './logo.module.scss';
import { ReactComponent as LogoSvg } from './images/logo.svg';

export const Logo: FC = () => <LogoSvg className={classes['logo']} />;
