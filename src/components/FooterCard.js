import React from "react";
import { StyledFooterCard } from "./styles/Footer.styled";
import { Button } from "./styles/Button.styled";
const FooterCard = () => {
  return (
    <StyledFooterCard>
      <p>Ready To Build Your Community? </p>
      <Button bg={"var(--pink)"} color="#fff">
        Get Started For Free
      </Button>
    </StyledFooterCard>
  );
};

export default FooterCard;
