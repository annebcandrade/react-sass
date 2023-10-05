import { AiFillPhone, AiOutlineMail} from "react-icons/ai"

import '../styles/components/informationcontainer.sass';

const InformationContainer= () => {
    return <section id="information">

        <div className="info-card">
            <div>
                <h3>Telefone</h3>
                <p>(83)9 9612-9629</p>
            </div>
        </div>

        <div className="info-card">
            <div>
                <h3>E-mail</h3>
                <p>euannebeatrizcm@gmail.com</p>
            </div>
        </div>

        

    </section>
    
}

export default InformationContainer