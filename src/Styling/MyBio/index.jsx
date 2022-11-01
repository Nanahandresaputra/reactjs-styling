import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import "./index.css";
import logo from "../img/html.png";
import logo1 from "../img/css.png";
import logo2 from "../img/bootstrap.png";
import logo3 from "../img/js.png";
import logo4 from "../img/reactjs.png";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        {/* navbar */}

        <Navbar bg="success" variant="dark" fixed="top" expand="lg">
          <Container>
            <Navbar.Brand href="#">Nana Handre Saputra</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="m-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Nav.Link href="#top">Home</Nav.Link>
                <Nav.Link href="#skill">Skill</Nav.Link>
                <Nav.Link href="#">Contac Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* navbar end */}

        {/* banner */}

        <div>
          <div className="jumbotron">
            <h1 className="name text-center">Nana Handre Saputra</h1>
            <div className=" d-flex justify-content-center mt-5">
              <button type="button" className="btn btn-success">
                Profil LinkedIn
              </button>
            </div>
          </div>
        </div>

        {/* banner end */}

        {/* bio */}

        <div className="bio text-center">
          <div>
            <Container>
              <h1 id="bioo">My Bio</h1>
              <p className="fs-5">
                Perkenalkan nama saya Nana handre saputra, biasa dipangil Nana, saya berasal dari Majalengka. saya lulusan SMK jurusan teknik kendaraan ringan. Saat ini saya bekerja di PT. Singwealth sebagai operator produksi, alasan saya
                belajar coding adalah kerena saya suka mempelajari hal-hal tentang komputer dan saya juga ingin berkarir dibidang IT karena dijaman yang semakin modern tentu saja orang yang memiliki skill IT juga sangat dibutuhkan.
              </p>
            </Container>
          </div>
          <Container>
            <Row>
              <Col>
                <h3>Hobi</h3>
                <h4 className="text-start"> Futsal</h4>
                <p className="text-start">
                  <span className="ms-5">Futsal</span> adalah permainan bola yang dimainkan oleh dua tim, yang masing-masing beranggotakan lima orang. Tujuannya adalah memasukkan bola ke gawang lawan, dengan memanipulasi bola dengan kaki.
                  Selain lima pemain utama, setiap regu juga diizinkan memiliki pemain cadangan. Tidak seperti permainan sepak bola dalam ruangan lainnya, lapangan futsal dibatasi garis, bukan net atau papan.{" "}
                </p>
              </Col>
              <Col>
                <h3>Makanan kesukaan</h3>
                <h4 className="text-start"> Rendang</h4>
                <p className="text-start">
                  <span className="ms-5">Rendang</span> atau adalah Masakan Minangkabau yang berbahan dasar daging yang berasal dari Sumatera Barat, Indonesia. Masakan ini dihasilkan dari proses memasak suhu rendah dalam waktu lama dengan
                  menggunakan aneka rempah-rempah dan santan.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="logoPng w-50">
          <p className="fs-5 mb-5 text-center" id="skill">
            <i>Skill yang sedang dipelajari : </i>
          </p>
          <Row>
            <Col>
              <img src={logo} alt="Logo" />
            </Col>
            <Col>
              <img src={logo1} alt="Logo" />
            </Col>
            <Col>
              <img src={logo2} alt="Logo" />
            </Col>
            <Col>
              <img src={logo3} alt="Logo" />
            </Col>
            <Col>
              <img src={logo4} alt="Logo" />
            </Col>
          </Row>
        </Container>

        {/* bio end */}

        {/* form */}

        <div className="form container mb-sm-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <div class="mb-3">
            <label htmlFor="exampleFormControlTextarea1" class="form-label">
              Comment
            </label>
            <textarea className="form-control mb-2" id="exampleFormControlTextarea1" rows="3" placeholder="comment here..."></textarea>
            <div className="d-flex justify-content-center">
              <Button className="btnn" variant="success" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </div>

        {/* form end */}

        {/* footer */}
        <div className="footer">
          <Navbar bg="success" variant="dark">
            <Container>
              <Nav className="m-auto">
                <p className="text-white"> &copy; 2022, Nana handre saputra</p>
              </Nav>
            </Container>
          </Navbar>
        </div>
        {/* footer end */}
      </div>
    );
  }
}

export default Navigation;
