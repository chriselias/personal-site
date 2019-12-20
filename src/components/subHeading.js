import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
    font-size: 2.8rem;
    font-weight: 800;
`
const SubHeading = ({children}) => {
    return (
        <Heading>
            {children}
        </Heading>
    );
};

export default SubHeading;