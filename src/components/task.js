import React from 'react'
import { Box } from 'rebass'
import { css } from '@emotion/core'
import { Draggable } from 'react-beautiful-dnd'

const Container = React.forwardRef(({ children, isDragging, ...rest }, ref) => (
  <Box
    ref={ref}
    css={css`
      margin-bottom: 8px;
      padding: 8px;
      border: 1px solid lightgrey;
      border-radius: 3px;
      background-color: ${isDragging ? 'lightcyan' : 'white'};
      transition: background-color 0.3s;
    `}
    {...rest}
  >
    {children}
  </Box>
))

export const Task = ({ id, index, content }) => (
  <Draggable
    draggableId={id}
    index={index}
  >
    {(provided, snapshot) => (
      <Container
        isDragging={snapshot.isDragging}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        {content}
      </Container>
    )}
  </Draggable>
)
