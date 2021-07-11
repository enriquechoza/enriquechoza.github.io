import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { NAV_ITEMS } from '../../config';
import { Nav } from './styles';

const Navigation = ({ location }) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const section = NAV_ITEMS.findIndex((item) => item.url.substring(1) === location.hash);
    setActiveSection(section);
  }, [location]);

  return (
    <Nav>
      <ol>
        {NAV_ITEMS &&
          NAV_ITEMS.map(({ url, name }, i) => (
            <li key={i}>
              <Link className={`nav-link ${i === activeSection && "active"}`} to={url}>
                {`0${ i+1 }`}
              </Link>
              <span>{name}</span>
            </li>
          ))}
      </ol>
    </Nav>
  )
}

export { Navigation };
