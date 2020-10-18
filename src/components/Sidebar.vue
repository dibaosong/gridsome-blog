<template>
    <div>
        <el-card shadow="never">
            <ul role="menubar" class="el-menu">
                <li role="menuitem" tabindex="-1" class="el-menu-item is-active" style="padding-left: 20px;"><i
                        class="el-icon-star-off"></i> <g-link to="/">最新动态</g-link></li>
                <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;"><i
                        class="el-icon-mobile-phone"></i> <g-link to="/Social">社交圈</g-link></li>
                <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;"><i
                        class="el-icon-edit-outline"></i> <g-link to="/Blog">博客列表</g-link></li>
                <li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;"><i
                        class="el-icon-service"></i> <g-link to="/Project">开源项目</g-link></li>
            </ul>
        </el-card>

        <el-card shadow="never" style="margin-top: 20px;text-align: center">
            <div v-if="!token" style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                <el-tag type="danger" size="small">&nbsp;</el-tag>&nbsp;&nbsp; Token未绑定&nbsp;&nbsp;
                <el-button type="text" @click="openTokenDialog">绑定</el-button>
            </div>
            <div v-if="token" style="font-size: 0.9rem;line-height: 1.5;color: #303133;">
                <el-tag type="success" size="small">&nbsp;</el-tag>&nbsp;&nbsp; Token已绑定&nbsp;&nbsp;
                <el-button type="text" @click="cancellation">注销</el-button>
            </div>
            <div style="margin-top: 10px;text-align: left">
                <el-alert title="Token获取" type="info"
                    description="在 github-> settings-> developerSettings-> personalAccessTokens 勾选gist权限,获取Token. 详情参考README.md"
                    :closable="false">
                </el-alert>
            </div>
        </el-card>
        <token-dialog ref="tokenDialog"></token-dialog>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import TokenDialog from '@/components/TokenDialog'
    export default {
        components: {
            TokenDialog
        },
        data() {
            return {
                active: "",
                parentUrl: "",
                menuList: []
            }
        },
        computed: {
            ...mapGetters([
                'token',
                'githubUsername',
                'mini'
            ])
        },
        mounted() {
            let arr = this.$route.path.split("/")
            this.active = "/" + arr[1] + "/" + arr[2]
        },
        methods: {
            onSelect(index) {
                this.$router.push(index)
            },
            openTokenDialog() {
                this.$refs.tokenDialog.open(() => {

                })
            },
            cancellation() {
                this.$store.dispatch("Cancellation")
            }
        }
    }
</script>