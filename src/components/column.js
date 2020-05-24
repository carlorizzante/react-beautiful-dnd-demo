import React from 'react'
import { Box, Flex } from 'rebass'
import { css } from '@emotion/core'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { Task } from '.'
import styled from '@emotion/styled'

const Container = React.forwardRef(({ children, ...rest }, ref) => (
  <Flex
    ref={ref}
    css={css`
      flex-direction: column;
      margin: 8px;
      padding: 8px 8px 0;
      background-color: white;
      border: 1px solid lightgrey;
      border-radius: 3px;
    `}
    {...rest}
  >
    {children}
  </Flex>
))

const Title = styled('h2')`
  margin-bottom: 8px;
`

const TaskList = React.forwardRef(({ children, isDraggingOver, ...rest }, ref) =>(
  <Flex
    ref={ref}
    css={css`
      flex: 1;
      flex-direction: column;
      min-height: 100px;
      background-color: ${isDraggingOver ? 'skyblue' : 'white'};
      transition: background-color 0.3s;
    `}
    {...rest}
  >
    {children}
  </Flex>
))

export const Column = ({ column, index, isDropDisabled, tasks }) => (
  <Draggable
    draggableId={column.id}
    index={index}
  >
    {(provided) => (
      <Container
        ref={provided.innerRef}
        {...provided.draggableProps}
      >
        <Title {...provided.dragHandleProps}>{column.title}</Title>
        <Droppable
          droppableId={column.id}
          isDropDisabled={isDropDisabled || column.disabled}
          type={column.type}
        >
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
    )}
  </Draggable>
)
