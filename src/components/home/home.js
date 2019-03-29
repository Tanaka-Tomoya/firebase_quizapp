import React, { Component } from "react";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <TypographyContainer>
          <WelcomeTypography variant="h2">ようこそ</WelcomeTypography>
          <SubTypography variant="display1">
            問題を作ったり、解いたりしてみましょう！！！
          </SubTypography>
        </TypographyContainer>

        <OptionContainer>
          <AnswerCard>
            <LinkContainer to="/list">
              <OptionCardArea>
                <OptionCardMedia
                  image={process.env.PUBLIC_URL + "answer.png"}
                />
                <OptionCardContent>
                  <WhiteTypography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="default"
                  >
                    解く
                  </WhiteTypography>
                  <WhiteSubTypography component="p" color="default">
                    言語ごとに分類された問題を解いて自分のスキルを確認しましょう！
                  </WhiteSubTypography>
                </OptionCardContent>
              </OptionCardArea>
            </LinkContainer>
          </AnswerCard>

          <CreateCard>
            <LinkContainer to="/create">
              <OptionCardArea>
                <OptionCardMedia image={process.env.PUBLIC_URL + "make.png"} />

                <OptionCardContent>
                  <WhiteTypography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="default"
                  >
                    作る
                  </WhiteTypography>
                  <WhiteSubTypography component="p" color="default">
                    問題を作って共有してみましょう！
                  </WhiteSubTypography>
                </OptionCardContent>
              </OptionCardArea>
            </LinkContainer>
          </CreateCard>

          <ReviewCard>
            <LinkContainer to="/">
              <OptionCardArea>
                <OptionCardMedia
                  image={process.env.PUBLIC_URL + "review.png"}
                />
                <OptionCardContent>
                  <WhiteTypography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="default"
                  >
                    近日公開予定！
                  </WhiteTypography>
                  <WhiteSubTypography component="p" color="default" />
                </OptionCardContent>
              </OptionCardArea>
            </LinkContainer>
          </ReviewCard>
        </OptionContainer>
      </HomeContainer>
    );
  }
}

const WelcomeTypography = withStyles({
  root: {
    fontWeight: 800
  }
})(Typography);

const WhiteTypography = withStyles({
  root: {
    color: "white",
    fontWeight: 800
  }
})(Typography);

const WhiteSubTypography = withStyles({
  root: {
    opacity: "0.7",
    fontWeight: 800
  }
})(WhiteTypography);

const SubTypography = withStyles({
  root: {
    marginTop: "30px",
    fontWeight: 800
  }
})(Typography);

const RootCard = withStyles({
  root: {
    width: "30%",
    height: "370px",
    marginLeft: "30px"
  }
})(Card);

const AnswerCard = withStyles({
  root: {}
})(RootCard);

const CreateCard = withStyles({
  root: {}
})(RootCard);

const ReviewCard = withStyles({
  root: {}
})(RootCard);

const OptionCardArea = withStyles({
  root: {
    height: "100%"
  }
})(CardActionArea);

const OptionCardContent = withStyles({
  root: {
    height: "70%",
    backgroundColor: "#6F8890"
  }
})(CardContent);

const OptionCardMedia = withStyles({
  root: {
    height: "270px",
    backgroundColor: "#66B4CE",
    backgroundSize: "contain"
  }
})(CardMedia);

const LinkContainer = styled(Link)`
  width: 100%;
  height: 100%;
  &:hover {
    color: black;
  }
  text-decoration: none;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 1000px;
  padding-top: 64px;
`;

const TypographyContainer = styled.div`
  width: 100%;
  height: 220px;
  padding-top: 20px;
  padding-left: 30px;
`;

const OptionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
`;
