class HelloWorldComponent extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name}</h1>
        );
    }
}

ReactDOM.render(
    <HelloWorldComponent name="react & JSX world!" />,
    document.getElementById('content')
);

