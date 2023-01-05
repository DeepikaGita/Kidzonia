import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faCalendarDays, faClock, faDisplay, faFileCircleCheck, faFileInvoiceDollar, faHandsHoldingChild, faIdCard, faLightbulb, faMoneyCheckAlt, faMoneyCheckPen, faPersonChalkboard, faPersonCircleExclamation, faTicket, faUser, faUserCheck, faUserGraduate, faUsers, faUserTie, faWarehouse } from "@fortawesome/free-solid-svg-icons";
const Dairy = () => {
    const items = [
        {
            id: 1,
            icons: <FontAwesomeIcon icon={faUserCheck} />,
            name: "Class Work"
        },
        {
            id: 2,
            icons: <FontAwesomeIcon icon={faWarehouse} />,
            name: "Home Work"
        },
        {
            id: 3,
            icons: <FontAwesomeIcon icon={faLightbulb} />,
            name: " Projects"
        },
        {
            id: 4,
            icons: <FontAwesomeIcon icon={faDisplay} />,
            name: "Special Day"
        },
        {
            id: 5,
            icons: <FontAwesomeIcon icon={faBus} />,
            name: "Month Theme "
        },
        {
            id: 6,
            icons: <FontAwesomeIcon icon={faFileInvoiceDollar} />,
            name: "Announcement"
        },
        {
            id: 7,
            icons: <FontAwesomeIcon icon={faFileCircleCheck} />,
            name: "Reminder"
        },
        {
            id: 8,
            icons: <FontAwesomeIcon icon={faCalendarDays} />,
            name: "Teacher Abservation"
        },
        {
            id: 9,
            icons: <FontAwesomeIcon icon={faPersonChalkboard} />,
            name: "Play & Learn"
        },
        {
            id: 10,
            icons: <FontAwesomeIcon icon={faClock} />,
            name: "Star"
        }

    ]
    return (
        <div className="flex flex-col">
            <div className="p-2 flex flex-row  justify-between">
                <h1 className="text-lg">Dairy</h1>
                <span>See all</span>
            </div>
            <div className="flex flex-row  overflow-x-auto w-full ">

                {
                    items.map((item, index) => {
                        return (

                            <div key={index} className="shrink-0 h-20 w-32 flex flex-col justify-center text-center m-1   rounded-lg bg-slate-50 " >
                                <span className="fa-2xl " style={{ color: "#008B8B" }}>{item.icons}</span>
                                <span >{item.name}</span>


                            </div>
                        )
                    }

                    )
                }
            </div>
        </div >
    );
}
export default Dairy;