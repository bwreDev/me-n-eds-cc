import Link from 'next/link';

export default function LogoCloud() {
  return (
    <div className='max-w-full'>
      <div className='bg-gradient-to-tr from-red-600 via-red-700 to-red-800 max-w-7xl mx-auto rounded-lg'>
        <div className='bg-grunge-overlay bg-cover bg-no-repeat bg-fixed'>
          <div className='max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
            <div className='flow-root mt-8'>
              <div className='flex flex-wrap justify-around'>
                <div className='flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0'>
                  <Link href='/locations'>
                    <a>
                      <img
                        className='h-16 md:h-20 lg:h-24'
                        src='/svg/me-n-eds-crafthouse.svg'
                        alt="Me and Ed's"
                      />
                    </a>
                  </Link>
                </div>
                <div className='flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0'>
                  <a
                    href='https://www.blastandbrewpismo.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      className='h-16 md:h-20 lg:h-24'
                      src='/images/blast&brew-2022.jpg'
                      alt='Blast and Brew'
                    />
                  </a>
                </div>
                <div className='flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0'>
                  <a
                    href='https://www.blast825brewery.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      className='h-16 md:h-20 lg:h-24'
                      src='/svg/blast-825-black-bg.svg'
                      alt='Blast 825 Brewery'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden border-t-2 border-grey-900 sm:px-6 lg:px-8'>
              <Link href='/'>
                <a>
                  <img
                    src='/svg/ccrg-outlined.svg'
                    className='h-20 md:24 lg:h-28 w-auto mx-auto'
                  />
                </a>
              </Link>
              <p className='mt-8 text-center text-base text-grey-200'>
                &copy; 2021 Central Coast Restaurant Group | All rights
                reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
