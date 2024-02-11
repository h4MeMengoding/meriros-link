import styled from "styled-components";

export default function Custom404() {
    return(
    <LinkFoot>
        <h4>COMING SOON, STAY TUNE!<br></br> <a href="/">Back to homepage</a></h4>
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
`