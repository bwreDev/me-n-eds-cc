const navigation = {
	main: [
		{ name: 'Home', href: '/' },
		{ name: 'Locations', href: '/locations' },
	],
};

export default function Footer() {
	return (
		<footer className='bg-gray-900'>
			<div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
				<nav
					className='-mx-5 -my-2 flex flex-wrap justify-center'
					aria-label='Footer'>
					{navigation.main.map((item) => (
						<div key={item.name} className='px-5 py-2'>
							<a
								href={item.href}
								className='text-base font-medium text-gray-200 hover:text-gray-400'>
								{item.name}
							</a>
						</div>
					))}
				</nav>
				<p className='mt-8 text-center text-base text-gray-400'>
					&copy; 2021 Central Coast Restaurant Group | All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}
