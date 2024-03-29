import { Component } from 'react';
import styled from 'styled-components';
import Notiflix from 'notiflix';

const SearchbarWrapper = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: pink;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://freesvg.org/img/1534454136.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

class Searchbar extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  handleChange = evt => {
    this.setState({ query: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.query.trim() === '') {
      Notiflix.Notify.warning('Please, fill in the field!');
      return;
    }
    this.props.submit(this.state);
  };

  render() {
    return (
      <SearchbarWrapper>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit"></SearchFormButton>
          <SearchInput
            type="text"
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarWrapper>
    );
  }
}

export default Searchbar;
