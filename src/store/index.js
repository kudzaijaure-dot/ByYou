import {proxy} from 'valtio'

const state = proxy({
    intro: true,
    color: '#A41720',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './12.png',
    fullDecal: './12.png'


});

export default state