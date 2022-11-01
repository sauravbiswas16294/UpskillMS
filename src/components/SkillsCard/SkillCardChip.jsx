import React from 'react';
import Chip from '@mui/material/Chip';

const SkillCardChip = props => {
  const { skill = 'React', isEditing = false } = props;

  return (
    <Chip 
      label={skill}
      onDelete={isEditing ? () => {} : null}
      style={{
        borderColor: '#0078D4',
        backgroundColor: '#ECF7FF',
        margin: '4px',
        color: '#0078D4',
        fontFamily: 'Lato, sans-serif',
        fontSize: '12px',
        height: '28px'
      }}
      variant="outlined"
    />
  );
}

export default React.memo(SkillCardChip);