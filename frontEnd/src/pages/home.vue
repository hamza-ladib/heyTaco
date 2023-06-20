<template>
  <div class="p-4 w-full flex flex-col gap-2">
    <div>
      <Header />
    </div>
    <div class="w-full h-full">
      <section class=" flex justify-between md:items-center items-center w-full h-full ">
        <div>
          <img class="hidden lg:flex w-72" src="../assets/leftp.gif" />
        </div>
        <div class="flex flex-col  justify-center items-center gap-4 ">
          <div
            class="p-5 font-raleway md:text-7xl text-4xl font-bold h-full text-center"
          >
            Learn Faster , <br />Happier And <br />
            More with Our Team
          </div>
          <div class="font-poppins font-sm text-center">
            HeyTaco brings people together and help us to learn , have a little
            fun, and celebrate the feeling of success .
          </div>
          <div class="w-full p-1 flex iems-center justify-center gap-2 ">
            <button
              class="font-raleway font-bold px-3 ring-slate-400 ring hover:opacity-80 transition-all duration-300 bg-[#fee471] p-3 rounded-full"
            >
              try hey Taco for free
            </button>
            <button
              class="font-raleway font-bold px-3 ring ring-black outline-none hover:bg-slate-200 transition-all duration-300 p-2 rounded-full"
            >
              watch demo
            </button>
          </div>
          <div class="w-full md:hidden ">
            <img src="../assets/peple.gif" />
          </div>
        </div>
        <div>
          <div>
            <img class="hidden lg:flex w-60" src="../assets/rightp.gif" />
          </div>
        </div>
        <div class="w-full md:flex hidden lg:hidden h-full">
          <img src="../assets/peple.gif" />
        </div>
        
      </section>
      <!-----  section 2 -->
      <section
        class="p-2 pt-4 flex flex-col justify-between items-center w-full h-full bg-rose-100"
      >
        <div class="w-full p-4">
          <p class="font-poppins text-center text-2xl p-2">
            Invigorate your trachers with acts of kindness
          </p>
          <p class="font-poppins text-center text-sm p-2">
            HeyTaco sparks conversations and builds stronger relationships with
            its fun and unconventional kindness currency...tacos! 🌮
          </p>
        </div>
        <div
          class="w-full p-1 flex flex-wrap items-center justify-center gap-4 pt-5"
        >
          <div
            class="w-full flex items-center justify-center md:-rotate-12 md:w-fit p-2"
          >
            <Message
              img="../assets/avatar1.gif"
              name="Lars"
              text=" for having close attention to detail and going the extra mile!"
            />
          </div>
          <div
            class="w-full flex items-center justify-center lg:rotate-12 md:w-fit p-2"
          >
            <Message
              img="../assets/avatar2.gif"
              name="Tilly"
              text=" for helping us whith our courses !"
            />
          </div>
          <div class="w-full flex items-center justify-center md:w-fit p-2">
            <Message
              img="../assets/avatar3.gif"
              name="Felix"
              text=" for your follow and guidness for us !"
            />
          </div>
        </div>
      </section>
      <!-----  section 3-->
      <section
        class="p-2 pt-5 flex flex-col justify-between items-center w-full h-full bg-amber-100"
      >
        <div class="flex items-center w-full justify-center gap-2">
          <div class="md:w-1/2 w-full p-5">
            <div class="font-poppins text-5xl">How it works</div>
            <div class="font-poppins text-base">
              Everyone has some tacos to give out each day. Give people tacos by
              creating an account and start learning or teaching , show
              gratitude and recognize everything from small work to huge
              accomplishments.
            </div>
          </div>
          <div clas=" md:flex hidden overflow-hidden bg-red-500 p-2">
            <img
              class="md:flex hidden w-44 aspect-square"
              src="../assets/fun.gif"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2 font-poppins text-base">
          <div class="text-3xl p-1">
            Steps to Make and Share Tacos our treading coin
          </div>
          <div>
            <span class="font-poppins font-bold text-sm text-black">Step 0</span
            >: Create Your Account
          </div>
          <div>
            <span class="font-poppins font-bold text-sm text-black">Step 1</span
            >: choose your occupation student or teacher
          </div>
          <div>
            <span class="font-poppins font-bold text-sm text-black">Step 2</span
            >: start treading Tacos and learn
          </div>
        </div>
      </section>
      <!-----  section 4-->
      <section
        class="p-2 pt-5 flex flex-col justify-between items-center w-full h-full bg-amber-100"
      >
        <div class="flex items-center w-full justify-center gap-2">
          <div class="md:w-1/2 w-full p-5">
            <div class="font-poppins text-5xl">features</div>
          </div>
        </div>
        <div class="lg:w-1/2 w-full md:p-5 p-1">
          <div class="w-full  flex flex-wrap p-1 gap-2">
            <div
              class="md:w-[49%] w-full h-fit shadow-lg flex items-center justify-start bg-red-50 p-1"
            >
              <div
                class="w-12 aspect-square bg-amber-200 flex justify-center items-center rounded-full"
              >
                🌮
              </div>
              <div class=" p-2 flex flex-col w-fit text-xs text-poppins font-thin ">
                <span class="font-poppins font-semibold text-base">Employee Recognition</span>Give virtual tacos to recognize
                someone in a fun and easy way.
              </div>
            </div>
            <div
              class="md:w-[49%] w-full h-fit shadow-lg flex items-center justify-start bg-red-50 p-1"
            >
              <div
              class="w-12 aspect-square bg-violet-200 flex justify-center items-center rounded-full"
              >
                🏆
              </div>
              <div class=" p-2 flex flex-col w-fit text-xs text-poppins font-thin ">
                <span class="font-poppins font-semibold text-base">Leaderboards</span> Celebrate top taco givers and taco
                receivers through leaderboards.
              </div>
            </div>
            <div
              class="md:w-[49%] w-full h-fit shadow-lg flex items-center justify-start bg-red-50 p-1"
            >
              <div
              class="w-12 aspect-square bg-red-200 flex justify-center items-center rounded-full"
              >
                🎁
              </div>
              <div class=" p-2 flex flex-col w-fit text-xs text-poppins font-thin ">
                <span class="font-poppins font-semibold text-base">Custom Rewards</span> Create custom-tailored rewards that
                people will love.
              </div>
            </div>
            <div
              class="md:w-[49%] w-full h-fit shadow-lg flex items-center justify-start bg-red-50 p-1"
            >
              <div
              class="w-12 aspect-square bg-cyan-200 flex justify-center items-center rounded-full"
              >
                #
              </div>
              <div class=" p-2 flex flex-col w-fit text-xs text-poppins font-thin ">
                <span class="font-poppins font-semibold text-base">Taco Tags</span> Make tacos matter more by tagging them
                with company values.
              </div>
            </div>
            <div
              class="md:w-[49%] w-full h-fit shadow-lg flex items-center justify-start bg-red-50 p-1"
            >
              <div
              class="w-12 aspect-square bg-blue-200 flex justify-center items-center rounded-full"
              >
                📊
              </div>
              <div class=" p-2 flex flex-col w-fit text-xs text-poppins font-thin ">
                <span class="font-poppins font-semibold text-base">Reporting Analytics</span> Analyze data to measure user
                engagement.
              </div>
            </div>
            <div
              class="md:w-[49%] w-full h-fit shadow-lg flex items-center justify-start bg-red-50 p-1"
            >
              <div
                class="w-12 h-12 bg-emerald-200 flex justify-center items-center rounded-full"
              >
                🧐
              </div>
              <div class=" p-2 flex flex-col w-fit text-xs text-poppins font-thin ">
                <span class="font-poppins font-semibold text-base">Feedback Surveys </span> Send quick surveys to get faster
                feedback.
              </div>
            </div>
            <div
            class="md:w-[49%] w-full h-fit shadow-lg flex items-center justify-start bg-red-50 p-1"
            >
              <div
              class="w-12 aspect-square bg-gray-200 flex justify-center items-center rounded-full"
              >
                📺
              </div>
              <div class=" p-2 flex flex-col w-fit text-xs text-poppins font-thin ">
                <span  class="font-poppins font-semibold text-base">Taco TV </span> Share taco activity on office TV to create
                company-wide excitement.
              </div>
            </div>
            <div
              class="md:w-[49%] w-full h-fit shadow-lg flex items-center justify-start bg-red-50 p-1"
            >
              <div
                class="w-12 h-12 bg-orange-200 flex justify-center items-center rounded-full"
              >
                🤖
              </div>
              <div class=" p-2 flex flex-col w-fit text-xs text-poppins font-thin ">
                <span class="font-poppins font-semibold text-base">Integrations </span> Integrate HeyTaco APIs to customize
                taco giving.
              </div>
            </div>
          </div>
        </div>
      </section>
        <!-----  section 5-->
        <section
        class="p-2 pt-5 flex flex-col justify-between items-center w-full h-full bg-amber-100">
      <div class="flex items-center w-full justify-center gap-2">
          <div class="md:w-1/2 w-full p-5 font-poppins flex flex-col gap-4 ">
            <div class="font-poppins md:text-5xl text-2xl">Award-winning Employee Engagement and Employee Recognition app</div>
            <p class="font-medium font-poppins text-base ">HeyTaco is trusted by over 1,000 teams, from small businesses to Fortune 500 companies, and has been recognized with few awards. 😁</p>
            </div>
            </div>
      <div class="flex items-center w-full justify-center gap-2">
          <div class="md:w-1/2 w-full p-5 font-poppins flex  flex-wrap gap-4 ">
            <div class="  flex items-center justify-center shadow-md "><img class="w-36" src="../assets/medal1.svg"/></div>
            <div class="  flex items-center justify-center shadow-md "><img class="w-36" src="../assets/medal2.svg"/></div>
            <div class="  flex items-center justify-center shadow-md "><img class="w-36" src="../assets/medal3.svg"/></div>
            <div class="  flex items-center justify-center shadow-md "><img class="w-36" src="../assets/medal4.svg"/></div>
            <div class="  flex items-center justify-center shadow-md "><img class="w-36" src="../assets/medal5.svg"/></div>
            <div class="  flex items-center justify-center shadow-md "><img class="w-36" src="../assets/medal6.svg"/></div>
            <div class="  flex items-center justify-center shadow-md "><img class="w-36" src="../assets/medal7.svg"/></div>
           </div>
            </div>
      </section>
       <!-----  section 6-->
       <section
        class="p-2 pt-5 flex flex-col justify-between items-center w-full h-full bg-amber-100">
      <div class="flex items-center w-full justify-center gap-2">
          <div class="md:w-1/2 w-full p-5 font-poppins flex flex-col gap-4 ">
            <div class="font-poppins  text-3xl">Supercharge engagement with gamification</div>
            <p class="font-light font-poppins text-base ">Your team will have <span class="font-bold" > fun recognizing each other </span> with taco giving, receiving, and combined leaderboards.</p>
            </div>
            </div>
      <div class="flex items-center w-full justify-center gap-2">
          <div v-if="loaded" class="md:w-1/2 w-full p-5 font-poppins flex  flex-wrap gap-4 bg-white  shadow-xl  rounded-lg ">
             <!--- head table --->
             <div class="w-full bg-white font-poppins flex justify-between items-center  p-2 ">
                <div class="text-xl  dont-bold ">Leader Board</div>
                <div class="flex  gap-2  items-center justify-center p-2">
                     filter : <div class="bg-white  flex flex-col p-2 w-56 justify-center items-start relative">
                       <div class="try z-3 w-10 h-10 bg-red-500 absolute flex justify-center items-center  top-0 translate-x-1/2 rounded-full -translate-y-1/2 right-0 p-4 text-white font-poppins font-bold ">try</div>
                        <div  @click="show=!show"  class=" flex gap-2 border border-slate-600 cursor-pointer items-center justify-between transition-all duration-300 w-full p-2 rounded-lg"> {{tacos}}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" :class="`${show?'rotate-0':'rotate-180'} transition-all duration-300 w-6 h-6 `">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div :class="` ${show ?'h-20':'h-0'} transition-all duration-300 w-full overflow-hidden absolute bg-white top-full left-0`">
                        <div v-if="show" class=" cursor-pointer hover:bg-slate-400 w-full text-center transition-all duration-300" @click="tacos='Tacos received' ; show=false">Tacos received</div>
                        <div v-if="show" class=" cursor-pointer hover:bg-slate-400 w-full text-center transition-all duration-300" @click="tacos='Tacos given' ; show=false">Tacos given</div>
                        <div v-if="show" class=" cursor-pointer hover:bg-slate-400 w-full text-center transition-all duration-300" @click="tacos='tacos combined' ; show=false"> tacos combined</div>
                        </div>
                     </div>
                </div>

             </div>
            <!--- table 1--->
            <div v-if="tacos=='tacos combined'" class="w-full">
                <table class="w-full h-full">
                  <tr class=" w-full">
                    <th class="">Rank</th>
                    <th class="">Person</th>
                    <th class="">Tacos Given</th>
                    <th class="">Taco Received</th>
                    <th class="">Combined</th>
                  </tr> 
                  <tr class="w-full  border  "  v-for="(treader,i) in treaders.sort((x,y)=>(y.received+y.given)-(x.received+x.given))">
                     <td class="  text-center">{{ i+1 }}</td>
                     <td class="  text-center flex justify-start gap-x-4  items-center text-lg"> <img class="w-12 h-12" :src="treader.img"/>{{treader.name}}</td>
                     <td class="  text-center">{{treader.given}}</td>
                     <td class="  text-center ">{{treader.received}}</td>
                     <td class="  text-center "><div class="flex justify-center items-center gap-4">{{treader.received+treader.given}} <img class="w-6 h-6" src="../assets/tacos.png"/></div></td>
                  </tr>

                </table>
            </div>
             <!--- table 2--->
            <div v-if="tacos=='Tacos given'" class="w-full">
                <table class="w-full h-full">
                  <tr class=" w-full">
                    <th class="">Rank</th>
                    <th class="">Person</th>
                    <th class="">Total Tacos</th>
                  </tr>
                  <tr class="w-full  border  "  v-for="(treader,i) in treaders.sort((x,y)=>y.given-x.given)">
                     <td class="  text-center">{{ i+1 }}</td>
                     <td class="  text-center flex justify-start gap-x-4  items-center text-lg"> <img class="w-12 h-12" :src="treader.img"/>{{treader.name}}</td>
                     <td class="  text-center "><div class="flex justify-center items-center gap-4">{{treader.given}} <img class="w-6 h-6" src="../assets/tacos.png"/></div></td>
                  </tr>
                </table>
            </div>
             <!--- table 3--->
              <div v-if="tacos=='Tacos received'" class="w-full">
                  <table class="w-full h-full">
                    <tr class=" w-full">
                          <th class="">Rank</th>
                          <th class="">Person</th>
                          <th class="">Total Tacos</th>
                    </tr>
                        <tr class="w-full  border  "  v-for="(treader,i) in treaders.sort((x,y)=>y.received-x.received)">
                              <td class="  text-center">{{ i+1 }}</td>
                              <td class="  text-center flex justify-start gap-x-4  items-center text-lg"> <img class="w-12 h-12" :src="treader.img"/>{{treader.name}}</td>
                              <td class="  text-center "><div class="flex justify-center items-center gap-4">{{treader.received}} <img class="w-6 h-6" src="../assets/tacos.png"/></div></td>
                      </tr>    
                  </table>
              </div>
           </div>
            </div>





      </section>
    </div>
  </div>
