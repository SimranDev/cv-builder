import styled from "styled-components";
import Typewriter from "typewriter-effect";

const TitleMsg = () => {
  return (
    <ParentContainer>
      <h1>CV Builder Tool </h1>
      <h6> developed by Simran</h6>
      <p>Text content of the page below is editable and exportable.</p>
      <TypewriterDiv>
        <h4>You can&nbsp;</h4>
        <h4>
          <Typewriter
            options={{
              strings: ["edit", "save", "export", "customize"],
              autoStart: true,
              loop: true,
              deleteSpeed: 100,
            }}
          />
        </h4>
      </TypewriterDiv>
      <hr />
    </ParentContainer>
  );
};

export default TitleMsg;

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    margin-top: 10px;
  }

  hr {
    height: 4px;
    width: 50%;
    margin-top: 10px;
  }
`;

const TypewriterDiv = styled.div`
  width: 138px;
  display: flex;
  font-style: italic;
  flex-direction: row;

  /* border: 1px dashed green; */
`;
