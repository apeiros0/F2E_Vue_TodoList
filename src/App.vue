<template>
  <div id="app">
    <nav class="nav-todo bg-primary mb-3">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="nav-todo-item text-center" :class="{ 'active': completed === 'all' }">
              <a href="#" class="nav-todo-item-link py-4" @click.prevent="completed = 'all'">My Tasks</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="nav-todo-item text-center" :class="{ 'active': completed === 'progress' }">
              <a href="#" class="nav-todo-item-link py-4" @click.prevent="completed = 'progress'">In Progress</a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="nav-todo-item text-center" :class="{ 'active': completed === 'completed' }">
              <a href="#" class="nav-todo-item-link py-4" @click.prevent="completed = 'completed'">Completed</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="input-todo-group mb-3" v-if="!isNewTodo" @click="isNewTodo = true">
        <div class="input-prepend d-flex align-items-center justify-content-center">
          <i class="fas fa-plus-circle"></i>
        </div>
        <input type="text" class="input-todo pl-6" placeholder="Add Task" />
      </div>
      <EditTodo v-if="isNewTodo" @closeEditTodo="closeEditTodo" @getTodos="getTodos"></EditTodo>
      <draggable v-model="todos" @end="dragItem" handle=".icon-draggable">
        <template v-for="item in todos" >
          <TodoItem :key="item.id" :todo="item" :completed="completed" @getTodos="getTodos" @updateTodo="updateTodo" v-if="item.id !== cacheTodo.id"></TodoItem>
          <EditTodo @closeEditTodo="closeEditTodo" @getTodos="getTodos" :todo="cacheTodo" v-else :key="item.timeStamp"></EditTodo>
        </template>
      </draggable>
      <i class="processing-tasks d-block pl-4" v-if="completed === 'progress' || completed === 'all'">{{ getStatusNum }} tasks left</i>
      <i class="processing-tasks d-block pl-4" v-else>{{ todos.length - getStatusNum }} tasks completed</i>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import EditTodo from './components/EditTodo.vue';
import TodoItem from './components/TodoItem.vue';

export default {
  name: 'app',
  data() {
    return {
      todos: [],
      isNewTodo: false,
      sort: [],
      cacheTodo: {}, // 暫存舊資料
      completed: 'all',
    };
  },
  created() {
    this.getTodos();
  },
  methods: {
    closeEditTodo() {
      // 透過 isNewTodo 來關閉 editTodo
      this.isNewTodo = false;
      this.cacheTodo = {};
    },
    // 取得 todos
    getTodos() {
      const self = this;
      const api = 'https://intense-citadel-09458.herokuapp.com/todos';
      let todoArray = [];
      let sortArray = [];
      self.$http.get(api).then((response) => {
        // 取得 todo 資料
        todoArray = [...response.data];
        return self.$http.get('https://intense-citadel-09458.herokuapp.com/sort');
      }).then((response) => {
        // 取得 sort 資料
        sortArray = [...response.data.sort];

        // 判斷 sortArray 有沒有排序資料 (避免 push 多筆到 self.todos)
        // 有則做排序，沒有則 push 原本的資料
        if (sortArray.length !== 0) {
          // 透過 sortArray 找出對應的 todo 資料
          // 過濾會重複加入的資料
          const todoSet = new Set();
          const todoStarSet = new Set();
          sortArray.forEach((item) => {
            const todo = todoArray.find(todoItem => item === todoItem.id);
            // 透過兩個 Set 分別加入有 star 和 沒有 star (兩個 Set 同樣都會排序)
            if (todo.stared) {
              todoStarSet.add(todo);
            } else {
              todoSet.add(todo);
            }
            // 合併有 star 和 沒有 star 的 array
            self.todos = [...Array.from(todoStarSet).concat(Array.from(todoSet))];
          });

          // 由於已經有 sortArray 的資料，
          // 但後來加入的 todo 會沒有排序 Id，無法加入到 todos 中
          // 因此需要加入該筆資料到 todos 中
          todoArray.forEach((item) => {
            // some (部分資料符合) / every (需全部資料符合) 會回傳符合條件的 Boolean
            // 透過 some 比對
            const hasTodo = sortArray.some(sortItem => sortItem === item.id);
            // sortArray 沒有該排序資料，需加入該筆資料
            if (!hasTodo) {
              self.todos.push(item);
            }
          });
        } else {
          self.todos = [...todoArray];
        }
      });
    },
    dragItem() {
      const self = this;
      const api = 'https://intense-citadel-09458.herokuapp.com/sort';
      // 取得排序順序
      const sort = self.todos.map(item => item.id);
      // todos.json 的 sort 是使用 object 的方式呈現 (每次都會只有 sort 一筆的值)
      // post 使用 { ... } 方式上傳，每次更新 sort 都會被取代
      self.$http.post(api, { sort }).then(() => {});
    },
    updateTodo(todo) {
      this.cacheTodo = { ...todo };
    },
  },
  computed: {
    getStatusNum() {
      return this.todos.filter(item => item.completed === 'progress').length;
    },
  },
  components: {
    EditTodo,
    TodoItem,
    draggable,
  },
};
</script>

<style lang="scss">
@import './assets/all.scss';
</style>
