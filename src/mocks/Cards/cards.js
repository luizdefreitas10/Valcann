import responsiveSvg from '../../assets/svgs/responsive.svg';
import systemsSvg from '../../assets/svgs/systems.svg';
import integrationSvg from '../../assets/svgs/integrations.svg';
import saasSvg from '../../assets/svgs/saas.svg';
import rocketSvg from '../../assets/svgs/rocket.svg';
import responsiveDetailImg from '../../assets/imgs/responsiveDetailImg.png';
import customSystemsImg from '../../assets/imgs/customSystems.png';
import apiIntegrationsImg from '../../assets/imgs/apiIntegrationsImg.png';
import saasImg from '../../assets/imgs/saasImg.webp';
import enterpriseAdministrationImg from '../../assets/imgs/enterpriseAdministrationImg.webp';

export const services = [
  {
    id: '03',
    title: 'INTEGRAÇÕES',
    svgPath: integrationSvg,
    description: 'Nosso serviço de integrações de API é ideal para empresas que buscam automatizar processos, reduzir trabalho manual e cortar custos. Oferecemos soluções customizadas e adaptadas às suas necessidades específicas, tornando-nos o parceiro ideal para otimizar suas operações e ficar à frente da concorrência.',
    price: 2500,
    imageUrl: apiIntegrationsImg,
  },
  {
    id: '04',
    title: 'SOFTWARE COMO SERVIÇO',
    svgPath: saasSvg,
    description: 'Nossa oferta de software como serviço (SaaS) é baseada na nuvem, segura, escalonável e fácil de usar. Oferecemos soluções personalizadas e adaptadas às suas necessidades específicas, tornando-nos o parceiro ideal para empresas que procuram escalar e crescer na era digital.',
    price: 2500,
    imageUrl: saasImg,
  },
  {
    id: '05',
    title: 'GESTÃO EMPRESARIAL',
    svgPath: rocketSvg,
    description: 'Nosso serviço de administração empresarial é um balcão único para empresas que desejam gerenciar sua infraestrutura e operações de TI. Oferecemos soluções customizadas e adaptadas às suas necessidades específicas, tornando-nos o parceiro ideal para otimizar suas operações de TI e ficar à frente da concorrência.',
    price: 2500,
    imageUrl: enterpriseAdministrationImg,
  },
  {
    id: '01',
    title: 'RESPONSIVIDADE',
    svgPath: responsiveSvg,
    description: 'Construímos sites e sistemas responsivos para que você também tenha uma ótima experiência acessando suas páginas por tablets e smartphones.',
    price: 2500,
    imageUrl: responsiveDetailImg,
  },
  {
    id: '02',
    title: 'SISTEMAS PERSONALIZADOS',
    svgPath: systemsSvg,
    description: 'Não fique restrito a sistemas de prateleira. Personalize! Aqui você pode deixar seu sistema com a sua cara.',
    price: 2500,
    imageUrl: customSystemsImg,
  },
];