import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { fetchTasks, createTask, updateTask, deleteTask, fetchTaskStats } from '../features/tasks/tasksSlice';
import TaskList from '../components/tasks/TaskList';
import TaskFilters from '../components/tasks/TaskFilters';
import TaskFormDialog from '../components/tasks/TaskFormDialog';

const TasksPage = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.tasks);

  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchTasks(filters));
    dispatch(fetchTaskStats());
  }, [dispatch, filters]);

  const handleCreateTask = () => {
    setEditingTask(null);
    setFormDialogOpen(true);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setFormDialogOpen(true);
  };

  const handleSaveTask = async (taskData) => {
    if (editingTask) {
      await dispatch(updateTask({ taskId: editingTask._id, taskData }));
    } else {
      await dispatch(createTask(taskData));
    }
    setFormDialogOpen(false);
    setEditingTask(null);
    dispatch(fetchTasks(filters));
    dispatch(fetchTaskStats());
  };

  const handleDeleteClick = (taskId) => {
    setTaskToDelete(taskId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (taskToDelete) {
      await dispatch(deleteTask(taskToDelete));
      setDeleteDialogOpen(false);
      setTaskToDelete(null);
      dispatch(fetchTasks(filters));
      dispatch(fetchTaskStats());
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Tasks</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleCreateTask}
        >
          Create Task
        </Button>
      </Box>

      <TaskFilters />

      <TaskList onEdit={handleEditTask} onDelete={handleDeleteClick} />

      <TaskFormDialog
        open={formDialogOpen}
        onClose={() => {
          setFormDialogOpen(false);
          setEditingTask(null);
        }}
        onSave={handleSaveTask}
        task={editingTask}
      />

      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this task? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TasksPage;

