import React from 'react';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import SideRail from './SideRail';
import { 
  BookmarkButton, 
  JoinButton, 
  ProjectContainer, 
  ProjectLabel, 
  ProjectValue, 
  TagsContainer, 
  Tags,
  Divider
} from '../ProjectCard/ProjectCard';

const defaultDescription = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

const ProjectDetail = props => {
  const {
    open = false,
    onClose = () => {},
    title = 'User Status Enhancement',
    subheader = 'As part of a Microsoft Teams project, this feature will display current status of searched users',
    projectName = 'Loki',
    tags= ['ASP.NET', 'REACT', 'JAVASCRIPT'],
    description = defaultDescription,
    skills = ['Web Development', 'Javascript', 'React']
  } = props;

  return (
    <Dialog open={open} onClose={onClose} maxWidth='xl'>
      <MainContainer>
        <HeaderContainer>
          <TitleContainer>
            <TitleText>{title}</TitleText>
            <SubHeader>{subheader}</SubHeader>
          </TitleContainer>
          <ActionItemsContainer>
            <JoinButton />
            <BookmarkButton />
          </ActionItemsContainer>
        </HeaderContainer>

        <ProjectContainer>
          <ProjectLabel>Project</ProjectLabel>
          <ProjectValue>{projectName}</ProjectValue>
        </ProjectContainer>

        <TagsContainer>
          <Tags tags={tags} />
        </TagsContainer>

        <Divider style={{ margin: '20px 0' }}/>

        <MidSectionContainer>
          <DetailContainer>
            <DescriptionText>{description}</DescriptionText>
            <SkillsHeader>Preferred Skills</SkillsHeader>
            <SkillContainer style={{ marginTop: '8px' }}>
              {
                skills.map((skill, idx) => (
                  <Skill key={idx} skill={skill} />
                ))
              }
            </SkillContainer>
          </DetailContainer>
          <SideRail />
        </MidSectionContainer>

      </MainContainer>
    </Dialog>
  );
}

const Skill = React.memo(props => {
  const { skill = '' } = props;

  return (
    <SkillContainer>
      <Oval />
      <SkillsText>{skill}</SkillsText>
    </SkillContainer>
  );
});

export default React.memo(ProjectDetail);

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 80vw;
  border-radius: 4px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 0;
  box-sizing: border-box;
  padding-bottom: 20px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
`;

const TitleText = styled.h1`
  font-size: 22px;
  color: #545454;
  font-weight: 500;
`;

const SubHeader = styled.h2`
  font-family: 'Open sans', sans-serif;
  font-size: 14px;
  color: #545454;
  font-weight: 400;
  margin-top: 15px;
`;

const ActionItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const DescriptionText = styled.span`
  font-size: 14px;
  color: #545454;
  font-family: 'Opens-sans', sans-serif;
  font-weight: 400;
  line-height: 1.5;
`;

const MidSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 10px;
  width: 60%;
`;

const SkillsText = styled.span`
  font-size: 14px;
  color: #545454;
  font-weight: 400;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const SkillsHeader = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #383838;
  margin-top: 20px;
`;

const Oval = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #0078d4;
  margin-right: 4px
`;
