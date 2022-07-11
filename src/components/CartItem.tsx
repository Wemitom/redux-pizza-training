import { ListGroupItem } from 'react-bootstrap';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { ItemInterface } from '../interfaces/interfaces';
import {
  addToCart,
  removeOneItem,
  removeFromCart,
} from '../store/shoppingCartSlice';

const CartItem = ({ item, count }: { item: ItemInterface; count: number }) => {
  const dispatch = useDispatch();

  return (
    <ListGroupItem
      style={{ display: 'flex' }}
      className="justify-content-between"
    >
      <div
        style={{ display: 'flex' }}
        className="flex-column justify-content-between"
      >
        <div>{item.title}</div>
        <div
          style={{
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(3, 40px)',
          }}
          className="align-content-center mt-3"
        >
          <button
            className="circle-btn"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgb(243, 243, 247)',
              color: '#505061',
            }}
            onClick={() =>
              count === 1
                ? dispatch(removeFromCart(item))
                : dispatch(removeOneItem(item))
            }
          >
            {count === 1 ? <RiDeleteBin6Line /> : '-'}
          </button>
          <span
            className="w-100 h-100 justify-content-center align-items-center"
            style={{ display: 'flex' }}
          >
            {count}
          </span>
          <button
            className="circle-btn"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgb(243, 243, 247)',
              color: '#505061',
            }}
            onClick={() => dispatch(addToCart({ item: item, count: 1 }))}
          >
            +
          </button>
        </div>
      </div>
      <div
        style={{ display: 'flex' }}
        className="flex-column justify-content-between"
      >
        <div>Сыр x2</div>
        <div>{item.price} ₽</div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
