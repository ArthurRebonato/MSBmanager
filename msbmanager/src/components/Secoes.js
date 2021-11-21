import React from 'react';
import react from '../images/react-router.png';
import materialui from '../images/material-ui.png';
import firebase from '../images/firebase.png';
import emotion from '../images/emotion.png';

export default function Secoes() {
    return (
        <div>
			<section id="three" className="wrapper special">
				<div className="inner">
					<header className="align-center">
						<h1>Bibliotecas utilizadas</h1>
					</header>
					<div className="flex flex-2">
						<article>
							<div className="image fit">
								<img src={react} alt="Imagem logo React Router" />
							</div>
							<header>
								<h3>React Router</h3>
							</header>
							<p>O React Router é uma lib completa para controle de rotas que permite que você consiga 
								configurar as rotas utilizando o formato JSX e também disponibiliza uma API para você 
								configurar diretamente via Javascript.</p>
							<footer>
								<a href="https://reactrouter.com/" target='_blank' rel="noopener noreferrer" className="button special">Veja mais</a>
							</footer>
						</article>
						<article>
							<div className="image fit">
								<img src={materialui} alt="Imagem logo Axios" />
							</div>
							<header>
								<h3>Material-UI</h3>
							</header>
							<p>O MUI fornece uma biblioteca robusta, personalizável e acessível de componentes básicos e 
								avançados, permitindo que você construa seu próprio sistema de design e desenvolva 
								aplicativos React com mais rapidez.</p>
							<footer>
								<a href="https://mui.com/pt/" target='_blank' rel="noopener noreferrer" className="button special">Veja mais</a>
							</footer>
						</article>
						<article>
							<div className="image fit">
								<img src={firebase} alt="Pic 01" />
							</div>
							<header>
								<h3>Firebase</h3>
							</header>
							<p>O Firebase de Google é uma plataforma digital utilizada para facilitar o desenvolvimento 
								de aplicativos web ou móveis, de uma forma efetiva, rápida e simples. Graças às suas 
								diversas funções, é utilizado com a finalidade de aumentar a base de usuários e gerar maiores benefícios econômicos.</p>
							<footer>
								<a href="https://firebase.google.com/?hl=pt" target='_blank' rel="noopener noreferrer" className="button special">Veja mais</a>
							</footer>
						</article>
						<article>
							<div className="image fit">
								<img src={emotion} alt="Pic 01" />
							</div>
							<header>
								<h3>Emotion</h3>
							</header>
							<p>Emotion é uma biblioteca projetada para escrever estilos CSS com JavaScript. Ele fornece 
								uma composição de estilo poderosa e previsível, além de uma ótima experiência de 
								desenvolvedor com recursos como mapas de origem, rótulos e utilitários de teste.</p>
							<footer>
								<a href="https://emotion.sh/docs/introduction" target='_blank' rel="noopener noreferrer" className="button special">Veja mais</a>
							</footer>
						</article>
					</div>
				</div>
			</section>
        </div>
    )
}
