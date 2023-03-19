const subscriptions = document.querySelectorAll('input[name="subscription"]');
const totalEl = document.getElementById('total');

// Listen for changes to the checkboxes
for (let i = 0; i < subscriptions.length; i++) {
    subscriptions[i].addEventListener('change', updateTotal);
    // console.log(subscriptions);
}

// let selectedCheckboxes = [];

// subscriptions.forEach(function(checkbox) {
//     checkbox.addEventListener('change', function() {
//       // If the checkbox is checked, add its value to the selectedCheckboxes array
//       if (this.checked) {
//         selectedCheckboxes.push(this.value);
//       } else {
//         // If the checkbox is unchecked, remove its value from the selectedCheckboxes array
//         const index = selectedCheckboxes.indexOf(this.value);
//         if (index !== -1) {
//           selectedCheckboxes.splice(index, 1);
//         }
//       }
  
//       // Log the selectedCheckboxes array to the console
//       console.log(selectedCheckboxes);
//     });
//   });

function updateTotal() {
    let total = 0;
    // Loop through each checkbox and add the cost if it's checked
    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].checked) {
            switch (subscriptions[i].value) {
                case 'music':
                    total += 19.99;
                    break;
                case 'tv':
                    total += 9.99;
                    break;
                case 'arcade':
                    total += 7.99;
                    break;
                case 'news':
                    total += 14.99;
                    break;
                case 'fitness':
                    total += 14.99;
                    break;
                case 'icloud-50':
                    total += 1.49;
                    break;
                case 'icloud-200':
                    total += 4.49;
                    break;
                case 'icloud-2000':
                    total += 14.99;
                    break;
            }
        }
    }

    // Update the total cost display
    totalEl.textContent = '$' + total.toFixed(2);
}



// const checkbox = document.querySelector('input[name="myCheckbox"]');
// const outputEl = document.getElementById('output');

// checkbox.addEventListener('change', function() {
//   if (this.checked) {
//     outputEl.textContent = 'Checkbox is checked: ' + this.value;
//   } else {
//     outputEl.textContent = '';
//   }
// });
