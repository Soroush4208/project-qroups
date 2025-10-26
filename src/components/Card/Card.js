import { ProductsItems } from '../../constans/products';

export function Card() {
  const container = document.createElement('div');
  container.classList = 'grid grid-cols-2 md:grid-cols-3 gap-4 p-4';

  ProductsItems.forEach(element => {
    const card = document.createElement('div');
    card.classList =
      'w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 flex flex-col items-center';

    const img = document.createElement('img');
    img.classList = 'p-8 rounded-t-lg';
    img.src = element.src || 'https://via.placeholder.com/150';

    const titleProduct = document.createElement('h5');
    titleProduct.classList =
      'mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white';
    titleProduct.textContent = element.title;

    const priceProduct = document.createElement('p');
    priceProduct.classList =
      'mb-3 font-normal text-gray-700 dark:text-gray-400';
    priceProduct.textContent = `${element.price.toLocaleString()} تومان`;

    // مقدار تعداد
    const quantity = document.createElement('p');
    quantity.classList = 'text-gray-700 dark:text-gray-400 font-semibold';
    quantity.textContent = element.quantity;

    // دکمه افزایش
    const incBtn = document.createElement('button');
    incBtn.classList =
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
    incBtn.textContent = '+';

    // دکمه کاهش
    const decBtn = document.createElement('button');
    decBtn.classList =
      'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded';
    decBtn.textContent = '-';
    incBtn.addEventListener('click', () => {
      element.quantity++;
      quantity.textContent = element.quantity;
      console.log(`${element.title}: ${element.quantity}`);
    });

    decBtn.addEventListener('click', () => {
      if (element.quantity > 0) {
        element.quantity--;
        quantity.textContent = element.quantity;
        console.log(`${element.title}: ${element.quantity}`);
      }
    });
    const buttonGroup = document.createElement('div');
    buttonGroup.classList = 'flex gap-2 mt-2';
    buttonGroup.append(decBtn, incBtn);

    card.append(img, titleProduct, priceProduct, quantity, buttonGroup);
    container.append(card);
  });

  return container;
}

document.body.append(Card());
