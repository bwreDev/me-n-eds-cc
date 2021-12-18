const santaMaria = {
	name: `Me n Ed's | Santa Maria`,
	href: '/locations',
	address: '560 Betteravia Rd Ste B Santa Maria, CA 93454',
	phone: '(805) 925-7992',
	email: 'info@cc-rg.com',
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
};

export default function SMHero() {
	return (
		<>
			<div className='relative pb-32'>
				<div className='absolute inset-0'>
					<img
						className='w-full h-full object-cover'
						src='/images/me-n-eds-sm-interior.jpg'
						alt='Me n Eds Santa Maria'
					/>
					<div
						className='absolute inset-0 bg-gray-600 mix-blend-multiply'
						aria-hidden='true'
					/>
				</div>
				<div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
					<h1>
						<span className='sr-only'>
							Me and Ed&apos;s | Santa Maria
						</span>
						<img
							src='/svg/me-n-eds-santa-maria-white.svg'
							alt='Me-n-Eds Santa Maria'
						/>
					</h1>
					<p className='mt-6 max-w-3xl text-xl text-gray-300'>
						The classic pizzeria and craft house in Santa Maria
						returns with a fresh look!
						<br />
						<q className='italic p-6'>
							Two fun guys, one great pizza!
						</q>
					</p>
				</div>
			</div>
			<section
				className='-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8'
				aria-labelledby='contact-heading'>
				<h2 className='sr-only' id='contact-heading'>
					Store Information
				</h2>
				<div className='max-w-xl mx-auto bg-gray-900'>
					<div className='flex flex-col bg-grunge-overlay bg-cover bg-fixed border-2 border-red-700 rounded-2xl shadow-xl'>
						<div className='flex-1 relative pt-16 px-6 pb-8 md:px-8'>
							<h3 className='text-xl font-medium text-gray-100'>
								<a
									href={santaMaria.mapUrl}
									target='_blank'
									rel='noopener noreferrer'
									className='hover:text-red-700'>
									{santaMaria.address}
								</a>
							</h3>
							<p className='mt-4 text-base text-gray-300'>
								<a href={`tel:${santaMaria.phone}`}>
									{santaMaria.phone}
								</a>
								<br />
								<a href={`mailto:${santaMaria.email}`}>
									{santaMaria.email}
								</a>
							</p>
							<ul className='text-gray-400 text-right pt-6'>
								<li>
									Mon -
									<time dateTime={santaMaria.hours.monday}>
										{santaMaria.hours.monday}
									</time>
								</li>
								<li>
									Tue -
									<time dateTime={santaMaria.hours.tuesday}>
										{santaMaria.hours.tuesday}
									</time>
								</li>
								<li>
									Wed -
									<time dateTime={santaMaria.hours.wednesday}>
										{santaMaria.hours.wednesday}
									</time>
								</li>
								<li>
									Thu -
									<time dateTime={santaMaria.hours.thursday}>
										{santaMaria.hours.thursday}
									</time>
								</li>
								<li>
									Fri -
									<time dateTime={santaMaria.hours.friday}>
										{santaMaria.hours.friday}
									</time>
								</li>
								<li>
									Sat -
									<time dateTime={santaMaria.hours.saturday}>
										{santaMaria.hours.saturday}
									</time>
								</li>
								<li>
									Sun -
									<time dateTime={santaMaria.hours.sunday}>
										{santaMaria.hours.sunday}
									</time>
								</li>
							</ul>
						</div>
						<div className='p-6 rounded-bl-2xl rounded-br-2xl md:px-8'>
							<ul className='flex'>
								<li className='p-2'>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href={santaMaria.social.facebook}>
										<svg
											className='fill-current text-gray-700 hover:text-red-700'
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
										href={santaMaria.social.instagram}>
										<svg
											className='fill-current text-gray-700 hover:text-red-700'
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
										href={santaMaria.social.yelp}>
										<svg
											className='fill-current text-gray-700 hover:text-red-700'
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
			</section>
		</>
	);
}
