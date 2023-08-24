import { StyledButton, Circle, Arrow, ButtonText } from '../../styles/components/Button/styles.js';

export default function Button() {
  return (
    <StyledButton className="learn-more">
      <Circle className="circle" aria-hidden="true">
        <Arrow className="icon arrow"></Arrow>
      </Circle>
      <ButtonText className="button-text">Saiba mais ...</ButtonText>
    </StyledButton>
  );
}
