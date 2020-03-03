import React, { Component } from "react";
import store from "./store";
import ListContainer from "./components/ListContainer";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ListContainer />
      </Provider>
    );
  }
}
export default App;
