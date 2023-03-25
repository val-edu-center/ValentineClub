import React, { useState } from "react";
import Parse from 'parse/dist/parse.min.js'
import DateInput from "../common/DateInput";


const SchedulePage = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const fileSelectedHandler = event => {
        setSelectedFile(event.target.files[0])
    }
    const saveSchedule = (parseFile) => {
        const schedule = new Parse.Object("Schedule")

        schedule.set("scheduleDate", new Date())
        schedule.set("file", parseFile)

        schedule.save().then(function () {
            console.log("bet")
        }, function (error) {
            console.log("oof")
        });
    }
    const fileUploadHandler = () => {
        const parseFile = new Parse.File(selectedFile.name, selectedFile);
        parseFile.save().then(function () {
            console.log("bet")
            saveSchedule(parseFile)
        }, function (error) {
            console.log("oof")
        });
    }
    return (<div>
        <h2>Upload Schedule</h2>

        <DateInput
            name="date"
            label="Date"
        />
        <input type="file" onChange={fileSelectedHandler} />
        <p>{selectedFile?.name}</p>
        <button onClick={fileUploadHandler}>Submit</button>
    </div>);

}


export default SchedulePage;
