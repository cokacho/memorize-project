import {Disclosure} from '@headlessui/react';
import {BellIcon} from '@heroicons/react/24/outline';
import {XMarkIcon} from "@heroicons/react/24/outline";
import {Bars4Icon} from "@heroicons/react/24/outline";
import {NavLink, Outlet} from "react-router-dom";

const navigation = [
  {name: "Home", href: "/", current: true},
  {name: "Game", href: "game", current: false},
  {name: "About", href: "about", current: false}
];

const commonWebCssLink = 'px-3 py-2 rounded-md text-sm font-medium';
const activeCssLink = 'bg-gray-900 text-white';
const inactiveCssLink = 'text-gray-300 hover:bg-gray-700 hover:text-white';

const commonMobileCssLink = 'block px-3 py-2 rounded-md text-base font-medium w-full';

const Navbar = () => {
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({open}) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400
                  hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                    ) : (
                      <Bars4Icon className="block h-6 w-6" aria-hidden="true"/>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}

                          className={
                            ({isActive}) => (isActive ? activeCssLink : inactiveCssLink) + ' ' + commonWebCssLink
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true"/>
                  </button>

                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    className={'block px-3 py-2 rounded-md text-base font-medium w-full'}
                  >
                    <NavLink to={item.href}
                             className={
                               ({isActive}) => (isActive ? activeCssLink : inactiveCssLink)
                                 + ' ' + commonMobileCssLink
                             }
                    >{item.name}</NavLink>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}

      </Disclosure>
      <Outlet />
    </div>
  );
}

export default Navbar;