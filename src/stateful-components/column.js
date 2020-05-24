import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Task } from '.'
import styled from '@emotion/styled'

const Container = styled('div')`
  margin: 8px;
  padding: 8px;
  border: 1px solid lightgrey;
  border-radius: 3px;

  &:not(:first-of-type) {
    margin-top: 8px;
  }
`

const Title = styled('h2')`
  margin-bottom: 8px;
`

const TaskList = styled('div')`
`

export class Column extends React.Component {
  render() {
    const {column, tasks} = this.props
    return (
      <Container>
        <Title>{column.title}</Title>
        <Droppable droppableId={column.id}>
          {provided => (
            <TaskList
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
  }
}
