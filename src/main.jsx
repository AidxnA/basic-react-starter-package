import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import routes from './routes/routes.jsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Toaster />
		<RouterProvider router={routes}></RouterProvider>
	</StrictMode>,
)
