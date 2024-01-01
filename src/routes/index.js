import { Navigate, useRoutes } from 'react-router-dom';

// // layouts

import Main_App from '../layouts/main';
// // config
import Pages from '../layouts/pages';
// // config
import { DEFAULT_PATH, DEFAULT_PATH_PAGES } from '../config';

// pages
import { Home, Page404, About, Reset } from './page_routes';
import LandingPage from '../pages/LandingPage';
export default function Router() {
	return useRoutes([
		{
			path: '/',
			element: <Main_App />,
			children: [
				{
					element: <Navigate to={DEFAULT_PATH} replace />,
					index: true,
				},
				{ path: 'landing', element: <LandingPage /> },
				{ path: 'home', element: <Home /> },
			],
		},
		{
			path: '/pages',
			element: <Pages />,
			children: [
				{
					element: <Navigate to={DEFAULT_PATH_PAGES} replace />,
					index: true,
				},
				{ path: 'reset', element: <Reset /> },
				{ path: 'about', element: <About /> },
			],
		},

		{ path: '*', element: <Page404 /> },
	]);
	return (
		<div>
			<h2>Hello</h2>
		</div>
	);
}
