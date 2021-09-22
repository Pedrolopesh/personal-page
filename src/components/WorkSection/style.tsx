import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    max-width: 100%;
    width: 100%;
    margin-top: 100px;
`

export const ContainerButtons = styled.div`
    display: flex;
    max-width: 100%;
    width: 50%;
    margin: 200px 0px 0px 110px;
    
    @media screen and (max-width: 800px){
        width: 95%;
        margin: 0 auto 0 auto;
        /* flex-wrap: wrap; */
    }
`


export const WorkButton = styled.button`
    width: 250px;
    background: none;
    border: none;
    display: block;
    color: white;
    max-width: 100%;
    font-size: 20px;
    margin: 25px auto 25px auto;
    line-height: 30px;
    padding: 15px;
    /* transition: 1s; */
    border: 5px solid transparent;
    /* border-image: linear-gradient(45deg,red,blue) 10;
    padding: 15px; */

    /* border: 0px #ff0000; */


    /* flex-wrap: wrap; */
    /* &:nth-child(2){
        background: linear-gradient(to right, #25067d, #e2986a);
    } */

    /* &:hover {
        transform: scale(1.05);
    } */

    @media screen and (max-width: 1300px){
        margin: 25px auto 25px auto;
        font-size: 15px;
    }
`
    
export const ContainerWorksSection = styled.div`
    /* width: 250px; */
    display: block;
    max-width: 100%;
    width: 100%;
`

export const AnimationRigthScroll = styled.img`
    display: block;
    max-width: 100%;
    width: 8%;
    transform: rotate(270deg);
    margin: -30px auto -45px auto;
    /* margin: 20px auto 0px auto; */
    
    @media screen and (max-width: 500px){
        width: 35%;
        /* margin: -30px auto -45px auto; */
    }

`