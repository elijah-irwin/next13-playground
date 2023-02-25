// Components.
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';
import { Playfair_Display, Open_Sans } from '@next/font/google';

// Styles.
import '@/styles/globals.css';

// Fonts.
const sans = Open_Sans({
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
      <body className='min-h-screen bg-main text-text-main'>
        <div className='mx-auto w-full px-7 sm:w-[625px]'>
          <TopNav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
