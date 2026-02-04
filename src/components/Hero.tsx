import React from 'react'
import styled from 'styled-components'
import hero from '../assets/hero.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <HeroWords />
        <ShopNowButton />
      </article>
      <HeroImage />
    </Wrapper>
  )
}

export default Hero

const HeroWords = () => {
  return (
    <>
      <h1>
        premium men's fashion <br />
        curated for your style
      </h1>
      <p>
        Discover quality apparel, footwear, and accessories for men. Fresh
        drops weekly and limited quantities.
      </p>
    </>
  )
}

const ShopNowButton = () => {
  return (
    <Link to='/products' className='btn hero-btn'>
      shop now
    </Link>
  )
}

const HeroImage = () => {
  return (
    <article className='img-container'>
      <img src={hero} alt='hero' className='main-img' />
      {/* insert one more image here */}
    </article>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 1rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
  }
`
