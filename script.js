document.getElementById('formulario').addEventListener('submit', function(event) {
    
    event.preventDefault();

    // Obtém os valores de peso e altura
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Verifica se os valores são válidos
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Calcula o IMC
    const bmi = (weight / (height * height)).toFixed(2);

    // Atualiza o IMC na tela
    document.getElementById('value').textContent = bmi;

    // Determina a descrição com base no valor do IMC
    let description = '';
    if (bmi < 18.5) {
        description = 'Perigo, você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        description = 'Você está com o peso ideal!';
    } else if (bmi >= 25 && bmi < 29.9) {
        description = 'Você está acima do peso!';
    } else {
        description = 'Obesidade. Procure um médico para orientação!';
    }

    // Atualiza a descrição na tela
    document.getElementById('description').textContent = description;

    // Torna o elemento 'infos' visível
    document.getElementById('infos').classList.remove('hidden');
});
