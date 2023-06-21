<template>
  <div class="p-4 w-full flex flex-col gap-2 overflow-x-hidden">
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
        class="p-2 pt-4 flex flex-col justify-between items-center w-full h-full "
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
        class="p-2 pt-5 flex flex-col justify-between items-center w-full h-full "
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
        class="p-2 pt-5 flex flex-col justify-between items-center w-full h-full"
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
        class="p-2 pt-5 flex flex-col justify-between items-center w-full h-full">
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
        class="box p-2 pt-5 flex flex-col justify-between items-center w-full h-full ">
      <div class="flex items-center w-full justify-center gap-2">
          <div class="md:w-1/2 w-full p-5 font-poppins flex flex-col gap-4 ">
            <div class="font-poppins  text-3xl">Supercharge engagement with gamification</div>
            <p class="font-light font-poppins text-base ">Your team will have <span class="font-bold" > fun recognizing each other </span> with taco giving, receiving, and combined leaderboards.</p>
            </div>
            </div>
      <div class="flex items-center w-full justify-center gap-2">
          <div v-if="loaded" class=" md:w-1/2 w-full p-5 font-poppins flex  flex-wrap gap-4 bg-white  shadow-xl  rounded-lg ">
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
            <div class="flex items-center w-full justify-center gap-2 py-4 ">
          <div class="md:w-1/2 w-full py-5 font-poppins flex flex-col gap-4 ">
            <div class="font-poppins  md:text-4xl text-2xl text-center">Transform your team with Giver Mode ✨</div>
            <p class="font-medium font-poppins text-lg px-2">Giver Mode helps cultivate a <span class="font-bold ">giving-minded team </span>by focusing on your givers. When enabled, only the taco-giving leaderboard is visible.</p>
            </div>
            </div>
            <div class="w-full p-3 flex iems-center justify-center gap-4">
            <button
              class=" hover:translate-x-2 font-raleway font-bold px-7 ring-slate-400 ring hover:opacity-80 transition-all duration-300 bg-[#fee471] p-3 rounded-full"
            >
              try hey Taco for free
            </button>
            <button
              class=" hover:translate-x-2 font-raleway font-bold px-3 ring ring-black outline-none hover:bg-slate-200 transition-all duration-300 p-2 rounded-full"
            >
              watch demo
            </button>
          </div>
      </section>
       <!-----  section 7-->
       <section
        class="p-2 pt-5 flex flex-col justify-between items-center w-full h-full   ">
      <div class="flex items-center w-full justify-center gap-2 ">
          <div class="md:w-1/2 w-full p-5 font-poppins flex flex-col gap-4 ">
            <div class="font-poppins md:text-5xl text-2xl text-center">Unlock powerful insights and bring values to life</div>
            <p class="font-medium font-poppins text-base text-center ">HeyTaco's<span class="font-bold"> Open Tagging System</span> allows you to track tacos tagged with custom values, initiatives, or anything else you can think of.</p>
            </div>
            </div>
      <div class="flex items-center w-full justify-center gap-2 p-10">
          <div class="md:w-1/2 w-full  font-poppins flex  flex-wrap gap-4 justify-center items-center p-16 py-32    relative">
         <div class="font-poppins  text-2xl font-bold p-4 flex items-center justify-center  bg-white shadow-xl rounded-tl-lg rounded-br-lg absolute top-0 right-0
         after:absolute after:w-0  after:aspect-square  after:bg-transparent after:top-full after:rotate-[180deg] after:left-0    after:border-r-[100px] after:border-t-[140px] after:border-transparent  after:border-r-[#a4a4a4] after:opacity-20 
         ">#tacotastic</div>
         <div class="font-poppins  text-2xl font-bold p-4 flex items-center justify-center  bg-white shadow-xl rounded-tl-lg rounded-br-lg absolute top-0 left-0 -rotate-45 
         after:absolute after:w-0  after:aspect-square  after:bg-transparent after:top-full after:rotate-[180deg] after:left-0    after:border-r-[100px] after:border-t-[140px] after:border-transparent  after:border-r-[#a4a4a4] after:opacity-20 
         ">#taconaut</div>
         <div>
          <Message
              img="../assets/avatar3.gif"
              name="Felix"
              text=" Thanks Ned for your #tacotastic leadership and always going the extra mile!  "
            />
         </div>
         <div class="font-poppins  text-2xl font-bold p-4 flex items-center justify-center  bg-white shadow-xl rounded-tl-lg rounded-br-lg absolute bottom-0
         after:absolute after:w-0  after:aspect-square  after:bg-transparent after:bottom-full   after:rotate-[360deg] after:left-1/2 after:-translate-x-1/2    after:border-r-[100px] after:border-t-[140px] after:border-transparent  after:border-r-[#a4a4a4] after:opacity-20 
         ">#thankful</div>
           </div>
            </div>
      </section>
       <!-----  section8-->
       <section
        class="p-2 pt-5 flex flex-col justify-between items-center w-full h-full bg-white">
      <div class="flex items-center w-full justify-center gap-2">
          <div class="md:w-1/2 w-full p-5 font-poppins flex flex-col gap-4 ">
            <div class="font-poppins md:text-5xl text-2xl">Custom-tailored rewards your team will love 💝</div>
            <p class="font-medium font-poppins text-base ">Just like your team, rewards should be <span class="font-bold">special and unique</span>. With HeyTaco, you can create meaningful rewards that are custom-built for your team.</p>
            </div>
            </div>
      <div class="flex items-center w-full justify-center gap-2">
          <div class=" w-full p-5 font-poppins flex flex-wrap  items-center justify-center gap-4 ">
              <img class="w-52" src="../assets/logo_shirt.jpg"/>
              <img class="w-52" src="../assets/team-highfive.jpg"/>
              <img class="w-52" src="../assets/charity.jpg"/>
           </div>
            </div>
      </section>
       <!-----  section 9 -->
       <section
        class="p-2 pt-5 flex flex-col justify-between items-center w-full h-full  ">
      <div class="flex items-center w-full justify-center gap-2">
          <div class="md:w-1/2 w-full p-5 font-poppins flex flex-col gap-4 ">
            <div class="font-poppins md:text-5xl text-2xl">How much can HeyTaco save you on staff turnover?</div>
            <p class="font-medium font-poppins text-base ">Companies using HeyTaco report that<span class="font-bold">83% of their people feel appreciated.</span>HeyTaco helps create recognition-rich cultures that retain employees and reduce turnover costs.</p>
            </div>
            </div>
      <div class="flex items-center w-full justify-center gap-2">
          <div class=" md:w-1/2 w-full p-5 font-poppins flex flex-wrap bg-white rouded-lg shadow-lg  items-center justify-center gap-4 ">
              <div class=" w-full flex gap-4 justify-center items-center ">
                <span class="font-bold font-poppins text-3xl">HeyTaco can reduce turnover by 26%</span> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </div>
              <div class="w-full h-fit    flex items-center justify-center">
                <div class="p-2  flex flex-col gap-2 items-center justify-center relative">
                   <div class=" p-1 font-bold font-xl text-center">Employees</div>
                <div class="w-28"><input v-model="employees" class="outline-none p-2 w-28 rounded-lg bg-transparent font-poppins text-lg text-center ring ring-slate-600 shadow-xl" type="number" @input="inputing"  pattern="/^-?\d+\.?\d*$/" /></div>
                <div class="try z-3 w-10 h-10 bg-red-500  absolute flex justify-center items-center  top-0 -translate-x-full rounded-full -translate-y-1/2 left-0 p-4 text-white font-poppins font-bold ">try</div>
              </div>
              <div class="w-full  flex items-center    h-full p-2">
                <div class="w-full h-6 rounded-xl bg-gradient-to-r from-green-500 to-green-300 relative">
                  <div :class="` c absolute h-7 aspect-square bg-green-800  top-1/2 -translate-y-1/2  rounded-full`"></div>
                </div>
               
              </div>
             
      
              </div>
              <div class="w-full   flex flex-wrap items-center gap-4 justify-center">
                  <div class=" rounded-lg p-4 flex flex-col gap-2 justify-center items-center  shadow-xl w-52 bg-[#cfd5db]">
                      <div class="w-full  flex justify-end ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>                     
                   </div>  
                             
                      <div class="w-full font-light p-2 text-2xl text-center">Investment return</div>           
                      <div class="w-full font-roboto p-2 text-center text-xl transition-all duration-300 text-green-500 ">$ {{ employees>=100?1283:1219}} %</div>           
                  </div>
                  <div class=" rounded-lg p-4 flex flex-col gap-2 justify-center items-center  shadow-xl w-52 bg-[#cfd5db]">
                     <div class="w-full  flex justify-end ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                      </div>
                     <div class="w-full font-light p-2 text-2xl text-center">You save per year</div>
                     <div class="w-full font-roboto p-2 text-center text-xl transition-all duration-300 ">$ {{ employees* save}}</div>
                  </div>
                  <div class=" rounded-lg p-4 flex flex-col gap-2 justify-center items-center  shadow-xl w-52 bg-[#cfd5db]">
                       <div class="w-full  flex justify-end ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                       </div>
                       <div class="w-full font-light p-2 text-2xl text-center">HeyTaco per year</div>
                       <div class="w-full font-roboto p-2 text-center text-xl transition-all duration-300 ">$ {{ employees* HeyTaco}}</div>
                  </div>
                </div>
                <div class="w-full flex justify-start gap-2 p-4">
                  Based on estimated <span class="font-bold ">$ {{ employees>=100?(1283+employees*HeyTaco+employees*save):(1219+employees*HeyTaco+employees*save)}}</span> staff turnover cost  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
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
import {ref,onMounted,watch} from 'vue'
import {gsap} from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import ScrollTrigger from "gsap/ScrollTrigger";
let tacos = ref("Tacos received");
let show=ref(false);
let treaders=ref([]);
let employees=ref(0);
let bar=ref(0);
let loaded=ref(false);
let investement=ref(1219);
let save=ref(473);
let HeyTaco=ref(36);

  gsap.registerPlugin(CSSPlugin);
  gsap.registerPlugin(ScrollTrigger);


watch(employees,()=>{
  bar.value=(employees.value/1060)*100;
  gsap.to('.c',0.4,{
    left:bar.value+"%",

  })

 
})
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
  },];
  /********** */

 /******* */
loaded.value=true;
let allSections= document.querySelectorAll('section');
for(let i=0 ;i<allSections.length;i++) {
  let section=allSections[i];
if(i%2==0) gsap.set(section,{xPercent:100})
else gsap.set(section,{xPercent:-100})

gsap.to(section,.5, {
    xPercent:0,
  scrollTrigger: {
      trigger: section,
      /* pin: true, */   // pin the trigger element while active
      start: "top bottom", // when the top of the trigger hits the top of the viewport
      end: "top top ", // end after scrolling 500px beyond the start
      scrub: 0.2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    /*   markers:true, */
      
     /*  snap: {
        snapTo: "labels", // snap to the closest label in the timeline
        duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
      } */
    }
  })

}
})
let inputing=()=>{employees.value=(employees.value>1000)?1000:employees.value;}
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
