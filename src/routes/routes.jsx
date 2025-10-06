import { createBrowserRouter } from 'react-router'

import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'

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
				path: 'products',
				Component: ProductsPage,
			},
		],
	},
])

export default routes
