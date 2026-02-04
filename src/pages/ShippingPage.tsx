import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import shopLogo from '../assets/shop_logo.jpg'

const ShippingPage = () => {
  return (
    <main>
      <PageHero title='shipping' />
      <Wrapper className='page section section-center'>
        {/* insert about page image here */}
        <img src={shopLogo} alt='square logo' />
        <article className='title'>
          <h2>Shipping Across the USA</h2>
          <div className='underline'></div>
          <p>
            We ship all over the United States. Your order will be delivered
            safely and promptly via our trusted carrier partners.
          </p>
          <p>
            Enjoy free standard shipping on qualifying orders. Check your cart
            for current offers and delivery estimates at checkout.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default ShippingPage
