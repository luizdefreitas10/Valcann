import { IconsContainer } from '../../styles/components/SocialMediaLinks/styles';
import facebookIcon from '../../assets/svgs/facebookIcon.svg'
import googleIcon from '../../assets/svgs/googleIcon.svg';
import instagramIcon from '../../assets/svgs/instagramIcon.svg';
import twiterIcon from '../../assets/svgs/twiterIcon.svg';
import whatsappIcon from '../../assets/svgs/whatsappIcon.svg';
import youtubeIcon from '../../assets/svgs/youtubeIcon.svg';

export default function SocialMediaLinks () {
  return (
    <IconsContainer>
      <img src={facebookIcon} alt='facebookIcon' width={40} height={40} />
      <img src={googleIcon} alt='googleIcon' width={40} height={40} />
      <img src={instagramIcon} alt='instagramIcon' width={40} height={40} />
      <img src={twiterIcon} alt='twiterIcon' width={40} height={40} />
      <img src={whatsappIcon} alt='whatsappIcon' width={40} height={40} />
      <img src={youtubeIcon} alt='youtubeIcon' width={40} height={50} />
    </IconsContainer>
  );
};