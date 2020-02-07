import imgSrc from './myGirl.jpg'
export default {
	template:`
		<div>
			<img :src="imgSrc" alt="" />
		</div>
	`,
	data(){
		return {
			imgSrc:imgSrc
		}
	}
};