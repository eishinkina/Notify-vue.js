<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="notify__wrapper">
          <!-- title -->
          <div class="notify-title">
            <p>Notify App</p>
            <svg
              @click="getNotify"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="20px"
              height="20px"
              cursor="pointer"
              x="0px"
              y="0px"
              viewBox="0 0 489.935 489.935"
              style="enable-background: new 0 0 489.935 489.935"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M278.235,33.267c-116.7,0-211.6,95-211.6,211.7v0.7l-41.9-63.1c-4.1-6.2-12.5-7.9-18.7-3.8c-6.2,4.1-7.9,12.5-3.8,18.7 l60.8,91.5c2.2,3.3,5.7,5.4,9.6,5.9c0.6,0.1,1.1,0.1,1.7,0.1c3.3,0,6.5-1.2,9-3.5l84.5-76.1c5.5-5,6-13.5,1-19.1 c-5-5.5-13.5-6-19.1-1l-56.1,50.7v-1c0-101.9,82.8-184.7,184.6-184.7s184.7,82.8,184.7,184.7s-82.8,184.7-184.6,184.7 c-49.3,0-95.7-19.2-130.5-54.1c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1c40,40,93.1,62,149.6,62 c116.6,0,211.6-94.9,211.6-211.7S394.935,33.267,278.235,33.267z"
                ></path>
              </g>
            </svg>
          </div>
          <!-- loading spinner -->
          <div v-if="loading" class="loading-section">
            <div class="loading-spinner"></div>
          </div>
          <!-- notify -->
          <div class="notify__content" v-if="!loading">
            <notify :messages="messagesFromStore" />
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
      localMessages: [], 
      messagesMain: [],
    };
  },
  computed: {
    messagesFromStore() {
      // Вычисляемое свойство для доступа к данным из хранилища
      return this.$store.getters.getMessageMain;
    },
  },
  mounted() {
    this.getNotify();
  },
  methods: {
    getNotify() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        let res = api.notify;
        this.localMessages = [];
        this.messagesMain = [];
        for (let i = 0; i < res.length; i++) {
          if (res[i].main) {
            this.messagesMain.push(res[i]);
          } else {
            this.localMessages.push(res[i]);
          }
        }

        this.$store.dispatch("setMessage", this.localMessages);
        this.$store.dispatch("setMessageMain", this.messagesMain);
      }, 500);
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
}

.notify-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;

  p {
    font-size: 24px;
    font-weight: 700;
    color: #000;
    margin: 0;
  }

  svg {
    margin-left: 10px;
  }
}

.notify__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
}

.loading-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
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
