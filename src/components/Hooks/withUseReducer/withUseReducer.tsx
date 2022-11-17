import { useReducer } from "react";

const withUseReducer = (reducer: any, initialState: any) => (Component: any) => (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("reducer rendered")
    // console.log(state)
    return <Component {...props} {...{ state, dispatch }} />;
};

export default withUseReducer
