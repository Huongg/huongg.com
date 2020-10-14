import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import jasmine01 from '../assets/images/jasmine/jasmine01.jpg'
import jasmine02 from '../assets/images/jasmine/jasmine02.jpg'
import jasmine03 from '../assets/images/jasmine/jasmine03.jpg'
import jasmine05 from '../assets/images/jasmine/jasmine05.jpg'
import jasmine06 from '../assets/images/jasmine/jasmine06.jpg'

const Jasmine = props => (
  <Layout>
    <Helmet>
      <title>Huong Nguyen</title>
      <meta name="description" content="Jasmine" />
    </Helmet>

    <BannerLanding name="Jasmine">
      <p>
        Lorem ipsum dolor sit amet nullam consequat
        <br />
        sed veroeros. tempus adipiscing nulla.
      </p>
    </BannerLanding>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Sed amet aliquam</h2>
          </header>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
            urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Nullam et orci eu lorem consequat tincidunt vivamus et
            sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula
            tate urna.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={jasmine01} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Orci maecenas</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
            </div>
          </div>
        </section>
        <br />
        <br />

        <section className="display-row">
          <div className="image">
            <img src={jasmine02} alt="" />
          </div>
          <div className="image">
            <img src={jasmine03} alt="" />
          </div>
        </section>
        <br />
        <section className="display-row">
          <div className="image">
            <img src={jasmine05} alt="" />
          </div>
          <div className="image">
            <img src={jasmine06} alt="" />
          </div>
        </section>
        <br />
        <br />
      </section>
    </div>
  </Layout>
)

export default Jasmine
