// import Link from "next/link";
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import './globals.css';

export default function Home() {
  return (
    <main>

      {/* <h1>Hello Testing!</h1>
      <Link href="/header">Header</Link> */}

        <Navbar />

        <MainContent />

        <Footer />

    </main>
  );
}
