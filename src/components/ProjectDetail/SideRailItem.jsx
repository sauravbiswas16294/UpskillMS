import React from 'react';
import styled from 'styled-components';

const SideRailItem = props => {
  const { Icon, label, value } = props;
  return (
    <MainContainer>
      <Icon style={{ color: '#0078D4' }} />
      <TextContainer>
        <Label>{label}</Label>
        <Value>{value}</Value>
      </TextContainer>
    </MainContainer>
  );
};

export default React.memo(SideRailItem);

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 30px;
  width: 50%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 10px;
  width: 100%;
`;

const Label = styled.div`
  color: #666;
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 4px;
`;

const Value = styled.div`
  color: #0078D4;
  font-weight: 700;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 50%;
`;