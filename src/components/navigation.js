import { Link } from "gatsby"
import React from "react"

import styled from "styled-components";

const NavWrapper = styled.nav`
    ul {
        display: flex;
        margin: 0;
        padding: 0;
        justify-content: flex-end;
        font-size: 1.6rem;

        li {
            list-style: none;
            margin-left: 3rem;
            a {
                color: var(--black);
                &:hover {
                    color: var(--action);
                }
                &.active {
                    color: var(--action);
                }
            }
        }
    }
    
`;

const Navigation = () => (
    <NavWrapper>
      <ul>
        <li>
            <Link activeClassName="active" to="/">Home</Link> 
        </li>
        <li>
            <Link activeClassName="active" to="/about">About</Link>
        </li>
        <li>
            <Link activeClassName="active" to="/projects">Projects</Link>
        </li>
        <li>
            <Link activeClassName="active" to="/contact">Contact</Link>
        </li>
      </ul>
    </NavWrapper>
)


export default Navigation;
