let addTask = document.getElementById('addTask');

function adicionarTarefa(){
    let taskInput = document.getElementById('taskInput');
    let novaTarefa = taskInput.value;

    if(novaTarefa.trim() !== ''){
        let listaTarefas = document.getElementById('listaTarefas');
        let li = document.createElement('li');

        li.appendChild(document.createTextNode(novaTarefa));

        listaTarefas.appendChild(li);

        let botaoRemover = document.createElement('button');
        botaoRemover.appendChild(document.createTextNode('Remover'));
        botaoRemover.style.marginLeft = '10px';
        botaoRemover.style.backgroundColor = 'red';
        botaoRemover.onclick = function(){
            listaTarefas.removeChild(li);
        };

        li.appendChild(botaoRemover);
        listaTarefas.appendChild(li);

        taskInput.value = '';
    }
}

addTask.addEventListener('click', adicionarTarefa);


taskInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        adicionarTarefa();
    };
});
