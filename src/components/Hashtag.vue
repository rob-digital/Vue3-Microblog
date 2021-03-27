<template>
    <div class="hashtag" @click="hashtagClicked">
        #{{ hashtag }}
       
    </div>
</template>

<script>
import { store } from '../store/store'

export default {

    props: {
        hashtag: {
            type: String
        }
    },

    setup(props, ctx) {         // ctx - contex

        const hashtagClicked = () => {
            // ctx.emit('hashtagClicked', props.hashtag)
            store.setHashtag(props.hashtag)
        }
        

        return {
           hashtagClicked
        }
    }

}
</script>

<style lang="scss" scoped>
.hashtag {
  text-decoration: underline;
}
.hashtag:hover {
  color: cornflowerblue;
}
</style>