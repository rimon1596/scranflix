import React from 'react';
import { useContent } from '../hooks';
import { HeaderContainer } from '../containers/header'


export default function Browse() {

    const { series } = useContent('series');
    console.log(series);
    const { films } = useContent('films');
    console.log(films);

    return (
        <HeaderContainer />
    );
}