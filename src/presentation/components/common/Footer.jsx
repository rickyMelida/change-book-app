import React from 'react'
import { facebook, instagram, twitter } from '../../../assets/images/images'

export const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              {/* <svg className="bi" width="30" height="24">
              <use link:href="#bootstrap" />
            </svg> */}
            </a>
            <span className="text-muted">&copy; 2023 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <img src={facebook} alt="Facebook" width="24" srcSet="" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <img src={instagram} alt="Instagram" width="24" srcSet="" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <img src={twitter} alt="Twitter" width="24" srcSet="" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}
