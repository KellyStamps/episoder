class Task {


  constructor(description, priority,completed) {
    description: this.description
    priority: this.priority
    completed: this.description
  }

  static renderTasks() {

    fetch('http://localhost:3000/tasks').then( response => response.json()).then( data => {
      const createTaskForm = document.getElementById("create-task-form")
      const taskContainer = document.getElementById('task-list')

      for (let i=0; i < data.length; i++) {

        let newD = new Task({description: `${data[i].description}`, priority: `${data[i].priority}`, completed: `${data[i].completed}`})
    
        debugger

        let taskBox = document.createElement('div')
        taskBox.innerHTML = `<h3>${this.description}</h3><ul><li>${this.priority}</li><li>Task Completed: ${this.completed}</li></ul>`
        taskBox.id = `small-task-${this.id}`
        //
        // let newNoteObj = {description: `${data[i].description}`, priority: `${data[i].priority}`, id: `${data[i].id}`, completed: `${data[i].completed}`}
        // localStore.push(newNoteObj)

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
}
