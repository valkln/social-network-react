import renderAllTree from "../render.js";
let state = {
	profile: {
		posts: [
			{ id: 1, message: "Buy some chocolate, mate.", likesCount: 12 },
			{ id: 2, message: "I'm the original Hetman!", likesCount: 0 },
			{ id: 3, message: "Hi! It's my first post!", likesCount: 4 }
		],
		addPost: function (newPostText) {
			let newPost = {
				id: 4,
				message: newPostText,
				likesCount: 0
			}
			state.profile.posts.push(newPost);
			renderAllTree({ state });
		}
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
	}
};
export default state;
