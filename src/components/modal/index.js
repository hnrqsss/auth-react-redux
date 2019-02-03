import React from 'react'

import {
  Container,
  ModalWrapper,
  ModalContent,
  ModalTitle,
  Button
} from './style'

class Modal extends React.Component {
  state = {
    isOpen: this.props.show
  }
  render() {
    return (
      this.state.isOpen && (
        <Container>
          <ModalWrapper>
            <ModalTitle>
              {this.props.title}
            </ModalTitle>
            <ModalContent>
              {this.props.text}
            </ModalContent>
            <ModalContent>
              <Button onClick={() => this.setState({ isOpen: false })} >Ok</Button>
            </ModalContent>
          </ModalWrapper>
        </Container>
      )
    )
  }
}

export default Modal