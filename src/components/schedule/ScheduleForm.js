import React, { useState } from "react";
import DateInput from "../common/DateInput";
import PropTypes from 'prop-types'
import FileInput from "../common/FileInput";


const ScheduleForm = ({ onSave, onFileChange, onDateChange, schedule, errors, saving }) => {
    return (
        <form onSubmit={onSave}>
            <h2>Add Schedule</h2>
            {errors.onSave && (
                <div className="alert alert-danger" role="alert">
                    {errors.onSave}
                </div>
            )}
            <DateInput
                name="date"
                label="Date"
                onChange={onDateChange}
                error={errors.scheduleDate}
                value={schedule.scheduleDate}
            />
            <FileInput
                name="scheuld-image"
                label="Schedule Image"
                onChange={onFileChange}
                error={errors.file}
            />
            <button type="submit" disabled={saving} className="btn btn-primary">
                {saving ? "Saving..." : "Save"}
            </button>
        </form>);

}
ScheduleForm.propTypes = {
    schedule: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onFileChange: PropTypes.func.isRequired,
    onDateChange: PropTypes.func.isRequired,
    saving: PropTypes.bool
};

export default ScheduleForm;
