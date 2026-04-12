import { Button } from 'flowbite-react'
import { FaBeer } from 'react-icons/fa'
import { toast } from 'sonner'
import Hero from '../components/Hero'
import LandingPageSectionRedo from '../components/LandingPageSectionRedo'
import LandingPageHardwareIntegration from '../components/LandingPageHardwareIntegration'

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
			<LandingPageSectionRedo/>
			<LandingPageHardwareIntegration/>
		</section>
	)
}

export default HomePage
