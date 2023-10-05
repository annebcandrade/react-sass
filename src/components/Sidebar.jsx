import Avatar from '../img/perfil.jpg'

import "../styles/components/Sidebar.sass";
import InformationContainer from './InformationContainer';

const Sidebar = () => {
    return  <aside id="sidebar">
        <img src={Avatar} alt='perfil' srcSet=''/>
        <p className="title">Desenvolvedora Front-End </p>
        <InformationContainer />

       </aside>
    
}

export default Sidebar