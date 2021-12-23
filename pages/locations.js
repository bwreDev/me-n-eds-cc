import Link from 'next/link';
import Head from 'next/head';

const locations = [
	{
		name: `Me n Ed's | Nipomo`,
		href: '/locations/nipomo',
		address: '110 Mary Ave #1 Nipomo, CA 93444',
		phone: '(805) 929-2915',
		email: 'nipomo.meneds@cc-rg.com',
		emailSubject: "Contact Nipomo Me-n-Ed's | ",
		hours: {
			monday: '11:00am - 9:00pm',
			tuesday: '11:00am - 9:00pm',
			wednesday: '11:00am - 9:00pm',
			thursday: '11:00am - 9:00pm',
			friday: '11:00am - 10:00pm',
			saturday: '11:00am - 10:00pm',
			sunday: '11:00am - 9:00pm',
		},
		social: {
			facebook: 'https://www.facebook.com/NipomoMeNEdsPizzeria/',
			instagram: 'https://www.instagram.com/meneds_nipomo/',
			yelp: 'https://www.yelp.com/biz/me-n-eds-pizzeria-nipomo?osq=me+n+eds',
		},
		mapUrl:
			'https://www.google.com/maps/place/110+Mary+Ave+%231,+Nipomo,+CA+93444/@35.0352389,-120.4891723,17z/data=!3m2!4b1!5s0x80ec685e6f00482b:0xfeede531d01d586c!4m5!3m4!1s0x80ec685e72eaf483:0xf719107640621b3d!8m2!3d35.0352345!4d-120.4869836',
		imageUrl: '/images/nipomo-ext-me-n-eds.jpg',
	},
	{
		name: `Me n Ed's | Santa Maria`,
		href: '/locations/santa-maria',
		address: '560 Betteravia Rd Ste B Santa Maria, CA 93454',
		phone: '(805) 925-7992',
		email: 'santamaria.meneds@cc-rg.com',
		emailSubject: "Contact Santa Maria Me-n-Ed's | ",
		hours: {
			monday: '11:00am - 10:00pm',
			tuesday: '11:00am - 10:00pm',
			wednesday: '11:00am - 10:00pm',
			thursday: '11:00am - 11:00pm',
			friday: '11:00am - 11:00pm',
			saturday: '11:00am - 11:00pm',
			sunday: '11:00am - 10:00pm',
		},
		social: {
			facebook:
				'https://www.facebook.com/Me-N-Eds-Pizzeria-and-Craft-House-Santa-Maria-107905798246434',
			instagram: 'https://www.instagram.com/meneds_santamaria/',
			yelp: 'https://www.yelp.com/biz/me-n-ed-s-pizzeria-and-crafthouse-santa-maria?osq=me+n+eds',
		},
		mapUrl: `https://www.google.com/maps/place/Me-n-Ed's+Pizzeria+and+Crafthouse/@34.9222223,-120.4269557,19.75z/data=!4m13!1m7!3m6!1s0x80ec6caf97f4ee69:0x75eae2cd4551c3fc!2s560-E+Betteravia+Rd,+Santa+Maria,+CA+93454!3b1!8m2!3d34.9220772!4d-120.4263494!3m4!1s0x80ec6d87a7930705:0x269a6ac8accf07f0!8m2!3d34.9221626!4d-120.4266806`,
		imageUrl: '/images/sm-ext-me-n-eds.jpg',
	},
	{
		name: `Me n Ed's | Pismo`,
		href: '/locations/pismo',
		address: '750 Price St Pismo Beach, CA 93449',
		phone: '(805) 556-3636',
		email: 'pismo.meneds@cc-rg.com',
		emailSubject: "Contact Pismo Me-n-Ed's | ",
		hours: {
			monday: '11:00am - 10:00pm',
			tuesday: '11:00am - 10:00pm',
			wednesday: '11:00am - 10:00pm',
			thursday: '11:00am - 11:00pm',
			friday: '11:00am - 11:00pm',
			saturday: '11:00am - 11:00pm',
			sunday: '11:00am - 10:00pm',
		},
		social: {
			facebook: 'https://www.facebook.com/menedspismo/',
			instagram: 'https://www.instagram.com/menedspismobeach/',
			yelp: 'https://www.yelp.com/biz/me-n-ed-s-pizzeria-and-craft-house-pismo-beach-2?osq=me+n+eds',
		},
		mapUrl: `https://www.google.com/maps/place/Me-n-Ed's+Pizzeria+and+Crafthouse/@35.1418512,-120.6401713,20.5z/data=!4m13!1m7!3m6!1s0x80ec58dd1df43131:0x5ff78d98d55bd461!2s750+Price+St,+Pismo+Beach,+CA+93449!3b1!8m2!3d35.142158!4d-120.640168!3m4!1s0x80ec59030c149fad:0x2692b7c9b9c3742b!8m2!3d35.1421029!4d-120.6402357`,
		imageUrl: '/images/pismo-ext-me-n-eds.jpg',
	},
];

