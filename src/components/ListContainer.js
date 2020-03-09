import React, { Component } from "react";
import { getImages } from "../actions";
import { connect } from "react-redux";
import List from "./List";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";
import SignUpFormContainer from "./SignUpFormContainer";

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
          <h2>Hello friend</h2>
          <LoginFormContainer />
          <h2>Hello friend? That's lame. Maybe I should give you a name.</h2>
          <SignUpFormContainer />
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
