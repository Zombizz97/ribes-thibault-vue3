import {ref} from 'vue'
import {defineStore} from 'pinia'
import ky from 'ky'

const API_URL = 'https://www.amiiboapi.com/api/amiibo/'
export const useAmiiboStore = defineStore('amiibo', () => {

    const threeAmiibo = ref([])
    const allAmiibo = ref([])
    const currentAmiibo = ref([])

    const fetchThreeAmiibo = async () => {
        const names = ['Incineroar', 'Lucina', 'Roy']; // Identifiants pour Rick, Summer, et Beth
        const promises = names.map(name => ky.get(`${API_URL}?character=${name}`).json());
        threeAmiibo.value = await Promise.all(promises);
    };

    const fetchAllAmiibo = async ()=>{
        const tryToFetch = await ky.get(`${API_URL}`).json()
        const {amiibo}  = tryToFetch
        allAmiibo.value = amiibo
    }

    const fetchOneAmiibo = async (id)=>{
        currentAmiibo.value = await ky.get(`${API_URL}?tail=${id}`).json()
    }

    return { threeAmiibo, fetchThreeAmiibo, allAmiibo, fetchAllAmiibo, currentAmiibo, fetchOneAmiibo}
})