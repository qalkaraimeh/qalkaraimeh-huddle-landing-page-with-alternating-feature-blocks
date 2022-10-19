import React from "react";
import { StyledCard } from "./styles/Card.styled";
import { Flex } from "./styles/Flex.styled";

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <Flex>
        <img src={`./images/${image}`} alt="" />
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </Flex>
    </StyledCard>
  );
};

export default Card;
