import React, { useEffect, useState } from 'react';
import Search from '../Search';
import Layout from '../Layout';
import { getCountry, getCountrySuccess } from '../../store/actions/country.actions';
import { CountryState } from '../../store/reducers/country.reducer';
import { useDispatch, useSelector } from "react-redux";
import { AppState } from '../../store/reducers';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { ModeState } from '../../store/reducers/mode.reducer';

export default function Home() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === mode.mode ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.mode === mode.mode ? theme.palette.text.secondary : '#fff'
  }));

  const dispatch = useDispatch()

  const {country}  = useSelector<AppState, CountryState>(
    state => state.country
  )

  const mode = useSelector<AppState, ModeState>(
    state => state.mode
  )

  console.log(mode);
  console.log(country);

  useEffect(() => {
    dispatch(getCountry())
  }, [])

  return (
    <Layout>
      <Search />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ sm: 1, md: 4 }}>
          {/* {country.result.map((item, id) => {
            <Grid item sm={3} md={3}>
              <Item>
                  <h1>Where in the world?</h1>
              </Item>
            </Grid>
          })} */}
        </Grid>
    </Box>
    </Layout>
  )
}

