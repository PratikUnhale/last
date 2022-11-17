import {
    useNavigate,
    useParams
} from "react-router-dom";

const withRouter = (Component: any) => {
    const ComponentWithRouterProp = (props: any) => {
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default withRouter