<template>
  <v-app>
    <v-app-bar app>
      <app-header></app-header>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-form v-if="!submitted">
          <full-name v-model="fullName"></full-name>
          <v-row>
            <v-col>
              <v-text-field label="email" filled v-model="email"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field label="Password" type="password" filled v-model="password"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-radio-group v-model="storeData">
                <v-radio label="Yes" value="Yes"></v-radio>
                <v-radio label="No" value="No"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-row class="mb-10">
            <v-btn
              type="submit"
              @click.prevent="submitted=true"
            >Submit the Form</v-btn>
          </v-row>
        </v-form>

        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Full Name:</v-list-item-title>
              <v-list-item-subtitle>{{ fullName }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>E-mail</v-list-item-title>
              <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>{{ password }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Store in database?</v-list-item-title>
              <v-list-item-subtitle>{{ storeData }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-container>
    </v-content>
    <v-footer>
      <app-footer></app-footer>
    </v-footer>
  </v-app>
</template>

<script>
import AppHeader from "./components/Shared/Header";
import AppFooter from "./components/Shared/Footer";
import FullName from "./FullName";

export default {
  name: "App",

  components: {
    AppHeader,
    AppFooter,
    FullName
  },

  data: () => {
    return {
      fullName: "Luciano Tamanaha",
      email: "",
      password: "",
      storeData: "",
      submitted: false,
    };
  }
};
</script>
