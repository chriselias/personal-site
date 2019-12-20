import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components";
import Navigation from './navigation';
import ContentWrapper from "./contentWrapper";

const Logo = styled.div`
  a {
    font-weight: 800;
    font-size: 2.4rem;
    color: var(--black);
    &:hover {
      color: var(--action);
    }
  }
`;

const HeaderWrapper = styled.header`
  border-bottom: 1px solid #CCC;
  `;
const InnerHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <ContentWrapper>
    <InnerHeader>
    <Logo>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
    </Logo>
    <Navigation />
    </InnerHeader>
    </ContentWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
