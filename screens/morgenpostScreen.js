
import DataService from '../services/DataService';
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

function MorgenpostScreen({ navigation }) {
  const globalUID = useContext(AuthContext);

  return (
    DataService.getMorningMail(globalUID.user.username)
    //DataService.getMorningMail('16865045')
  );
}
export default MorgenpostScreen;