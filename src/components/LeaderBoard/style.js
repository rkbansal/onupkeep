import styled from "styled-components";

// TIME LINE
export const LeaderBoardTimeLine = styled.div`
  background-color: white;
  display: flex;
  margin: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  color: #515458;
`;
export const TimelineFolder = styled.div`
  margin: 5px 10px;
  p {
    font-size: 10px;
  }
`;
export const TimelineFolderDrop = styled.div`
  font-size: 10px;
  color: #515458;
  font-weight: 700;
  cursor: pointer;
`;
export const ActiveDropField = styled.div`
  border: 1px solid;
  margin: 5px 0;
  width: 150px;
  border-radius: 4px;
  position: absolute;
`;

// USER ASSIGN
export const UserAssignDiv = styled.div``;
export const UserAssignHeader = styled.h1`
  margin: 10px;
`;
export const UserAssignContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;
export const UserDetailsDiv = styled.div`
  flex-grow: 1;
  background-color: white;
  margin: 0 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  color: #515458;
`;
