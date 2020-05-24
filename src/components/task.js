import React from 'react'
import { Box } from 'rebass'
import { css } from '@emotion/core'
import { Draggable } from 'react-beautiful-dnd'

const Container = React.forwardRef(({ children, isDragging, isDragDisabled, ...rest }, ref) => (
  <Box
    ref={ref}
    css={css`
      margin-bottom: 8px;
      padding: 8px;
      border: 1px solid lightgrey;
      border-radius: 3px;
      background-color: ${isDragging ? 'lightcyan' : 'white'};
      background-color: ${isDragDisabled ? 'lightgray' : 'white'};
      transition: background-color 0.3s;
    `}
    {...rest}
  >
    {children}
  </Box>
))

export const Task = ({ id, index, content, isDragDisabled }) => (
  <Draggable
    draggableId={id}
    index={index}
    isDragDisabled={isDragDisabled}
  >
    {(provided, snapshot) => (
      <Container
        isDragging={snapshot.isDragging}
        isDragDisabled={isDragDisabled}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        {content} {isDragDisabled ? '(disabled)' : null}
      </Container>
    )}
  </Draggable>
)
