import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faCalendarDays, faClock, faDisplay, faFileCircleCheck, faFileInvoiceDollar, faHandsHoldingChild, faIdCard, faLightbulb, faMoneyCheckAlt, faMoneyCheckPen, faPersonChalkboard, faPersonCircleExclamation, faTicket, faUser, faUserCheck, faUserGraduate, faUsers, faUserTie, faWarehouse } from "@fortawesome/free-solid-svg-icons";
const Daycare = () => {
    const items = [
        {
            id: 1,
            icons: <FontAwesomeIcon icon={faUserCheck} />,
            name: "Food"
        },
        {
            id: 2,
            icons: <FontAwesomeIcon icon={faWarehouse} />,
            name: "Sleep"
        },
        {
            id: 3,
            icons: <FontAwesomeIcon icon={faLightbulb} />,
            name: " Potty"
        },
        {
            id: 4,
            icons: <FontAwesomeIcon icon={faDisplay} />,
            name: "CCTV"
        },
        {
            id: 5,
            icons: <FontAwesomeIcon icon={faBus} />,
            name: "Health"
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
export default Daycare;