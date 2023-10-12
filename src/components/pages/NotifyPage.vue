<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <!-- wrapper  -->
        <div class="notify__wrapper">
          <!-- title  -->
          <div class="notify-title">
            <p>Notify App</p>
            <!-- svg  -->
          </div>
          <!-- notify  -->
          <div class="notify__content">
            <notify :messages="messages" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import notify from "@/components/Notify.vue";
export default {
  components: {
    notify,
  },
  data() {
    return {
      messages: [
        {
          title: "Notify 1",
        },
        {
          title: "Notify 2",
        },
        {
          title: "Notify 3",
        },
        {
          title: "Notify 4",
        },
        {
          title: "Notify 5",
        },
        {
          title: "Notify 6",
        },
      ],
    };
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
  box-shadow: 0 12px 22px 0 rgba(0,0,0,.1);
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
</style>
