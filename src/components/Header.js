import React, { Component } from "react";
import kid from "../images/kid.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
export default class Header extends Component {
    render() {
        return (
            <div className="w-full flex flex-row bg-purple-400/100 py-4 px-2 sticky top-0 ">

                <div className="w-1/5">
                    <img class="w-14 h-14 rounded-full border-4 border-slate-50" src={kid} />
                </div>
                <div className="w-3/5 flex flex-row  ">
                    <div className="pr-4">
                        <h1 className="text-slate-50">Name of the student</h1>
                        <p className="text-slate-50">Standard</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faChevronDown} color="white" height="2em" />
                    </div>
                </div>
                <div className="w-1/3 flex justify-end items-center" >

                    <FontAwesomeIcon className="fa-lg" icon={faBell} color="white" />


                </div>
            </div>
        );
    }
}