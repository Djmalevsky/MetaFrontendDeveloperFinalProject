import { initializeTimes, updateTimes } from './Main';
import { render, screen } from '@testing-library/react';

describe('Booking Form Reducer Functions', () => {

  test('initializeTimes should return correct initial times', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(initializeTimes()).toEqual(expectedTimes);
  });

  test('updateTimes should return the same value that is provided in the state', () => {
    const dummyCurrentTimes = ["dummy1", "dummy2"];
    const dummyAction = {};
    const result = updateTimes(dummyCurrentTimes, dummyAction);
    expect(result).toEqual(dummyCurrentTimes);
  });

});
describe('BookingPage Tests', () => {

test('Number of guests input is in between 1 and 10', () => {
  render(<BookingPage availableTimes={['12:00', '13:00']} dispatch={jest.fn()} />);

  const guestsInput = screen.getByLabelText('Number of guests:');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});
test('Name input field is not invalid text', () => {
  render(<BookingPage availableTimes={['12:00', '13:00']} dispatch={jest.fn()} />);
  const nameInput = screen.getByPlaceholderText('Enter name');
  expect(nameInput).toHaveAttribute('type', 'text');
});
});