</template>
<script setup>
import Header from "../components/header.vue";
import Message from "../components/message.vue";
import {ref,onMounted} from 'vue'
let tacos = ref("Tacos received");
let show=ref(false);
let treaders=ref([]);
let loaded=ref(false);
onMounted(async()=>{
 treaders.value= [
  {
    name:"koko",
    given :100,
    received:49,
    img: await import(  /* @vite-ignore */"../assets/"+"koko"+".gif").then(data=>data.default),
  },
  {
    name:"ned",
    given :102,
    received:26,
    img: await import(  /* @vite-ignore */"../assets/"+"ned"+".gif").then(data=>data.default),
  },
  {
    name:"tilly",
    given :36,
    received:75,
    img: await import(  /* @vite-ignore */"../assets/"+"tilly"+".gif").then(data=>data.default),
  },
  {
    name:"fitz",
    given :11,
    received:65,
    img: await import(  /* @vite-ignore */"../assets/"+"fitz"+".gif").then(data=>data.default),
  },
  {
    name:"angus",
    given :3,
    received:35,
    img: await import(  /* @vite-ignore */"../assets/"+"angus"+".gif").then(data=>data.default),
  },
  {
    name:"zane",
    given :33,
    received:22,
    img: await import(  /* @vite-ignore */"../assets/"+"zane"+".gif").then(data=>data.default),
  },
  {
    name:"lars",
    given :12,
    received:25,
    img: await import(  /* @vite-ignore */"../assets/"+"lars"+".gif").then(data=>data.default),
  },]
loaded.value=true;
})
</script>
<style scoped>
.try::before,.try::after{
  content: "";
  position:absolute;
  top:50%;
  left:50%;
  border-radius: 50%;
  transform: translate(-50%,-50%);
  width:5rem;
  height:5rem;
  z-index: -2;
  opacity:.3;
  background-color:rgba(239, 68, 68);
  animation: wave 2s  infinite;
}
@keyframes wave {
  0%{
  width:0rem;
  height:0rem;
  }
  100%{
 width:4rem;
  height:4rem;
  }
}
</style>
