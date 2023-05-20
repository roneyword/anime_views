import { Container } from "./styles";
import React from "react";

interface TagsProps {
  tags: Array<String>
}

export default function Tags({ tags }: TagsProps) {
  return (
    <Container>
      {React.Children.toArray(
        tags.map(tag => (
          <div className="tag">
            <strong>{tag}</strong>
          </div>
        ))
      )}
    </Container>
  )
}