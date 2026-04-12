import { createBrowserRouter } from 'react-router'

import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import Dashboard from '../pages/Dashboard'
import Route1 from '../pages/Route1'
import Analytics from '../pages/Analytics'
import SubscriptionsPage from '../pages/SubscriptionsPage'

const routes = createBrowserRouter([
	{
		path: '/',
		Component: MainLayout,
		children: [
			{
				index: true,
				Component: HomePage,
			},
			{
				path: 'dashboard',
				Component: Dashboard,
			},
			{
				path: 'routes',
				Component: Route1,
			},
			{
				path: 'analytics',
				Component: Analytics,
			},
			{
				path: 'subscription',
				Component: SubscriptionsPage,
			},
		],
	},
])

export default routes
