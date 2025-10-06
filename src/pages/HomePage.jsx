import { Button } from 'flowbite-react'
import { FaBeer } from 'react-icons/fa'
import { toast } from 'sonner'

const HomePage = () => {
	const handleSubmit = () => {
		toast.success('toast is working!', {
			position: 'top-right',
		})
		// toast.error('toast is working!')
	}
	return (
		<section>
			<h3>this is HomePage</h3>
			<Button onClick={handleSubmit} color={'alternative'}>
				Click Me <FaBeer />
			</Button>
		</section>
	)
}

export default HomePage
