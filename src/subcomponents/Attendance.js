import React from "react";
import Attendance1 from "./Attendance1";
import Moment from 'moment';
const Attendance = () => {
    const formatDate = Moment().format('MMM,YY')
    return (
        <div className="flex flex-col">
            <div className="text-center bg-slate-50 p-4 ">

                <h1>{formatDate}</h1>
            </div>
            <div>

            </div>
        </div>



    )

}
export default Attendance;