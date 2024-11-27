import styled from "styled-components";

export default function Custom404() {
    return(
    <LinkFoot>
        <h4>WE APOLOGIZE<br></br>
        <p>Prom Night 2024 could not be held due to one reason or another, see you on another happy occasion!</p>
        <a href="/">Back to homepage</a></h4>
    </LinkFoot>
    )
  }

const LinkFoot = styled.div`
    h4{
        font-size: 25px;
        margin: 0;
        padding: 0;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-weight: 500;
    }
    a{
        font-size: 15px;
        font-weight: 500;
        opacity: .6;
    }
    p{
      color: ${({ theme }) => theme.text.secondary};
      padding-top: 10px;
      line-height: 1.2;
      letter-spacing: -.2px;
      font-size: 16px;
      font-weight: 500;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 12px;
      }
    }
`