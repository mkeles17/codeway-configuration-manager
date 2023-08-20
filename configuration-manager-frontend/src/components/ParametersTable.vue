<template>
    <table>
        <thead class="table-heads">
            <tr>
                <th
                    v-for="(field, index) in columnHeaders"
                    :key="index"
                    @click="toggleSort(field)"
                    class="table-category"
                >
                    {{ field }}
                    <span v-if="field === 'Create Date'">
                        {{ sortOrder === 'asc' ? '↑' : '↓' }}
                    </span>
                </th>
            </tr>
        </thead>
        <tbody v-if="sortedParams.length > 0">
            <tr v-for="(parameter, index) in sortedParams" :key="index" class="text-white">
                <td>
                    <span class="parameter-fields"> {{ columnHeaders[0] }} : </span>
                    {{ parameter.parameter_key }}
                </td>
                <td>
                    <span class="parameter-fields"> {{ columnHeaders[1] }} : </span>
                    <span v-if="!parameter.editing">
                        {{ parameter.value }}
                    </span>
                    <input v-else v-model="parameter.value" />
                </td>
                <td class="parameter-description">
                    <span class="parameter-fields"> {{ columnHeaders[2] }} : </span>
                    <span v-if="!parameter.editing">{{ parameter.description }}</span>
                    <input v-else v-model="parameter.description" />
                </td>
                <td>
                    <span class="parameter-fields"> {{ columnHeaders[3] }} : </span>
                    {{ formatTimestamp(parameter.creation_date) }}
                </td>
                <td>
                    <span v-if="!parameter.editing" class="buttons">
                        <button @click="toggleEdit(parameter)" class="btn-edit">
                            Edit
                        </button>
                        <button
                            type="button"
                            @click="removeParameter(parameter.parameter_key)"
                            class="btn-delete"
                        >
                            <span v-if="isDesktop"> Delete </span>
                            <span v-else> Del </span>
                        </button>
                    </span>
                    <span v-else class="buttons">
                        <button @click="saveParameter(parameter)" class="btn-add">Save</button>
                    </span>
                </td>
            </tr>
            <tr class="text-white">
                <td>
                    <input v-model="parameter_form.parameter_key" placeholder="New Parameter" />
                </td>
                <td>
                    <input v-model="parameter_form.value" placeholder="Value" />
                </td>
                <td colspan="2">
                    <input v-model="parameter_form.description" placeholder="New Description" />
                </td>
                <td>
                    <span class="buttons">
                        <button @click="addParameter(parameter_form)" class="btn-add">ADD</button>
                    </span>
                </td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan="5" class="loading-text">Loading...</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { ref, defineComponent, onMounted, computed } from 'vue';
import { useUserStore } from '@/stores/index.js';
import {
    getConfigParams,
    deleteParameter,
    modifyParameter,
    postParameter
} from '@/services/parameterService.js';

