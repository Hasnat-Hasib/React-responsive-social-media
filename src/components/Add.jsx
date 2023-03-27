import {
    Avatar,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import {
    Add as AddIcon,
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
  } from "@mui/icons-material";
  import { Box } from "@mui/system";

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems:"center",
    justifyContent:"center"

  })
  
  const Add = () => {
    const [open, setOpen] = useState(false)
    return (
      <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={200} bgcolor="white" p={3} borderRadius={5}>
         Hi there
        </Box>
      </StyledModal>
      </>
    )
  }
  
  export default Add