import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'

interface EmptyCartAlertProps {
    open: boolean
    setOpen: Function
}

const EmptyCartAlert: FC<EmptyCartAlertProps> = ({ open, setOpen }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                <Alert
                    action={
                        <img
                            src="https://i.ibb.co/K7t92ng/close-1.png"
                            alt="close"
                            className="cart-empty-close"
                            onClick={() => setOpen(false)}
                        />
                    }
                    severity="warning"
                >
                    Your cart is currently empty.
                </Alert>
            </Collapse>
        </Box>
    )
}

export default EmptyCartAlert
