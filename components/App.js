import * as firebase from 'firebase';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon
} from 'native-base';

import ListComponent from './ListComponent';

class App extends Component {
    constructor(){
        super();

        this.state = {
            lista: [
                        {
                            id: 1,
                            name: 'pollo',
                            done: false
                        },
                        {
                            id: 2,
                            name: 'sopa',
                            done: false
                        },
                        {
                            id: 3,
                            name: 'ropa',
                            done: false
                        }
                    ]
        }

    }

    changeDone = (item) => {
        console.log(item);
        this.state.lista = this.state.lista.filter(i => i !== item);
        this.state.lista.push(item);
        this.setState({lista: this.state.lista});
    }

    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={styles.container}>
                        <ListComponent
                            lista={this.state.lista}
                            changeDone={this.changeDone}
                            />
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});

export default App;

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCfGksHS2BpYH6BXrqznpZWMlAwzrmtttU",
    authDomain: "reactfirebase-b16aa.firebaseapp.com",
    databaseURL: "https://reactfirebase-b16aa.firebaseio.com",
    projectId: "reactfirebase-b16aa",
    storageBucket: "reactfirebase-b16aa.appspot.com",
    messagingSenderId: "113538498979"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);  import ListComponent from './ListComponent';

class App extends Component {
    constructor(){
        super();

        this.state = {
            lista: [
                        {
                            id: 1,
                            name: 'pollo',
                            done: false
                        },
                        {
                            id: 2,
                            name: 'sopa',
                            done: false
                        },
                        {
                            id: 3,
                            name: 'ropa',
                            done: false
                        }
                    ]
        }

    }

    changeDone = (item) => {
        console.log(item);
        this.state.lista = this.state.lista.filter(i => i !== item);
        this.state.lista.push(item);
        this.setState({lista: this.state.lista});
    }

    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={styles.container}>
                        <ListComponent
                            lista={this.state.lista}
                            changeDone={this.changeDone}
                            />
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});

export default App;

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA9eoHyaVyWy7fBmHRTmjWfM_0EPlrQCec",
  authDomain: "fixter-a517f.firebaseapp.com",
  databaseURL: "https://fixter-a517f.firebaseio.com",
  projectId: "fixter-a517f",
  storageBucket: "fixter-a517f.appspot.com",
  messagingSenderId: "86087361821"
};
firebase.initializeApp(config);

export default App;
