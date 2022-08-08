import { Component } from "react/cjs/react.production.min";
import ErrorMassage from "../errorMassage/errorMassage";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch ( err, info) {
        console.log(err, info)
        this.setState({error:true})
     }

     render () {
        if (this.state.error)
        return <ErrorMassage/>
        return this.props.children;
     }
}

export default ErrorBoundary