import React from 'react';
import App from '../../../App';

import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';

describe('Should render all tests in App', () => {
  const tree = renderer.create(<App />).toJSON();

  test('Should run snapshot test', () => {
    expect(tree).toMatchSnapshot();
  });

  test('Should Create an item', () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const input = getByPlaceholderText('Write something');
    const button = getByText('+');

    const createdItemText = 'first todo';

    fireEvent.changeText(input, createdItemText);
    fireEvent.press(button);

    const createdItem = getByText(createdItemText);
    //expect(createdItem).not.toBeNull();
    expect(createdItem).not.toBe(null);
  });

  test('Should Create an item through getByTestID', () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<App />);

    const input = getByPlaceholderText('Write something');
    const button = getByTestId('btnTodo');

    const createdItemText = 'first todo';

    fireEvent.changeText(input, createdItemText);
    fireEvent.press(button);

    const createdItem = getByText(createdItemText);
    //expect(createdItem).not.toBe(null);
    expect(createdItem).not.toBeNull();
  });

  test('Should create multiple items', () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<App />);

    const input = getByPlaceholderText('Write something');
    const button = getByTestId('btnTodo');

    const createdItemText = 'first todo';
    const createdItemTextSecond = 'second todo';

    fireEvent.changeText(input, createdItemText);
    fireEvent.press(button);

    fireEvent.changeText(input, createdItemTextSecond);
    fireEvent.press(button);

    const createdItem = getByText(createdItemText);
    const createdItemSecond = getByText(createdItemTextSecond);

    expect(createdItem).not.toBeNull();
    expect(createdItemSecond).not.toBeNull();
  });

  test('Should delete an item', () => {
    const { getByText, queryByText, getByTestId, getByPlaceholderText } =
      render(<App />);

    const input = getByPlaceholderText('Write something');
    const button = getByTestId('btnTodo');

    const createdItemText = 'first todo';

    fireEvent.changeText(input, createdItemText);
    fireEvent.press(button);

    const buttonDelete = getByText('X');
    fireEvent.press(buttonDelete);

    const deleteItem = queryByText(createdItemText);

    expect(deleteItem).toBeNull();
    //expect(deleteItem).toBe(null);
  });

  test('Should show an error when trying to create an item without text', () => {
    const { getByText, getByTestId } = render(<App />);

    const button = getByTestId('btnTodo');
    fireEvent.press(button);

    const createdItemText = 'Please insert a valid text';
    const errorMessage = getByText(createdItemText);

    expect(errorMessage).not.toBeNull();
  });

  test('Should remove the error message after creating a valid item', () => {
    const { queryByText, getByTestId, getByPlaceholderText } = render(<App />);

    const createdItem = 'first todo';
    const createdItemErrorMessage = 'Please insert a valid text';

    const input = getByPlaceholderText('Write something');
    const button = getByTestId('btnTodo');

    fireEvent.press(button);

    fireEvent.changeText(input, createdItem);
    fireEvent.press(button);

    const errorMessage = queryByText(createdItemErrorMessage);

    expect(errorMessage).toBeNull();
    //expect(queryByText(createdItemErrorMessage)).toBe(null);
  });
});
