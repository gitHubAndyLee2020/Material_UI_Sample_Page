import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolbarSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  appleIcon: {
    marginRight: '1rem',
  },
  buttonGroup: {
    marginBottom: '1rem',
  },
  cardContainer: {
    marginTop: '1rem',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  footer: {
    textAlign: 'center',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    marginTop: '1rem',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
}))

export default useStyles
