// Components.
import TopNav from '@/components/TopNav';

// Styles.
import './globals.css';

/****************************************
 * - Root Layout -
 ***************************************/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <TopNav />
        <main className='px-10 pb-10'>{children}</main>
      </body>
    </html>
  );
}
