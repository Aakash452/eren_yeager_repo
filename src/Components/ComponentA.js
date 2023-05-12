import React from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import styled from "styled-components";

function ComponentA() {
  const Component = styled.div`
    border: 1px solid grey;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: skyblue;
    padding: 20px;
    border-radius: 15px;
  `;
  const Heading = styled.div``;
  const Content = styled.div``;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Component>
        <Heading>
          <h1>Task 1</h1>
        </Heading>
        
        <Content>
          <ComponentB />
          <ComponentC />
        </Content>
      </Component>
    </div>
  );
}

export default ComponentA;
