import './assets/css/App.css'
import Navbar from './Components/Navbar'
import '@fontsource/fira-sans'
import '@fontsource/padauk'
import Banner from './Components/Banner.jsx'
function App () {
  return (

    <>
    <header>
    <Navbar> </Navbar>
    </header>
    <main>
      <Banner title={'Desarrolla tu creatividad'} text={'Descubre un mundo nuevo a través del arte. Explora cursos en línea de los mejores artistas y expertos.'}></Banner>
      <section className='categories'>
        <h2 className='title-categories'>Popular categories</h2>
        <ul className='list-categories-main'>
          <li>
            <img src="/img/image-categories-1.svg" alt="" />
            <strong className='title-categorie'>Pintura al Oleo</strong>
          </li>
          <li>
          <img src="/img/image-categories-2.svg" alt="" />
          <strong className='title-categorie'>Mosaicos</strong>
          </li>
          <li>
          <img src="/img/image-categories-3.svg" alt="" />
          <strong className='title-categorie'>Arte de la luz</strong>
          </li>
          <li>
          <img src="/img/image-categories-4.svg" alt="" />
          <strong className='title-categorie'>Acuarela</strong>
          </li>
          <li>
          <img src="/img/image-categories-5.svg" alt="" />
          <strong className='title-categorie'>Guitarra</strong>
          </li>
        </ul>
      </section>
      <section className='recent-articles'>
        <h3>Recent Articles</h3>
          <div className="articles">
          <article>
            <img src="/img/image-article-1.svg" alt="" />
            <p className="content-article">Cómo dibujar un rostro: 25 pasos para dominar el retrato</p>
            <small>Hace 4 días • 7 min lectura</small>
          </article>
          <article>
          <img src="/img/image-article-2.svg" alt="" />
          <p className="content-article">Técnicas de pintura al óleo: 7 consejos para principiantes</p>
          <small>Hace 5 días • 5 min lectura</small>
          </article>
          <article>
          <img src="/img/image-article-3.svg" alt="" />
          <p className="content-article">El arte de la narración: Cómo escribir un guión cinematográfico</p>
          <small>Hace 6 días • 10 min lectura</small>
          </article>
          </div>
      </section>
      <section className='more'>
        <h1 className='more-title'>Immerse yourself in the world of art</h1>
        <p className='text-more'>Discover online courses, articles, videos and more. Learn new creative skills at your own pace.</p>
        <button>Explore all free content</button>
      </section>
    </main>
    </>
  )
}

export default App
