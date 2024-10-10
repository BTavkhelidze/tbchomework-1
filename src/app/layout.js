// import Header from './components/Header/page';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';
export const metadata = {
  title: 'My App',
  description: 'My App is a...',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>
          <div className='main_container'>
            <Header />

            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
