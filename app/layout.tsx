// Components.
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';
import { Inter, Playfair_Display } from '@next/font/google';

// Styles.
import '@/styles/globals.css';
import Grain from '@/components/Grain';

// Fonts.
const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--sans-font',
});

const serif = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--serif-font',
});

/****************************************
 * - Root Layout -
 ***************************************/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${sans.variable} ${serif.variable} antialiased`}>
      <head />
      <body className='m-10 bg-main text-text-main'>
        <div className='mx-auto w-full sm:w-[550px]'>
          <TopNav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
