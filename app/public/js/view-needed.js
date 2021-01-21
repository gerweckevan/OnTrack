// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', (e) => {
    console.log('dom loaded!');
  
    const neededContainer = document.getElementById('classes-needed');
    const completedContainer = document.getElementById('classes-completed');
          
    // Inital arrays for classes needed and completed
    let needed = [];
    let completed = [];
      
    // This function resets the classes displayed with updates for classes from the database
    const initializeRows = () => {
      neededContainer.innerHTML = '';
      const rowsToAdd = [];
      for (let i = 0; i < needed.length; i++) {
        rowsToAdd.push(createNewRow(needed[i]));
      }
      rowsToAdd.forEach((row) => neededContainer.prepend(row));
    };

    const initializeRowsCompleted = () => {
      completedContainer.innerHTML = '';
      const rowsToAdd = [];
      for (let i = 0; i < completed.length; i++) {
        rowsToAdd.push(createNewRowCompleted(completed[i]));
      }
      rowsToAdd.forEach((row) => completedContainer.prepend(row));
    };
  
    // Helper function to grab classes
    const getNeeded = () => {
      fetch('/api/incomplete', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success in getting needed classes:', data);
          needed = data;
          console.log(needed);
          initializeRows();
        });
    };

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

    getNeeded();
    getCompleted();
      
    // Helper function to delete a class
    const deleteCourse = (e) => {
      e.stopPropagation();
      const { id } = e.target.dataset;
  
      fetch(`/api/courses/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(getNeeded);
    };

    // Update a course status (PUT)
    const updateCourse = (course) => {
      // e.stopPropagation();
      // const { id } = e.target.dataset;

      console.log('attempting to update with', course);
      fetch(`/api/courses`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(course),
      }).then((response) => {
        console.log(response)
        getNeeded();
        getCompleted();
      });
    };
    
    // Construct a needed class-item row
    const createNewRow = (course) => {
      // Containing row
      const newInputRow = document.createElement('li');
      newInputRow.classList.add('list-group-item', 'needed-item');
      newInputRow.setAttribute('complete', course.status);
  
      // Span
      const rowSpan = document.createElement('span');
      rowSpan.innerText = `${course.course_name} \n Credits: ${course.credits} \n Pre-Req: ${course.pre_req}   `;
  
      // Input field
      const rowInput = document.createElement('input');
      rowInput.setAttribute('type', 'text');
      rowInput.classList.add('edit');
      rowInput.style.display = 'none';
  
      // Delete button
      const delBtn = document.createElement('button');
      delBtn.classList.add('delete', 'btn', 'btn-danger');
      delBtn.setAttribute('data-id', course.id);
      rowInput.setAttribute('data-id', course.id);
      delBtn.innerText = 'x';
      delBtn.addEventListener('click', deleteCourse);
  
      // Complete button
      const completeBtn = document.createElement('button');
      completeBtn.classList.add('complete', 'btn', 'btn-primary');
      completeBtn.innerText = '✓';
      completeBtn.setAttribute('data-id', course.id);
  
      completeBtn.addEventListener('click', toggleComplete);
  
      // Append all items to the row
      newInputRow.appendChild(rowSpan);
      newInputRow.appendChild(rowInput);
      // newInputRow.appendChild(delBtn);
      newInputRow.appendChild(completeBtn);
  
      if (course.status) {
        rowSpan.style.textDecoration = 'line-through';
      }
  
      return newInputRow;
    };

    // Construct a completed class-item row
    const createNewRowCompleted = (course) => {
      // Containing row
      const newInputRow = document.createElement('li');
      newInputRow.classList.add('list-group-item', 'completed-item');
      newInputRow.setAttribute('complete', course.status);
  
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
  
    const toggleComplete = (e) => {
      e.stopPropagation();
      const spanEl = e.target.parentNode.children[0];
      const currentCourse = {
        text: e.target.parentNode.children[0].innerText,
        status: false,
        id: e.target.dataset.id,
      };
      currentCourse.status = !currentCourse.status;
      spanEl.style.textDecoration = 'line-through';
      updateCourse(currentCourse);
      console.log('toggleComplete -> currentCourse', currentCourse);
    };
  
  });