// ----------------------------------------------------------------------

function path(root, sublink) {
	return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/';

export const PATH_DASHBOARD = {
	root: ROOTS_DASHBOARD,
	general: {
		app: path(ROOTS_DASHBOARD, 'landing'),
		home: path(ROOTS_DASHBOARD, 'home'),
		about: path(ROOTS_DASHBOARD, 'about'),
		reset: path(ROOTS_DASHBOARD, 'pages/reset'),
	},
};
