import React, { Component } from 'react';
import MZTabController from "../MZTabController/MZTabController";

type Props = {};
export default class MZAppDelegate extends Component<Props> {

    constructor(props) {
        super(props);
    }
    render () {
        return (
            <MZTabController />
        );
    }
}