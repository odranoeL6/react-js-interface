import React from "react";
import del from "../../Assets/delete.svg";
import { Link } from "react-router-dom";

const ViewOrganizations = ({ organizations, deleteOrganization }) => {
    return (
        <>
            {organizations.length === 0 && (
                <div className="OrganizationList__items">
                    Sem grupos de tarefas, adicione uma nova
                </div>
            )}
            {organizations.map((organization) => {
                return (
                    <div className="OrganizationList__items">
                    <Link  to={`tasks/${organization.title}`}>
                            {organization.title}
                            
                    </Link>
                    <img
                                src={del}
                                onClick={() =>
                                    deleteOrganization(organization.id, organization.title)
                                }
                                width={"25px"}
                            />
                    </div>
                );
            })}
        </>
    );
};

export default ViewOrganizations;
