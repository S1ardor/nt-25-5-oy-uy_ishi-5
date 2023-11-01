const contentBox = document.querySelector('.box');
const searchBar = document.getElementById('searchbar')
const countries = fetch('https://restcountries.com/v3.1/all');


function updateState() {
    contentBox.innerHTML = '';
    countries.then((response) => response.json()).then((countries) => {
        countries.forEach((country) => {

            const columns = document.createElement('div');
            columns.classList.add('col-lg-4')

            const column = document.createElement('div');
            column.classList.add('state')

            const col_region = document.createElement('div');
            col_region.classList.add('region')

            const col_capital = document.createElement('div');
            col_capital.classList.add('capital')

            const col_currencies = document.createElement('div');
            col_currencies.classList.add('currencies')

            const image = document.createElement('img');
            image.src = country.flags.png;

            const states = document.createElement('h3');
            states.textContent = country.name.common;

            const population = document.createElement('population');
            population.textContent = `Population: ${country.population.toLocaleString()}`;

            const region = document.createElement('region');
            region.textContent = `Region: ${country.region.toLocaleString()}`;

            const capital = document.createElement('caption');
            capital.textContent = `Capital: ${country.capital}`;

            const currencies = document.createElement('currencies');
            currencies.textContent = `Currencies: ${Object.keys(country.currencies).join(', ')}`;

            columns.appendChild(image);
            columns.appendChild(states);
            column.appendChild(population);
            col_region.appendChild(region);
            col_capital.appendChild(capital);
            col_currencies.appendChild(currencies);

            contentBox.appendChild(columns);
            columns.appendChild(column);
            columns.appendChild(col_region);
            columns.appendChild(col_capital);
            columns.appendChild(col_currencies);
        });
    }).catch((error) => console.log(error));
}
updateState();


// searchBar.addEventListener('input', () => {
//     filterState(searchBar.value);
// });

// function search_animal() {
//     let input = document.getElementById('searchBar').value
//     input = input.toLowerCase();
//     let x = document.getElementsByClassName('contentBox');

//     for (i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display = "none";
//         } else {
//             x[i].style.display = "block";
//         }
//     }
// }