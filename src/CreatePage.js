import React, { Component } from 'react';
import { createCharacter } from './fetch-utils';

export default class CreatePage extends Component {
    render() {
        return (
            <div>
                <createCharacter />
            </div>
        )
    }
}
