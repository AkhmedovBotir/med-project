// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import img from "../../img/icon.png";

// import React from "react";

// export default function Navbars() {
//   return (
//     <div>
//       <Container fluid className="d-flex align-items-center justify-content-between p-3 px-5 navbar navbar-pc">
//         <Nav>
//           <NavLink
//             to={"/"}
//             className={({ isActive, isPending }) =>
//               isPending ? "pending" : isActive ? "active mx-2 d-flex text-decoration-none align-items-center" : " mx-2 d-flex text-decoration-none align-items-center nav-text"
//             }
//           >
//             Bosh sahifa
//           </NavLink>
//           <NavLink
//             to={"/doctors"}
//             className={({ isActive, isPending }) =>
//               isPending ? "pending" : isActive ? "active mx-2 d-flex text-decoration-none align-items-center" : " mx-2 d-flex text-decoration-none align-items-center nav-text"
//             }
//           >
//             Shifokorlar
//           </NavLink>
//           <NavLink
//             to={"/pharmacies"}
//             className={({ isActive, isPending }) =>
//               isPending ? "pending" : isActive ? "active mx-2 d-flex text-decoration-none align-items-center" : " mx-2 d-flex text-decoration-none align-items-center nav-text"
//             }
//           >
//             Dorixonalar
//           </NavLink>
//           <NavLink
//             to={"/clinics"}
//             className={({ isActive, isPending }) =>
//               isPending ? "pending" : isActive ? "active mx-2 d-flex text-decoration-none align-items-center" : " mx-2 d-flex text-decoration-none align-items-center nav-text"
//             }
//           >
//             Klinikalar
//           </NavLink>
//           <NavLink
//             to={"/drugs"}
//             className={({ isActive, isPending }) =>
//               isPending ? "pending" : isActive ? "active mx-2 d-flex text-decoration-none align-items-center" : " mx-2 d-flex text-decoration-none align-items-center nav-text"
//             }
//           >
//             Dorilar
//           </NavLink>
//           <NavLink
//             to={"/news"}
//             className={({ isActive, isPending }) =>
//               isPending ? "pending" : isActive ? "active mx-2 d-flex text-decoration-none align-items-center" : " mx-2 d-flex text-decoration-none align-items-center nav-text"
//             }
//           >
//             Yangiliklar
//           </NavLink>
//           <button className="btn btn-login mx-2">Kirish</button>
//           <button className="btn btn-register mx-2">Registrasiya</button>
//         </Nav>
//       </Container>
//     </div>
//   );
// }

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  return (
    <>
      {[false, "sm", "md", "lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary px-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={img} width="200" className="brand-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <br />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active mx-2 d-flex text-decoration-none align-items-center my-1"
                        : " mx-2 d-flex text-decoration-none align-items-center nav-text my-1"
                    }
                  >
                    Bosh sahifa
                  </NavLink>
                  <NavLink
                    to={"/doctors"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active mx-2 d-flex text-decoration-none align-items-center my-1"
                        : " mx-2 d-flex text-decoration-none align-items-center nav-text my-1"
                    }
                  >
                    Shifokorlar
                  </NavLink>
                  <NavLink
                    to={"/pharmacies"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active mx-2 d-flex text-decoration-none align-items-center my-1"
                        : " mx-2 d-flex text-decoration-none align-items-center nav-text my-1"
                    }
                  >
                    Dorixonalar
                  </NavLink>
                  <NavLink
                    to={"/clinics"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active mx-2 d-flex text-decoration-none align-items-center my-1"
                        : " mx-2 d-flex text-decoration-none align-items-center nav-text my-1"
                    }
                  >
                    Klinikalar
                  </NavLink>
                  <NavLink
                    to={"/drugs"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active mx-2 d-flex text-decoration-none align-items-center my-1"
                        : " mx-2 d-flex text-decoration-none align-items-center nav-text my-1"
                    }
                  >
                    Dorilar
                  </NavLink>
                  <NavLink
                    to={"/news"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active mx-2 d-flex text-decoration-none align-items-center my-1"
                        : " mx-2 d-flex text-decoration-none align-items-center nav-text my-1"
                    }
                  >
                    Yangiliklar
                  </NavLink>
                  <button className="btn btn-login mx-2 my-1">Kirish</button>
                  <button className="btn btn-register mx-2 my-1">
                    Registrasiya
                  </button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <br /><br />
    </>
  );
}

export default OffcanvasExample;
