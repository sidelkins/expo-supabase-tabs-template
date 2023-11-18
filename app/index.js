import { Redirect } from 'expo-router';
import { useSession } from '../lib/AuthContext';

export default () => {
  const { session } = useSession();
  
  return(
    <Redirect href='/Home' />
    // If you'd rather dynamically route the user, use a ternery like so:
    // session ? <Redirect href='/Home' /> : <Redirect href='/Page' />
    // For example, if session is null you may wish to route the user to /Login instead of /Home
  )
}