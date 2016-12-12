const inputs = document.querySelectorAll('.controls input');

function handleUpdate(el) {
	console.log(el);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
