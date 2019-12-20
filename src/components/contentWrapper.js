
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: var(--siteWidth);
    margin: 0 auto;
    padding: 3rem; 
  `;

const OuterWrapper = styled.div.attrs(props => ({
    bg: props.bg || "transparent"
}))`
    background: ${props => props.bg };
`

const ContentWrapper = ({ children, bg }) => {
    return (
    <OuterWrapper bg={bg}>
            <Wrapper>
                {children}
            </Wrapper>
    </OuterWrapper>
        
    )
}

ContentWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ContentWrapper
