// // routes
// routes
import Router from './routes';
// theme
// import Router from './routes';
// // theme
import { PATH_DASHBOARD } from './routes/paths';
// import './App.css';
// import { imageListClasses } from '@mui/material';
// import { PATH_DASHBOARD } from './routes/paths';
import { useNavigate } from 'react-router-dom';
function App() {
	// const nav = useNavigate();
	// const user = JSON.parse(localStorage.getItem('user'));
	// if (user) {
	// 	nav(PATH_DASHBOARD.general.login);
	// }

	return <Router />;
}

export default App;
