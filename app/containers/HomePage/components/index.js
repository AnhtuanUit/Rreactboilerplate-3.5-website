import styled from 'styled-components';

import View from 'components/View';

import {media} from 'global-styles'

const P = styled.p`
  font-size: 1em;
  color: ${ ({color}) => color ? color : '#8e9bac' };
  line-height: 1.5em;
  float: ${ (left) => left ? 'left' : 'inherit' }
`;

const Line = styled.div`
  background-color: #3bdcd0;
  height: 3px;
  width: 5%;
  margin-bottom: 1.25em;
`;

const ImgPayment = styled.img`
  filter: grayscale(100%);
  opacity: 0.5;
  padding: 10px;
  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

const H2 = styled.h2`
  font-size: 1.125em;
  color: #8e9bac;
  font-weight: 400;
  line-height: 1.5;
`;

const H1 = styled.h1`
  font-size: 2.5em;
  color: ${({color}) => color ? color : '#3b4563' };
  text-align: ${({center}) => center ? 'center' : 'inherit' }
`;

const ServicesLeft = styled(View)`
  margin-right: 1.875em;
  justify-content: space-between;
  flex: 1;
`;

const ServicesRight = styled.div`
  overflow: hidden;
  flex: 2;
  ${media.small`
    display: none;
  `}
`;

const ViewServicesContent = styled.div`
  margin-left: 15em;
  margin-top: 25px;
  display: flex;
  flex: 1;
  ${media.large`
    margin-left: 5em;
  `}
  ${media.medium`
    margin-left: 20px;
  `}
`;

const ViewItem = styled(View)`
  text-align: ${ ({ center }) => center ? 'center' : 'inherit' };
  padding: 25px 25px;
  width: 33.33%;
  ${media.small`
    width: 100%;
  `}
`;

const ViewItemProduct = styled(View)`
  background-color: white;
  margin: 10px 36px;
  max-width: 318px;
`;

const ItemTitle = styled.h2`
  font-weight: 700;
  font-size: 17px;
  color: ${ ({ color }) => color ? color : '#3b4563'};
`;

const SectionDescribe = styled.h2`
  color: #8e9bac;
  font-size: 18px;
  text-align: center;
  margin: 0% 10%;
  line-height: 1.5;
`;

const ViewItemPerformance = styled(View)`
  width: 50%;
  padding: 0% 2%;
  text-align: center;
  ${media.small`
    width: 100%;
  `}
`;

const ViewPerformance = styled(View)`
  margin: 5% 15% 0;
  ${media.medium`
    margin: 5% 5% 0;
  `}
  ${media.small`
    flex-direction: column;
  `}
`;

const Header = styled.header`
  position: relative;
  background-color: #f5f9fc;
  padding-top: 70px;
`;

const ImgBase = styled.img`
  position: absolute;
`
const ImgReact = styled(ImgBase)`
  transform: translateY(478%);
  ${media.medium`
    transform: translateY(395%);
  `}
  ${media.small`
    display: none;
  `}
`

const ImgJavascript = styled(ImgBase)`
  transform: translate(135%,367%);
  ${media.medium`
    display: none;
  `}
`

const ImgGraphql = styled(ImgBase)`
  transform: translate(283%,324%);
  ${media.medium`
    display: none;
  `}
`

const ImgRedux = styled(ImgBase)`
  transform: translate(431%, 328%);
  ${media.medium`
    display: none;
  `}
`

const ImgAnalytics = styled(ImgBase)`
  max-width: 310px;
  transform: translate(221%, 77%);
  ${media.extra`
    transform: translate(170%, 77%);
  `}
  ${media.large`
    display: none;
  `}
  ${media.medium`
    max-width: 300px;
    transform: translate(50%, 168%);
    display: block;
  `}
  ${media.small`
    transform: translate(-7%, 180%);
  `}
`

const ImgVirtual = styled(ImgBase)`
  transform: translate(40%,402%);
  ${media.medium`
    transform: translate(107%, 406%);
  `}
  ${media.small`
    display: none;
  `}
`

const ImgRedis = styled(ImgBase)`
  transform: translate(164%, 463%);
  ${media.medium`
    display: none;
  `}
`

const ImgDocker = styled(ImgBase)`
  max-width: 200px;
  transform: translate(240%, 280%);
  ${media.medium`
    display: none;
  `}
