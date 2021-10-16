(this["webpackJsonphack-usu-site-2022"]=this["webpackJsonphack-usu-site-2022"]||[]).push([[0],{10:function(e,t,s){},15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);s(10);var a=s(1),c=s.n(a),n=s(8),i=s.n(n),r=(s(15),s(18)),l=s(0);var o=function(e){var t=e.text,s=e.subtext,a=e.light;return Object(l.jsxs)("div",{className:"subheader ".concat(a&&"light"),children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:s}),Object(l.jsx)("hr",{})]})};var j=function(){return Object(l.jsx)("div",{className:"categories py-5",children:Object(l.jsxs)(r.a,{className:"narrow",children:[Object(l.jsx)(o,{text:"Prze Categories"}),Object(l.jsx)("p",{className:"fs-5",children:"You can start thinking of project ideas before the event, or brainstorm with a team after arriving. We'll ask you to choose one category to enter your project in."}),Object(l.jsx)("div",{className:"tile-container",children:["General","Game Development","Hardware","AI & Machine Learning"].map((function(e){return t=e,Object(l.jsx)("div",{className:"category-tile",children:t});var t}))})]})})};var h=function(){return Object(l.jsx)("div",{className:"contact bg-primary py-5",children:Object(l.jsx)(r.a,{children:Object(l.jsx)(o,{text:"Contact",subtext:"Have a question? Send us a message!",light:!0})})})},d=s(9);var b=function(e){var t=e.title,s=e.children,c=Object(a.useState)(!1),n=Object(d.a)(c,2),i=n[0],r=n[1];return Object(l.jsxs)("div",{className:"disclosure",children:[Object(l.jsx)("div",{className:"title",onClick:function(){return r((function(e){return!e}))},children:t}),i&&Object(l.jsx)("div",{className:"content",children:s})]})},u=[{question:"Can I start now?",answer:"You can't use any code that was written before the start of the hackathon. However, we encourage you to begin thinking of ideas now!"},{question:"Who can attend HackUSU?",answer:"Students from all schools are welcome! You must currently be a university or college student, or have graduated in the last 12 months. There is no restriction on major."},{question:"Does it cost anything to attend?",answer:"HackUSU is completely free! There's no entry fee, and we'll provide enough food and snacks for the entire 24 hours. How neat is that?"}];var m=function(){return Object(l.jsx)("div",{className:"faq py-5",children:Object(l.jsxs)(r.a,{className:"narrow",children:[Object(l.jsx)(o,{text:"FAQ"}),u.map((function(e,t){return Object(l.jsx)(b,{title:e.question,children:e.answer},t)}))]})})};var x=function(){return Object(l.jsx)("div",{className:"footer py-5",children:Object(l.jsx)(r.a,{})})},O=s(21);var p=function(){return Object(l.jsx)("div",{className:"bg-primary full-height lead",children:Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Hack USU"}),Object(l.jsxs)("div",{className:"date",children:["March 25\u201326",Object(l.jsx)("br",{}),"2022"]}),Object(l.jsx)(O.a,{variant:"success fw-bold text-uppercase",size:"lg",className:"mt-5 px-5",onClick:function(){return alert("Registration not yet open")},children:"Register"}),Object(l.jsx)("br",{}),Object(l.jsx)(O.a,{variant:"outline-light",className:"mt-5",onClick:function(){return alert("Registration not yet open")},children:"Join Slack"})]})})})},v=s(19),f=s(20);var g=function(){return Object(l.jsx)("div",{className:"location py-5 bg-primary",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(o,{text:"Location",subtext:"HackUSU 2022 will be hosted at Huntsman Hall, Utah State University Campus",light:!0}),Object(l.jsx)("img",{src:"/hack-usu-site-2022/huntsman-hall.jpg",className:"hh-banner"}),Object(l.jsxs)(v.a,{children:[Object(l.jsx)(f.a,{sm:!0,className:"mb-4",children:Object(l.jsx)("div",{className:"placeholder map w-100",children:"Campus map around Huntsman Hall with marked parking areas"})}),Object(l.jsxs)(f.a,{sm:!0,children:[Object(l.jsx)("h3",{children:"Huntsman Hall"}),Object(l.jsx)(O.a,{variant:"light",href:"https://www.google.com/maps/place/USU+Huntsman+Hall+Building+(HH)/@41.7404617,-111.8104557,18.3z/data=!4m5!3m4!1s0x87547e7de4d0e4b1:0xc88fd9fc64697ebb!8m2!3d41.7406755!4d-111.8099186",target:"_blank",children:"Open in Google Maps \xa0\u2192"}),Object(l.jsx)("h3",{className:"mt-5",children:"Parking"}),Object(l.jsx)("p",{children:"Parking is available after 5:00pm in any of the areas marked on the map."})]})]})]})})},k=[{time:"3:00 - 4:00 pm",title:"Registration and check-in",location:"Courtyard"},{time:"4:00 - 5:00 pm",title:"Opening",location:"Auditorium (EBB 225)"},{time:"6:00 - 7:00 pm",title:"Dinner",location:"Courtyard"},{time:"8:00 - 9:00 pm",title:"Workshop",location:"HH 122"},{time:"...",title:"...",location:"..."}],y=[{time:"12:00 am",title:"Midnight snacks",location:"HH first floor lobby"},{time:"8:00 - 9:00 pm",title:"Workshop",location:"HH 122"},{time:"...",title:"...",location:"..."}];var N=function(){var e=function(e){return Object(l.jsx)("div",{className:"schedule-table",children:e.map((function(e,t){return Object(l.jsxs)("div",{className:"schedule-row",children:[Object(l.jsx)("div",{className:"time",children:e.time}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"title",children:e.title}),Object(l.jsx)("div",{className:"location",children:e.location})]})]},t)}))})};return Object(l.jsx)("div",{className:"schedule py-5",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(o,{text:"Schedule",subtext:"Tenative schedule for the 2022 HackUSU is subject to change"}),Object(l.jsxs)(v.a,{children:[Object(l.jsxs)(f.a,{md:!0,className:"mb-5",children:[Object(l.jsxs)("h3",{children:["Friday, March 25",Object(l.jsx)("sup",{children:"th"})]}),e(k)]}),Object(l.jsxs)(f.a,{md:!0,children:[Object(l.jsxs)("h3",{children:["Saturday, March 26",Object(l.jsx)("sup",{children:"th"})]}),e(y)]})]})]})})};var w=function(){return Object(l.jsx)("div",{className:"sponsors py-5",children:Object(l.jsx)(r.a,{children:Object(l.jsx)(o,{text:"Sponsors",subtext:"Thanks to the amazing companies who sponsor HackUSU!"})})})};var H=function(){return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(p,{}),Object(l.jsx)(N,{}),Object(l.jsx)(g,{}),Object(l.jsx)(m,{}),Object(l.jsx)(j,{}),Object(l.jsx)(h,{}),Object(l.jsx)(w,{}),Object(l.jsx)(x,{})]})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(H,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.83ee8fe8.chunk.js.map