import React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import BookmarkIcon from '@mui/icons-material/BookmarkAdd';
import ButtonBase from '@mui/material/ButtonBase';

const ProjectCard = props => {
  const {
    onClick = () => {},
    title = 'Sample Title',
    description = 'Sample Description',
    tags= ['ASP.NET', 'REACT', 'JAVASCRIPT'],
    projectName = 'Loki'
  } = props;
  
  return (
    <MainContainer>
      <div style={{ cursor: 'pointer' }} onClick={onClick}>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
      <TagsContainer>
        <Tags tags={tags}/>
      </TagsContainer>
      <ProjectContainer>
        <ProjectLabel>Project</ProjectLabel>
        <ProjectValue>{projectName}</ProjectValue>
      </ProjectContainer>
      </div>
      <Divider />
      <ActionContainer>
        <JoinButton />
        <BookmarkButton />
      </ActionContainer>
    </MainContainer>
  );
}

export const JoinButton = React.memo(props => {
  const {} = props;

  return (
    <ButtonBase
        style={{
          background: '#0F8FF1',
          width: '72px',
          height: '26px',
          color: '#fff',
          fontFamily: 'Lato, sans-serif',
          fontWEight: 500,
          borderRadius: '2px',
          fontSize: '12px',
          marginRight: '10px'
        }}
        disableElevation 
        variant="contained"
    >
      Ask to join
    </ButtonBase>
  );
});

export const BookmarkButton = React.memo(props => {
  const {} = props;

  return (
    <IconButton aria-label="bookmark">
      <BookmarkIcon />
    </IconButton>
  );
})

export const Tags = React.memo(props => {
  const { tags = [] } = props;
  
  return (
    <>
      {
        tags.map((tag, idx) => (
          <Chip 
            key={idx}
            label={tag}
            variant="outlined"
            style={{
              fontFamily: "'Lato', sans-serif",
              height: '22px', 
              marginRight: '10px', 
              borderRadius: '2px',
              fontSize: '10px'
            }}
          />
        ))
      }
    </>
  );
});

const MainContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  width: 450px;
  padding: 10px 0;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  padding: 10px;
  box-sizing: border-box;
`;

const Title = styled.h3`
  font-size: 14px;
  color: #545454;
  font-weight: 500;
`;

const Description = styled.span`
  font-weight: 400;
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
  color: #0087ee;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #E4E4E4;
  width: 100%;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const ProjectLabel = styled.span`
  font-size: 12px;
  color: #787878;
  font-weight: 400;
`;

export const ProjectValue = styled.span`
  font-size: 12px;
  color: #383838;
  font-weight: 700;
  margin-left: 10px;
`;

export default React.memo(ProjectCard);