export default function Locations() {
	return (
		<>
			<Head>
				<title>Me-n-Ed&apos;s CC | Locations</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
				<meta name='author' content='Colton Bonner' />
				<meta
					name='description'
					content="Me-n-Ed's of the Central Coast brings you the San Joaquin classic pizzeria to locations up and down the central coast. Come have a slice with us! All locations are officially open in Nipomo, Santa Maria, and Pismo."
				/>
				<meta property='og:title' content="Me-n-Ed's Central Coast" />
				<meta
					property='og:description'
					content="Me-n-Ed's of the Central Coast brings you the San Joaquin classic pizzeria to locations up and down the central coast. Come have a slice with us! All locations are officially open in Nipomo, Santa Maria, and Pismo."
				/>
				<meta
					property='og:image'
					content='/images/me-n-eds-crafthouse.png'
				/>
				<meta property='og:url' content='' />
			</Head>
			<div className='max-w-7xl mx-auto'>
				<div className='relative pt-2 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8'>
					<div className='absolute inset-0'>
						<div className='h-1/3 sm:h-2/3' />
					</div>
					<div className='relative max-w-7xl mx-auto'>
						<div className='text-center'>
							<h1 className='sr-only'>Locations</h1>
						</div>
						<div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
							{locations.map((location) => (
								<div
									key={location.name}
									className='flex flex-col rounded-lg border-4 border-red-700 shadow-lg overflow-hidden'>
									<div className='flex-shrink-0'>
										<img
											className='h-72 w-full object-cover'
											src={location.imageUrl}
											alt={location.name}
										/>
									</div>
									<div className='flex-1 bg-blast-overlay bg-bottom bg-fixed p-6 flex flex-col justify-between'>
										<div className='flex-1'>
											<Link href={location.href}>
												<a>
													<h2 className='block mt-2 text-xl font-semibold text-grey-100 hover:text-red-700 hover:underline'>
														{location.name}
													</h2>
												</a>
											</Link>

											<h3 className='sr-only'>Location Info</h3>
											<p className='mt-3 text-base text-grey-300 pb-5'>
												<a
													href={location.mapUrl}
													target='_blank'
													rel='noreferrer'
													className='hover:text-red-700'>
													{location.address}
												</a>
												<br />
												<a
													href={`tel:${location.phone}`}
													className='hover:text-red-700'>
													{location.phone}
												</a>
												<br />
												<a
													className='hover:text-red-700'
													href={`mailto:${location.email}?cc=wendy@cc-rg.com, dferdinandi@blast825taproom.com&subject=${location.emailSubject}`}>
													{location.email}
												</a>
											</p>
											<h3 className='sr-only'>Hours</h3>
											<ul className='text-grey-400 text-base text-right p-4'>
												<li>
													Mon -
													<time dateTime={location.hours.monday}>
														{location.hours.monday}
													</time>
												</li>
												<li>
													Tue -
													<time dateTime={location.hours.tuesday}>
														{location.hours.tuesday}
													</time>
												</li>
												<li>
													Wed -
													<time dateTime={location.hours.wednesday}>
														{location.hours.wednesday}
													</time>
												</li>
												<li>
													Thu -
													<time dateTime={location.hours.thursday}>
														{location.hours.thursday}
													</time>
												</li>
												<li>
													Fri -
													<time dateTime={location.hours.friday}>
														{location.hours.friday}
													</time>
												</li>
												<li>
													Sat -
													<time dateTime={location.hours.saturday}>
														{location.hours.saturday}
													</time>
												</li>
												<li>
													Sun -
													<time dateTime={location.hours.sunday}>
														{location.hours.sunday}
													</time>
												</li>
											</ul>

											<ul className='flex inline-flex'>
												<li className='p-2'>
													<a
														target='_blank'
														rel='noopener noreferrer'
														href={location.social.facebook}>
														<svg
															className='fill-current text-grey-700 hover:text-red-700'
															xmlns='http://www.w3.org/2000/svg'
															viewBox='0 0 48 48'
															width='48px'
															height='48px'>
															<path d='M42,11.5v25c0,3.03-2.47,5.5-5.5,5.5H31V28h3.62c0.51,0,0.94-0.38,1-0.88l0.37-3c0.04-0.28-0.05-0.57-0.24-0.78 C35.56,23.12,35.29,23,35,23h-4v-3.5c0-1.1,0.9-2,2-2h2c0.55,0,1-0.45,1-1v-3.38c0-0.51-0.4-0.94-0.91-0.99 C35.03,12.12,33.62,12,31.83,12c-4.4,0-6.83,2.62-6.83,7.37V23h-4c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h4v14H11.5 C8.47,42,6,39.53,6,36.5v-25C6,8.47,8.47,6,11.5,6h25C39.53,6,42,8.47,42,11.5z' />
														</svg>
													</a>
												</li>
												<li className='p-2'>
													<a
														target='_blank'
														rel='noopener noreferrer'
														href={location.social.instagram}>
														<svg
															className='fill-current text-grey-700 hover:text-red-700'
															xmlns='http://www.w3.org/2000/svg'
															viewBox='0 0 48 48'
															width='48px'
															height='48px'>
															<path d='M 16.5 5 C 10.159 5 5 10.159 5 16.5 L 5 31.5 C 5 37.841 10.159 43 16.5 43 L 31.5 43 C 37.841 43 43 37.841 43 31.5 L 43 16.5 C 43 10.159 37.841 5 31.5 5 L 16.5 5 z M 34 12 C 35.105 12 36 12.895 36 14 C 36 15.104 35.105 16 34 16 C 32.895 16 32 15.104 32 14 C 32 12.895 32.895 12 34 12 z M 24 14 C 29.514 14 34 18.486 34 24 C 34 29.514 29.514 34 24 34 C 18.486 34 14 29.514 14 24 C 14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z' />
														</svg>
													</a>
												</li>
												<li className='p-2'>
													<a
														target='_blank'
														rel='noopener noreferrer'
														href={location.social.yelp}>
														<svg
															className='fill-current text-grey-700 hover:text-red-700'
															xmlns='http://www.w3.org/2000/svg'
															viewBox='0 0 48 48'
															width='48px'
															height='48px'>
															<path d='M20.373 21.397c.302.414.733.599 1.159.599.742 0 1.468-.563 1.468-1.456V5.018c0-.517-.396-.961-.912-.997-.469-.033-.922-.048-1.359-.048-5.481 0-8.456 2.424-9.488 3.586-.309.348-.336.86-.067 1.241L20.373 21.397zM20.102 25.633l-9.247-3.549c-.151-.058-.309-.086-.464-.086-.367 0-.724.157-.971.45C8.848 23.128 8 24.633 8 27c0 2.418.754 4.416 1.332 5.372.24.397.661.622 1.097.622.18 0 .362-.038.536-.118l9.237-4.46C21.343 27.81 21.283 26.156 20.102 25.633zM27.584 26.006l10.567-.652c.58-.083.964-.639.835-1.21-.475-2.1-2.028-7.193-6.019-9.05-.137-.064-.282-.094-.425-.094-.349 0-.686.18-.872.498l-5.432 8.189c-.645 1.011.09 2.321 1.268 2.321C27.532 26.008 27.558 26.007 27.584 26.006zM21.821 31.006c-.392 0-.792.141-1.123.453l-7.363 6.94c-.4.36-.45.977-.098 1.385 1.135 1.313 4.38 3.898 9.68 4.219.021.001.043.002.064.002.566 0 1.035-.458 1.018-1.032l-.517-10.393C23.434 31.626 22.644 31.006 21.821 31.006zM39.266 31.003l-10.356-1.981c-.117-.026-.232-.038-.344-.038-1.121 0-1.925 1.214-1.37 2.28l4.939 9.21c.186.325.525.507.871.507.187 0 .376-.053.544-.166 1.609-1.078 5.405-3.91 6.433-8.608C40.099 31.677 39.792 31.143 39.266 31.003z' />
														</svg>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
