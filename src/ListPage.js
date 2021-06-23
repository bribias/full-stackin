import React, { Component } from 'react';
import { getAllCharacters } from './fetch-utils';

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
                    this.state.characters.map(game => <div className="character">
                        {/* <p>
                            {character.name}
                        </p>
                        <p>
                            {chatacter.cool_factor}
                        </p>
                        <p>
                            {character.category}
                        </p> */}
                    </div>)
                }
            </div>
        )
    }
}
