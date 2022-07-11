import { ItemInterface } from '../interfaces/interfaces';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/shoppingCartSlice';

function Item({
  _id,
  title,
  description,
  code,
  img,
  type,
  price,
}: ItemInterface) {
  const dispatch = useDispatch();

  return (
    <div className="item-card">
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className="item-img"
      ></div>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      {type === 'promo' && (
        <Button
          variant="outline-danger"
          href={`/${code}`}
          style={{
            position: 'absolute',
            bottom: '0',
            width: '90%',
            transform: 'translate(-50%,-50%)',
            left: '50%',
            borderRadius: '20px',
          }}
        >
          Воспользоваться
        </Button>
      )}
      {type === 'product' && (
        <Button
          variant="outline-danger"
          style={{
            position: 'absolute',
            bottom: '0',
            width: '40%',
            left: '10px',
            transform: 'translate(0,-50%)',
            borderRadius: '20px',
          }}
          onClick={() =>
            dispatch(
              addToCart({
                item: { _id, title, description, code, img, type, price },
                count: 1,
              })
            )
          }
        >
          Выбрать
        </Button>
      )}
      {type === 'product' && <p className="price">от {price} ₽</p>}
    </div>
  );
}

export default Item;
