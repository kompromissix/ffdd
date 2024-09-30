import { useState } from 'react'
import './App.css'
import { ways } from './data'
import mashin from './assets/about__img.png'
import logomet from './assets/Frame.png'
import logoek from './assets/Frame1.png'

function Chul(ds){
  return(
    <div className='block'>
      <div>
        <div>
          <h2>{ds.title}</h2>
          <p>{ds.text1}</p>
          <p>{ds.text2}</p>
          <p>{ds.text3}</p>
          <p>{ds.text4}</p>
          <p>{ds.text5}</p>
        </div>
        <div className='divis'>
          <h1>{ds.number}</h1>
        </div>
      </div>
    </div>
  )
}
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <main>
        <section className='background1'>
          <div>
            <div className='top1'>
              <div>
                <p>Quis et quam quam sem scelerisque odio. Diam hendrerit purus dui nisl scelerisque in pharetra molestie. Nunc leo.</p>
                <div>
                  <p>Подробнее</p>
                </div>
                <button type="button"></button>
                <button type="button"></button>
                <button type="button"></button>
              </div>
              <div className='none'></div>
              <div className='none'></div>
            </div>
            <div className='bottom1'>
              <div>
                <div className='sov'>
                  <div>
                    <p>99,995%</p>
                  </div>
                </div>
                <div>
                  <p>Nisi nulla ultrices amet cras tincidunt nec. Dolor magna.  </p>
                </div>              
              </div>
            </div>
          </div>
        </section>
        <section className='background2'>
          <div>
            <div>
              <Chul {...ways[0]}/>
              <Chul {...ways[1]}/>
              <Chul {...ways[2]}/>
            </div>
            <div>
              <Chul {...ways[3]}/>
              <Chul {...ways[4]}/>
              <Chul {...ways[5]}/>
            </div>
          </div>
        </section>
        <section className='background3'>
          <div>
            <div>
              <h1>Lectus nisi sed id dictum. Adipiscing</h1>
              <p>Commodo faucibus justo turpis id lectus ac fringilla scelerisque accumsan. Fames lectus nibh non ultrices id ut sed praesent in. Ac tristique nunc pellentesque odio. Blandit scelerisque dolor molestie egestas nunc nunc sit. Fermentum at pharetra odio risus malesuada diam laoreet eleifend vulputate. Enim molestie lorem nec ipsum nunc sit commodo non. Euismod rhoncus ut amet diam porta nisi tempus. Posuere suspendisse suscipit dolor enim. A lectus convallis quis elementum. Vitae pretium nunc venenatis felis.
              Urna orci blandit imperdiet feugiat scelerisque dui at velit ac. Sollicitudin placerat in viverra amet in praesent vestibulum. Suscipit interdum odio pellentesque diam et.</p>
              <div className='button-patch'>
                <button type="button">
                  <p>aaaddd@test.ru</p>
                </button>
                <button type="button">
                  <p>dvs@test.ru</p>
                </button>
              </div>
            </div>
            <div>
              <img src={mashin} alt="" />
            </div>
          </div>
        </section>
        <section className='background4'>
          <div>
            <h1>Vel pretium pellentesque enim morbi</h1>
            <div className='block-up'>
              <p>Et aliquam eu feugiat vel egestas semper elementum. Bibendum eget massa .</p>
            </div>
            <div className='block-bottom'>
              <div>
                <img src={logoek} alt="" />
                <p>Enim ac sagittis tempus iaculis blandit. Tellus.</p>
              </div>
              <div>
                <img src={logomet} alt="" />
                <p>Ultricies erat sagittis est dictum leo est nibh a.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='background5'>
          <h1>Новости компании</h1>
          <div>
            <div className='info'>
              <img src="" alt="" />
              <h2>Est commodo nulla pulvinar amet dictumst. Tincidunt tincidunt interdum faucibus ipsum quis eleifend amet sit. Ac sociis sodales viverra viverra.</h2>
              <p>Tincidunt et ut phasellus euismod eget diam erat ultrices. Eu tristique diam lectus platea orci sed cras. Egestas lorem tincidunt pellentesque dolor vulputate lacus platea. Varius.</p>
            </div>
            <div className='info'>
              <img src="" alt="" />
              <h2>Sapien odio eu et quis ornare. Amet ultrices mauris pellentesque aliquam et. Fermentum cursus.</h2>
              <p>Lacus ut in vel blandit lectus et fermentum et vulputate. Amet netus gravida et facilisi sit cursus lobortis pellentesque. Vestibulum a pulvinar eu proin a tincidunt.</p>
            </div>
            <div className='info'>
              <img src="" alt="" />
              <h2>Lectus sagittis non id ut eget tellus aenean. Pretium scelerisque pellentesque in lacus ultrices mauris tempor. Est cursus laoreet in dictumst arcu.</h2>
              <p>Vestibulum id pulvinar enim molestie erat suscipit montes hendrerit. Integer ac egestas tempor nisl. Vel vitae quam nisi egestas tincidunt facilisi non faucibus. Mi sed et id.</p>
            </div>
          </div>
          <button type="button">
            <p>Все новости</p>
          </button>
        </section>
      </main>
    </>
  )
}

export default App
