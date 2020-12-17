import styled from 'styled-components';

const FormSectionWrapper = styled.section`
  padding: 80px 0;
  overflow: hidden;
  @media (max-width: 990px) {
    padding: 40px 0 60px 0;
  }
`;

const FormInnerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 488px;
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 575px) {
    flex-direction: column;
    max-width: 100%;
  }

  .reusecore__input {
    flex: 1;
    margin-bottom: 10px;
    width: 100%;
    @media (max-width: 575px) {
      //
    }
    .field-wrapper {
      input {
        min-height: 45px;
      }
    }
    &.is-material {
      label {
        font-size: 14px;
        top: 14px;
        font-weight: 500;
        color: rgba(51, 61, 72, 0.4);
      }
      &.is-focus {
        label {
          top: -12px;
        }
      }
    }
    &.hdn {
      display: none;
    }
  }

  .reusecore__button {
    flex-shrink: 0;
    transition: all 0.3s ease;
    width: 100%;
    @media (max-width: 575px) {
      //
    }
    &:hover {
      box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);
    }
  }

  .reusecore__alert {
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }
`;

export { FormInnerDiv };

export default FormSectionWrapper;
