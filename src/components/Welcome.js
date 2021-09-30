import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import '../App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import beerImg from '../19862.png'

export default function Welcome() {
    const history = useHistory();

  const routeChange = () =>{ 
    let path = `/home`; 
    history.push(path);
  }
    return (
       <Container>
           <Row>
               <Col md={4}>
               <img id='welcomeBeerImg' src={beerImg} alt="image not found" />
               </Col>
               <Col>
                   <h1 id='welcomeTitle'>Welcome to PUNK API</h1>
                   <h2 id='welcomeDescription'>Click the Big blue Button to experinece amazing app I've made for you!</h2>
                   <br></br>
                   <h3 id='ps'><strong>P.S</strong> There is a tiny bug, buttons return 'undefined' on first click, you will have to click buttons twice. 
                       Spent maaaaany hours to figure this out but my attempts failed.....
                    </h3>
                    <br></br>
                    <br></br>
                    
                    <Button onClick={routeChange} id="letsStartBtn" variant="outline-primary">Let's start!</Button>
               </Col>
           </Row>
       </Container>
    )
}
