import Nav from './Nav';
import LogoCloud from './LogoCloud';
import GCHero from './GCHero';

export default function Layout({ children }) {
	return (
		<div className='bg-gray-900'>
			<div className='bg-grunge-overlay bg-cover bg-fixed'>
				<div className='h-full bg-gray-900 max-w-7xl mx-auto xl:p-8'>
					<Nav />
					<main>{children}</main>
					<GCHero />
					<LogoCloud />
				</div>
			</div>
		</div>
	);
}