`

const ImgTablet = styled(ImgBase)`
  transform: translate(570%, 281%);
  ${media.large`
    display: none;
  `}
  ${media.medium`
    transform: translate(0%, 350%);
    display: block;
  `}
  ${media.small`
    transform: translate(40%, 390%);
  `}
`

const ImgBabel = styled(ImgBase)`
  transform: translate(189%, 969%);
  ${media.extra`
    transform: translate(140%, 969%);
  `}
  ${media.medium`
    display: none;
  `}
`

const ImgKotlin = styled(ImgBase)`
  transform: translate(259%, 1433%);
  ${media.extra`
    transform: translate(215%, 1433%);
  `}
  ${media.large`
    display: none;
  `}
`

const ContainerZ = styled.div`
  z-index: 100;
  padding-left: 65px;
  padding-top: 35px;
  ${media.medium`
    padding: 20px;
  `}
`

const ContainerSection = styled.section`
  position: relative;
  height: 760px;
  margin: 0 auto;
  max-width: 1170px;
`

const HeaderTriangle = styled.div`
  background: #fff;
  height: 150%;
  width: 100%;
  position: absolute;
  transform: skewY(-30deg);
  transform-origin: -495px center 0;
`

const ViewSeparate = styled.div`
  padding-top: 300px;
  background-color: #f5f9fc;
`

const Label = styled.span`
  background-color: #1daaa0;
  color: white;
  padding: 2px 7px;
`

const ViewTypist = styled.div`
  font-size: 21px;
  max-width: 900px;
  color: #8E9BAC;
`

const ViewLogo = styled.section`
  padding-left: 65px;
  margin: 0 auto;
  max-width: 1170px;
`

const ViewLogoImage = styled(View)`
  justify-content: space-around;
  background-color: #f5f9fc;
`

const ViewSection = styled.div`
  background-color: #f5f9fc;
  padding-top: 50px;
`

const ViewListItemApp = styled(View)`
  margin: 50px;
  ${media.small`
    margin: 20px;
  `}
`

const ViewListItemProduct = styled(View)`
  margin-top: 50px;
  position: relative;

  &:before {
  content: '';
  width: 100%;
  height: 100%;
  background-color: #1daaa0;
  position: absolute;
  -webkit-clip-path: polygon(0 0,100% 0,100% 96%,0 100%);
  clip-path: polygon(0 30%,100% 0,100% 100%,0 100%)
  }
`

const ViewContentProduct = styled(View)`
  z-index: 1;
  padding-top: 10px;
  margin-left: 50px;
  margin-right: 50px;
  margin: 0 auto;
  max-width: 1170px;
  justify-content: space-evenly;
`

const ViewFeature = styled(View)`
  background-color: #1daaa0;
  padding: 0 50px;
  ${media.small`
    padding: 0 20px;
  `}
`

const ViewHeaderFeature = styled(View)`
  width: 100%;
  padding-top: 50px;
`

const ItemActive = styled.div`
  opacity: ${({active}) => active ? 1 : 0.5 };
  filter: grayscale(0%);

  &:hover {
    opacity: 1;
  }
`

const ViewProductDetail = styled(View)`
  margin-left: 20px;
  margin-right: 20px;
`

const ImgItem = styled.img`
  ${media.medium`
    max-width: 105px;
    max-height: 90px;
  `}
`

export {
  P,
  Line,
  ImgPayment,
  H2,
  H1,
  ServicesLeft,
  ServicesRight,
  ViewServicesContent,
  ViewItem,
  ViewItemProduct,
  ItemTitle,
  SectionDescribe,
  ViewItemPerformance,
  ViewPerformance,
  Header,
  HeaderTriangle,
  ImgReact,
  ImgJavascript,
  ImgGraphql,
  ImgRedux,
  ImgAnalytics,
  ImgVirtual,
  ImgRedis,
  ImgDocker,
  ImgTablet,
  ImgBabel,
  ImgKotlin,
  ContainerZ,
  ContainerSection,
  ViewSeparate,
  Label,
  ViewTypist,
  ViewLogo,
  ViewLogoImage,
  ViewSection,
  ViewListItemApp,
  ViewListItemProduct,
  ViewContentProduct,
  ViewFeature,
  ViewHeaderFeature,
  ItemActive,
  ViewProductDetail,
  ImgItem,
};
