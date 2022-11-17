import { CloseTwoTone } from "@mui/icons-material";
import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import { Component, ReactNode } from "react";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white",
    boxShadow: 24,
    p: 4,
};

type ModalProps = {
    open: boolean;
    closeCallback: any;
    title: string;
    content: ReactNode;
};

class CustomModal extends Component<ModalProps> {
    constructor(props: ModalProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <Modal
                open={this.props.open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack direction="row" alignItems='center' justifyContent="space-between">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {this.props.title}
                        </Typography>
                        <IconButton onClick={this.props.closeCallback}>
                            <CloseTwoTone />
                        </IconButton>
                    </Stack>
                    {this.props.content}
                </Box>
            </Modal>
        );
    }
}

export default CustomModal;
