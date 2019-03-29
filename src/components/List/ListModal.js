import React, { Component } from "react";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import languages from "./LangArray";
import LangCard from "./LangCard";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

function LinkTab(props) {
  return (
    <Tab component="a" onClick={event => event.preventDefault()} {...props} />
  );
}

export default class ListModal extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <Modal open={this.props.open} onClose={this.handleClose}>
        <ModalContainer style={getModalStyle()}>
          <Typography variant="h4">言語を選んでください</Typography>
          <CardContainer>
            <LangSelectTabs
              variant="fullWidth"
              value={value}
              onChange={this.handleChange}
              textColor="secondary"
            >
              <LinkTab label="one" />
            </LangSelectTabs>
            <LangCardContainer>
              {value === 0 &&
                languages.slice(0, 8).map((item, index) => {
                  return (
                    <LangCard
                      {...item}
                      index={index}
                      handleClick={tag => this.props.handleClick(tag)}
                    />
                  );
                })}
              <LangCard handleClick={tag => this.props.handleClick()} />
            </LangCardContainer>
          </CardContainer>
        </ModalContainer>
      </Modal>
    );
  }
}

const LangSelectTabs = withStyles({
  root: {
    width: "100%",
    height: "10%"
  }
})(Tabs);
const LangCardContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const ModalContainer = styled.div`
  text-align: center;
  position: absolute;
  width: 970px;
  height: 650px;
  background: white;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 94%;
`;
//
// <CardContainer>
//   <LangSelectTabs
//     variant="fullWidth"
//     value={value}
//     onChange={this.handleChange}
//     textColor="secondary"
//     >
//     <LinkTab label="one"/>
//     <LinkTab label="two"/>
//   </LangSelectTabs>
//   {value === 0 && languages.slice(0,8).map((item, index) => {
//     return(
//       <LangCard {...item} index={index} handleClick={tag => this.props.handleClick(tag)} />
//     )
//   })}
//   {value === 1 && languages.slice(8,17).map((item, index) => {
//     return(
//       <LangCard {...item} index={index} handleClick={tag => this.props.handleClick(tag)} />
//     )
//   })}
//
// </CardContainer>
