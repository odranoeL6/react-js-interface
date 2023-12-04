import { React, useState } from "react";

const NewOrganization = ({ addOrganization }) => {
    const [newOrganization, setNewOrganization] = useState("");

    function enterPressed(e) {
        if (e.key === "Enter" && newOrganization !== "") {
            addOrganization(newOrganization);
            setNewOrganization("");
        }
    }
    function addNewOrganization() {
        if (newOrganization === "") return;
        addOrganization(newOrganization);
        setNewOrganization("");
    }

    return (
        <div className="OrganizationList__create">
            <label>
                Nome do grupo de tarefas:
                <input
                    type="text"
                    placeholder="Tarefas de casa"
                    onChange={(e) => setNewOrganization(e.target.value)}
                    value={newOrganization}
                    onKeyDown={enterPressed}
                />
            </label>
            <button onClick={addNewOrganization}>Criar grupo</button>
        </div>
    );
};

export default NewOrganization;
