import React, { Component } from 'react';
import styled from 'styled-components';
import ContentWrapper from './contentWrapper';
import SubHeading from './subHeading';

const FooterWrapper = styled.footer`
    padding: 6rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

class Footer extends Component {
    render() {
        return (
            <ContentWrapper bg="#F4F4F4">
                <FooterWrapper>
                    <div>
                        <SubHeading>Let's Work Together</SubHeading>
                        <p>If you have a website or mobile app idea in mind or you need some advice about product design, feel free to contact me. Currently my time books quickly, so the sooner you write, the better it is for both of us</p>

                        <p>&copy; { new Date().getFullYear() } All rights reserved - Designed & Coded by Chris Elias</p>
                    </div>
                    
                </FooterWrapper>
            </ContentWrapper>
           
        );
    }
}

export default Footer;