import React, { useState } from 'react'
import './app.css'
import { Box, Flex } from 'rebass'
import { Column } from './components'
import { css } from '@emotion/core'
// import { Column } from './stateful-components'
import { DragDropContext } from 'react-beautiful-dnd'
import { initialData } from './initial-data'

export const App = () => {
  const [data, setData] = useState(initialData)
  const [homeIndex, setHomeIndex] = useState()

  const handleOnDragStart = start => {
    console.log('handleOnDragStart', start)
    const homeIndex = data.columnOrder.indexOf(start.source.droppableId)
    setHomeIndex(homeIndex)
  }

  const handleOnDragUpdate = update => {
    console.log('handleOnDragUpdate', update)
  }

  const handleOnDragEnd = result => {
    console.log('handleOnDragEnd', result)
    const { destination, source, draggableId } = result

    // Dropped outside a droppable
    if (!destination) return

    // Dropped in the same position as it started
    if (destination.index === source.index && destination.droppableId === source.droppableId) return

    const startColumn = data.columns[source.droppableId]
    const endColumn = data.columns[destination.droppableId]

    if (startColumn === endColumn) {
      const newTaskIds = Array.from(startColumn.taskIds)
      newTaskIds.splice(source.index, 1) // remove task from initial position
      newTaskIds.splice(destination.index, 0, draggableId) // add task to new position

      const newColumn = {
        ...startColumn,
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

    } else {
      const startTaskIds = Array.from(startColumn.taskIds)
      startTaskIds.splice(source.index, 1)
      const newStartColumn = {
        ...startColumn,
        taskIds: startTaskIds,
      }

      const endTaskIds = Array.from(endColumn.taskIds)
      endTaskIds.splice(destination.index, 0, draggableId)
      const newEndColumn = {
        ...endColumn,
        taskIds: endTaskIds,
      }

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newStartColumn.id]: newStartColumn,
          [newEndColumn.id]: newEndColumn,
        }
      }
      setData(newData)
    }
    setHomeIndex(null)
  }

  console.log(data)
  console.log(homeIndex)

  return (
    <DragDropContext
      onDragStart={handleOnDragStart}
      onDragUpdate={handleOnDragUpdate}
      onDragEnd={handleOnDragEnd}
    >
      <Box
        css={css`
          display: grid;
          width: 100%;
          grid-template-columns: repeat(${data.columnOrder.length}, minmax(200px, 1fr));
        `}
      >
        {data.columnOrder.map((columnId, index) => {
          const column = data.columns[columnId]
          const tasks = column.taskIds.map(taskId => data.tasks[taskId])
          const isDropDisabled = index < homeIndex
          return <Column key={column.id} column={column} tasks={tasks} isDropDisabled={isDropDisabled}/>
        })}
      </Box>
    </DragDropContext>
  )

}
