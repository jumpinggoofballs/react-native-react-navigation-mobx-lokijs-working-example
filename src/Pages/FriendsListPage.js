import React, { Component } from 'react';
import { Container, Content, Header, Body, Right, Button, Icon, Title, List, ListItem, Text, Spinner, View, Fab } from 'native-base';

import { observer } from 'mobx-react/native';

@observer
export default class FriendsListPage extends Component {

    addFriend() {
      this.props.navigation.state.params.appStore.addFriend('test4');
    }

    render() {
        const {navigate} = this.props.navigation;
        const {appStore} = this.props.navigation.state.params;
        return (
          <Container>
            <Header>
              <Body>
                <Title>Squeak</Title>
              </Body>
              <Right>
                <Button transparent onPress={() => navigate('SettingsPage')}>
                  <Icon name="settings"></Icon>
                </Button>
              </Right>
            </Header>
            <Content>
              { appStore.loading 
                ? <Spinner></Spinner> 
                : <List dataArray={appStore.friendsList.slice()} renderRow={(friend) => 
                    <ListItem onPress={() => navigate('ChatPage', { friend: friend, appStore: appStore })}>
                      <Text>
                        {friend.nickname}
                      </Text>
                    </ListItem>
                  }> </List> 
              }
            </Content>
            <Fab
              style={{ backgroundColor: '#5067FF' }}
              position="bottomRight"
              onPress={ this.addFriend.bind(this) }>
                <Icon name="add" />
            </Fab>
          </Container>
        );
    }
}
