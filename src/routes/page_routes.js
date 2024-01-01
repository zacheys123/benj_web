import { Suspense, lazy } from 'react';

import LoadingScreen from '../components/LoadingScreen';
const Loadable = (Component) => (props) => {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);
};

const Home = Loadable(lazy(() => import('../pages/Home')));

const Page404 = Loadable(lazy(() => import('../pages/Page404')));
const About = Loadable(lazy(() => import('../pages/About')));

const Reset = Loadable(lazy(() => import('../pages/Reset')));

export { Home, Page404, About, Reset };
