// ProductCard.jsx
export function ProductCard({ title, price, image, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2>{title}</h2>
      <p className="price">${price}</p>
      <p className="description">{description}</p>
    </div>
  );
}