document.addEventListener("DOMContentLoaded", function () {
  renderTasks()

  const localStore = [];
  const createTaskForm = document.getElementById("create-task-form")
  const taskContainer = document.getElementById('task-list')

  let createTaskData = function(event) {
    return {
      description: event.target.description.value,
      priority: event.target.priority.value,
      completed: event.target.completed.value
    }
  }

  createTaskForm.addEventListener("submit", function(event) {
    event.preventDefault()
    createTask(createTaskData(event))
  })

  function createTask (taskData) {
      fetch('http://localhost:3000/tasks',
      {
        method: "POST",
        body: JSON.stringify(taskData),
        headers: {
          "Accept": "application/json",
          'Content-Type': "application/json"
        }
      }).then(response => response.json()).then( data => {
        renderTasks()
        createTaskForm.reset()
      })
    }

    function renderTasks() {

      fetch('http://localhost:3000/tasks').then( response => response.json()).then( data => {

        for (let i=0; i < data.length; i++) {

          let taskBox = document.createElement('div')
          taskBox.innerHTML = `<h3>${data[i].description}</h3><ul><li>${data[i].priority}</li><li>Task Completed: ${data[i].completed}</li></ul>`
          taskBox.id = `small-task-${data[i].id}`

          let newNoteObj = {description: `${data[i].description}`, priority: `${data[i].priority}`, id: `${data[i].id}`, completed: `${data[i].completed}`}
          localStore.push(newNoteObj)

          let editButton = document.createElement('button')
          editButton.innerText = 'Edit'
          editButton.addEventListener('click', function(event) {
            let editId = event.target.parentElement.id.slice(11)
            editTask(editId)
          })
          taskBox.append(editButton)

          let deleteButton = document.createElement('button')
          deleteButton.innerText = 'Delete'
          deleteButton.addEventListener('click', function(event) {
            let deleteId = event.target.parentElement.id.slice(11)
            deleteTask(deleteId)
          })
          taskBox.append(deleteButton)

          taskContainer.appendChild(taskBox)
        }
      })
    }

    function editTask(editId) {
      taskContainer.innerHTML = ''

      let selectedTask = localStore.find(task => {
        return task.id === editId
      })

      let editForm = document.createElement('form')
      editForm.innerHTML = `<input type="text" id='description' value="${selectedTask.description}"></input> <br>
      <input type="text" id='priority' value="${selectedTask.priority}"></input><br>
      <input type="checkbox" id='completed'>Completed?</input><br><br>
      <input id='button' type="submit"></input>`
      taskContainer.append(editForm)

      editForm.addEventListener('submit', function(event) {
        event.preventDefault()
        fetch(`http://localhost:3000/tasks/${editId}`, {
          method: 'PATCH',
          headers:
          {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(createTaskData(event))
        }).then(response => response.json()).then(data => {
          taskContainer.innerHTML = ''
          renderTasks()
        })
      })
    }

    function deleteTask(deleteId) {
      fetch(`http://localhost:3000/tasks/${deleteId}`, {
        method: 'DELETE'
      }).then(res => {
        taskContainer.innerHTML = ''
        renderTasks()
      })

    }









}) //close of whole function
