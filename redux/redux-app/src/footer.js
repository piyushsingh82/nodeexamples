import React from 'react';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import {  Container,Row,Col} from 'react-bootstrap';

function Themefooter(){
    return (
        <div className ="Footer">
        <Container><Row>
            <Col sm={8}><p></p></Col>
            <Col sm={4}><p>copyright @ 2019</p></Col>
            </Row>
            </Container> 
         
</div>
    )
}

export default Themefooter;