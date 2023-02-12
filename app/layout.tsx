// Components.
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';

// Styles.
import '@/styles/globals.css';

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
      <body className='m-8'>
        <div className='mx-auto w-full sm:w-[550px]'>
          <TopNav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
