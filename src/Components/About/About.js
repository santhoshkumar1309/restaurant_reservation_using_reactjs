import React, { Component } from 'react';
import styled from 'styled-components'


import headerDecorator from '../../assets/home/header_decorator.png'
import ornament from '../../assets/home/ornament.png'
import AboutCarousel from './AboutCarousel';
import KitchenCarousel from './KitchenCarousel';
import { device } from '../../Theme/MediaQueries';



const AboutUsWrapper = styled.section`
.about__title { 
  margin-top: 80px;
  &::before, &::after { 
    content: url(${headerDecorator});
    margin: 14px;
    color: var(--gold);
    vertical-align: center;
  } 
}
.about__subtitle { 
    text-align: center;
    font-family: 'Cabin', sans-serif;
    font-weight: 400;
    font-style: italic;
    font-size: 1.7rem;
    margin-bottom: 60px;
    text-align: center;
  }
  .about__ornament { 
    display: block;
    width: 65px;
    height: 35px;
    /* background: url(../images/ornament.png);
    background-repeat: no-repeat;
    content: " "; */
    margin: 0 auto;
  }
  .the__history { 
    display: flex;
    @media ${device.tablet}{
      flex-direction: column;
    }

    .about__content { 
      width: 70%;
        @media ${device.tablet}{
        width: 100%;
        text-align: center;
        margin: 50px 0;
      }
    }
    .about__carousel { 
      width: 80%;
      @media ${device.tablet}{
        order: -1;
        width: 100%;
        margin: 0 auto;
        display:flex;
        justify-content: center;
     }
    }
  }

  /* kitchen Carousel */
  .the__kitchens { 
    display: flex;
    margin: 60px 0 130px 0;
    @media ${device.tablet}{
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
    .kitchens-carousel { 
      width: 80%;
      @media ${device.tablet}{
        width: 100%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
      }
    }
    .kitchens-content { 
      width: 70%;
      @media ${device.tablet}{
        width: 100%;
        text-align: center;
      }
    }
  }
`
class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        {/* // About US */}
        <AboutUsWrapper id="about" >
          <h2 className="about__title">About Us</h2>
          <p className="about__subtitle">
            We love restaurants as much as you do. That’s why we’ve been <br />
            helping them fill tables since 1991. Welcome to Spicy Tamilan restaurant</p>
          <div className="wrapper">

            <div className="the__history">
              <div className="about__content">
                <h5 >The History</h5>
                <p>The <span className="gold">Spicy Tamilan</span>(also known as Small Thalappakatti ) is a restaurant chain that operates primarily in the Indian state of Tamil Nadu. The first outlet was opened in 1957 at Dindigul. Since then, it operates with over 101 outlets globally with 92 outlets in India, and 9 outlets overseas.</p>
                <p>The founder, Nagasamy Naidu, started Spicy Tamilian restaurant by the name of Anandha Vilas Biriyani Hotel in Dindigul, Tamil Nadu. In 2013 the chain won a trademark lawsuit about the use of the word <span className="gold">"thalappakatti"</span> (meaning "turban" in Tamil)</p>
                <img src={ornament} alt="ornament" className="about__ornament" />
              </div>

              {/* carousel */}
              <div className="about__carousel">
                <AboutCarousel />
              </div>
            </div>

            <div className="the__kitchens">
              <div className="kitchens-carousel">
                <KitchenCarousel />
              </div>
              <div className="kitchens-content">
                <p>The <span className="gold">Our restaurant</span>, Dindigul Thalappakatti offers a sophisticated dining experience for those seeking to explore beyond the ordinary and discover the full potential of south-indian dining experience.</p>
                <p>Promising an elite experience, each table will have a designated ‘captain’ that provides personalised service to the regal guests. We have carefully handpicked the staff from all over India and have been given special training.</p>
              </div>
            </div>

            {/* Wrapper ends here */}
          </div>
        </AboutUsWrapper>
      </React.Fragment>
    );
  }
}

export default AboutUs; 