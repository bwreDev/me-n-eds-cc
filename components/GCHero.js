export default function GCHero() {
	return (
		<div className='relative max-w-7xl mx-auto mb-8'>
			<div className='h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
				<img
					className='w-full h-full object-cover'
					src='/images/ccrg-gc.jpg'
					alt='Blast 825 Gift Card Promo'
				/>
			</div>
			<div className='relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16 2xl:p-36'>
				<div className='md:ml-auto md:w-1/2 md:pl-10'>
					<h2 className='text-base font-semibold uppercase tracking-wider text-red-700'>
						Universal gift cards
					</h2>
					<p className='pt-2 text-grey-100 text-3xl font-extrabold tracking-tight sm:text-4xl'>
						Just in time for the holidays!
					</p>
					<p className='mt-3 mb-14 text-lg text-grey-300'>
						Now offering universal gift cards for our various
						locations and concepts. Come on in and ask about our
						offers in store!
					</p>
				</div>
			</div>
		</div>
	);
}
