import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

class AboutDialog extends React.Component {
    render() {
        return (
            <Dialog
                onClose={this.props.onClose}
                aria-labelledby="customized-dialog-title"
                open={this.props.open}
            >
                <DialogTitle id="customized-dialog-title" onClose={this.onClose}>
                    关于
                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        该软件的开源地址：https://github.com/langyo/circult_emulator
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="primary">
                        关闭
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

AboutDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func
}

export default AboutDialog;