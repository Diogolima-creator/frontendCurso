import * as C from './styles'

export const Lives = () => {
    return(
        <C.Container>
                <div className='lives-header'>
                    <div>
                        <h1>Aulas ao vivo</h1>
                        <p>Professor:</p>
                    </div>
                </div>
                <div className='lives-dentro'>
                    <div className='live'>
                        <div>

                        </div>
                    </div>
                    <div className='chat'>
                        <div className='chat-header'>
                            <p>CHAT AO VIVO DA AULA</p>
                        </div>
                        <div className='chat-comments'>
                            
                        </div>
                        <div className='chat-input'>
                            <textarea placeholder='Tire sua duvida' />
                            <button>Chat</button>
                        </div>
                    </div>
                </div>
        </C.Container>
    )
}