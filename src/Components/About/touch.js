import React from 'react';
import styled from 'styled-components';

import service1 from 'src\assets\touch\service-1.jpg';
import service3 from 'src\assets\touch\service-2.jpg';
import service3 from 'src\assets\touch\service-3.jpg';

const touchsd = styled.div`
.service .section-title {
     margin-block-end: 16px; }

.service .section-text { margin-block-end: 40px; }

.service-card { overflow: hidden; }

.service-card .has-before {
  padding-block: 30px;
  margin-block-end: 26px;
  z-index: 1;
}

.service-card .has-before::before {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 100%;
  background-image: url('../images/img-pattern.svg');
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  transition: var(--transition-2);
  transition-delay: 0;
  z-index: -1;
  will-change: transform;
}

.service-card:is(:hover, :focus-within) .has-before::before {
  transform: rotateY(0.5turn) translateX(50%);
  transition-delay: 300ms;
}

.service-card .card-banner { transition: var(--transition-2); }

.service-card:is(:hover, :focus-within) .card-banner { transform: scale(1.05); }

.service .card-title { margin-block-end: 12px; }
}
`

const touch = (props) => {
return(
  <touchsd>
  <div>
<section class="section service bg-black-10 text-center" aria-label="service">
        <div class="container">

          <p class="section-subtitle label-2">Flavors For Royalty</p>

          <h2 class="headline-1 section-title">We Offer Top Notch</h2>

          <p class="section-text">
        
          </p>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <a href="#" class="has-before hover:shine">
                  <figure class="card-banner img-holder" style="--width: 285; --height: 336;">
                    <img src="./assets/images/service-1.jpg" width="285" height="336" loading="lazy" alt="Breakfast"
                      class="img-cover"/>
                  </figure>
                </a>

                <div class="card-content">

                  <h3 class="title-4 card-title">
                    <a href="#">Breakfast</a>
                  </h3>

                  <a href="#" class="btn-text hover-underline label-2">View Menu</a>

                </div>

              </div>
            </li>

            <li>
              <div class="service-card">

                <a href="#" class="has-before hover:shine">
                  <figure class="card-banner img-holder" style="--width: 285; --height: 336;">
                    <img src="./assets/images/service-2.jpg" width="285" height="336" loading="lazy" alt="Appetizers"
                      class="img-cover"/>
                  </figure>
                </a>

                <div class="card-content">

                  <h3 class="title-4 card-title">
                    <a href="#">Appetizers</a>
                  </h3>

                  <a href="#" class="btn-text hover-underline label-2">View Menu</a>

                </div>

              </div>
            </li>

            <li>
              <div class="service-card">

                <a href="#" class="has-before hover:shine">
                  <figure class="card-banner img-holder" style="--width: 285; --height: 336;">
                    <img src="./assets/images/service-3.jpg" width="285" height="336" loading="lazy" alt="Drinks"
                      class="img-cover"/>
                  </figure>
                </a>

                <div class="card-content">

                  <h3 class="title-4 card-title">
                    <a href="#">Drinks</a>
                  </h3>

                  <a href="#" class="btn-text hover-underline label-2">View Menu</a>

                </div>

              </div>
            </li>

          </ul>

          <img src="./assets/images/shape-1.png" width="246" height="412" loading="lazy" alt="shape"
            class="shape shape-1 move-anim"/>
          <img src="./assets/images/shape-2.png" width="343" height="345" loading="lazy" alt="shape"
            class="shape shape-2 move-anim"/>

        </div>
      </section>
      </div>
      </touchsd>
);
}
export default touch;