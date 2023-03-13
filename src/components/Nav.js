// import { Link } from "react-router-dom";

// const Nav = () => (
//   <ul className="nav justify-content-center">
//     <li className="nav-item">
//       <Link className="nav-link" aria-current="page" to="/">
//         Home
//       </Link>
//     </li>
//     <li className="nav-item">
//       <Link className="nav-link" to="/login">
//         Loginpage
//       </Link>
//     </li>
//     <li className="nav-item">
//       <Link className="nav-link" to="/signup">
//         Signupp
//       </Link>
//     </li>
//   </ul>
// );

// export default Nav;

import { BrowserRouter as Router, Link } from 'react-router-dom';

const Nav = () => (
  <Router>
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">
          
        </Link>
      </li>
    </ul>
  </Router>
);

export default Nav;