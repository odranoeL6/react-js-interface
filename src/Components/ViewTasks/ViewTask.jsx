import { useState } from "react";
import PropTypes from "prop-types";
import del from "../../Assets/delete.svg";
import edit from "../../Assets/edit.svg";
import completed from "../../Assets/completed.svg";
import uncompleted from "../../Assets/uncompleted.svg";
import EditModal from "../Modals/EditModal";
import DeleteModal from "../Modals/DeleteModal";
import ReviseTask from "../ReviseTask/ReviseTask";
import './index.scss';

const ViewTasks = ({ tasks, DeleteTask, toggleCompleted, EditTask }) => {
  const [showEditModal, setShowEditModal] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(null);

  const closeModal = () => {
    setShowEditModal(null);
    setShowDeleteModal(null);
  };

  const getIsDoneIcon = (completed) => {
    if (completed) {
      return completed;
    } else {
      return uncompleted;
    }
  };

  const renderTask = (task) => {
    const isDone = getIsDoneIcon(task.completed);


    return task.isEditing ? (
      <>
        <hr />
        <ReviseTask key={task.id} task={task} EditTask={EditTask} /><hr />
      </>
    ) : (
      <tr key={task.id}>
        <td>
          <span className={task.completed ? "task-completed-title": ""}>
            {task.title}
          </span></td>
        <td>
          <img
            src={isDone}
            width="20px"
            checked={task.completed}
            onClick={(e) => toggleCompleted(task.id, !e.target.checked)}
          />
        </td>
        <td>
          <img
            src={edit}
            onClick={() => setShowEditModal(task.id)}
            width="25px"
          />
          <img
            src={del}
            onClick={() => setShowDeleteModal(task.id)}
            width="25px"
          />
        </td>
      </tr>
    );
  };

  const editModalTask = showEditModal ? tasks.find((task) => task.id === showEditModal) : null;
  const deleteModalTask = showDeleteModal ? tasks.find((task) => task.id === showDeleteModal) : null;

  return (
    <>
      {tasks.length === 0 && "Sem tarefas"}
      {tasks.map(renderTask)}
      <EditModal
        onClose={closeModal}
        show={showEditModal !== null}
        EditTask={EditTask}
        task={editModalTask}
      />
      <DeleteModal
        onClose={closeModal}
        show={showDeleteModal !== null && deleteModalTask !== undefined}
        DeleteTask={DeleteTask}
        task={deleteModalTask}
      />

    </>
  );
};

ViewTasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      completed: PropTypes.bool.isRequired,
      isEditing: PropTypes.bool.isRequired,
    })
  ).isRequired,
  DeleteTask: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  EditTask: PropTypes.func.isRequired,
};

export default ViewTasks;
