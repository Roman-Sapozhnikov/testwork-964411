<template>
    <div>
        <div class="form-group">
            <router-link :to="{name: 'createCountry'}" class="btn btn-success">Create new Country</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Countries list</div>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Size</th>
                        <th>Population</th>
                        <th width="100">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="country, index in countries">
                        <td>{{ country.name }}</td>
                        <td>{{ country.capital }}</td>
                        <td>{{ country.size }}</td>
                        <td>{{ country.population }}</td>
                        <td>
                            <router-link :to="{name: 'editCountry', params: {id: country.id}}" class="btn btn-xs btn-success w-100">
                                Edit
                            </router-link>
                            <a href="#"
                               class="btn btn-xs btn-danger w-100 mt-1"
                               v-on:click="deleteEntry(country.id, index)">
                                Delete
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            countries: []
        }
    },
    mounted() {
        var app = this;
        axios.get('/api/v1/countries')
            .then(function (resp) {
                app.countries = resp.data;
            })
            .catch(function (resp) {
                alert("Could not load countries");
            });
    },
    methods: {
        deleteEntry(id, index) {
            if (confirm("Do you really want to delete it?")) {
                var app = this;
                axios.delete('/api/v1/countries/' + id)
                    .then(function (resp) {
                        app.countries.splice(index, 1);
                    })
                    .catch(function (resp) {
                        alert("Could not delete country");
                    });
            }
        }
    }
}
</script>
