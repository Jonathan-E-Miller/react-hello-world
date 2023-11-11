import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // The render function returns an object with many properties, one of which
  // is 'container'. The brackets are destructuring the object, so we only get
  // the container property. 
  var {container} = render(<App />);

  var elements = container.getElementsByClassName("square");
  expect(elements.length).toBeGreaterThan(1);
});
