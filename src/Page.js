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
                022XXXXXXXX
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
                  HTML/CSS
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  JavaScript / TypeScript
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  NodeJS
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
                  Turborepo / Monorepo
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  React / NextJS
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Angular / Svelte
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Redux / Zustand
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Strapi / Contentful
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Storybook
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Jest / Vitest / Cypress
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Auth0
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Stripe
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  SEO / GA4 / Tag Manager
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Git / Azure DevOps / GitHub
                </Skill>
                <Skill
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  Tailwind / Bootstrap
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
                    rel="noreferrer"
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
                    rel="noreferrer"
                  >
                    {" "}
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
                  <a
                    href="https://www.codesim.dev/itPro"
                    target="_blank"
                    rel="noreferrer"
                  >
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
                  service recognition during level 3 and level 4 NZ Emergency{" "}
                  <a
                    href="https://www.codesim.dev/matrix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Certificate
                  </a>
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
                      <span>2016-2017</span>
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
                  <Divider />
                  <Details>
                    <TitleRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Web Developer - Tella Ltd, NZ
                      <span>August 2021 - Present</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Skills:Turborepo,React, NextJS, TypeScript, Strapi, Azure
                      DevOps, Vercel, Git, GA4, TagManager
                    </ContentRightDiv>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Developing prototypes, POCs, and plan future
                      development.
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Establishing a complex state management system using
                      Redux and Zustand.
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Writing unit tests using Vitest and Jest
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Regularly manage pull requests and code reviews, while
                      continuously striving to adopt and promote best practices
                      across the team.
                    </JobTasks>

                    <HeightSpacer />
                    <TitleRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Full Stack Developer - Fateh Fitness Studios
                      <span>Oct 2020 - July 2021</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Skills:React, NodeJS, Express, AWS Amplify, SES,
                      CodePipeline, Lambda, Git, GitHub Actions, AdobeXD
                    </ContentRightDiv>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Developed React based business website.
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Analysed business requirements and proposed appropriate
                      design solutions.
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Integrate AWS SES for emails, AWS Amplify and AWS
                      CodePipeline to streamline releases and deployment.
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Consume Facebook APIs to connect social media page with
                      the website.
                    </JobTasks>

                    <HeightSpacer />

                    <TitleRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Mobile Developer & Designer -If Else Cloud Ltd, Auckland,
                      NZ
                      <span>July 2019 - Feb 2020</span>
                    </TitleRightDiv>
                    <ContentRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Skills: Flutter, Dart, SketchApp, Git, GitHub, IoT,
                      RasberryPi, Android, IOS, WatchOS
                    </ContentRightDiv>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Building a cross-platform Flutter app working on
                      Android, IOS and WearOS.
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Design UI and prototypes using Sketch App.
                    </JobTasks>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      • Setup state management system using BLoC pattern.
                    </JobTasks>
                    <HeightSpacer />
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
                      Quick Painters (under development) -{" "}
                      <a
                        href="https://www.quickpainters.co.nz/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        quickpainters.co.nz
                      </a>
                    </TitleRightDiv>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Building a business website for a friend using NextJS,
                      EmailJS, Tailwind and Vercel.
                    </JobTasks>
                    <HeightSpacer />

                    <TitleRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      AI Background Remover -{" "}
                      <a
                        href="https://clearbg.codesim.dev/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        clearbg.codesim.dev
                      </a>
                    </TitleRightDiv>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Developed a tool using Svelte and Cloudinary APIs that
                      leverages AI for image background removal. This project
                      allowed me to explore Svelte's capabilities and learn more
                      about integrating AI-based features into web applications.
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
                        rel="noreferrer"
                      >
                        play.google.com/store/apps/details?id=com.singh.calculator
                      </a>
                      <span>2020</span>
                    </TitleRightDiv>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Built a Flutter app in 2020 that includes features such as
                      theming, calculation history, Ad Mob, Google
                      In-App-Purchase, and an About page with Rive 2D
                      transitions
                    </JobTasks>

                    <HeightSpacer />

                    <TitleRightDiv
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Sydney Cricket (under development) -{" "}
                      <a
                        href="https://codesim.dev"
                        target="_blank"
                        rel="noreferrer"
                      >
                        codesim.dev
                      </a>
                    </TitleRightDiv>
                    <JobTasks
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      Currently developing a personal portfolio using NextJS and
                      Tailwind. This project provides me with the opportunity to
                      showcase my skills and work in a personal and creative
                      way.
                    </JobTasks>
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
  background-color: var(--accent-color);

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
  background-color: var(--accent-color);

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
