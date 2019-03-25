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
                    <Typography variant="body1" gutterBottom>
                        该软件的开源地址：https://github.com/langyo/circult_emulator
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        这是一个用于初中物理教学的表面看起来很简单的软件，能做到基础的电路模拟。
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        这是一个参赛软件，所以在比赛结束前该软件的开源协议将保持 Unlicense，禁止任何人在该软件改变开源协议前使用所有的软件源代码及其附属资源。
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        请注意，该软件不能媲美某些已在行业中十分成熟的重量级电路设计环境。如果您的用途不是用于简单电路的教学，请不要对该软件抱有太大厚望。
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