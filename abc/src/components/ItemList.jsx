// src/components/ItemList.jsx

function ItemList() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Product List</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((item) => (
          <li
            key={item.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <strong>{item.name}</strong> <br />
            Price: ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
