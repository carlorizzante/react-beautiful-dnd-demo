import React from 'react'
import { Box } from 'rebass'
import { css } from '@emotion/core'

export const TaskWrapper = ({ children, ...rest }) => (
  <Box
    css={css`
      padding: 8px;
      border: 1px solid lightgrey;
      border-radius: 3px;

      &:not(:first-of-type) {
        margin-top: 8px;
      }
    `}
    {...rest}
  >
    {children}
  </Box>
)

export const Task = ({ id, content }) => (
  <TaskWrapper>{content}</TaskWrapper>
)
