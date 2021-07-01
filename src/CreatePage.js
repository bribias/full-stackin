import React, { Component } from 'react';
import { createCharacter } from './fetch-utils';

export default class CreatePage extends Component {
    state = {
        name: '',
        cool_factor: 0,
        category_id: 1,
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleCategoryChange = e => {
        this.setState({ category_id: e.target.value });
    }

    handleCoolChange = e => {
        this.setState({ cool_factor: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();
        await createCharacter({
            name: this.state.name,
            cool_factor: this.state.cool_factor,
            category_id: this.state.category_id
        });
        this.props.history.push('/')
    }  


    render() {
        return (
            <div>
                <h2>Create item</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Cool Factor
                        <input type='number' onChange={this.handleCoolChange} />
                    </label>
                    <label>
                        Category
                        <select onChange={this.handleCategoryChange}>
                            <option value='1'>Hero</option>
                            <option value='2'>Villian</option>
                        </select>
                    </label>
                    <button>Create!</button>
                </form>
            </div>
        )
    }
}
