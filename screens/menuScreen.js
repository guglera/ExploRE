  import DataService from '../services/DataService';
  import { useContext } from 'react';
  import { AuthContext } from '../contexts/authContext';
  
  function MenuScreen({ navigation }) {
    const globalUID = useContext(AuthContext);
  
    return (
      DataService.getMenu(globalUID.user.username)
    );
  }
  export default MenuScreen;