import React from 'react'
import { Box } from 'rebass'
import { css } from '@emotion/core'
import { Droppable } from 'react-beautiful-dnd'
import { Task } from '.'
import styled from '@emotion/styled'

const Container = React.forwardRef(({ children, ...rest }, ref) => (
  <Box
    ref={ref}
    css={css`
      margin: 8px;
      padding: 8px 8px 0;
      border: 1px solid lightgrey;
      border-radius: 3px;
    `}
    {...rest}
  >
    {children}
  </Box>
))

const Title = styled('h2')`
  margin-bottom: 8px;
`

const TaskList = React.forwardRef(({ children, isDraggingOver, ...rest }, ref) =>(
  <Box
    ref={ref}
    css={css`
      background-color: ${isDraggingOver ? 'skyblue' : 'white'};
      transition: background-color 0.3s;
    `}
    {...rest}
  >
    {children}
  </Box>
))

export const Column = ({ column, tasks }) => (
  <Container>
    <Title>{column.title}</Title>
    <Droppable droppableId={column.id}>
      {(provided, snapshot) => (
        <TaskList
          isDraggingOver={snapshot.isDraggingOver}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {tasks.map((task, index) => (
            <Task key={task.id} index={index} {...task}/>
          ))}
          {provided.placeholder}
        </TaskList>
      )}
    </Droppable>
  </Container>
)
