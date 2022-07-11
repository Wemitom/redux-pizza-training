import { ItemInterface } from '../interfaces/interfaces';
import Item from './Item';

function Items({ items }: { items: ItemInterface[] }) {
  return (
    <div className="items">
      {items.map((item) => (
        <Item
          key={item._id}
          _id={item._id}
          title={item.title}
          description={item.description}
          code={item.code}
          img={item.img}
          type={item.type}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Items;
