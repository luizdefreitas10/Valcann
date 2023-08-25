import {
  Container,
  TextContent,
} from "../../styles/components/Responsive/styles";
import { services } from "../../mocks/Cards/cards.js";
import CustomButton from "../CustomButton/CustomButton";
import AddToCartButton from "../AddToCartButton/AddToCartButton";


export default function Card() {
  return services.map((service) => (
    <Container key={service.id}>
      <img
        src={service.svgPath}
        alt="responsive services"
        width={200}
        height={200}
      />
      <TextContent>
        <h1>{service.title}</h1>
        <br />
        <p>{service.description}</p>
      </TextContent>
      <CustomButton serviceId={service.id} />
      <AddToCartButton serviceDetail={service}/>
    </Container>
  ));
}
