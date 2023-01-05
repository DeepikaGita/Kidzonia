import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FontAwesome from '@fortawesome/free-solid-svg-icons';
import { faBus, faCalendarDays, faClock, faDisplay, faFileCircleCheck, faFileInvoiceDollar, faHandsHoldingChild, faIdCard, faLightbulb, faMoneyCheckAlt, faMoneyCheckPen, faPersonChalkboard, faPersonCircleExclamation, faTicket, faUser, faUserCheck, faUserGraduate, faUsers, faUserTie, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { icons } from "react-icons";
import { FaUserCheck } from "react-icons/fa";
const Chat = () => {
    const items = [
        {
            id: 1,
            icons: <FontAwesomeIcon icon={faUserCheck} />,
            name: "Attendance"
        },
        {
            id: 2,
            icons: <FontAwesomeIcon icon={faWarehouse} />,
            name: "School Library"
        },
        {
            id: 3,
            icons: <FontAwesomeIcon icon={faLightbulb} />,
            name: " Live Quiz"
        },
        {
            id: 4,
            icons: <FontAwesomeIcon icon={faDisplay} />,
            name: "Live Class"
        },
        {
            id: 5,
            icons: <FontAwesomeIcon icon={faBus} />,
            name: "Transport"
        },
        {
            id: 6,
            icons: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
            name: "Fees"
        },
        {
            id: 7,
            icons: <FontAwesomeIcon icon={faFileCircleCheck} />,
            name: "Report card"
        },
        {
            id: 8,
            icons: <FontAwesomeIcon icon={faCalendarDays} />,
            name: "Calender"
        },
        {
            id: 9,
            icons: <FontAwesomeIcon icon={faPersonChalkboard} />,
            name: "Notice Board"
        },
        {
            id: 10,
            icons: <FontAwesomeIcon icon={faClock} />,
            name: "Time table"
        },
        {
            id: 11,
            icons: <FontAwesomeIcon icon={faHandsHoldingChild} />,
            name: "School Policy"
        },
        {
            id: 12,
            icons: <FontAwesomeIcon icon={faMoneyCheckAlt} />,
            name: "Feedback"
        },
        {
            id: 13,
            icons: <FontAwesomeIcon icon={faUserTie} />,
            name: "Book&Uniform"
        },
        {
            id: 14,
            icons: <FontAwesomeIcon icon={faPersonCircleExclamation} />,
            name: "Raise A Concern"
        },
        {
            id: 15,
            icons: <FontAwesomeIcon icon={faUsers} />,
            name: "PTM"
        },
        {
            id: 16,
            icons: <FontAwesomeIcon icon={faIdCard} />,
            name: "Escort Card"
        },
        {
            id: 17,
            icons: <FontAwesomeIcon icon={faTicket} />,
            name: "Gate Pass"
        }
    ]

    return (
        <div className="flex flex-col">
            <div className="p-2 ">
                <h1 className="text-lg">Academic</h1>
            </div>
            <div className="flex flex-row flex-wrap ">
                {
                    items.map((item, index) => {

                        return (
                            <div key={index} className=" h-20 flex flex-col justify-center text-center m-1   rounded-lg bg-slate-50 " style={{ flex: '25%', display: "flex" }}>
                                <span className="fa-2xl " style={{ color: "#008B8B" }}>{item.icons}</span>
                                <span >{item.name}</span>


                            </div>
                        )
                    }

                    )
                }
            </div>

        </div>

    );
}
export default Chat;