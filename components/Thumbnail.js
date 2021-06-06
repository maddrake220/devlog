import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Date from "./date";

const Container = styled.div`
  position: relative;
  background-color: whitesmoke;
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
  margin-bottom: 11px;
`;

const SImage = styled(Image)`
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  &:hover {
    ${SImage} {
      opacity: 0.9;
    }
  }
`;

const SDate = styled.div`
  bottom: 5px;
  right: 6px;
  position: absolute;
`;
const TagContainer = styled.div`
  margin: 1rem;
`;

const Tag = styled.div`
  background-color: black;
  color: white;
  display: inline-block;
  box-sizing: border-box;
  padding: 3px;
  margin-right: 10px;
  border-radius: 10px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

const AStyle = styled.a`
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

const Thumbnail = ({ id, image, title, year, content, tag }) => (
  <Container>
    <Link href={`/posts/${id}`}>
      <AStyle>
        <ImageContainer>
          <SImage priority src={image} width={344} height={244} />
          <Title>{title}</Title>
          <Description>
            {content && content.length > 136
              ? `${content.substring(0, 136)}...`
              : content}
          </Description>
        </ImageContainer>
      </AStyle>
    </Link>
    <TagContainer>
      {tag && tag.map((item, index) => <Tag>{item}</Tag>)}
    </TagContainer>
    <SDate>
      <Date dateString={year} />
    </SDate>
  </Container>
);

Thumbnail.propTypes = {
  image: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  content: PropTypes.string,
  tag: PropTypes.array,
};

export default Thumbnail;
