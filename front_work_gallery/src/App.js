import './App.css';
import Home from './components/Home'
import TopNav from './components/TopNav'
import GalleryPage from './components/GalleryPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <TopNav />
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/gallery' component={GalleryPage} />
      {/* <Route path='/' component={Home} /> */}
    </Router>
      
    </div>
  );
}

export default App;
