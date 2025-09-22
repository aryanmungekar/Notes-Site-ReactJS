 import {Link, NavLink} from "react-router-dom";


function Navbar() {
    return (
        <>
            <footer className="mobile-footer">
                <NavLink to="/" className="footer-item">
                    <i className="fa-solid fa-house" />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/SPPU" className="footer-item">
                    <i className="fa-solid fa-file-pdf" />
                    <span>Notes</span>
                </NavLink>
                
                <NavLink to="/search/" className="footer-item">
                    <i className="fa-solid fa-magnifying-glass" />
                    <span>Search</span>
                </NavLink>
                
                <NavLink to="/events/" className="footer-item">
                    <i className="fa-solid fa-calendar-days" />
                    <span>Events</span>
                    <span className="new-label">NEW</span>
                </NavLink>

                <NavLink to="/internship" className="footer-item">
                    <i className="fa-regular fa-paper-plane" />
                    <span>Internship</span>
                    <span className="new-label">NEW</span>
                </NavLink>

                <NavLink to="/download" className="footer-item">
                    <i className="fas fa-download" />
                    <span>Downlaod</span>
                </NavLink>
                {/* Account Icon Placeholder */}
                {/* Footer Account Icon */}
                {/* <div
    id="home-account-logo"
    className="footer-item"
    style={{ textAlign: "center", display: "flex" }}
  >
    <a href="/account/">
      <img
        id="profile-photo"
        src="/assets/images/account.jpg"
        alt="Account"
        style={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          objectFit: "cover",
          verticalAlign: "middle"
        }}
      />
    </a>
  </div> */}
            </footer>
        </>
    );
}

export default Navbar;