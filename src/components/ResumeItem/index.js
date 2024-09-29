import * as C from "./styles";
import React from "react";



const ResumeItem = ({ id, title, Icon, value }) => {
  return (
    <C.Container id={id}>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  )
}



export default ResumeItem;