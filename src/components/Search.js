import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

                 //Receiving props from App.js
function Search({setBtnValue, btnValue, setColStyle}) {
    
    //onClick function
    //For some reason button has to be clicked twice to setState
    //it returns 'undefined' when clicked once
    //my poor attempts to fix it failed
    const handleClick = (e) =>{
        //btnValue(in App.js) === value of button clicked
        setBtnValue(e.target.value)
        //colStyle(in App.js) to style Column in List.js
        setColStyle('block')
           if(btnValue === ' '){
               
               setColStyle('none')
             }
           
        }

    return (
        <div className="buttons">
            <Row>
                <Col>
                  <h1 id="title">Search beer by it's flavor</h1>
                </Col>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
          </Row>
            <Row id="firstBtnRow">
                <Col md={3}  id="btnCol">
                    <Button variant="outline-primary" className="categoryButton" onClick={handleClick}  value='Spicy chicken tikka masala'>Spicy Chicken</Button>
                </Col>
                <Col  md={3} id="btnCol">
                    <Button variant="outline-primary" onClick={handleClick}  className="categoryButton" value='Spicy crab cakes'>Spicy crab cakes</Button>

                </Col>
                <Col  md={3} id="btnCol">
                    <Button variant="outline-primary" onClick={handleClick}  className="categoryButton" value='Smoked chicken wings'>Smoked chicken wings</Button>
                </Col>
                <Col  md={3}  id="btnCol">
                    <Button variant="outline-primary" onClick={handleClick}  className="categoryButton" value='Fresh crab with lemon'>Fresh crab with lemon</Button>
                </Col>
            </Row>
            <Row id="secondBtnRow">
                <Col  md={3}  id="btnCol">
                    <Button variant="outline-primary" onClick={handleClick}  className="categoryButton" value='Fried crab cakes with avocado salsa'>Fried crab cakes with avocado salsa</Button>
                </Col>
                <Col  md={3} id="btnCol">
                    <Button variant="outline-primary" onClick={handleClick}  className="categoryButton" value='Tandoori lamb with pomegranate'>Tandoori lamb with pomegranate</Button>
                </Col>
                <Col  md={3}  id="btnCol">
                    <Button variant="outline-primary" onClick={handleClick}  className="categoryButton" value='Vietnamese squid salad'>Vietnamese squid salad</Button>
                </Col>
                <Col  md={3} id="btnCol">
                    <Button variant="outline-primary" onClick={handleClick}  className="categoryButton" value='Mussels with a garlic and herb sauce'>Mussels with a garlic and herb sauce</Button>
                </Col>
            </Row>
             <br></br>
            <Row>
                <Col  id="btnCol">
                    <Button variant="outline-primary" onClick={handleClick}  className="categoryButton" value=' '>All Beer</Button>
                </Col>
            </Row>    
            <br></br>
            <br></br>
            <br></br>    
    </div>
    )
}

export default Search;