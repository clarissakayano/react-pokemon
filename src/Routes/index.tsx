import { memo } from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Pokemon from 'pages/Pokemon';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Pokemon />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default memo(Routes);
