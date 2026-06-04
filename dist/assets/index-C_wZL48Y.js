(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{h(),x(),B(),$()});function h(){m(),f(),y()}function m(){const e=document.getElementById("alumni-stories");if(!e)return;const a=[{id:"kishan",name:"Kishan Yadav",avatar:"assets/alumni_kishan.png",before:"Data Analyst",after:"Data Engineer<br>@ Microsoft",salaryBefore:"&#8377;4.5 LPA",salaryAfter:"&#8377;12 LPA",growth:"+167% Salary Growth",company:k()},{id:"aditya",name:"Aditya Sharma",avatar:"assets/alumni_aditya.png",before:"SQL Developer",after:"Data Engineer<br>@ Databricks",salaryBefore:"&#8377;6 LPA",salaryAfter:"&#8377;14 LPA",growth:"+133% Salary Growth",company:E()},{id:"rahul",name:"Rahul Verma",avatar:"assets/alumni_rahul.png",before:"Support Engineer",after:"Data Engineer<br>@ AWS",salaryBefore:"&#8377;5 LPA",salaryAfter:"&#8377;11.5 LPA",growth:"+130% Salary Growth",company:S()},{id:"sarthak",name:"Sarthak Pandey",avatar:"assets/alumni_sarthak.png",before:"ETL Developer",after:"Data Engineer<br>@ Cognizant",salaryBefore:"&#8377;5.2 LPA",salaryAfter:"&#8377;13 LPA",growth:"+150% Salary Growth",company:L()},{id:"tanya",name:"Tanya Goel",avatar:"assets/alumni_tanya.png",before:"Systems Engineer",after:"Data Engineer<br>@ Accenture",salaryBefore:"&#8377;5.8 LPA",salaryAfter:"&#8377;13.5 LPA",growth:"+133% Salary Growth",company:A()}];e.innerHTML=`
    <div class="container">
      <div class="section-header compact-reference-header">
        <div class="section-header-left">
          <h2 class="section-title">Career Transitions That Speak for Themselves</h2>
          <p class="section-subtitle">Real learners. Real salary growth. Real Data Engineering roles.</p>
        </div>
        <a href="#" class="section-link reference-purple-link">
          View all success stories
          ${c()}
        </a>
      </div>

      <div class="carousel-wrapper reference-carousel-wrapper">
        <button class="carousel-arrow arrow-left" data-carousel="stories-track" data-dir="-1" aria-label="Scroll left">
          ${d()}
        </button>
        <div class="carousel-track career-track" id="stories-track">
          ${a.map(g).join("")}
        </div>
        <button class="carousel-arrow arrow-right" data-carousel="stories-track" data-dir="1" aria-label="Scroll right">
          ${u()}
        </button>
      </div>
    </div>
  `}function g(e){return`
    <article class="career-card" id="career-${e.id}">
      <div class="career-card-top">
        <div class="career-avatar">
          <img src="${e.avatar}" alt="${e.name}">
        </div>
        <div class="career-company">
          ${e.company}
          <span class="career-role-badge">Data Engineer</span>
          <h3>${e.name}</h3>
        </div>
        <span class="career-linkedin">${p()}</span>
      </div>

      <div class="career-path">
        <div>
          <span class="career-label before">BEFORE</span>
          <p>${e.before}</p>
        </div>
        <span class="career-path-arrow">${c()}</span>
        <div>
          <span class="career-label after">AFTER</span>
          <p>${e.after}</p>
        </div>
      </div>

      <div class="salary-block">
        <span class="salary-title">SALARY GROWTH</span>
        <div class="salary-row">
          <strong>${e.salaryBefore}</strong>
          <span>&rarr;</span>
          <strong>${e.salaryAfter}</strong>
        </div>
        <div class="growth-pill">
          <span>&#8599;</span> ${e.growth}
        </div>
      </div>

      <a href="#" class="profile-link">View LinkedIn Profile ${c()}</a>
    </article>
  `}function f(){const e=document.getElementById("trustpilot-section");if(!e||document.getElementById("program-reviews"))return;const a=[{name:"Sarthak Pandey",role:"Data Engineer @ Cognizant",avatar:"assets/alumni_sarthak.png",text:"The curriculum is top-notch and the mentors are highly supportive. The projects helped me gain confidence and transition into Data Engineering."},{name:"Kriti Sharma",role:"Data Engineer @ TCS",avatar:"assets/alumni_tanya.png",text:"Great learning experience! The hands-on projects and real-world examples made complex topics easy to understand."},{name:"Vikas Kumar",role:"ETL Developer @ Infosys",avatar:"assets/alumni_rahul.png",text:"Prepzee's program is well structured and industry aligned. The interview preparation and mock sessions were extremely helpful."},{name:"Pooja Mehta",role:"Data Engineer @ Deloitte",avatar:"assets/alumni_tanya.png",text:"I loved the practical approach of the course. The mentors guided me at every step and helped me achieve my career goals."},{name:"Arjun N.",role:"Data Engineer @ Microsoft",avatar:"assets/alumni_kishan.png",text:"The mentorship, assignments, and mock interviews gave me a clear path from learning to landing a data engineering role."}],t=document.createElement("section");t.className="program-reviews-section reveal",t.id="program-reviews",t.innerHTML=`
    <div class="container">
      <div class="section-header compact-reference-header numbered-header">
        <div class="section-header-left numbered-header-left">
          <span class="section-index-badge">06</span>
          <div>
            <h2 class="section-title">Program Reviews</h2>
            <p class="section-subtitle">Said by learners. Backed by real experiences.</p>
          </div>
        </div>
        <a href="#" class="section-link reference-purple-link">
          View More Reviews
          ${c()}
        </a>
      </div>

      <div class="carousel-wrapper reference-carousel-wrapper">
        <button class="carousel-arrow arrow-left" data-carousel="program-reviews-track" data-dir="-1" aria-label="Scroll left">
          ${d()}
        </button>
        <div class="carousel-track program-reviews-track" id="program-reviews-track">
          ${a.map(w).join("")}
        </div>
        <button class="carousel-arrow arrow-right" data-carousel="program-reviews-track" data-dir="1" aria-label="Scroll right">
          ${u()}
        </button>
      </div>
    </div>
  `,e.before(t)}function w(e){return`
    <article class="program-review-card">
      <div class="program-review-head">
        <img src="${e.avatar}" alt="${e.name}">
        <div>
          <h3>${e.name}</h3>
          <p>${e.role}</p>
        </div>
        <span class="program-linkedin">${p()}</span>
      </div>
      <div class="review-stars" aria-label="5 star rating">
        ${b().repeat(5)}
      </div>
      <p class="program-review-text">${e.text}</p>
    </article>
  `}function y(){const e=document.getElementById("video-testimonials");if(!e)return;const a=e.querySelector(".section-title"),t=e.querySelector(".section-subtitle"),o=e.querySelector(".section-link");a&&(a.innerHTML="Voices Of Our Learners"),t&&(t.textContent="Hear directly from our learners about their journey with Prepzee."),o&&(o.innerHTML=`View all videos ${c()}`)}function c(){return`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  `}function d(){return`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  `}function u(){return`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  `}function p(){return`
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  `}function b(){return`
    <span>
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.8l2.72 5.52 6.08.88-4.4 4.28 1.04 6.05L12 16.67 6.56 19.53l1.04-6.05L3.2 9.2l6.08-.88L12 2.8z" />
      </svg>
    </span>
  `}function k(){return`
    <div class="career-logo microsoft">
      <svg viewBox="0 0 21 21" aria-hidden="true">
        <rect x="1" y="1" width="9" height="9" fill="#F25022" />
        <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
        <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
        <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
      </svg>
      <span>Microsoft</span>
    </div>
  `}function E(){return`
    <div class="career-logo databricks">
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF3621" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3 3.5 7.6 12 12.2l8.5-4.6L12 3z" />
        <path d="M3.5 11.2 12 15.8l8.5-4.6" />
        <path d="M3.5 14.8 12 19.4l8.5-4.6" />
      </svg>
      <span>databricks</span>
    </div>
  `}function S(){return`
    <div class="career-logo aws">
      <span>aws</span>
      <svg viewBox="0 0 80 26" aria-hidden="true">
        <path d="M18 19.5c11 5.4 28.2 5.6 41 0" fill="none" stroke="#FF9900" stroke-width="3" stroke-linecap="round" />
        <path d="M55 17.2l7.6.9-4.4 5.9" fill="none" stroke="#FF9900" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  `}function L(){return`
    <div class="career-logo cognizant">
      <span>cognizant</span>
    </div>
  `}function A(){return`
    <div class="career-logo accenture">
      <span>accenture</span><b>&gt;</b>
    </div>
  `}function x(){document.querySelectorAll(".carousel-arrow").forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-carousel"),o=parseInt(a.getAttribute("data-dir"),10),r=document.getElementById(t);if(!r)return;const n=r.querySelector(":scope > *");if(!n)return;const s=getComputedStyle(r),i=parseInt(s.gap,10)||20,l=(n.offsetWidth+i)*o;r.scrollBy({left:l,behavior:"smooth"})})})}function B(){const e=document.querySelectorAll(".reveal");if(!e.length)return;const a=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&(o.target.classList.add("revealed"),a.unobserve(o.target))})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});e.forEach(t=>a.observe(t))}function $(){const e=document.querySelectorAll(".video-card"),a=document.getElementById("video-modal"),t=document.getElementById("video-modal-overlay"),o=document.getElementById("video-modal-close"),r=document.getElementById("video-modal-iframe");if(!a||!r)return;const n={"video-sneha":"https://www.youtube.com/embed/PjES0Zf1Fuk","video-rohit":"https://www.youtube.com/embed/1vRzT1pZ_yY","video-ankit":"https://www.youtube.com/embed/jZ_y0d7FwF0","video-pranav":"https://www.youtube.com/embed/v935K7j0_w0","video-tanya":"https://www.youtube.com/embed/PjES0Zf1Fuk","video-amit":"https://www.youtube.com/embed/v935K7j0_w0","video-kishan":"https://www.youtube.com/embed/PjES0Zf1Fuk","video-aditya":"https://www.youtube.com/embed/1vRzT1pZ_yY","video-sarthak":"https://www.youtube.com/embed/jZ_y0d7FwF0"};e.forEach(i=>{i.addEventListener("click",()=>{const l=i.id,v=n[l]||"https://www.youtube.com/embed/dQw4w9WgXcQ";r.src=v+"?autoplay=1&rel=0",a.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"})});const s=()=>{a.setAttribute("aria-hidden","true"),r.src="",document.body.style.overflow=""};t.addEventListener("click",s),o.addEventListener("click",s),document.addEventListener("keydown",i=>{i.key==="Escape"&&a.getAttribute("aria-hidden")==="false"&&s()})}
