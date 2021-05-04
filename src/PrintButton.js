import styled from "styled-components";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Page from "./Page";
import { VscFilePdf } from "react-icons/vsc";

const PrintButton = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Page ref={componentRef} />
      <PrintBtn onClick={handlePrint}>
        <VscFilePdf />
      </PrintBtn>
    </div>
  );
};

export default PrintButton;

const PrintBtn = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border-width: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: #2ecc71;

  :active {
    bottom: 29px;
  }

  & svg {
    color: white;
    margin-top: 4px;
    margin-left: 2px;

    height: 30px;
    width: 30px;
  }
`;
