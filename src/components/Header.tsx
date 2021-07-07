import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { AiOutlineArrowRight, AiOutlineShoppingCart } from 'react-icons/ai';

function Header() {
  return (
    <Navbar variant="dark" className="header" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">*Бренд*</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/category/akcii">АКЦИИ</Nav.Link>
            <Nav.Link href="/category/picca">ПИЦЦА</Nav.Link>
            <Nav.Link href="/category/goryachie-zakuski">ЗАКУСКИ</Nav.Link>
            <Nav.Link href="/category/deserty">ДЕСЕРТЫ</Nav.Link>
            <Nav.Link href="/category/napitki">НАПИТКИ</Nav.Link>
            <Nav.Link href="/category/sousy">СОУСЫ</Nav.Link>
          </Nav>
          <div>
            <Form inline className="promo">
              <FormControl
                type="text"
                placeholder="Промокод"
                className="promocode"
              />
              <button
                className="circle-btn"
                style={{ position: 'absolute' }}
                onClick={(e) => e.preventDefault}
              >
                <AiOutlineArrowRight />
              </button>
            </Form>
          </div>
          <div>
            <button
              className="circle-btn"
              style={{
                backgroundColor: '#e31836',
                marginLeft: '15px',
                position: 'relative',
              }}
            >
              <AiOutlineShoppingCart />
              <div className="items-number">0</div>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
