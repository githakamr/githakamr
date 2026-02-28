import localFont from 'next/font/local';

export const albertSans = localFont({
  src: [
    {
      path: '../../fonts/dynamic/albert_sans/regular.ttf',
      style: 'normal',
      weight: '100 900',
    },
    {
      path: '../../fonts/dynamic/albert_sans/italic.ttf',
      style: 'italic',
      weight: '100 900',
    },
  ],
});
