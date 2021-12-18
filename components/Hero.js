import Image from 'next/image';
import Link from 'next/link';

const locations = [
	{
		name: `Me n Ed's | Nipomo`,
		address: '110 Mary Ave #1 Nipomo, CA 93444',
		mapUrl:
			'https://www.google.com/maps/place/110+Mary+Ave+%231,+Nipomo,+CA+93444/@35.0352389,-120.4891723,17z/data=!3m2!4b1!5s0x80ec685e6f00482b:0xfeede531d01d586c!4m5!3m4!1s0x80ec685e72eaf483:0xf719107640621b3d!8m2!3d35.0352345!4d-120.4869836',
		phone: '(805) 929-2915',
		href: '/locations/nipomo',
	},
	{
		name: `Me n Ed's | Santa Maria`,
		address: '560 Betteravia Rd #1 Santa Maria, CA 93454',
		mapUrl: `https://www.google.com/maps/place/Me-n-Ed's+Pizzeria+and+Crafthouse/@34.9222223,-120.4269557,19.75z/data=!4m13!1m7!3m6!1s0x80ec6caf97f4ee69:0x75eae2cd4551c3fc!2s560-E+Betteravia+Rd,+Santa+Maria,+CA+93454!3b1!8m2!3d34.9220772!4d-120.4263494!3m4!1s0x80ec6d87a7930705:0x269a6ac8accf07f0!8m2!3d34.9221626!4d-120.4266806`,
		phone: '(805) 925-7992',
		href: '/locations/santa-maria',
	},
	{
		name: `Me n Ed's | Pismo`,
		address: '750 Price St Pismo Beach, CA 93449',
		mapUrl: `https://www.google.com/maps/place/Me-n-Ed's+Pizzeria+and+Crafthouse/@35.1418512,-120.6401713,20.5z/data=!4m13!1m7!3m6!1s0x80ec58dd1df43131:0x5ff78d98d55bd461!2s750+Price+St,+Pismo+Beach,+CA+93449!3b1!8m2!3d35.142158!4d-120.640168!3m4!1s0x80ec59030c149fad:0x2692b7c9b9c3742b!8m2!3d35.1421029!4d-120.6402357`,
		phone: '(805) 556-3636',
		href: '/locations/pismo',
	},
];

export default function Hero() {
	return (
		<div className='bg-gray-900'>
			<div className='relative pb-36'>
				<div className='absolute inset-0 bg-offset-315 bg-top bg-fixed lg:bg-cover xl:bg-bottom'>
					<div
						className='absolute inset-0 bg-gray-500 mix-blend-multiply'
						aria-hidden='true'
					/>
				</div>
				<div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
					<h1 className='sr-only'>
						Me n Ed&apos;s of the Central Coast
					</h1>
					<Image
						src='/svg/me-n-eds-central-coast-white.svg'
						alt="Me and Ed's of the Central Coast"
						width={900}
						height={90}
					/>
					<p className='mt-6 text-md max-w-sm sm:max-w-3xl sm:text-xl text-gray-200 filter drop-shadow-xl'>
						Bringing the San Joaquin Valley classic to the Central
						Coast, come visit one of our beloved locations!
						<br />
						<q className='italic pl-6'>
							Two fun guys, one great pizza!
						</q>
					</p>
				</div>
			</div>
			<section
				className='-mt-28 max-w-7xl mx-auto relative z-10 pb-24 px-6 sm:px-8 lg:px-10'
				aria-labelledby='contact-heading'>
				<h2 className='sr-only' id='contact-heading'>
					Locations
				</h2>
				<div className='grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8'>
					{locations.map((location) => (
						<div
							key={location.name}
							className='flex flex-col ring-1 ring-red-700 bg-gray-900 rounded-2xl shadow-xl'>
							<div className='flex-1 relative pt-16 px-6 pb-8 bg-blast-overlay bg-top bg-fixed md:px-8 lg:bg-cover xl:bg-right-bottom'>
								<h3 className='text-xl font-medium text-gray-200'>
									<Link href={location.href}>
										<a className='hover:text-red-700 hover:underline'>
											{location.name}
										</a>
									</Link>
								</h3>
								<p className='mt-4 text-base text-gray-300'>
									<a
										href={location.mapUrl}
										target='_blank'
										rel='noreferrer'
										className='hover:text-red-700'>
										{location.address}
									</a>
								</p>
								<p className='mt-4 text-base text-gray-300'>
									<a
										href={`tel:${location.phone}`}
										className='hover:text-red-700'>
										{location.phone}
									</a>
								</p>
							</div>
							<div className='p-6 bg-gradient-to-br from-red-700 to-red-600 rounded-b-xl md:px-8'>
								<Link href={location.href}>
									<a className='text-base font-medium text-black hover:text-white'>
										More Info<span aria-hidden='true'> &rarr;</span>
									</a>
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
