import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

               //Receiving props from App.js 
function List({listItem, btnValue, colStyle}) {
    
    return (
        <Row id="listRow" >
        <Col style={{display: colStyle}}></Col>
         {/*Map through listItem( response from Punk Api) */}
          { 
            listItem.map((item) =>{
                return (
                <>
                {/*If value of button onClick = food pairing value display items */}
                 { btnValue === item.food_pairing[0] || btnValue === ' '  ?
                   <Col md={4} lg={4} key={item.id}>
                     <div id="itemCard"> 
                          <img id="beerImg" src={item.image_url} alt=""/>
                          <h2 id="beerName">{item.name}</h2>
                          <p id="beerDescription">{item.description}</p>
                          <p id="beerFdPairing">Food pairing: {item.food_pairing}</p>
                      </div>
                    </Col>: null} {/*if food paring value doesn't match pressed value button display nothing */}
                </> 
                  ) 
                })
            }
            <Col style={{display: colStyle}}></Col>
        </Row>
        
    )
}

export default List;