const container = document.querySelector('.container');
const seats = document.querySelectorAll('row .seat:not(.Occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = parseInt(movieSelect.value);

//Update total count of selected seats 
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.Selected');
    const selectedSeatsCount = selectedSeats.length;
    // console.log(selectedSeatsCount);
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//event listener on seats 
container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('Occupied')) {
        // console.log(e.target);
        e.target.classList.toggle('Selected');

        updateSelectedCount();
    }
});

//Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = parseInt(e.target.value);
    updateSelectedCount();
})