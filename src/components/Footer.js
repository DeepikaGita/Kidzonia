import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { fa, FaFileAlt } from "react-icons/fa";
export default class Footer extends Component {
    render() {
        return (
            <div className="sticky bottom-0">
                <nav>
                    <div className=" flex flex-row bg-purple-400/100   h-16 pt-4">
                        <div className="w-1/3  text-center text-sm" >
                            <Link className="flex flex-col" to="/">
                                <FontAwesomeIcon className="fa-xl " icon={faFileAlt} style={{ color: "white" }} />

                                <span>Class Story</span> </Link>
                        </div>
                        <div className="w-1/3  text-center text-sm">
                            <Link className="flex flex-col" to="/chat"><FontAwesomeIcon className="fa-lg " icon={faCommentAlt} style={{ color: "white" }} />
                                <span>Chat</span> </Link>
                        </div>
                        <div className="w-1/3 text-center text-sm">
                            <Link className="flex flex-col" to="/more"> <FontAwesomeIcon className="fa-lg " icon={faBars} style={{ color: "white" }} />
                                <span>More</span> </Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}