import './App.css';
import './styles/Container.css'
import Container from './components/Container';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* HEADER SECTION */}
      <Container id="header-section">
        <Header/>
      </Container>
    </div>
  );
}

export default App;
