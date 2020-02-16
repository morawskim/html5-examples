import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

export interface ConfirmOptions {
    message?: string
    catchOnCancel?: boolean;
}

interface ConfirmDialogProps extends ConfirmOptions {
    open: boolean
    onSubmit: () => void
    onCancel: () => void
}

class ConfirmDialogComponent extends Component<ConfirmDialogProps> {
    static defaultProps = {
        message: 'Are you sure?',
    };

    constructor(props: Readonly<ConfirmDialogProps>) {
        super(props);

        this.handleCancel = this.handleCancel.bind(this);
        this.handleOk = this.handleOk.bind(this);
    }

    private handleCancel() {
        this.props.onCancel();
    }

    private handleOk() {
        this.props.onSubmit();
    }

    render() {
        return (
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth="md"
                open={this.props.open}
            >
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>{this.props.message}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={this.handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleOk} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default ConfirmDialogComponent;
