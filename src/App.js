import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/MainComponents/Main';
import Nav from './components/Nav';

function App() {
  return (
   <div style={{margin:'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'90vW'}}>
      <Header>
        <Nav></Nav>
      </Header>
      <Main></Main>
      <Footer></Footer>
   </div> 
  );
}

export default App;
