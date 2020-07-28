import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/Img/Logo.png';
import './Menu.css'
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu(){
    return(
        <nav className='Menu'>
            <a to="/">
                <img className="Logo" src={Logo} alt="VidFlix Logo"/>
            </a>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;