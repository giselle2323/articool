import React, {useState, Fragment} from "react";
import Link from "next/link";
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
export default function Sidebar({setSidebarOpen, sidebarOpen}) {

  const navigation = [
    { name: 'Components', href: '#', icon: HomeIcon, current: true },
    { name: 'Articles', href: '#', icon: UsersIcon, current: false },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  return (
    <>
    <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4 text-blue-light_500 font-bold text-xl md:text-2xl">
                <svg width="141" height="53" viewBox="0 0 141 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.78269 34L9.49437 10.179H14.3947L23.1064 34H18.4783L16.5726 28.4871H7.28242L5.34271 34H0.78269ZM8.47347 25.0841H15.3816L11.9105 15.1814L8.47347 25.0841ZM25.2221 34V17.1211H29.1015L29.5099 20.2859C30.1224 19.1969 30.9505 18.3349 31.994 17.6996C33.0603 17.0417 34.3081 16.7128 35.7373 16.7128V21.3068H34.5123C33.5594 21.3068 32.7087 21.4543 31.96 21.7492C31.2114 22.0441 30.6215 22.5546 30.1905 23.2805C29.7821 24.0065 29.5779 25.0161 29.5779 26.3092V34H25.2221ZM45.3843 34C43.6148 34 42.1968 33.569 41.1306 32.7069C40.0643 31.8448 39.5312 30.3134 39.5312 28.1128V20.7623H36.6386V17.1211H39.5312L40.0416 12.5951H43.887V17.1211H48.447V20.7623H43.887V28.1468C43.887 28.9636 44.0572 29.5307 44.3975 29.8483C44.7604 30.1433 45.373 30.2907 46.2351 30.2907H48.3449V34H45.3843ZM53.6842 14.5008C52.8902 14.5008 52.2322 14.2626 51.7104 13.7862C51.2113 13.3098 50.9618 12.7086 50.9618 11.9826C50.9618 11.2566 51.2113 10.6668 51.7104 10.213C52.2322 9.73661 52.8902 9.4984 53.6842 9.4984C54.4782 9.4984 55.1248 9.73661 55.6239 10.213C56.1457 10.6668 56.4066 11.2566 56.4066 11.9826C56.4066 12.7086 56.1457 13.3098 55.6239 13.7862C55.1248 14.2626 54.4782 14.5008 53.6842 14.5008ZM51.5063 34V17.1211H55.8621V34H51.5063ZM67.8271 34.4084C66.1029 34.4084 64.5829 34.034 63.2671 33.2854C61.9513 32.5367 60.9077 31.4931 60.1363 30.1546C59.3877 28.8161 59.0133 27.2847 59.0133 25.5606C59.0133 23.8364 59.3877 22.305 60.1363 20.9665C60.9077 19.628 61.9513 18.5844 63.2671 17.8357C64.5829 17.0871 66.1029 16.7128 67.8271 16.7128C69.9823 16.7128 71.7973 17.2799 73.2719 18.4143C74.7465 19.5259 75.688 21.0686 76.0964 23.0423H71.5023C71.2755 22.2256 70.8217 21.5904 70.1411 21.1367C69.4832 20.6602 68.7005 20.422 67.7931 20.422C66.5907 20.422 65.5698 20.8758 64.7304 21.7832C63.891 22.6907 63.4713 23.9498 63.4713 25.5606C63.4713 27.1713 63.891 28.4304 64.7304 29.3379C65.5698 30.2454 66.5907 30.6991 67.7931 30.6991C68.7005 30.6991 69.4832 30.4722 70.1411 30.0185C70.8217 29.5648 71.2755 28.9182 71.5023 28.0788H76.0964C75.688 29.9845 74.7465 31.5158 73.2719 32.6728C71.7973 33.8298 69.9823 34.4084 67.8271 34.4084ZM87.2109 34.4084C85.5775 34.4084 84.1028 34.034 82.787 33.2854C81.4939 32.5367 80.4616 31.5045 79.6903 30.1886C78.9416 28.8501 78.5673 27.3074 78.5673 25.5606C78.5673 23.8137 78.953 22.2823 79.7243 20.9665C80.4957 19.628 81.5279 18.5844 82.821 17.8357C84.1369 17.0871 85.6115 16.7128 87.2449 16.7128C88.8557 16.7128 90.3076 17.0871 91.6008 17.8357C92.9166 18.5844 93.9489 19.628 94.6975 20.9665C95.4689 22.2823 95.8545 23.8137 95.8545 25.5606C95.8545 27.3074 95.4689 28.8501 94.6975 30.1886C93.9489 31.5045 92.9166 32.5367 91.6008 33.2854C90.285 34.034 88.8217 34.4084 87.2109 34.4084ZM87.2109 30.631C88.3452 30.631 89.3321 30.2113 90.1715 29.3719C91.0109 28.5098 91.4306 27.2394 91.4306 25.5606C91.4306 23.8817 91.0109 22.6226 90.1715 21.7832C89.3321 20.9211 88.3566 20.4901 87.2449 20.4901C86.0879 20.4901 85.0897 20.9211 84.2503 21.7832C83.4336 22.6226 83.0252 23.8817 83.0252 25.5606C83.0252 27.2394 83.4336 28.5098 84.2503 29.3719C85.0897 30.2113 86.0766 30.631 87.2109 30.631ZM106.997 34.4084C105.364 34.4084 103.889 34.034 102.574 33.2854C101.28 32.5367 100.248 31.5045 99.4769 30.1886C98.7282 28.8501 98.3539 27.3074 98.3539 25.5606C98.3539 23.8137 98.7395 22.2823 99.5109 20.9665C100.282 19.628 101.314 18.5844 102.608 17.8357C103.923 17.0871 105.398 16.7128 107.032 16.7128C108.642 16.7128 110.094 17.0871 111.387 17.8357C112.703 18.5844 113.735 19.628 114.484 20.9665C115.255 22.2823 115.641 23.8137 115.641 25.5606C115.641 27.3074 115.255 28.8501 114.484 30.1886C113.735 31.5045 112.703 32.5367 111.387 33.2854C110.072 34.034 108.608 34.4084 106.997 34.4084ZM106.997 30.631C108.132 30.631 109.119 30.2113 109.958 29.3719C110.798 28.5098 111.217 27.2394 111.217 25.5606C111.217 23.8817 110.798 22.6226 109.958 21.7832C109.119 20.9211 108.143 20.4901 107.032 20.4901C105.875 20.4901 104.876 20.9211 104.037 21.7832C103.22 22.6226 102.812 23.8817 102.812 25.5606C102.812 27.2394 103.22 28.5098 104.037 29.3719C104.876 30.2113 105.863 30.631 106.997 30.631ZM118.685 34V9.4984H123.041V34H118.685Z" fill="black"/>
                  <rect x="44.3396" y="9" width="15.5455" height="5.15588" fill="#287BF9"/>
                </svg>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-blue-light_500 bg-opacity-10 text-gray-700' : 'text-gray-700 hover:bg-blue-light_500',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                    >
                      <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-gray-700" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
     <div className="hidden bg-white md:flex md:flex-shrink-0 px-6">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <Link href="/">
                <a className="text-blue-light_500 font-bold text-xl md:text-2xl">
                  <svg width="141" height="53" viewBox="0 0 141 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.78269 34L9.49437 10.179H14.3947L23.1064 34H18.4783L16.5726 28.4871H7.28242L5.34271 34H0.78269ZM8.47347 25.0841H15.3816L11.9105 15.1814L8.47347 25.0841ZM25.2221 34V17.1211H29.1015L29.5099 20.2859C30.1224 19.1969 30.9505 18.3349 31.994 17.6996C33.0603 17.0417 34.3081 16.7128 35.7373 16.7128V21.3068H34.5123C33.5594 21.3068 32.7087 21.4543 31.96 21.7492C31.2114 22.0441 30.6215 22.5546 30.1905 23.2805C29.7821 24.0065 29.5779 25.0161 29.5779 26.3092V34H25.2221ZM45.3843 34C43.6148 34 42.1968 33.569 41.1306 32.7069C40.0643 31.8448 39.5312 30.3134 39.5312 28.1128V20.7623H36.6386V17.1211H39.5312L40.0416 12.5951H43.887V17.1211H48.447V20.7623H43.887V28.1468C43.887 28.9636 44.0572 29.5307 44.3975 29.8483C44.7604 30.1433 45.373 30.2907 46.2351 30.2907H48.3449V34H45.3843ZM53.6842 14.5008C52.8902 14.5008 52.2322 14.2626 51.7104 13.7862C51.2113 13.3098 50.9618 12.7086 50.9618 11.9826C50.9618 11.2566 51.2113 10.6668 51.7104 10.213C52.2322 9.73661 52.8902 9.4984 53.6842 9.4984C54.4782 9.4984 55.1248 9.73661 55.6239 10.213C56.1457 10.6668 56.4066 11.2566 56.4066 11.9826C56.4066 12.7086 56.1457 13.3098 55.6239 13.7862C55.1248 14.2626 54.4782 14.5008 53.6842 14.5008ZM51.5063 34V17.1211H55.8621V34H51.5063ZM67.8271 34.4084C66.1029 34.4084 64.5829 34.034 63.2671 33.2854C61.9513 32.5367 60.9077 31.4931 60.1363 30.1546C59.3877 28.8161 59.0133 27.2847 59.0133 25.5606C59.0133 23.8364 59.3877 22.305 60.1363 20.9665C60.9077 19.628 61.9513 18.5844 63.2671 17.8357C64.5829 17.0871 66.1029 16.7128 67.8271 16.7128C69.9823 16.7128 71.7973 17.2799 73.2719 18.4143C74.7465 19.5259 75.688 21.0686 76.0964 23.0423H71.5023C71.2755 22.2256 70.8217 21.5904 70.1411 21.1367C69.4832 20.6602 68.7005 20.422 67.7931 20.422C66.5907 20.422 65.5698 20.8758 64.7304 21.7832C63.891 22.6907 63.4713 23.9498 63.4713 25.5606C63.4713 27.1713 63.891 28.4304 64.7304 29.3379C65.5698 30.2454 66.5907 30.6991 67.7931 30.6991C68.7005 30.6991 69.4832 30.4722 70.1411 30.0185C70.8217 29.5648 71.2755 28.9182 71.5023 28.0788H76.0964C75.688 29.9845 74.7465 31.5158 73.2719 32.6728C71.7973 33.8298 69.9823 34.4084 67.8271 34.4084ZM87.2109 34.4084C85.5775 34.4084 84.1028 34.034 82.787 33.2854C81.4939 32.5367 80.4616 31.5045 79.6903 30.1886C78.9416 28.8501 78.5673 27.3074 78.5673 25.5606C78.5673 23.8137 78.953 22.2823 79.7243 20.9665C80.4957 19.628 81.5279 18.5844 82.821 17.8357C84.1369 17.0871 85.6115 16.7128 87.2449 16.7128C88.8557 16.7128 90.3076 17.0871 91.6008 17.8357C92.9166 18.5844 93.9489 19.628 94.6975 20.9665C95.4689 22.2823 95.8545 23.8137 95.8545 25.5606C95.8545 27.3074 95.4689 28.8501 94.6975 30.1886C93.9489 31.5045 92.9166 32.5367 91.6008 33.2854C90.285 34.034 88.8217 34.4084 87.2109 34.4084ZM87.2109 30.631C88.3452 30.631 89.3321 30.2113 90.1715 29.3719C91.0109 28.5098 91.4306 27.2394 91.4306 25.5606C91.4306 23.8817 91.0109 22.6226 90.1715 21.7832C89.3321 20.9211 88.3566 20.4901 87.2449 20.4901C86.0879 20.4901 85.0897 20.9211 84.2503 21.7832C83.4336 22.6226 83.0252 23.8817 83.0252 25.5606C83.0252 27.2394 83.4336 28.5098 84.2503 29.3719C85.0897 30.2113 86.0766 30.631 87.2109 30.631ZM106.997 34.4084C105.364 34.4084 103.889 34.034 102.574 33.2854C101.28 32.5367 100.248 31.5045 99.4769 30.1886C98.7282 28.8501 98.3539 27.3074 98.3539 25.5606C98.3539 23.8137 98.7395 22.2823 99.5109 20.9665C100.282 19.628 101.314 18.5844 102.608 17.8357C103.923 17.0871 105.398 16.7128 107.032 16.7128C108.642 16.7128 110.094 17.0871 111.387 17.8357C112.703 18.5844 113.735 19.628 114.484 20.9665C115.255 22.2823 115.641 23.8137 115.641 25.5606C115.641 27.3074 115.255 28.8501 114.484 30.1886C113.735 31.5045 112.703 32.5367 111.387 33.2854C110.072 34.034 108.608 34.4084 106.997 34.4084ZM106.997 30.631C108.132 30.631 109.119 30.2113 109.958 29.3719C110.798 28.5098 111.217 27.2394 111.217 25.5606C111.217 23.8817 110.798 22.6226 109.958 21.7832C109.119 20.9211 108.143 20.4901 107.032 20.4901C105.875 20.4901 104.876 20.9211 104.037 21.7832C103.22 22.6226 102.812 23.8817 102.812 25.5606C102.812 27.2394 103.22 28.5098 104.037 29.3719C104.876 30.2113 105.863 30.631 106.997 30.631ZM118.685 34V9.4984H123.041V34H118.685Z" fill="black"/>
                    <rect x="44.3396" y="9" width="15.5455" height="5.15588" fill="#287BF9"/>
                  </svg>
                </a>
              </Link>
            </div>
            <div className="mt-5 flex-1 flex flex-col">
              <nav className="flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-blue-light_500 bg-opacity-10 text-gray-700' : 'text-gray-700 hover:bg-blue-light_500',
                      'group flex items-center px-2 py-4 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-gray-700" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
