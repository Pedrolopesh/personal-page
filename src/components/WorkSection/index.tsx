import uxData from '../../utils/works_UX.json'
import webData from '../../utils/works_web.json'
import backendData from '../../utils/works_backend.json'
import { useState, useEffect, Fragment } from 'react'
import animationLateralScroll from '../../assets/animations/scroll_rigth.gif'
import { useTranslation } from "react-i18next";
import { 
    Container, 
    ContainerButtons,
    ContainerWorksSection,
    WorkButton,
    AnimationRigthScroll,
} from './style'
import WorkCard from '../WorkCard'

interface IOprtions {
    options: string
}

const WorkSection = () => {
    const { t } = useTranslation();

    const [visibleModal, setVisibleModal] = useState(false)
    const [selectedItem, setSelectedItem]:any = useState(uxData)
    const [selectedButton, setSelectedButton]:any = useState(0)
    const [selectedOption, setSelectedOption]:any = useState('ux')

    const options: IOprtions[] = [
        {
            options:'Trabalhos Design'
        },
        {
            options:'Trabalhos WEB'
        },
        {
            options:'Trabalhos backend'
        }
    ]

    const openUXModal = () => {
        setVisibleModal(true)
        setSelectedItem(uxData)
        setSelectedOption('ux')
    }
    

    const openWebModal = () => {
        setVisibleModal(true)
        setSelectedItem(webData)
        setSelectedOption('web')
    }

    const openBackendModal = () => {
        setVisibleModal(true)
        setSelectedItem(backendData)
        setSelectedOption('backend')
    }

    
    const listenChieldEvent = (modalState: boolean) => {
        setVisibleModal(modalState)
    }


    const switchOption = (option: string, index:any) => {
        if(option === 'Trabalhos Design') openUXModal()
        if(option === 'Trabalhos WEB') openWebModal()
        if(option === 'Trabalhos backend') openBackendModal()
        setSelectedButton(index)
    }

    useEffect(() => {
        setSelectedItem(uxData)
    }, [])

    return (
        <>
            <Container>
                
                <ContainerButtons>
                    {options.map((value:IOprtions, index:number) => {
                        return (
                            <Fragment key={index}>
                                <WorkButton
                                    style={{
                                        border: (selectedButton === index) ? '5px solid' :'',
                                        borderImage: (selectedButton === index) ? 'linear-gradient(45deg,#da926b,#2a0a7d) 10' : '',
                                        // padding: (selectedButton === index) ? '15px' : ''
                                    }} 
                                    onClick={() => {
                                        switchOption(value.options, index) 
                                    }}
                                > 
                                    {t(`button_work_text_`+index)}

                                </WorkButton>
                                {/* <WorkButton onClick={() => {openWebModal()} }> Trabalhos WEB </WorkButton> */}
                                {/* <WorkButton onClick={() => {openBackendModal()} }> Trabalhos backend </WorkButton> */}
                            </Fragment>
                        )
                    })}
                </ContainerButtons>

                <AnimationRigthScroll src={animationLateralScroll} alt="animation scroll" />

                <ContainerWorksSection>
                    <WorkCard
                        items={selectedItem}
                        workOption={selectedOption}
                        paramEvent={listenChieldEvent}
                        modalState={visibleModal}
                    />
                </ContainerWorksSection>
            </Container>
        </>
    )
}

export default WorkSection;