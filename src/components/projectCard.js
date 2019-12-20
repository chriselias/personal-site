import React from 'react';
import styled from 'styled-components';

const Card = styled.div.attrs(props => ({
    bg: props.bg || "#CCC"
}))`
    min-height: 250px;
    

    figure {
        background: ${props => props.bg };
        position: relative;
        overflow: hidden;
        border-radius: 12px;
        &:hover {
            .overlay, figcaption {
                opacity: 1;
            }
        }
    }

    figcaption {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 1.8rem;
        color: white;
        opacity: 0;
    }
    .overlay {
    background: ${props => props.bg };
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-transition: .45s ease-in-out;
    transition: .45s ease-in-out;
    }
`

const ProjectCard = (props) => {
    const { color, title, cover, images } = props.project.node.frontmatter;

    return (
        <Card bg={color}>
            {/* <h1>{title}</h1> */}
        <figure>
                <img src={images[0].publicURL} />
            <figcaption>
                {title}
            </figcaption>
        <div className="overlay"></div>
        </figure>
           
        </Card>
    );
};

export default ProjectCard