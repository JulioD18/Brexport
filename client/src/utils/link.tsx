import React from "react";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";

type CustomLinkProps = {
  to: string;
  children: React.ReactNode;
};

const CustomLink: React.FC<CustomLinkProps> = ({ to, children }) => {
  return (
    <Button component={RouterLink} to={to} color="inherit">
      {children}
    </Button>
  );
};

export default CustomLink;
