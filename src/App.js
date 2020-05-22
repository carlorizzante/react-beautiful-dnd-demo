import React, { useState } from 'react'
import './app.css'
import { Box } from 'rebass'
import { Column } from './column'
import { initialData } from './initial-data'

export const App = () => {
  const [data, setData] = useState(initialData)

  console.log(data);

  return (
    <Box>
      {data.columnOrder.map(columnId => {
        const column = data.columns[columnId]
        const tasks = column.taskIds.map(taskId => data.tasks[taskId])
        console.log(tasks)
        return <Column key={column.id} column={column} tasks={tasks}/>
      })}
    </Box>
  )

}
