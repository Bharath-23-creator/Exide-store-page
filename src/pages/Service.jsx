
export default function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        At Exide Store, we don’t just sell products — we provide excellent
        services to make your shopping smooth and hassle-free.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>🔧 Product Installation</h3>
          <p>
            We provide hassle-free installation of your purchased products with
            expert guidance.
          </p>
        </div>

        <div className="service-card">
          <h3>🛠️ Maintenance & Support</h3>
          <p>
            Our support team is available for any issues, repairs, and regular
            maintenance.
          </p>
        </div>

        <div className="service-card">
          <h3>🚚 Fast Delivery</h3>
          <p>
            Get your products delivered quickly and safely to your doorstep with
            tracking support.
          </p>
        </div>
      </div>
    </div>
  );
}