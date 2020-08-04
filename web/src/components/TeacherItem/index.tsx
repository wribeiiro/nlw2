import React from 'react';
import whastappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/20648572?s=460&u=e45c5b7becdb8d7bb95199d059fa0d594894b859&v=4"
                    alt="Lucas Ribeiro" />
                <div>
                    <strong>Wellisson Ribeiro</strong>
                    <span>PHP</span>
                </div>
            </header>
            
            <p>Entusiasta da stack PHP.<br /><br />Apaixonado por esta linguagem, mas disposto a ensinar outras linguagens e stacks disponíveis no mercado. </p>

            <footer>
                <p>Preço/hora <strong>R$102,00</strong> </p>
                <button>
                    <img src={whastappIcon} alt="whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;