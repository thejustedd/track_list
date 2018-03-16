const API = 'https://itunes.apple.com';

var vm = new Vue({
	el: '#app',
	data: {
		term: 'The Beatels',
		trackList: [],
		parentId: -1
	},
	created() {
		this.trackList = this.getTrackList();
	},
	methods: {
		getTrackList() {
			$.getJSON(`${API}/search`, { term: this.term = this.term.trim() })
				.then(({ results }) => { this.trackList = results; });
		},
		toggle(index) {
			if (this.parentId == index) return this.parentId = -1;
			this.parentId = index;
		}
	},
	components: {
		't-row': {
			props: {
				isActive: Boolean
			},
			template: '<tr v-show="isActive"><slot></slot></tr>',
		}
	}
});

$("#search-input").keyup((event) => {
	if (event.keyCode == 13) {
		$('#search-btn').click();
	}
});