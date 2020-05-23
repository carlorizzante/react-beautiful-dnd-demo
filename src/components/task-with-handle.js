import React from 'react'
import { Flex } from 'rebass'
import { css } from '@emotion/core'
import { Draggable } from 'react-beautiful-dnd'
import styled from '@emotion/styled'

const Container = React.forwardRef(({ children, isDragging, ...rest }, ref) => (
  <Flex
    ref={ref}
    css={css`
      margin-bottom: 8px;
      padding: 8px;
      border: 1px solid lightgrey;
      border-radius: 3px;
      background-color: ${isDragging ? 'lightcyan' : 'white'};
      transition: background-color 0.3s;

      & > *:first-of-type {
        margin-right: 10px;
      }
    `}
    {...rest}
  >
    {children}
  </Flex>
))

const Handle = styled('div')`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
`

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
      >
        <Handle {...provided.dragHandleProps}/>
        {content}
      </Container>
    )}
  </Draggable>
)
