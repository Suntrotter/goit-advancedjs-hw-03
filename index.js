import{S as m,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="46490288-24919c30ba7303f136305d546",g="https://pixabay.com/api/";function d(n){const o=new URLSearchParams({key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${g}?${o}`;return console.log("Fetching:",i),fetch(i).then(r=>{if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return r.json()})}let l;function y(n){return n.map(({webformatURL:i,largeImageURL:r,tags:e,likes:t,views:s,comments:p,downloads:f})=>`<li class='gallery-item'>
        <a class="gallery-link" href="${r}" >
		<img
			class="gallery-image"
			src="${i}"
			alt="${e}"
            width='358'
            height='200'
			/>
	</a>
    <ul class='img-info'>
    <li><p>Likes</p><p>${t}</p></li>
    <li><p>Views</p><p>${s}</p></li>
    <li><p>Comments</p><p>${p}</p></li>
    <li><p>Downloads</p><p>${f}</p></li>
    </ul>
</li>`).join("")}function L(){l=new m(".gallery-link",{captionDelay:250,captionsData:"alt"})}function P(){l&&l.refresh()}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");L();const S=document.querySelector(".form");S.addEventListener("submit",$);function $(n){n.preventDefault();const o=n.currentTarget,i=o.elements.search.value.trim();if(i===""){a.error({message:"Please enter a search term.",position:"topRight"});return}c.innerHTML="",u.style.display="block",d(i).then(r=>{if(r.total===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c.innerHTML=y(r.hits),P()}).catch(r=>{console.error("Fetch error:",r),a.error({message:"An error occurred. Please try again later.",position:"topRight"})}).finally(()=>{u.style.display="none",o.reset()})}
//# sourceMappingURL=index.js.map
