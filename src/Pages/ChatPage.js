import React, { Component } from 'react';
import { Container, Header, Left, Right, Button, Icon, Body, Title, Content, Text } from 'native-base';

import { observer } from 'mobx-react/native';

@observer
export default class ChatPage extends Component {

    removeFriend(friend) {
        this.props.navigation.state.params.appStore.removeFriend(friend);
    }

    render() {
        const { goBack } = this.props.navigation;
        const { friend } = this.props.navigation.state.params;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name="arrow-back"></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title>{friend.nickname}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => {
                                this.removeFriend(friend);
                                goBack();
                            }}>
                            <Icon name="more"></Icon>
                        </Button>
                    </Right>
                </Header>

                <Content>
                    <Text>
                        Chat Page
                    </Text>
                </Content>
            </Container>
        );
    }
}
