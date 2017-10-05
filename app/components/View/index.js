import styled from 'styled-components'

const View = styled.div`
  display: flex;
  flex-direction: ${ ({row}) => row ? 'row' : 'column' };
  align-items: ${ props => {
    if ( props.center ) {
      return 'center';
    }
    if ( props.end ) {
      return 'flex-end'
    }
    if ( props.baseline ) {
      return 'baseline'
    }
    return 'flex-start';
  }};
  flex-wrap: ${ ({wrap}) => wrap ? 'wrap' : 'inherit'};
`;

export default View;
