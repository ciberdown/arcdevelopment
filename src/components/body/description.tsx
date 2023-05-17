import { Component, ReactNode } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import {  Props } from "../UI/functions";

export default function Description(props: Props) {


  return (
    <>
      <Container>
        <Box sx={{ my: 2, mt: "80px" }}>{props.children}</Box>
      </Container>
    </>
  );
}
