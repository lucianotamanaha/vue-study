<template>
  <v-row>
    <v-col>
      <v-text-field label="First Name" filled :value="firstName" @input="nameChanged(true, $event)"></v-text-field>
    </v-col>
    <v-col>
      <v-text-field label="Last Name" filled :value="lastName" @input="nameChanged(false, $event)"></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    value: String
  },
  methods: {
    nameChanged(isFirst, event) {
      let name = '';
      if (isFirst) {
        name = event.target.value + ' ' + this.lastName;
      } else {
        name = this.firstName + ' ' + event.target.value;
      }
      this.value = name;
      this.$emit('input', this.value);
    }
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    }
  }
};
</script>