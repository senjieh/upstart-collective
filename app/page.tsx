import Hero from './components/Hero';
import About from './components/About';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <Hero></Hero>
        <About></About>
      </main>
    </div>
  );
}
