import { Link } from "react-router-dom";
import styled from "styled-components";
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: left;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  width: 100%;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f1f1f1;
    color: #2980b9;
  }
`;
export const ProfileLabel = styled.label`
  width: 200px;
  text-align: left;
  font-size: 20px;
`;
