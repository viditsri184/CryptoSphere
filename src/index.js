import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router} from 'react-router-dom'
import "antd/dist/reset.css";
import { Provider } from 'react-redux';
import store from './app/store.js';

createRoot(document.getElementById('root')).render(
    <Router>
    <Provider store={store}>
        <App />
    </Provider>
    </Router>
)