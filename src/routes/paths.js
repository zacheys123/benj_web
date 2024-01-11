// ----------------------------------------------------------------------

function path(root, sublink) {
	return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/';

export const PATH_DASHBOARD = {
	root: ROOTS_DASHBOARD,
	general: {
		app: path(ROOTS_DASHBOARD, 'benj_band/homepage'),
		home: path(ROOTS_DASHBOARD, 'home'),
		about: path(ROOTS_DASHBOARD, 'about'),
		contact: path(ROOTS_DASHBOARD, 'pages/contact'),
		classes: path(ROOTS_DASHBOARD, 'pages/enroll-classes'),
		reset: path(ROOTS_DASHBOARD, 'pages/reset'),
	},
};
