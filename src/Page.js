import styled from "styled-components";
import React, { Component } from "react";
import { MdLocalPhone, MdWeb, MdWork } from "react-icons/md";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

class Page extends Component {
  state = {
    users: [],
  };

  addUser = () => {
    this.setState({
      users: [
        ...this.state.users,
        <Skill contentEditable="true" suppressContentEditableWarning={true}>
          Skill
        </Skill>,
      ],
    });
  };

  render() {
    return (
      <>
        <PageContainer>
          <Name contentEditable="true" suppressContentEditableWarning={true}>
            Simran Singh
          </Name>
          <HeadContainer>
            <ContactItem>
              <MdLocalPhone />
              <h5 contentEditable="true" suppressContentEditableWarning={true}>
                0226497917
              </h5>
            </ContactItem>
            <ContactItem>
              <MdWeb />
              <h5 contentEditable="true" suppressContentEditableWarning={true}>
                www.codesim.dev
              </h5>
            </ContactItem>
            <ContactItem>
              <AiOutlineMail />
              <h5 contentEditable="true" suppressContentEditableWarning={true}>
                codesimar@gmail.com
              </h5>
            </ContactItem>
            <ContactItem>
              <AiFillLinkedin />
              <h5 contentEditable="true" suppressContentEditableWarning={true}>
                linkedin.com/in/devsim
              </h5>
            </ContactItem>
          </HeadContainer>
          <hr />

          <BodyContainer>
            <LeftDiv>
              <SkillsContainer>
                <Heading>SKILLS</Heading>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  HTML5 / CSS3
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Javascript
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  React
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Skill X
                </Skill>
                {this.state.users}
              </SkillsContainer>
            </LeftDiv>

            <RightDiv>
              <RightParent>
                <HeadSection>
                  <FaGraduationCap />
                  <Heading>EDUCATION</Heading>
                </HeadSection>

                <EducationSection>
                  <Divider></Divider>
                  <Details>
                    <TitleRightDiv>
                      Specialization in Software Development - Level 7
                      <span>2015-2016</span>
                    </TitleRightDiv>
                    <ContentRightDiv>
                      National Technology Institute - NTEC, Auckland, New
                      Zealand
                    </ContentRightDiv>
                    <HeightSpacer />
                    <TitleRightDiv>
                      Bachelor of Technology - B.Tech
                      <span>2011-2014</span>
                    </TitleRightDiv>
                    <ContentRightDiv>
                      Punjab Technical University - PTU, India
                    </ContentRightDiv>
                  </Details>
                </EducationSection>
              </RightParent>
              <br />

              <RightParent>
                <HeadSection>
                  <MdWork />
                  <Heading>EMPLOYMENT HISTORY</Heading>
                </HeadSection>

                <EducationSection>
                  <Divider></Divider>
                  <Details>
                    <TitleRightDiv>
                      Web Developer - Fateh Fitness Studio, India
                      <span>October 2020 - Present</span>
                    </TitleRightDiv>
                    <ContentRightDiv>
                      Skills: ReactJS, Javascript, NodeJS, AWS Lambda, SES,
                      Amplify, styled-components, AdobeXD, Flutter, Dart
                    </ContentRightDiv>
                    <JobTasks>
                      • Developing React website for the fitness studio.
                      Currently active on{" "}
                      <a href="https://www.fatehfitness.in/">
                        www.fatehfitness.in
                      </a>
                    </JobTasks>
                    <JobTasks>
                      • Managing AWS Services for deployment, lambda functions,
                      API Gateway and email services,
                    </JobTasks>
                    <JobTasks>
                      • Creating Flutter/Dart widgets for mobile-development
                      team
                    </JobTasks>

                    <HeightSpacer />

                    <TitleRightDiv>
                      Mobile Developer & Designer -If Else Cloud Ltd, Auckland,
                      NZ
                      <span>March2019-June2019</span>
                    </TitleRightDiv>
                    <ContentRightDiv>
                      Skills: SketchApp, AdobeXD, Flutter, Dart, Documentation,
                      RPi
                    </ContentRightDiv>
                    <JobTasks>
                      • Designing cross-platform wireframes and prototypes using
                      AdobeXD and SketchApp.
                    </JobTasks>
                    <JobTasks>
                      • Developing Flutter/Dart UX Pages for Android, IOS,
                      WatchOS for the UX testing purposes before developing
                      pages natively.
                    </JobTasks>
                    <JobTasks>
                      • Configuring IoT devices and RPis for dummy data.
                    </JobTasks>
                    <HeightSpacer />

                    <TitleRightDiv>
                      Frontend Web Dev (Project for NKAI, Ministry of Education,
                      NZ) - Firstec Ltd
                      <span>Sep2017-Mar2018</span>
                    </TitleRightDiv>
                    <ContentRightDiv>
                      Skills: AngularJS, AdobeXD, HTML5, CSS3, Javascript,
                      Client Handling, Product Presentation
                    </ContentRightDiv>
                    <JobTasks>
                      • Developing Angular components for the student management
                      system of NKAI
                    </JobTasks>
                    <JobTasks>
                      • Designing proptotypes and wireframes for development
                      team
                    </JobTasks>
                    <JobTasks>
                      • Preparing upcoming prototypes for presentation purposes
                      and requirement gathering
                    </JobTasks>
                  </Details>
                </EducationSection>
              </RightParent>
              <br />

              <RightParent>
                <HeadSection>
                  <AiFillStar />
                  <Heading>PERSONAL PROJECTS</Heading>
                </HeadSection>

                <EducationSection>
                  <Divider></Divider>
                  <Details>
                    <TitleRightDiv>
                      Web Developer - Fateh Fitness Studio, India
                      <span>October 2020 - Present</span>
                    </TitleRightDiv>
                    <ContentRightDiv>
                      Skills: ReactJS, Javascript, NodeJS, AWS Lambda, SES,
                      Amplify, styled-components, AdobeXD, Flutter, Dart
                    </ContentRightDiv>
                    <JobTasks>
                      • Developing React website for the fitness studio.
                      Currently active on{" "}
                      <a href="https://www.fatehfitness.in/">
                        www.fatehfitness.in
                      </a>
                    </JobTasks>
                    <JobTasks>
                      • Managing AWS Services for deployment, lambda functions,
                      API Gateway and email services,
                    </JobTasks>
                    <JobTasks>
                      • Creating Flutter/Dart widgets for mobile-development
                      team
                    </JobTasks>

                    <HeightSpacer />

                    <TitleRightDiv>
                      Mobile Developer & Designer -If Else Cloud Ltd, Auckland,
                      NZ
                      <span>March2019-June2019</span>
                    </TitleRightDiv>
                    <ContentRightDiv>
                      Skills: SketchApp, AdobeXD, Flutter, Dart, Documentation,
                      RPi
                    </ContentRightDiv>
                    <JobTasks>
                      • Designing cross-platform wireframes and prototypes using
                      AdobeXD and SketchApp.
                    </JobTasks>
                    <JobTasks>
                      • Developing Flutter/Dart UX Pages for Android, IOS,
                      WatchOS for the UX testing purposes before developing
                      pages natively.
                    </JobTasks>
                    <JobTasks>
                      • Configuring IoT devices and RPis for dummy data.
                    </JobTasks>
                    <HeightSpacer />

                    <TitleRightDiv>
                      Frontend Web Dev (Project for NKAI, Ministry of Education,
                      NZ) - Firstec Ltd
                      <span>Sep2017-Mar2018</span>
                    </TitleRightDiv>
                    <ContentRightDiv>
                      Skills: AngularJS, AdobeXD, HTML5, CSS3, Javascript,
                      Client Handling, Product Presentation
                    </ContentRightDiv>
                    <JobTasks>
                      • Developing Angular components for the student management
                      system of NKAI
                    </JobTasks>
                    <JobTasks>
                      • Designing proptotypes and wireframes for development
                      team
                    </JobTasks>
                    <JobTasks>
                      • Preparing upcoming prototypes for presentation purposes
                      and requirement gathering
                    </JobTasks>
                  </Details>
                </EducationSection>
              </RightParent>
            </RightDiv>
          </BodyContainer>
        </PageContainer>
        <AddSkillBtn onClick={this.addUser}>Add Skill</AddSkillBtn>
      </>
    );
  }
}

