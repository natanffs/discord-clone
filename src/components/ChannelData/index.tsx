import React, { useRef, useEffect } from 'react'
import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'


const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messageRef.current

        if (div) {
            div.scrollTop = div.scrollHeight
        }

    }, [messageRef])
    
    return (
        <Container>
            <Messages ref={messageRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Natan Fernandes"
                        date="26/06/2020"
                        content="Olá pessoal, tudo bem com vocês?"
                    />))}
                <ChannelMessage
                    author="Raquel Santiago"
                    date="26/06/2020"
                    hasMention
                    isBot
                    content={
                        <>
                            <Mention>@Natan Fernandes</Mention>, tudo bem. E com você?
                        </>
                    }
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData