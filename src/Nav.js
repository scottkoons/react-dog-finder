// import React from "react";
// import { Link } from "react-router-dom";

// function Nav({ dogs }) {
//   return (
//     <ul>
//       {dogs.map(dog => (
//         <li key={dog}>
//           <Link to={`/dog/${dog}`}>Show me {dog}!</Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// Nav.defaultProps = {
//   dogs: ["duke", "perry", "tubby", "whiskey"]
// };

// export default Nav;


import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = ({ dogs }) => {
  return (
    <nav className='Nav'>
      <div className='Nav-items-container'>
        <NavLink key='home' className='Nav-item' to={`/dogs`}>
          Home
        </NavLink>
        {dogs.map((d) => (
          <NavLink key={d.name} className='Nav-item' to={`/dogs/${d.name}`}>
            {d.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Nav;