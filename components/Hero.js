import {
	SparklesIcon,
	ChartPieIcon,
	FireIcon,
} from '@heroicons/react/outline';

const locations = [
	{
		name: `Me n Ed's | Nipomo`,
		address: '110 Mary Ave #1 Nipomo, CA 93444',
		phone: '(805) 929-2915',
		href: '/locations/nipomo',
		icon: SparklesIcon,
	},
	{
		name: `Me n Ed's | Santa Maria`,
		address: '560 Betteravia Rd #1 Santa Maria, CA 93454',
		phone: '(805) 925-7992',
		href: '/locations/santa-maria',
		icon: ChartPieIcon,
	},
	{
		name: `Me n Ed's | Pismo`,
		address: '750 Price St Pismo Beach, CA 93449',
		phone: '(805) 556-3636',
		href: '/locations/pismo',
		icon: FireIcon,
	},
];

export default function Hero() {
	return (
		<div className='bg-gray-900'>
			<div className='relative pb-32'>
				<div className='absolute inset-0 bg-offset-315 bg-cover bg-bottom bg-fixed bg-no-repeat'>
					<div
						className='absolute inset-0 bg-gray-400 mix-blend-multiply'
						aria-hidden='true'
					/>
				</div>
				<div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
					<h1 className='text-4xl font-bold tracking-tight text-gray-100 filter drop-shadow-2xl md:text-5xl lg:text-6xl'>
						Me n Ed&apos;s of the Central Coast
					</h1>
					<p className='mt-6 max-w-3xl text-xl text-gray-200 filter drop-shadow-xl'>
						Bringing the Fresno classic to the Central Coast, come
						visit one of our beloved locations!
						<br />
						<q className='italic'>Two fun guys, one great pizza!</q>
					</p>
				</div>
			</div>
			<section
				className='-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8'
				aria-labelledby='contact-heading'>
				<h2 className='sr-only' id='contact-heading'>
					Locations
				</h2>
				<div className='grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8'>
					{locations.map((location) => (
						<div
							key={location.name}
							className='flex flex-col ring-1 ring-red-700 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl'>
							<div className='flex-1 relative pt-16 px-6 pb-8 bg-grunge-overlay bg-fixed md:px-8'>
								<div className='absolute top-0 p-5 inline-block bg-gradient-to-br from-red-700 to-red-600 rounded-xl shadow-lg transform -translate-y-1/2'>
									<location.icon
										className='h-6 w-6 text-black hover:text-white'
										aria-hidden='true'
									/>
								</div>
								<h3 className='text-xl font-medium text-gray-200'>
									{location.name}
								</h3>
								<p className='mt-4 text-base text-gray-300'>
									{location.address}
								</p>
								<p className='mt-4 text-base text-gray-300'>
									{location.phone}
								</p>
							</div>

							<div className='p-6 bg-gradient-to-br from-red-700 to-red-600 rounded-b-xl md:px-8'>
								<a
									href={location.href}
									className='text-base font-medium text-black hover:text-white'>
									See more<span aria-hidden='true'> &rarr;</span>
								</a>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
