import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state() {
        return {
            selectedDate: '',
            apiData: {}
        };
    },
    mutations: {
        setSelectedDate(state, selectedDate) {
            state.selectedDate = selectedDate;
        },
        setApiData(state, apiData) {
            state.apiData = apiData;
        } 
    },
    actions: {
        async fetchData({commit}, id) {
            try {
                const response = await axios.get(`https://admin.api.northexpokudus.com/api/destinasi/${id}`);
                const apiData = response.data.data;
                console.log(apiData.id);
                commit('setApiData', apiData);
            }catch (error) {
                console.log(error);
            }
        },
        updateSelectedDate({commit}, selectedDate) {
            commit('setSelectedDate', selectedDate);
        }
    },
    getters: {
        getSelectedDate(state) {
            return state.selectedDate;
        },
        getApiData(state) { 
            return state.apiData;
        }
    }
});