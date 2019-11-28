import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userActions } from '../_actions';

class HomePage extends Component {
    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { 
            user: {
                username
            }
        } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {username}!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
               
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
        
    }
}

function mapState(state) {
    const { authentication } = state;
    const { user } = authentication;
    return { user };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };