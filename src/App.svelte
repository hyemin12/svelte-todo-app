<script>
  import CreateTodo from '~/components/CreateTodo'
  import Todo from '~/components/Todo'
  import { todos } from '~/store'

  // 페이지 새로고침 하거나, 새로 접근할 때 todos 데이터가 있으면, 스토어 객체 갱신
  // JSON.parse 문자화 되었던 데이터를 원래 데이터로 만듬
  const storageTodos = localStorage.getItem('todos')
  if(storageTodos) {
    $todos = JSON.parse(storageTodos)
  }
</script>

<div class="container">
    <CreateTodo />
    <div class="todos">
      {#each $todos as todo (todo.id)}
        <Todo {todo} />
      {/each}
    </div>
</div>

<style lang="scss">
  .todos {
    padding: 20px 0;
  }
</style>