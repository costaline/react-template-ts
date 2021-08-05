import { FC } from 'react';

import { Logo } from '@@/shared/elements';
import { sassVars } from '@@/shared/helpers';

import './main.scss';

export const Main: FC = () => (
  <div className="main">
    <header className="main__header">
      <Logo />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="main__link"
        href="https://reactjs.org"
        rel="noopener noreferrer"
        style={{
          color: sassVars['color-bright'],
        }}
        target="_blank"
      >
        Learn React
      </a>
    </header>
  </div>
);
