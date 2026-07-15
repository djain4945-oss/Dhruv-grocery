import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="logo">
          <i className="fa-solid fa-leaf"></i>
          Dhruv Grocery
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="icons">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Fresh Fruits Delivered Daily</h1>

          <p>
            Healthy, Organic and Farm Fresh Fruits at your doorstep.
            Order today and enjoy premium quality.
          </p>

          <button>Shop Now</button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=700"
            alt="Fruits"
          />
        </div>
      </section>

      <section id="products">
        <h2>Featured Fruits</h2>

        <div className="product-container">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500" alt="Fresh Apples" />
            <h3>Fresh Apples</h3>
            <p>₹120 / kg</p>
            <button>Add to Cart</button>
          </div>

          <div className="card">
            <img src="https://pixlr.com/images/prompter/banana.webp" alt="Bananas" />
            <h3>Bananas</h3>
            <p>₹60 / dozen</p>
            <button>Add to Cart</button>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=500" alt="Oranges" />
            <h3>Oranges</h3>
            <p>₹90 / kg</p>
            <button>Add to Cart</button>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500" alt="Mangoes" />
            <h3>Mangoes</h3>
            <p>₹180 / kg</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      <section id="about">
        <h2>Why Choose Dhruv Grocery?</h2>

        <div className="features">
          <div>
            <i className="fa-solid fa-truck-fast"></i>
            <h3>Fast Delivery</h3>
            <p>Same day delivery available.</p>
          </div>

          <div>
            <i className="fa-solid fa-seedling"></i>
            <h3>Organic Fruits</h3>
            <p>Directly sourced from farms.</p>
          </div>

          <div>
            <i className="fa-solid fa-medal"></i>
            <h3>Best Quality</h3>
            <p>100% Fresh and Healthy.</p>
          </div>
        </div>
      </section>

      <section id="reviews">
        <h2>Customer Reviews</h2>

        <div className="review-box">
          <div className="review">
            <p>
              ⭐⭐⭐⭐⭐
              <br />
              <br />
              Amazing quality fruits. Very fresh.
            </p>
            <h4>- Tushar</h4>
          </div>

          <div className="review">
            <p>
              ⭐⭐⭐⭐⭐
              <br />
              <br />
              Fast delivery and affordable prices.
            </p>
            <h4>- Shobhit</h4>
          </div>

          <div className="review">
            <p>
              ⭐⭐⭐⭐⭐
              <br />
              <br />
              Best grocery website I have used.
            </p>
            <h4>- Dhruv jain</h4>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send Message</button>
        </form>
      </section>

      <footer>
        <p>© 2026 Dhruv Grocery | Freshness You Can Trust 🍎</p>
      </footer>
    </>
  );
}

export default App;