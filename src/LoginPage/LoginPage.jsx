import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { userActions } from '../_actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit() {

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn, classes } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div style={classes.limiter}>
                <div style={classes.containerLogin100}>
                    <div style={classes.wrapLogin100}>
                        <div className="login100-form validate-form flex-sb flex-w">
                            <span style={classes.login100FormTitle}>
                                Login
                            </span>
                            <div style={classes.wrapInput100}>
                                <div style={classes.wrapInputBackground}>
                                    <TextField
                                        label="Username"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        fullWidth
                                        onChange={(e) => this.handleChange(e)}
                                        value={username}
                                        name="username"
                                    />
                                </div>
                                {submitted && !username && <div style={classes.helpBlock}>Username is required</div>}
                            </div>
                            <div style={classes.wrapInput100}>
                                <div style={classes.wrapInputBackground}>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        id="mui-theme-provider-outlined-input"
                                        fullWidth
                                        onChange={(e) => this.handleChange(e)}
                                        value={password}
                                        name="password"
                                    />
                                </div>
                                {submitted && !password && <div style={classes.helpBlock}>Password is required</div>}
                            </div>
                            <div style={classes.flexSb}>

                                <Link to="/register" style={classes.txt1}>
                                    Register
                                    </Link>

                            </div>
                            <div style={classes.containerLogin100FormBtn}>
                                <Button variant="contained" style={classes.login100FormBtn} onClick={() => this.handleSubmit()}>
                                    Login
                                    {loggingIn && <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    limiter: {
        width: '100%',
        margin: '0 auto'
    },
    containerLogin100: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    wrapLogin100: {
        width: '390px',
        background: '#fff',
        borderRadius: '10px',
        position: 'relative',
        paddingBottom: '90px',
        paddingTop: '50px'
    },
    login100FormTitle: {
        fontSize: '30px',
        color: '#403866',
        lineHeight: '1.2',
        textTransform: 'uppercase',
        textAlign: 'center',
        width: '100%',
        display: 'block',
        paddingBottom: '51px'
    },
    wrapInput100: {
        width: '100%',
        position: 'relative',
        border: '1px solid transparent',
        borderRadius: '3px',
        marginBottom: '16px'
    },
    wrapInputBackground: {
        backgroundColor: '#e6e6e6'
    },
    txt1: {
        fontSize: '16px',
        color: '#827ffe',
        lineHeight: '1.4'
    },
    flexSb: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '24px',
        paddingTop: '3px'
    },
    containerLogin100FormBtn: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '17px'
    },
    login100FormBtn: {
        width: '100%',
        height: '62px',
        fontSize: 16,
        fontWeight: 'bold'
    },
    helpBlock: {
        marginTop: '5px',
        color: 'red'
    }
};

function mapState(state) {
    const { loggingIn } = state.authentication;
    const classes = styles;
    return { loggingIn, classes };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };