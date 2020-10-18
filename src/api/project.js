import request from '@/utils/request'
import store from '../store/index'
import Vue from 'vue'

export default {
    getBlogReadme: function () {
        let githubUsername = Vue.prototype.$store.state.configuration.githubUsername
        return request({
            url: '/repos/' + githubUsername + '/' + githubUsername + '.github.io/contents/README.md'
        })
    },
    getBlogConfigure: function () {
        let githubUsername = Vue.prototype.$store.state.configuration.githubUsername
        return request({
            url: '/repos/' + githubUsername + '/' + githubUsername + '.github.io/contents/static/configuration.json'
        })
    },
    editBlogConfigure: function (configure, sha) {
        let content = JSON.stringify(configure)
        let githubUsername = Vue.prototype.$store.state.configuration.githubUsername
        return request({
            url: '/repos/' + githubUsername + '/' + githubUsername + '.github.io/contents/static/configuration.json',
            method: 'PUT',
            data: {
                "message": "a",
                "content": require('js-base64').Base64.encode(content),

                "sha": sha
            }
        })
    },
    list: function (query) {
        let githubUsername = Vue.prototype.$store.state.configuration.githubUsername
        return request({
            url: `/users/${githubUsername}/repos?page=${query.page}&per_page=${query.pageSize}`

        })
    },
    single: function (name) {
        let githubUsername = Vue.prototype.$store.state.configuration.githubUsername
        return new Promise((resolve, reject) => {
            request({
                url: '/repos/' + githubUsername + '/' + name
            }).then((response) => {
                request({
                    url: '/repos/' + githubUsername + '/' + name + '/contents/README.md'
                }).then((sr) => {
                    response.data['readme_content'] = sr.data['content']
                    resolve(response)
                }).catch(() => {
                    response.data['readme_content'] = ""
                    resolve(response)
                })
            })

        })
    },

}