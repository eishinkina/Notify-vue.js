<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="notify__wrapper">
          <!-- title -->
          <div class="notify-title">
            <p>Notify App</p>
          </div>
          <!-- loading spinner -->
          <div v-if="loading" class="loading-section">
            <div class="loading-spinner"></div>
          </div>
          <!-- notify -->
          <div class="notify__content" v-if="!loading">
            <notify :messages="messages" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import notify from "@/components/Notify.vue";
import api from "@/api/api.json";
export default {
  components: {
    notify,
  },
  data() {
    return {
      loading: false,
      messages: [],
    };
  },
  mounted() {
    this.getNotify();
  },
  methods: {
    getNotify() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.messages = api.notify;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

.notify__wrapper {
  width: 400px;
  background-color: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 12px 22px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.notify__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
}

.notify-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  p {
    font-size: 24px;
    font-weight: 700;
    color: #000;
  }
}

.loading-spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  margin: auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
