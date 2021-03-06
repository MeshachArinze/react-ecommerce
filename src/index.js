import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import App from './App';
import { AppProvider } from './pages/Cart/Context';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
