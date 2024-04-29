import React from 'react';
import fotoPerfil from '../assets/foto_perfil.jpg';

function Pessoas(props) {
    const infos = [
        {
            nome: 'Domynic Barros Lima',
            cidade: 'Belo Horizonte, Brasil',
            cargo: '"Estudante de Ciência da Computação"',
            foto: fotoPerfil,
            gitHub: 'https://github.com/DomynicBl',
            linkedin: 'https://www.linkedin.com/in/DomynicBl',
            instagram: 'https://www.instagram.com/domynic_bl'
        },
        {
            nome: 'Fulano de Tal',
            cidade: 'Cidade, País',
            cargo: 'Cargo',
            foto: './assets/foto_perfil.jpg',
            gitHub: '',
        }
    ];

    const pessoa = infos.find(pessoa => pessoa.nome === props.nome);

    if (!pessoa) {
        return <div>Não foi encontrada nenhuma informação para esta pessoa.</div>;
    }

    return (
        <div className={props.className}>
            <img src={pessoa.foto} alt="Foto de Perfil" width="" height="" />
            <h1>{pessoa.nome}</h1>
            <p className="cidade">{pessoa.cidade}</p>
            <p>{pessoa.cargo}</p>
            <a href={pessoa.gitHub} title="GitHub" target="_blank">GitHub</a>
            <a href={pessoa.linkedin} title="Linkedin" target="_blank">Linkedin</a>
            <a href={pessoa.instagram} title="Instagram" target="_blank">Instagram</a>
        </div>
    );
}

export default Pessoas;
