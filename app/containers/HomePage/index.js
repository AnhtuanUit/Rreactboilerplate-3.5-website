/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectResponse, makeSelectContactData, makeSelectLoading, makeSelectError } from 'containers/ContactForm/selectors';

import messages from './messages';
import { createContact } from '../ContactForm/actions';
import reducer from '../ContactForm/reducer';
import saga from './saga';

import { Container, Row } from './GridSystems';
import { Title, Hr, Highlight, Description } from './SectionHeader';

import Customer from './SectionCustomer';
import SaveTime from './SectionSaveTime';
import Carousel from 'components/Carousel';
import ContactusForm from 'containers/ContactForm';


import CommonButton from 'components/Button';

import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
import View from 'components/View'
import {
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
} from './components'

import text from './text'
import images from './assets/images'

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

   constructor(props){
     super(props);

     this.state = {
       imageActive: images.schedule
     }
   }

  componentDidMount() {
  }


  renderTarget() {
    const { target, invite, typistText } = text
    return (
      <Header>
        <HeaderTriangle></HeaderTriangle>
        <ViewLogo>
            <ImgReact src={images.logoReact} alt='React' className='react-logo'/>
            <ImgJavascript src={images.logoJavascript} alt='Javascript' className='javascript-logo'/>
            <ImgGraphql src={images.logoGraphql} alt='Shape' className='graphql-logo'/>
            <ImgRedux src={images.logoRedux} alt='Graphql' className='redux-logo'/>
            <ImgAnalytics src={images.logoAnalytics} alt='Analytics' className='analytics-logo'/>
            <ImgVirtual src={images.logoVirtual} alt='Virtual Reality' className='virtual-reality-logo'/>
            <ImgRedis src={images.logoRedis} alt='Redis' className='redis-logo'/>
            <ImgDocker src={images.logoDocker} alt='Docker' className='docker-logo'/>
            <ImgTablet src={images.logoTablet} alt='Tablet' className='tablet-logo'/>
            <ImgBabel src={images.logoBabel} alt='Babel' className='babel-logo'/>
            <ImgKotlin src={images.logoKotlin} alt='Kotlin' className='kotlin-logo'/>
        </ViewLogo>
        <ContainerZ>
          <ContainerSection>
            <P color='#2ac0aa'><Label>New</Label> {text.new}</P>
            <br />
            <H1><strong>{target}</strong></H1>
            <H2>{invite}</H2>
            <ViewTypist>
                <TypistLoop interval={2000}>
                {typistText.map(text =>
                    <Typist key={text.toString()} className='text-typist' avgTypingSpeed={15000} startDelay={1000} cursor={{
                      show: true
                    }}>
                      <div>
                        <P>{text}</P>
                      </div>
                    </Typist>
                )}
              </TypistLoop>
            </ViewTypist>
            <br />
            <CommonButton data-toggle="modal" data-target="#myModal">Start A Consult Session Free</CommonButton>
          </ContainerSection>
        </ContainerZ>
      </Header>
    )
  }

  renderServices() {
    const { services } = text;
    const {imageActive} = this.state;

    return (
      <ViewSection>
        <View center>
          <H1 center>{services.title}</H1>
          <Line />
          <SectionDescribe><Label>mobytelab.com</Label>{services.describe}</SectionDescribe>
        </View>
        <ViewServicesContent row>
          <ServicesLeft>
            { services.listItems.map((item, index) => (
              <ItemActive
                key={index}
                active={imageActive === item.image}
                onClick={ e => this.setState({imageActive: item.image})}
              >
                <ItemTitle >{item.title}</ItemTitle>
                <P>{item.describe}</P>
              </ItemActive>
            ))}
          </ServicesLeft>
          <ServicesRight>
            <img src={imageActive} alt='test' />
          </ServicesRight>
        </ViewServicesContent>

        <ViewPerformance row>
          { services.listItems1.map((item, index) => (
            <ViewItemPerformance key={index} center >
              <img src={images.shape} alt='high perfromance' />
              <ItemTitle>{item.title}</ItemTitle>
              <P>{item.describe}</P>
            </ViewItemPerformance>
          ))}
        </ViewPerformance>
      </ViewSection>
    )
  }

  renderApp() {
    const { buildApp } = text;
    return (
      <ViewSection>
        <View center>
          <View center>
            <H1>{buildApp.title}</H1>
            <Line />
            <SectionDescribe><Label>mobytelab.com</Label>{buildApp.describe}</SectionDescribe>
          </View>
          <ViewListItemApp wrap row>
            { buildApp.listItems.map((item, index) => (
              <ViewItem center key={index}>
                <ImgItem src={item.image} alt='media' />
                <ItemTitle>{item.title}</ItemTitle>
                <P>{item.describe}</P>
              </ViewItem>
            ))}
          </ViewListItemApp>
          <CommonButton data-toggle="modal" data-target="#myModal">Quick Start</CommonButton>
        </View>

        <ViewListItemProduct wrap row>
          <ViewContentProduct row>
            { buildApp.listItems1.map((item, index) => (
              <ViewItemProduct key={index}>
                <img src={item.image} alt='spaxtel' />
                <ViewProductDetail>
                  <ItemTitle>{item.title}</ItemTitle>
                  <P>{item.describe}</P>
                </ViewProductDetail>
              </ViewItemProduct>
            ))}
          </ViewContentProduct>
        </ViewListItemProduct>
      </ViewSection>
    )
  }

  renderFeature() {
    const { feature } = text

    return (
      <ViewFeature>
        <ViewHeaderFeature>
          <H1 color='white'>{feature.title}</H1>
          <Line />
        </ViewHeaderFeature>

        <View wrap row baseline>
          { feature.listItems.map((item, index) => (
            <ViewItem key={index}>
              <ImgItem src={item.image} alt='shape' />
              <ItemTitle color='white'>{item.title}</ItemTitle>
              <P color='#aaefeb'>{item.describe}</P>
            </ViewItem>
          ))}
        </View>
      </ViewFeature>
    )
  }


  render() {
    const { listLogo } = text;

    const { loading, error, response } = this.props;
    const reposListProps = {
      loading,
      error,
      response,
    };

    return (
      <article style={{ overflow: 'hidden'}}>
        <Helmet>
          <title>MOBYTELAB</title>
          <meta name="description" content="Build solution" />
        </Helmet>
        <div>
          { this.renderTarget() }
          <ViewSeparate />
          <ViewLogoImage row center wrap>
            {
              listLogo.map((item, index) => <ImgPayment src={item} key={index} />)
            }
          </ViewLogoImage>
          { this.renderServices() }
          { this.renderApp() }
          { this.renderFeature() }

          <section>
            <Customer>
              <Container>
                <Title><FormattedMessage {...messages.titleCustomer} /></Title>
                <Hr />
                <Description><FormattedMessage {...messages.des1Customer} /><Highlight><FormattedMessage {...messages.mobytelab} /></Highlight><FormattedMessage {...messages.des2Customer} /></Description>
                <Carousel />
              </Container>
              <section className='cross'></section>
            </Customer>

            <SaveTime>
              <Title><FormattedMessage {...messages.titleSaveTime} /></Title>
              <Hr />
              <Description><FormattedMessage {...messages.desSaveTime} /></Description>
              <div className='group-button'>
                <div className='start-free-button'>
                  <CommonButton style={{marginBottom: '20px'}} data-toggle="modal" data-target="#myModal"><FormattedMessage {...messages.buttonSaveTimeBuilding} /></CommonButton>
                </div>
                <div className='start-quick-button'>
                  <CommonButton white><FormattedMessage {...messages.buttonSaveTimeQuickStart} /></CommonButton>
                </div>
              </div>
            </SaveTime>

            <ContactusForm onSubmit={this.props.onSubmitForm} loading={this.props.loading} errMsg={this.props.error} response={this.props.response}/>
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  response: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (values) => {
      dispatch(createContact(values.toJS()));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  response: makeSelectResponse(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
