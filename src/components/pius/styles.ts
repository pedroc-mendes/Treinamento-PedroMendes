import styled from 'styled-components';

export const PiuContainer = styled.div`
    width: 100%;
    height: 300px;
    border-bottom: 1px solid #8d9ec6;
    align-items: center;
    padding: 32px 0px 48px 0px;
    background-color: #102e4a;
    display: flex;
    flex-direction: column;
`;

export const PiuTop = styled.div`
    width: 100%;
    height: 75%;
    padding: 16px 16px 0px 16px;
    font-size: 24px;
    font-family: 'Poppins', Helvetica, sans-serif;
    background-color: #102e4a;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
`;
export const PiuBot = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    background-color: #102e4a;
    padding: 4px 8px 4px 4px;
    gap: 24px;
`;
export const Text = styled.p`
    font-size: 24px;
    font-family: 'Poppins', Helvetica, sans-serif;
    color: #e7dfc6;
`;
export const Likebttn = styled.img`
    height: 32px;
    width: 32px;
    cursor: pointer;
`;
export const Deletebttn = styled.img`
    height: 40px;
    width: 40px;
    cursor: pointer;
`;
