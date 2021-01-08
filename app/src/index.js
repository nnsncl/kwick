import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { GlobalStyles } from './styles/global-styles';

ReactDOM.render(
  <React.StrictMode>
    {/* Apply global styles to the app */}
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
