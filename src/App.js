import './App.css';
import { Header, Hero, Body, AgriFooter } from './UI'
import { Cookies } from './UI/Constants';
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
      <Cookies />
    </div>
  );
}

export default App;
