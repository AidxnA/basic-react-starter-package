import { Button } from 'flowbite-react'
import { FaBeer } from 'react-icons/fa'
import { toast } from 'sonner'
import Hero from '../components/Hero'

const HomePage = () => {
	const handleSubmit = () => {
		toast.success('toast is working!', {
			position: 'top-right',
		})
		// toast.error('toast is working!')
	}
	return (
		<section classNameName="pt-20">
			<Hero/>
		</section>
	)
}

export default HomePage
