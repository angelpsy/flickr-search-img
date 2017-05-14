import {bus} from '../bus/bus.js';

const modal = {
    data () {
        return {
            img: null,
            isOpen: false,
        }
    },
    methods: {
        open: function (img) {
            this.img = img;
            this.isOpen = true;
        },
        close: function () {
            console.log('close');
            this.isOpen = false;
            this.img = null;
        },
    },
    created: function () {
        const that = this;
        bus.$on('openModal', function (img) {
            that.open(img);
        })
    }
};
export default modal;