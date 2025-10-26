import { Card } from '../Card/Card.js';

export function Products() {
  const div = document.createElement('div');
  div.classList = 'grid grid-cols-1 md:grid-cols-2 gap-4';
  div.innerHTML = Card();
  return div;
}
