import { StyledButton, Circle, Arrow, ButtonText } from '../../styles/components/CustomButton/styles.js';
import { useNavigate } from 'react-router-dom';

export default function CustomButton({ serviceId }) {

  const navigate = useNavigate();

  const handleClick = (id) => {
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
