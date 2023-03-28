import React, { useState } from "react";
import Parse from 'parse/dist/parse.min.js'


const SchedulePage = () => {
    const [selectedFile, setSelectedFile] = useState(null)
    const fileSelectedHandler = event => {
        setSelectedFile(event.target.files[0])
    }
    const saveSchedule = (parseFile) => {
        const schedule = new Parse.Object("Schedule")

        schedule.set("scheduleDate", new Date())
        schedule.set("file", parseFile)

        schedule.save().then(function() {
            console.log("bet")
        }, function(error) {
            console.log(error)
            console.log("oof")
        });
    }
    const fileUploadHandler = () => {
        const parseFile = new Parse.File("bra2", selectedFile);
        parseFile.save().then(function() {
            console.log("bet")
            saveSchedule(parseFile)
        }, function(error) {
            console.log(error)
            console.log("oof")
        });
    }
    return (<div>
        <h2>Manage Schedules</h2>
        <input type="file" onChange={fileSelectedHandler} />
        <p>{selectedFile?.name}</p>
        <button onClick={fileUploadHandler}>Submit</button>
    </div>);

}


export default SchedulePage;
