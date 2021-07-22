import React, { Component } from 'react'
import $ from 'jquery'

class Api extends Component {
    constructor(props) {
        super(props)
        this.state = { name: '', picture: '', username: '' }
    }

    componentDidMount() {
        $.get('https://api.github.com/users/dearshrewdwit', (data) => {
            this.setState({ name: data.name, picture: data.avatar_url, username: data.login })
        }) 
    }

    render() {
        return (
            <div>
                <h1 id="name">{this.state.name}</h1>
                <img alt="Kosi" style={{height: 100}} id="picture" src={this.state.picture}></img>
                <h2 id="username">{this.state.username}</h2>
            </div>
        )
    }
}

export default Api