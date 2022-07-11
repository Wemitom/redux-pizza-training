import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import PromoCarousel from './components/PromoCarousel';
import Items from './components/Items';

function App() {
  return (
    <div className="App">
      <InfoHeader />
      <Header />
      <PromoCarousel />
      <Items
        items={[
          {
            _id: 'abcd1',
            title: 'Test',
            description:
              'TestTestTestTestTest TestTestTestTestTestTestTestTestTest',
            code: 'DASD',
            img: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
            type: 'promo',
          },
          {
            _id: 'abcd2',
            title: 'Test',
            description: 'Test',
            code: 'DASD',
            img: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
            type: 'promo',
          },
          {
            _id: 'abcd3',
            title: 'Test',
            description: 'Test',
            code: 'DASD',
            img: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
            type: 'product',
            price: 362,
          },
          {
            _id: 'abcd4',
            title: 'Test',
            description: 'Test',
            code: 'DASD',
            img: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
            type: 'product',
            price: 350,
          },
          {
            _id: 'abcd5',
            title: 'Test',
            description: 'Test',
            code: 'DASD',
            img: 'https://wiki.dave.eu/images/4/47/Placeholder.png',
            type: 'product',
            price: 399,
          },
        ]}
      />
    </div>
  );
}

export default App;
