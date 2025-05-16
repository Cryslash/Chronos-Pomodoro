import './styles/global.css';
import './styles/theme.css';

import { TaskConextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';
import { MainRouter } from './routers/MainRouter';

export function App() {
  return (
    <TaskConextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskConextProvider>
  );
}
