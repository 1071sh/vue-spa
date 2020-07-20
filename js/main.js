(function () {
    // vue-js-modal使用
    Vue.use(window["vue-js-modal"].default);
    const vue = new Vue({
        el: "#app",
        data: {
            title: "ユーザ一覧",
            form: {
                id: "",
                name: "",
                email: "",
            },
            users: [],
            editIndex: -1,
            createFlag: true,
        },
        created() {
            this.users = [
                {
                    id: 1,
                    name: "Leanne Graham",
                    email: "Sincere@april.biz",
                },
                {
                    id: 2,
                    name: "Ervin Howell",
                    email: "Shanna@melissa.tv",
                },
                {
                    id: 3,
                    name: "Clementine Bauch",
                    email: "Nathan@yesenia.net",
                },
            ];
        },
        methods: {
            showModal() {
                this.createFlag = true;
                this.resetForm();
                this.$modal.show("user-modal");
            },
            registerUser() {
                const user = Object.assign({}, this.form);
                this.users.push(user);
                this.$modal.hide("user-modal");
                this.resetForm();
            },
            resetForm() {
                this.form.id = "";
                this.form.name = "";
                this.form.email = "";
            },
            deleteUser(user) {
                const index = this.users.indexOf(user);
                this.users.splice(index, 1);
            },
            editUser(user) {
                (this.createFlag = false),
                    (this.editIndex = this.users.indexOf(user));
                this.form = Object.assign({}, user);
                this.$modal.show("user-modal");
            },
            updateUser() {
                Object.assign(this.users[this.editIndex], this.form);
                this.$modal.hide("user-modal");
            },
        },
    });
})();
