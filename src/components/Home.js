import React, { Component } from "react";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Attendance from "../subcomponents/Attendance";
import Attendance1 from "../subcomponents/Attendance1";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Attendance />
                <Attendance1 />


            </div>

        );
    }
}