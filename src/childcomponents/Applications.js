import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faCalendarDays, faClock, faDisplay, faFileCircleCheck, faFileInvoiceDollar, faHandsHoldingChild, faIdCard, faLightbulb, faMoneyCheckAlt, faMoneyCheckPen, faPersonChalkboard, faPersonCircleExclamation, faTicket, faUser, faUserCheck, faUserGraduate, faUsers, faUserTie, faWarehouse } from "@fortawesome/free-solid-svg-icons";
const Applications = () => {
    const items = [
        {
            id: 1,
            icons: <FontAwesomeIcon icon={faUserCheck} />,
            name: "Request For Bonafide Certificate "
        },
        {
            id: 2,
            icons: <FontAwesomeIcon icon={faWarehouse} />,
            name: "Apply For Leave"
        }
    ]

    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="p-2 ">
                    <h1 className="text-lg">Certificates & Applications</h1>
                </div>
                <div className="flex flex-row flex-wrap ">
                    {
                        items.map((item, index) => {

                            return (
                                <div key={index} className=" h-32 flex flex-col justify-center text-center m-1   rounded-lg bg-slate-50 " style={{ flex: '25%', display: "flex" }}>
                                    <span className="fa-2xl " style={{ color: "#008B8B" }}>{item.icons}</span>
                                    <span >{item.name}</span>


                                </div>
                            )
                        }

                        )
                    }
                </div>

            </div>
            <div className="h-16 flex justify-center rounded-lg bg-slate-50 text-center text-red-600">
                <button type="submit"><span>Logout</span></button>
            </div>
        </div>
    );
}
export default Applications;