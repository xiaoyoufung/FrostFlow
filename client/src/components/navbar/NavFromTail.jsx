import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <svg className="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z" />
              </svg>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-900 px-3 py-2 text-sm font-medium border-b-2 border-indigo-600">Dashboard</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Team</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Projects</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">Calendar</a>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="rounded-full p-1 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>

              <div className="relative ml-3">
                <button className="flex items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <img className="h-8 w-8 rounded-full" src="/api/placeholder/32/32" alt="User profile" />
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="shrink-0">
              <svg className="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z" />
              </svg>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-lg border border-indigo-200 p-2 text-indigo-600 hover:bg-indigo-50"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="relative">
            <div className="relative h-16 bg-indigo-50 flex items-center">
              <div className="absolute inset-y-0 left-0 w-1 bg-indigo-600"></div>
              <span className="pl-6 text-xl font-medium text-indigo-600">Dashboard</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-16 bg-indigo-50 flex items-center">
              <div className="absolute inset-y-0 left-0 w-1 bg-indigo-600"></div>
              <span className="pl-6 text-xl font-medium text-indigo-600">Dashboard</span>
            </div>
          </div>

          <div className="mt-2 px-4">
            <div className="space-y-4">
              <a href="#" className="block text-base text-gray-600">Team</a>
              <a href="#" className="block text-base text-gray-600">Projects</a>
              <a href="#" className="block text-base text-gray-600">Calendar</a>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-4">
            <div className="flex items-center px-4 py-4">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="/api/placeholder/40/40" alt="" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Tom Cook</div>
                <div className="text-sm font-medium text-gray-500">tom@example.com</div>
              </div>
              <button className="ml-auto flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-3 space-y-1 px-4">
              <a href="#" className="block px-4 py-2 text-base text-gray-500">Your Profile</a>
              <a href="#" className="block px-4 py-2 text-base text-gray-500">Settings</a>
              <a href="#" className="block px-4 py-2 text-base text-gray-500">Sign out</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;