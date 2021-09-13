
let store = {
	_state: {
		profile: {
			posts: [
				{ id: 1, message: "Buy some chocolate, mate.", likesCount: 12 },
				{ id: 2, message: "I'm the original Hetman!", likesCount: 0 },
				{ id: 3, message: "Hi! It's my first post!", likesCount: 4 }
			],
			newPostText: ''
		},
		messages: {
			dialogues: [
				{ id: 1, name: 'Vladimir' },
				{ id: 2, name: 'Yulia' },
				{ id: 3, name: 'Vitya' },
				{ id: 4, name: 'Arsen' },
				{ id: 5, name: 'Misha' },
				{ id: 6, name: 'Andrey' }
			],
			messages: [
				{ id: 1, message: "Shaking your hand!" },
				{ id: 2, message: 'How are you?' },
				{ id: 3, message: 'Hi' },
				{ id: 4, message: 'I thought we were in love' },
				{ id: 5, message: 'I hate you' },
				{ id: 6, message: 'Are your boys ready?' }
			],
			newMessageText: ''
		}
	},
	_callSubscriber() {
		console.log('state changed');
	},
	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 4,
				likesCount: 0,
				message: this._state.profile.newPostText
			}
			this._state.profile.posts.push(newPost);
			this._state.profile.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === 'UPDATE-POST-TEXT') {
			this._state.profile.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === 'ADD-MESSAGE') {
			let newMessage = {
				id: 7,
				message: this._state.messages.newMessageText,
			}
			this._state.messages.messages.push(newMessage);
			this._state.messages.newMessageText = '';
			this._callSubscriber(this._state);
		} else if (action.type === 'UPDATE-MESSAGE-TEXT') {
			this._state.messages.newMessageText = action.newText;
			this._callSubscriber(this._state);
		}
	}
}

export default store;
window.store = store;
