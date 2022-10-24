import Navcomponents from 'components/navcomponents';
import Piu from 'components/pius';
import { useState } from 'react';
import * as S from './styles';

const HomeTemplate = () => {
    const [valorPostContent, setValorPostContent] = useState('');
    const [piuArray, setPiuArray] = useState<IPiu[]>([]);
    function handleClick() {
        setPiuArray([
            {
                text: valorPostContent
            },
            ...piuArray
        ]);
    }
    interface IPiu {
        text: string;
    }
    const [textAreaCount, setTextAreaCount] = useState(0);
    const recalculate = (e: { target: { value: string | unknown[] } }) => {
        setTextAreaCount(e.target.value.length);
    };

    function handleRemove(deletedpiu: string) {
        const filteredpius = piuArray.filter((piu) => piu.text !== deletedpiu);
        setPiuArray(filteredpius);
    }

    return (
        <>
            <S.Bodycontainer>
                <S.Header>
                    <S.Icon src="/assets/wind.svg" />
                    <S.Searchbar>
                        <S.Searching src="/assets/lupa (2).png" />
                        <S.Search
                            type="text"
                            name="nome"
                            placeholder="search"
                        />
                    </S.Searchbar>
                </S.Header>
                <S.Maincontainer>
                    <S.Navbarcontainer>
                        <S.Navbar>
                            <Navcomponents
                                title="Feed"
                                img="assets/botao-de-inicio.png"
                                selected
                            />
                            <Navcomponents
                                title="Profile"
                                img="assets/avatar.png"
                            />
                            <Navcomponents
                                title="Configs"
                                img="assets/preferences.png"
                            />
                        </S.Navbar>
                    </S.Navbarcontainer>
                    <S.Feedcontainer>
                        <S.Typingcontainer>
                            <S.Toptyping>
                                <S.Typing
                                    name="nome"
                                    placeholder="What's up?"
                                    value={valorPostContent}
                                    onChange={(conteudo) => {
                                        setValorPostContent(
                                            conteudo.target.value
                                        );
                                        recalculate(conteudo);
                                    }}
                                    maxLength={140}
                                />
                            </S.Toptyping>
                            <S.Bottyping>
                                <S.Contador>{textAreaCount}/140</S.Contador>
                                <S.SendButton onClick={() => handleClick()}>
                                    <S.SendIcon src="assets/pagina-de-destino.png" />
                                </S.SendButton>
                            </S.Bottyping>
                        </S.Typingcontainer>
                        <S.PostsContainer>
                            {piuArray &&
                                piuArray.map((piu) => (
                                    <Piu
                                        Text={piu.text}
                                        handleRemove={() =>
                                            handleRemove(piu.text)
                                        }
                                    />
                                ))}
                        </S.PostsContainer>
                    </S.Feedcontainer>
                </S.Maincontainer>
            </S.Bodycontainer>
        </>
    );
};
export default HomeTemplate;
