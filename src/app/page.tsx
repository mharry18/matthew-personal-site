import Image from 'next/image';
import styles from './page.module.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import { Navbar } from '@/navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Container sx={{ backgroundColor: 'white', border: '1px dashed grey' }}> */}
      <Grid
        container
        spacing={2}
        minHeight={160}
        sx={{
          backgroundColor: '#eeeeee',
          border: 'solid',
          borderRadius: '10px',
        }}
      >
        <Grid md={5}>
          <Navbar />
        </Grid>
        <Grid
          xs={12}
          md={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <h2>Matthew Harry</h2>
        </Grid>
        <Grid
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ paddingTop: '2rem' }}
        >
          <Avatar
            src="https://media.licdn.com/dms/image/C4D03AQHhSsaebWFyig/profile-displayphoto-shrink_200_200/0/1622314022456?e=1709164800&v=beta&t=sFYB53cVl9evEetPIjttdOpgheePWNQrP7uGhVn0lUA"
            sx={{ width: 125, height: 125 }}
          ></Avatar>
        </Grid>
        <Grid xs={12} md={8}></Grid>
        <Grid
          xs={12}
          md={4}
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <a href="https://github.com/mharry18" target="_blank">
            Github
          </a>
          <span>&#183;</span>
          <a>Résumé</a>
          <span>&#183;</span>
          <a>LinkedIn</a>
        </Grid>
        {/* <Grid xs={12} display="flex" justifyContent="center">
          <p>Welcome to my personal site!</p>
        </Grid> */}
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: '2rem' }}
        >
          <h2>Bio</h2>
        </Grid>
        <Grid xs={1}></Grid>
        <Grid
          xs={10}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={{ marginTop: '2rem' }}
        >
          <p>
            My name is Matthew and on this site you will find information about
            my skills and my portfolio.
          </p>
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
      {/* </Container> */}

      {/* <iframe
          title="Nashville Weather History"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/reportEmbed?reportId=99fc1349-0884-480f-ae99-65be72b069f6&autoAuth=true&ctid=24ef912a-7cf7-459f-b841-4b187d7ee4c5"
          frameborder="0"
          allowFullScreen={true}
        ></iframe> */}
    </main>
  );
}
