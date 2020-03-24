import React from "react";
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export const WarningModal = (props) => (
    <Modal open={props.showWarning} basic size='small'>
        <Header icon='archive' content='Please fill out all fields before submitting.' />
        <Modal.Actions>
            <Button basic color='red' inverted onClick={props.onOk}>
                <Icon name='remove' /> Ok
      </Button>
        </Modal.Actions>
    </Modal>
)
