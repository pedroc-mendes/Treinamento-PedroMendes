import * as S from './styles';

export type Navcomponentsprops = {
    title: string;
    img: string;
    selected?: boolean;
};

const Navcomponents: React.FC<Navcomponentsprops> = ({
    title,
    img,
    selected
}) => {
    return (
        <S.Pages selected={selected}>
            <S.Image src={img} />
            <S.Title selected={selected}>{title}</S.Title>
        </S.Pages>
    );
};

export default Navcomponents;
