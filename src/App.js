import React, { useState } from 'react'
import './app.css'
import { Box } from 'rebass'
import { Column } from './components'
// import { Column } from './stateful-components'
import { DragDropContext } from 'react-beautiful-dnd'
import { initialData } from './initial-data'

export const App = () => {
  const [data, setData] = useState(initialData)

  document.body.style.transition = 'background-color 0.2s'

  const handleOnDragStart = update => {
    console.log('handleOnDragStart', update)
    document.body.style.color = 'orange'
  }
  const handleOnDragUpdate = update => {
    console.log('handleOnDragUpdate', update)
    const { destination } = update
    const opacity = destination
      ? destination.index / Object.keys(data.tasks).length
      : 0
    document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`
  }

  const handleOnDragEnd = result => {
    console.log('handleOnDragEnd', result)
    document.body.style.color = 'inherit'
    document.body.style.backgroundColor = 'inherit'
    
    const { destination, source, draggableId } = result

    // Dropped outside a droppable
    if (!destination) return

    // Dropped in the same position as it started
    if (destination.index === source.index && destination.droppableId === source.droppableId) return

    const column = data.columns[source.droppableId]
    const newTaskIds = Array.from(column.taskIds)
    newTaskIds.splice(source.index, 1) // remove task from initial position
    newTaskIds.splice(destination.index, 0, draggableId) // add task to new position

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    }

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn
      }
    }

    setData(newData)
  }

  console.log(data)

  return (
    <DragDropContext
      onDragStart={handleOnDragStart}
      onDragUpdate={handleOnDragUpdate}
      onDragEnd={handleOnDragEnd}
    >
      <Box className="app">
        {data.columnOrder.map(columnId => {
          const column = data.columns[columnId]
          const tasks = column.taskIds.map(taskId => data.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks}/>
        })}
      </Box>
    </DragDropContext>
  )

}
