import React from 'react'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="inner">
                <div className="flex">
                    <div className="copyright">
                    Desenvolvido por Arthur Rebonato para a Disciplina de Tópicos especiais em programação | IMED
                    </div>
                    <div className="copyright">
                    Email para contato: arthur.rebonato@hotmail.com
                    </div>
                    <ul className="icons">
                        <li><p className="icon fa-facebook"><span className="label">Facebook</span></p></li>
                        <li><p className="icon fa-twitter"><span className="label">Twitter</span></p></li>
                        <li><p className="icon fa-linkedin"><span className="label">linkedIn</span></p></li>
                        <li><p className="icon fa-pinterest-p"><span className="label">Pinterest</span></p></li>
                        <li><p className="icon fa-vimeo"><span className="label">Vimeo</span></p></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
