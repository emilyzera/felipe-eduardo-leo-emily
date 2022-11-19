import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Paper, Rating, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonDefault from '../components/ButtonDefault/ButtonDefault';

const Home: React.FC = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/about');
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={6} sx={{ padding: '60px ' }}>
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
            Sua Carreira Profissional Elevada a Outro Nível
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" component="p">
            Esta academia torna, todos os dias, o meu sonho em realidade. Transforma o impossível e o tão distante
            conteúdo de qualidade internacional, em acessibilidade nacional. Além de nos acolher como se fossemos da
            família em seu suporte inacreditável. Todos os dias quando lembro, bato no peito e tenho orgulho de estudar
            nessa Academia!
          </Typography>

          <Grid sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
            <ButtonDefault label="conheça os cursos" />
            <Button variant="contained" onClick={handleClick}>
              Comece Agora
            </Button>
          </Grid>
        </Paper>
      </Grid>
      <Container disableGutters component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography component="h4" variant="h3" align="center" color="text.primary" gutterBottom>
          Benefícios dos Nossos Programas de Treinamento
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Participe de uma plataforma online totalmente profissional, social, envolvente e interativa. Obtenha a
          experiência de aprendizado que você merece.
        </Typography>
        <Grid sx={{ columns: 3, margin: 4 }}>
          <CardContent>
            <Box sx={{ flexDirection: 'column', p: 1 }}>
              <Grid>
                <Typography component="div" variant="h5">
                  Escolha uma Formação Ideal para Você
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Impulsione sua carreira, alcance resultados e destaque-se no mercado de trabalho, matricule-se agora
                  mesmo em um de nossos cursos avulsos.
                </Typography>
                <ButtonDefault label="Saiba mais" />
              </Grid>
            </Box>
          </CardContent>
          <Box sx={{ flexDirection: 'column', p: 1, margin: 4 }}>
            <Grid>
              <Typography component="div" variant="h5">
                Escolha um Curso Individual
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                O primeiro passo para uma capacitação de qualidade. Matricule-se em um dos nossos cursos gratuitos e
                conheça nossa metodologia de trabalho, nossa didática e nossa plataforma.
              </Typography>
              <ButtonDefault label="saiba mais " />
            </Grid>
          </Box>
          <Box sx={{ flexDirection: 'column', p: 1 }}>
            <Grid>
              <Typography component="div" variant="h5">
                Conheça Nossos Cursos Gratuitos
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Nosso treinamento é projetado para fornecer as habilidades em uma abordagem prática. O sucesso dos
                nossos alunos é o nosso melhor trunfo para mostrar a qualidade das nossas Formações.
              </Typography>
              <ButtonDefault label="saiba mais" />
            </Grid>
          </Box>
        </Grid>
      </Container>
      <Grid sx={{ columns: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <Card sx={{ display: 'flex', margin: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Análise Estatística Para Data Science com Linguagem Python
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    R$1499
                    <Rating name="size-small" defaultValue={3} size="small" />
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia component="img" sx={{ width: 150 }} image="./images/aa.jpg" alt="aar" />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <Card sx={{ display: 'flex', margin: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Análise de Imagens com Inteligência Artificial
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    R$1599
                    <Rating name="size-small" defaultValue={3} size="small" />
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 150 }}
                image="./images/ab.jpg"
                alt="Live from space album cover"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <Card sx={{ display: 'flex', margin: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Matemática Para Data Science
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    R$799
                    <Rating name="size-small" defaultValue={3} size="small" />
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 150 }}
                image="./images/ac.jpg"
                alt="Live from space album cover"
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <Card sx={{ display: 'flex', margin: 4 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Análise Estatíca para Data Science com linguagem R
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    R$999
                    <Rating name="size-small" defaultValue={3} size="small" />
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="./images/ad.jpg"
                alt="Live from space album cover"
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
