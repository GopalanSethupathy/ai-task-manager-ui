import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Alert
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Pending as PendingIcon,
  Work as WorkIcon,
  Assignment as AssignmentIcon
} from '@mui/icons-material';
import { fetchTaskStats } from '../features/tasks/tasksSlice';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { stats, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTaskStats());
  }, [dispatch]);

  const statCards = [
    {
      title: 'Total Tasks',
      value: stats.total,
      icon: <AssignmentIcon sx={{ fontSize: 40 }} />,
      color: '#1976d2'
    },
    {
      title: 'Completed',
      value: stats.completed,
      icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
      color: '#2e7d32'
    },
    {
      title: 'Pending',
      value: stats.pending,
      icon: <PendingIcon sx={{ fontSize: 40 }} />,
      color: '#ed6c02'
    },
    {
      title: 'In Progress',
      value: stats.inProgress,
      icon: <WorkIcon sx={{ fontSize: 40 }} />,
      color: '#0288d1'
    }
  ];

  if (loading) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {statCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: card.color,
                color: 'white'
              }}
            >
              <Box sx={{ mb: 2 }}>{card.icon}</Box>
              <Typography variant="h3" component="div">
                {card.value}
              </Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                {card.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardPage;

