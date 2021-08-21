/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { NextSeo } from 'next-seo';
import About from '../components/About';
import VisionWalk from '../components/VisionWalk';
import Footer from '../components/Footer';

import Link from 'next/link';

const navigation = {
  pages: [
    { name: 'Blue Eyed Blondes', href: '/' },
    {
      name: 'Vision Walk',
      href: 'https://give.fightingblindness.org/event/chicago-visionwalk-2022/e348800'
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/blueeyedblondes2/'
    }
  ]
};

const Index = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NextSeo
        title='Welcome'
        additionalMetaTags={[
          {
            property: 'author',
            content: 'Ryan Huellen'
          }
        ]}
      />
      <div>
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 flex z-40 lg:hidden'
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
                <div className='px-4 pt-5 pb-2 flex'>
                  <button
                    type='button'
                    className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                    onClick={() => setOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                <div className='mt-2 border-t border-gray-200 py-6 px-4 space-y-6'>
                  {navigation.pages.map((page) => (
                    <div key={page.name} className='flow-root'>
                      {page.href === '/' && (
                        <Link href='/'>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            className='-m-2 p-2 block font-medium text-gray-900'
                          >
                            {page.name}
                          </a>
                        </Link>
                      )}
                      {page.href !== '/' && (
                        <a
                          href={page.href}
                          target='_blank'
                          rel='noreferrer'
                          className='-m-2 p-2 block font-medium text-gray-900'
                        >
                          {page.name}
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
                  <div className='flow-root'>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://give.fightingblindness.org/give/348800/#!/donation/checkout'
                      className='-m-2 p-2 block font-medium text-gray-900'
                    >
                      Donate now
                    </a>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <header className='relative overflow-hidden'>
          {/* Top navigation */}
          <nav aria-label='Top' className='relative z-20'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='h-16 flex items-center'>
                <button
                  type='button'
                  className='p-2 rounded-md text-yellow-400 lg:hidden'
                  onClick={() => setOpen(true)}
                >
                  <span className='sr-only'>Open menu</span>
                  <MenuIcon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Logo */}
                <div className='ml-4 flex lg:ml-0'>
                  <Link href='/'>
                    <a>
                      <span className='sr-only'>Blue Eyed Blondes</span>
                      <img
                        className='h-8 w-auto'
                        src='/beb.svg'
                        alt='Blue Eyed Blondes'
                      />
                    </a>
                  </Link>
                </div>

                {/* Flyout menus */}
                <Popover.Group className='hidden lg:ml-8 lg:block lg:self-stretch'>
                  <div className='h-full flex space-x-8'>
                    {navigation.pages.map((page) => (
                      <a
                        key={page.name}
                        href={page.href}
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center text-sm font-medium text-white hover:text-yellow-400'
                      >
                        {page.name}
                      </a>
                    ))}
                  </div>
                </Popover.Group>

                <div className='ml-auto flex items-center'>
                  <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://give.fightingblindness.org/give/348800/#!/donation/checkout'
                      className='bg-yellow-400 shadow-sm px-4 py-2 rounded-full hover:bg-indigo-700 text-sm font-medium text-white'
                    >
                      Donate now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero section */}
          <div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
            <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static'>
              <div className='sm:max-w-lg'>
                <h1 className='text-4xl font font-extrabold tracking-tight text-white sm:text-6xl'>
                  We're fighting against usher syndrome.
                </h1>
                <p className='mt-4 text-xl text-white'>
                  Each year, we (Brittany Huellen and Kailyn Huellen) and our
                  family fight against usher syndrome by raising money and
                  spreading awareness about our rare genetic disorder in
                  collaboration with Foundation Fighting Blindness.
                </p>
              </div>
              <div>
                <div className='mt-10'>
                  {/* Decorative image grid */}
                  <div
                    aria-hidden='true'
                    className='pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full'
                  >
                    <div className='absolute sm:left-1/2 pt-6 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                      <div className='flex items-center space-x-6 lg:space-x-8'>
                        <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                          <div className='w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100'>
                            <img
                              src='/photos/1.jpeg'
                              alt='Kailyn Huellen, Brittany Huellen, and others.'
                              className='shadow-sm w-full h-full object-center object-cover'
                            />
                          </div>
                          <div className='w-44 h-64 rounded-lg overflow-hidden'>
                            <img
                              src='/photos/2.JPG'
                              alt='Kailyn Huellen, Brittany Huellen, and others.'
                              className='shadow-sm w-full h-full object-center object-cover'
                            />
                          </div>
                        </div>
                        <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                          <div className='w-44 h-64 rounded-lg overflow-hidden'>
                            <img
                              src='/photos/3.JPG'
                              alt='Kailyn Huellen, Brittany Huellen, and others.'
                              className='shadow-sm w-full h-full object-center object-cover'
                            />
                          </div>
                          <div className='w-44 h-64 rounded-lg overflow-hidden'>
                            <img
                              src='/photos/4.JPG'
                              alt='Kailyn Huellen, Brittany Huellen, and others.'
                              className='shadow-sm w-full h-full object-center object-cover'
                            />
                          </div>
                          <div className='w-44 h-48 rounded-lg overflow-hidden'>
                            <img
                              src='/photos/5.JPG'
                              alt='Kailyn Huellen, Brittany Huellen, and others.'
                              className='shadow-sm w-full h-full object-center object-cover'
                            />
                          </div>
                        </div>
                        <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                          <div className='w-44 h-64 rounded-lg overflow-hidden'>
                            <img
                              src='/photos/6.JPG'
                              alt='Kailyn Huellen, Brittany Huellen, and others.'
                              className='shadow-sm w-full h-full object-center object-cover'
                            />
                          </div>
                          <div className='w-44 h-64 rounded-lg overflow-hidden'>
                            <img
                              src='/photos/7.JPG'
                              alt='Kailyn Huellen, Brittany Huellen, and others.'
                              className='shadow-sm w-full h-full object-center object-cover'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://give.fightingblindness.org/give/348800/#!/donation/checkout'
                    className='rounded-full shadow-sm inline-block text-center bg-yellow-400 border border-transparent py-3 px-8 font-medium text-white hover:bg-indigo-700'
                  >
                    Donate now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          <About />
          <VisionWalk />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
