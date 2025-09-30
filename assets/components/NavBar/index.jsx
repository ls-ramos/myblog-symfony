import React from 'react';

function NavBar(props) {
  const { routes } = props;
  const homeRoute = routes[0];
  routes.splice(0, 1);

  return (
    <nav>
      <ul>
        <li><h1>{homeRoute}</h1></li>
        {routes.map((route, ind) => <li key={`${route + ind}`}>{route}</li>)}
      </ul>
    </nav>
  );
}

export default NavBar;
