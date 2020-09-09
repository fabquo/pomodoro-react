import React from "react";

class App extends React.Component {
    render() {
        const {name} = this.props;
        return (
            <>
                {/* eslint-disable-next-line react/jsx-no-literals */}
                <h1>Hello {name}</h1>
            </>
        );
    }
}

export default App;
