import React, { Component } from "react";
import styled from "styled-components";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { reduxForm, Field } from "redux-form";
import { theme } from "../../ults/theme.js";
import { Link, withRouter } from "react-router-dom";
import { database, firebaseApp } from "../../firebase/config";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  type = "text",
  required = false,
  rootClass = "width: 100%"
}) => (
  <FormField
    required={required}
    classes={{ root: rootClass }}
    error={!!(touched && error)}
    label={label}
    type={type}
    variant="outlined"
    helperText={touched && error}
    {...input}
    errorStyle={{ color: "#FFA000" }}
  />
);

class Create extends Component {
  componentWillMount() {}
  createQuestion = values => {
    const num = Math.floor(Math.random() * 1000000000).toString();
    // const currentUser = firebaseApp.auth().currentUser;
    // const currentUserName = firebaseApp.auth().currentUser.displayName;
    database.ref(`question_content/${num}`).set({
      answer: values.answer,
      id: num,
      option: {
        a: values.option_a,
        b: values.option_b,
        c: values.option_c,
        d: values.option_d
      },
      question_id: num,
      question_title: values.title
    });
    database.ref(`questions/${num}`).set({
      id: num,
      level: "1",
      questions_title: values.title,
      tag: "HTML"
    });
    alert("作成が完了しました！");
    this.props.history.push("/");
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <SignupContainer>
          <SignupContent onSubmit={handleSubmit(this.createQuestion)}>
            <SignupTitle>
              <WhiteTypography variant="h3">問題を作る</WhiteTypography>
            </SignupTitle>
            <FormContainer>
              <FormContent>
                <Field
                  name="title"
                  label="問題文"
                  component={renderTextField}
                  required
                />
                <Field
                  name="option_a"
                  label="選択肢A"
                  component={renderTextField}
                  required
                />
                <Field
                  name="option_b"
                  label="選択肢B"
                  component={renderTextField}
                  required
                />
                <Field
                  name="option_c"
                  label="選択肢C"
                  component={renderTextField}
                  required
                />
                <Field
                  name="option_d"
                  label="選択肢D"
                  component={renderTextField}
                  required
                />
                <Field
                  name="answer"
                  label="選択肢を入力してください"
                  component={renderTextField}
                  required
                />
                <SubmitButton
                  type="submit"
                  size="large"
                  variant="outlined"
                  color="secondary"
                >
                  登録する
                </SubmitButton>
              </FormContent>
            </FormContainer>
          </SignupContent>
        </SignupContainer>
      </MuiThemeProvider>
    );
  }
}

const WhiteTypography = withStyles({
  root: {
    color: "white",
    paddingLeft: "20px"
  }
})(Typography);

const FormField = withStyles({
  root: {
    width: "80%",
    marginTop: "30px"
  }
})(TextField);

const SubmitButton = withStyles({
  root: {
    display: "block",
    marginLeft: "auto",
    marginRight: "80px",
    marginTop: "30px",
    height: "10%",
    width: "140px",
    minWidth: "140px",
    fontSize: "20px",
    fontWeight: "600"
  }
})(Button);

const SigninLink = styled(Link)`
  margin-left: auto;
`;
const SignupContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const FormContent = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const FormContainer = styled.div`
  text-align: center;
  position: relative;
  height: 85%;
  width: 100%;
`;

const SignupContent = styled.form`
  height: 60%;
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  max-width: 800px;
  max-height: 600px;
`;

const SignupTitle = styled.div`
  height: 10%;
  width: 100%;
  background-color: ${theme.palette.primary.main};
`;

export default withRouter(
  reduxForm({
    form: "Create",
    validate: values => {
      const errors = {};
      if (!values.title) {
        errors.title = "問題文を入力してください";
      }
      if (!values.option_a) {
        errors.option_a = "選択肢Aがありません";
      }
      if (!values.option_b) {
        errors.option_b = "選択肢Bがありません";
      }
      if (!values.option_c) {
        errors.option_c = "選択肢Cがありません";
      }
      if (!values.option_d) {
        errors.option_d = "選択肢Dがありません";
      }
      if (!values.answer) {
        errors.answer = "問題の答えを入力してください";
      }
      return errors;
    }
  })(Create)
);
