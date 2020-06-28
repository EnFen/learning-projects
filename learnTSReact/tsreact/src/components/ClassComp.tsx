import React, { Component } from 'react';

type Props = {
    title: string;
};

type State = {
    status: string;
};


// Describes how to use TS with class based react components
export default class ClassComp extends Component<Props, State> {
    render() {
        return (
            <div>
                <h1>I'm in a class component</h1>
            </div>
        )
    }
}
