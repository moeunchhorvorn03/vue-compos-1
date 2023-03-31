import { ref, computed } from 'vue'
export default function useEven (){
    const capacity = ref(3)

    const increament = () => {
      capacity.value++;
    }

    const attending = ref(["Rith","Thea","Tha"])

    const SpaceLeft = computed(() => {
      return capacity.value - attending.value.length;
    })

    return{
      capacity,
      attending,
      SpaceLeft,
      increament
    }
  }