import axios from "axios";

export default {
    getUser: () => {
        console.log("Get user reached");
    },

    signUpUser: (name, email, pw, icon, color) => {

        return axios.post("/api/signup", { displayName: name, email, password: pw, icon, color })
    },

    loginUser: (email, password) => {

        return axios.post("/api/login", { email, password })
    },

    getQuizbyCode: (game) => {
        console.log("==========getQuizbyCode=========")
        console.log(game);
        return axios.get(`/api/quizbycode/${game}`);
    },

    getQuizCode: () => {
        console.log("==========getQuizCode=========");
        return axios.get('/api/getcode');
    },

    getUserData: (userId) => {
        return axios.get("/api/user/data/" + userId);
    },

    getUserQuestions: (userId) => {
        return axios.get("/api/user/questions/" + userId);
    },

    getCategories: () => {
        console.log("==========getCategories========");
        return axios.get('/api/categories');
    },

    saveQuiz: (userId, category, difficulty, questionCount, quizCode) => {
        console.log("==========saveQuiz========");
        return axios.post("/api/quiz", { userId, category, difficulty, questionCount, quizCode });
    }
}