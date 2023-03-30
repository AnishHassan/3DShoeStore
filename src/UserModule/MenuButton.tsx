import styled from 'styled-components';

interface ButtonData {
    number: number;
    image: string;
}

interface SlideContentProps {
    buttons: ButtonData[];
}

const SlideContent: React.FC<SlideContentProps> = ({ buttons }) => {
    return (<>
        <MenuLabel>Profile</MenuLabel>
        <ButtonsGrid>
            {buttons.map(({ number, image }) => (
                <ButtonWrapper key={number}>
                    <ButtonImage src={image} alt={`Button ${number}`} />
                    <ButtonNumber>{number}</ButtonNumber>
                </ButtonWrapper>
            ))}
        </ButtonsGrid>
    </>

    );
};

const MenuLabel = styled.h2`
display:flex ;
align-items : center;
justify-content : center;
font-size : 26px;
 @media (max-width: 600px) {
 font-size : 22px;
}

`

const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-gap: 10px;
  min-width: 250px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
 min-width: 200px;
}
  `;

const ButtonWrapper = styled.div`
    position: relative;
    background-color:#9c4037;
    border-radius : 16px;
  `;

const ButtonImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
     @media (max-width: 600px) {
    width: 50px;
    height: 50px;
    margin-left : 10px;
    align-items : center;

}
  `;

const ButtonNumber = styled.span`
    position: absolute;
    top: -5px;
    left: -5px;
    font-size: 17px;
    font-weight: bold;
    width : 20px;
    align-items : center;
    display : flex;
    justify-content : center;
    height : 20px;
    color: #000;
    border-radius : 50%;
    background-color  : #fff;
    text-shadow: 1px 1px 1px black;
     @media (max-width: 600px) {
 font-size: 12px;
}
  `;

export default SlideContent