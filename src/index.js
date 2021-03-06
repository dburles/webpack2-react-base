import { MysticalProvider } from 'mystical';
import { render } from 'react-dom';
import App from './components/App.js';
import theme from './theme.js';

render(
  <MysticalProvider theme={theme}>
    <App />
  </MysticalProvider>,
  document.getElementById('root')
);
