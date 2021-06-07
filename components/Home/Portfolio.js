import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import Link from "next/link";

const Project = styled.div`
  position: relative;
  width: 100%;
  height: 110px;
  border-radius: 10px;
  box-sizing: content-box;
  display: flex;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

const Project_Image = styled.div`
  color: ${(props) => (props.fontcolor ? props.fontcolor : "red")};
  position: relative;
  text-align: center;
  background-color: black;
  left: 2%;
  top: 20%;
  width: 30%;
  height: 60%;
`;

const Project_Title = styled.div`
  font-size: 25px;
  font-weight: 800;
  padding-top: 11px;
`;
const Project_Info0 = styled.div`
  position: relative;
  text-align: justify;
  width: 50%;
  padding-left: 3rem;
`;

const Project_Info = styled.div`
  font-weight: 800;
  padding-top: 1rem;
`;
const Project_Info2 = styled.div`
  font-size: 13px;
`;
const Project_Period = styled.div`
  position: absolute;
  bottom: 1.3rem;
  font-size: 3px;
`;

const Project_Description = styled.div`
  position: absolute;
  color: gray;
  font-size: 15px;
  font-weight: 600;
  right: 2rem;
  bottom: 6px;
  width: 20%;
  height: 80%;
`;

const Portfolio_Modal = styled.div`
  display: flex;
`;

const Portfolio_Modal_image = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 420px;
  height: 300px;
  background-image: url(${(props) => `/images/${props.bgUrl}`});
  background-position: center center;
  background-size: cover;
  z-index: 1001;
`;

const Portfolio_Modal_title = styled.div`
  position: relative;
  padding-left: 3rem;
  padding-right: 1rem;
  font-size: 32px;
  font-weight: 900;
`;
const Portfolio_Modal_description = styled.div`
  position: relative;
  font-size: 21px;
  font-weight: 400;
`;

const SiteUrl = styled.h2`
  font-size: 16px;
`;
Modal.setAppElement("#root");
const Portfolio = (Props) => {
  console.log(Props.image);
  const [IsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (IsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [IsOpen]);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: { zIndex: 1000 },
  };
  return (
    <div>
      <Project onClick={openModal}>
        <Project_Image fontcolor={Props.fontcolor}>
          <Project_Title>{Props.title}</Project_Title>
        </Project_Image>
        <Project_Info0>
          <Project_Info>{Props.info}</Project_Info>
          <Project_Info2>{Props.info2}</Project_Info2>
          <Project_Period>{Props.period}</Project_Period>
        </Project_Info0>
        <Project_Description>{Props.description}</Project_Description>
      </Project>
      <Modal
        isOpen={IsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Portfolio_Modal>
          <Portfolio_Modal_image bgUrl={Props.image} />
          <Portfolio_Modal_title>
            {Props.title}
            <Portfolio_Modal_description>
              {Props.description}
            </Portfolio_Modal_description>
            <div>
              <Link href={Props.homepage}>
                <a target="_blank">
                  <SiteUrl>{Props.homepage}</SiteUrl>
                </a>
              </Link>
            </div>
          </Portfolio_Modal_title>
        </Portfolio_Modal>
      </Modal>
    </div>
  );
};

export default Portfolio;
