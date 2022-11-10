import './App.css';
import { Leftbar, Navbar, Rightbar, Update } from './components';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </>
  );
}
export default App;
