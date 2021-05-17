
import './App.css';
import Wrapper from './components/Wrapper/Wrapper.jsx'
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
function App() {
  return (
    <div className="App">
    <Wrapper>
    <Header/>
      <Navbar/>
      </Wrapper>
    </div>
  );
}

export default App;
