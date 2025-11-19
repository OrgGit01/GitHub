// ProductGrid.jsx
import { ProductCard } from './ProductCard';

export function ProductGrid() {
  const products = [
    {
      title: 'Camiseta bordada',
      price: 45,
      image: 'https://via.placeholder.com/150',
      description: 'Diseño artesanal con hilos de colores vibrantes.'
    },
    {
      title: 'Bolso de cuero',
      price: 120,
      image: 'https://via.placeholder.com/150',
      description: 'Hecho a mano con cuero colombiano de alta calidad.'
    },
    {
      title: 'Cuadro decorativo',
      price: 80,
      image: 'https://via.placeholder.com/150',
      description: 'Arte textil inspirado en la cultura paisa.'
    },
    {
      title: 'Bufanda tejida',
      price: 35,
      image: 'https://via.placeholder.com/150',
      description: 'Ideal para clima frío, con patrón único.'
    }
  ];

  return (
    <div className="product-grid">
      {products.map(({ title, price, image, description }, index) => (
        <ProductCard
          key={index}
          title={title}
          price={price}
          image={image}
          description={description}
        />
      ))}
    </div>
  );
}