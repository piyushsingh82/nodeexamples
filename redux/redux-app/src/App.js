import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Jumbotron,Container, Row,Col,Figure,Breadcrumb,Carousel } from 'react-bootstrap';
import Counter from './Counter';
import store from './store/';
import Themeheader from './header';
import Themefooter from './footer';
function App() {
  return (
    <div className="App">
      <Themeheader/> 
      <Row>
           <Col sm>
             <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
</Col>
</Row>
<Row> 
   <Col sm>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://live.staticflickr.com/8122/8708917784_a4a1d907fa_b.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2013/03/07/15/36/kashmir-91218_960_720.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://m.economictimes.com/thumb/msid-66361349,width-1200,height-900,resizemode-4,imgsize-896934/ladakh_thinkstock.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           </Col>


         </Row>
       <Row>
          <Col sm={8}><Jumbotron fluid>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron></Col>
          <Col sm={4}><Counter store={store} /></Col>
        </Row>
        <Row>
            <Col sm>
              <Figure>
              <Figure.Image width={171} height={180} alt="171x180" src="http://holderjs.com/171x180" />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
            </Col>
            <Col sm>
              <Figure>
              <Figure.Image width={171} height={180} alt="171x180" src="http://holderjs.com/171x180" />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure></Col>
            <Col sm>
              <Figure>
              <Figure.Image width={171} height={180} alt="171x180" src="http://holderjs.com/171x180" />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure></Col>
        </Row>
      
       
     <Themefooter />
    </div>
  );
}

export default App;
