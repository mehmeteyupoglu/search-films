<template>
  <div class="d-flex align-center">
    <h2>
      {{ content.title }}
    </h2>
  </div>
</template>

<script>
export default {
  /**
   * A @component that produces a logo
   * accepts a content object as props
   * @example <logo :content="logoContent" />
   */
  name: "Logo",
  /**
   * The content that helps customize logo
   * @property: title
   */
  props: {
    content: {
      type: Object,
      default() {
        return {
          title: "Film DB",
        };
      },
    },
  },
  data: () => ({}),
};
</script>
