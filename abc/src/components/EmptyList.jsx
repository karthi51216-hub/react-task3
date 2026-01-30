
// src/components/ItemList.jsx

function EmptyList() {
  // Try changing this to [] to test empty state
  const products = [];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Product List</h2>

      {products.length === 0 ? (
        <p style={{ color: "gray" }}>No items available</p>
      ) : (
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
      )}
    </div>
  );
}

export default EmptyList;
