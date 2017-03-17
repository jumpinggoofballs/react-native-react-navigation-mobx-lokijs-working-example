import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Spinner } from 'native-base';

export default class FriendsList extends Component {

    constructor() {
      super();
      this.state = {
        results: {}
      };
    };

    componentDidMount() {
      this.search();
    }

    search() {
      this.setState({
        loading: true
      });

      var that = this;
      return fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((responseJson) => {
              // Store the results in the state variable results and set loading to
              // false to remove the spinner and display the list of repositories
              that.setState({
                  results: responseJson,
                  loading: false
              });

              return responseJson.Search;
          })
          .catch((error) => {

              that.setState({
                  loading: false
              });

              console.error(error);
      });
    }

    renderListRow(user) {
      return (
        <ListItem>
          <Text>
            {user.name}
          </Text>
        </ListItem>
      )
    }

    render() {
        return (
          <List>
            { this.state.loading ? <Spinner></Spinner> : <List dataArray={this.state.results} renderRow={this.renderListRow} /> }
          </List>
        );
    }
}
