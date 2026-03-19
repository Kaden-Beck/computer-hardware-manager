import { createFileRoute } from '@tanstack/react-router';
import AboutComponent from '../components/About';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});
