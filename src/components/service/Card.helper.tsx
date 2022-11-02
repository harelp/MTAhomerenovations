import Card from './Card';
import home from '../../images/home.png';
import store from '../../images/store.png';
import kitchen from '../../images/kitchen.png';
import bathroom from '../../images/bathroom.png';
import kitchenBg from '../../images/kitchenBg.jpg';
import storeBg from '../../images/storeBg.jpg';
import bathroomBg from '../../images/bathroomBg.png';
import basementBg from '../../images/basementBg.jpg';

const services = [
  {
    name: 'Basements',
    bg: basementBg,
    icon: home
  },
  {
    name: 'Kitchens',
    bg: kitchenBg,
    icon: kitchen
  },
  {
    name: 'Bathrooms',
    bg: bathroomBg,
    icon: bathroom
  },
  {
    name: 'Businesses',
    bg: storeBg,
    icon: store
  }
];
const service = services.map((service, i) => {
  return <Card name={service.name} bg={service.bg} icon={service.icon} key={i} />;
});

export default service;