export default Page;

const PageContainer = styled.section`
  background: white;
  display: block;
  margin: 0.5cm auto;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  width: 210mm;
  height: 268mm;
  padding: 16px;

  @media print {
    box-shadow: none;
  }

  /* [contenteditable] {
    outline: none;
  } */
`;

const HeightSpacer = styled.div`
  height: 14px;
`;

const Name = styled.div`
  font-size: 1.5em;
  text-align: center;
  font-family: var(--title-font);
  text-transform: uppercase;
  /*  */
  /* -webkit-user-modify: read-write;
  -moz-user-modify: read-write; */
`;

const HeadContainer = styled.div`
  /* n; */
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 6px;
  margin-top: 2px;
`;

const ContactItem = styled.div`
  margin: 6px 0;
  display: flex;
  flex-direction: row;
  width: auto;
  align-items: center;
  justify-content: center;
  text-align: center;

  svg {
    margin-right: 4px;
  }

  p {
    line-height: 3px;
    font-size: 0.8em;
  }
`;

const LeftDiv = styled.div`
  ge;
  display: flex;
  height: 100%;
  width: 20%;
`;

const RightDiv = styled.div`
  le;
  display: flex;
  height: 100%;
  width: 80%;
  flex-direction: column;
`;

const RightParent = styled.div``;

const BodyContainer = styled.div`
  display: flex;
  height: auto;
  margin-top: 20px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    margin: 6px 0;
  }
`;

const Skill = styled.p`
  text-align: center;
`;

const Heading = styled.h4`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: var(--title-font);
`;

const AddSkillBtn = styled.button`
  position: fixed;
  left: 30px;
  bottom: 30px;
  height: 36px;
  color: white;
  border-width: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: #2ecc71;
  font-weight: 600;

  :active {
    bottom: 29px;
  }
`;

const EducationSection = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  et;
`;

const HeadSection = styled.div`
  display: flex;

  svg {
    display: block;
    height: auto;
    width: 22px;
    margin-right: 14px;
  }

  h4 {
    justify-content: start;
  }
`;

const Divider = styled.div`
  margin: 2px 24px 1px 8px;
  // border-radius: 100%;
  width: 2px;
  height: auto;
  background-color: lightgray;
`;

const TitleRightDiv = styled.h5`
  font-size: 14px;
  font-weight: 900;

  span {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 100;
    color: grey;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentRightDiv = styled.h6`
  color: grey;
  font-weight: 600;
  font-size: 12px;
  margin-top: 4px;
`;

const JobTasks = styled.div`
  color: var(--secondary-color);
  font-weight: 600;
  font-size: 12px;
  margin-top: 4px;
`;
