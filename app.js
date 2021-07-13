const formAdd = document.querySelector('[data-js="form-add"]');
const inputSearch = document.querySelector('[data-js="input-search"]');
const listTodos = document.querySelector('[data-js="ul-list"]');

const insertTodoHtmlInList = (todo) => {
  listTodos.innerHTML += `
    <li
            class="
              flex
              justify-between
              pr-2
              bg-white
              py-2
              pl-2
              shadow-sm
              border
              font-semibold
              text-normal
              rounded
              mb-1
              mt-1
            "
            >
            ${todo}
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-red-400 hover:text-red-600 delete"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </li>

  `;
};

const addTodo = (event) => {
  event.preventDefault();
  const todo = event.target.add.value.trim();
  if (todo.length) {
    insertTodoHtmlInList(todo);
    formAdd.reset();
  }
};

const deleteTodo = (event) => {
  const clickedElement = event.target;
  if (Array.from(clickedElement.classList).includes("delete")) {
    clickedElement.parentElement.remove();
  }
};

const filterTodo = (event) => {
  const inputValue = event.target.value.toLowerCase().trim();

  Array.from(listTodos.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach((todo) => {
      todo.classList.add("hidden");
    });

  Array.from(listTodos.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(inputValue))
    .forEach((todo) => {
      todo.classList.remove("hidden");
    });
};

formAdd.addEventListener("submit", addTodo);
listTodos.addEventListener("click", deleteTodo);
inputSearch.addEventListener("input", filterTodo);
