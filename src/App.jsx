import Header from "./Components/Header/Header";
import TaskList from "./Components/TaskList/TaskList";


const db = [
    {
        id: 1,
        title: "Alimentar Gatos",
        description: "Lembrar-se de alimentar os gatos",
        completed: false,
        isEditing: false,
    },
    {
        id: 2,
        title: "Estudo do Curso DNC",
        description: "Estudar o conteúdo do Curso da Escola DNC",
        completed: false,
        isEditing: false,
    },
    {
        id: 3,
        title: "Almoçar",
        description: "Almoçar",
        completed: false,
        isEditing: false,
    },
    {
        id: 4,
        title: "Estudo do Conteúdo da Faculdade",
        description: "Estudar o conteúdo da faculdade",
        completed: false,
        isEditing: false,
    },
    {
        id: 5,
        title: "Ir ao Parque",
        description: "Ir ao parque para correr e prática diária de exercício",
        completed: false,
        isEditing: false,
    },
    {
        id: 6,
        title: "Tomar Banho",
        description: "Tomar banho para a continuação do dia",
        completed: false,
        isEditing: false,
    },
    {
        id: 7,
        title: "Jantar",
        description: "Jantar",
        completed: false,
        isEditing: false,
    },
    {
        id: 8,
        title: "Muay Thai",
        description: "Ir até a escola de Muay Thai para a prática da arte marcial",
        completed: false,
        isEditing: false,
    },
    {
        id: 9,
        title: "Assistir Vídeos",
        description: "Assistir alguns vídeos para entretenimento",
        completed: false,
        isEditing: false,
    },
];

function App() {
    
    return (
        <>
            <Header />
            <TaskList data={db} />
        </>
    );
}

export default App;
