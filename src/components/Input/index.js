import React, { useState } from 'react';

import { View } from 'react-native';

import { Container, Field, Button, TextButton } from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../store/actions/todo'



const Input = ({ addTodo }) => {
    const [text, setText] = useState('');
    return (
        <Container>
            <Field
                value={text}
                onChangeText={text => setText(text)}
            />
            <Button onPress={
                () => {
                    if (text) {
                        addTodo(text)
                    }
                    setText('');
                }
            }>
                <TextButton>
                    Add
                </TextButton>
            </Button>
        </Container>
    )
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch);



export default connect(null, mapDispatchToProps)(Input);
