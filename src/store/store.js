import { reactive, computed } from 'vue'
import { testPosts } from '../assets/testPosts'

class Store {
    constructor() {
        this.state = reactive({
						posts: testPosts,
						currentHashtag: null
        })
		}
		
		get filteredPosts() {
			return computed(() => {
				return this.state.posts.filter(post => {
					if(!this.state.currentHashtag) {
						return this.state.posts
					}
	
					return post.hashtags.includes(this.state.currentHashtag)
	
				 })
			})
		}

		setHashtag(tag) {
			this.state.currentHashtag = tag
		}

		incrementLike(post) {
			const thePost = this.state.posts.find(el => {
				// console.log(el.id)
			return	el.id === post.id
			})

			if(!thePost) {
				return
			}
			console.log(thePost.likes ++)
		}

}


export const store = new Store()