import React from "react";

import Attendance from "./Attendance";
const Attendance1 = () => {

    const attendance = [
        {
            Date: "12 nov",
            day: "wednesday",
            present: true

        },
        {
            Date: "13 nov",
            day: "tuesday",
            present: false
        },
        {
            Date: "14 nov",
            day: "wednesday",
            present: false
        },
        {
            Date: "15 nov",
            day: " thursday",
            present: true
        },
        {
            Date: "16 nov ",
            day: "friday",
            present: true
        }
    ]
    const list = [
        {
            name: "Present",
            Number: "10"
        },
        {
            name: "Half Day",
            Number: "0"
        },
        {
            name: "Abscent",
            Number: "0"
        },
        {
            name: "Leave",
            Number: "0"
        }
    ]


    return (
        <div className="flex flex-col px-2">

            <div className="flex flex-row py-4 justify-between w-full">
                {
                    list.map((item, index) => {
                        return (
                            <div>
                                <div key={index} className="flex flex-col p-4  rounded-lg bg-slate-50  text-center w-25 ">
                                    <span>{item.name}</span>
                                    <span>{item.Number}</span>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
            <div className="w-full bg-slate-50 divide-y divide-slate-400 rounded-lg">
                {
                    attendance.map((item, index) => {
                        const itemList = item.present;

                        if (itemList == true) {
                            return <div key={index} className="flex flex-row  w-full ">
                                <div className="w-1/2 p-2">
                                    <span>{item.Date}</span><br></br>
                                    <span>{item.day}</span>
                                </div>
                                <div className="w-1/2 p-2 text-end">
                                    <p className="text-lime-400">present</p>
                                </div>

                            </div>


                        } else {
                            return <div key={index} className="flex flex-row  w-full">
                                <div className="w-1/2 p-2">
                                    <span>{item.Date}</span><br></br>
                                    <span>{item.day}</span>
                                </div>
                                <div className="w-1/2 p-2 text-end">
                                    <p> - </p>
                                </div>
                            </div>;
                        }

                    }


                    )
                }
            </div>




        </div>
    )

}
export default Attendance1;