import React from "react";
import { bool } from "prop-types";
import { Box } from "./styledFields";

const FieldArea = ({ children, open, dir, color }) => {
  return (
    <Box open={open} margin={open} className={`${dir}`}>
      <a href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Pricing
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
        {children}
      </a>
    </Box>
  );
};

FieldArea.propTypes = {
  open: bool.isRequired
};

export default FieldArea;
