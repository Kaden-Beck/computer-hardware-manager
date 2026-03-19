import { createFileRoute } from '@tanstack/react-router';
import DashboardComponent from '../components/Dashboard';

export const Route = createFileRoute('/dashboard')({
  component: DashboardComponent,
});
