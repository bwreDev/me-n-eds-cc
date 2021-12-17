import Link from 'next/link';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

const locations = [
	{
		name: `Me n Ed's | Nipomo`,
		address: '110 Mary Ave #1 Nipomo, CA 93444',
		phone: '(805) 929-2915',
		href: '/locations/nipomo',
	},
	{
		name: `Me n Ed's | Santa Maria`,
		address: '560 Betteravia Rd #1 Santa Maria, CA 93454',
		phone: '(805) 925-7992',
		href: '/locations/santa-maria',
	},
	{
		name: `Me n Ed's | Pismo`,
		address: '750 Price St Pismo Beach, CA 93449',
		phone: '(805) 556-3636',
		href: '/locations/pismo',
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Nav() {
	return (
		<Popover className='relative z-10'>
			<div className='flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
				<div className='flex justify-start lg:w-0 lg:flex-1'>
					<Link href='/'>
						<a>
							<span className='sr-only'>Me n Ed&apos;s</span>
							<img
								className='h-16 w-auto pl-6 sm:h-20 md:h-24 md:pl-10 lg:h-28 lg:pl-12'
								src='/svg/me-n-eds-crafthouse.svg'
								alt="Me n Ed's Logo"
							/>
						</a>
					</Link>
				</div>
				<div className='-mr-2 -my-2 md:hidden'>
					<Popover.Button className='bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-800'>
						<span className='sr-only'>Open menu</span>
						<MenuIcon className='h-6 w-6' aria-hidden='true' />
					</Popover.Button>
				</div>
				<Popover.Group as='nav' className='hidden md:flex space-x-10'>
					<Link href='/'>
						<a className='text-lg font-medium text-gray-200 hover:text-gray-400'>
							Home
						</a>
					</Link>
					<Link href='/locations'>
						<a className='text-lg font-medium text-gray-200 hover:text-gray-400'>
							Locations
						</a>
					</Link>
					<Popover className='relative'>
						{({ open }) => (
							<>
								<Popover.Button
									className={classNames(
										open ? 'text-gray-200' : 'text-gray-200',
										'group rounded-md inline-flex items-center text-lg font-medium hover:text-gray-400 focus:outline-none'
									)}>
									<span>Stores</span>
									<ChevronDownIcon
										className={classNames(
											open ? 'text-red-700' : 'text-gray-200',
											'ml-2 h-5 w-5 group-hover:text-gray-400'
										)}
										aria-hidden='true'
									/>
								</Popover.Button>
								<Transition
									as={Fragment}
									enter='transition ease-out duration-200'
									enterFrom='opacity-0 translate-y-1'
									enterTo='opacity-100 translate-y-0'
									leave='transition ease-in duration-150'
									leaveFrom='opacity-100 translate-y-0'
									leaveTo='opacity-0 translate-y-1'>
									<Popover.Panel className='absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
										<div className='rounded-lg shadow-lg ring-1 ring-white ring-opacity-20 overflow-hidden'>
											<div className='relative grid gap-6 bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-3'>
												{locations.map((location) => (
													<Link
														href={location.href}
														key={location.name}>
														<a className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800'>
															<div className='ml-4'>
																<p className='text-base font-medium text-gray-200'>
																	{location.name}
																</p>
																<p className='mt-1 text-sm text-gray-300'>
																	{location.address}
																</p>
																<p className='mt-1 text-sm text-gray-300'>
																	{location.phone}
																</p>
															</div>
														</a>
													</Link>
												))}
											</div>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						)}
					</Popover>
				</Popover.Group>
				<div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'></div>
			</div>

			<Transition
				as={Fragment}
				enter='duration-200 ease-out'
				enterFrom='opacity-0 scale-95'
				enterTo='opacity-100 scale-100'
				leave='duration-100 ease-in'
				leaveFrom='opacity-100 scale-100'
				leaveTo='opacity-0 scale-95'>
				<Popover.Panel
					focus
					className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
					<div className='rounded-lg shadow-lg ring-2 ring-white ring-opacity-5 bg-gray-900 bg-grunge-overlay bg-fixed divide-y-2 divide-gray-50'>
						<div className='pt-5 pb-6 px-5'>
							<div className='flex items-center justify-between border-b-2 pb-4 border-red-700'>
								<div>
									<img
										className='h-16 w-auto'
										src='/svg/me-n-eds-crafthouse.svg'
										alt="Me n Ed's Logo"
									/>
								</div>
								<Link href='/'>
									<a className='text-gray-100 hover:text-gray-400'>
										Home
									</a>
								</Link>
								<Link href='/locations'>
									<a className='text-gray-100 hover:text-gray-400'>
										Locations
									</a>
								</Link>
								<div className='-mr-2'>
									<Popover.Button className='bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-300 hover:text-gray-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700'>
										<span className='sr-only'>Close menu</span>
										<XIcon className='h-6 w-6' aria-hidden='true' />
									</Popover.Button>
								</div>
							</div>
							<div className='mt-6'>
								<nav className='grid grid-cols-1 gap-7'>
									{locations.map((location) => (
										<a
											key={location.name}
											href={location.href}
											className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-700'>
											<div className='ml-4 text-base font-medium text-gray-200'>
												{location.name}
											</div>
										</a>
									))}
								</nav>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
