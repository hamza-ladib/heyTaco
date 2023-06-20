<template>
    <div v-if="loaded" class="w-96 h-fit bg-white flex gap-2 rounded-lg shadow-2xl p-4 ">
        <div class=" w-20 h-20  flex items-center justify-start gap-1 p-1">
            <img class=" " :src="img"/>
        </div>
        <div>
            <div class="pt-1   flex gap-1   items-center justify-start">
                <p class="font-poppins text-lg ">{{ props.name }}</p>
                <span class="font-poppins text-sm "> 9:31 AM</span>
            </div>
            <div class=" text-sm overflow-hidden px-1">
                Thanks <span class="font-poppins font-bold text-blue-500">Koko</span>{{ props.text }}
            </div>
        </div>
       
    </div>
</template>
<script setup>
import { onMounted,ref } from 'vue';
let loaded=ref(false)
let props= defineProps(['img','name','text']);
let img = ref(props.img)
/* console.log(props) */
onMounted(async() => {
    img.value= await import(img.value).then(e=>e.default);
    loaded.value=true;
    
})
</script>
<style  scoped></style>