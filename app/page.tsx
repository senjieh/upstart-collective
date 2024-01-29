import Hero from './components/Hero';
import About from './components/About';
import NavBar from './components/NavBar';
import Locations from './components/Locations';
import Members from './components/Members';

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <Hero></Hero>
        <About></About>
        <Locations></Locations>
        <Members></Members>
      </main>
    </div>
  );
}
