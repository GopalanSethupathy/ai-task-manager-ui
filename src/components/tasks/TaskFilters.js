import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid
} from '@mui/material';
import { setFilters, fetchTasks } from '../../features/tasks/tasksSlice';

const TaskFilters = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.tasks);

  const [localFilters, setLocalFilters] = useState({
    status: filters.status || '',
    priority: filters.priority || '',
    sortBy: filters.sortBy || 'createdAt',
    sortOrder: filters.sortOrder || 'desc'
  });

  useEffect(() => {
    setLocalFilters({
      status: filters.status || '',
      priority: filters.priority || '',
      sortBy: filters.sortBy || 'createdAt',
      sortOrder: filters.sortOrder || 'desc'
    });
  }, [filters]);

  const handleFilterChange = (field, value) => {
    setLocalFilters({
      ...localFilters,
      [field]: value
    });
  };

  const handleApplyFilters = () => {
    dispatch(setFilters(localFilters));
    dispatch(fetchTasks(localFilters));
  };

  const handleClearFilters = () => {
    const defaultFilters = {
      status: '',
      priority: '',
      sortBy: 'createdAt',
      sortOrder: 'desc'
    };
    setLocalFilters(defaultFilters);
    dispatch(setFilters(defaultFilters));
    dispatch(fetchTasks(defaultFilters));
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <FormControl
            fullWidth
            size="small"
            sx={{ minWidth: { xs: '100%', sm: 180 } }}
          >
            <InputLabel id="task-status-filter-label">Status</InputLabel>
            <Select
              labelId="task-status-filter-label"
              id="task-status-filter"
              value={localFilters.status}
              label="Status"
              onChange={(e) => handleFilterChange('status', e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="in-progress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl
            fullWidth
            size="small"
            sx={{ minWidth: { xs: '100%', sm: 180 } }}
          >
            <InputLabel id="task-priority-filter-label">Priority</InputLabel>
            <Select
              labelId="task-priority-filter-label"
              id="task-priority-filter"
              value={localFilters.priority}
              label="Priority"
              onChange={(e) => handleFilterChange('priority', e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <FormControl
            fullWidth
            size="small"
            sx={{ minWidth: { xs: '100%', sm: 160 } }}
          >
            <InputLabel id="task-sort-by-label">Sort By</InputLabel>
            <Select
              labelId="task-sort-by-label"
              id="task-sort-by"
              value={localFilters.sortBy}
              label="Sort By"
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            >
              <MenuItem value="createdAt">Created Date</MenuItem>
              <MenuItem value="dueDate">Due Date</MenuItem>
              <MenuItem value="priority">Priority</MenuItem>
              <MenuItem value="title">Title</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <FormControl
            fullWidth
            size="small"
            sx={{ minWidth: { xs: '100%', sm: 160 } }}
          >
            <InputLabel id="task-sort-order-label">Order</InputLabel>
            <Select
              labelId="task-sort-order-label"
              id="task-sort-order"
              value={localFilters.sortOrder}
              label="Order"
              onChange={(e) => handleFilterChange('sortOrder', e.target.value)}
            >
              <MenuItem value="desc">Descending</MenuItem>
              <MenuItem value="asc">Ascending</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleApplyFilters}
            sx={{ mb: 1 }}
          >
            Apply
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleClearFilters}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskFilters;

