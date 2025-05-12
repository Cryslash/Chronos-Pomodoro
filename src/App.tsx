import './styles/global.css';
import './styles/theme.css';

import { Home } from './pages/Home';
import { TaskConextProvider } from './contexts/TaskContext/TaskContextProvider';

export function App() {
  return (
    <TaskConextProvider>
      <Home />
    </TaskConextProvider>
  );
}
