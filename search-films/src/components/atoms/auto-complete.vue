<template>
  <div class="d-flex align-center">
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" lg="3" xl="3">
        <v-autocomplete
          v-model="title"
          :items="items"
          outlined
          dense
          label="Search by movie"
        ></v-autocomplete>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  /**
   * A @component that handles search activities
   * @example <auto-complete />
   */
  name: "AutoComplete",

  data: () => ({
    title: "",
    items: [],
  }),
};
</script>
