// Components.
import PageTransition from '@/components/PageTransition';
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
        <PageTransition>
          <TopNav />
          <main className='px-10'>{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}
