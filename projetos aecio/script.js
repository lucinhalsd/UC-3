const tarefaInput = document.getElementById("tarefaInput");
const addBtn = document.getElementById("addBtn");
const listaDeTarefas = document.getElementById("listaDeTarefas");

addBtn.addEventListener("click", () => {
    let valordoinput = tarefainput.value;
    if(valorDoInput) {
      criarTarefa(valorDoInput);
      tarefaInput.value = "";
      tarefaInput.focus();
  } else {
      alert("Digite uma tarefa válida!");
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

 const removebtn = document.createElement("button");
 removeBtn.innerHTML = "<strong>🗑</strong>"
 removebtn.addEventListener("click", () => {
   listaDeTarefas.removeChild(li)
 });

 const divFlexLi = document.createElement("div");
 divFlexLi.append(checkbox);
 divFlexLi.append(textoDaTarefa);


 li.append(checkbox);
 li.append(textodatarefa) ;
 li.append(removebtn);
 listaDeTarefas.append(li);
}

tarefaInput.addEventListener("keydown", (event) => {
  if(event.key === "Enter") {
    addBtn.click();
  }
})