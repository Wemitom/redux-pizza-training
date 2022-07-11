import { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import {
  AiOutlineArrowRight,
  AiOutlineShoppingCart,
  AiOutlineUp,
} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ShoppingCart from './ShoppingCart';

function Header() {
  const [cartOpened, setCartOpened] = useState(false);

  const shoppingCart = useSelector(
    (state: RootState) => state.shoppingCart.items
  );

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
                style={{ position: 'absolute', right: '-2px' }}
                onClick={(e) => e.preventDefault}
              >
                <AiOutlineArrowRight />
              </button>
            </Form>
          </div>
          <div style={{ position: 'relative' }}>
            <button
              className="circle-btn"
              style={{
                backgroundColor: !cartOpened ? '#e31836' : '#fff',
                marginLeft: '15px',
                position: 'relative',
                height: !cartOpened ? '48px' : '60px',
                borderRadius: '24px',
              }}
              onClick={() => setCartOpened(!cartOpened)}
            >
              {!cartOpened ? (
                <AiOutlineShoppingCart />
              ) : (
                <AiOutlineUp color="#e31836" />
              )}
              <div
                className="items-number"
                style={{ display: cartOpened ? 'none' : 'block' }}
              >
                {shoppingCart?.length || 0}
              </div>
            </button>
            <ShoppingCart cartOpened={cartOpened} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
