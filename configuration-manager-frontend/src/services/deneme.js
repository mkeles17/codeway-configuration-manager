async function getConfigParams() {
    const store = useUserStore();
    const user = store.user;
    if (user) {
        const token = await user.getIdToken();
        axios
            .get('http://localhost:3000/api/config-params/', {
                headers: { Authorization: token }
            })
            .then((res) => {
                this.configParams = res.data.map((row) => {
                    return { ...row, editing: false };
                });
                console.log(this.configParams);
            });
    }
}
async function deleteParameter(parameter_key) {
    const store = useUserStore();
    const user = store.user;
    if (user) {
        const token = await user.getIdToken();
        if (confirm('Are you sure that you want to delete this parameter ?')) {
            axios
                .delete(`http://localhost:3000/api/config-params/${parameter_key}`, {
                    headers: { Authorization: token }
                })
                .then((res) => {
                    console.log(res);
                    alert(res.data.message);
                    this.getConfigParams();
                })
                .catch((error) => {
                    if (error.response) {
                        if (error.response.status === 404) {
                            alert(error.response.data.message);
                        }
                    }
                });
        }
    }
}
async function saveParameter(parameter) {
    const store = useUserStore();
    const user = store.user;
    if (user) {
        const token = await user.getIdToken();
        axios
            .put(`http://localhost:3000/api/config-params/`, parameter, {
                headers: { Authorization: token }
            })
            .then((res) => {
                console.log(res);
                alert(res.data.message);
                this.toggleEdit(parameter);
                this.getConfigParams();
            })
            .catch((error) => {
                console.log(error);
                if (error.response) {
                    if (error.response.status === 400) {
                        alert(error.response.data.message);
                    }
                }
            });
    }
}
async function addParameter(parameter) {
    const store = useUserStore();
    const user = store.user;
    if (user) {
        const token = await user.getIdToken();
        axios
            .post(`http://localhost:3000/api/config-params/`, parameter, {
                headers: { Authorization: token }
            })
            .then((res) => {
                console.log(res);
                alert(res.data.message);
                this.toggleEdit(parameter);
                this.getConfigParams();
            })
            .catch((error) => {
                console.log(error);
                if (error.response) {
                    if (error.response.status === 400) {
                        alert(error.response.data.message);
                    }
                }
            });
    }
}
