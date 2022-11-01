import React from 'react';
import styled from 'styled-components';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import UserIcon from '@mui/icons-material/AccountCircle';
import SideRailItem from './SideRailItem';

const SideRail = props => {
  const {
    projectUrl = 'https://microsoft.sharepoint.com/sites/knowledgecenter/SitePages/Loki.aspx?ls=Ans_BingVertical',
    postedDate = '25-09-2022',
    projectOwner = 'Harsha Vanamali'
  } = props;
  return (
    <MainContainer>
      {/* <SideRailItem 
        label='Project Home'
        value={projectUrl}
        Icon={HomeIcon}
      /> */}

      <SideRailItem 
        label='Posted at'
        value={postedDate}
        Icon={CalendarIcon}
      />

      <SideRailItem 
        label='Project Owner'
        value={projectOwner}
        Icon={UserIcon}
      />
    </MainContainer>
  );
};

export default React.memo(SideRail);

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 35%;
`;