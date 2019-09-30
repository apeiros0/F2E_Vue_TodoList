<template>
  <div class="edit-todo-card mb-4">
    <div class="card-header bg-secondary px-4 py-3" :class="{ 'bg-warning': cacheTodo.stared }">
      <div class="d-flex align-items-center">
        <div class="d-flex">
          <i class="fas fa-edit icon-size text-primary mr-3"></i>
        </div>
        <div class="mb-0 w-100">
          <input type="text" class="form-control form-control-lg input-todo" placeholder="Add Task" v-model="cacheTodo.message">
        </div>
      </div>
    </div>
    <div class="card-body bg-secondary pt-4 pb-0">
      <div class="row justify-content-center">
        <div class="col-10">
          <form class="mb-4">
            <div class="form-row mb-4">
              <i class="far fa-calendar-alt pt-1"></i>
              <div class="col">
                <label for="inputDate" class="font-weight-bold h-0">
                  Deadline
                </label>
                <input type="date" class="form-control" placeholder="yyyy/mm/dd" id="inputDate" v-model="cacheTodo.startDate" />
              </div>
              <div class="col">
                <label for="inputTime" class="text-hidden">Deadline</label>
                <input type="date" class="form-control" placeholder="hh:mm" id="inputTime" v-model="cacheTodo.endDate" />
              </div>
            </div>
            <div class="form-row">
              <i class="far fa-comment-dots pt-1"></i>
              <div class="col">
                <label for="inputComment" class="font-weight-bold">Comment</label>
                <textarea
                  class="form-control textarea textarea-style"
                  id="inputComment"
                  rows="4"
                  placeholder="Type your memo here…"
                  v-model="cacheTodo.comments"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="card-btn row no-gutters">
      <div class="col-6 d-flex align-items-center">
        <button type="button" class="btn btn-light btn-block btn-lg btn-unstyle text-danger" @click="closeEditTodo">
          <span class="btn-icon mr-2">&times;</span>
          <span>Cancel</span>
        </button>
      </div>
      <div class="col-6">
        <button type="button" class="btn btn-primary btn-block btn-lg btn-unstyle" @click="updateTodo">
          <span class="btn-icon mr-2">&plus;</span>
          <span v-if="!isOld">Add Task</span>
          <span v-else>Update Task</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  data() {
    return {
      cacheTodo: {}, // 判斷是否有舊資料
      isOld: false,
    };
  },
  created() {
    // 判斷是否有舊資料
    if (this.todo) {
      this.isOld = true;
      this.cacheTodo = this.todo;
    } else {
      this.cacheTodo = {};
    }
  },
  methods: {
    updateTodo() {
      const self = this;
      let api = 'http://localhost:3000/todos';
      let method = 'post';
      const timeStamp = Math.floor(Date.now() / 1000);
      let todo = {
        ...self.cacheTodo, // 使用 解構 方式取出 cacheTodo 的所有值
        timeStamp,
        stared: false,
        completed: 'progress', // 切換頁籤用
      };
      // 透過 isOld 判斷舊資料
      if (self.isOld) {
        // 使用 put 更新舊資料
        api = `http://localhost:3000/todos/${self.cacheTodo.id}`;
        method = 'put';
        todo = { ...self.cacheTodo };
      }
      self.$http[method](api, todo).then((response) => {
        // JSON-Server 201 代表新增成功
        if (response.status === 201) {
          self.cacheTodo = {}; // 新增成功後，清空 cacheTodo
          self.closeEditTodo(); // 關閉 editTodo
        }
        // JSON-Server 200 代表 取得/修改 成功
        if (response.status === 200) {
          self.closeEditTodo();
        }
      });
    },
    closeEditTodo() {
      this.$emit('closeEditTodo');
      this.$emit('getTodos');
    },
  },
};
</script>

<style lang="scss"></style>
