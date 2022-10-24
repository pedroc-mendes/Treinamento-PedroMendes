import * as S from './styles';

export type piuProps = {
    Text: string;
    handleRemove: VoidFunction;
};

const Piu: React.FC<piuProps> = ({ Text, handleRemove }) => {
    return (
        <S.PiuContainer>
            <S.PiuTop>
                <S.Text>{Text}</S.Text>
            </S.PiuTop>
            <S.PiuBot>
                <S.Likebttn src="assets/heart (1).png" />
                <S.Deletebttn
                    src="assets/excluir (1).png"
                    onClick={handleRemove}
                />
            </S.PiuBot>
        </S.PiuContainer>
    );
};

export default Piu;
