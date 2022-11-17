import React from 'react';
import { createContext } from 'react';
import { ILoginContext } from './LoginProvider.types';
import withUseReducer from '../../Hooks/withUseReducer/withUseReducer';

export const LoginContext = createContext<any>(null);


const loginReducer = (state: ILoginContext, action: { type: string, data: ILoginContext }) => {
    switch (action.type) {
        case "LOGIN_SUCCESSFULL":
            return action.data;

        case "LOGOUT":
            return action.data;
        default:
            return state;
    }

}

class LoginProvider extends React.Component<any, any> {

    render() {
        const { state, dispatch } = this.props;
        return (<LoginContext.Provider value={{ state, dispatch }}>
            {this.props.children}
        </LoginContext.Provider>
        )
    }
}

export default withUseReducer(loginReducer, { isLoggedIn: false })(LoginProvider)

