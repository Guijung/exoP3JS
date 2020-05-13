const button = document.querySelector('button');

button.onclick = function() {
  const newLocal = 'Quel est votre nom ?';
  let name = prompt(newLocal);
  alert('Salut ' + name + ', sympa de vous voir !');
}