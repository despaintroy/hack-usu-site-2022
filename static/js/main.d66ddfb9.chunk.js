(this["webpackJsonphack-usu-site-2022"]=this["webpackJsonphack-usu-site-2022"]||[]).push([[0],{27:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);a(27);var s=a(1),n=a.n(s),i=a(16),r=a.n(i),c=a(45),o=a(40),l=a(44),d=a(0),h=function(){return Object(d.jsx)(c.a,{bg:"primary",variant:"dark",className:"navigation",fixed:"top",collapseOnSelect:!0,expand:"md",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(c.a.Brand,{href:"#top",children:"HackUSU 2022"}),Object(d.jsx)(c.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(c.a.Collapse,{id:"responsive-navbar-nav",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Link,{href:"#registration",children:"Register"}),Object(d.jsx)(l.a.Link,{href:"#about",children:"About"}),Object(d.jsx)(l.a.Link,{href:"#categories",children:"Categories"}),Object(d.jsx)(l.a.Link,{href:"#location",children:"Location"}),Object(d.jsx)(l.a.Link,{href:"#faq",children:"FAQ"}),Object(d.jsx)(l.a.Link,{href:"#schedule",children:"Schedule"}),Object(d.jsx)(l.a.Link,{href:"#contact",children:"Contact"})]})})]})})},j=function(e){var t=e.text,a=e.subtext,s=e.light;return Object(d.jsxs)("div",{className:"subheader ".concat(s&&"light"),children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:a}),Object(d.jsx)("hr",{})]})},m=function(){return Object(d.jsx)("div",{className:"about py-5",id:"about",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(j,{text:"What is Hack USU?",subtext:"HackUSU is an annual 24-hr team coding competition with workshops, free food, and more!"}),Object(d.jsxs)("div",{className:"feature-container",children:[Object(d.jsxs)("div",{className:"feature-container",children:[Object(d.jsxs)("div",{className:"feature",children:[Object(d.jsx)("span",{className:"material-icons icon",children:"schedule"}),Object(d.jsx)("h3",{children:"24-hr Hackathon"}),Object(d.jsx)("p",{children:"Build a software or hardware project to compete against other teams. All college students and high school seniors are invited!"})]}),Object(d.jsxs)("div",{className:"feature",children:[Object(d.jsx)("span",{className:"material-icons icon",children:"school"}),Object(d.jsx)("h3",{children:"Workshops"}),Object(d.jsx)("p",{children:"We'll have many great workshops and tech talks on a variety of topics. Check back closer to the event for a complete list!"})]})]}),Object(d.jsxs)("div",{className:"feature-container",children:[Object(d.jsxs)("div",{className:"feature",children:[Object(d.jsx)("span",{className:"material-icons icon",children:"work_outline"}),Object(d.jsx)("h3",{children:"Networking"}),Object(d.jsx)("p",{children:"Come network with our sponsors and potential employers. There will be many industry experts to learn from and learn more about their companies!"})]}),Object(d.jsxs)("div",{className:"feature",children:[Object(d.jsx)("span",{className:"material-icons icon",children:"restaurant"}),Object(d.jsx)("h3",{children:"Free Food"}),Object(d.jsx)("p",{children:"We'll provide dinner on Friday, and breakfast, lunch, and dinner on Saturday. There will also be plenty of snacks available the entire event!"})]})]})]})]})})},u=[{title:"Data Analytics & Visualization",materialIcon:"insights",description:"Demonstrate ways of gaining insights or displaying data in a creative way",ideas:["Create an interactive visualization of one of the datasets on www.data.gov","Show a real-time stock market tracker"]},{title:"Game Development",materialIcon:"sports_esports",description:"Any game. Any technology.",ideas:["Rewrite a simple classic game to have multi-player web functionality"]},{title:"Privacy & Security",materialIcon:"lock",description:"Demonstrate improvements to user privacy, authentication methods, or system security.",ideas:["Design a more secure user authentication system","Create a tool to help users test their passwords' strength","Write a program that tests people's ability to avoid phishing emails"]},{title:"Hardware",materialIcon:"precision_manufacturing",description:"All projects focused on physical hardware.",ideas:[]},{title:"AI & Machine Learning",materialIcon:"lightbulb",description:"Show us how your program learns to solve a problem!",ideas:[]},{title:"Health & Fitness",materialIcon:"fitness_center",description:"All projects related to healthcare or personal fitness",ideas:[]},{title:"General",materialIcon:"code",description:"Projects that don't fit the other categories!",ideas:["Weather app that displays weather info from a free API","Budgeting app for planning and tracking spending"]}],b=function(){return Object(d.jsx)("div",{className:"categories py-5",id:"categories",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(j,{text:"Prize Categories",subtext:"You can start thinking of project ideas before the event, or brainstorm with a team after arriving!"}),Object(d.jsx)("div",{className:"tile-container",children:u.map((function(e){return t=e,Object(d.jsxs)("div",{className:"category-tile rounded",children:[Object(d.jsx)("span",{className:"material-icons icon",children:t.materialIcon}),Object(d.jsx)("div",{className:"title",children:t.title}),Object(d.jsx)("div",{className:"description",children:t.description})]},t.title);var t}))})]})})},p=a(41),x="https://hackusu2022.eventbrite.com/?aff=hackusu",f=new Date("03/18/2022 4:00 PM"),g="https://discord.gg/DpjrzqBwq5",O="hackusu@aggies.usu.edu",v=function(){return Object(d.jsx)("div",{className:"contact bg-primary py-5",id:"contact",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(j,{text:"Contact",subtext:"Have a question or want to work with us? Let us know!",light:!0}),Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsx)(p.a,{variant:"light",href:"mailto:".concat(O),children:O}),Object(d.jsx)("p",{className:"mt-3 mb-2",children:"\u2013 or \u2013"}),Object(d.jsx)("a",{href:g,target:"_blank",rel:"noreferrer",className:"text-light",children:"Ask us on Discord"})]})]})})},w=a(21),k=function(e){var t=e.title,a=e.children,n=Object(s.useState)(!1),i=Object(w.a)(n,2),r=i[0],c=i[1];return Object(d.jsxs)("div",{className:"disclosure",children:[Object(d.jsx)("div",{className:"title",onClick:function(){return c((function(e){return!e}))},children:t}),r&&Object(d.jsx)("div",{className:"content",children:a})]})},y=[{question:"Can I start now?",answer:"You can't use any code that was written before the start of the hackathon. However, you can begin thinking of ideas and forming teams now!"},{question:"What is the max team size?",answer:"You may have up to 4 students on your team"},{question:"Who can attend HackUSU?",answer:"All university or college students and high school seniors are welcome! Participants must be current students or have graduated in the last 12 months. There is no restriction on major."},{question:"How does judging work?",answer:"All teams will submit a short video of their project on completion. The top teams from each category will present their project in front of judges before final selections are made. Winners will be announced at the award ceremony following the event."},{question:"Does it cost anything to attend?",answer:"HackUSU is completely free! There's no entry fee, and we'll provide enough food and snacks for the entire 24 hours. How neat is that?"}],N=function(){return Object(d.jsx)("div",{className:"faq py-5",id:"faq",children:Object(d.jsxs)(o.a,{className:"narrow",children:[Object(d.jsx)(j,{text:"FAQ"}),y.map((function(e,t){return Object(d.jsx)(k,{title:e.question,children:e.answer},t)})),Object(d.jsxs)("p",{className:"mt-4 text-center",children:["Have another question?"," ",Object(d.jsx)("a",{href:g,target:"_blank",rel:"noreferrer",children:"Ask us on discord"}),", or email us at"," ",Object(d.jsx)("a",{href:"mailto:".concat(O),children:O}),"."]})]})})},H=function(){return Object(d.jsx)("div",{className:"footer py-5",children:Object(d.jsxs)(o.a,{className:"text-center",children:[Object(d.jsx)(p.a,{variant:"success fw-bold text-uppercase",className:"m-2",href:x,target:"_blank",onClick:function(){return gtag("event","sign_up",{method:"Google"})},children:"Register for Free"}),Object(d.jsx)(p.a,{className:"m-2",variant:"success fw-bold text-uppercase",href:g,target:"_blank",children:"Join Discord"})]})})},S=function(){return Object(d.jsx)("div",{className:"lead",children:Object(d.jsxs)(o.a,{className:"content",children:[Object(d.jsx)("img",{className:"lead-logo",src:"".concat("https://www.hackusu.com","/lead-images/logo-curves.svg")}),Object(d.jsxs)("div",{className:"date",children:["March ",Object(d.jsx)("span",{className:"text-nowrap",children:"18-19"}),", 2022"]})]})})},U=a(42),C=a(43),T=function(){return Object(d.jsxs)("div",{className:"location pb-5 mt-5 bg-primary",id:"location",children:[Object(d.jsx)("img",{src:"https://www.hackusu.com/huntsman-hall-entrance.jpg",className:"hh-banner"}),Object(d.jsxs)(o.a,{children:[Object(d.jsx)(j,{text:"Location",subtext:"HackUSU 2022 will be hosted at Huntsman Hall, Utah State University Campus",light:!0}),Object(d.jsxs)(U.a,{children:[Object(d.jsxs)(C.a,{sm:!0,className:"mb-5",children:[Object(d.jsx)("h3",{children:"Huntsman Hall"}),Object(d.jsx)("p",{children:"Huntsman Hall is located at the intersection of highway 89 (E 400 N) and Champ Drive in Logan, UT."}),Object(d.jsx)("p",{children:"Check in will be at the North entrance."}),Object(d.jsx)(p.a,{variant:"light",href:"https://www.google.com/maps/place/USU+Huntsman+Hall+Building+(HH)/@41.7404617,-111.8104557,18.3z/data=!4m5!3m4!1s0x87547e7de4d0e4b1:0xc88fd9fc64697ebb!8m2!3d41.7406755!4d-111.8099186",target:"_blank",children:"Open in Google Maps \xa0\u2192"})]}),Object(d.jsxs)(C.a,{sm:!0,children:[Object(d.jsx)("h3",{children:"Parking"}),Object(d.jsx)("p",{children:"Overnight parking for individual vehicles and busses will be available at HackUSU. We will provide additional details closer to the event."})]})]})]})]})},A=function(){var e=6e4,t=36e5,a=24*t,s=Math.max(0,f.getTime()-(new Date).getTime());return{days:Math.floor(s/a),hours:Math.floor(s%a/t),minutes:Math.floor(s%t/e),seconds:Math.floor(s%e/1e3)}},D=function(){var e=n.a.useState(A()),t=Object(w.a)(e,2),a=t[0],i=t[1];return Object(s.useEffect)((function(){var e=setInterval((function(){return i(A())}),1e3);return function(){return clearInterval(e)}}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"registration bg-primary py-5",id:"registration",children:Object(d.jsxs)(o.a,{children:[Object(d.jsxs)("p",{className:"countdown",children:[Object(d.jsx)("span",{children:"\u2013 Starting \u2013"}),Object(d.jsx)("br",{}),a.days," d. ",a.hours," h. ",a.minutes," m."," ",a.seconds," s."]}),Object(d.jsx)(p.a,{variant:"success fw-bold text-uppercase",size:"lg",className:"mt-4 px-5",href:x,target:"_blank",onClick:function(){return gtag("event","sign_up",{method:"Google"})},children:"Register for Free"}),Object(d.jsx)("br",{}),Object(d.jsx)(p.a,{variant:"light",className:"mt-3",href:g,target:"_blank",children:"Join Discord"})]})})})},I=[{time:"3:00 pm",title:"Check-in Opens",location:"Huntsman Hall North Entrance",details:Object(d.jsxs)(d.Fragment,{children:["Check-in will be available from 3:00 to midnight. Come pick-up your HackUSU swag, and"," ",Object(d.jsx)("a",{href:g,target:"_blank",rel:"noreferrer",children:"join the Discord!"})]})},{time:"4:00 - 5:00 pm",title:"Opening Keynote",location:"USU Conference Center",details:"The keynote and opening ceremonies will also be broadcast to overflow rooms in Huntsman Hall. Hang out afterward if you still need to find a team!"},{time:"5:00 pm",title:"Start coding!",details:"Groups can work in any study rooms, and 1st and 2nd floor classrooms."},{time:"6:00 pm",title:"Dinner",location:"2nd floor"},{time:"8:00 - 10:00 pm",title:"Tech Talks & Workshops",location:"3rd floor classrooms",details:"Topics to be announced."},{time:"Midnight",title:"Aggie Ice Cream",location:"2nd floor"}],_=[{time:"8:00 am",title:"Breakfast",location:"2nd floor"},{time:"9:00 am - Noon",title:"Tech Talks & Workshops",location:"3rd floor classrooms",details:"Topics to be announced."},{time:"Noon",title:"Lunch",location:"2nd floor"},{time:"3:30 pm",title:"Coding ends!",details:"Submit your final code before 3:30, and your video demo before 4:00."},{time:"4:00 - 6:00 pm",title:"Dinner and Networking",location:"1st & 2nd floors",details:"Grab pizza on the 1st floor, then head upstairs to network with our sponsor companies. Bring your resume!"},{time:"5:00 - 6:00 pm",title:"Judging for finalists",location:"3rd floor classrooms",details:"Finalists for each category are invited to present for judges. Anyone can come watch!"},{time:"6:30 pm",title:"Award Ceremony",location:"4th floor (Perry Pavilion)",details:"Winners are announced for each category, and there will be a raffle drawing for everyone!"}],L=function(){var e=function(e){return Object(d.jsx)("div",{className:"schedule-list",children:e.map((function(e,t){return Object(d.jsxs)("div",{className:"schedule-item",children:[Object(d.jsx)("div",{className:"time",children:e.time}),Object(d.jsx)("div",{className:"title",children:e.title}),Object(d.jsx)("div",{className:"location",children:e.location}),Object(d.jsx)("div",{className:"details",children:e.details})]},t)}))})};return Object(d.jsx)("div",{className:"schedule py-5",id:"schedule",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(j,{text:"Schedule",subtext:"Tenative schedule is subject to change. Check back closer to the event for details on tech talks and workshops!"}),Object(d.jsxs)(U.a,{children:[Object(d.jsxs)(C.a,{md:!0,className:"mb-5",children:[Object(d.jsxs)("h3",{children:["Friday, March 18",Object(d.jsx)("sup",{children:"th"})]}),e(I)]}),Object(d.jsxs)(C.a,{md:!0,children:[Object(d.jsxs)("h3",{children:["Saturday, March 19",Object(d.jsx)("sup",{children:"th"})]}),e(_)]})]})]})})},M=a(46),W=[{name:"Lightning Kite",fileName:"lightning-kite.svg",url:"https://lightningkite.com/"},{name:"XMission",fileName:"xmission.png",url:"https://xmission.com/"},{name:"USU College of Science",fileName:"college-of-science.png",url:"https://cs.usu.edu/"},{name:"USU Huntsman School of Engineering",fileName:"huntsman-school.jpg",url:"https://huntsman.usu.edu/"}],q=function(){return console.log(W),Object(d.jsx)("div",{className:"sponsors py-5",id:"sponsors",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(j,{text:"Sponsors",subtext:"Thanks to the amazing companies and organizations who sponsor HackUSU!"}),Object(d.jsx)("div",{className:"sponsors-list",children:W.map((function(e,t){return Object(d.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{src:"https://www.hackusu.com/sponsors/"+e.fileName})},t)}))}),Object(d.jsxs)(M.a,{variant:"primary",className:"mb-5",children:[Object(d.jsx)(M.a.Heading,{children:"Want to sponsor us?"}),"To discuss sponsorship options, please contact us at"," ",Object(d.jsx)("a",{href:"mailto:".concat(O),children:O}),". Thank you for your interest!"]})]})})},F=function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(h,{}),Object(d.jsx)(S,{}),Object(d.jsx)(D,{}),Object(d.jsx)(m,{}),Object(d.jsx)(b,{}),Object(d.jsx)(T,{}),Object(d.jsx)(N,{}),Object(d.jsx)(L,{}),Object(d.jsx)(v,{}),Object(d.jsx)(q,{}),Object(d.jsx)(H,{})]})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d66ddfb9.chunk.js.map