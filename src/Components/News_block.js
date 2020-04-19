import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const ShadowDiv = styled.div`
background-color:white;
transition: .8s ease;
&:hover{
    padding:1px; 
    background-color:black;
}
`;



function News_block() {

const src_string = 'http://localhost:8080/news.jpg';
const src_woman = 'http://localhost:8080/small.png';


return(
        
<div >
    <Container fluid = {true}>
        <Row style = { {marginBottom:'15px', flexWrap: 'nowrap'} }>
            <Col style = {{paddingLeft:'5px', paddingRight:'5px'}}>
          <ShadowDiv>
            <Card style={{ borderColor:'black', borderRadius:'0px', borderWidth:'0.7px' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
              </Card>
          </ShadowDiv>
            </Col>
            <Col style = {{paddingLeft:'5px', paddingRight:'5px'}}>
            <ShadowDiv>
            <Card style={{ borderColor:'black', borderRadius:'0px', borderWidth:'0.7px' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            </ShadowDiv>
            </Col>
            <Col style = {{paddingLeft:'5px', paddingRight:'5px'}}>
            <ShadowDiv>
            <Card style={{ borderColor:'black', borderRadius:'0px', borderWidth:'0.7px' }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              </ShadowDiv>
            </Col>
        </Row>
        <Row style = { {marginBottom:'15px', flexWrap: 'nowrap'} }>
            <Col style = {{paddingLeft:'5px', paddingRight:'5px'}}>
            <ShadowDiv>
            <Card style={{ borderColor:'black', borderRadius:'0px', borderWidth:'0.7px' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            </ShadowDiv>
            </Col>
            <Col style = {{paddingLeft:'5px', paddingRight:'5px'}}>
            <ShadowDiv>
            <Card style={{ borderColor:'black', borderRadius:'0px', borderWidth:'0.7px' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            </ShadowDiv>
            </Col>
            <Col style = {{paddingLeft:'5px', paddingRight:'5px'}}>
            <ShadowDiv>
            <Card style={{ borderColor:'black', borderRadius:'0px', borderWidth:'0.7px' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            </ShadowDiv>
            </Col>
        </Row>
    </Container>
</div>);
}

export default News_block;








