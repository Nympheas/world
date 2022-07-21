import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BedtimeIcon from '@mui/icons-material/Bedtime';

export default function Header() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === mode ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.mode === mode ? theme.palette.text.secondary : '#fff'
      }));

    const [mode, setMode] = React.useState('dark');

    const changeMode = () => {
        if (mode == 'dark') {
            setMode('white');
        } else {
            setMode('dark');
        }
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ sm: 2, md: 2 }}>
        <Grid item sm={6} md={6}>
            <Item>
                <h1>Where in the world?</h1>
            </Item>
        </Grid>
        <Grid item sm={6} md={6}>
            <Item>
                <Button onClick={changeMode()}><BedtimeIcon color={'primary'}/>Dark Mode</Button>
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
