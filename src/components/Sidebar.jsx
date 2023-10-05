import Avatar from '../img/perfil.jpg'

import InformationContainer from './InformationContainer';
import "../styles/components/sidebar.sass";

const Sidebar = () => {
    return  <aside id="sidebar">
        <img src={Avatar} alt='perfil' srcSet=''/>
        <p className="title">Desenvolvedora Front-End </p>
        <InformationContainer />

       </aside>
    
}

export default Sidebar