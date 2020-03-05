import React from 'react';

import { View } from 'react-native';

import { Container, Description } from './styles';

import { connect } from 'react-redux';

const Header = ({ data }) => (
    <Container>
        <Description>
            {data.length} Tarefa(s) cadastradas
        </Description>
    </Container>
);

const mapStateToProps = state => ({
    data: state.todo
});

export default connect(mapStateToProps)(Header);
