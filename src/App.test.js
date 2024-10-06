import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/Forms/BookingForm';
import Reservation from './Pages/Reservation';

test('render Booking Form', () => {
  render(<Reservation />)
  const input = screen.getByLabelText('Choose date')
  const prevoistimes = screen.getByLabelText('Choose time').textContent
  fireEvent.change(input, {target: {value: '1/1/2023'}})
  const resutlTimes  = screen.getByLabelText('Choose time')
  console.log(resutlTimes.textContent)
  expect(resutlTimes.textContent).not.toEqual(prevoistimes)

}

);

test('test the submit', () => {
  render(<Reservation />)
  const input = screen.getByText('Make Your reservation')
  input.click()
  const confirmation =  screen.findByText('sfsdfsdf')
  expect(confirmation).resolves.toBeInTheDocument()
  console.log(confirmation.textContent)
  
  // expect(screen.getAllByText('Congratulations')[0]).toBeInTheDocument()
  // const prevoistimes = screen.getByLabelText('Choose time').textContent
  // fireEvent.change(input, {target: {value: '1/1/2023'}})
  // const resutlTimes  = screen.getByLabelText('Choose time')
  // console.log(resutlTimes.textContent)
  // expect(resutlTimes.textContent).not.toEqual(prevoistimes)

})

