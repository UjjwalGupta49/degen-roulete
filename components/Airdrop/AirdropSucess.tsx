import React, { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {Box, Alert, IconButton, Collapse} from '@mui/material'
import styles from './Styles/AirdropSucess.module.css'

export const AirdropSucessFull: FC = () => {
    const [open, setOpen] = React.useState(true);

    return (
        <div className={styles.alignAlertScuess}>
            <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Airdrop Sucessfull! 🎉
                    </Alert>
                </Collapse>
            </Box>
        </div>
    );
};
