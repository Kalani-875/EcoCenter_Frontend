import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

function Footer() {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          <h7>All Rights Reserved by Eco Center 2023</h7>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
