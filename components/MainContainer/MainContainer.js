import Head from 'next/head';
import Header from '/components/Header/Header';
import Footer from '/components/Footer/Footer';

const MainContainer = ({title, activeLink, children}) => {
  return ( 
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header activeLink={activeLink} />
      <div>
        {children}
      </div>
      <Footer/>
    </>
   );
}
 
export default MainContainer;