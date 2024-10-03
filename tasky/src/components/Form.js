import React from "react";

const AddTaskForm = (props) => {
    return (
        <div>
            <form>
                <label>
                    Task title:<br/>
                    <input type="text" name="title" required ></input>
                </label>
                <br/>
                <label>
                    Due date:<br/>
                    <input type="date" name="deadline" required ></input>
                </label>
                <br />
                <label>
                    Details:<br/>
                    <input type="text" name="description" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};
export default AddTaskForm;