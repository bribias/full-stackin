import React, { Component } from 'react';
import { getAllCharacters } from './fetch-utils';
import { Link } from 'react-router-dom';

export default class ListPage extends Component {
    state = {
        characterData: []
    }
    componentDidMount = async () => {
        const characters = await getAllCharacters();
        this.setState({ characterData: characters })
    }

    render() {
        return (
            <div className="characters">
                {
                    this.state.characterData.map(character =>
                        <Link to={`/characters/${character.id}`}>
                        <div className="character">
                        <p>{character.name}</p>
                        <p>{character.cool_factor}</p>
                        <p>{character.category}</p>
                    </div>
                        </Link>
                    )
                }
            </div>
        )
    }
}
