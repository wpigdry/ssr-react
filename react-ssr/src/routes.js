import Home from './pages/home';
import Apost from './pages/aPost';

import fetchData from './helpers/fetchData';

export default [{
    path: '/',
    exact: true,
    component: Home
}, {
    path: '/postroute',
    exact: true,
    component: Apost,
    fetchData,
}];
