import { AsideProvider } from '@components/provider';
import { albertSans } from '@fonts/dynamic';
import '../styles/global.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      data-theme='system'
    >
      <body className={albertSans.className}>
        <AsideProvider>{children}</AsideProvider>
      </body>
    </html>
  );
}
