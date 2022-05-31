import React from "react"
import SelectInput from "../common/SelectInput"
import TextInput from "../common/TextInput";
const PrintForm = ({onSave, onColorChange, onDescriptionChange, print, colors, saving = false, errors = {}}) => {
    return (
        <form onSubmit={onSave}>
            <h2>{print.id ? "Edit" : "Add"} 3D Print</h2>
            {errors.onSave && (
                <div className="alert alert-danger" role="alert">
                    {errors.onSave}
                </div>
            )}
            <TextInput
                name="description"
                label="Description"
                value={print.description}
                onChange={onDescriptionChange}
                error={errors.description}
            ></TextInput>
            <SelectInput
                name="color"
                label="Color"
                defaultOption="Select a Color"
                options={colors}
                value={print.color}
                onChange={onColorChange}
                error={errors.color}
            ></SelectInput>

            <button type="submit" disabled={saving} className="btn btn-primary">
                {saving ? "Saving..." : "Save"}
            </button>
        </form>
    );
};

export default PrintForm