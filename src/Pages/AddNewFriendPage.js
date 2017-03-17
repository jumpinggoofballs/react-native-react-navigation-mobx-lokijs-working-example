import React, { Component } from 'react';
import { Container, Header, Left, Button, Icon, Body, Title, Content, Text } from 'native-base';


export default class AddNewFriendPage extends Component {
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
                        <Title>Add New Friend</Title>
                    </Body>
                </Header>

                <Content>
                    <Text>
                        Add New Friend Page
                    </Text>
                </Content>
            </Container>
        );
    }
}
