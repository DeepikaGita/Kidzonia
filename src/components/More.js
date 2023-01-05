
import React, { Component } from "react";
import Academic from "../childcomponents/Academic";
import Applications from "../childcomponents/Applications";
import Dairy from "../childcomponents/Dairy";
import Daycare from "../childcomponents/Daycare";
export default class More extends Component {
    render() {
        return (
            <div className="p-2">
                <Academic />
                <Dairy />
                <Daycare />
                <Applications />
            </div>
        );
    }
}