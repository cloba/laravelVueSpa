<template>
    <div class="container-fluid">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item active">Categories</li>
        </ol>

        <div class="card mb-3">
            <div class="card-header d-flex">
                <span>
                    <i class="fas fa-chart-area"></i>
                    Categories Management
                </span>
                <button class="btn btn-primary btn-sm ml-auto" v-on:click="showCategoryModal">
                    <span class="fa fa-plus"></span> Create New
                </button>
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Image</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>shirt</td>
                            <td>image</td>
                            <td>
                                <button class="btn btn-primary btn-sm"><span class="fa fa-edit"></span></button>
                                <button class="btn btn-danger btn-sm"><span class="fa fa-trash"></span></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <b-modal ref="newCategoryModal" hide-footer title="Add New Category">
            <div class="d-block">
                <form v-on:submit:prevent="createCategory">
                    <div class="form-group">
                        <label for="name">Enter Name</label>
                        <input type="email" v-model="categoryData.name" class="form-control" id="name"
                        placeholder="Enter category name">
                    </div>
                    <div class="form-group">
                        <label for="name">Choose an image</label>
                        <input type="file" v-on: change="attachImage" class="form-control" id="name">
                    </div>

                    <hr>
                    <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="hideNewCategoryModal">Cancel</button>

                        <button type="submit" class="btn btn-primary">
                            <span class="fa fa-check"></span> Save
                        </button>
                    </div>
                </form>
            </div>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: 'category',
        data() {
            return {
                categoryData: {
                    name: '',
                    imgage: '',
                }
            }
        },
        methods: {
            attachImage() {
                // to use file reader TODO:
            },

            hideNewCategoryModal() {
                this.$refs.newCategoryModal.hide();
            },

            showCategoryModal() {
                this.$refs.newCategoryModal.show();
            },

            createCategory() {
                console.log('form submitted')
            }

        }
    }
</script>

