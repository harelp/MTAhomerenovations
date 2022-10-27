import Card from './Card';
import kitchen from '../../images/kitchens.jpg';

const services = [
  {
    name: 'Full Homes',
    img: kitchen
  },
  {
    name: 'Basements',
    img: kitchen
  },
  {
    name: 'Kitchens',
    img: kitchen
  },
  {
    name: 'Bathrooms',
    img: kitchen
  },
  {
    name: 'Decks',
    img: kitchen
  },
  {
    name: 'Business',
    img: kitchen
  }
];
const service = services.map((service) => {
  return <Card name={service.name} img={service.img} key={service.name} />;
});

export default service;
