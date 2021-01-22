// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', (e) => {
    console.log('dom loaded!');
  
    const completedContainer = document.getElementById('classes-completed');
      
    // Inital arrays for classes needed and completed
    let completed = [];
      
    // This function resets the classes displayed with updates for classes from the database
    const initializeRowsCompleted = () => {
      completedContainer.innerHTML = '';
      const rowsToAdd = [];
      for (let i = 0; i < completed.length; i++) {
        rowsToAdd.push(createNewRowCompleted(completed[i]));
      }
      rowsToAdd.forEach((row) => completedContainer.prepend(row));
    };
  
    // Helper function to grab classes
    const getCompleted = () => {
      fetch('/api/complete', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success in getting completed classes:', data);
          completed = data;
          console.log(completed);
          initializeRowsCompleted();
        });
    };
  
    getCompleted();
        
    // Construct a completed class-item row
    const createNewRowCompleted = (course) => {
      // Containing row
      const newInputRow = document.createElement('li');
      newInputRow.classList.add('list-group-item', 'completed-item');
      newInputRow.setAttribute('complete', course.complete);
  
      // Span
      const rowSpan = document.createElement('span');
      rowSpan.innerText = `${course.course_name} (${course.credits} Credits)`;
  
      // Input field
      const rowInput = document.createElement('input');
      rowInput.setAttribute('type', 'text');
      rowInput.classList.add('edit');
      rowInput.style.display = 'none';
  
      // Append all items to the row
      newInputRow.appendChild(rowSpan);
      newInputRow.appendChild(rowInput);
      
      return newInputRow;
    };

  });