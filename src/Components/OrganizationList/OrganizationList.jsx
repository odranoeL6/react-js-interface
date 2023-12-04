import { React, useState, useEffect } from "react";
import "./index.scss";
import NewOrganization from "../NewOrganization/NewOrganization";
import ViewOrganizations from "../ViewOrganizations/ViewOrganizations";

const OrganizationList = ({ data }) => {

    /**
     * Aqui a lista de tarefas é inicializada no localStorage para que seja
     * usada de exemplo e não seja perdida caso a página seja atualizada.
     * A lista retornada pelo useState fica armazenada na variável tasks.
     */
    const [organizations, setOrganizations] = useState(() => {
        const localValue = localStorage.getItem("GROUPS");
        if (!localValue) localStorage.setItem("GROUPS", JSON.stringify(data));
        return JSON.parse(localValue);
    }, []); // componentDidMount 1x

    /**
     * Toda vez que 'tasks' for atualizado o useEffect salva a nova lista de
     * tarefas no localStorage, seja ela menor ou maior que a anterior.
     */
    useEffect(() => {
        localStorage.setItem("GROUPS", JSON.stringify(organizations));
    }, [organizations]); // componentDidUpdate toda vez que 'tasks' atualiza

    function addOrganization(title) {
        setOrganizations((currentOrganizations) => {
            return [
                ...currentOrganizations,
                {
                    id: crypto.randomUUID(),
                    title,
                },
            ];
        });
    }

    function deleteOrganization(id,title) {
        localStorage.removeItem(title)
        setOrganizations((currentOrganizations) => {
            return currentOrganizations.filter(
                (organizations) => organizations.id !== id
            );
        });
    }

    return (
        <section className="OrganizationList">
            <h1>
                Otimize seu tempo e se organize com o nosso Planejador Diário.
            </h1>
            <NewOrganization addOrganization={addOrganization} />
            <ViewOrganizations
                organizations={organizations}
                deleteOrganization={deleteOrganization}
            />
        </section>
    );
};

export default OrganizationList;
