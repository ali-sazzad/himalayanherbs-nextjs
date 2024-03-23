// import Link from "next/link";
import './globals.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
    <header>
      <Navbar />     
    </header>

    <main>
      <MainContent />
      
    </main>

    
    <footer>
      <Footer />
    </footer>


    </>
  );
}
