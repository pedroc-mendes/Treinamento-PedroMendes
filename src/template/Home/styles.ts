import styled from 'styled-components';

export const Bodycontainer = styled.div`
    min-height: 100vh;
    min-width: 100%;
    background-color: #102e4a;
`;

export const Header = styled.div`
    width: 100%;
    height: 136px;
    background-color: #102e4a;
    display: flex;
    flex-direction: row;
    padding-left: 40px;
    gap: 112px;
    align-items: center;
    border-bottom: 1px solid #8d9ec6;
`;
export const Icon = styled.img`
    height: 112px;
    width: 112px;
`;
export const Searchbar = styled.div`
    width: 400px;
    height: 64px;
    border-radius: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #e7dfc6;
    padding-left: 32px;
    gap: 16px;
`;

export const Search = styled.input`
    border-radius: 32px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 400px;
    height: 64px;
    background-color: #e7dfc6;
    border-style: none;
    font-size: 32px;
    font-family: 'Poppins', Helvetica, sans-serif;
    outline: none;
    color: #102e4a;
    caret-color: #102e4a;
    padding: 0px 32px 0px 0px;
`;
export const Searching = styled.img`
    width: 48px;
    height: 48px;
`;

export const Maincontainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #102e4a;
    display: flex;
    flex-direction: row;
`;
export const Navbarcontainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
    padding: 24px 40px 0px 40px;
`;
export const Feedcontainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export const Typingcontainer = styled.div`
    width: 95%;
    height: 296px;
    border-bottom: 1px solid #8d9ec6;
    align-items: center;
    padding: 32px 0px 32px 0px;
`;
export const Toptyping = styled.div`
    width: 100%;
    height: 75%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    background-color: #e7dfc6;
`;
export const Typing = styled.textarea`
    width: 100%;
    height: 100%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    background-color: #e7dfc6;
    border-style: none;
    font-size: 24px;
    font-family: 'Poppins', Helvetica, sans-serif;
    outline: none;
    color: #102e4a;
    caret-color: #102e4a;
    padding: 16px 16px 0px 16px;
    text-align: start;
    resize: none;
    overflow: hidden;
`;
export const Bottyping = styled.div`
    width: 100%;
    height: 25%;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    display: flex;
    flex-direction: row;
    background-color: #e7dfc6;
    align-items: center;
    justify-content: end;
    padding: 4px 8px 4px 4px;
    gap: 24px;
`;
export const Contador = styled.span`
    font-size: 24px;
    font-family: 'Poppins', Helvetica, sans-serif;
    font-weight: bold;
    color: #102e4a;
`;

export const SendButton = styled.div`
    height: 40px;
    width: 40px;
    background-color: #8d9ec6;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 4px;
    padding-top: 2px;
    cursor: pointer;
`;
export const SendIcon = styled.img`
    height: 32px;
    width: 32px;
`;
export const PostsContainer = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
`;
