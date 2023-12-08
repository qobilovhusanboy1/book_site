import { createStore } from "vuex";
import axios from "axios";
import router from "../router";
import { errorToast, successToast } from "../utils/toast";
import { RT_HOME, RT_LOGIN, RT_DASHBOARD,RT_ADMINVIEW } from "../constants/routeNames";

const url = import.meta.env.VITE_BASE_URL;

const store = createStore({
  state: {
    user: {},
    products: [],
    loading: false,
  },

  getters: {
    products: (state) => state.products,
  },

  actions: {
    async  login({ commit }, payload) {
      try {
        const res = await axios.post(url + "api/login", payload);
        if (!res.data?.token && res.status !== 200) {
          errorToast("Something went wrong!");
          return;
        }
        commit("SET_TOKEN", res.data.token);
        commit("SET_USER", res.data);
        localStorage.setItem("user", JSON.stringify(res.data))
        if(res.data.person.is_admin){
          successToast("Admin logged in!");
          router.push({ name: RT_DASHBOARD });
        }else{
          successToast("User logged in!");
          router.push({ name: RT_HOME });
        }
      } catch (err) {
        console.log(err);
        errorToast("Something went wrong!");
      }
    },

    async fetchBooks({ commit }) {
      commit("SET_LOADING", true);
      try {
        const res = await axios.get(url + "api/book/find");
        if (!res.data?.books && res.status !== 200) {
          errorToast("Cannot fetch books");
          return;
        }
        commit("SET_LOADING", false);
        commit("SET_PRODUTS", res.data.books);
      } catch (err) {
        errorToast("Not found Books");
      }
    },

    async searchProducts({ commit }, title) {
      try {
        const res = await axios.get(`http://localhost:4000/api/book/find.BY-name/${title}`);
        console.log(res.data.books);
        if (!res.data?.books && res.status !== 200) {
          return;
        }
        commit("SET_PRODUTS", res.data.books);
      } catch (err) {
        errorToast("Not found Book");
      }
    },
<<<<<<< HEAD

    // async Profile(){
    //   try {
    //     const user = localStorage.getItem("user");
    //     return user
    //   } catch (error) {
    //     errorToast("Error")
    //   }
    // }
=======
    async viewProfile(){
      try {
        localStorage.getItem('user')
        router.push({name:"profile"})
      } catch (error) {
        errorToast("Not found Profile");
      }
    },
>>>>>>> bebe7eee (third commit)

    async  viewAdmins(){
      try {
        const res = await axios.get("http://localhost:4000/api/find-admins")
<<<<<<< HEAD
        router.push({ name: "" });
=======
        router.push({ name: "admin" });
      } catch (error) {
        errorToast("Not found Admins");
      }
    },
    async  viewUsers(){
      try {
        const res = await axios.get("http://localhost:4000/api/find-users")
        router.push({ name: "users" });
      } catch (error) {
        errorToast("Not found Admins");
      }
    },
    async  viewBlockUsers(){
      try {
        const res = await axios.get("http://localhost:4000/api/find-block.users")
        router.push({ name: "blockusers" });
>>>>>>> bebe7eee (third commit)
      } catch (error) {
        errorToast("Not found Admins");
      }
    }
  },

  mutations: {
    SET_LOADING: (state, payload) => (state.loading = payload),

    SET_TOKEN: (_, payload) => {
      localStorage.setItem("token", payload);
    },

    SET_USER: (state, payload) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
      router.push({ name: RT_HOME });
    },

    SET_PRODUTS: (state, payload) => (state.products = payload),


    LOGOUT: (state) => {
      state.user = {};
      localStorage.removeItem("token");
      router.push({ name: RT_LOGIN });
    },
  },
});
export default store;