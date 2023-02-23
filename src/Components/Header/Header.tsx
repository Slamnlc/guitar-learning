import React from 'react';
import Button from "../Button";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <Button text="Перебор" extraClass="btn-primary m-20" onClick={() => navigate("/plunk")}/>
    </div>
  );
};

export default Header;
