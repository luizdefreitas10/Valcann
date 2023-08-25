import { StyledButton, Circle, Arrow, ButtonText } from '../../styles/components/Button/styles.js';
import { useNavigate } from 'react-router-dom';

export default function CustomButton({ serviceId }) {

  const navigate = useNavigate();

  const handleClick = (id) => {
    console.log(`cliquei carai e o id é ${id}`)
    navigate(`/services/${id}`);
  };

  return (
    <StyledButton className="learn-more">
      <Circle className="circle" aria-hidden="true">
        <Arrow className="icon arrow"></Arrow>
      </Circle>
      <ButtonText className="button-text" onClick={() => handleClick(serviceId)}>Saiba mais ...</ButtonText>
    </StyledButton>
  );
}
