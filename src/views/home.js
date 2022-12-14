import React from 'react'

import { Helmet } from 'react-helmet'

import TestimonialCard2 from '../components/testimonial-card2'
import TestimonialCard4 from '../components/testimonial-card4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Nexst Build</title>
        <meta property="og:title" content="Nexst Build" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <div className="home-container01">
          <span className="home-text">Nexst Build</span>
          <span className="home-text01">O que vamos criar agora?</span>
        </div>
        <div className="home-btn-group">
          <a
            href="https://calendly.com/rafaelbusiness/30min"
            id="chat-vendas"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link button"
          >
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z"></path>
            </svg>
            <span className="home-text02">
              <span>Comercial</span>
            </span>
          </a>
        </div>
        <div data-type="BurgerMenu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon02">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-type="MobileMenu" className="home-mobile-menu">
          <nav className="home-nav">
            <div className="home-container02">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-image"
              />
              <div
                data-type="CloseMobileMenu"
                className="home-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
          </nav>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon06">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon10">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-texto-principal">
          <h1 className="home-cabealho-principal">
            WordPress para Empresas &amp; Ag??ncias Digitais
          </h1>
        </div>
        <div className="home-ilustrao">
          <img
            alt="image"
            src="/playground_assets/innovation_nexst.svg"
            className="home-image1"
          />
        </div>
      </div>
      <div id="funcionamento" className="home-funcionamento">
        <div className="home-container03">
          <h2 className="home-text04">
            <span>Possibilidades</span>
          </h2>
        </div>
      </div>
      <div className="home-passos">
        <div className="home-two">
          <svg viewBox="0 0 1024 1024" className="home-icon12">
            <path d="M512 0c-278.748 0-505.458 222.762-511.848 499.974 5.92-241.864 189.832-435.974 415.848-435.974 229.75 0 416 200.576 416 448 0 53.020 42.98 96 96 96s96-42.98 96-96c0-282.77-229.23-512-512-512zM512 1024c278.748 0 505.458-222.762 511.848-499.974-5.92 241.864-189.832 435.974-415.848 435.974-229.75 0-416-200.576-416-448 0-53.020-42.98-96-96-96s-96 42.98-96 96c0 282.77 229.23 512 512 512z"></path>
          </svg>
          <h3 className="home-text06">Nexst Market</h3>
          <span className="home-text07">
            <span>
              N??s podemos desenvolver seus plugins e temas na categoria
              &quot;comercializ??veis&quot;, que ser??o vendidos depois em nossa
              plataforma de marketplace.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="home-text09">
            <span>Receba at?? 150% do seu investimento de volta</span>
          </span>
          <svg viewBox="0 0 1024 1024" className="home-icon14">
            <path d="M832 64h-640l-192 192v672c0 17.674 14.326 32 32 32h960c17.672 0 32-14.326 32-32v-672l-192-192zM512 832l-320-256h192v-192h256v192h192l-320 256zM154.51 192l64-64h586.978l64 64h-714.978z"></path>
          </svg>
          <h3 className="home-text11">One Click Install</h3>
          <span className="home-text12">
            Chega de ficar instalando sempre os mesmos plugins, temas e
            configura????es. Isso ?? cansativo!
          </span>
          <span className="home-text13">
            Salve os temas e plugins mais utilizados em pacotes pr?? formatados e
            aproveite para criar outros sites, com base no modelo, em minutos.
            Economize!
          </span>
        </div>
        <div className="home-three">
          <svg viewBox="0 0 1024 1024" className="home-icon16">
            <path d="M945.75 368.042l-448-298.666c-10.748-7.166-24.752-7.166-35.5 0l-448 298.666c-8.902 5.934-14.25 15.926-14.25 26.624v298.666c0 10.7 5.348 20.692 14.25 26.624l448 298.666c5.374 3.584 11.562 5.376 17.75 5.376s12.376-1.792 17.75-5.376l448-298.666c8.902-5.934 14.25-15.926 14.25-26.624v-298.666c0-10.698-5.348-20.69-14.25-26.624zM480 654.876l-166.312-110.876 166.312-110.874 166.312 110.874-166.312 110.876zM512 377.542v-221.75l358.31 238.876-166.31 110.874-192-128zM448 377.542l-192 128-166.312-110.874 358.312-238.876v221.75zM198.312 544l-134.312 89.542v-179.082l134.312 89.54zM256 582.458l192 128v221.748l-358.312-238.872 166.312-110.876zM512 710.458l192-128 166.312 110.876-358.312 238.874v-221.75zM761.688 544l134.312-89.54v179.084l-134.312-89.544z"></path>
          </svg>
          <h3 className="home-text14">Rapidez, escalabilidade e recursos</h3>
          <span className="home-text15">
            Eleve sua equipe de devs. a outro patamar com os recursos de
            desenvolvimento escal??vel da Nexst Build. Aqui n??s te entregamos
            sempre 3 instala????es configuradas para: desenvolvimento (Docker com
            at?? 1.000 portas dispon??veis e in??meras imagens WP pr?? formatadas),
            homologa????o (com o sistema &quot;Dolly&quot;, que copia os dados de
            produ????o em segundos e mant??m tudo sincronizado) e produ????o (o
            m??ximo de performance com FastCGI, OPCache e WPCache).
          </span>
          <span className="home-text16">
            Hospedagem Amazon AWS Brasil, com performance otimizada para
            computa????o de alto n??vel. Linux, Nginx, OPCache, PHP 7.4 / 8.0+,
            Plesk / Open Lite Speed, Docker, Composer, WordPress (vers??es),
            Node.js (nvm, npm, yarn) etc.
          </span>
          <div className="home-container04">
            <div className="home-container05">
              <h3 className="home-text17">
                Converse com o nosso time comercial e tire suas d??vidas
              </h3>
              <a
                href="https://calendly.com/rafaelbusiness/30min"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1 button"
              >
                <span>
                  <span>Chat</span>
                  <span></span>
                </span>
              </a>
            </div>
            <img
              alt="image"
              src="/playground_assets/customer_service_nexst.svg"
              className="home-image2"
            />
          </div>
        </div>
      </div>
      <div className="home-stats">
        <div className="home-stat">
          <b className="home-text21">
            <span>78+</span>
          </b>
          <span className="home-text23">Clientes Satisfeitos</span>
          <span className="home-text24">
            Nosso trabalho ?? recompensado quando um de nossos clientes entra em
            contato para agradecer.
          </span>
        </div>
        <div className="home-stat1">
          <b className="home-text25">360+</b>
          <span className="home-text26">Projetos Entregues</span>
          <span className="home-text27">
            Foram centenas de Sites, Plugins, Temas e integra????es desenvolvidos
            ao longo de 10 anos de atua????o.
          </span>
        </div>
        <div className="home-stat2">
          <b className="home-text28">
            <span>10+</span>
          </b>
          <span className="home-text30">Anos no Mercado</span>
          <span className="home-text31">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="home-stat3">
          <b className="home-text32">
            <span>24/7</span>
          </b>
          <span className="home-text34">Support</span>
          <span className="home-text35">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
      </div>
      <div className="home-testimonial">
        <div className="home-container06">
          <div className="home-container07">
            <div className="home-container08">
              <TestimonialCard2
                profile_src="https://images.unsplash.com/photo-1614630982169-e89202c5e045?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUyMTk4&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName1"
              ></TestimonialCard2>
            </div>
          </div>
          <div className="home-container09">
            <TestimonialCard4
              picture_src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
              profile_src="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></TestimonialCard4>
          </div>
        </div>
      </div>
      <div className="home-container10">
        <div className="home-container11">
          <h2 className="home-text36">
            <span>V??deo Cases</span>
          </h2>
          <span className="home-text38">
            <span>Nossos projetos entregues que fizeram mais sucesso</span>
            <br></br>
            <span>
              e renderam mais elogios. Apresenta????o: Rafael dos Santos
            </span>
          </span>
        </div>
      </div>
      <div className="home-container12">
        <div className="home-container13">
          <img
            alt="image"
            src="/playground_assets/video_cases_nexst.svg"
            className="home-image3"
          />
        </div>
        <div className="home-container14">
          <iframe
            src="https://www.youtube.com/embed/b0S56Z9FiCM"
            className="home-iframe"
          ></iframe>
          <a
            href="https://www.youtube.com/channel/UC_3CLd9lH3nf9uLiF0gnPBg"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link2"
          >
            <svg viewBox="0 0 2569 1024" className="home-icon18">
              <path d="M344.012 169.399c0.209-0.865 0.344-1.479 0.388-1.8l1.042-7.559-47.349-0.267c-42.779-0.242-55.87 0.007-57.047 1.084-0.565 0.516-15.333 56.633-41.655 158.273-12.556 48.484-23.124 87.206-23.487 86.051s-15.391-56.498-33.397-122.98c-18.006-66.482-33.104-121.243-33.55-121.692-0.623-0.623-57.98-0.9-104.417-0.502-6.735 0.056-10.477-13.11 60.021 211.133 9.759 31.041 24.371 74.997 32.469 97.679 9.333 26.141 15.989 46.323 20.534 63.173 8.038 32.067 8.319 52.163 6.565 75.625-2.026 27.101-2.321 218.438-0.342 221.638 1.512 2.449 91.223 3.589 99.712 1.268 1.358-0.372 2.265-1.691 2.87-8.928 2.119-6.219 2.286-30.969 2.286-133.744v-131.281l5.742-18.112c3.756-11.849 13.201-42.995 20.989-69.22 7.789-26.222 17.21-57.619 20.938-69.771 33.834-110.319 66.14-218.831 66.994-225.011l0.693-5.056z"></path>
              <path d="M846.122 328.651l-0.021 6.838-1.065 0.014-0.595 188.993-0.577 183.227-14.666 14.929c-16.424 16.719-29.585 23.101-41.488 20.113-12.963-3.254-12.64 1.8-13.722-214.768l-0.998-199.347h-94.316v6.851h-1.086v216.289c0 231.737-0.007 231.599 11.752 254.875 9.366 18.536 23.010 27.559 46.391 30.671h0.002c30.79 4.1 64.001-9.849 94.77-39.809l13.373-13.022v22.445c0 19.396 0.554 22.601 4.070 23.58 5.756 1.605 77.173 1.707 84.89 0.126l6.396-1.314v-6.628l1.086-0.223v-495.098l-94.195 1.258z"></path>
              <path d="M606.892 426.33c-8.935-38.341-25.68-64.115-53.233-81.939-43.281-27.999-92.718-30.957-138.586-8.291-33.425 16.515-54.951 43.914-66.071 84.083-1.326 4.786-2.298 8.812-3.033 14.815-2.83 14.184-3.163 35.351-3.889 133.951-1.121 151.928 0.616 170.003 19.643 204.51 18.664 33.848 57.403 58.661 99.572 63.782 12.696 1.54 38.43-0.858 53.23-4.961 33.632-9.326 65.864-35.906 80.118-66.078 6.158-13.033 9.875-22.096 12.115-38.651 4.175-22.617 4.47-59.175 4.47-152.375-0.002-118.875-0.379-131.862-4.337-148.847zM499.34 736.003c-7.907 6.028-21.734 8.649-32.983 6.249-8.656-1.847-20.338-15.419-23.934-27.801-4.479-15.436-4.823-229.985-0.954-272.059 6.379-21.054 24.19-32.050 43.635-26.813 15.157 4.082 22.915 13.575 27.336 33.457 3.282 14.754 3.67 33.129 2.972 141.26-0.46 71.701-0.716 106.742-3.058 125.553-2.382 11.87-6.319 15.047-13.015 20.154z"></path>
              <path d="M2300.389 534.137h45.57l-0.726-41.281c-0.705-37.869-1.263-42.2-6.324-52.472-7.982-16.21-19.759-23.401-38.446-23.401-22.448 0-36.678 10.849-43.388 33.141-2.858 9.486-5.863 74.685-3.707 80.308 1.205 3.144 7.724 3.705 47.021 3.705z"></path>
              <path d="M1995.795 440.237c-6.077-12.247-17.385-18.278-30.525-17.806-10.221 0.365-21.561 4.677-32.488 13.010l-8.14 6.177v296.598l8.14 6.177c18.429 14.052 38.674 17.031 52.619 7.703 5.519-3.691 9.117-8.779 11.919-16.861 3.647-10.524 3.965-24.003 3.489-148.772-0.495-130.043-0.781-137.702-5.014-146.226z"></path>
              <path d="M2560.878 306.633c-9.080-108.842-16.303-144.165-38.751-189.544-29.729-60.101-72.692-91.788-133.876-98.747-47.309-5.379-225.315-12.97-390.044-16.631-285.188-6.338-754.057 5.858-813.939 21.173-27.673 7.077-48.426 19.11-70.022 40.604-37.844 37.662-60.391 91.679-69.452 166.396-20.692 170.606-21.134 376.727-1.188 553.515 8.577 76.041 26.243 125.443 59.41 166.159 20.694 25.406 56.352 46.998 88.26 53.442 22.385 4.523 134.42 10.798 297.605 16.668 24.306 0.874 88.667 2.379 143.030 3.344 113.301 2.012 321.627 0.821 440.719-2.519 80.127-2.249 226.201-8.172 253.5-10.282 7.677-0.593 25.469-1.728 39.537-2.523 47.277-2.67 77.353-12.568 105.596-34.76 36.553-28.718 64.857-81.795 76.815-144.037 11.314-58.894 18.887-163.773 20.422-282.851 1.284-99.491-0.426-153.175-7.621-239.409zM1425.273 267.192l-52.982 0.654-2.326 565.143-45.932 0.581c-35.525 0.488-46.307-0.044-47.167-2.326-0.616-1.626-1.356-129.020-1.672-283.153l-0.581-280.246-103.493-1.307v-88.304l305.829 1.235 1.307 87.069-52.982 0.654zM1750.216 591.117v243.035h-83.725v-25.583c0-19.247-0.735-25.583-2.979-25.583-1.64 0-9.226 6.344-16.861 14.098-16.557 16.817-36.171 30.367-52.91 36.63-34.662 12.968-67.589 5.4-81.618-18.75-12.838-22.11-13.082-27.052-13.082-256.335v-210.547h83.653l0.654 198.265c0.623 194.821 0.714 198.393 5.377 206.333 6.182 10.521 15.608 13.347 30.597 9.231 8.817-2.423 14.836-6.707 29.143-20.931l18.024-17.952v-374.946h83.725v243.035zM2076.757 799.41c-7.372 16.424-23.806 32.509-37.283 36.485-35.167 10.382-63.375 1.923-95.935-28.708-10.103-9.505-19.51-17.224-20.931-17.224-1.712 0-2.616 7.449-2.616 22.094v22.094h-83.725v-655.845h83.725v106.982c0 58.84 0.786 106.982 1.744 106.982s9.789-7.807 19.624-17.298c22.629-21.841 41.548-31.399 65.557-33.213 42.811-3.24 68.327 18.794 80.018 69.117 3.647 15.696 3.998 33.625 3.998 179.078-0.002 177.178-0.021 177.918-14.175 209.457zM2430.99 702.168c-0.744 18.226-2.954 39.137-4.942 46.514-11.642 43.167-42.635 73.731-87.432 86.269-60.315 16.878-126.704-10.777-153.205-63.812-14.875-29.769-15.408-35.706-15.408-181.185 0-118.617 0.419-133.171 4.214-149.354 10.747-45.788 37.392-75.422 82.49-91.865 13.068-4.765 26.708-7.207 40.337-7.486 48.672-0.998 96.984 25.18 117.229 67.808 13.659 28.76 15.35 41.060 16.717 122.099l1.235 72.678-178.497 1.235-0.654 48.84c-0.93 68.901 3.716 90.088 22.313 102.621 15.645 10.54 39.679 9.745 52.765-1.744 12.263-10.768 15.726-22.336 16.933-56.107l1.091-29.653h86.195l-1.381 33.143z"></path>
            </svg>
          </a>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-container15">
          <div className="home-logo">
            <span className="home-text42">Nexst Build</span>
            <span className="home-text43">
              <span>
                WordPress para Empresas
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                e
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Ag??ncias Digitais.</span>
            </span>
            <div className="home-container16">
              <a
                href="https://www.linkedin.com/company/build-nexst/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon25">
                  <path d="M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z"></path>
                  <path d="M64 384h192v576h-192v-576z"></path>
                  <path d="M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="home-links-container">
            <div className="home-container17">
              <div className="home-product-container">
                <span className="home-text48">WordPress</span>
                <span className="home-text49">WooCommerce</span>
                <span className="home-text50">Elementor</span>
                <span className="home-text51">BuddyPress</span>
                <span className="home-text52">BBPress</span>
              </div>
              <div className="home-company-container">
                <span className="home-text53">Custom Post Type</span>
                <span className="home-text54">Taxonomy</span>
                <span className="home-text55">Custom Field</span>
                <span className="home-text56">Template</span>
                <span className="home-text57">Plugin</span>
                <span className="home-text58">Theme</span>
              </div>
            </div>
            <div className="home-container18">
              <div className="home-contact">
                <span className="home-text59">Nexst</span>
                <span className="home-text60">
                  <span>Rafael dos Santos Pedro</span>
                  <br></br>
                  <span>Desenvolvimento de Sistemas</span>
                </span>
                <span className="home-text64">
                  <span>S??o Jos?? do Rio Preto / SP</span>
                </span>
                <span>18.287.907/0001-49</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-separator"></div>
        <span className="home-text67">
          <span>?? 2022 Nexst Build, Todos os direitos reservados.</span>
          <span className="home-text69"></span>
          <span></span>
        </span>
      </footer>
    </div>
  )
}

export default Home
