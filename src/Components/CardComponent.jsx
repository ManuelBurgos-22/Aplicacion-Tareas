import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from "../../public/img/Rick.png"
import Image from 'react-bootstrap/Image';

function BasicExample() {
  const x = "Rick";
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={img} /> */}
      <Image src={img} rounded style={{width:'350px', height:'250px'}}/>
      <Card.Body>
        <Card.Title>{x}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;