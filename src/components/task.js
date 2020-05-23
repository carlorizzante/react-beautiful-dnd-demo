import React from 'react'
import { Box, Flex } from 'rebass'
import { css } from '@emotion/core'
import { Draggable } from 'react-beautiful-dnd'

const Container = React.forwardRef(({ children, isDragging, isDragDisabled, ...rest }, ref) => (
  <Flex
    ref={ref}
    css={css`
      margin-right: 8px;
      padding: 8px;
      width: 75px;
      height: 75px;
      justify-content: center;
      align-items: center;
      border: 5px solid ${isDragging ? 'red' : 'lightgrey'};
      border-radius: 50%;
      background-color: ${isDragging ? 'lightcyan' : 'white'};
      background-color: ${isDragDisabled ? 'lightgray' : 'white'};
      transition: background-color 0.3s;

      &:focus {
        outline: none;
        border-color: red;
      }
    `}
    {...rest}
  >
    {children}
  </Flex>
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
        {content[0]} {isDragDisabled ? '(disabled)' : null}
      </Container>
    )}
  </Draggable>
)
