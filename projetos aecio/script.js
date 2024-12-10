const tarefaInput = document.getElementById("tarefaInput");
const addBtn = document.getElementById("addBtn");
const listaDeTarefas = document.getElementById("listaDeTarefas");

addBtn.addEventListener("click", () => {
     if(tarefaInput.value) {
     criartarefa(tarefaInput.value);
    tarefaInput.value = "";
    tarefaInput.focus();
  } else {
    alert(!"digite uma tarefa valida");
    tarefaInput.focus();
  }
})

function criartarefa(Titulo) {
 const li = document.createElement("li")

  // Adicionar texto a uma tarefa
 const textodatarefa = document.createElement("spam");
 textodatarefa.innertext = titulo

 // Adicionar o checkbox
 const checkbox = document.createElement("input");
 checkbox.type = "checkbox";

 checkbox.addEventListener("change", ( => {
    // li.classList.toggle("completed", checkbox.checked)

        // if(checkbox.checked) {
        //     li.className = "completed";
        // } else {
        //     li.className = "";
        // }

        
    if(checkbox.checked) {
     li.classList.add("completed");
   }else {
    li.classList.remove("completed");
   }
})

 li.append(checkbox);
 li.append(textodatarefa) ;
 listaDeTarefas.append(li);
}
