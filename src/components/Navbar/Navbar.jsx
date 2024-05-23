import { NavLink } from "react-router-dom";
import img from "../../img/icon.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";


function OffcanvasExample() {
  return (
    <>
      {[false, "sm", "md", "lg", "xl"].map((expand) => (
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
                  <NavLink
                    to={"/contact"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active mx-2 d-flex text-decoration-none align-items-center my-1"
                        : " mx-2 d-flex text-decoration-none align-items-center nav-text my-1"
                    }
                  >
                    Kontakt
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
      <br />
      <br />
    </>
  );
}

export default OffcanvasExample;
