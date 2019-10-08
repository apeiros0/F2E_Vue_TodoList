<template>
  <!-- 使用 v-if 判斷 completed 狀態，
       使用 completedStatus 判斷 todo 裡的狀態，
       completed 是點擊 navbar 後的狀態，(兩者相等能過濾資料)
       completed === 'all' 是當不等於 progress 和 completed 狀態時顯示全部資料
  -->
  <div class="nav-item bg-secondary" v-if="completed === completedStatus || completed === 'all'">
    <span class="icon-draggable ml-1 d-flex align-items-center"
      ><i class="fas fa-ellipsis-v"></i
    ></span>
    <div class="mb-2 px-4 py-3" :class="{ 'bg-warning': todo.stared }">
      <div class="d-flex align-items-end">
        <label class="todo-checkbox-group mr-3">
          <input type="checkbox" class="todo-checkbox" :id="todo.timeStamp" v-model="isChecked" @change="updateTaskStatus" />
          <span class="todo-checkbox-mark"></span>
        </label>
        <label class="todo-title mb-0" :for="todo.timeStamp" :class="{ active: isChecked }">
          {{ todo.message }}
        </label>
        <div class="ml-auto">
          <a href="#" @click.prevent="updateStar">
            <i class="far fa-star icon-size text-dark" v-if="!todo.stared"></i>
            <i class="fas fa-star text-info icon-size" v-else></i>
          </a>
          <a href="#" @click.prevent="updateTodo">
            <i class="far fa-edit icon-size text-dark ml-4"></i>
          </a>
        </div>
      </div>
      <p class="icon-info mt-3 mb-0">
        <span class="mr-3">
          <i class="far fa-calendar-alt pt-1"></i>
          <span class="ml-2" v-if="todo.startDate">{{ todo.startDate }} - {{ todo.endDate }}</span>
        </span>
        <i class="far fa-comment-dots pt-1" v-if="todo.comments"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo', 'completed'],
  data() {
    return {
      isChecked: this.todo.completed === 'completed',
      completedStatus: this.todo.completed,
    };
  },
  methods: {
    updateStar() {
      const self = this;
      // put 是先取得 id 再做 put 行為
      const api = `https://intense-citadel-09458.herokuapp.com/todos/${self.todo.id}`;
      const cacheTodo = { ...self.todo };
      cacheTodo.stared = !cacheTodo.stared;
      // put 是用覆蓋的方式將資料更新
      self.$http.put(api, cacheTodo).then(() => {
        self.$emit('getTodos');
      });
    },
    // 透過 item 的 edit icon 觸發 updateTodo
    updateTodo() {
      // 發送事件到 App.vue
      this.$emit('updateTodo', this.todo);
    },
    updateTaskStatus() {
      const self = this;
      // put 是先取得 id 再做 put 行為
      const api = `https://intense-citadel-09458.herokuapp.com/todos/${self.todo.id}`;
      const cacheTodo = { ...self.todo };
      if (this.isChecked) {
        self.completedStatus = 'completed';
      } else {
        self.completedStatus = 'progress';
      }
      cacheTodo.completed = self.completedStatus;
      // put 是用覆蓋的方式將資料更新
      self.$http.put(api, cacheTodo).then(() => {
        self.$emit('getTodos');
      });
    },
  },
};
</script>

<style lang="scss"></style>
