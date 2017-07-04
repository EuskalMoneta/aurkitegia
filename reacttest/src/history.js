/*
 * Sollution trouver pour le bouton de retour à la page d'accueil graçe à cette page
 * https://stackoverflow.com/questions/42672842/how-to-get-history-on-react-router-v4
 * qui permet de naviguer par la suite en faisant ça:
 * history.push('/go-here')
 * 
 */
import { createBrowserHistory } from 'history';

export default createBrowserHistory({
  /* pass a configuration object here if needed */
})
