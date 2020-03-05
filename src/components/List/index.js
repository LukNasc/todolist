import React from 'react';
import { FlatList } from 'react-native';

import { CheckBox } from 'react-native-elements';

import { Container, ContainerItem, TitleItem } from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../store/actions/todo'

const List = ({ data, doneTodo }) => {
    return (
        <Container>
            <FlatList
                style={{ flex: 1 }}
                keyExtractor={item => item.id}
                data={data}
                renderItem={({ item }) => <ItemList key={item.id} item={item} doneTodo={doneTodo} />}
            />
        </Container>
    );
}

const ItemList = ({ item, doneTodo }) => (
    <ContainerItem>
        <CheckBox
            onPress={() => doneTodo(item)}
            checked={item.checked}
            title={item.task}
            containerStyle={{
                backgroundColor: '#fff',
                borderColor: '#fff',
                flex: 1
            }}
        />
    </ContainerItem>
)

const mapStateToProps = state => ({
    data: state.todo
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
