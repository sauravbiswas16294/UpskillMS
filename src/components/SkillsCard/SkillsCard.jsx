import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import SkillCardChip from './SkillCardChip';

const SkillsCard = props => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    skills = ['React', 'ASP.NET', 'Javascript', 'Typescript', 'SAP', 'DevOPS'] 
  } = props;

  const toggleEditing = useCallback(() => {
    setIsEditing(prev => !prev);
  });

  const RequiredIcon = isEditing ? CheckIcon : EditIcon;

  return (
    <MainContainer>
      <HeaderContainer>
        <SkillsHeaderText>My Skills</SkillsHeaderText>
        <IconButton onClick={toggleEditing}>
          <RequiredIcon style={{ color: '#0078D4' }} fontSize="small" />
        </IconButton>
      </HeaderContainer>

      <SearchContainer isEditing={isEditing}>
        <TextField
          size="small"
          margin="dense"
          style={{
            width: '100%',
          }}
          InputProps={{ 
            style: {
              fontSize: '12px'
            }
          }}
          InputLabelProps={{
            style: {
              fontSize: '12px'
            }
          }}
          label='Add Tags'
        />
      </SearchContainer>

      <SkillsContainer>
        {
          skills.map((skill, idx) => (
            <SkillCardChip
              isEditing={isEditing}
              key={idx}
              skill={skill}
            />
          ))
        }
      </SkillsContainer>
    </MainContainer>
  );
};

export default React.memo(SkillsCard);

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  min-height: 100px;
  max-width: 400px;
  padding: 10px;
  box-sizing: border-box;
  padding-bottom: 20px;
`;

const SearchContainer = styled.div`
  display: ${props => props.isEditing ? 'flex': 'none'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SkillsHeaderText = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;

const SkillsContainer = styled.div`
  align-items: center;
  max-width: 340px;
  margin-left: -4px;
`;

const StyledTextField = styled(TextField)`
  width: '100%';

`;