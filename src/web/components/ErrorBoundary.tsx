import {Component, ErrorInfo, ReactNode, ReactElement} from 'react';


interface Props {
    children?: ReactNode;
    fallbackRender: ({error}: {error: Error | null}) => ReactElement;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    }
    // 接受子组件错误
    public static getDerivedStateFromError(_: Error): State{
        return {hasError: true}
    }
    public componentDidCatch(error: Error, errorInfo: ErrorInfo){
        console.log('报告错误', error, errorInfo)
    }
    public render() {
        const { children, fallbackRender } = this.props;
        const { hasError } = this.state;
        if(hasError === true){
            return fallbackRender({error: new Error('系统组件出错了！！！')})
        }
        return children
    }
}

export default ErrorBoundary;