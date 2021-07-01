import React, { Component } from 'react';
import { getAllCategories, getOneCharacter, updateCharacter } from './fetch-utils';

export default class DetailPage extends Component {
    state = {
        name: '',
        cool_factor: 0,
        category_id: 1,
        categories: []
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;
        const character = await getOneCharacter(id);
        const categories = await getAllCategories();

        this.setState({
            name: character.name,
            cool_factor: character.cool_factor,
            category_id: character.category_id,
            categories: categories
        })
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

        await updateCharacter(this.props.match.params.id, {
            name: this.state.name,
            cool_factor: this.state.cool_factor,
            category_id: this.state.category_id
        });
        this.props.hirstory.push('/')
    }

    render() {
        return (
            <div>
                <h2>Update item</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input vale={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Cool Factor
                        <input vale={this.state.cool_factor} onChange={this.handleCoolChange} />
                    </label>
                    <label>
                        Category
                        <select onChange={this.handleCategoryChange}>
                            {this.state.categories.map(category => 
                                <option
                                    selected={category.id === this.state.category_id}
                                    value={category.id}>
                                    {category.category}
                                </option>)}
                        </select>
                    </label>
                    <button>Update!!</button>
                </form>
            </div>
        )
    }
}
