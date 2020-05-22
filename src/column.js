import React from 'react'
import { Box } from 'rebass'
import { css } from '@emotion/core'
import { Task } from './task'

export const ColumnWrapper = ({ children, ...rest }) => (
  <Box
    css={css`
      margin: 8px;
      border: 1px solid lightgrey;
      border-radius: 3px;
    `}
    {...rest}
  >
    {children}
  </Box>
)

export const ColumnTitle = ({ children, ...rest }) => (
  <Box
    css={css`
      padding: 8px;
    `}
    {...rest}
  >
    {children}
  </Box>
)

export const TaskList = ({ children, ...rest }) => (
  <Box
    css={css`
      padding: 8px;
    `}
    {...rest}
  >
    {children}
  </Box>
)

export const Column = ({ column, tasks }) => (
  <ColumnWrapper>
    <ColumnTitle>{column.title}</ColumnTitle>
    <TaskList>
      {tasks.map(task => <Task key={task.id} {...task}/>)}
    </TaskList>
  </ColumnWrapper>
)
