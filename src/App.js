import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from './components/List';
import Search from './components/Search';
import Welcome from './components/Welcome';
import Container from 'react-bootstrap/Container'
import Title from './components/Title';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  //state to store response from api
  let [listItem, setListItem] = useState([])
  //state to store button values
  let [btnValue, setBtnValue] = useState(' ')
  //state to style Column in List.js
  let [colStyle, setColStyle] = useState('none')
  
  //Requesting data from punk api
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?per_page=8")
    .then(response => response.json())
    
        .then(data => setListItem(data))
    
  },[])

  return (
      <Router>
            <Container id='main' fluid>
                 <Title /> 
                  <Switch>  
                        <Route path='punk_api/home'>
                              <Search setBtnValue={setBtnValue} 
                                      btnValue={btnValue} 
                                      setColStyle={setColStyle} />
                              <List listItem={listItem} 
                                    btnValue={btnValue} 
                                    colStyle={colStyle} />
                        </Route>
                        <Route path='/'>
                              <Welcome />
                        </Route>
                  
                  </Switch>
            </Container>
      </Router>
  );
}

export default App;
