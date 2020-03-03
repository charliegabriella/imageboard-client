import React, { Component } from "react";
import { getImages } from "../actions";
import { connect } from "react-redux";
import List from "./List";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";

class ListContainer extends Component {
  componentDidMount() {
    this.props.getImages();
  }
  render() {
    if (this.props.user) {
      return (
        <div>
          <List images={this.props.images} user={this.props.user} />
          <CreateFormContainer />
        </div>
      );
    } else {
      return (
        <div>
          <h2>Login if you have an account</h2>
          <LoginFormContainer />
          <h2>Sign up for a new account</h2>
        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  return { images: state.images, user: state.user };
}
const mapDispatchToProps = { getImages };
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
