import styled from "styled-components";
import React, { Component } from "react";
import { MdLocalPhone, MdWeb, MdWork } from "react-icons/md";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

class Page extends Component {
  state = {
    users: [],
    achievements: [],
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

  addAchievement = () => {
    this.setState({
      achievements: [
        ...this.state.achievements,
        <AchievementName
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          Achievement
        </AchievementName>,
        <AchievementDescription
          contentEditable="true"
          suppressContentEditableWarning={true}
        >
          add description
        </AchievementDescription>,
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
                <Heading
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  SKILLS
                </Heading>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  JavaScript
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  React / Redux
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  SASS / styled-components
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Dart / Flutter
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Node.js
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  AngularJS / Angular Material
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Git Version Control
                </Skill>
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
                  REST / GraphQL
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  AdobeXD / SketchApp
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  AWS Lambda / API Gateway
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  AWS Amplify / S3
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Google Firebase / Firestore
                </Skill>
                {this.state.users}

                <Heading
                  style={{ marginTop: "30px" }}
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  ACHIEVEMENTS
                </Heading>
                <AchievementName
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Google IT Support Certified
                </AchievementName>
                <AchievementDescription
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  <a
                    href="https://www.youracclaim.com/badges/81e0d8a6-fd09-4b58-a834-dba5c894efaf/linked_in_profile"
                    target="_blank"
                  >
                    Achieved Badge
                  </a>
                </AchievementDescription>
                <AchievementName
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Flutter Create Contest Accomplishment
                </AchievementName>
                <AchievementDescription
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  building a cross-platform app under 5KB of dart code{" "}
                  <a
                    href="https://www.credential.net/727b4418-d3fe-4d42-9a36-e13ed5d1ee16#gs.bxf14j"
                    target="_blank"
                  >
                    Certificate
                  </a>
                </AchievementDescription>
                <AchievementName
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Member of IT Professionals Institute, NZ
                </AchievementName>
                <AchievementDescription
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  <a href="https://www.codesim.dev/itPro" target="_blank">
                    Certificate
                  </a>
                </AchievementDescription>
                <AchievementName
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Covid-19 Service Award, Matrix NZ
                </AchievementName>
                <AchievementDescription
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  service recognition{" "}
                  <a href="https://www.codesim.dev/matrix" target="_blank">
                    Certificate
                  </a>{" "}
                  during level 3 and level 4 NZ Emergency
                </AchievementDescription>
                {this.state.achievements}
              </SkillsContainer>
            </LeftDiv>

            <RightDiv>
              <RightParent>
                <HeadSection
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  <FaGraduationCap />
                  <Heading>EDUCATION</Heading>
                </HeadSection>

                <BodySection>
                  <Divider></Divider>
                  <Details>
                    <TitleRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Specialization in Software Development - Level 7
                      <span>2015-2016</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      National Technology Institute - NTEC, Auckland, New
                      Zealand
                    </ContentRightDiv>
                    <HeightSpacer />
                    <TitleRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Bachelor of Computer Applications - BCA
                      <span>2011-2014</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Punjab Technical University - PTU, India
                    </ContentRightDiv>
                  </Details>
                </BodySection>
              </RightParent>
              <br />

              <RightParent>
                <HeadSection
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  <MdWork />
                  <Heading>EMPLOYMENT HISTORY</Heading>
                </HeadSection>

                <BodySection>
                  <Divider></Divider>
                  <Details>
                    <TitleRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Web Developer - Fateh Fitness Studio, India
                      <span>October 2020 - Present</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Skills: ReactJS, Javascript, NodeJS, AWS Lambda, SES,
                      Amplify, styled-components, AdobeXD, Flutter, Dart
                    </ContentRightDiv>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Developing React website for the fitness studio.
                      Currently live on{" "}
                      <a href="https://www.fatehfitness.in/">
                        www.fatehfitness.in
                      </a>
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Managing AWS Services for deployment, lambda functions,
                      API Gateway and email services,
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Creating Flutter/Dart widgets for mobile-development
                      team
                    </JobTasks>

                    <HeightSpacer />

                    <TitleRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Mobile Developer & Designer -If Else Cloud Ltd, Auckland,
                      NZ
                      <span>March2019-June2019</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Skills: SketchApp, AdobeXD, Flutter, Dart, Documentation,
                      RPi
                    </ContentRightDiv>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Designing cross-platform wireframes and prototypes using
                      AdobeXD and SketchApp.
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Developing Flutter/Dart widgets for Android, IOS,
                      WatchOS for the UX testing purposes before developing
                      pages natively.
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Configuring IoT devices and RPis to simulate dummy
                      sensor data.
                    </JobTasks>
                    <HeightSpacer />

                    <TitleRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Frontend Web Dev (Project for NKAI, Ministry of Education,
                      NZ) - Firstec Ltd
                      <span>Sep2017-Mar2018</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Skills: AngularJS, AdobeXD, HTML5, CSS3, Javascript,
                      Angular Material, Product Presentation
                    </ContentRightDiv>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Developing Angular components for the student management
                      system of NKAI
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Designing proptotypes and wireframes for development
                      team
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Preparing upcoming prototypes for presentation purposes
                      and requirement gathering
                    </JobTasks>
                  </Details>
                </BodySection>
              </RightParent>
              <br />

              <RightParent>
                <HeadSection
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  <AiFillStar />
                  <Heading
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                  >
                    LIVE PROJECTS
                  </Heading>
                </HeadSection>

                <BodySection>
                  <Divider></Divider>
                  <Details>
                    <TitleRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Personal Website (under development) -{" "}
                      <a href="https:\\www.codesim.dev" target="_blank">
                        www.codesim.dev
                      </a>
                      <span>March 2021 - Present</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Skills: ReactJS, AWS Lambda, SES, Amplify,
                      styled-components, Firebase Firestore
                    </ContentRightDiv>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Developing portfolio website using ReactJS
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • UPCOMING: Going to connect all my github projects in
                      Playground section of this website, still working on some
                      API implementations. I will add email service as well in
                      "ContactMe" section using AWS services.
                    </JobTasks>
                    <HeightSpacer />

                    <TitleRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      CV Builder Tool -{" "}
                      <a
                        href="https://main.d29sbkrjzugov7.amplifyapp.com/"
                        target="_blank"
                      >
                        main.d29sbkrjzugov7.amplifyapp.com{" "}
                      </a>
                      <span>2020</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Skills: ReactJS, HTML5, CSS3
                    </ContentRightDiv>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • This is my personal online CV Builder/Editor
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • <span style={{ color: "red" }}>Bonus:</span> The CV
                      you're currently reading was build using my CV builder
                      tool. You can give it a try and may be you like to edit
                      your own CV as well. One more thing, it works best on
                      large screens and Chrome,Mozilla browsers. Some features
                      are not supported on Safari browser.
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • This tool supports online editing and A4 size PDF
                      exports
                    </JobTasks>
                    <HeightSpacer />

                    <TitleRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Calc Themified -{" "}
                      <a
                        href="https://play.google.com/store/apps/details?id=com.singh.calculator"
                        target="_blank"
                      >
                        play.google.com/store/apps/details?id=com.singh.calculator
                      </a>
                      <span>2020</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Skills: Flutter, Dart, Google AdMob, Google
                      In-App-Purchase, Rive 2D, Shared Preferences
                    </ContentRightDiv>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • This is flutter based cross-platform application. I
                      built it to test, learn and demonstrate some google's core
                      APIs like in-app-purchases, shared-preferences, AdMob,
                      etc.
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Implementd very beautiful minimal FlatUI themes. It has
                      features like in-app-purchase, calculations history,
                      themes and a little bit of 2D animations in "About" page.
                    </JobTasks>

                    <HeightSpacer />

                    <TitleRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Sydney Cricket (under development) -{" "}
                      <a
                        href="https://main.dojok8k9gxj4t.amplifyapp.com/"
                        target="_blank"
                      >
                        main.dojok8k9gxj4t.amplifyapp.com/
                      </a>
                      <span>May2021-Present</span>
                    </TitleRightDiv>
                  </Details>
                </BodySection>
              </RightParent>
            </RightDiv>
          </BodyContainer>
        </PageContainer>
        <AddSkillBtn onClick={this.addUser}>ADD SKILL</AddSkillBtn>
        <AddAchievementBtn onClick={this.addAchievement}>
          ADD ACHIEVEMENT
        </AddAchievementBtn>
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
  height: 284mm;
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
  display: flex;
  height: 100%;
  width: 22%;
`;

const RightDiv = styled.div`
  display: flex;
  height: 100%;
  width: 78%;
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
`;

const Skill = styled.h5`
  font-size: 12px;
  text-align: center;
  color: var(--secondary-color);
  margin-top: 9px;
`;

const Heading = styled.h4`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: var(--title-font);
`;

const AddSkillBtn = styled.button`
  position: fixed;
  padding: 12px;
  left: 30px;
  bottom: 76px;
  height: 36px;
  color: white;
  border-width: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: #2ecc71;

  :active {
    bottom: 79px;
  }
`;

const AddAchievementBtn = styled.button`
  position: fixed;
  padding: 12px;
  left: 30px;
  bottom: 26px;
  height: 36px;
  color: white;
  border-width: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  background-color: #2ecc71;

  :active {
    bottom: 29px;
  }
`;

const BodySection = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
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
  margin: 12px 24px 1px 8px;
  // border-radius: 100%;
  width: 2px;
  height: auto;
  background-color: lightgray;
`;

const TitleRightDiv = styled.h5`
  font-size: 14px;
  font-weight: 900;
  margin-top: 7px;

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
  font-size: 12.2px;
  margin-top: 4px;
`;
const AchievementName = styled.h5`
  font-size: 12px;
  margin-top: 11px;
  text-align: center;
  color: var(--secondary-color);
`;
const AchievementDescription = styled.p`
  text-align: center;
  font-size: 12px;
  color: grey;
`;
