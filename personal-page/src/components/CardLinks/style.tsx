import styled from 'styled-components';

export const Container = styled.div`
    display: block;
`

export const Card = styled.div`
    width: 35%;
    padding: 10px;
    display: block;
    max-width: 100%;
    border-radius: 15px;
    background-color: white;
    margin: 0px auto 0px auto;

    position: absolute;
    overflow: hidden;
    z-index: 10;
    text-align: center;
    left: 32%;
    top: 50%;
`

export const WorkButton = styled.button`
    width: 70%;
    padding: 15px;
    display: block;
    max-width: 100%;
    border-radius: 15px;
    background-color: #39004c;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 6px;
    margin: 25px auto 25px auto;
    box-shadow: 4px 5px 10px #19002fa6;
    transition: 1s;

    &:hover {
        transform: scale(1.05);
    }
`
