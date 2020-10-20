<template>
    <div>
        <FilmList :list="list" :type="type" :key="'film' + list.length"></FilmList>
    </div>
</template>

<script>
// 导入即将上映的请求方法
import { comingSoonListData } from '@/api/api'
import FilmList from '@/components/FilmList'
export default {
    data() {
        return {
            pageNum: 1,
            list: [],
            type: 2 //当前传递的数据为即将上映的电影数据
        }
    },
    async mounted() {
        let ret = await comingSoonListData(this.pageNum)
        this.list = ret.data.data.films;
    },
    components: {
        FilmList
    }
}
</script>