import "./index.scss";
import PropTypes from "prop-types"; 

const Modal = ({ task, onClose, DeleteTask, show }) => {
    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal__content">
                <h2 className="modal__content__header">
                    Deseja editar esse item?
                </h2>
                <div className="modal__content__body">
                    <h3>
                        <b>Título: </b>
                        {task.title}
                    </h3>
                    <h4>
                        <b>Descrição: </b>
                        {task.description}
                    </h4>
                </div>
                <div className="modal__content__buttons">
                    <button
                        className="modal__content__buttons--yes"
                        onClick={() => DeleteTask(task.id)}
                    >
                        Sim
                    </button>
                    <button
                        className="modal__content__buttons--no"
                        onClick={onClose}
                    >
                        Não
                    </button>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    DeleteTask: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
};

export default Modal;
