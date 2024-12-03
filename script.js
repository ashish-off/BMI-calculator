const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        result.textContent = 'Please give valid height ';

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.textContent = 'Please give valid weight ';

    } else {
        const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
        result.innerHTML = `<span>  Your BMI is ${bmi}, </span>`;

        if (bmi < 18.6) {
            result.innerHTML += `<span> You are underweight</span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML += `<span> You are normal weight</span>`;
        } else {
            result.innerHTML += `<span> You are overweight</span>`
        }
    }

});
