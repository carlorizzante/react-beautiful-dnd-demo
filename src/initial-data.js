export const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone', isDragDisabled: true },
    'task-4': { id: 'task-4', content: 'Cook dinner', isDragDisabled: true },
    'task-5': { id: 'task-5', content: 'Go for a run' },
    'task-6': { id: 'task-6', content: 'Do laundry' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
      type: 'tasks',
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: ['task-6'],
      type: 'tasks',
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
      type: 'tasks',
    },
    'column-4': {
      id: 'column-4',
      title: 'Disabled',
      taskIds: [],
      type: 'tasks',
      disabled: true,
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4']
}
