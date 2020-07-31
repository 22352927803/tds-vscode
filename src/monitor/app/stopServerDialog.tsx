import * as React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import {
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { i18n } from "../helper";

export interface StopServerDialogProps {
  open: boolean;
  onClose: (confirmed: boolean, killNow: boolean) => void;
}

export default function StopServerDialog(props: StopServerDialogProps) {
  const { onClose, open } = props;

  const handleClose = (event: {}, reason: string, args?: any) => {
    onClose(reason === "OK", args);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      scroll="paper"
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>Confirm the server stop?</DialogTitle>
      <DialogContent dividers={true}>
        <DialogContentText tabIndex={-1}>
          <Alert severity="error">
            <Typography>{i18n._localize("WARN_ALL_CONNECTIONS_CLOSE_1",
            "When confirming the server stop, all connections (including this) will be closed, as well as other processes.")}
            </Typography>
            <Typography><strong>{i18n._localize("WARN_ALL_CONNECTIONS_CLOSE_2",
            "Restarting will only be possible by physically accessing the server.")}</strong>
            </Typography>
          </Alert>
        </DialogContentText>
        <DialogActions>
          <Button
            onClick={event => {
              handleClose(event, "ok");
            }}
          >
            {i18n._localize("OK", "OK")}
          </Button>
          <Button
            onClick={() => {
              handleClose(event, "cancel");
            }}
          >
            {i18n._localize("CANCEL", "Cancel")}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}