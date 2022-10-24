import styled from 'styled-components';

interface PagesProps {
    selected?: boolean;
}

export const Pages = styled.div<PagesProps>`
    width: 192px;
    height: 48px;
    display: flex;
    flex-direction: row;
    border-radius: 24px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: ${({ selected }) => (selected ? '#8d9ec6' : '#102e4a')};
    cursor: pointer;
`;
export const Title = styled.span<PagesProps>`
    font-size: 32px;
    font-family: 'Poppins', Helvetica, sans-serif;
    font-weight: bold;
    color: ${({ selected }) => (selected ? '#102e4a' : '#8d9ec6')};
`;
export const Image = styled.img`
    width: 32px;
    height: 32px;
`;
