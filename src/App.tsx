import { memo } from 'react';

import GlobalStyles from 'components/styles/GlobalStyles';

import Routes from 'Routes';

const App: React.FC = () => (
  <>
    <Routes />
    <GlobalStyles />
  </>
);

export default memo(App);
