
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav.jsx';
import MyFooter from './components/MyFooter.jsx';
import MyTitle from './components/MyTitle.jsx';
import MyAlert from './components/MyAlerts.jsx';
import SingleBook from './components/SingleBook.jsx';

function App() {

  return (
    <>
     <MyNav/>
     <MyTitle/>
     <MyAlert/>
     <SingleBook/>
     <MyFooter/>
    </>
  )
}

export default App
