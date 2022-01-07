import React from "react";
import "./home.css";

import Product from "../Product/Product";
import HomeCarausel from "./Carsouel";

import oneplusblueImage from "../assets/onePlus8t.jpg";
import oneplusImage from "../assets/OnePlus-7.jpg";
import oneplusredImage from "../assets/oneplus8tred.jpg";
import samsungImage from "../assets/samsung10plus.jpg";
import iphone12Image from "../assets/iphone12.jpg";

 function Home() {
  return (
    <div className="home">
      <div className="homeCarausel">
        <HomeCarausel />
      </div>

<div className="products">
        <div className="productRow">
          <Product
            id={1}
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={8000}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
          />

          <Product 
            id={2}
            title="Kenwood kMix Stand Miser for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk"
            price={4500}
            image="https://st.depositphotos.com/1765561/4857/i/450/depositphotos_48579839-stock-photo-opened-blue-stand-mixer.jpg"
            rating={4}
          />
        
          <Product 
            id={3}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual QHD 5120 x 1440"
            price={100000}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
          <div className="productRow">
          <Product
            id={4}
            title="Samsung Galaxy S10 Plus (Prism Black, 8GB RAM, 128GB Storage)"
            price="40000"
            image={samsungImage}
            rating={2}
          />
          <Product
            id={5}
            title="OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)"
            price="46000"
            image={oneplusblueImage}
            rating={5}
          />
          <Product
            id={6}
            title="OnePlus 8T 5G (Lunar Silver 12GB RAM, 256GB Storage)"
            price="45000"
            image={oneplusredImage}
            rating={4}
          />
        </div>
        <div className="productRow">
          <Product
            id={7}
            title="OnePlus 8T 5G (Lunar Silver 12GB RAM, 256GB Storage)"
            price="45000"
            image={oneplusredImage}
            rating={4}
          />
          <Product
            id={8}
            title="OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)"
            price="46000"
            image={oneplusblueImage}
            rating={5}
          />
          <Product
            id={9}
            title="Samsung Galaxy S10 Plus (Prism Black, 8GB RAM, 128GB Storage)"
            price="40000"
            image={samsungImage}
            rating={2}
          />
          <Product
            id={10}
            title="Samsung Galaxy S10 Plus (Prism Black, 8GB RAM, 128GB Storage)"
            price="40000"
            image={samsungImage}
            rating={4.5}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;