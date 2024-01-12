import { Navigate, useRoutes } from 'react-router-dom';

// // layouts

import Main_App from '../layouts/main';
// // config
import Pages from '../layouts/pages';
import More from '../layouts/more';
// // config
import { DEFAULT_PATH, DEFAULT_PATH_PAGES } from '../config';
import LandingPage from '../components/landing';
// pages
import {
	Home,
	Page404,
	About,
	Reset,
	Contact,
	Classes,
} from './page_routes';

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

				{ path: 'home', element: <Home /> },
			],
		},
		{ path: 'benj_band/homepage', element: <LandingPage /> },
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
				{ path: 'contact', element: <Contact /> },
			],
		},
		{
			path: '/more',
			element: <More />,
			children: [
				{
					element: <Navigate to={DEFAULT_PATH_PAGES} replace />,
					index: true,
				},

				{ path: 'enroll-classes', element: <Classes /> },
			],
		},

		{ path: '*', element: <Page404 /> },
	]);
}
