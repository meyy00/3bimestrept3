function getNumbersFromUser() {
  const numbers = [];
  for (let i = 0; i < 7; i++) {
      const input = prompt(`Digite o número ${i + 1}:`);
      const number = parseFloat(input);
      if (!isNaN(number)) {
          numbers.push(number);
      } else {
          alert("Por favor, insira um número válido.");
          i--; // Decrementa o índice para repetir a entrada
      }
  }
  return numbers;
}

// Função para inverter o array
function reverseArray(array) {
  return array.slice().reverse(); // Cria uma cópia e inverte
}

// Função para exibir o array na página
function displayArrays() {
  const numbers = getNumbersFromUser();
  const reversedNumbers = reverseArray(numbers);

  document.getElementById("original-array").textContent = `Array Original: ${numbers.join(", ")}`;
  document.getElementById("revertido-array").textContent = `Array Invertido: ${reversedNumbers.join(", ")}`;
}

// Exibe os arrays ao carregar a página
window.onload = displayArrays;