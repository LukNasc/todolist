import React, { Component } from 'react';
import { Image, SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import { Container, Title } from './styles';

import store from '../../store'
import Header from '../../components/Header';
import Input from '../../components/Input';
import List from '../../components/List';

class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaView style={{ flex: 1, backgroundColor: '#aa0000' }}>
                    <Container>
                        <Title>Lista de tarefas</Title>
                        <Header />
                        <Input />
                        <List />
                    </Container>
                </SafeAreaView>
            </Provider>

        );
    }
}

export default Main;