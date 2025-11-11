import { useSelector } from 'react-redux';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = ({ onEdit, onDelete }) => {
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 2 }}>
        {error}
      </Alert>
    );
  }

  if (tasks.length === 0) {
    return (
      <Box textAlign="center" py={4}>
        <Typography variant="h6" color="text.secondary">
          No tasks found. Create your first task!
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </Box>
  );
};

export default TaskList;

