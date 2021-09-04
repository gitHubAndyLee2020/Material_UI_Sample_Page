import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core'
import AppleIcon from '@material-ui/icons/Apple'
import useStyles from './styles'

let cardKeys = []

for (let i = 0; i < 10; i++) {
  cardKeys.push(i)
}

function App() {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarSection}>
            <AppleIcon fontSize="large" className={classes.appleIcon} />
            <Typography variant="h6">Apple</Typography>
          </div>
          <div className={classes.toolbarSection}>
            <Button>Store</Button>
            <Button>Log In</Button>
            <Button>Sign In</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.cardContainer}>
        <Grid container spacing={2}>
          {cardKeys.map((key) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Card>
                <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="random picture" />
                <CardContent>
                  <Typography>
                    This is an image that is selected randomly from unsplash.com. This is written long so I can see the affect of the
                    default wrap property of Typography
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <ButtonGroup className={classes.buttonGroup}>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                  </ButtonGroup>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <footer className={classes.footer}>
        <Typography paragraph>This is the footer</Typography>
        <Typography paragraph>Put something in here</Typography>
        <Button className={classes.button} color="primary" size="large" variant="contained">
          Action One
        </Button>
        <Button className={classes.button} color="secondary" size="large" variant="outlined">
          Action Two
        </Button>
      </footer>
    </>
  )
}

export default App
