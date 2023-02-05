// import { BrowserRouter } from 'react-router-dom';

import { initApiService } from 'services/ApiService';
import App from './App';

// const ROUTE_BASENAME = process.env.REACT_APP_ROOT_CONTEXT_PATH;

initApiService();

const Root = () => (
    <div className="app-wrapper">
        <App />
    </div>
);

export default Root;
