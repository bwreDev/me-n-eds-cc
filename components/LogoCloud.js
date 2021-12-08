import Link from 'next/link';

export default function LogoCloud() {
	return (
		<div className='bg-gradient-to-tr from-red-600 via-red-700 to-red-800'>
			<div className='bg-grunge-overlay bg-left-bottom'>
				<div className='max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
					<div className='flow-root mt-8'>
						<div className='flex flex-wrap justify-around'>
							<div className='flex flex-grow flex-shrink-0 lg:flex-grow-0'>
								<Link href='/'>
									<a>
										<img
											className='h-12 sm:h-16 md:h-20 lg:h-24'
											src='/ccrg-outlined.svg'
											alt='Central Coast Restaurant Group'
										/>
									</a>
								</Link>
							</div>
							<div className='flex flex-grow flex-shrink-0 lg:flex-grow-0'>
								<img
									className='h-12 sm:h-16 md:h-20 lg:h-24'
									src='/blast-n-brew-center.svg'
									alt='Blast and Brew'
								/>
							</div>
							<div className='flex flex-grow flex-shrink-0 lg:flex-grow-0'>
								<img
									className='h-12 sm:h-16 md:h-20 lg:h-24'
									src='/me-n-eds-logo.svg'
									alt="Me and Ed's"
								/>
							</div>
							<div className='flex flex-grow flex-shrink-0 lg:flex-grow-0'>
								<img
									className='h-12 sm:h-16 md:h-20 lg:h-24'
									src='/blast-825-black-bg.svg'
									alt='Blast 825 Brewery'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
