import "./index.scss";

const Header = () => {
    return (
        <section className="header">
            <ul className="header__itens">
                <li><a href="">Organização</a></li>
                <li className="header__itens__tasks"><a href="">Tarefas</a></li>
            </ul>
        </section>
    )
};

export default Header;
