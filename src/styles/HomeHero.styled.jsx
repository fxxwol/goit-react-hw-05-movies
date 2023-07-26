import styled from 'styled-components';
import img from '../img/hero-img.jpg';
import { Button } from '@mui/material';
import { breakpoints } from './Theme';

const { _, mobileL, tablet, desktop } = breakpoints;

export const HomeWrap = styled.section`
  background-image: linear-gradient(
    86.47deg,
    #111111 33.63%,
    rgba(17, 17, 17, 0) 76.86%
  );
  background-image: url('${img}');
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  padding: 35px 0;
  margin: 10px auto;

  @media ${mobileL} {
    height: 400px;
  }
  @media ${tablet} {
    height: 500px;
    width: 690px;
  }
  @media ${desktop} {
    width: 1152px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 25px;
  font-weight: 500;
  width: 90%;
  margin: 0 auto;
  @media ${tablet} {
    font-size: 40px;
    width: 70%;
  }
`;
export const HeroText = styled.p`
  font-size: 15px;
  text-align: center;
  width: 90%;
  margin: 0px auto;

  @media ${tablet} {
    font-size: 20px;
    width: 400px;
    text-align: start;
    margin: 20px auto 0 auto;
  }

`;

export const Btn = styled(Button)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  line-height: 1.75px;
  border: 1px solid black;
  transition: all 300ms ease-in-out 0ms;

  &.MuiButton-root:hover,
  :focus {
    background-color: black;
    color: white;
    border: 1px solid black;
  }
`;

export const HeroWrap = styled.div`

  @media ${tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    margin-top: 30px;
  }
  @media ${desktop} {
    margin-left: 130px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin: 40px 0 20px 0;

  @media ${mobileL} {
    margin: 40px 0 30px 0;
  }
  @media ${tablet} {
    gap: 30px;
    align-items: start;
  }
  @media ${desktop} {
    gap: 50px;
  }
`;

export const HeroImg = styled.img`
  width: 150px;

  @media ${tablet} {
    width: 200px;
  }
  @media ${desktop} {
    width: 400px;
  }
`;
