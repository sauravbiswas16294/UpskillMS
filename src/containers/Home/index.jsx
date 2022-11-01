import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { styled as mstyled, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import SkillsCard from '../../components/SkillsCard/SkillsCard';
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail';

const Search = mstyled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = mstyled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = mstyled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

const Home = props => {
  const [openProjectDetail, setOpenProjectDetail] = useState(false);
  const toggleProjectDetail = useCallback(() => setOpenProjectDetail(prev => !prev));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Header>UpSkill@MS</Header>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Grid 
          container 
          style={{
            padding: '20px', 
            boxSizing: 'border-box', 
            backgroundColor: '#E8E8E8', 
            width: '100vw', 
            height: '100vh' 
          }}
      >
        {/* <AppBar /> */}
        <Grid item xs={4}>
          <ProjectCard onClick={toggleProjectDetail} />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <SkillsCard />
        </Grid>
        <Grid item xs={12}>
          <ProjectDetail open={openProjectDetail} onClose={toggleProjectDetail} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default React.memo(Home);

const Header = styled.h1`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`;