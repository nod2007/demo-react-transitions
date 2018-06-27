import Home from './../containers/Home';
import Article from './../containers/Article';

const routes = [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		path: '/article',
		component: Article,
		exact: true
	}
];

export default routes;