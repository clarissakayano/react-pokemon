import React, { Suspense } from 'react';

import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';

import { PokemonProvider } from 'context/PokemonsContext';

import GraphQLClient from 'services/Apollo';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'services/i18n';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <ApolloProvider client={GraphQLClient}>
        <PokemonProvider>
          <App />
        </PokemonProvider>
      </ApolloProvider>
    </Suspense>
  </React.StrictMode>,
);
