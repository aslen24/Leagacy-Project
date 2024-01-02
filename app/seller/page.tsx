import React from "react";
import './Seller.css';
import NavbarSeller from "./navebareSeller";


const Seller: React.FC = () => {
  // Replace these placeholders with actual data
  const email = "user@example.com";
  const name = "John Doe";

  return (
    <>
      <div className="divAdmin">
        <div className="divAdmin2">
          <NavbarSeller/>

        </div>
      </div>
    </>
  );
};

export default Seller;