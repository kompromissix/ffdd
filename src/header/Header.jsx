import '../css/style.css'
import logo from '../assets/logo.png'
import img1 from '../assets/Frame38.png'
function Header() {
    return (
      <>
        <header>
            <nav>
                <div className='top'>
                    <img src={logo} alt="" />
                    <div className='left'>
                        <input type="text" placeholder="Быстрый поиск по сайту"/>
                        <img src={img1} al  t="" />
                    </div>
                    <div className='right'>
                        <p>Ru</p>
                        <p>En</p>
                    </div>
                </div>
                <div className='bottom'>
                    <div>
                        <p>О компании</p>
                        <p>Деятельность</p>
                        <p>Персонал</p>
                        <p>Клиенту</p>
                        <p>Акционеру и инвестору</p>
                        <p>Пресс-центр</p>
                        <p>Торги</p>
                        <p>Контакты</p>
                    </div>
                </div>
            </nav>
        </header>
      </>
    )
}

export default Header