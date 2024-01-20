// const button = document.getElementById('btn');

// button.addEventListener('mousemove', (event) => {
//   const cursorX = event.clientX;
//   const cursorY = event.clientY;

//   const buttonRect = button.getBoundingClientRect();
//   const buttonCenterX = buttonRect.left + buttonRect.width / 2;
//   const buttonCenterY = buttonRect.top + buttonRect.height / 2;

//   const offsetX = buttonCenterX - cursorX;
//   const offsetY = buttonCenterY - cursorY;

//   const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
//   const maxDistance = Math.sqrt(
//     (window.innerWidth / 2) * (window.innerWidth / 2) +
//       (window.innerHeight / 2) * (window.innerHeight / 2)
//   );

//   const repelX = (offsetX / distance) * 40; // Adjust the repelling strength here
//   const repelY = (offsetY / distance) * 40; // Adjust the repelling strength here

//   const randomZ = Math.random() * 40 - 20; // Adjust the 3D movement range here

//   button.style.transform = `translate3d(${repelX}px, ${repelY}px, ${randomZ}px)`;
// });

// button.addEventListener('mouseleave', () => {
//   button.style.transform = '';
// });

const button = document.getElementById('btn');
const overlay = document.createElement('span');
overlay.className = 'overlay';
overlay.textContent = 'Masti Nhi';

button.addEventListener('mousemove', (event) => {
  const cursorX = event.clientX;
  const cursorY = event.clientY;

  const buttonRect = button.getBoundingClientRect();
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  const offsetX = buttonCenterX - cursorX;
  const offsetY = buttonCenterY - cursorY;

  const distance = Math.sqrt(offsetX * offsetX + offsetY * offsetY);
  const maxDistance = Math.sqrt(
    (window.innerWidth / 2) * (window.innerWidth / 2) +
    (window.innerHeight / 2) * (window.innerHeight / 2)
  );

  const repelX = (offsetX / distance) * 40; // Adjust the repelling strength here
  const repelY = (offsetY / distance) * 40; // Adjust the repelling strength here

  const randomZ = Math.random() * 40 - 20; // Adjust the 3D movement range here

  button.style.transform = `translate3d(${repelX}px, ${repelY}px, ${randomZ}px)`;
});

button.addEventListener('mouseleave', () => {
  button.style.transform = '';
});

button.addEventListener('click', () => {
  button.appendChild(overlay);
  setTimeout(() => {
    button.removeChild(overlay);
  }, 1500); // Adjust the duration (in milliseconds) the overlay is shown here
});

const button = document.getElementById('btn');
const overlay = document.createElement('span');
overlay.className = 'overlay';

button.addEventListener('mousemove', (event) => {
  // Existing code for repelling effect
});

button.addEventListener('mouseleave', () => {
  // Existing code for resetting position
});

button.addEventListener('click', () => {
  button.textContent = 'Masti Nhi';
  button.classList.add('button-expanded');
});

