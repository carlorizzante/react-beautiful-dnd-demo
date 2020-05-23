import React from 'react'
import { Box } from 'rebass'
import { css } from '@emotion/core'
import { Draggable } from 'react-beautiful-dnd'

const Container = React.forwardRef(({ children, ...rest }, ref) => (
  <Box
    ref={ref}
    css={css`
      padding: 8px;
      border: 1px solid lightgrey;
      border-radius: 3px;
      background-color: white;
      margin-bottom: 8px;
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
    {provided => (
      <Container
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        {content}
      </Container>
    )}
  </Draggable>
)
