
function tarjimon() {
    var taskName = document.getElementById('taskName').value

    taskName = taskName.toLowerCase()

    if (taskName === 'apple') {
        document.getElementById('display').innerText = 'olma'
    }else if (taskName === 'cat') {
        document.getElementById('display').innerText = 'mushuk'
    }else if(taskName === 'car') {
        document.getElementById('display').innerText = 'moshina'
    }else{
         document.getElementById('display').innerText = 'so`z topilmadi!'
         document.getElementById('display').style.color='red'
    }

     document.getElementById('taskName').value=''
}