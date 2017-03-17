import React, { Component } from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Content, Text } from 'native-base';


export default class SettingsPage extends Component {
  render() {
    return (
        <Container>
          <Header>
            <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back"></Icon>
              </Button>
            </Left>
            <Body>
              <Title>Settings</Title>
            </Body>
          </Header>
          
          <Content>
            <Text>
              Settings Page
            </Text>
          </Content>
        </Container>
    );
  }
}
