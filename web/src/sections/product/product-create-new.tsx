import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, InputLabel, MenuItem, TextField, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Image } from '@mui/icons-material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface Props {
  openModalCreate: boolean,
  handleToggleNewProducts: () => void
}
export const ModalCreateProduct: React.FC<Props> = ({ openModalCreate, handleToggleNewProducts }) => {
  const [image, setImage] = React.useState('');

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <React.Fragment>

      <BootstrapDialog
        onClose={handleToggleNewProducts}
        aria-labelledby="customized-dialog-title"
        open={openModalCreate}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add Product
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleToggleNewProducts}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <TextField
            size='small'
            fullWidth
            label="Product Name"
            sx={{ mb: 2 }}
          />
          <TextField
            size='small'
            fullWidth
            label="price"
            type='number'
            sx={{ mb: 2 }}

          />

          {!image && (
            <Box>
              <InputLabel>Image</InputLabel>

              <Button variant="contained" component="label" size='small' sx={{ mb: 2 }}>
                <AddIcon />
                <input
                  type="file"
                  hidden
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleImage(e)}
                />
              </Button>
            </Box>
          )}

          {image && <Box >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <InputLabel>Image</InputLabel>
              <Tooltip title="Remove image" onClick={() => setImage('')} sx={{ cursor: 'pointer' }}>
                <CancelPresentationIcon color='error' />

              </Tooltip>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={image} alt="preview" style={{ width: '200px', marginBottom: '20px', borderRadius: '10px' }} /></Box>

          </Box>


          }

          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              select
              size='small'
              label="Category"
              defaultValue={'Chinh'}
              fullWidth
            >
              <MenuItem value={'Chinh'} >Chinh </MenuItem>
              <MenuItem value={'song'}>Song </MenuItem>
            </TextField>

            <TextField
              select
              size='small'
              label="Main Ingredient"
              defaultValue={'Chinh'}
              fullWidth

            >
              <MenuItem value={'Chinh'} >Chinh </MenuItem>
              <MenuItem value={'song'}>Song </MenuItem>
            </TextField>
          </Box>


        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleToggleNewProducts}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}