import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';
import './styles.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ListItem = ({name}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  return (
    <div className="Item-container">
      <div className='Button-container'>
        <div className="Item-field">
        <Button onClick={handleOpen} variant="contained">Café</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Café da Manhã
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Aqui vai uma tabela sobre o café da manhã
            </Typography>
          </Box>
        </Modal>
        </div>
        <div className="Item-field">
        <Button onClick={handleOpen2} variant="contained">Almoço</Button>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title2"
          aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title2" variant="h6" component="h2">
              Almoço
            </Typography>
            <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
            1 - Carne cozida<br></br>
              2 - Fricassê de carne<br></br>
              3 - Soja<br></br>
              4 - Pirão<br></br>
              5 - Alcega<br></br>
              5 - Abóbora<br></br>
              <br></br>
              Vegetariano
              <br></br>
              1 - Lentilha<br></br>
              2 - Arroz integral<br></br>
              3 - Fricassê de soja<br></br>
              <br></br>
              Sucos
              <br></br>
              1 - Frutas<br></br>
            </Typography>
          </Box>
          </Modal>
        </div>
        <div className="Item-field">
        <Button onClick={handleOpen3} variant="contained">Jantar</Button>
        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title3"
          aria-describedby="modal-modal-description3"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title3" variant="h6" component="h2">
              Jantar
            </Typography>
            <Typography id="modal-modal-description3" sx={{ mt: 2 }}>
              Aqui vai uma tabela sobre o jantar
            </Typography>
          </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ListItem;