export default function Cart({ cartItems, addToCart, removeFromCart }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹ {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ₹ {item.price * item.quantity}</p>

                <div className="cart-actions">
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <button onClick={() => addToCart(item)}>+</button>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart({ ...item, quantity: 1 })}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-total">
        <h2>Total: ₹ {total}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}