export default defineComponent({
    name: 'ParametersTable',
    setup() {
        const store = useUserStore();
        const user = store.user;
        const parameter_form = ref({});
        const configParams = ref([]);
        const sortOrder = ref('asc');
        const sortColumn = ref('Create Date');
        const columnHeaders = computed(() => [
            'Parameter Key',
            'Value',
            'Description',
            'Create Date'
        ]);
        const sortedParams = computed(() => {
            return configParams.value.slice().sort((a, b) => {
                const aValue = new Date(a.creation_date).getTime();
                const bValue = new Date(b.creation_date).getTime();
                if (sortOrder.value === 'asc') {
                    return aValue - bValue;
                } else {
                    return bValue - aValue;
                }
            });
        });
        const isDesktop = computed(() => {
            return window.innerWidth >= 768;
        });

        onMounted(() => {
            fetchConfigParams();
        });

        const fetchConfigParams = async () => {
            if (user) {
                try {
                    const token = await user.getIdToken();
                    const response = await getConfigParams(token);
                    configParams.value = response.map((row) => {
                        return { ...row, editing: false };
                    });
                } catch (error) {
                    alert(error.response.data.message);
                }
            }
        };

        const removeParameter = async (parameter_key) => {
            if (user) {
                try {
                    const token = await user.getIdToken();
                    if (confirm('Are you sure that you want to delete this parameter ?')) {
                        const response = await deleteParameter(token, parameter_key);
                        alert(response.message);
                        fetchConfigParams();
                    }
                } catch (error) {
                    alert(error.response.data.message);
                }
            }
        };

        const saveParameter = async (parameter) => {
            if (user) {
                try {
                    const token = await user.getIdToken();
                    const response = await modifyParameter(token, parameter);
                    alert(response.message);
                    toggleEdit(parameter);
                    fetchConfigParams();
                } catch (error) {
                    alert(error.response.data.message);
                }
            }
        };

        const addParameter = async (parameter) => {
            if (user) {
                try {
                    const token = await user.getIdToken();
                    const response = await postParameter(token, parameter);
                    alert(response.message);
                    //toggleEdit(parameter);
                    fetchConfigParams();
                } catch (error) {
                    alert(error.response.data.message);
                }
            }
        };

        const toggleEdit = (row) => {
            row.editing = !row.editing;
        };

        const formatTimestamp = (timestamp) => {
            const options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            };
            return new Date(timestamp).toLocaleString('tr-TR', options).replace(/\./g, '/');
        };

        const toggleSort = (column) => {
            console.log(column);
            if (sortColumn.value === column) {
                console.log('e burası ?');
                sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
            }
        };

        const transformHeaderString = (inputString) => {
            const words = inputString.split(/[\s_]+/);

            const transformedWords = words.map((word) => {
                if (word.length > 0) {
                    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                }
                return '';
            });

            return transformedWords.join(' ');
        };

        return {
            user,
            parameter_form,
            configParams,
            sortColumn,
            sortOrder,
            sortedParams,
            columnHeaders,
            isDesktop,
            fetchConfigParams,
            removeParameter,
            saveParameter,
            addParameter,
            toggleEdit,
            formatTimestamp,
            toggleSort,
            transformHeaderString
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
// Define variables

$input-width: calc(50% - 10px);
@media (min-width: 768px) {
    table {
        width: 100%;

        .parameter-fields {
            display: none;
        }

        .table-category {
            font-size: 25px;
            color: #778ba3;
        }

        th,
        td {
            text-align: left;
            width: 16.66%;
            padding: 0 10px 8px 0;
        }

        td:nth-child(5) {
            padding: 0;
        }

        input {
            height: 2rem;
            border-radius: 0.5rem;
        }

        .btn-edit {
            background: $blue-gradient;
        }

        .btn-delete {
            margin-left: 0.7rem;
            background: $red-gradient;
        }

        .btn-add {
            background: $turquoise-gradient;
            width: 50%;
        }

        .text-whiteE {
            color: white;
            font-size: 12px;
        }

        .parameter-description {
            width: 33.33%;
        }

        .buttons {
            width: 66.66%;
            height: 30px;
            display: flex;
            //justify-content: space-between;
            justify-content: flex-start;
            align-items: center;
            padding: 3px 2px;
        }

        button {
            height: 100%;
        }

        .loading-text {
            color: white;
            font-size: 20px;
        }
    }
}

@media (max-width: 767px) {
    table {
        .table-heads {
            display: none;
        }

        td {
            width: 100%;
        }

        tr {
            border: 2px solid white;
            border-radius: 0.5rem;
            margin-bottom: 13px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
        }

        tbody {
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: calc(100vw - 2rem);
        }

        .text-whitee {
            color: white;
            font-size: 12px;
        }

        .btn-edit {
            background: $blue-gradient;
        }

        .btn-delete {
            margin-left: 0.7rem;
            background: $red-gradient;
        }

        .btn-add {
            background: $turquoise-gradient;
        }

        .buttons {
            width: 100%;
            height: 30px;
            display: flex;
            //justify-content: space-between;
            justify-content: center;
            align-items: center;
            padding: 3px 100px;
        }

        button {
            height: 100%;
            font-size: 10px;
        }

        td {
            padding: 4px 8px 4px 8px;
        }

        td:nth-child(5) {
            padding: 0;
        }

        .parameter-fields {
            font-weight: bolder;
            color: white;
        }

        input {
            height: 1rem;
            border-radius: 0.5rem;
        }
    }
}
</style>
