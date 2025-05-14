import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCyle } from '../../utils/ getNextCycle';
import { getNextCyleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCyle(state.currentCycle);
  const nextCycleType = getNextCyleType(nextCycle);

  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Nesse ciclo <b>Foque</b> por <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: <span>descanso longo</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo será de <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo descanso será de <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: <span>Próximo descanso será longo</span>,
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
