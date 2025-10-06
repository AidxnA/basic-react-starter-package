import { Outlet } from 'react-router'

const MainLayout = () => {
	return (
		<>
			<h3>Header component</h3>
			<Outlet />
			<h3>Footer component</h3>
		</>
	)
}

export default MainLayout
