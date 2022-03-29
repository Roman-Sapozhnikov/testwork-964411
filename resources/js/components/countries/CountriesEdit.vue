<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>

        <div class="container">
            <h4>Edit Country</h4>
            <div class="card-body">
                <form v-on:submit="saveForm()">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Country name</label>
                            <input type="text" v-model="country.name" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Country capital</label>
                            <input type="text" v-model="country.capital" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Country area, (km<sup>2</sup>)</label>
                            <input type="text" v-model="country.area" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Country population</label>
                            <input type="text" v-model="country.population" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success">Edit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        let app = this;
        let id = app.$route.params.id;
        app.countryId = id;
        axios.get('/api/v1/countries/' + id)
            .then(function (resp) {
                app.country = resp.data;
            })
            .catch(function () {
                alert("Could not load your Country")
            });
    },
    data: function () {
        return {
            countryId: null,
            country: {
                name: '',
                capital: '',
                area: '',
                population: '',
            }
        }
    },
    methods: {
        saveForm() {
            event.preventDefault();
            var app = this;
            var newCountry = app.country;
            axios.patch('/api/v1/countries/' + app.countryId, newCountry)
                .then(function (resp) {
                    app.$router.replace('/');
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not create your Country");
                });
        }
    }
}
</script>
