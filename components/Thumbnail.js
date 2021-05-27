import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import Image from 'next/image'
import Date from "./date"

const Container = styled.div`
    border-radius: 10px;
    font-size: 12px;
    box-sizing: content-box;
    box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
    color: black;
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem;
`;


const Description = styled.div`
    color: grey;
    font-size: 12px;
    margin-left: 1rem;
    margin-bottom: 11px;
`;

const SImage = styled(Image)`
border-radius: 10px;
`;

const ImageContainer = styled.div`
    &:hover{
        ${SImage} {
            opacity: 0.9;
        }
    }
`;

const Thumbnail = ({id, image, title, year, content}) => 
    
        <Link href={`/posts/${id}`}>
          <a>
            <Container>
                <ImageContainer>
                    <SImage
                        priority
                        src={image}
                        width={344}
                        height={244}
                    />
                <Title>{title}</Title>
                <Description>{content && content.substring(0,142)}...</Description>
                <Date dateString={year}/>
                </ImageContainer>
            </Container>
        </a>
    </Link>
    
    


Thumbnail.propTypes = {
    image: PropTypes.string,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string,
    content: PropTypes.string
}

export default Thumbnail;