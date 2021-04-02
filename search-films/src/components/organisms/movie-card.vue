<template>
  <v-card class="mx-auto my-12" width="350">
    <v-img height="350" :src="image"></v-img>

    <v-card-title class="my-0">
      {{ movie.Title }} -- {{ movie.Year }}
    </v-card-title>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="d-flex justify-end align-items-end">
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    /**
     * The component that helps render products in a nice-looking card
     * @property: Title, Id, Poster, Year
     */
    movie: {
      type: Object,
      default() {
        return {
          Title: "Movie",
          Id: "",
          Year: null,
          Poster: "",
        };
      },
    },
  },
  data: () => ({
    loading: false,
    noImage:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
  }),
  computed: {
    image() {
      const img = this.movie.Poster;
      if (!img || img === "N/A") {
        return "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
      } else {
        return img;
      }
    },
  },
};
</script>
