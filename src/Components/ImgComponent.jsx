import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../public/img/Nissan skyline.png"
import img2 from "../../public/img/correr.png"
import img3 from "../../public/img/poder.png"
import img4 from "../../public/img/explosion.png"
import img5 from "../../public/img/enemigo.png"
import img6 from "../../public/img/rryomen2.png"
import img7 from "../../public/img/jefe.png"
import img8 from "../../public/img/Creditos.png"

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={img1}/>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img7}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img8}
        />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default DarkVariantExample;