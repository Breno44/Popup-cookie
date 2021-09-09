import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding-bottom: 60px;
  background: #fbb45f;
`;

export const Button = styled.button`
  background: #ffffff;
  color: #333;
  border-radius: 5px;
  height: 50px;
  width: 200px;
  font-size: 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    letter-spacing: 1px;
  }

  &:active {
    box-shadow: none;
    transform: scale(0.9);
  }
`;

export const CookiesBox = styled.div`
  width: 340px;
  position: fixed;
  bottom: 100px;
  z-index: 1000;
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 30px;
  left: 20px;
  transition: all ease 0.3s;
  animation: born 0.4s linear;

  @keyframes born {
    0% {
      transform: scale(0.1);
    }
  }
`;

export const Img = styled.img`
  height: 110px;
  animation: image 10s linear infinite;

  @keyframes image {
    0% {
      transform: rotate(360deg);
    }
  }
`;

export const H3 = styled.h3`
  color: #333;
  font-size: 23px;
  padding: 5px 0;
`;

export const P = styled.p`
  color: #666;
  font-size: 13px;
  padding: 5px 0;
  line-height: 1.8;
`;

export const Accept = styled.a`
  background: #fbb45f;
  color: #fff;
  border-radius: 5px;
  display: block;
  margin: 15px 0;
  padding: 10px;
  text-decoration: none;

  &:hover {
    letter-spacing: 1px;
    opacity: 0.8s;
  }
`;

export const Setting = styled.a`
  color: #999;
  text-decoration: none;

  &:hover {
    color: #fbb45f;
  }
`;

export const Close = styled.span`
  position: absolute;
  top: -2px;
  right: 12px;
  font-size: 40px;
  color: #999;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;
