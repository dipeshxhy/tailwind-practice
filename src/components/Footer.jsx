import React from 'react';

const Footer = () => {
  return (
    <div className="bg-stone-800 mt-8 text-white">
      <footer className="py-20">
        <div className="container mx-auto py-4 text-center text-lg text-gray-500">
          &copy; {new Date().getFullYear()} Dipesh. All rights reserved.{' '}
        </div>

        {/* social links */}
        <div className='w-1/2 justify-center mx-auto flex items-center mt-6'>
          <div className='w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-4 hover:bg-green-700 transition-colors duration-300 cursor-pointer'>
            <a href="https://www.github.com/dipeshxhy">
            <span><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg></span>
            </a>
          </div>
          <div className='w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-4 hover:bg-green-700 transition-colors duration-300 cursor-pointer'>
            <a href="https://www.dipeshchaudhary.dev">
            <span>
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M4 5H.78c-.37 0-.74.32-.69.84l1.56 9.99S3.5 8.47 3.86 6.7c.11-.53.61-.7.98-.7H10s-.7-2.08-.77-2.31C9.11 3.25 8.89 3 8.45 3H5.14c-.36 0-.7.23-.8.64C4.25 4.04 4 5 4 5m4.88 0h-4s.42-1 .87-1h2.13c.48 0 1 1 1 1M2.67 16.25c-.31.47-.76.75-1.26.75h15.73c.54 0 .92-.31 1.03-.83c.44-2.19 1.68-8.44 1.68-8.44c.07-.5-.3-.73-.62-.73H16V5.53c0-.16-.26-.53-.66-.53h-3.76c-.52 0-.87.58-.87.58L10 7H5.59c-.32 0-.63.19-.69.5c0 0-1.59 6.7-1.72 7.33c-.07.37-.22.99-.51 1.42M15.38 7H11s.58-1 1.13-1h2.29c.71 0 .96 1 .96 1"/></svg>
            </span>
            </a>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
