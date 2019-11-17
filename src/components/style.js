import styled from "styled-components";

// LEFT PANEL
export const LeftPanelDiv = styled.div`
  min-height: 100vh;
  color: white;
  display: ${props => (props.state ? "flex" : "none")};
  position: absolute;
  @media (min-width: 960px) {
    display: flex;
    position: relative;
  }
`;
export const FlexDiv = styled.div`
  width: 200px;
  background-color: #363839;
`;
export const Logo = styled.div`
  margin: 10px;
  display: flex;
  cursor: pointer;
  h2 {
    margin-left: 5px;
    font-weight: 600;
  }
  @media (min-width: 960px) {
    margin: 10px 35px;
  }
`;
export const LogoIcon = styled.img``;
export const LeftStroke = styled.div`
  padding: 10px;
  font-size: 11px;
  cursor: ${props =>
    props.item === props.activeStroke ? "default" : "pointer"};
  background-color: ${props =>
    props.item === props.activeStroke ? "#515458" : "#363839"};
  &:hover {
    background-color: #515458;
  }
`;
export const TransparentSection = styled.div`
  background-color: #515458;
  opacity: 0.2;
  width: calc(100vw - 200px);
  @media (min-width: 960px) {
    display: none;
  }
`;

// RIGHT PANEL
export const RightPanelDiv = styled.div`
  width: 100%;
`;
export const TopNav = styled.div`
  height: 50px;
  border-bottom: 1px solid lightgray;
  display: flex;
  padding: 0 10px;
  h3 {
    line-height: 50px;
  }
`;
export const MenuIcon = styled.img`
  cursor: pointer;
  @media (min-width: 960px) {
    display: none;
  }
`;
export const RightPanelIcon = styled.img`
  margin-left: 10px;
  cursor: pointer;
`;

// REPORTS
export const ReportNav = styled.div`
  background-color: white;
  height: 50px;
  display: flex;
`;
export const ReportItems = styled.div`
  color: ${props => (props.active === props.item ? "#4a90e2" : "black")};
  font-size: 11px;
  line-height: 50px;
  margin: 0 5px;
  padding: 0 15px;
  cursor: pointer;
  border-bottom: 2px solid
    ${props => (props.active === props.item ? "#4a90e2" : "transparent")};
`;
export const AddReport = styled.div`
  line-height: 50px;
  margin: 0 20px;
  font-size: 11px;
  color: #4a90e2;
  cursor: pointer;
`;
