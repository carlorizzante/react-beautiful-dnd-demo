import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from '@emotion/styled'

const Container = styled('div')`
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  background-color: white;

  &:not(:first-of-type) {
    margin-top: 8px;
  }
`

export class Task extends React.Component {
  render() {
    const { id, index, content } = this.props
    return (
      <Draggable
        draggableId={id}
        index={index}
      >
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {content}
          </Container>
        )}
      </Draggable>
    )
  }
}
