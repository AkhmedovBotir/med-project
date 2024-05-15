// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container className="d-flex justify-content-between">
//         <Navbar.Brand>
//           <NavLink to={"/"}>
//           </NavLink>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//           <Nav>
//             <NavLink
//               to={"/"}
//               className={({ isActive, isPending }) =>
//                 isPending ? "pending" : isActive ? "active" : ""
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to={"/about"}
//               className={({ isActive, isPending }) =>
//                 isPending ? "pending" : isActive ? "active" : ""
//               }
//             >
//               About
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import img from "../../img/icon.png";

import React from "react";

export default function Navbars() {
  return (
    <div>
      <Container fluid className="d-flex align-items-center justify-content-between p-3 px-5 navbar">
        <img src={img} width="200" />
        <Nav>
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active mx-2 d-flex text-decoration-none align-items-center" : " mx-2 d-flex text-decoration-none align-items-center nav-text"
            }
          >
            Bosh sahifa
          </NavLink>
          <NavLink
            to={"/doctors"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active mx-2 d-flex text-decoration-none align-items-center" : " mx-2 d-flex text-decoration-none align-items-center nav-text"
            }
          >
            Shifokorlar
          </NavLink>
          <NavLink
            to={"/pharmacies"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active mx-2 d-flex text-decoration-none align-items-center" : " mx-2 d-flex text-decoration-none align-items-center nav-text"
            }
          >
            Dorixonalar
          </NavLink>
          <NavLink
            to={"/clinics"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active mx-2 d-flex text-decoration-none align-items-center" : " mx-2 d-flex text-decoration-none align-items-center nav-text"
            }
          >
            Klinikalar
          </NavLink>
          <NavLink
            to={"/drugs"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active mx-2 d-flex text-decoration-none align-items-center" : " mx-2 d-flex text-decoration-none align-items-center nav-text"
            }
          >
            Dorilar
          </NavLink>
          <NavLink
            to={"/news"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active mx-2 d-flex text-decoration-none align-items-center" : " mx-2 d-flex text-decoration-none align-items-center nav-text"
            }
          >
            Yangiliklar
          </NavLink>
          <button className="btn btn-login mx-2">Kirish</button>
          <button className="btn btn-register mx-2">Registrasiya</button>
        </Nav>
      </Container>
    </div>
  );
}
