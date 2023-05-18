import { Component, ReactNode } from "react";
import { descriptionText } from "../UI/functions";

export default class Home extends Component {
  render(): ReactNode {
    return <>{descriptionText()}</>;
  }
}
