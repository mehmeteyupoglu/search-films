<template>
  <v-snackbar bottom dark v-model="content.model" :timeout="content.timeout"
    >{{ content.text }}
    <v-btn
      text
      :href="content.path"
      target="_blank"
      class="subtitle-2 mx-0 px-0 py-0 my-0"
    >
      <strong>{{ content.strong }}</strong></v-btn
    >
  </v-snackbar>
</template>

<script>
export default {
  /**
   * A @component that produces a snackbar with additional functionality
   * accepts a content object as props
   * @example <snackbar :content="content"></snackbar>
   */
  name: "CustomSnackbar",
  props: {
    /**
     * The content that helps customize snackbar
     * @property: timeout, model, text, path, strong
     */
    content: {
      type: Object,
      default() {
        return {
          timeout: "-1",
          model: false,
          text: "Don't forget to read the",
          path: "/",
          strong: "documentation",
        };
      },
    },
  },
  data: () => ({}),
};
</script>
