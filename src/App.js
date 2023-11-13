import './App.css';
import { Header, Hero, Body, AgriFooter } from './UI'
import StaticButton from './UI/Constants/StaticButton';

function App() {
  return (
    <div className="App">
      <div className='px-[20px]'>
      <Header />
      <Hero />
      <Body />
      </div>
      <AgriFooter />
      <StaticButton />
    </div>
  );
}

export default App;
