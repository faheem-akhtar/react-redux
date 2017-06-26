import styled from 'styled-components'

export default styled.div`
  ${props => props.border && `
    border-bottom: 1px solid ${props.theme.colors.borderColor()}
  `}
`
